#if !defined(AFX_ITEM_H__9DD28C1C_C5C2_4CDB_9D09_D54FA75B418E__INCLUDED_)
#define AFX_ITEM_H__9DD28C1C_C5C2_4CDB_9D09_D54FA75B418E__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Item.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CItem
//
class CItem : public CObject
{
	CItem(const CItem& src);            
	void operator=(const CItem& src);   

	DECLARE_XMLSERIAL(CItem)

// Construction
public:
	CItem();

// Attributes
public:

	int			m_intAttribute;
	CTime		m_timeAttribute;
	CString		m_stringAttribute;
	bool		m_boolAtribute;
	double		m_doubleAttribute;
	CStringArray m_stringArrayAttribute;

// Implementation
public:
	virtual ~CItem();
	virtual void Serialize(CArchive &ar);

};

/////////////////////////////////////////////////////////////////////////////
// CDerivedItem
//
class CDerivedItem : public CItem
{
	CDerivedItem(const CDerivedItem& src);            
	void operator=(const CDerivedItem& src);   

	DECLARE_XMLSERIAL(CDerivedItem)

// Construction
public:
	CDerivedItem();

// Attributes
public:
	enum { eFIRST, eSECOND } m_enumAttribute;
	
// Implementation
public:
	virtual ~CDerivedItem();
	virtual void Serialize(CArchive &ar);

};


/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ITEM_H__9DD28C1C_C5C2_4CDB_9D09_D54FA75B418E__INCLUDED_)
