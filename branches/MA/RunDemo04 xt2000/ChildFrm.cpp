// ChildFrm.cpp : implementation of the CChildFrame class
//

#include "stdafx.h"
#include "Draw.h"

#include "ChildFrm.h"
#include "FlatTabPropDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CChildFrame

IMPLEMENT_DYNCREATE(CChildFrame, CXTMDIChildWnd)

BEGIN_MESSAGE_MAP(CChildFrame, CXTMDIChildWnd)
	//{{AFX_MSG_MAP(CChildFrame)
	ON_COMMAND(ID_FLAT_TAB_PROP, OnFlatTabProp)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CChildFrame construction/destruction

CChildFrame::CChildFrame()
: m_pFlatTabCtrl(0)
, m_pFlatTabView(0)
{

	// TODO: add member initialization code here
	
}

CChildFrame::~CChildFrame()
{
}

BOOL CChildFrame::OnCreateClient( LPCREATESTRUCT /*lpcs*/,
	CCreateContext* pContext)
{
	return m_wndSplitter.Create( this,
		0, 0,                 // TODO: adjust the number of rows, columns  2, 2, 
		CSize( 10, 10 ),      // TODO: adjust the minimum pane size
		pContext ,
		WS_CHILD | WS_VISIBLE //| WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU 
//		| FWS_ADDTOTITLE | WS_MINIMIZEBOX | WS_MAXIMIZEBOX |WS_VSCROLL
		);
}

BOOL CChildFrame::PreCreateWindow(CREATESTRUCT& cs)
{
	// TODO: Modify the Window class or styles here by modifying
	//  the CREATESTRUCT cs

	if( !CXTMDIChildWnd::PreCreateWindow(cs) )
		return FALSE;

//	cs.style |= WS_CLIPCHILDREN;
	
//	cs.style = WS_CHILD | WS_VISIBLE | WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU
//		| FWS_ADDTOTITLE | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX ;

//	cs.style |= !WS_HSCROLL;
//   cs.style   &=~WS_VSCROLL;

	return TRUE;
}

void CChildFrame::ActivateFrame(int nCmdShow)
{
	// TODO: Modify this function to change how the frame is activated.

	nCmdShow = SW_SHOWMAXIMIZED;

	CXTMDIChildWnd::ActivateFrame(nCmdShow);
}

/////////////////////////////////////////////////////////////////////////////
// CChildFrame diagnostics

#ifdef _DEBUG
void CChildFrame::AssertValid() const
{
	CXTMDIChildWnd::AssertValid();
}

void CChildFrame::Dump(CDumpContext& dc) const
{
	CXTMDIChildWnd::Dump(dc);
}

#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CChildFrame message handlers
void CChildFrame::OnFlatTabProp() 
{
	if ( m_pFlatTabView && m_pFlatTabCtrl )
	{
		CFlatTabPropDlg	dlg(m_pFlatTabCtrl, m_pFlatTabView);
		dlg.DoModal();
	}
}
