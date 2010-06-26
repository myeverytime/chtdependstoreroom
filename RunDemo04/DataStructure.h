// qqhappyfarmstructure.h: 
//
//////////////////////////////////////////////////////////////////////

#if !defined(AFX_JEINWEB_H__5D9516BA_00A4_4D7D_B08A_9EAA563AB7A7__INCLUDED_)
#define AFX_JEINWEB_H__5D9516BA_00A4_4D7D_B08A_9EAA563AB7A7__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#ifndef MAX_PACK
#define MAX_PACK	10240*10240
#endif

//////////////////////////////////////////////////////////////////////////

#define QQ_HOST _T("http://happyfarm.qzone.qq.com")		//服务器地址

#define MAX_POINT_NUMBER     15001  //最大点数  1-15000
#define COLOR_MASK	RGB(0x00,0x80,0x80)

struct CPointInfo
{
        unsigned char  lWarn_state;
        unsigned short lufdata;
		double         ldfValue;
		double         fMin;
		double         fMax;
		double         unWarnMin;
		double         unWarnMax;
		double         pnValue;
		CString        usUnit;
		CString        strExplaintemp;
		CString        strWarnCausetemp;
		CString        strWarnTime;
///		CString strWarn;
		CString        strWarnDate;
};

struct CWarnPoint
{
        unsigned short  warnPoint;
        unsigned short  OldwarnPoint;
       	unsigned char OldWarn_state;
};

struct CStrWarn{
	int m_SlaveStation;                     // 分站号
	int m_NumChannel;                     	//通道号
	CString strPoint;                       //报警时刻
	CString strDate;                        //断电时刻
	CString strTime;                        //复电时刻
	CString strText;                        //馈电时刻
	CString strWarn;                        //安全措施
};




//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
//模拟量 类型结构
struct AType	 {
	float m_RangeH;	        	//高量程
	float m_RangeL;	        	//低量程
	float AlarmValueH;	        //高报警值
	float AlarmValueL;	        //低报警值
	CString m_Unit;		        // (计量)单位
	CString WatchName;          //测点名称   
};
//开关量 类型结构
struct DType	 {
	int AlarmState;	            //报警状态  
	CString ZeroState;          //0态   开关量
	CString OneState;           //1态   开关量
	CString TwoState;           //2态   开关量
	CString WatchName;          //测点名称   
};

//通道号
struct NumChannel {
	int SensorType;                 // 传感器型号 3种 开关量无
	int AStyle;                 	//模拟量 类型
	float AValue;	                //模拟量当前值
	AType        m_Atype[100];      //模拟量 类型结构

	CString WatchPosition;          //安装地点
	int EFeed;                  	//馈电状态
	int EquipmentState;             //设备状态

	int DValue;	                    //开关量当前值  
	int DStyle;	                    //开关量 类型  
	DType        m_Dtype[100];      //开关量 类型结构
};
//分站
struct SlaveStation {
	int FStyle;	                        //分站类型  
	int IsScan;	                        //是否巡检   
	NumChannel        m_NumChan[65];    //通道
//	ST_FIELD_INFO  field_info;       	//这个人的植物信息
	
};



#endif // !defined(AFX_JEINWEB_H__5D9516BA_00A4_4D7D_B08A_9EAA563AB7A7__INCLUDED_)
