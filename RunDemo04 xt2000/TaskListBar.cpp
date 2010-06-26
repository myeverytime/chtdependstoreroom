// CTaskListBar : implementation file
/////////////////////////////////////////////////////////////////////////////

#include "StdAfx.h"
#include "Draw.h"
#include "TaskListBar.h"

#include "MainFrm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CTaskListBar

CTaskListBar::CTaskListBar()
{

}

CTaskListBar::~CTaskListBar()
{
	// TODO: add destruction code here.

}

IMPLEMENT_DYNAMIC(CTaskListBar, CXTTabCtrlBar)

BEGIN_MESSAGE_MAP(CTaskListBar, CXTTabCtrlBar)
	//{{AFX_MSG_MAP(CTaskListBar)
	ON_WM_CREATE()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CTaskListBar message handlers

/*static int arHeaderBmps[] = {
	IDB_HEADER_1,
	IDB_HEADER_3
};*/

static int arColWidths[] = {
	16,
	16,
	24,
	120,
	120,
	120
};

static CString arColLabels[] = {
	_T("!"),
	_T(" "),
	_T(" "),
	_T("Description"),
	_T("File"),
	_T("Line")
};

static int arColWidths1[] = {
	24,
	120,
	120,
	120
};

static CString arColLabels1[] = {
	_T("!"),
	_T("Description"),
	_T("File"),
	_T("Line")
};


int CTaskListBar::OnCreate(LPCREATESTRUCT lpCreateStruct) 
{
	if (CXTTabCtrlBar::OnCreate(lpCreateStruct) == -1)
		return -1;
	
	// Define the default style for the output list controls.
	DWORD dwStyle = LVS_REPORT | LVS_NOSORTHEADER | LVS_SHOWSELALWAYS |
		WS_CHILD | WS_VSCROLL | WS_TABSTOP;

	// Create the list control.
	if (!m_listCtrl.Create( dwStyle, CRect(0,0,0,0), this, 0xff ))
	{
		TRACE0( "Failed to create list control.\n" );
		return FALSE;
	}
	if (!m_listCtrl1.Create( dwStyle, CRect(0,0,0,0), this, 0xff ))
	{
		TRACE0( "Failed to create list control.\n" );
		return FALSE;
	}


	// initialize the list control.
	InitListControl();

	// Create the image list to use with the tab control
	if (!m_ilTabImages.Create(IDB_TABS, 16, 1, COLOR_MASK))
	{
		TRACE0("Failed to create image list.\n");
		return -1;
	}
	
	// Set the image list for the tabbed "Workspace" docking window..
	SetTabImageList( &m_ilTabImages );
	
	// Add the new tab item.
	AddControl( _T( "Task List" ), &m_listCtrl, 0, 5 );
	AddControl( _T( " List" ), &m_listCtrl1, 0, 5 );
	
	return 0;
}


void CTaskListBar::InitListControl()
{
	// Insert the columns.
	m_listCtrl.BuildColumns(_countof(arColWidths), arColWidths, arColLabels);
	m_listCtrl1.BuildColumns(_countof(arColWidths1), arColWidths1, arColLabels1);

	// Subclass the flat header control.
	m_listCtrl.SubclassHeader();
	m_listCtrl1.SubclassHeader();

    // lock the first two colums from sizing operations.
	CXTFlatHeaderCtrl* pHeaderCtrl = m_listCtrl.GetFlatHeaderCtrl( );
	if ( pHeaderCtrl != NULL )
	{
		pHeaderCtrl->FreezeColumn(0);
		pHeaderCtrl->FreezeColumn(1);
		pHeaderCtrl->FreezeColumn(2);
		
		// enable autosizing for columns.
		pHeaderCtrl->EnableAutoSize();

		pHeaderCtrl->SetBitmap(2, IDB_HEADER, HDF_STRING);
	}

	ListView_SetExtendedListViewStyle(
		m_listCtrl.m_hWnd, LVS_EX_GRIDLINES|LVS_EX_FULLROWSELECT);

	// TODO: Add extra initialization here
	m_listCtrl.InsertColumn(0, _T("Column One"),   LVCFMT_RIGHT, 85);
	m_listCtrl.InsertColumn(1, _T("Column Two"),   LVCFMT_RIGHT, 85);
	m_listCtrl.InsertColumn(2, _T("Column Three"), LVCFMT_RIGHT, 100);



	m_listCtrl.InsertItem(0, NULL, 0);
	m_listCtrl.SetItemText(0, 3, _T("Click here to add a new task"));
	m_listCtrl1.InsertItem(0, NULL, 0);
	m_listCtrl1.SetItemText(0, 3, _T("Click her new task"));

//	m_listCtrl.DeleteAllItems();

}

void CTaskListBar::SetWarnInfo()
{
//	UpdateData();
//	m_listCtrl.InsertItem(0, NULL, 0);
	m_listCtrl.SetItemText(0, 2,  _T("Click here to add a new task"));

//	ASSERT_VALID(this);
//	m_pDocument->UpdateAllViews(NULL, HINT_UPDATE_DRAWOBJ, this);
//    Invalidate();
//	m_listCtrl.DeleteAllItems();

//	m_listCtrl.Invalidate();

}