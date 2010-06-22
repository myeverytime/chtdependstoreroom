/**************************************************************************
    File: AxContactsCmd.hpp
    Date: 11/19/2007
      By: Data Management Systems (www.dmsic.com)

    DESCRIPTION
    The following source code was generated using the AxGen utility and is
    intended to be used in conjunction with the dbAx library. This class
    enables access to stored procedures of the data provider from which it
    was derived.

    Stored Proc: (local)\CardFile\get_Contacts

    Include this file in your project.

    DISCLAIMER
    This source code is provided AS-IS with no warranty as to its
    suitability or usefulness in any application in which it may be used.
**************************************************************************/
#pragma once
#include <AxLib.h>

using namespace dbAx;

class CAxContactsCmd :
    public CAxCommand
{
public:
  CAxContactsCmd() { }
  ~CAxContactsCmd() { }

  //Attributes
  CString   m_szAccntIDParam;

  //Create command parameters
  void _CreateParameters()
  {
    CreateParameter(_T("AccntID"), adVarChar, adParamInput, 32,
      &_variant_t((LPCTSTR) m_szAccntIDParam));
  };

  //Update command parameters
  void _UpdateParameters()
  {
    _SetParamValue(_T("AccntID"), &_variant_t((LPCTSTR) m_szAccntIDParam));
  };
};
