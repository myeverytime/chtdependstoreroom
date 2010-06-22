// XMLSerializationView.h : interface of the CXMLSerializationView class
//
/////////////////////////////////////////////////////////////////////////////

#if !defined(AFX_XMLSERIALIZATIONVIEW_H__6A1E4BF0_54D4_4640_811F_9772ECA3CD04__INCLUDED_)
#define AFX_XMLSERIALIZATIONVIEW_H__6A1E4BF0_54D4_4640_811F_9772ECA3CD04__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000


class CXMLSerializationView : public CView
{
protected: // create from serialization only
	CXMLSerializationView();
	DECLARE_DYNCREATE(CXMLSerializationView)

// Attributes
public:
	CXMLSerializationDoc* GetDocument();

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CXMLSerializationView)
	public:
	virtual void OnDraw(CDC* pDC);  // overridden to draw this view
	virtual BOOL PreCreateWindow(CREATESTRUCT& cs);
	protected:
	virtual BOOL OnPreparePrinting(CPrintInfo* pInfo);
	virtual void OnBeginPrinting(CDC* pDC, CPrintInfo* pInfo);
	virtual void OnEndPrinting(CDC* pDC, CPrintInfo* pInfo);
	//}}AFX_VIRTUAL

// Implementation
public:
	virtual ~CXMLSerializationView();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// Generated message map functions
protected:
	//{{AFX_MSG(CXMLSerializationView)
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

#ifndef _DEBUG  // debug version in XMLSerializationView.cpp
inline CXMLSerializationDoc* CXMLSerializationView::GetDocument()
   { return (CXMLSerializationDoc*)m_pDocument; }
#endif

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_XMLSERIALIZATIONVIEW_H__6A1E4BF0_54D4_4640_811F_9772ECA3CD04__INCLUDED_)
