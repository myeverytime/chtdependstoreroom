// SampleFormView.cpp : implementation file
//

#include "stdafx.h"
#include "Draw.h"
#include "SampleFormView.h"
#include "MainFrm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CSampleFormView

IMPLEMENT_DYNCREATE(CSampleFormView, CFormView)

CSampleFormView::CSampleFormView()
	: CFormView(CSampleFormView::IDD)
{
	//{{AFX_DATA_INIT(CSampleFormView)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}

CSampleFormView::~CSampleFormView()
{
}

void CSampleFormView::DoDataExchange(CDataExchange* pDX)
{
	CFormView::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CSampleFormView)
	DDX_Control(pDX, IDC_LIST_POINT1, m_List1);
	DDX_Control(pDX, IDC_LIST_POINT2, m_List2);
	DDX_Control(pDX, IDC_LIST_POINT3, m_List3);
		// NOTE: the ClassWizard will add DDX and DDV calls here
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CSampleFormView, CFormView)
	//{{AFX_MSG_MAP(CSampleFormView)
//	ON_WM_CREATE()
//	ON_WM_ERASEBKGND()
//	ON_WM_PAINT()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CSampleFormView diagnostics

#ifdef _DEBUG
void CSampleFormView::AssertValid() const
{
	CFormView::AssertValid();
}

void CSampleFormView::Dump(CDumpContext& dc) const
{
	CFormView::Dump(dc);
}
#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CSampleFormView message handlers

void CSampleFormView::OnInitialUpdate() 
{
	CFormView::OnInitialUpdate();

	CMainFrame* pFWnd=(CMainFrame*)AfxGetMainWnd();
	pFWnd->m_pSampleFormView=this;

	// TODO: Add your specialized code here and/or call the base class
//	GetParentFrame()->SetWindowText("实时显示");
	SetMonitorListHead();
}

void CSampleFormView::SetInfo(int m_List,int iItem,CString strSubA,CString strSubB,CString strSubC) 
{
	if (m_List == 1)
	{
		m_List1.SetItem(iItem, 0, LVIF_TEXT, strSubA, 0, NULL, NULL, NULL);
		m_List1.SetItem(iItem, 1, LVIF_TEXT, strSubB, 0, NULL, NULL, NULL);
		m_List1.SetItem(iItem, 2, LVIF_TEXT, strSubC, 0, NULL, NULL, NULL);
	}
	if (m_List == 2)
	{
		m_List2.SetItem(iItem, 0, LVIF_TEXT, strSubA, 0, NULL, NULL, NULL);
		m_List2.SetItem(iItem, 1, LVIF_TEXT, strSubB, 0, NULL, NULL, NULL);
		m_List2.SetItem(iItem, 2, LVIF_TEXT, strSubC, 0, NULL, NULL, NULL);
	}
	if (m_List == 3)
	{
		m_List3.SetItem(iItem, 0, LVIF_TEXT, strSubA, 0, NULL, NULL, NULL);
		m_List3.SetItem(iItem, 1, LVIF_TEXT, strSubB, 0, NULL, NULL, NULL);
		m_List3.SetItem(iItem, 2, LVIF_TEXT, strSubC, 0, NULL, NULL, NULL);
	}

}



void CSampleFormView::SetMonitorListHead()
{

	m_List1.SetWindowPos(NULL,0,0,330,530,SWP_NOMOVE|SWP_NOZORDER | SWP_NOACTIVATE);
//	m_List1.SetExtendedStyle(LVS_EX_FULLROWSELECT);
	CString strname[10];
	strname[0]="安装地点/名称";
	strname[1]="检测值";
	strname[2]="点号";

		m_List1.InsertColumn(0,strname[0],LVCFMT_LEFT,120);
		m_List1.InsertColumn(1,strname[1],LVCFMT_LEFT,120);
		m_List1.InsertColumn(2,strname[2],LVCFMT_LEFT,120);
//		m_List1.SetItemTextColor(i,1,RGB(255,0,0));  //设置单元格字体颜色

		//	((CComboBox *)GetDlgItem(IDC_COMBO1))->SetCurSel(0);

	CListCtrl* ctext;
    ctext = (CListCtrl*)GetDlgItem(IDC_LIST_POINT2);//get the pointer
    RECT rect = {331, 0, 0, 0};
	ctext->MoveWindow(&rect);//Move window 
	m_List2.SetWindowPos(this,0,0,300,500,SWP_NOMOVE|SWP_NOZORDER | SWP_NOACTIVATE);
	m_List2.SetExtendedStyle(LVS_EX_FULLROWSELECT);
	for(int i=0;i<3;i++)
	{
		m_List2.InsertColumn(i,strname[i],LVCFMT_LEFT,120);
	}

	CListCtrl* ctext1;
    ctext1 = (CListCtrl*)GetDlgItem(IDC_LIST_POINT3);//get the pointer
    RECT rect1 = {632, 0, 0, 0};
	ctext1->MoveWindow(&rect1);//Move window 
	m_List3.SetWindowPos(NULL,0,0,330,550,SWP_NOMOVE|SWP_NOZORDER | SWP_NOACTIVATE);
	m_List3.SetExtendedStyle(LVS_EX_FULLROWSELECT);
	for( i=0;i<3;i++)
	{
		m_List3.InsertColumn(i,strname[i],LVCFMT_LEFT,120);
	}

	m_List1.SubclassHeader(TRUE);

//		strtemp.Format("□%d",iItem); //◎◎··●●□□◇   //**change subscript

	// Get the windows handle to the header control for the
	// list control then subclass the control.
	HWND hWndHeader = m_List1.GetDlgItem(IDC_LIST_POINT1)->GetSafeHwnd();
	m_flatHeader.SubclassWindow (hWndHeader);

//	m_flatHeader.InitializeHeader(TRUE);	
//	if (m_bSaveColumnWidth)
//		m_ctrlListMonitor.LoadColumnWidths();

	// size to fit the columns
//	m_List1.AutoSizeColumn ();

	// initialize the back color picker default colors.
//	m_cpBack.SetColor(RGB(128,0,200));
	m_cpBack.SetColor(RGB(0x33,0x66,0xff));
	m_cpBack.SetDefaultColor(m_clrRowBack);

	// initialize the text color picker default colors.
//	m_cpText.SetColor(RGB(240, 200, 128));
	m_cpText.SetColor(RGB(0xff,0xff,0xff));
	m_cpText.SetDefaultColor(m_clrRowText);

	// set the text and back colors for the list control.
	m_List1.SetRowColors(m_cpText.GetColor(), m_cpBack.GetColor());
	m_List2.SetRowColors(m_cpText.GetColor(), m_cpBack.GetColor());
	m_List3.SetRowColors(m_cpText.GetColor(), m_cpBack.GetColor());

	// set some extnded styles
//	m_List1.SetExtendedStyle (LVS_EX_FULLROWSELECT|LVS_EX_FLATSB);
	m_List1.SetExtendedStyle (LVS_EX_FULLROWSELECT | LVS_EX_GRIDLINES|LVS_EX_FULLROWSELECT|LVS_EX_FLATSB);
	m_List2.SetExtendedStyle (LVS_EX_FULLROWSELECT | LVS_EX_GRIDLINES|LVS_EX_FULLROWSELECT|LVS_EX_FLATSB);
	m_List3.SetExtendedStyle (LVS_EX_FULLROWSELECT | LVS_EX_GRIDLINES|LVS_EX_FULLROWSELECT|LVS_EX_FLATSB);

/*	m_bAscending=TRUE;
	m_nSortedCol=0;

	m_flatHeader.SetSortImage (m_nSortedCol, m_bAscending);

			// TODO: Add your sorting code here.
	CXTSortClass csc (&m_ctrlListMonitor, m_nSortedCol);
	csc.Sort (m_bAscending ? true : false, DT_INT);*/


	for (int iItem = 0; iItem < 20; ++iItem)
	{
		CString strItem = _T("");
		m_List1.InsertItem(iItem, strItem, 0);
		m_List2.InsertItem(iItem, strItem, 0);
		m_List3.InsertItem(iItem, strItem, 0);
	}


}





/*
CScrollBar* CSampleFormView::GetScrollBarCtrl(int nBar) const
{
    if (nBar == SB_HORZ)
    {
        return (CScrollBar *)&m_ScrollBarH;
    }
	
	return CFormView::GetScrollBarCtrl(nBar);
}

int CSampleFormView::OnCreate(LPCREATESTRUCT lpCreateStruct) 
{
	if (CFormView::OnCreate(lpCreateStruct) == -1)
		return -1;
	
    m_ScrollBarH.Create(WS_CHILD, CRect(0, 0, 0, 0), this, 0);

	return 0;
}

BOOL CSampleFormView::OnEraseBkgnd(CDC* pDC) 
{
	UNREFERENCED_PARAMETER(pDC);	
	return TRUE;
}

void CSampleFormView::OnPaint() 
{
	CPaintDC dc(this);
	
	// Get the client rect, and paint to a memory device context.  This will 
	// help reduce screen flicker. Pass the memory device context to the
	// default window proceedure do default painting.
	
	CRect r;
	GetClientRect(&r);
	CXTMemDC memDC(&dc, r);
	
	CFormView::DefWindowProc( WM_PAINT, (WPARAM)memDC.m_hDC, 0 );
}
*/