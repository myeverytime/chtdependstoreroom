#pragma once


// CAccountDlg dialog

class CAccountDlg : public CDialog
{
	DECLARE_DYNAMIC(CAccountDlg)

public:
	CAccountDlg(CWnd* pParent = NULL);   // standard constructor
  CAccountDlg(BOOL bEditMode, CWnd* pParent = NULL);
	virtual ~CAccountDlg();

// Dialog Data
	enum { IDD = IDD_ACCOUNT };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

  CWnd           *m_pParent;
  BOOL            m_bEditMode;

  //AxLib class pointers
  CAxAccountSet   *m_pAccountSet;

	DECLARE_MESSAGE_MAP()
public:
  virtual BOOL OnInitDialog();
  afx_msg void OnBnClickedOk();
  afx_msg void OnBnClickedCancel();

public:
  afx_msg void OnKillFocusAccntId();
};
