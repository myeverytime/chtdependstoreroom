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
	unsigned char Str2HEX(LPCTSTR strData0);
	unsigned char GetBitValue(unsigned char ucCh,unsigned char ucBitNo);
	LPCTSTR Char2Binary(unsigned char ucCh);
	BOOL Str2Bool(LPCTSTR str);
	LPCTSTR Int2CString(int nInt);
	int String2Int(LPCTSTR str);
	int reduceBCD2Int(unsigned char nchar);
	double String2Double(LPCTSTR str);
	CString2DataType();
	virtual ~CString2DataType();

	CString str1,str2,str3;

    void TokenizeString(const LPCTSTR& strInput0, const LPCTSTR& strDelim0, std::list<CString>& tokenList);
	bool StringToBool(const LPCTSTR& s0, bool& flag);
	bool StringToInteger(const LPCTSTR& s0, int& val);
	bool StringToItems(const LPCTSTR& s0, std::list<CString>& itemList);
	bool StringToSize(const LPCTSTR& s0, const LPCTSTR& t0, CSize& size);
	bool StringToLocation(const LPCTSTR& s0, const LPCTSTR& t0, CPoint& location);
	bool Splittoint(const LPCTSTR& s, int& val1,int& val2,int& val3);
    bool SplittoCString(const LPCTSTR& s0, LPCTSTR& val1,LPCTSTR& val2,LPCTSTR& val3);
private:
	char HexChar(char c);

};

#endif // !defined(AFX_STRING2DATATYPE_H__8BC63FA1_F2F2_446F_BA98_1F311D1722C2__INCLUDED_)
