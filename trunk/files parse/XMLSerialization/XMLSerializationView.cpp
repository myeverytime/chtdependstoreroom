// XMLSerializationView.cpp : implementation of the CXMLSerializationView class
//

#include "stdafx.h"
#include "XMLSerialization.h"

#include "XMLSerializationDoc.h"
#include "XMLSerializationView.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationView

IMPLEMENT_DYNCREATE(CXMLSerializationView, CView)

BEGIN_MESSAGE_MAP(CXMLSerializationView, CView)
	//{{AFX_MSG_MAP(CXMLSerializationView)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code!
	//}}AFX_MSG_MAP
	// Standard printing commands
	ON_COMMAND(ID_FILE_PRINT, CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_DIRECT, CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_PREVIEW, CView::OnFilePrintPreview)
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationView construction/destruction

CXMLSerializationView::CXMLSerializationView()
{
	// TODO: add construction code here

}

CXMLSerializationView::~CXMLSerializationView()
{
}

BOOL CXMLSerializationView::PreCreateWindow(CREATESTRUCT& cs)
{
	// TODO: Modify the Window class or styles here by modifying
	//  the CREATESTRUCT cs

	return CView::PreCreateWindow(cs);
}

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationView drawing

void CXMLSerializationView::OnDraw(CDC* pDC)
{
	CXMLSerializationDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	// TODO: add draw code for native data here
}

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationView printing

BOOL CXMLSerializationView::OnPreparePrinting(CPrintInfo* pInfo)
{
	// default preparation
	return DoPreparePrinting(pInfo);
}

void CXMLSerializationView::OnBeginPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add extra initialization before printing
}

void CXMLSerializationView::OnEndPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add cleanup after printing
}

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationView diagnostics

#ifdef _DEBUG
void CXMLSerializationView::AssertValid() const
{
	CView::AssertValid();
}

void CXMLSerializationView::Dump(CDumpContext& dc) const
{
	CView::Dump(dc);
}

CXMLSerializationDoc* CXMLSerializationView::GetDocument() // non-debug version is inline
{
	ASSERT(m_pDocument->IsKindOf(RUNTIME_CLASS(CXMLSerializationDoc)));
	return (CXMLSerializationDoc*)m_pDocument;
}
#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationView message handlers
