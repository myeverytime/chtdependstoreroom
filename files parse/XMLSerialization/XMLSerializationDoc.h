// XMLSerializationDoc.h : interface of the CXMLSerializationDoc class
//
/////////////////////////////////////////////////////////////////////////////

#if !defined(AFX_XMLSERIALIZATIONDOC_H__1C9F0E03_9647_4218_B0D6_A9C5EB6BFEC5__INCLUDED_)
#define AFX_XMLSERIALIZATIONDOC_H__1C9F0E03_9647_4218_B0D6_A9C5EB6BFEC5__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include <afxtempl.h>
#include "xmlarchive.h"
#include "item.h"

class CXMLSerializationDoc : public CDocument
{
protected: // create from serialization only
	CXMLSerializationDoc();
	DECLARE_XMLSERIAL(CXMLSerializationDoc)

// Attributes
public:

	CArrayXML <CItem*, CItem*> m_itemArray;
	CItem	m_singleItem;

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CXMLSerializationDoc)
	public:
	virtual BOOL OnNewDocument();
	virtual void Serialize(CArchive& ar);
	virtual BOOL OnSaveDocument(LPCTSTR lpszPathName);
	virtual void OnCloseDocument();
	//}}AFX_VIRTUAL

// Implementation
public:
	virtual ~CXMLSerializationDoc();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// Generated message map functions
protected:
	//{{AFX_MSG(CXMLSerializationDoc)
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
public:
	virtual BOOL OnOpenDocument(LPCTSTR lpszPathName);
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_XMLSERIALIZATIONDOC_H__1C9F0E03_9647_4218_B0D6_A9C5EB6BFEC5__INCLUDED_)
