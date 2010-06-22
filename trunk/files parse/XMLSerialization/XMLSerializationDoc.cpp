// XMLSerializationDoc.cpp : implementation of the CXMLSerializationDoc class
//

#include "stdafx.h"
#include "xmlarchive.h"
#include "XMLSerialization.h"
#include "XMLSerializationDoc.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationDoc

IMPLEMENT_XMLSERIAL(CXMLSerializationDoc, CDocument)

BEGIN_MESSAGE_MAP(CXMLSerializationDoc, CDocument)
	//{{AFX_MSG_MAP(CXMLSerializationDoc)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code!
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationDoc construction/destruction

CXMLSerializationDoc::CXMLSerializationDoc()
{
	// TODO: add one-time construction code here

}

CXMLSerializationDoc::~CXMLSerializationDoc()
{
}

BOOL CXMLSerializationDoc::OnNewDocument()
{
	if (!CDocument::OnNewDocument())
		return FALSE;

	m_itemArray.Add(new CItem);
	m_itemArray.Add(new CDerivedItem);
	m_itemArray.Add(new CItem);
	m_itemArray.Add(new CDerivedItem);
	m_itemArray.Add(new CItem);
	m_itemArray.Add(new CItem);
	m_itemArray.Add(new CDerivedItem);

	return TRUE;
}



/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationDoc serialization

void CXMLSerializationDoc::Serialize(CArchive& ar)
{
	XMLCLASSNODE;
	XMLDATA(m_itemArray);
	XMLDATA(m_singleItem);
	XMLENDNODE;
}

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationDoc diagnostics

#ifdef _DEBUG
void CXMLSerializationDoc::AssertValid() const
{
	CDocument::AssertValid();
}

void CXMLSerializationDoc::Dump(CDumpContext& dc) const
{
	CDocument::Dump(dc);
}
#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CXMLSerializationDoc commands

BOOL CXMLSerializationDoc::OnSaveDocument(LPCTSTR lpszPathName) 
{
	TRY
	{
		CWaitCursor wait;
		CXMLArchive xmlArchive(lpszPathName, CArchive::store, NULL, this);
		Serialize(xmlArchive);     // save me
	}

	CATCH_ALL(e)
	{
		TRY
		{
			ReportSaveLoadException(lpszPathName, e,
				TRUE, AFX_IDP_FAILED_TO_SAVE_DOC);
		}
		END_TRY
		delete e;
		return FALSE;
	}
	END_CATCH_ALL

	SetModifiedFlag(FALSE);     // back to unmodified

	return TRUE;        // success
	
}

BOOL CXMLSerializationDoc::OnOpenDocument(LPCTSTR lpszPathName)
{
	TRY
	{
		CWaitCursor wait;
		CXMLArchive xmlArchive(lpszPathName, CArchive::load, NULL, this);
		Serialize(xmlArchive);     // load me
	}
	CATCH_ALL(e)
	{
		DeleteContents();   // remove failed contents

		ReportSaveLoadException(lpszPathName, e,
			FALSE, AFX_IDP_FAILED_TO_OPEN_DOC);

		delete e;
	}
	END_CATCH_ALL

	SetModifiedFlag(FALSE);     // start off with unmodified
	
	return TRUE;
}

void CXMLSerializationDoc::OnCloseDocument() 
{

	for (int i = m_itemArray.GetUpperBound(); i >= 0; i--)
	{
		delete m_itemArray[i];
	}

	m_itemArray.RemoveAll();

	CDocument::OnCloseDocument();
}
