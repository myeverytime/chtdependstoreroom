// stdafx.h : include file for standard system include files,
//  or project specific include files that are used frequently, but
//      are changed infrequently
//

#if !defined(AFX_STDAFX_H__36593A16_C934_43CB_8081_D78BE9AC62BE__INCLUDED_)
#define AFX_STDAFX_H__36593A16_C934_43CB_8081_D78BE9AC62BE__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#define VC_EXTRALEAN		// Exclude rarely-used stuff from Windows headers

#include <afxwin.h>         // MFC core and standard components
#include <afxext.h>         // MFC extensions
#include <afxdisp.h>        // MFC Automation classes
#include <afxdtctl.h>		// MFC support for Internet Explorer 4 Common Controls
#ifndef _AFX_NO_AFXCMN_SUPPORT
#include <afxcmn.h>			// MFC support for Windows Common Controls
#endif // _AFX_NO_AFXCMN_SUPPORT

#import <msxml.dll>

/////////////////////////////////////////////////////////////////////////////////
// Start XML Archive support

#define DECLARE_XMLSERIAL(className) DECLARE_SERIAL(className)\
	CRuntimeClass* GetActualClass() { return className::GetRuntimeClass(); }; 
#define IMPLEMENT_XMLSERIAL(className, baseName) IMPLEMENT_SERIAL(className, baseName, 1)

//
// Example of serialization of CArray
//
#include <afxtempl.h>

template<class TYPE, class ARG_TYPE = const TYPE&>
class CArrayXML : public CArray<TYPE, ARG_TYPE>
{
public:
	virtual void Serialize(CArchive& ar)
	{
		CXMLArchive& xmlArchive = static_cast<CXMLArchive&>(ar);
		CXMLArchiveNode* curNodePtr = xmlArchive.GetCurrentNode();

		if (xmlArchive.IsStoring())
		{
			// Storing
			for (int arrayIndex = 0; arrayIndex < GetSize(); arrayIndex++)
			{
				GetAt(arrayIndex)->Serialize(xmlArchive);
			}
		}
		else
		{
			// Loading
			int numberObjects = curNodePtr->GetNoChildren();

			for (int i = 0; i < numberObjects; i++, curNodePtr->GetNextChildIndex())
			{
				CString childNodeName = curNodePtr->GetChildName(i);

				CObject* newItemPtr = CXMLArchiveNode::CreateObject(childNodeName);

				if (newItemPtr == NULL)
				{
					continue;
				}

				newItemPtr->Serialize(xmlArchive);

				Add(static_cast<TYPE>(newItemPtr));
			}
		}
	}
};

// End XML Archive support
///////////////////////////////////////////////////////////////////////////////////////


//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_STDAFX_H__36593A16_C934_43CB_8081_D78BE9AC62BE__INCLUDED_)
