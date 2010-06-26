#if !defined(AFX_SAMPLEFORMVIEW_H__149EB79D_00E5_4190_A87C_FE96871C5BBA__INCLUDED_)
#define AFX_SAMPLEFORMVIEW_H__149EB79D_00E5_4190_A87C_FE96871C5BBA__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// SampleFormView.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CSampleFormView form view

#ifndef __AFXEXT_H__
#include <afxext.h>
#endif

class CSampleFormView : public CFormView
{
protected:
	CSampleFormView();           // protected constructor used by dynamic creation
	DECLARE_DYNCREATE(CSampleFormView)

// Form Data
public:
	//{{AFX_DATA(CSampleFormView)
	enum { IDD = IDD_FORMVIEW };
	CXTListCtrl	m_List1;
	CXTListCtrl	m_List2;
	CXTListCtrl	m_List3;
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA

// Attributes
public:
	CXTColorPicker	m_cpText;
	CXTColorPicker	m_cpBack;
	COLORREF m_clrRowText;
	COLORREF m_clrRowBack;
	CXTFlatHeaderCtrl m_flatHeader;

// Operations
public:
	void SetInfo(int m_List,int iItem,CString strSubA,CString strSubB,CString strSubC);
	void SetMonitorListHead(void);

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CSampleFormView)
	public:
	virtual void OnInitialUpdate();
//	virtual CScrollBar* GetScrollBarCtrl(int nBar) const;
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	virtual ~CSampleFormView();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

	// Generated message map functions
	//{{AFX_MSG(CSampleFormView)
//	afx_msg int OnCreate(LPCREATESTRUCT lpCreateStruct);
//	afx_msg BOOL OnEraseBkgnd(CDC* pDC);
//	afx_msg void OnPaint();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

//    CScrollBar m_ScrollBarH;
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_SAMPLEFORMVIEW_H__149EB79D_00E5_4190_A87C_FE96871C5BBA__INCLUDED_)
