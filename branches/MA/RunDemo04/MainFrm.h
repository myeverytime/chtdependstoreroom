// MainFrm.h : interface of the CMainFrame class
//
/////////////////////////////////////////////////////////////////////////////

#if !defined(AFX_MAINFRM_H__3883AFBA_52CE_46F2_AC21_5DC8AE8F4635__INCLUDED_)
#define AFX_MAINFRM_H__3883AFBA_52CE_46F2_AC21_5DC8AE8F4635__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "SampleFormView.h"
#include "TabbedViewView.h"


class CMainFrame : public CXTPMDIFrameWnd
{
	DECLARE_DYNAMIC(CMainFrame)
public:
	CMainFrame();

// Attributes
public:
// Operations
	int m_ontime ;

public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CMainFrame)
	public:
	virtual BOOL PreCreateWindow(CREATESTRUCT& cs);
	//}}AFX_VIRTUAL

// Implementation
public:
	virtual ~CMainFrame();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

public:  // control bar embedded members

///	void AddLogo();
///	void RemoveLogo();
	void MsgDel();
	void Msg(CString str);

// Generated message map functions
	CXTListCtrl             *m_listCtrl2;
	CSampleFormView*		m_pSampleFormView;
	CSampleFormView*		m_pSampleFormView1;
	CSampleFormView*		m_pSampleFormView2;
	CTabbedViewView*        m_pTabbedViewView;
protected:
	CImageList	m_imageList;
	CXTWindowPos      m_wndPosition;
	CDialogBar         m_wndBar;
	CXTPStatusBar     m_wndStatusBar;
	CXTPTabClientWnd  m_MTIClientWnd;

public:
	// Overrode CWnd implementation to restore saved window position.
///	BOOL ShowWindowEx(int nCmdShow);
///	void SetMousePosText(CPoint Logpoint,CPoint Devpoint);
protected:
	//{{AFX_MSG(CMainFrame)
	afx_msg int OnCreate(LPCREATESTRUCT lpCreateStruct);
///	afx_msg void OnShowWindow(BOOL bShow, UINT nStatus);
	afx_msg void OnSimulation();
	afx_msg void OnGenus();
	afx_msg void OnManipulate();
	afx_msg LRESULT OnTabbarMouseMsg(WPARAM wParam,LPARAM lParam);
	afx_msg void OnSelchangeTabInfo(NMHDR* pNMHDR, LRESULT* pResult);
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_MAINFRM_H__3883AFBA_52CE_46F2_AC21_5DC8AE8F4635__INCLUDED_)
