// Item.cpp : implementation file
//

#include "stdafx.h"
#include "xmlarchive.h"
#include "XMLSerialization.h"
#include "Item.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CItem

IMPLEMENT_XMLSERIAL(CItem, CObject)

CItem::CItem()
{
	static int sequentialNo = 0;

	m_intAttribute = sequentialNo++;
	m_timeAttribute = CTime::GetCurrentTime();
	m_stringAttribute.Format(_T("Yet another string %d"), m_intAttribute);
	m_boolAtribute = false;
	m_doubleAttribute = m_intAttribute;
	m_stringArrayAttribute.Add(_T("Ciao"));
	m_stringArrayAttribute.Add(_T("Hello"));
	m_stringArrayAttribute.Add(_T("Goodbye"));
}

CItem::~CItem()
{
}

void CItem::Serialize(CArchive& ar)
{
	XMLCLASSNODE

	// Do not call CObject::Serialize() , it's not XML aware !
	
	XMLDATA(m_timeAttribute);
	XMLDATA(m_stringAttribute);
	XMLDATA(m_boolAtribute);
	XMLDATA(m_doubleAttribute);
	XMLDATA(m_stringArrayAttribute);
	
	XMLENDNODE

}

////////////////////////////////////////////////////////////////////////////
// CDerivedItem

IMPLEMENT_XMLSERIAL(CDerivedItem, CItem)

CDerivedItem::CDerivedItem()
{
	static int sequentialNo = 0;

	m_enumAttribute = eFIRST;

}

CDerivedItem::~CDerivedItem()
{
}

void CDerivedItem::Serialize(CArchive& ar)
{
	XMLCLASSNODE

	// Allow base class to serialize itself
	CItem::Serialize(ar);

	XMLINTDATA(m_enumAttribute);
	
	XMLENDNODE

}