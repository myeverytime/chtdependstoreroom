// ListXMLNodesDlg.cpp : implementation file
//

#include "stdafx.h"
#include "ListXMLNodes.h"
#include "ListXMLNodesDlg.h"
#include ".\listxmlnodesdlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

BOOL ReadFirstNode(XmlTextReader* xmlreader, BOOL bMoveToContent)
{
  if (bMoveToContent)
    return (NULL != xmlreader->MoveToContent());
  else
    return xmlreader->Read();
}

BOOL ReadNextNode(XmlTextReader* xmlreader, BOOL bMoveToContent)
{
  BOOL bMoreNodes = xmlreader->Read();
  if (bMoreNodes && bMoveToContent)
    bMoreNodes = (NULL != xmlreader->MoveToContent());

  return bMoreNodes;
}

void ListAllNodes(String* fileName, CListCtrl& lstNodes, BOOL bMoveToContent, BOOL bIgnoreWhitespace)
{
#pragma push_macro("new")
#undef new
  CWaitCursor cs;

  try
  {
    lstNodes.DeleteAllItems();

    XmlTextReader* xmlreader = new XmlTextReader(fileName);

    if (bIgnoreWhitespace) xmlreader->WhitespaceHandling = WhitespaceHandling::None;
      
    // Read each node
    for (BOOL bMoreNodes = ReadFirstNode(xmlreader, bMoveToContent); 
          bMoreNodes;
          bMoreNodes = ReadNextNode(xmlreader, bMoveToContent))
    {
      // Get NodeType enumeration's symbolic name
      String* s = String::Format(S"XmlNodeType::{0}", 
                                 __box(xmlreader->NodeType));

      // Insert the NodeType enum name into the list control
      int idx = lstNodes.InsertItem(lstNodes.GetItemCount(),
                                    (CString)s->ToString());

      // Also insert the current node's Name and Value properties
      lstNodes.SetItemText(idx, 1, (CString)xmlreader->Name);
      lstNodes.SetItemText(idx, 2, (CString)xmlreader->Value);
    }
  }
  catch(Exception* e)
  {
    MessageBox::Show(e->Message);
  }  
#pragma pop_macro("new")
}

void SizeAllColumns(CListCtrl& lstCtrl)
{
  CHeaderCtrl* pHeader = lstCtrl.GetHeaderCtrl();
  ASSERT(pHeader);
  if (pHeader)
  {
    // Turn off redraw until the columns have all
    // been resized
    lstCtrl.SetRedraw(FALSE);

    for (int iCurrCol = 0; 
        iCurrCol < pHeader->GetItemCount(); 
        iCurrCol++)
    {
      lstCtrl.SetColumnWidth(iCurrCol, LVSCW_AUTOSIZE);

      int nCurrWidth = lstCtrl.GetColumnWidth(iCurrCol);

      lstCtrl.SetColumnWidth(iCurrCol,
                                LVSCW_AUTOSIZE_USEHEADER);

      int nColHdrWidth = lstCtrl.GetColumnWidth(iCurrCol);

      lstCtrl.SetColumnWidth(iCurrCol, 
                          max(nCurrWidth, nColHdrWidth));
    }

    // Now that sizing is finished, turn redraw back on and 
    // invalidate so that the control is repainted
    lstCtrl.SetRedraw(TRUE);
    lstCtrl.Invalidate();
  }
}


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
public:
  afx_msg void OnBnClickedOk();
};

CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
{
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
}


void CListXMLNodesDlg::OnBnClickedButton2()
{
  CAboutDlg().DoModal();
}

void CAboutDlg::OnBnClickedOk()
{
  try
  {
    CWaitCursor wait;
    System::Diagnostics::Process::Start(S"IExplore.exe", S"http://www.ArcherConsultingGroup.com/");
  }
  catch(Exception* e)
  {
    MessageBox::Show(e->Message);
  }
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialog)
  ON_BN_CLICKED(IDOK, OnBnClickedOk)
END_MESSAGE_MAP()


// CListXMLNodesDlg dialog



CListXMLNodesDlg::CListXMLNodesDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CListXMLNodesDlg::IDD, pParent)
  , m_strFileName(_T(""))
  , m_bMoveToContent(FALSE)
  , m_bIgnoreWhitespace(FALSE)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CListXMLNodesDlg::DoDataExchange(CDataExchange* pDX)
{
  CDialog::DoDataExchange(pDX);
  DDX_Control(pDX, IDC_LIST1, m_lstNodes);
  DDX_Text(pDX, IDC_EDIT1, m_strFileName);
  DDX_Check(pDX, IDC_CHECK1, m_bMoveToContent);
  DDX_Check(pDX, IDC_CHECK2, m_bIgnoreWhitespace);
}

BEGIN_MESSAGE_MAP(CListXMLNodesDlg, CDialog)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	//}}AFX_MSG_MAP
  ON_BN_CLICKED(IDOK, OnBnClickedOk)
  ON_BN_CLICKED(IDC_BUTTON1, OnBnClickedButton1)
  ON_BN_CLICKED(IDC_BUTTON2, OnBnClickedButton2)
END_MESSAGE_MAP()


// CListXMLNodesDlg message handlers

BOOL CListXMLNodesDlg::OnInitDialog()
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

  m_lstNodes.InsertColumn(0, "Node Type");
  m_lstNodes.InsertColumn(1, "Name");
  m_lstNodes.InsertColumn(2, "Value");
  SizeAllColumns(m_lstNodes);
	
  // save app dir
  TCHAR buff[MAX_PATH];
  GetModuleFileName(NULL, buff, MAX_PATH);
  m_strWorkingDir = System::IO::Path::GetDirectoryName(buff);

	return TRUE;  // return TRUE  unless you set the focus to a control
}

void CListXMLNodesDlg::OnSysCommand(UINT nID, LPARAM lParam)
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

void CListXMLNodesDlg::OnPaint() 
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
HCURSOR CListXMLNodesDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}

void CListXMLNodesDlg::OnBnClickedOk()
{
  UpdateData();
  if (0 < m_strFileName.GetLength())
  {
    ListAllNodes(m_strFileName, m_lstNodes, m_bMoveToContent, m_bIgnoreWhitespace);
    SizeAllColumns(m_lstNodes);
  }  
  else
  {
    MessageBox::Show(S"You must first specify an XML file to read");
  }
}

void CListXMLNodesDlg::OnBnClickedButton1()
{
  UpdateData();
  
  CFileDialog dlg(TRUE);
  dlg.m_pOFN->lpstrInitialDir = m_strWorkingDir;
  dlg.m_pOFN->lpstrTitle = _T("Open an XML File");
  dlg.m_ofn.lpstrFilter = 
    _T("XML Files (*.xml)\0*.xml\0"
  );
  if (IDOK == dlg.DoModal())
  {
    m_strFileName = dlg.GetPathName();
    UpdateData(FALSE);
  }
}

