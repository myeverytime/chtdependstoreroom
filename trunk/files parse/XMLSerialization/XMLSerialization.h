// XMLSerialization.h : main header file for the XMLSERIALIZATION application
//

#if !defined(AFX_XMLSERIALIZATION_H__627CF5CB_B208_468B_99E1_AEB5C9F2D359__INCLUDED_)
#define AFX_XMLSERIALIZATION_H__627CF5CB_B208_468B_99E1_AEB5C9F2D359__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#ifndef __AFXWIN_H__
	#error include 'stdafx.h' before including this file for PCH
#endif

#include "resource.h"       // main symbols

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationApp:
// See XMLSerialization.cpp for the implementation of this class
//

class CXMLSerializationApp : public CWinApp
{
public:
	CXMLSerializationApp();

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CXMLSerializationApp)
	public:
	virtual BOOL InitInstance();
	//}}AFX_VIRTUAL

// Implementation
	//{{AFX_MSG(CXMLSerializationApp)
	afx_msg void OnAppAbout();
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};


/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_XMLSERIALIZATION_H__627CF5CB_B208_468B_99E1_AEB5C9F2D359__INCLUDED_)
