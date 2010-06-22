// CardFileDlg.h : header file
//

#pragma once
#include "afxcmn.h"

// CCardFileDlg dialog
class CCardFileDlg : public CDialog
{
// Construction
public:
	CCardFileDlg(CWnd* pParent = NULL);	// standard constructor

CCardFileEvents *pCnEvents;

// Dialog Data
	enum { IDD = IDD_CARDFILE_DIALOG };

  //AxLib objects
  CAxConnection   m_Cn;
  CAxAccountSet   m_AccountSet;
  CAxContactCmd   m_ContactCmd;
  CAxContactSet   m_ContactSet;

//  CCardFileEvents *m_pCnEvents;
 // CAccountSetEvents *m_

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV support

  void         InitListColumns();
  void         BuildAccountList();
  void         BuildContactList();

  //Connect to the data provider via dbAx
  BOOL         ConnectToProvider();

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
  CListCtrl m_ctrlAccountList;
  CListCtrl m_ctrlContactList;
  afx_msg void OnItemChangedAccountList(NMHDR *pNMHDR, LRESULT *pResult);
  afx_msg void OnItemChangedContactList(NMHDR *pNMHDR, LRESULT *pResult);
  afx_msg void OnBnClickedAddAccount();
  afx_msg void OnBnClickedEditAccount();
  afx_msg void OnBnClickedDeleteAccount();
  afx_msg void OnBnClickedAddContact();
  afx_msg void OnBnClickedEditContact();
  afx_msg void OnBnClickedDeleteContact();
  afx_msg void OnClose();
};
