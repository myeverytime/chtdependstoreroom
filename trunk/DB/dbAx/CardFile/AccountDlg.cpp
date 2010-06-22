// AccountDlg.cpp : implementation file
//

#include "stdafx.h"
#include "CardFile.h"
#include "AccountDlg.h"

#include "CardFileDlg.h"

// CAccountDlg dialog

IMPLEMENT_DYNAMIC(CAccountDlg, CDialog)

CAccountDlg::CAccountDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CAccountDlg::IDD, pParent)
{
  m_bEditMode = FALSE;
  m_pAccountSet = NULL;
  m_pParent = pParent;
}

CAccountDlg::CAccountDlg(BOOL bEditMode, CWnd* pParent /*=NULL*/)
	: CDialog(CAccountDlg::IDD, pParent)
{
  m_bEditMode = bEditMode;
  m_pAccountSet = NULL;
  m_pParent = pParent;
}

CAccountDlg::~CAccountDlg()
{
}

//Since data buffering occurs in the derived AxLib recordset
//object, we can exchange data directly with the recordset's
//data fields
void CAccountDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
  DDX_Text(pDX, IDC_ACCNT_ID, m_pAccountSet->m_szAccountID);
  DDX_Text(pDX, IDC_ACCNT_NAME, m_pAccountSet->m_szName);
  DDX_Text(pDX, IDC_ACCNT_ADDRESS, m_pAccountSet->m_szAddress);
  DDX_Text(pDX, IDC_ACCNT_PHONE1, m_pAccountSet->m_szPhone1);
  DDX_Text(pDX, IDC_ACCNT_PHONE2, m_pAccountSet->m_szPhone2);
  DDX_Text(pDX, IDC_ACCNT_EMAIL, m_pAccountSet->m_szEmail);
  DDX_Text(pDX, IDC_ACCNT_NOTE, m_pAccountSet->m_szNote);
}

BEGIN_MESSAGE_MAP(CAccountDlg, CDialog)
  ON_BN_CLICKED(IDC_OK, &CAccountDlg::OnBnClickedOk)
  ON_BN_CLICKED(IDC_CANCEL, &CAccountDlg::OnBnClickedCancel)
  ON_EN_KILLFOCUS(IDC_ACCNT_ID, &CAccountDlg::OnKillFocusAccntId)
END_MESSAGE_MAP()


// CAccountDlg message handlers

BOOL CAccountDlg::OnInitDialog()
{
  //Set a pointer to the one instance of the CAxAccountSet
  //member of the main dialog
  m_pAccountSet = &((CCardFileDlg*) m_pParent)->m_AccountSet;

  CDialog::OnInitDialog();

  //If we are editing the record, disable the AccountID edit box
  if ( m_bEditMode )
    GetDlgItem(IDC_ACCNT_ID)->EnableWindow(FALSE);
  else
  {
    //If this is to be a new record, we need to clear all
    //edit fields in the dialog
    for ( int i = IDC_ACCNT_ID; i <= IDC_ACCNT_NOTE; i++ )
      SetDlgItemText(i, _T(""));
  }

  return TRUE;  // return TRUE unless you set the focus to a control
  // EXCEPTION: OCX Property Pages should return FALSE
}

//KillFocus allows the application to check for any duplicate
//records before an attempt is made to actually add the record
//to the database and possibly get an exception thrown by the
//data provider
void CAccountDlg::OnKillFocusAccntId()
{
  //If we are adding a new account, check to see if
  //an existing record already exists.
  if ( !m_bEditMode )
  {
    CString szAccntID;
    GetDlgItemText(IDC_ACCNT_ID, szAccntID);

    if ( GetFocus() != GetDlgItem(IDC_CANCEL) && szAccntID.IsEmpty() )
    {
      if ( !szAccntID.IsEmpty() )
      {
        CString szFind;
        szFind.Format(_T("AccountID = '%s'"), szAccntID);
        if ( m_pAccountSet->Find(szFind) )
        {
          AfxMessageBox(_T("Account already exists."), MB_OK);
          GetDlgItem(IDC_ACCNT_ID)->SetFocus();
        }
      }
      else
      {
        AfxMessageBox(_T("Account ID is required"), MB_OK);
        GetDlgItem(IDC_ACCNT_ID)->SetFocus();
      }
    }
  }
}

//Add a new record or Update and existing record's info
void CAccountDlg::OnBnClickedOk()
{
  try
  {
    if ( !m_bEditMode )
      m_pAccountSet->AddNew();  //Add a new, blank record

    UpdateData(TRUE);           //Exchange dialog data
    m_pAccountSet->Update();    //Update the recordset

    //If this is a new record, requery the database table
    //otherwise we may out-of-sync
    if ( !m_bEditMode )
      m_pAccountSet->Requery();
  }
  catch (CAxException *e)
  {
    AfxMessageBox(e->m_szErrorDesc, MB_OK);
    delete e;
  }

  MessageBeep(MB_OK);
  EndDialog(IDOK);
}

void CAccountDlg::OnBnClickedCancel()
{
  EndDialog(IDCANCEL);
}
