// CardFileDlg.cpp : implementation file
//

/*
  CardFile main dialog
  10/17/2007 by Data Management Systems

  This sample application is intended to demonstrate the methods
  used to integrate the AxLib library into a project. AxLib is
  part of dbAx and provides a convenient set of classes to use
  ActiveX Data Objects (ADO) in a Visual C++ environment. The
  application developer is spared the details of interfacing
  with COM and handling variant data types.

  Procedure Summary
  1. Include the AxLib source files in your project and add a
     reference to the AxLib.h file (typically in stdafx.h)

  2. In Project Properties/Linker/Input - add a references to
     Rpcrt4.lib in the "Additional Dependencies" field

  3. Derive application specific versions of the CAxRecordset
     and CAxCommand (if neeeded) classes and add the source
     files to the project. If the AxGen utility was used to
     create these files, they will have .hpp as the file
     extension.

  4. At application startup, typically the InitInstance method
     of the main application module, make a call to the global
     AxLib function dbAx::Init(). At program termination make
     a call to the dbAx::Term function to ensure all references
     to any open connections are propery closed.

  For a full discussion of how to use the AxLib library, please
  see the dbAx.chm help file which is included as part of the
  dbAx library group.
*/

#include "stdafx.h"
#include "CardFile.h"
#include "CardFileDlg.h"

#include "AccountDlg.h"
#include "ContactDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

using namespace dbAx;

// CAboutDlg dialog used for App About

class CAboutDlg : public CDialog
{
public:
	CAboutDlg();

// Dialog Data
	enum { IDD = IDD_ABOUTBOX };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

// Implementation
protected:
	DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
{
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialog)
END_MESSAGE_MAP()


// CCardFileDlg dialog




CCardFileDlg::CCardFileDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CCardFileDlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CCardFileDlg::DoDataExchange(CDataExchange* pDX)
{
  CDialog::DoDataExchange(pDX);
  DDX_Control(pDX, IDC_ACCOUNT_LIST, m_ctrlAccountList);
  DDX_Control(pDX, IDC_CONTACT_LIST, m_ctrlContactList);
}

BEGIN_MESSAGE_MAP(CCardFileDlg, CDialog)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
  ON_NOTIFY(LVN_ITEMCHANGED, IDC_ACCOUNT_LIST, &CCardFileDlg::OnItemChangedAccountList)
  ON_NOTIFY(LVN_ITEMCHANGED, IDC_CONTACT_LIST, &CCardFileDlg::OnItemChangedContactList)
  ON_BN_CLICKED(IDC_ADD_ACCOUNT, &CCardFileDlg::OnBnClickedAddAccount)
  ON_BN_CLICKED(IDC_EDIT_ACCOUNT, &CCardFileDlg::OnBnClickedEditAccount)
  ON_BN_CLICKED(IDC_DELETE_ACCOUNT, &CCardFileDlg::OnBnClickedDeleteAccount)
  ON_BN_CLICKED(IDC_ADD_CONTACT, &CCardFileDlg::OnBnClickedAddContact)
  ON_BN_CLICKED(IDC_EDIT_CONTACT, &CCardFileDlg::OnBnClickedEditContact)
  ON_BN_CLICKED(IDC_DELETE_CONTACT, &CCardFileDlg::OnBnClickedDeleteContact)
  ON_WM_CLOSE()
END_MESSAGE_MAP()


// CCardFileDlg message handlers

BOOL CCardFileDlg::OnInitDialog()
{
	CDialog::OnInitDialog();

	// Add "About..." menu item to system menu.

	// IDM_ABOUTBOX must be in the system command range.
	ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
	ASSERT(IDM_ABOUTBOX < 0xF000);

	CMenu* pSysMenu = GetSystemMenu(FALSE);
	if (pSysMenu != NULL)
	{
		CString strAboutMenu;
		strAboutMenu.LoadString(IDS_ABOUTBOX);
		if (!strAboutMenu.IsEmpty())
		{
			pSysMenu->AppendMenu(MF_SEPARATOR);
			pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
		}
	}

	// Set the icon for this dialog.  The framework does this automatically
	//  when the application's main window is not a dialog
	SetIcon(m_hIcon, TRUE);			// Set big icon
	SetIcon(m_hIcon, FALSE);		// Set small icon

	// TODO: Add extra initialization here
  if ( !ConnectToProvider() )
    return (FALSE);

//  if ( !OpenTables() )
  //  return ( FALSE );

  InitListColumns();
  BuildAccountList();

	return TRUE;  // return TRUE  unless you set the focus to a control
}


void CCardFileDlg::OnClose()
{
  //Closing of library objects is ensured as each object
  //goes out of scope, but doing a manual shutdown doesn’t hurt.

  try
  {
    if ( m_AccountSet._IsOpen() )
      m_AccountSet.Close();

    if ( m_ContactSet._IsOpen() )
      m_ContactSet.Close();

    m_Cn.Close();

    //Cleanup the AxLib library
    dbAx::Term();
  }
  catch ( CAxException *e )
  {
    MessageBox(e->m_szErrorDesc, _T("CardFile Message"), MB_OK);
    delete e;
  }

  CDialog::OnClose();
}

void CCardFileDlg::OnSysCommand(UINT nID, LPARAM lParam)
{
	if ((nID & 0xFFF0) == IDM_ABOUTBOX)
	{
		CAboutDlg dlgAbout;
		dlgAbout.DoModal();
	}
	else
	{
		CDialog::OnSysCommand(nID, lParam);
	}
}

// If you add a minimize button to your dialog, you will need the code below
//  to draw the icon.  For MFC applications using the document/view model,
//  this is automatically done for you by the framework.

void CCardFileDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this); // device context for painting

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// Center icon in client rectangle
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// Draw the icon
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialog::OnPaint();
	}
}

// The system calls this function to obtain the cursor to display while the user drags
//  the minimized window.
HCURSOR CCardFileDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}

void CCardFileDlg::OnItemChangedAccountList(NMHDR *pNMHDR, LRESULT *pResult)
{
  LPNMLISTVIEW pNMLV = reinterpret_cast<LPNMLISTVIEW>(pNMHDR);
  // TODO: Add your control notification handler code here
  *pResult = 0;

  if ( pNMLV->uNewState == 3 && !m_AccountSet._IsEmpty() )
  {
    m_AccountSet.AbsolutePosition(pNMLV->iItem + 1);
    BuildContactList();
  }
}


void CCardFileDlg::OnItemChangedContactList(NMHDR *pNMHDR, LRESULT *pResult)
{
  LPNMLISTVIEW pNMLV = reinterpret_cast<LPNMLISTVIEW>(pNMHDR);
  // TODO: Add your control notification handler code here
  *pResult = 0;

  if ( pNMLV->uNewState == 3 && !m_ContactSet._IsEmpty() )
    m_ContactSet.AbsolutePosition(pNMLV->iItem + 1);

}

BOOL CCardFileDlg::ConnectToProvider()
{
  //Connection string generated by AxGen. Change the settings as 
  //required for a particular environment
  CString szConnect = _T("Provider=SQLOLEDB.1;Persist Security Info=True;\
                          User ID=sa;Password=sunset;\
                          Data Source=(local)\\SQLEXPRESS;Initial Catalog=CardFile");

//All calls to the AxLib should be wrapped in a try / catch block
  try
  {
    //Call the global Init function from the AxLib library. This will
    //initialize COM and setup the library's connection collection.
    //Use the namespace identifier to avoid conflict with any other
    //init functions that may exist.
    dbAx::Init();

    //Create the connection object
    m_Cn.Create();

    //Create the Connection events object on the heap. We don't need
    //to worry with deleting the Events object since this is handled
    //internally by its Release function. When no longer needed, the
    //Events object deletes itself.
    m_Cn._SetConnectionEvents(new CCardFileEvents);

    //Set the cursor location and open the database connection
    m_Cn.CursorLocation(adUseClient);
    m_Cn.Open((LPCTSTR)szConnect);

    //Create the AccountSet, Recordset events, and Open
    //Note that options are set on the CAxRecordset object
    //before callint the Open method. In this instance,
    //the Create method must be called first. See the
    //note below regarding m_ContactSet.
    m_AccountSet.Create();
    m_AccountSet.CursorType(adOpenDynamic);
    m_AccountSet.CacheSize(50);
    m_AccountSet._SetRecordsetEvents(new CAccountSetEvents);
    m_AccountSet.Open(_T("Select * From Account"), &m_Cn);

    //Set the marshal options to minimize records returned to server
    //to only those that have been edited.
    m_AccountSet.MarshalOptions(adMarshalModifiedOnly);

    //Setup the command object that will execute the stored
    //procedure "get_Contacts" to match contact information
    //with the currently selected Account record.
    m_ContactCmd.Create();
    m_ContactCmd.ActiveConnection(&m_Cn);
    m_ContactCmd.CommandText(_T("[get_Contacts]"));
    m_ContactCmd.CommandType(adCmdStoredProc);
    m_ContactCmd.m_szAccntIDParam = _T("A");  //Initial dummy value

    //Open the Contact recordset based on the Contact Command object.
    //An open recordset may be updated by setting the associated command
    //object's parameter(s) and calling the recordset's Requery() method.
    //A recordset set opened directly can also use Requery. This has the
    //same effect as closing and reopening the recordset.
    //Note that since there are no calls to any of the recordset object's
    //methods prior to the Open statement, it unnecessary to make a call
    //to the Create method. This is handled automatically when opening
    //the recordset.
    m_ContactSet.Open(&m_ContactCmd, adOpenDynamic);
  }
  catch ( dbAx::CAxException *e )
  {
    MessageBox(e->m_szErrorDesc, _T("CardFile Message"), MB_OK);
    delete e;
    return (FALSE);
  }

  return (TRUE);
}

//Create the columns for the Account and Contact lists in
//the main dialog
void CCardFileDlg::InitListColumns()
{
	LV_COLUMN lvc;
	lvc.mask = LVCF_FMT | LVCF_WIDTH | LVCF_TEXT;
	lvc.fmt = LVCFMT_LEFT;
	lvc.cchTextMax = 64;
	CRect rc;
	int nCol = 0;

  m_ctrlAccountList.GetClientRect(&rc);
  lvc.cx = (int)(rc.right * 0.35);
	lvc.pszText = _T("Account");
  m_ctrlAccountList.InsertColumn(nCol++, &lvc);

  lvc.cx = (int)(rc.right * 0.65);
  lvc.pszText = _T("Name");
  m_ctrlAccountList.InsertColumn(nCol++, &lvc);

  //Setup columns in Contact list control
  nCol = 0;
  lvc.cx = (int)(rc.right * 0.25);
  lvc.pszText = _T("Name");
  m_ctrlContactList.InsertColumn(nCol++, &lvc);

  lvc.pszText = _T("Title");
  m_ctrlContactList.InsertColumn(nCol++, &lvc);

  lvc.pszText = _T("Phone");
  m_ctrlContactList.InsertColumn(nCol++, &lvc);

  lvc.pszText = _T("Email");
  m_ctrlContactList.InsertColumn(nCol++, &lvc);

 	m_ctrlAccountList.SetExtendedStyle(LVS_EX_FULLROWSELECT);
  m_ctrlContactList.SetExtendedStyle(LVS_EX_FULLROWSELECT);
}

//BuildAccountList will populate the Account list with all
//available records. This method is called on startup and 
//each time a new Account record is added, edited, or deleted
void CCardFileDlg::BuildAccountList()
{
  m_ctrlAccountList.DeleteAllItems();

  try
  {
    if ( m_AccountSet._IsEmpty() )
    {
      m_ctrlAccountList.InsertItem(0, _T("<< >>"));
      return;
    }

    m_ctrlAccountList.SetItemCount(m_AccountSet.RecordCount());
    int iItem = 0;

    m_AccountSet.MoveFirst();
    while ( !m_AccountSet.IsEOF() )
    {
      m_ctrlAccountList.InsertItem(iItem, m_AccountSet.m_szAccountID);
      m_ctrlAccountList.SetItemText(iItem, 1, m_AccountSet.m_szName);

      iItem++;
      m_AccountSet.MoveNext();
    }

    //Highlight the first item
    LV_ITEM lvi;
		lvi.mask = LVIF_TEXT;
		lvi.iItem = 0;
		lvi.iSubItem = 0;
	  lvi.stateMask = LVIS_SELECTED | LVIS_FOCUSED;
	  lvi.state = LVIS_SELECTED | LVIS_FOCUSED;
		lvi.pszText = (LPWSTR)(LPCTSTR)m_AccountSet.m_szAccountID;
		lvi.iImage = 0;
		lvi.iIndent = 0;
		lvi.cchTextMax = 50;

    m_AccountSet.MoveFirst();
    m_ctrlAccountList.SetItemState(lvi.iItem, &lvi);
  }
  catch ( dbAx::CAxException *e )
  {
    MessageBox(e->m_szErrorDesc, _T("CardFile Message"), MB_OK);
    delete e;
  }
}

//BuildContactList populates the contact list in response to
//a selection change in the Account list. It is also called
//each time a contact record is added, edited or deleted.
void CCardFileDlg::BuildContactList()
{
  m_ctrlContactList.DeleteAllItems();

  try
  {
    m_ContactCmd.m_szAccntIDParam = m_AccountSet.m_szAccountID;
    m_ContactSet.Requery();

    if ( m_ContactSet._IsEmpty() )
    {
      m_ctrlContactList.InsertItem(0, _T("<< >>"));
    }
    else
    {
      m_ctrlContactList.SetItemCount(m_ContactSet.RecordCount());
      int iItem = 0;
      m_ContactSet.MoveFirst();
      while ( !m_ContactSet.IsEOF() )
      {
        m_ctrlContactList.InsertItem(iItem, m_ContactSet.m_szName);
        m_ctrlContactList.SetItemText(iItem, 1, m_ContactSet.m_szTitle);
        m_ctrlContactList.SetItemText(iItem, 2, m_ContactSet.m_szPhone);
        m_ctrlContactList.SetItemText(iItem, 3, m_ContactSet.m_szEmail);

        iItem++;
        m_ContactSet.MoveNext();
      }
    }
  }
  catch ( dbAx::CAxException *e )
  {
    MessageBox(e->m_szErrorDesc, _T("CardFile Message"), MB_OK);
    delete e;
  }
}

//Display the Account dialog where a new account record is added
void CCardFileDlg::OnBnClickedAddAccount()
{
  CAccountDlg dlg(this);
  if ( dlg.DoModal() == IDOK )
    BuildAccountList();
}

//Display the Account dialog where the current record is edited
void CCardFileDlg::OnBnClickedEditAccount()
{
  CAccountDlg dlg(TRUE, this);
  if ( dlg.DoModal() == IDOK )
    BuildAccountList();
}

//Delete the current Account record. This method demonstrates the
//AxLib Execute procedure where an SQL statement can be issued
//directly to the data provider
void CCardFileDlg::OnBnClickedDeleteAccount()
{
  CString szMsg;
  szMsg.Format(_T("Delete %s?"), m_AccountSet.m_szAccountID);

  MessageBeep(MB_ICONEXCLAMATION);
  int Reply = AfxMessageBox(szMsg, MB_YESNO);

  try
  {
    if ( Reply == IDYES )
    {
      //Delete the current Account and all
      //related Contact information
      CString szExecStr;
      szExecStr.Format(_T("Delete From Contact Where AccountID = '%s'"),
        m_AccountSet.m_szAccountID);

      m_AccountSet.Delete();
      m_Cn.Execute(szExecStr);

      BuildAccountList();
    }
  }
  catch ( dbAx::CAxException *e )
  {
    MessageBox(e->m_szErrorDesc, _T("CardFile Message"), MB_OK);
    delete e;
  }
}

//Display the Contact dialog where a new contact record is added
void CCardFileDlg::OnBnClickedAddContact()
{
  CContactDlg dlg(this);
  if ( dlg.DoModal() == IDOK )
    BuildContactList();
}

//Display the Contact dialog where the current record is edited
void CCardFileDlg::OnBnClickedEditContact()
{
  CContactDlg dlg(TRUE, this);
  if ( dlg.DoModal() == IDOK )
    BuildContactList();
}

//Delete the current contact record
void CCardFileDlg::OnBnClickedDeleteContact()
{
  CString szMsg;
  szMsg.Format(_T("Delete %s?"), m_ContactSet.m_szName);

  MessageBeep(MB_ICONEXCLAMATION);
  int Reply = AfxMessageBox(szMsg, MB_YESNO);

  if ( Reply == IDYES )
  {
    m_ContactSet.Delete();
    BuildContactList();
  }
}
