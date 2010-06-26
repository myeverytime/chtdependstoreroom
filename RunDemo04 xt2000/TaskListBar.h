// CTaskListBar : header file
/////////////////////////////////////////////////////////////////////////////

#ifndef __TASKLISTBAR_H
#define __TASKLISTBAR_H

#if _MSC_VER >= 1000
#pragma once
#endif // _MSC_VER >= 1000

/////////////////////////////////////////////////////////////////////////////
// CTaskListBar class

class CTaskListBar : public CXTTabCtrlBar
{
	DECLARE_DYNAMIC(CTaskListBar)

// Construction / destruction
public:

	// Constructs a CTaskListBar object.
	CTaskListBar();

	// Destroys a CTaskListBar object, handles cleanup and de-allocation.
	virtual ~CTaskListBar();

// Member variables
	CXTListCtrl m_listCtrl;
	CXTListCtrl m_listCtrl1;
protected:
    CImageList  m_ilTabImages;

// Member functions
public:
	void InitListControl();
	void SetWarnInfo();

	//{{AFX_VIRTUAL(CTaskListBar)
	//}}AFX_VIRTUAL

	//{{AFX_MSG(CTaskListBar)
	afx_msg int OnCreate(LPCREATESTRUCT lpCreateStruct);
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Developer Studio will insert additional declarations immediately before the previous line.

#endif // __TASKLISTBAR_H

