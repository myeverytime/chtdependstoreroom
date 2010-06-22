// ContactDlg.cpp : implementation file
//

#include "stdafx.h"
#include "CardFile.h"
#include "ContactDlg.h"

#include "CardFileDlg.h"

// CContactDlg dialog

IMPLEMENT_DYNAMIC(CContactDlg, CDialog)

CContactDlg::CContactDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CContactDlg::IDD, pParent)
{
  m_bEditMode = FALSE;
  m_pContactSet = NULL;
  m_pParent = pParent;
}

CContactDlg::CContactDlg(BOOL bEditMode, CWnd* pParent /*=NULL*/)
	: CDialog(CContactDlg::IDD, pParent)
{
  m_bEditMode = bEditMode;
  m_pContactSet = NULL;
  m_pParent = pParent;
}

CContactDlg::~CContactDlg()
{
}

//Since data buffering occurs in the derived AxLib recordset
//object, we can exchange data directly with the recordset's
//data fields
void CContactDlg::DoDataExchange(CDataExchange* pDX)
{
  CDialog::DoDataExchange(pDX);
  DDX_Text(pDX, IDC_CONT_NAME, m_pContactSet->m_szName);
  DDX_Text(pDX, IDC_CONT_TITLE, m_pContactSet->m_szTitle);
  DDX_Text(pDX, IDC_CONT_PHONE, m_pContactSet->m_szPhone);
  DDX_Text(pDX, IDC_CONT_EXTN, m_pContactSet->m_szExtn);
  DDX_Text(pDX, IDC_CONT_EMAIL, m_pContactSet->m_szEmail);
  DDX_Text(pDX, IDC_CONT_NOTE, m_pContactSet->m_szNote);
  DDX_Control(pDX, IDC_PHOTO_ID, m_ctrlPhotoID);
}

BEGIN_MESSAGE_MAP(CContactDlg, CDialog)
  ON_BN_CLICKED(IDC_OK, &CContactDlg::OnBnClickedOk)
  ON_BN_CLICKED(IDC_CANCEL, &CContactDlg::OnBnClickedCancel)
  ON_BN_CLICKED(IDC_GET_IMAGE, &CContactDlg::OnBnClickedGetImage)
END_MESSAGE_MAP()


// CContactDlg message handlers

BOOL CContactDlg::OnInitDialog()
{
  //Set pointers to the single instances of the CAxAccountSet
  //and CAxContactSet members of the main dialog
  m_pAccountSet = &((CCardFileDlg*)m_pParent)->m_AccountSet;
  m_pContactSet = &((CCardFileDlg*)m_pParent)->m_ContactSet;

  CDialog::OnInitDialog();

  //If we are adding a new record, make sure all of the
  //dialog edit fields are blank
  if ( !m_bEditMode )
  {
    for ( int i = IDC_CONT_NAME; i <= IDC_CONT_NOTE; i++ )
      SetDlgItemText(i, _T(""));
  }
  else
    SetDlgItemText(IDC_GET_IMAGE, _T("Show Photo ID"));

  return TRUE;  // return TRUE unless you set the focus to a control
  // EXCEPTION: OCX Property Pages should return FALSE
}

//If this is a new record, allow the user to browse for an image. This
//demo only supports bitmap images, so the file search is limited to .bmp.
//If the current record is simply being edited, the saved photo is retrieved
//from the database a displayed.
void CContactDlg::OnBnClickedGetImage()
{
  if ( m_bEditMode )
  {
    if ( m_pContactSet->m_pimgPhotoID )
      DrawPhotoID(m_pContactSet->m_pimgPhotoID);
    return;
  }

	CFileDialog FileDlg(TRUE, _T("bmp"), NULL,
			OFN_HIDEREADONLY | OFN_OVERWRITEPROMPT, _T("Photo ID (*.bmp)|*.bmp"), NULL);
	FileDlg.m_ofn.lpstrTitle = _T("Select Photo ID image");

	if ( FileDlg.DoModal() != IDOK )
		return;

  //BINDATAINFOHEADER is defined in AxLib.h and is used to tag a binary
  //data field with file meta-data information
  BINDATAINFOHEADER imgHeader;

	struct _stat file_stat;
	CString szPath(FileDlg.GetPathName());
  _wstat((LPCTSTR)szPath, &file_stat);

  //Setup buffer to hold image file data
 	ZeroMemory((void*)&imgHeader, sizeof(BINDATAINFOHEADER));
  imgHeader.imgSize = file_stat.st_size;
  long bufsize = sizeof(BINDATAINFOHEADER) + imgHeader.imgSize;

  m_pContactSet->m_pimgPhotoID = new BYTE[bufsize];

  //Move header info into buffer
	BYTE* pBuf = m_pContactSet->m_pimgPhotoID;
	memcpy((void*)pBuf, (const void*)&imgHeader, sizeof(BINDATAINFOHEADER));
	pBuf += sizeof(BINDATAINFOHEADER);

  //Open image file and read into buffer
  FILE *fp = NULL;
  _wfopen_s(&fp, (LPCTSTR)szPath, _T("rb"));
  for ( int i = 0; i < imgHeader.imgSize; i++ )
    fread(pBuf++, sizeof(BYTE), 1, fp);
  fclose(fp);

  //Display the image
  DrawPhotoID(m_pContactSet->m_pimgPhotoID);
}

//Not a very sophisticated viewer (rather crude actually), but
//we are demonstrating how binary data (i.e. BLOBs) can be saved
//and recalled.
//                        ~~~~~~~~~~~~~~~~~~~
//Bitmap files are comprized of a file header (BITMAPFILEHEADER - 14 bytes),
//infoheader (BITMAPINFOHEADER - 40 bytes), and possibly an array of bytes
//specifying the color table to use in rendering the bitmap. This is followed
//by the actual bits of the bitmap itself. To enable the display of the image
//the API function CreateDIBSection is used to create a Device Independent Bitmap
//(DIB) and StretchBlt is used to make it fit. The result is not the highest
//quality image, but as noted, this is for demonstration purposes only.

void CContactDlg::DrawPhotoID(BYTE* pImage)
{
  BYTE* pBuf = pImage;

  BITMAPFILEHEADER bfh;
  BITMAPINFOHEADER bih;

  pBuf += sizeof(BINDATAINFOHEADER);            //Skip AxLib binary info header
  memcpy(&bfh, pBuf, sizeof(BITMAPFILEHEADER));
  pBuf += sizeof(BITMAPFILEHEADER);
  memcpy(&bih, pBuf, sizeof(BITMAPINFOHEADER));
  pBuf += sizeof(BITMAPINFOHEADER);
  const BYTE* pColorTable = pBuf;

  //Is this a bitmap
  char szFileType[3];
  memcpy((void*)szFileType, (const void*)&bfh, (2*sizeof(char)));
  szFileType[2] = '\0';
  if ( strcmp(szFileType, "BM") != 0 )
  {
    AfxMessageBox(_T("Invalid bitmap file"));
    return;
  }

  //Determine the size of the color table
  int nColorTableSize = 0;
  switch ( bih.biBitCount)
  {
  case 1:
    nColorTableSize = 2;
    break;

  case 2:
    nColorTableSize = 4;
    break;

  case 4:
    nColorTableSize = 16;
    break;

  case 8 :
    nColorTableSize = 256;
    break;
  }

  pBuf += nColorTableSize * sizeof(RGBQUAD);
  const BYTE* pBits = pBuf;

  //Fill in the BITMAPINFO structure. BITMAPINFO is inherited and an 
  //additional 255 elements added to support color table info. See
  //BMINFO struct definition in ContactDlg.h
  BMINFO dibInfo;
  memcpy((void*)&dibInfo.bmiHeader, (const void*)&bih, sizeof(BITMAPINFOHEADER));
  memcpy((void*)&dibInfo.bmiColors, (const void*)pColorTable, (nColorTableSize * sizeof(RGBQUAD)));

  //Create the DIB
  HDC hDC = ::GetDC(NULL);
  VOID  *ppBits = NULL;
  HBITMAP hBM = CreateDIBSection(hDC, (const BITMAPINFO*)&dibInfo, DIB_RGB_COLORS, 
    (LPVOID*)&ppBits, NULL, 0);
  ::ReleaseDC(NULL, hDC);
	memcpy(ppBits, pBits, dibInfo.bmiHeader.biSizeImage);

  //Render to the dialog
  CRect rc;
  m_ctrlPhotoID.GetClientRect(&rc);

  CDC* pDC = m_ctrlPhotoID.GetDC();
  CDC* memDC = new CDC;
  memDC->CreateCompatibleDC(pDC);
  memDC->SelectObject(hBM);

  BOOL bSuccess = pDC->StretchBlt(0, 0, rc.Width(), rc.Height(), memDC, 
                0, 0, bih.biWidth, bih.biHeight, SRCCOPY);

  delete memDC;
  memDC = NULL;
  m_ctrlPhotoID.ReleaseDC(pDC);
  DeleteObject(hBM);
}

//Add a new record or Update an existing record's info
void CContactDlg::OnBnClickedOk()
{
  long lTransLevel = 0;
  CAxConnection *pCn = &((CCardFileDlg*)m_pParent)->m_Cn;

  try
  {
    if ( !m_bEditMode )
    {
      //We don't need a transaction to simply add a new
      //record, but one is used here for demo purposes.
      if ( pCn->_SupportsTransactions() )
      {
        pCn->BeginTrans(&lTransLevel);
          m_pContactSet->AddNew();
            m_pContactSet->m_szAccountID = m_pAccountSet->m_szAccountID;
            UpdateData(TRUE);
          m_pContactSet->Update();
        pCn->CommitTrans();
      }
    }
    else
    {
      UpdateData(TRUE);
      m_pContactSet->Update();
    }
  
    //Audible alert of Add or Update
    MessageBeep(MB_OK);
  }
  catch ( CAxException *e )
  {
    if ( lTransLevel > 0 )
      pCn->RollbackTrans();

    MessageBeep(MB_ICONEXCLAMATION);
    MessageBox(e->m_szErrorDesc, _T("CardFile Message"), MB_OK);
    delete e;
  }

  EndDialog(IDOK);
}

void CContactDlg::OnBnClickedCancel()
{
  EndDialog(IDCANCEL);
}

