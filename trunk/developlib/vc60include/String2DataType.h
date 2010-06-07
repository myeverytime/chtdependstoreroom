// String2DataType.h: interface for the CString2DataType class.
//
//////////////////////////////////////////////////////////////////////

#if !defined(AFX_STRING2DATATYPE_H__8BC63FA1_F2F2_446F_BA98_1F311D1722C2__INCLUDED_)
#define AFX_STRING2DATATYPE_H__8BC63FA1_F2F2_446F_BA98_1F311D1722C2__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include <list>
#include <map>
using namespace std;

// Exported functions.

class AFX_EXT_CLASS CString2DataType  
{
public:
	unsigned char Str2HEX(CString strData);
	unsigned char GetBitValue(unsigned char ucCh,unsigned char ucBitNo);
	CString Char2Binary(unsigned char ucCh);
	BOOL Str2Bool(CString str);
	CString Int2CString(int nInt);
	int String2Int(CString str);
	int reduceBCD2Int(unsigned char nchar);
	double String2Double(CString str);
	CString2DataType();
	virtual ~CString2DataType();

	CString str1,str2,str3;

    void TokenizeString(const CString& strInput, const CString& strDelim, std::list<CString>& tokenList);
	bool StringToBool(const CString& s, bool& flag);
	bool StringToInteger(const CString& s, int& val);
	bool StringToItems(const CString& s, std::list<CString>& itemList);
	bool StringToSize(const CString& s, const CString& t, CSize& size);
	bool StringToLocation(const CString& s, const CString& t, CPoint& location);
	bool Splittoint(const CString& s, int& val1,int& val2,int& val3);
    bool SplittoCString(const CString& s, LPCTSTR& val1,LPCTSTR& val2,LPCTSTR& val3);
private:
	char HexChar(char c);

};

#endif // !defined(AFX_STRING2DATATYPE_H__8BC63FA1_F2F2_446F_BA98_1F311D1722C2__INCLUDED_)
