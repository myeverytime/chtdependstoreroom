// MainFrm.cpp : implementation of the CMainFrame class
//

#include "stdafx.h"
#include "Draw.h"

#include "MainFrm.h"

///#include "DrawView.h"
///#include "DrawDoc.h"
///#include "DrawObj.h"
///#include "DrawButton.h"
#include "FlatTabViewView.h"
#include "FlatTabViewDoc.h"
#include "ChildFrm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CMainFrame

IMPLEMENT_DYNAMIC(CMainFrame, CXTPMDIFrameWnd)

BEGIN_MESSAGE_MAP(CMainFrame, CXTPMDIFrameWnd)
	//{{AFX_MSG_MAP(CMainFrame)
	ON_WM_CREATE()
	ON_COMMAND(ID_OnSimulation, OnSimulation)
	ON_COMMAND(ID_OnGenus, OnGenus)
	ON_COMMAND(ID_MANIPULATE, OnManipulate)
	ON_MESSAGE(WM_XTP_PRETRANSLATEMOUSEMSG, OnTabbarMouseMsg)
    ON_NOTIFY(TCN_SELCHANGE, IDC_TAB_INFO, OnSelchangeTabInfo)
	//}}AFX_MSG_MAP
	// Global help commands
	ON_COMMAND(ID_HELP_FINDER, CXTPMDIFrameWnd::OnHelpFinder)
	ON_COMMAND(ID_HELP, CXTPMDIFrameWnd::OnHelp)
	ON_COMMAND(ID_CONTEXT_HELP, CXTPMDIFrameWnd::OnContextHelp)
	ON_COMMAND(ID_DEFAULT_HELP, CXTPMDIFrameWnd::OnHelpFinder)
END_MESSAGE_MAP()

static UINT indicators[] =
{
	ID_SEPARATOR,           // status line indicator
    ID_MOUSCAPTION,
	ID_MOUSPOINT,
	ID_INDICATOR_CAPS,
	ID_INDICATOR_NUM,
	ID_INDICATOR_SCRL,
};

/////////////////////////////////////////////////////////////////////////////
// CMainFrame construction/destruction

CMainFrame::CMainFrame()
{
//	m_pSampleFormView = NULL;
	m_ontime =0;

}

CMainFrame::~CMainFrame()
{

}

int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
	if (CXTPMDIFrameWnd::OnCreate(lpCreateStruct) == -1)
		return -1;

	XTThemeManager()->SetTheme(xtThemeOffice2003);

//	if (!m_wndMenuBar.CreateEx(this, TBSTYLE_FLAT, WS_CHILD | WS_VISIBLE | CBRS_TOP
//		| CBRS_GRIPPER | CBRS_TOOLTIPS | CBRS_FLYBY | CBRS_SIZE_DYNAMIC) ||
//		!m_wndMenuBar.LoadMenuBar(IDR_MAINFRAME))
//	{
//		TRACE0("Failed to create menubar\n");
//		return -1;      // fail to create
//	}
	m_imageList.Create(16, 16, TRUE | ILC_COLOR8, 6, 0);
	HICON hIcon = NULL;

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON1), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON2), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON3), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON4), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON5), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON6), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON7), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	hIcon = (HICON)::LoadImage(::AfxGetInstanceHandle(), 
		MAKEINTRESOURCE(IDI_ICON8), IMAGE_ICON, 16, 16, 0);
	m_imageList.Add(hIcon);

	if (!m_wndStatusBar.Create(this) ||
		!m_wndStatusBar.SetIndicators(indicators,
		  sizeof(indicators)/sizeof(UINT)))
	{
		TRACE0("Failed to create status bar\n");
		return -1;      // fail to create
	}
/*
	//�����Ի���   
	if(!m_wndBar.Create(this,IDD_DIALOGBAR,WS_CHILD|WS_VISIBLE|
		CBRS_BOTTOM|CBRS_GRIPPER | CBRS_TOOLTIPS | CBRS_FLYBY | 
		CBRS_SIZE_DYNAMIC,IDD_DIALOGBAR))
	{
		TRACE0("Failed to create dialogbar\n");
		return -1;      // fail to create
	}
	//���ݶԻ����ϵ�CTabCtrl�ؼ�
	CTabCtrl * ptab=(CTabCtrl *)m_wndBar.GetDlgItem(IDC_TAB_INFO);
	ptab->InsertItem(0,"������ʾ");
	ptab->InsertItem(1,"�ϵ����");
	ptab->InsertItem(2,"�����쳣");
	ptab->InsertItem(3,"������ʾ");
	ptab->InsertItem(4,"�豸����");
	ptab->InsertItem(5,"������״̬");
	ptab->SetImageList(&((CMainFrame *)AfxGetMainWnd())->m_imageList);
    
    TC_ITEM item;
    item.mask = TCIF_IMAGE;
	item.iImage = 3;
    ptab->SetItem (0, &item );
	item.iImage = 0;
    ptab->SetItem (1, &item );

	//���غ���ʾCListBox�ؼ�
	CListBox * plistInfo = (CListBox*)m_wndBar.GetDlgItem(IDC_LIST_INFO);   //100 �ɱ�
	plistInfo->SetWindowPos(NULL,0,0,GetSystemMetrics(SM_CXSCREEN)-8,140,SWP_NOMOVE|SWP_NOZORDER | SWP_NOACTIVATE|SWP_SHOWWINDOW);

	CListBox * plistHistory = (CListBox*)m_wndBar.GetDlgItem(IDC_LIST_HISTORY);
	plistHistory->SetWindowPos(NULL,0,0,GetSystemMetrics(SM_CXSCREEN)-8,140, SWP_NOMOVE|SWP_NOZORDER | SWP_NOACTIVATE|SWP_HIDEWINDOW);
*/
	// TODO: Remove this line if you don't want cool menus.
//	InstallCoolMenus(IDR_MAINFRAME);
	if (!InitCommandBars())
		return -1;

	CXTPPaintManager::SetTheme(xtpThemeOffice2003);

	CXTPCommandBars* pCommandBars = GetCommandBars();

	CXTPCommandBar* pMenuBar = pCommandBars->SetMenu(_T("Menu Bar"), IDR_DRAWTYPE);
	pMenuBar->SetFlags(xtpFlagIgnoreSetMenuMessage | xtpFlagHideMDIButtons);  //main

	VERIFY(m_MTIClientWnd.Attach(this));
	m_MTIClientWnd.SetFlags(xtpWorkspaceHideClose);   //child
	XTPImageManager()->SetIcons(IDR_DRAWTYPE);

	CXTPOffice2003Theme::LoadModernToolbarIcons(IDR_MAINFRAME);
	CXTPOffice2003Theme::LoadModernToolbarIcons(IDR_BORDERS);

	return 0;	
}

BOOL CMainFrame::PreCreateWindow(CREATESTRUCT& cs)
{
//��Դ����->String Table->IDR_MAINFRAME��������Ϊ
//��MyDraw\n��ͼ\nMyDraw\nͼ���ļ� (*.hss)\n.hss\nMyDrow.Document\nMyDrow Document��
//�����Ϊ����ͼ-MyDraw��  �����ļ���׺��Ϊ.hss
//\nRSDraw\nRSDraw\nRSDraw �ļ� (*.rsy)\n.rsy\nRsy.Object\nRsy Document
//���ز����ļ���չ��
//����Դ�������е��������ߡ��ļ���ѡ�������ѡ��������֪�ļ����͵���չ�����������ļ�
//����չ�����������������������ֻ�����ز����ļ���չ�����ǻ�Ҫ����ע���༭��������
//����ʼ�����С������롰Regedit����س�����ע���༭����չ�� [HKEY_CLASSES_ROOT]��֧��
//�ҵ�Ҫ���ص��ļ���չ����չ����Ȼ�����Ҳര�����½��ַ���ֵ��NeverShowExt�����˳�ע���
//�༭����������������󣬸������ļ�����չ�������Զ�����������

	//�����ڵı���
//    m_strTitle ="ú��ȫ���";
	if( !CXTPMDIFrameWnd::PreCreateWindow(cs) )
		return FALSE;
	// TODO: Modify the Window class or styles here by modifying
	//  the CREATESTRUCT cs

	cs.style = WS_OVERLAPPED | WS_CAPTION | FWS_ADDTOTITLE
		| WS_THICKFRAME | WS_SYSMENU | WS_MINIMIZEBOX | WS_MAXIMIZEBOX | WS_MAXIMIZE ;

	cs.style&=~(LONG)FWS_ADDTOTITLE;     //ȥ��������ǰ�벿�ֺ͡�����
	// Helps to reduce screen flicker.
//	cs.lpszClass = AfxRegisterWndClass(0, NULL, NULL,
//		AfxGetApp()->LoadIcon(IDR_MAINFRAME));

	return TRUE;
}


LRESULT CMainFrame::OnTabbarMouseMsg(WPARAM wParam,LPARAM lParam)
{

	if (wParam != WM_RBUTTONDOWN)
		return FALSE;

	CPoint point = CPoint((DWORD)lParam);
	CXTPTabManagerItem* pItem =  m_MTIClientWnd.HitTest(point);

	if (pItem)
	{
		CWnd* pFrame = CWnd::FromHandle(pItem->GetHandle());
		MDIActivate(pFrame);

		m_MTIClientWnd.Refresh();

		CMenu menu;
		VERIFY(menu.LoadMenu(IDR_POPUP_TABS));
		CMenu* pPopup = menu.GetSubMenu(0);


		m_MTIClientWnd.WorkspaceToScreen(&point);

		CXTPCommandBars::TrackPopupMenu(pPopup, 0, point.x, point.y, this);

		m_MTIClientWnd.Refresh();

		return TRUE;
	}
	return FALSE;
}


/*
BOOL CMainFrame::ShowWindowEx(int nCmdShow)
{
	ASSERT_VALID(this);

	// Restore control bar postion.
	LoadBarState(_T("Control Bar State"));

	// Restore frame window size and position.
	m_wndPosition.LoadWindowPos(this);
	nCmdShow = m_wndPosition.showCmd;

	return ShowWindow(nCmdShow);
}
*/

/////////////////////////////////////////////////////////////////////////////
// CMainFrame diagnostics

#ifdef _DEBUG
void CMainFrame::AssertValid() const
{
	CXTMDIFrameWnd::AssertValid();
}

void CMainFrame::Dump(CDumpContext& dc) const
{
	CXTMDIFrameWnd::Dump(dc);
}

#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CMainFrame message handlers

void CMainFrame::OnSimulation() 
{
//	m_ontime = 0;
	CDocManager* pManager = AfxGetApp()->m_pDocManager ;
	if(pManager == NULL)
	{
		return ;
	}

	POSITION posTemplate = pManager->GetFirstDocTemplatePosition() ;
	while(posTemplate != NULL)
	{
		CDocTemplate* pTemplate = pManager->GetNextDocTemplate(posTemplate) ;
		POSITION posDoc = pTemplate->GetFirstDocPosition() ;
		while(posDoc != NULL)
		{
			CDrawDoc* pThisOne = (CDrawDoc *)pTemplate->GetNextDoc(posDoc) ;
			if(pThisOne->IsKindOf(RUNTIME_CLASS(CDrawDoc)))
			{
				POSITION posView = pThisOne->GetFirstViewPosition() ;
				while(posView != NULL)
				{
					CView * pView = pThisOne->GetNextView(posView) ;
					if(pView->IsKindOf(RUNTIME_CLASS(CDrawView)))
					{
						pView->GetParentFrame()->ActivateFrame() ;
					}
				}
			}
		}
	}
}

void CMainFrame::OnGenus() 
{
//	CDrawApp* pApp = (CDrawApp *)AfxGetApp() ;
//	pApp->pNewDocTemplate->OpenDocumentFile(NULL) ;

//	m_ontime = 1;

	CDocManager* pManager = AfxGetApp()->m_pDocManager ;
	if(pManager == NULL)
	{
		return ;
	}

	POSITION posTemplate = pManager->GetFirstDocTemplatePosition() ;
	while(posTemplate != NULL)
	{
		CDocTemplate* pTemplate = pManager->GetNextDocTemplate(posTemplate) ;
		POSITION posDoc = pTemplate->GetFirstDocPosition() ;
		while(posDoc != NULL)
		{
			CFlatTabViewDoc* pThisOne = (CFlatTabViewDoc *)pTemplate->GetNextDoc(posDoc) ;
			if(pThisOne->IsKindOf(RUNTIME_CLASS(CFlatTabViewDoc)))
			{
				POSITION posView = pThisOne->GetFirstViewPosition() ;
				while(posView != NULL)
				{
					CView * pView = pThisOne->GetNextView(posView) ;
					if(pView->IsKindOf(RUNTIME_CLASS(CSampleFormView)))
					{
						pView->GetParentFrame()->ActivateFrame() ;
					}
				}
			}
		}
	}
}

void CMainFrame::OnManipulate() 
{
//	m_pSampleFormView->SetInfo(_T(" %d��%d��%d�� %dʱ:%d�֣�%d��"));
}

void CMainFrame::Msg(CString str)
{
/*	CListBox * plistInfo = (CListBox*)m_wndBar.GetDlgItem(IDC_LIST_INFO);
	SYSTEMTIME tm;
	GetLocalTime(&tm);
	CString time;
	time.Format(_T(" %d��%d��%d�� %dʱ:%d�֣�%d��"), tm.wYear,tm.wMonth,tm.wDay,tm.wHour, tm.wMinute,tm.wSecond);
	plistInfo->AddString(time+"        "+str);
	int numList=plistInfo->GetCount()-1;
	plistInfo->SetTopIndex(numList);
	plistInfo->SetCurSel(numList);
*/
	//ˮƽ����
/*	int max_width=0;
	CSize sz;
	CClientDC dc(this);
	for(int i=0;i<plistInfo->GetCount();i++)
	{
		plistInfo->GetText(i,str);
		sz=dc.GetTextExtent(str);
		if(max_width<sz.cx)
			max_width=sz.cx;
	}
	plistInfo->SendMessage(LB_SETHORIZONTALEXTENT,max_width,0);
*/
//	CMainFrame* pFWnd=(CMainFrame*)AfxGetMainWnd();
//	pFWnd->m_TaskListBar=this;	
//	m_TaskListBar->SetWarnInfo();

}

void CMainFrame::OnSelchangeTabInfo(NMHDR* pNMHDR, LRESULT* pResult) 
{
	// TODO: Add your control notification handler code here

/*	CTabCtrl * ptab=(CTabCtrl *)m_wndBar.GetDlgItem(IDC_TAB_INFO);
	CListBox * plistHistory = (CListBox*)m_wndBar.GetDlgItem(IDC_LIST_HISTORY);
	CListBox * plistInfo = (CListBox*)m_wndBar.GetDlgItem(IDC_LIST_INFO);
	int currenttab=ptab->GetCurSel();	
//	UINT currentWin=((CMainFrame*)AfxGetMainWnd())->m_currentwin;
	if(currenttab==0)
	{	
		plistInfo->ShowWindow(SW_SHOW);;
		plistHistory->ShowWindow(SW_HIDE);
	}
	else
	{
		plistHistory->ShowWindow(SW_SHOW);
		plistInfo->ShowWindow(SW_HIDE);
	}

	plistHistory->ResetContent();
	plistHistory->AddString("��ǰû����ʷ��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��ǰû����ʷ��¼��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	plistHistory->AddString("��ǰû����ʷ��¼");
	//������û�������ʷ��¼
//	plistInfo->ResetContent();
*/


//	*pResult = 0;
}


void CMainFrame::MsgDel()
{
	CListBox * plistInfo = (CListBox*)m_wndBar.GetDlgItem(IDC_LIST_INFO);
	int numList=plistInfo->GetCount()-1;
	plistInfo->DeleteString(numList);
}
