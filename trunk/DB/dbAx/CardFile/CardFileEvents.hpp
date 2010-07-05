
#pragma once
#include <AxLib.h>

using namespace dbAx;

class CCardFileEvents :
    public CAxConnectionEvents
{
public:

    STDMETHOD(ConnectComplete)(ADOError * pError,
               EventStatusEnum * adStatus,
               _ADOConnection * pConnection)
      {
        AfxMessageBox(_T("Connected to CardFile"));
        return S_OK;
      }
};