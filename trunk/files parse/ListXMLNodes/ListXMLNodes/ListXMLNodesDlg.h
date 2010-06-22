// ListXMLNodesDlg.h : header file
//

#pragma once
#include "afxcmn.h"


// CListXMLNodesDlg dialog
class CListXMLNodesDlg : public CDialog
{
// Construction
public:
	CListXMLNodesDlg(CWnd* pParent = NULL);	// standard constructor

// Dialog Data
	enum { IDD = IDD_LISTXMLNODES_DIALOG };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV support

protected:
  CString m_strWorkingDir;
  
// Implementation
protected:
	HICON m_hIcon;

	// Generated message map functions
	virtual BOOL OnInitDialog();
	afx_msg void OnSysCommand(UINT nID, LPARAM lParam);
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	DECLARE_MESSAGE_MAP()
public:
  afx_msg void OnBnClickedOk();
  CListCtrl m_lstNodes;
  CString m_strFileName;
  BOOL m_bMoveToContent;
  BOOL m_bIgnoreWhitespace;
  afx_msg void OnBnClickedButton1();
  afx_msg void OnBnClickedButton2();
};
