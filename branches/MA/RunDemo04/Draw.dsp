# Microsoft Developer Studio Project File - Name="Draw" - Package Owner=<4>
# Microsoft Developer Studio Generated Build File, Format Version 6.00
# ** DO NOT EDIT **

# TARGTYPE "Win32 (x86) Application" 0x0101

CFG=Draw - Win32 Debug
!MESSAGE This is not a valid makefile. To build this project using NMAKE,
!MESSAGE use the Export Makefile command and run
!MESSAGE 
!MESSAGE NMAKE /f "Draw.mak".
!MESSAGE 
!MESSAGE You can specify a configuration when running NMAKE
!MESSAGE by defining the macro CFG on the command line. For example:
!MESSAGE 
!MESSAGE NMAKE /f "Draw.mak" CFG="Draw - Win32 Debug"
!MESSAGE 
!MESSAGE Possible choices for configuration are:
!MESSAGE 
!MESSAGE "Draw - Win32 Release" (based on "Win32 (x86) Application")
!MESSAGE "Draw - Win32 Debug" (based on "Win32 (x86) Application")
!MESSAGE 

# Begin Project
# PROP AllowPerConfigDependencies 0
# PROP Scc_ProjName ""
# PROP Scc_LocalPath ""
CPP=cl.exe
MTL=midl.exe
RSC=rc.exe

!IF  "$(CFG)" == "Draw - Win32 Release"

# PROP BASE Use_MFC 2
# PROP BASE Use_Debug_Libraries 0
# PROP BASE Output_Dir "Release"
# PROP BASE Intermediate_Dir "Release"
# PROP BASE Target_Dir ""
# PROP Use_MFC 1
# PROP Use_Debug_Libraries 0
# PROP Output_Dir "Release"
# PROP Intermediate_Dir "Release"
# PROP Ignore_Export_Lib 0
# PROP Target_Dir ""
# ADD BASE CPP /nologo /MD /W3 /GX /O2 /D "WIN32" /D "NDEBUG" /D "_WINDOWS" /D "_AFXDLL" /Yu"stdafx.h" /FD /c
# ADD CPP /nologo /MT /W3 /GX /Zi /O2 /D "WIN32" /D "NDEBUG" /D "_WINDOWS" /D "_MBCS" /FR /Yu"stdafx.h" /FD /c
# ADD BASE MTL /nologo /D "NDEBUG" /mktyplib203 /win32
# ADD MTL /nologo /D "NDEBUG" /mktyplib203 /win32
# ADD BASE RSC /l 0x804 /d "NDEBUG" /d "_AFXDLL"
# ADD RSC /l 0x804 /d "NDEBUG"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
LINK32=link.exe
# ADD BASE LINK32 /nologo /subsystem:windows /machine:I386
# ADD LINK32 winmm.lib /nologo /subsystem:windows /debug /machine:I386 /out:"Dll\YRun.exe"

!ELSEIF  "$(CFG)" == "Draw - Win32 Debug"

# PROP BASE Use_MFC 2
# PROP BASE Use_Debug_Libraries 1
# PROP BASE Output_Dir "Debug"
# PROP BASE Intermediate_Dir "Debug"
# PROP BASE Target_Dir ""
# PROP Use_MFC 2
# PROP Use_Debug_Libraries 1
# PROP Output_Dir "Debug"
# PROP Intermediate_Dir "Debug"
# PROP Ignore_Export_Lib 0
# PROP Target_Dir ""
# ADD BASE CPP /nologo /MDd /W3 /Gm /GX /ZI /Od /D "WIN32" /D "_DEBUG" /D "_WINDOWS" /D "_AFXDLL" /Yu"stdafx.h" /FD /GZ /c
# ADD CPP /nologo /MDd /W3 /Gm /GX /ZI /Od /D "WIN32" /D "_DEBUG" /D "_WINDOWS" /D "_AFXDLL" /D "_MBCS" /Yu"stdafx.h" /FD /GZ /c
# ADD BASE MTL /nologo /D "_DEBUG" /mktyplib203 /win32
# ADD MTL /nologo /D "_DEBUG" /mktyplib203 /win32
# ADD BASE RSC /l 0x804 /d "_DEBUG" /d "_AFXDLL"
# ADD RSC /l 0x804 /d "_DEBUG" /d "_AFXDLL"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
LINK32=link.exe
# ADD BASE LINK32 /nologo /subsystem:windows /debug /machine:I386 /pdbtype:sept
# ADD LINK32 gdiplus.lib winspool.lib /nologo /subsystem:windows /debug /machine:I386 /out:"Dll/Run.exe" /pdbtype:sept

!ENDIF 

# Begin Target

# Name "Draw - Win32 Release"
# Name "Draw - Win32 Debug"
# Begin Group "Source Files"

# PROP Default_Filter "cpp;c;cxx;rc;def;r;odl;idl;hpj;bat"
# Begin Group "Draw Source"

# PROP Default_Filter ""
# Begin Source File

SOURCE=.\DrawButton.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawCar.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawChart.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawConduit.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawObj.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawPoly.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawRect.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawRotary.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawWarn.cpp
# End Source File
# End Group
# Begin Source File

SOURCE=.\ChildFrm.cpp
# End Source File
# Begin Source File

SOURCE=.\Draw.cpp
# End Source File
# Begin Source File

SOURCE=.\Draw.rc
# End Source File
# Begin Source File

SOURCE=.\DrawDoc.cpp
# End Source File
# Begin Source File

SOURCE=.\DrawView.cpp
# End Source File
# Begin Source File

SOURCE=.\FlatTabPropDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\FlatTabViewDoc.cpp
# End Source File
# Begin Source File

SOURCE=.\FlatTabViewView.cpp
# End Source File
# Begin Source File

SOURCE=.\IniFile.cpp
# End Source File
# Begin Source File

SOURCE=.\MainFrm.cpp
# End Source File
# Begin Source File

SOURCE=.\MQClient.cpp
# End Source File
# Begin Source File

SOURCE=.\ResourceViewPane.cpp
# End Source File
# Begin Source File

SOURCE=.\SampleFormView.cpp
# End Source File
# Begin Source File

SOURCE=.\SetTimeDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\SettingHostDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\SrvrItem.cpp
# End Source File
# Begin Source File

SOURCE=.\StdAfx.cpp
# ADD CPP /Yc"stdafx.h"
# End Source File
# Begin Source File

SOURCE=.\TabbedViewView.cpp
# End Source File
# End Group
# Begin Group "Header Files"

# PROP Default_Filter "h;hpp;hxx;hm;inl"
# Begin Group "Draw Header"

# PROP Default_Filter ""
# Begin Source File

SOURCE=.\DrawButton.h
# End Source File
# Begin Source File

SOURCE=.\DrawCar.h
# End Source File
# Begin Source File

SOURCE=.\DrawChart.h
# End Source File
# Begin Source File

SOURCE=.\DrawConduit.h
# End Source File
# Begin Source File

SOURCE=.\DrawObj.h
# End Source File
# Begin Source File

SOURCE=.\DrawPoly.h
# End Source File
# Begin Source File

SOURCE=.\DrawRect.h
# End Source File
# Begin Source File

SOURCE=.\DrawRotary.h
# End Source File
# Begin Source File

SOURCE=.\DrawWarn.h
# End Source File
# End Group
# Begin Source File

SOURCE=.\ChildFrm.h
# End Source File
# Begin Source File

SOURCE=.\Draw.h
# End Source File
# Begin Source File

SOURCE=.\DrawDoc.h
# End Source File
# Begin Source File

SOURCE=.\DrawView.h
# End Source File
# Begin Source File

SOURCE=.\FlatTabPropDlg.h
# End Source File
# Begin Source File

SOURCE=.\FlatTabViewDoc.h
# End Source File
# Begin Source File

SOURCE=.\FlatTabViewView.h
# End Source File
# Begin Source File

SOURCE=.\IniFile.h
# End Source File
# Begin Source File

SOURCE=.\MainFrm.h
# End Source File
# Begin Source File

SOURCE=.\MQClient.h
# End Source File
# Begin Source File

SOURCE=.\MQCommandType.h
# End Source File
# Begin Source File

SOURCE=.\NotifyCombo.h
# End Source File
# Begin Source File

SOURCE=.\Resource.h
# End Source File
# Begin Source File

SOURCE=.\ResourceViewPane.h
# End Source File
# Begin Source File

SOURCE=.\SampleFormView.h
# End Source File
# Begin Source File

SOURCE=.\SetTimeDlg.h
# End Source File
# Begin Source File

SOURCE=.\SettingHostDlg.h
# End Source File
# Begin Source File

SOURCE=.\SrvrItem.h
# End Source File
# Begin Source File

SOURCE=.\StdAfx.h
# End Source File
# Begin Source File

SOURCE=.\TabbedViewView.h
# End Source File
# End Group
# Begin Group "Resource Files"

# PROP Default_Filter "ico;cur;bmp;dlg;rc2;rct;bin;rgs;gif;jpg;jpeg;jpe"
# Begin Source File

SOURCE=.\res\bmp00001.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00002.bmp
# End Source File
# Begin Source File

SOURCE=.\res\cur00001.cur
# End Source File
# Begin Source File

SOURCE=.\res\cur00002.cur
# End Source File
# Begin Source File

SOURCE=.\res\cursor1.cur
# End Source File
# Begin Source File

SOURCE=.\res\Draw.ico
# End Source File
# Begin Source File

SOURCE=.\res\Draw.rc2
# End Source File
# Begin Source File

SOURCE=.\res\DrawDoc.ico
# End Source File
# Begin Source File

SOURCE=.\res\img_header.bmp
# End Source File
# Begin Source File

SOURCE=.\res\img_tabs.bmp
# End Source File
# Begin Source File

SOURCE=.\res\IToolbar.bmp
# End Source File
# Begin Source File

SOURCE=.\res\line_wid.bmp
# End Source File
# Begin Source File

SOURCE=.\res\Raclient.ico
# End Source File
# Begin Source File

SOURCE=.\res\Toolbar.bmp
# End Source File
# Begin Source File

SOURCE=.\res\toolbar1.bmp
# End Source File
# Begin Source File

SOURCE=".\res\登录.ico"
# End Source File
# Begin Source File

SOURCE=".\res\关于.ico"
# End Source File
# Begin Source File

SOURCE=".\res\历史.ico"
# End Source File
# Begin Source File

SOURCE=".\res\申请.ico"
# End Source File
# Begin Source File

SOURCE=".\res\审核.ico"
# End Source File
# Begin Source File

SOURCE=".\res\信息.ico"
# End Source File
# Begin Source File

SOURCE=".\res\制作.ico"
# End Source File
# Begin Source File

SOURCE=".\res\注销.ico"
# End Source File
# End Group
# Begin Group "realtime"

# PROP Default_Filter ""
# Begin Source File

SOURCE=.\RealTime\ClassArr.h
# End Source File
# Begin Source File

SOURCE=.\RealTime\Graphics.cpp
# End Source File
# Begin Source File

SOURCE=.\RealTime\Graphics.h
# End Source File
# Begin Source File

SOURCE=.\RealTime\random.cpp
# End Source File
# Begin Source File

SOURCE=.\RealTime\Random.h
# End Source File
# Begin Source File

SOURCE=.\RealTime\RealTime.cpp
# End Source File
# Begin Source File

SOURCE=.\RealTime\RealTime.h
# End Source File
# Begin Source File

SOURCE=.\RealTime\RTSlider.cpp
# End Source File
# Begin Source File

SOURCE=.\RealTime\RTSlider.h
# End Source File
# Begin Source File

SOURCE=.\RealTime\Str.cpp
# End Source File
# Begin Source File

SOURCE=.\RealTime\Str.h
# End Source File
# End Group
# Begin Group "DB"

# PROP Default_Filter ""
# Begin Source File

SOURCE=.\dbAx\CppSQLite3.cpp

!IF  "$(CFG)" == "Draw - Win32 Release"

# SUBTRACT CPP /YX /Yc /Yu

!ELSEIF  "$(CFG)" == "Draw - Win32 Debug"

!ENDIF 

# End Source File
# Begin Source File

SOURCE=.\dbAx\CppSQLite3.h
# End Source File
# End Group
# Begin Source File

SOURCE=.\ReadMe.txt
# End Source File
# End Target
# End Project
