// Draw.h : main header file for the DRAW application
//

#if !defined(AFX_DRAW_H__55AA697D_A012_4BC9_9EBF_53421EDCF3B9__INCLUDED_)
#define AFX_DRAW_H__55AA697D_A012_4BC9_9EBF_53421EDCF3B9__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#ifndef __AFXWIN_H__
	#error include 'stdafx.h' before including this file for PCH
#endif

#include "resource.h"       // main symbols
#include "MQClient.h"
#include "drawview.h"

#include <SqlDirect.h>
#include <String2DataType.h>

/////////////////////////////////////////////////////////////////////////////
// CDrawApp:
// See Draw.cpp for the implementation of this class
//


class CDrawApp : public CWinApp
{
public:
	CDrawApp();
	BOOL   ProcessShellCommand(CCommandLineInfo& rCmdInfo);
	BOOL   StartClient();
public:

	CString GetAppPath();				//返回应用程序所在路径
	ULONG_PTR           gdiplusToken;
	
	void ConnectDB();
	BOOL   InitPointInfo();
	CSQLDirect		m_sql;		//数据库
	CSQLDirect		m_sqlA;		//数据库
	CSQLDirect		m_sqlD;		//数据库
	CString2DataType m_String2DataType;

	CMQClient socketClient;
///	CPointInfo      *pPointInfo;
	CMultiDocTemplate* pDocTemplate;
	CMultiDocTemplate* pNewDocTemplate;

	CTypedPtrMap<CMapStringToOb,CString,CDrawView *> m_map;

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CDrawApp)
	public:
	virtual BOOL InitInstance();
	virtual int ExitInstance();
	//}}AFX_VIRTUAL

// Implementation
	COleTemplateServer m_server;
		// Server object for document creation
	//{{AFX_MSG(CDrawApp)
	afx_msg void OnAppAbout();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

};

extern CDrawApp theApp;
extern CString gstrIP,gstrPort,gstrTimeOut;
/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_DRAW_H__55AA697D_A012_4BC9_9EBF_53421EDCF3B9__INCLUDED_)
