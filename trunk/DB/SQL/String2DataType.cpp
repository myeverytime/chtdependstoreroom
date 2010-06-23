// String2DataType.cpp: implementation of the CString2DataType class.
//
//////////////////////////////////////////////////////////////////////

#include "stdafx.h"
#include "String2DataType.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[]=__FILE__;
#define new DEBUG_NEW
#endif

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

CString2DataType::CString2DataType()
{

}

CString2DataType::~CString2DataType()
{

}

// Tokenize a CString
void CString2DataType::TokenizeString(const LPCTSTR& strInput0, const LPCTSTR& strDelim0, list<CString>& tokenList)
{
    // Clear the target list.
    tokenList.clear();

	CString strInput = strInput0;
	CString strDelim = strDelim0;
    // Check for empty input string.
    if ( strInput.IsEmpty() )
        return;

    // Check for empty delimiter.
    if ( strDelim.IsEmpty() && !strInput.IsEmpty() )
    {
        tokenList.push_back(strInput);
        return;
    }

    // Proceed with tokenizing.
    CString currToken = _T("");
    int nInputLen = strInput.GetLength();
    for(int i = 0; i < nInputLen; ++i)
    {
        // Check if there is a delimiter at position i.
        if ( i < (nInputLen - strDelim.GetLength() + 1) &&
             strInput.Mid(i, strDelim.GetLength()).Compare(strDelim) == 0 )
        {
            if ( !currToken.IsEmpty() )
                tokenList.push_back(currToken);
            currToken = _T("");

            i += (strDelim.GetLength() - 1);
        } 
        else
        {
            currToken += strInput.GetAt(i);
        }
    }
    if ( !currToken.IsEmpty() )
        tokenList.push_back(currToken);

}


int CString2DataType::String2Int(LPCTSTR str)
{
	char *temp=(char*)((LPCTSTR)str);
	return(atoi(temp));
}

bool CString2DataType::StringToInteger(const LPCTSTR& s0, int& val)
{
	CString s = s0;
    if ( s.IsEmpty() )
        return false;

    val = _ttoi(s);

    return true;
}

double CString2DataType::String2Double(LPCTSTR str)
{
	char *temp=(char*)((LPCTSTR)str);
	return (atof(temp));
}

LPCTSTR CString2DataType::Int2CString(int nInt)
{
	CString strtemp;
	strtemp.Format("%d",nInt);
	return(strtemp);
}

BOOL CString2DataType::Str2Bool(LPCTSTR str)
{
	char *temp=(char*)((LPCTSTR)str);
	if(atoi(temp))
		return TRUE;
	else
		return FALSE;
}

bool CString2DataType::StringToBool(const LPCTSTR& s0, bool& flag)
{
	CString s = s0;
    if ( s.IsEmpty() )
        return false;

    if ( s.CompareNoCase(_T("true")) == 0 )
        flag = true;
    else
        flag = false;

    return true;
}
LPCTSTR CString2DataType::Char2Binary(unsigned char ucCh)
{
	CString str=_T("");
	unsigned char ucnn=0x80;
	for(int i=0;i<8;i++)
	{
		if(ucCh & ucnn)
			str+="1";
		else
			str+="0";
		ucnn>>=1;
	}
	return str;

}


//得到一个无符号字符位的值,0=<ucBitNo<=7
unsigned char CString2DataType::GetBitValue(unsigned char ucCh,unsigned char ucBitNo)
{
	unsigned char ucnn=0x01;
	ucnn<<=ucBitNo;
	if(ucnn&ucCh)
		return 1;
	else
		return 0;
}


//限制在0…256，strData最多为2个字符
unsigned char CString2DataType::Str2HEX(LPCTSTR strData0)
{
	CString strData = strData0;
	int t,t1;
	strData.Replace(" ",""); //不能含空格
	int rlen=0,len=strData.GetLength();
	if(len>2)
		strData=strData.Left(2);
	if(len==1)
		strData="0"+strData;
	char h=strData[0];
	char l=strData[1];
	t=HexChar(h);
	t1=HexChar(l);
	if((t==16)||(t1==16))
		return 0;
	t=t*16+t1;
	return t;
}

char CString2DataType::HexChar(char c)
{
	if((c>='0')&&(c<='9'))
		return c-0x30;
	else if((c>='A')&&(c<='F'))
		return c-'A'+10;
	else if((c>='a')&&(c<='f'))
		return c-'a'+10;
	else 
		return 0x10;

}

int CString2DataType::reduceBCD2Int(unsigned char nchar)
{
    unsigned char nl,nh;
	int bcd2int;
	nh =nchar & 0xf0;
	nl =nchar & 0x0f;
	if(nh < 0xa0)
	{
    	if(nl < 0x0a)
		{
			bcd2int = nh/16*10 + nl;
            return bcd2int;
		}
		else
    		return 100;
	}
	else
    	return 100;

}

bool CString2DataType::StringToItems(const LPCTSTR& s0, std::list<CString>& itemList)
{
	CString s = s0;
    if ( s.IsEmpty() )
        return false;

   TokenizeString(s, _T("|"), itemList);

   return true;
}

bool CString2DataType::StringToLocation(const LPCTSTR& s0, const LPCTSTR& t0, CPoint& location)
{
	CString s = s0;
	CString t = t0;
    if ( s.IsEmpty() || t.IsEmpty() )
        return false;

    location.x = _ttoi(s);
    location.y = _ttoi(t);

    return true;
}

bool CString2DataType::StringToSize(const LPCTSTR& s0, const LPCTSTR& t0, CSize& size)
{
	CString s = s0;
	CString t = t0;
    if ( s.IsEmpty() || t.IsEmpty() )
        return false;

    size.cx = _ttoi(s);
    size.cy = _ttoi(t);

    return true;
}

bool CString2DataType::Splittoint(const LPCTSTR& s0, int& val1,int& val2,int& val3)
{
	CString s = s0;
   if ( s.IsEmpty() )
        return false;

   list<CString> tokenList;
   TokenizeString(s, _T(","), tokenList);
   list<CString>::iterator theIterator;
   theIterator = tokenList.begin();
        val1 = _ttoi(*theIterator);
   theIterator++;
        val2 = _ttoi(*theIterator);
   theIterator++;
        val3 = _ttoi(*theIterator);

   return true;
}

bool CString2DataType::SplittoCString(const LPCTSTR& s0, LPCTSTR& val1,LPCTSTR& val2,LPCTSTR& val3)
{
	CString s = s0;
   if ( s.IsEmpty() )
        return false;

   list<CString> tokenList;
   TokenizeString(s, _T("|"), tokenList);
   list<CString>::iterator theIterator;
        theIterator = tokenList.begin();
        val1 = *theIterator;
   if(tokenList.size()-1 >0)
   {
       theIterator++;
        val2 = *theIterator;
   }
   if(tokenList.size()-2 >0)
   {
        theIterator++;
        val3 = *theIterator;
   }
/*
    if ( tokenList.size() > 0 )
    {
        val1 = tokenList.front();
        tokenList.pop_front();
    }
    if ( tokenList.size() > 0 )
    {
        val2 = tokenList.front();
        tokenList.pop_front();
    }
    if ( tokenList.size() > 0 )
    {
        val3 = tokenList.front();
    }*/
   return true;
}