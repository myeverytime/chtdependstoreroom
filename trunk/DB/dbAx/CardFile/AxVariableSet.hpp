/**************************************************************************
    File: AxVariableSet.hpp
    Date: 11/19/2007
      By: Data Management Systems (www.dmsic.com)

    DESCRIPTION
    The following source code was generated using the AxGen utility and is
    intended to be used in conjunction with the dbAx library. This class
    facilitates the exchange of data with the ADO data source from which
    it was derived.

    Table: ENGR1-FS\WBF_Vault\Variable

    Include this file in your project.

    DISCLAIMER
    This source code is provided AS-IS with no warranty as to its
    suitability or usefulness in any application in which it may be used.
**************************************************************************/

#pragma once
#include <AxLib.h>

using namespace dbAx;

class CAxVariableSet :
    public CAxRecordset
{
public:
  CAxVariableSet() { _SetDefaults(); }
  ~CAxVariableSet() { }

  int             m_iVariableID;
  CString         m_szVariableName;
  int             m_iVariableType;
  BOOL            m_bIsDeleted;
  BOOL            m_bFlagUnique;
  BOOL            m_bFlagMandatory;

  //Set default values of class members
  void _SetDefaults()
  {
    m_iVariableID      = 0;
    m_szVariableName   = _T("");
    m_iVariableType    = 0;
    m_bIsDeleted       = FALSE;
    m_bFlagUnique      = FALSE;
    m_bFlagMandatory   = FALSE;
  };

  //Exchange field values with data provider
  void DoFieldExchange(BOOL bSave = FALSE)
  {
    FX_Integer           (bSave, _T("VariableID"),     m_iVariableID);
    FX_NVarChar          (bSave, _T("VariableName"),   m_szVariableName);
    FX_Integer           (bSave, _T("VariableType"),   m_iVariableType);
    FX_Bool              (bSave, _T("IsDeleted"),      m_bIsDeleted);
    FX_Bool              (bSave, _T("FlagUnique"),     m_bFlagUnique);
    FX_Bool              (bSave, _T("FlagMandatory"),  m_bFlagMandatory);
  };
};
