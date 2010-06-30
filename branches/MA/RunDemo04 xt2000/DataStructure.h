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

#define QQ_HOST _T("http://happyfarm.qzone.qq.com")		//��������ַ

#define MAX_POINT_NUMBER     15001  //������  1-15000
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
	int m_SlaveStation;                     // ��վ��
	int m_NumChannel;                     	//ͨ����
	CString strPoint;                       //����ʱ��
	CString strDate;                        //�ϵ�ʱ��
	CString strTime;                        //����ʱ��
	CString strText;                        //����ʱ��
	CString strWarn;                        //��ȫ��ʩ
};




//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
//ģ���� ���ͽṹ
struct AType	 {
	float m_RangeH;	        	//������
	float m_RangeL;	        	//������
	float AlarmValueH;	        //�߱���ֵ
	float AlarmValueL;	        //�ͱ���ֵ
	CString m_Unit;		        // (����)��λ
	CString WatchName;          //�������   
};
//������ ���ͽṹ
struct DType	 {
	int AlarmState;	            //����״̬  
	CString ZeroState;          //0̬   ������
	CString OneState;           //1̬   ������
	CString TwoState;           //2̬   ������
	CString WatchName;          //�������   
};

//ͨ����
struct NumChannel {
	int SensorType;                 // �������ͺ� 3�� ��������
	int AStyle;                 	//ģ���� ����
	float AValue;	                //ģ������ǰֵ
	AType        m_Atype[100];      //ģ���� ���ͽṹ

	CString WatchPosition;          //��װ�ص�
	int EFeed;                  	//����״̬
	int EquipmentState;             //�豸״̬

	int DValue;	                    //��������ǰֵ  
	int DStyle;	                    //������ ����  
	DType        m_Dtype[100];      //������ ���ͽṹ
};
//��վ
struct SlaveStation {
	int FStyle;	                        //��վ����  
	int IsScan;	                        //�Ƿ�Ѳ��   
	NumChannel        m_NumChan[65];    //ͨ��
//	ST_FIELD_INFO  field_info;       	//����˵�ֲ����Ϣ
	
};



#endif // !defined(AFX_JEINWEB_H__5D9516BA_00A4_4D7D_B08A_9EAA563AB7A7__INCLUDED_)