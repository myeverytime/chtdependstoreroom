#include "stdafx.h"
#include "sqlcolumn.h"
#include <afxdb.h>

CSQLColumn::CSQLColumn()
{
	m_nCol=0;
	m_nType=SQL_C_DEFAULT;
	m_svValue="";
}

CSQLColumn::~CSQLColumn()
{
}
