#if !defined(AFX_FILLBUTTON_H__6A28B78A_ACA1_465A_BE12_1209E5FD6D28__INCLUDED_)
#define AFX_FILLBUTTON_H__6A28B78A_ACA1_465A_BE12_1209E5FD6D28__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// FillButton.h : header file
//
/////////////////////////////////////////////////////////////////////////////
// CFillButton window

class AFX_EXT_CLASS CFillButton : public CXTButton
{
// Construction
public:
	CFillButton();

// Attributes
public:
	HatchStyle m_BrushFill;
	void SetStyle(HatchStyle ButtonFillStyle);
	HatchStyle GetStyle();
	
	void SetFKColor(COLORREF color);
	void SetBKColor(COLORREF color);

	COLORREF m_clrText;
	COLORREF m_clrBack;
// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CFillButton)
	public:
	virtual void DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct);
	//}}AFX_VIRTUAL

// Implementation
public:
	virtual ~CFillButton();

	// Generated message map functions
protected:
	//{{AFX_MSG(CFillButton)
		// NOTE - the ClassWizard will add and remove member functions here.
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_FILLBUTTON_H__6A28B78A_ACA1_465A_BE12_1209E5FD6D28__INCLUDED_)
