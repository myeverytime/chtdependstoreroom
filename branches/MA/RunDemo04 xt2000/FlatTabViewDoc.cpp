// FlatTabViewDoc.cpp : implementation of the CFlatTabViewDoc class
//

#include "stdafx.h"
#include "Draw.h"

#include "FlatTabViewDoc.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CFlatTabViewDoc

IMPLEMENT_DYNCREATE(CFlatTabViewDoc, CDocument)

BEGIN_MESSAGE_MAP(CFlatTabViewDoc, CDocument)
	//{{AFX_MSG_MAP(CFlatTabViewDoc)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code!
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CFlatTabViewDoc construction/destruction

CFlatTabViewDoc::CFlatTabViewDoc()
{
	// TODO: add one-time construction code here

}

CFlatTabViewDoc::~CFlatTabViewDoc()
{
}

BOOL CFlatTabViewDoc::OnNewDocument()
{
	if (!CDocument::OnNewDocument())
		return FALSE;

	// TODO: add reinitialization code here
	// (SDI documents will reuse this document)

	return TRUE;
}



/////////////////////////////////////////////////////////////////////////////
// CFlatTabViewDoc serialization

void CFlatTabViewDoc::Serialize(CArchive& ar)
{
	if (ar.IsStoring())
	{
		// TODO: add storing code here
	}
	else
	{
		// TODO: add loading code here
	}
}

/////////////////////////////////////////////////////////////////////////////
// CFlatTabViewDoc diagnostics

#ifdef _DEBUG
void CFlatTabViewDoc::AssertValid() const
{
	CDocument::AssertValid();
}

void CFlatTabViewDoc::Dump(CDumpContext& dc) const
{
	CDocument::Dump(dc);
}
#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CFlatTabViewDoc commands