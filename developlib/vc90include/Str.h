// Str.h: interface for the CStr class.
//
//////////////////////////////////////////////////////////////////////

#if !defined(AFX_STR_H__C7123B52_ABEA_4664_8A3A_87E6F3C469EF__INCLUDED_)
#define AFX_STR_H__C7123B52_ABEA_4664_8A3A_87E6F3C469EF__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include <string.h>

class AFX_EXT_CLASS CStr
{
public:
	// constructors and destructor
	CStr(const CStr& str);
	CStr(const char* str);
	CStr(const double var)				{ VarToString(var); }
	CStr()								{ m_nLength = 0; m_pString = 0; }
	virtual ~CStr()						{ if (m_pString) delete m_pString; }

	// operator overloading helper
	template <class T> friend CStr _cdecl operator +(T var, const CStr& str);

	// operator overloading
	CStr& operator  =(const char* str);
	CStr& operator  =(const CStr& str);
	CStr& operator  =(const double var)	{ VarToString(var); return *this; }
	template <class T>
	CStr  operator  +(T var)			{ CStr tstr = *this; return tstr += var; }
	CStr& operator +=(double str)		{ return *this += (CStr)str; }
	CStr& operator +=(const char* str)	{ return *this += (CStr)str; }
	CStr& operator +=(const CStr& str);


	// add more logic comparison operators as following, for example, although not efficient
	virtual bool operator !=(char* str)	{ return strcmp(str, m_pString) != 0; }

	// c type string conversion
	operator char* ()					{ return m_pString; }
	operator const char* ()	const		{ return m_pString; }
	char* GetChar()						{ return m_pString; }

	// numeric conversion
	template <class T> GetValue(T& var)	{ return GetVar(var); }

	// search the match string : WildCards can be '?' and '*' combination
	// return value : true (pattern matchs string), false (no match)
	bool Search(const char* WildCards)	{ return Match((char*)WildCards, m_pString); }

	// format string
	int Format(const char* format, ...);

protected:
	// can use faster algorithm for search ?
	virtual bool Match(char*, char*);
	virtual bool Scan(char*&, char*&);

	// have any good conversion method ?
	virtual void VarToString(const double var);

	// numeric conversion helpers
	bool NumericParse(void* pvar, char flag);
	bool GetVar(bool& var)				{ return NumericParse((void*)&var, 'b'); }
	bool GetVar(char& var)				{ return NumericParse((void*)&var, 'c'); }
	bool GetVar(short& var)				{ return NumericParse((void*)&var, 's'); }
	bool GetVar(int& var)				{ return NumericParse((void*)&var, 'i'); }
	bool GetVar(long& var)				{ return NumericParse((void*)&var, 'l'); }
	bool GetVar(float& var)				{ return NumericParse((void*)&var, 'f'); }
	bool GetVar(double& var)			{ return NumericParse((void*)&var, 'd'); }
	bool GetVar(unsigned char& var)		{ return NumericParse((void*)&var, 'C'); }
	bool GetVar(unsigned short& var)	{ return NumericParse((void*)&var, 'S'); }
	bool GetVar(unsigned int& var)		{ return NumericParse((void*)&var, 'I'); }
	bool GetVar(unsigned long& var)		{ return NumericParse((void*)&var, 'L'); }

	// data block
	int   m_nLength;
	char* m_pString;
};

template <class T>
CStr operator +(T var, const CStr& str) 
{ 
	CStr svar = var;
	return svar += str; 
}

#endif
