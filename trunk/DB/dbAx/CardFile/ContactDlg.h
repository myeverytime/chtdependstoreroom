#pragma once
#include "afxwin.h"

  //Append extra color info to BITMAPINFO struct
  struct BMINFO : public BITMAPINFO
  {
	  RGBQUAD	 bmxColors[255];
  };

// CContactDlg dialog

class CContactDlg : public CDialog
{
	DECLARE_DYNAMIC(CContactDlg)

public:
	CContactDlg(CWnd* pParent = NULL);   // standard constructor
  CContactDlg(BOOL bEditMode, CWnd* pParent = NULL);
	virtual ~CContactDlg();

// Dialog Data
	enum { IDD = IDD_CONTACT };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

  CWnd           *m_pParent;
  BOOL            m_bEditMode;

  //AxLib class pointers
  CAxAccountSet   *m_pAccountSet;
  CAxContactSet   *m_pContactSet;

  void DrawPhotoID(BYTE* pImage);

	DECLARE_MESSAGE_MAP()
public:
  virtual BOOL OnInitDialog();
  afx_msg void OnBnClickedOk();
  afx_msg void OnBnClickedCancel();
  afx_msg void OnBnClickedGetImage();
protected:
  CStatic m_ctrlPhotoID;
};
