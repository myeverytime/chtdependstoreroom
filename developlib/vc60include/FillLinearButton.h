#if !defined(AFX_FILLLINEARBUTTON_H__7A18922E_964C_4AEC_8995_C69F23B4FEDC__INCLUDED_)
#define AFX_FILLLINEARBUTTON_H__7A18922E_964C_4AEC_8995_C69F23B4FEDC__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// FillLinearButton.h : header file
//
#include "enum.h"
/////////////////////////////////////////////////////////////////////////////
// CFillLinearButton window

class CFillLinearButton : public CXTButton
{
// Construction
public:
	CFillLinearButton();
	LinearGradientMode m_LinerStyle;
	void SetStyle(LinearGradientMode LinerStyle);
	void SetStyleEx(StyleExEnum styleEx);
	void SetStartColor(COLORREF color);
	void SetEndColor(COLORREF color);
	COLORREF m_clrStart, m_clrEnd;
	COLORREF m_clrEx1,m_clrEx2,m_clrEx3,m_clrEx4,m_clrEx5;
// Attributes
public:
	StyleExEnum m_StyleEx;
// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CFillLinearButton)
	public:
	virtual void DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct);
	//}}AFX_VIRTUAL

// Implementation
public:
	virtual ~CFillLinearButton();

	// Generated message map functions
protected:
	//{{AFX_MSG(CFillLinearButton)
		// NOTE - the ClassWizard will add and remove member functions here.
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_FILLLINEARBUTTON_H__7A18922E_964C_4AEC_8995_C69F23B4FEDC__INCLUDED_)
