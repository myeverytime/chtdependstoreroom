// Custom Items.h : header file
//
// This file is a part of the GUI TOOLKIT PRO MFC class library.
// 2004 Robustech Software, All Rights Reserved.
//
// THIS SOURCE FILE IS THE PROPERTY OF Rocksoft SOFTWARE AND IS NOT TO 
// BE RE-DISTRIBUTED BY ANY MEANS WHATSOEVER WITHOUT THE EXPRESSED 
// WRITTEN CONSENT OF Rocksoft SOFTWARE.
//
// THIS SOURCE CODE CAN ONLY BE USED UNDER THE TERMS AND CONDITIONS 
// OUTLINED IN THE GUI TOOLKIT PRO LICENSE AGREEMENT.  Rocksoft SOFTWARE 
// GRANTS TO YOU (ONE SOFTWARE DEVELOPER) THE LIMITED RIGHT TO USE 
// THIS SOFTWARE ON A SINGLE COMPUTER.
//
// CONTACT INFORMATION:
// robustwell@sohu.com
// http://www.Robustech.com
//
//////////////////////////////////////////////////////////////////////

#pragma once


class AFX_EXT_CLASS CCustomItemIcon : public CXTPPropertyGridItem
{
public:
	CCustomItemIcon(CString strCaption, HICON hIcon = 0);

	~CCustomItemIcon(void);

protected:
	virtual BOOL OnDrawItemValue(CDC& dc, CRect rcValue);
	virtual void OnInplaceButtonDown();

private:
	HICON m_hIcon;
};

class CCustomItemSpin;

class AFX_EXT_CLASS CCustomItemSpinInplaceButton : public CSpinButtonCtrl
{
	friend class CCustomItemSpin;
	CCustomItemSpin* m_pItem;
	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnDeltapos(NMHDR *pNMHDR, LRESULT *pResult);
};

class AFX_EXT_CLASS CCustomItemSpin : public CXTPPropertyGridItemNumber
{
	friend class CCustomItemSpinInplaceButton;
public:
	CCustomItemSpin(CString strCaption);
	

protected:
	virtual void OnDeselect();
	virtual void OnSelect();
	virtual CRect GetValueRect();


private:
	CCustomItemSpinInplaceButton m_wndSpin;
};


class AFX_EXT_CLASS CCustomItemFileBox : public CXTPPropertyGridItem
{
public:
	CCustomItemFileBox(CString strCaption);
	

protected:
	virtual void OnInplaceButtonDown();
};



class CCustomItemCheckBox;

class AFX_EXT_CLASS CInplaceCheckBox : public CButton
{
public:
	afx_msg LRESULT OnCheck(WPARAM wParam, LPARAM lParam);
	afx_msg HBRUSH CtlColor(CDC* pDC, UINT /*nCtlColor*/);
	
	DECLARE_MESSAGE_MAP()
protected:
	CCustomItemCheckBox* m_pItem;
	COLORREF m_clrBack;
	CBrush m_brBack;

	friend class CCustomItemCheckBox;
};

class AFX_EXT_CLASS CCustomItemCheckBox : public CXTPPropertyGridItem
{
protected:	

public:
	CCustomItemCheckBox(CString strCaption);

	BOOL GetBool();
	void SetBool(BOOL bValue);

protected:
	virtual void OnDeselect();
	virtual void OnSelect();
	virtual CRect GetValueRect();
	virtual BOOL OnDrawItemValue(CDC& dc, CRect rcValue);



private:
	CInplaceCheckBox m_wndCheckBox;
	BOOL m_bValue;

	friend class CInplaceCheckBox;
};



class AFX_EXT_CLASS CCustomItemChilds : public CXTPPropertyGridItem
{
	class CCustomItemChildsAll;
	class CCustomItemChildsPad;

	friend class CCustomItemChildsAll;
	friend class CCustomItemChildsPad;

public:
	CCustomItemChilds(CString strCaption, CRect rcValue);

protected:
	virtual void OnAddChildItem();
	virtual void SetValue(CString strValue);

private:
	void UpdateChilds();
	CString RectToString(CRect rc);


private:
	CCustomItemChildsAll* m_itemAll;
	CCustomItemChildsPad* m_itemLeft;
	CCustomItemChildsPad* m_itemTop;
	CCustomItemChildsPad* m_itemRight;
	CCustomItemChildsPad* m_itemBottom;

	CRect m_rcValue;
};




class AFX_EXT_CLASS CCustomItemColor: public CXTPPropertyGridItemColor
{
public:
	CCustomItemColor(UINT nID,  COLORREF clr = 0);  ///CString strCaption

protected:
	virtual void OnInplaceButtonDown();

#ifndef _DECIMAL_VALUE
public:
	COLORREF StringToRGB(CString str)
	{	
		TCHAR *stopstring;
		int nValue = _tcstoul((LPCTSTR)str, &stopstring, 16);
		return RGB(GetBValue(nValue), GetGValue(nValue), GetRValue(nValue));
	}

	CString RGBToString(COLORREF clr)
	{
		CString str;
		str.Format(_T("%2X%2X%2X"), GetRValue(clr), GetGValue(clr), GetBValue(clr));
	#if _MSC_VER < 1200 // MFC 5.0
		for (int i = 0; i < str.GetLength(); i++) if (str[i] == _T(' ')) str.SetAt(i, _T('0'));
	#else
		str.Replace(_T(" "), _T("0"));
	#endif
		return str;
	}

	void SetValue(CString strValue)
	{	
		SetColor(StringToRGB(strValue));
	}

	void SetColor(COLORREF clr)
	{
		m_clrValue = clr;
		CXTPPropertyGridItem::SetValue(RGBToString(clr));
	}
#endif
};




//////////////////////////////////////////////////////////////////////////


class AFX_EXT_CLASS CInplaceUpperCase : public CXTPPropertyGridInplaceEdit
{
public:
	afx_msg void OnChar(UINT nChar, UINT nRepCnt, UINT nFlags);

	DECLARE_DYNAMIC(CInplaceUpperCase);
	DECLARE_MESSAGE_MAP()
};


class AFX_EXT_CLASS CCustomItemUpperCase : public CXTPPropertyGridItem
{
public:
	CCustomItemUpperCase::CCustomItemUpperCase(CString strCaption)
		: CXTPPropertyGridItem(strCaption)
	{
	}

protected:
	virtual CXTPPropertyGridInplaceEdit& GetInplaceEdit()
	{
		return m_wndEdit;
	}
	
private:
	CInplaceUpperCase m_wndEdit;
	
};






class CCustomItemSlider;

class AFX_EXT_CLASS CInplaceSlider : public CSliderCtrl
{
public:
	afx_msg HBRUSH CtlColor(CDC* pDC, UINT /*nCtlColor*/);
	afx_msg void OnCustomDraw(NMHDR* pNMHDR, LRESULT* pResult);
	
	DECLARE_MESSAGE_MAP()
protected:
	CCustomItemSlider* m_pItem;
	COLORREF m_clrBack;
	CBrush m_brBack;
	int m_nValue;

	friend class CCustomItemSlider;
};

class AFX_EXT_CLASS CCustomItemSlider : public CXTPPropertyGridItemNumber
{
protected:	

public:
	CCustomItemSlider(CString strCaption);

protected:
	virtual void OnDeselect();
	virtual void OnSelect();

private:
	CInplaceSlider m_wndSlider;
	int m_nWidth;

	friend class CInplaceSlider;
};
