
var bgcolor="#ffffff";
var changecolor="#00ccff";
var xmlhttpUrl="http://xuan.shejis.com/js/selectAjax.asp";
var imgurl="http://dq.shejis.com/images1/win/";

var d_value=new Array();//������Ĭ��ֵ
 d_value[0]="�������Ʒ�������磺��ѹ";
 d_value[1]="�������Ʒ���ơ�Ʒ�ơ�����ͺŵ���Ϣ���в�Ʒ����";
 d_value[2]="�����빩Ӧ������";
 d_value[3]="���������������";
 d_value[4]="���������Ĺؼ���";
 d_value[5]="�����밸���ؼ���";
 d_value[6]="������ͼֽ�ؼ���";
 d_value[7]="�������׼�ؼ���";
 d_value[8]="����������ؼ���";
 d_value[9]="������μ��ؼ���";
 d_value[10]="��������Ѷ�ؼ���";
 d_value[11]="���������ӹؼ���";

var ysb1="top_menu_03";//��ǩ�仯����ʽCLASS
var ysb2="top_menu_02";//��ǩԭ����ʽCLASS

var SearchUrl =new Array();//��ͬ��ǩ������ַ����
 SearchUrl[0]="csxx";
 SearchUrl[1]="cpxx";
 SearchUrl[2]="supplier";
 SearchUrl[3]="agent";
 SearchUrl[4]="zlw";
 SearchUrl[5]="zal";
 SearchUrl[6]="ztz";
 SearchUrl[7]="zbz";
 SearchUrl[8]="zrj";
 SearchUrl[9]="zkj";
 SearchUrl[10]="zzx";
 SearchUrl[11]="zbbs";

var dq_hotstr = new Array();//���Źؼ�������
 dq_hotstr[0]="��Ƶ��ѹ ����� ��ƽ��� ���� ��Ӧʱ�� ���ʱ����ʱ��";
 dq_hotstr[1]="<a href=' http://xuan.shejis.com/index.aspx?productname=%u53D8%u538B%u5668' class='left_zt5' target='_blank'>��ѹ��</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u5F00%u5173' class='left_zt5' target='_blank'>����</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u7194%u65AD%u5668' class='left_zt5' target='_blank'>�۶���</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u907F%u96F7%u5668' class='left_zt5' target='_blank'>������</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u7535%u7F06' class='left_zt5' target='_blank'>����</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u7535%u6E90' class='left_zt5' target='_blank'>��Դ</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u4F20%u611F%u5668' class='left_zt5' target='_blank'>������</a>";
 dq_hotstr[2]="";
 dq_hotstr[3]="";
 dq_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=208&name=���վ' class='left_zt5' target='_blank'>���վ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=�̵籣��' class='left_zt5' target='_blank'>�̵籣��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=��ѹ��' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=��·��' class='left_zt5' target='_blank'>��·��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=�޹�����' class='left_zt5' target='_blank'>�޹�����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=��Դ' class='left_zt5' target='_blank'>��Դ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=�����' class='left_zt5' target='_blank'>�����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=�綯��' class='left_zt5' target='_blank'>�綯��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=�����·' class='left_zt5' target='_blank'>�����·</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=��Ƶ��' class='left_zt5' target='_blank'>��Ƶ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=�ӵ�' class='left_zt5' target='_blank'>�ӵ�</a>";
 dq_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=217&name=���վ' class='left_zt5' target='_blank'>���վ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=�̵籣��' class='left_zt5' target='_blank'>�̵籣��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=��ѹ��' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=��·��' class='left_zt5' target='_blank'>��·��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=��Դ' class='left_zt5' target='_blank'>��Դ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=�����' class='left_zt5' target='_blank'>�����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=�綯��' class='left_zt5' target='_blank'>�綯��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=�����·'>�����·</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=��Ƶ��'>��Ƶ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=�ӵ�'>�ӵ�</a> ";
 dq_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=218&name=���վ' class='left_zt5' target='_blank'>���վ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=��ѹ��' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=ʩ��' class='left_zt5' target='_blank'>ʩ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=�����' class='left_zt5' target='_blank'>�����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=�綯��' class='left_zt5' target='_blank'>�綯��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=��Դ' class='left_zt5' target='_blank'>��Դ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=�ӵ�' class='left_zt5' target='_blank'>�ӵ�</a>";
 dq_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=219&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=ʩ��' class='left_zt5' target='_blank'>ʩ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=�糧' class='left_zt5' target='_blank'>�糧</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=��ѹ' class='left_zt5' target='_blank'>��ѹ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=��ѹ' class='left_zt5' target='_blank'>��ѹ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=�ӵ�' class='left_zt5' target='_blank'>�ӵ�</a>";
 dq_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=221&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=221&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=221&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=221&name=����' class='left_zt5' target='_blank'>����</a>";
 dq_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=220&name=�繤' class='left_zt5' target='_blank'>�繤</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=ʩ��' class='left_zt5' target='_blank'>ʩ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=��ѹ��' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=��Ƶ' class='left_zt5' target='_blank'>��Ƶ</a>";
 dq_hotstr[10]="<a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=���&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>���</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=�˵�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�˵�</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=���&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>���</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=���&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>���</a>";
 dq_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=���վ' class='left_zt5' target='_blank'>���վ</a> <a href='http://bbs.shejis.com/tag.php?name=�̵籣��' class='left_zt5' target='_blank'>�̵籣��</a> <a href='http://bbs.shejis.com/tag.php?name=��ѹ��' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=��·��' class='left_zt5' target='_blank'>��·��</a> <a href='http://bbs.shejis.com/tag.php?name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag.php?name=�޹�����' class='left_zt5' target='_blank'>�޹�����</a> <a href='http://bbs.shejis.com/tag.php?name=��Դ' class='left_zt5' target='_blank'>��Դ</a> <a href='http://bbs.shejis.com/tag.php?name=�����' class='left_zt5' target='_blank'>�����</a> <a href='http://bbs.shejis.com/tag.php?name=�綯��' class='left_zt5' target='_blank'>�綯��</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=�����·' class='left_zt5' target='_blank'>�����·</a> <a href='http://bbs.shejis.com/tag.php?name=��Ƶ��' class='left_zt5' target='_blank'>��Ƶ��</a> <a href='http://bbs.shejis.com/tag.php?name=�ӵ�' class='left_zt5' target='_blank'>�ӵ�</a> <a href='http://bbs.shejis.com/tag.php?name=��Ƶ' class='left_zt5' target='_blank'>��Ƶ</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a>";

var nt_hotstr = new Array();//���Źؼ�������
 nt_hotstr[0]="����յ����� ������� ��ů�豸 �����豸 ͨ���豸";
 nt_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u79BB%u5FC3%u673A' class='left_zt5' target='_blank'>���Ļ�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u4E2D%u592E%u7A7A%u8C03' class='left_zt5' target='_blank'>����յ�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u98CE%u673A%u76D8%u7BA1' class='left_zt5' target='_blank'>����̹�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u65B0%u98CE%u673A%u7EC4%20' class='left_zt5' target='_blank'>�·����</a>";
 nt_hotstr[2]="";
 nt_hotstr[3]="";
 nt_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=209&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=��ů' class='left_zt5' target='_blank'>��ů</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=ͨ��' class='left_zt5' target='_blank'>ͨ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=����̹�' class='left_zt5' target='_blank'>����̹�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=�·����' class='left_zt5' target='_blank'>�·����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=�����' class='left_zt5' target='_blank'>�����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=����յ�' class='left_zt5' target='_blank'>����յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=�ȱ�' class='left_zt5' target='_blank'>�ȱ� </a> ";
 nt_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=222&name=�ȱ�' class='left_zt5' target='_blank'>�ȱ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=ͨ��' class='left_zt5' target='_blank'>ͨ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name= �յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=����յ�' class='left_zt5' target='_blank'>����յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=����ϵͳ' class='left_zt5' target='_blank'>����ϵͳ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=��ˮ����' class='left_zt5' target='_blank'>��ˮ����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=ͨ��ϵͳ' class='left_zt5' target='_blank'>ͨ��ϵͳ</a>";
 nt_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=230&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=����յ�' class='left_zt5' target='_blank'>����յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=̫����' class='left_zt5' target='_blank'>̫����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=�ȱ�' class='left_zt5' target='_blank'>�ȱ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=ͨ��' class='left_zt5' target='_blank'>ͨ��</a>";
 nt_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=238&name=����' class='left_zt5' target='_blank'>���� </a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=��ů' class='left_zt5' target='_blank'>��ů </a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=ͨ��' class='left_zt5' target='_blank'>ͨ�� </a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=����' class='left_zt5' target='_blank'>����</a>";
 nt_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=240&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=��ů' class='left_zt5' target='_blank'>��ů</a>";
 nt_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=239&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=��ů' class='left_zt5' target='_blank'>��ů</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=����' class='left_zt5' target='_blank'>����</a>";
 nt_hotstr[10]="<a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=�յ�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�յ�</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=��ů&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��ů</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=��ʪ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��ʪ</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=��Դ�ȱ�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��Դ�ȱ�</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=ͨ��&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>ͨ��</a>";
 nt_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag.php?name=�ȱ�' class='left_zt5' target='_blank'>�ȱ�</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=��ů' class='left_zt5' target='_blank'>��ů</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=������֯' class='left_zt5' target='_blank'>������֯</a>";

var af_hotstr = new Array();//���Źؼ�������
 af_hotstr[0]="����ն� ���ⲹ�� ���ӿ��� ����� ��ƽ�� �ֱ��� ѹ����ʽ";
 af_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u6444%u50CF%u673A' class='left_zt5' target='_blank'>�����</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u62A5%u8B66%u5668' class='left_zt5' target='_blank'>������</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u955C%u5934' class='left_zt5' target='_blank'>��ͷ</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u5149%u7AEF%u673A' class='left_zt5' target='_blank'>��˻�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u4E91%u53F0' class='left_zt5' target='_blank'>��̨</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u786C%u76D8%u5F55%u50CF%u673A' class='left_zt5' target='_blank'>Ӳ��¼���</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u9AD8%u901F%u7403' class='left_zt5' target='_blank'>������</a>";
 af_hotstr[2]="";
 af_hotstr[3]="";
 af_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=210&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=��������' class='left_zt5' target='_blank'>��������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=�Ž�' class='left_zt5' target='_blank'>�Ž�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=�����' class='left_zt5' target='_blank'>�����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=��˻�' class='left_zt5' target='_blank'>��˻�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=����' class='left_zt5' target='_blank'>����</a>";
 af_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=223&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=ͣ����' class='left_zt5' target='_blank'>ͣ����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=�Ž�' class='left_zt5' target='_blank'>�Ž�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����С��' class='left_zt5' target='_blank'>����С��</a>";
 af_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=231&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=�Ž�' class='left_zt5' target='_blank'>�Ž�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=�Խ�' class='left_zt5' target='_blank'>�Խ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=Ѳ��' class='left_zt5' target='_blank'>Ѳ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=�ۺϲ���' class='left_zt5' target='_blank'>�ۺϲ���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=ͣ����' class='left_zt5' target='_blank'>ͣ����</a>";
 af_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=241&name=�Խ�' class='left_zt5' target='_blank'>�Խ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=���ܽ���' class='left_zt5' target='_blank'>���ܽ���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=��ȫ����' class='left_zt5' target='_blank'>��ȫ����</a>";
 af_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=243&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=������'>������</a>";
 af_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=242&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=�ۺϲ���' class='left_zt5' target='_blank' class='left_zt5' target='_blank'>�ۺϲ���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=�ֲ�' class='left_zt5' target='_blank'>�ֲ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=�̳�'>�̳�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=����'>����</a>";
 af_hotstr[10]="<a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=������&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>������</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=���&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>���</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=���ܽ�ͨ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>���ܽ�ͨ</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=�Ž�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�Ž�</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=��ȫ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��ȫ</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=һ��ͨ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>һ��ͨ</a>";
 af_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=���ܽ�ͨ' class='left_zt5' target='_blank'>���ܽ�ͨ</a> <a href='http://bbs.shejis.com/tag.php?name=�Ž�' class='left_zt5' target='_blank'>�Ž�</a> <a href='http://bbs.shejis.com/tag.php?name=��ȫ' class='left_zt5' target='_blank'>��ȫ</a> <a href='http://bbs.shejis.com/tag.php?name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=ͣ����' class='left_zt5' target='_blank'>ͣ����</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a>";

var shui_hotstr = new Array();//���Źؼ�������
 shui_hotstr[0]="�� ���� �ܲ� ˮ�� ҩ�� Ĥ";
 shui_hotstr[1]="<a href='http://xuan.shejis.com/norecord.aspx?nid=196' class='left_zt5' target='_blank'>��</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=571' class='left_zt5' target='_blank'>����</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=403' class='left_zt5' target='_blank'>�ܲ�</a> <a href='http://xuan.shejis.com/index_cpzj.aspx?cid=701' class='left_zt5' target='_blank'>ˮ��</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=731' class='left_zt5' target='_blank'>ҩ��</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=1008' class='left_zt5' target='_blank'>�����豸</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=1029' class='left_zt5' target='_blank'>Ĥ</a>";
 shui_hotstr[2]="ˮ�� ���� �ܲ� ˮ�� ҩ�� Ĥ";
 shui_hotstr[3]="ˮ�� ���� �ܲ� ˮ�� ҩ�� Ĥ";
 shui_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=211&name=��ˮ' class='left_zt5' target='_blank'></a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=����ˮ��' class='left_zt5' target='_blank'>����ˮ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a>";
 shui_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=224&name=��ˮ��' class='left_zt5' target='_blank'>��ˮ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=����ˮ��' class='left_zt5' target='_blank'>����ˮ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=סլ' class='left_zt5' target='_blank'>סլ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=ˮ������' class='left_zt5' target='_blank'>ˮ������</a>";
 shui_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=232&name=��ˮ��' class='left_zt5' target='_blank'>��ˮ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=����ˮ��' class='left_zt5' target='_blank'>����ˮ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=סլ' class='left_zt5' target='_blank'>סլ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=ˮ������' class='left_zt5' target='_blank'>ˮ������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=�߲�' class='left_zt5' target='_blank'>�߲�</a>";
 shui_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=244&name=������ˮ' class='left_zt5' target='_blank'>������ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=244&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=244&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=244&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a>";
 shui_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=246&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=��������ˮ' class='left_zt5' target='_blank'>��������ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a>";
 shui_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=245&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=��ˮ����' class='left_zt5' target='_blank'>��ˮ����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=��������ˮ' class='left_zt5' target='_blank'>��������ˮ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=����͸' class='left_zt5' target='_blank'>����͸</a>";
 shui_hotstr[10]="<a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=��Ⱦ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��Ⱦ</a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=��ˮ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��ˮ</a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=��ˮ����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��ˮ����</a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=ˮ��&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'></a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=ˮ��&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>ˮ��</a>";
 shui_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=ˮ����' class='left_zt5' target='_blank'>ˮ����</a> <a href='http://bbs.shejis.com/tag.php?name=��ˮ' class='left_zt5' target='_blank'>��ˮ</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=Ĥ' class='left_zt5' target='_blank'>Ĥ</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=����ˮ' class='left_zt5' target='_blank'>����ˮ</a>";

var zm_hotstr = new Array();//���Źؼ�������
 zm_hotstr[0]="��ͨ�� ���� ���� �����ȼ� ��ѹ ɫ�� ���� ��װ��ʽ";
 zm_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u5364%u94A8%u706F' class='left_zt5' target='_blank'>±�ٵ�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u683C%u6805%u706F' class='left_zt5' target='_blank'>��դ��</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u8367%u5149%u706F' class='left_zt5' target='_blank'>ӫ���</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u53F0%u706F' class='left_zt5' target='_blank'>̨��</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7B52%u706F' class='left_zt5' target='_blank'>Ͳ��</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u58C1%u706F' class='left_zt5' target='_blank'>�ڵ�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u94A0%u706F' class='left_zt5' target='_blank'>�Ƶ�</a> <a href='http://xuan.shejis.com/index.aspx?productname=LED%20' class='left_zt5' target='_blank'>LED</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u666F%u89C2%u706F%20' class='left_zt5' target='_blank'>���۵�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u5EAD%u9662%u706F' class='left_zt5' target='_blank'>ͥԺ��</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u592A%u9633%u80FD%u706F' class='left_zt5' target='_blank'>̫���ܵ�</a>";
 zm_hotstr[2]="���� �ƾ� �������� ������ �ƹ� �������� ��ɽ���� ��ʿ����";
 zm_hotstr[3]="���� �ƾ� �������� ���� LED ��������";
 zm_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=212&name=�������' class='left_zt5' target='_blank'>�������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=�ƹ�' class='left_zt5' target='_blank'>�ƹ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=�����ƾ�' class='left_zt5' target='_blank'>�����ƾ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=������' class='left_zt5' target='_blank' >������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=LED' class='left_zt5' target='_blank'>LED</a>";
 zm_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=225&name=LED����' class='left_zt5' target='_blank'>LED����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=��������' class='left_zt5' target='_blank'>��������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=��Դ' class='left_zt5' target='_blank' >��Դ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=ҹ��' class='left_zt5' target='_blank'>ҹ��</a>";
 zm_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=233&name=��������' class='left_zt5' target='_blank'>��������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=�ƹ�' class='left_zt5' target='_blank' >�ƹ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=�ƾ�' class='left_zt5' target='_blank'>�ƾ�</a>";
 zm_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=247&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=�ƾ�' class='left_zt5' target='_blank'>�ƾ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=LED' class='left_zt5' target='_blank'>LED</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=�ն�' class='left_zt5' target='_blank'>�ն�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=��ͷ' class='left_zt5' target='_blank'>��ͷ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=����' class='left_zt5' target='_blank'>����</a>";
 zm_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=249&name=�ն�' class='left_zt5' target='_blank'>�ն�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=��Ⱦ' class='left_zt5' target='_blank'>��Ⱦ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=�޺��' class='left_zt5' target='_blank'>�޺��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=����������' class='left_zt5' target='_blank'>����������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=�ƹ�' class='left_zt5' target='_blank'>�ƹ�</a>";
 zm_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=248&name=�ƹ�' class='left_zt5' target='_blank'>�ƹ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=��Ⱦ' class='left_zt5' target='_blank'>��Ⱦ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=LED' class='left_zt5' target='_blank'>LED</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=�ն�' class='left_zt5' target='_blank'>�ն�</a>";
 zm_hotstr[10]="<a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank' class='left_zt5' target='_blank'>����</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=LED&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>LED</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=�ƾ�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�ƾ�</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=�������&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�������</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=��������&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��������</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=�ƹ�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�ƹ�</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a>";
 zm_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=���Դ' class='left_zt5' target='_blank'>���Դ</a> <a href='http://bbs.shejis.com/tag.php?name=�ƾ�' class='left_zt5' target='_blank'>�ƾ�</a> <a href='http://bbs.shejis.com/tag.php?name=�������' class='left_zt5' target='_blank'>�������</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=�ƹ�' class='left_zt5' target='_blank'>�ƹ�</a> <a href='http://bbs.shejis.com/tag.php?name=LED' class='left_zt5' target='_blank'>LED</a>";

var zk_hotstr = new Array();//���Źؼ�������
 zk_hotstr[0]="������ ��λ�� PLC DCS ѹ���� ִ���� �ֳ��Ǳ� ����ͨѶ";
 zk_hotstr[1]="������ ��λ�� PLC DCS ѹ���� ִ���� �ֳ��Ǳ� ����ͨѶ";
 zk_hotstr[2]="<a href='http://xuan.shejis.com/index.aspx?productname=%u6D41%u91CF%u8BA1' class='left_zt5' target='_blank'>������</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7269%u4F4D%u8BA1' class='left_zt5' target='_blank'>��λ��</a> <a href='http://xuan.shejis.com/index.aspx?productname=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://xuan.shejis.com/index.aspx?productname=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u538B%u529B%u8868' class='left_zt5' target='_blank'>ѹ����</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6267%u884C%u5668' class='left_zt5' target='_blank'>ִ����</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u73B0%u573A%u4EEA%u8868' class='left_zt5' target='_blank'>�ֳ��Ǳ�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u65E0%u7EBF%u901A%u8BAF' class='left_zt5' target='_blank'>����ͨѶ</a>";
 zk_hotstr[3]="������ ��λ�� PLC DCS ѹ���� ִ���� �ֳ��Ǳ� ����ͨѶ";
 zk_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=208&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=PLC����' class='left_zt5' target='_blank'>PLC����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=ͨѶ' class='left_zt5' target='_blank'>ͨѶ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=��̬���' class='left_zt5' target='_blank'>��̬���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=��Ƶ��' class='left_zt5' target='_blank'>��Ƶ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=�Ǳ�' class='left_zt5' target='_blank'>�Ǳ�</a>";
 zk_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=226&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=ABB' class='left_zt5' target='_blank'>ABB</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=����ϵͳ' class='left_zt5' target='_blank'>����ϵͳ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=ϵͳ' class='left_zt5' target='_blank'>ϵͳ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=Ӧ��' class='left_zt5' target='_blank'>Ӧ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=����ϵͳ' class='left_zt5' target='_blank'>����ϵͳ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=�Զ���' class='left_zt5' target='_blank'>�Զ���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=���ܻ�' class='left_zt5' target='_blank'>���ܻ�</a>";
 zk_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=234&name=����������ԭ��ͼ' class='left_zt5' target='_blank'>����������ԭ��ͼ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=����������ͼֽ' class='left_zt5' target='_blank'>����������ͼֽ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=PLC����ͼ' class='left_zt5' target='_blank'>PLC����ͼ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=��ͨ������ͼ' class='left_zt5' target='_blank'>��ͨ������ͼ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=����ͼ' class='left_zt5' target='_blank'>����ͼ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=�Ǳ��·ͼ' class='left_zt5' target='_blank'>�Ǳ��·ͼ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=����ͼ' class='left_zt5' target='_blank'>����ͼ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=������' class='left_zt5' target='_blank'>������</a>";
 zk_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=250&name=�Զ���' class='left_zt5' target='_blank'>�Զ���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=�Ǳ�' class='left_zt5' target='_blank'>�Ǳ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=�Ǳ�ѡ��' class='left_zt5' target='_blank'>�Ǳ�ѡ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=����Ҫ��' class='left_zt5' target='_blank'>����Ҫ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=ͼ�η���' class='left_zt5' target='_blank'>ͼ�η���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=���' class='left_zt5' target='_blank'>���</a>";
 zk_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=251&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=�������' class='left_zt5' target='_blank'>�������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=��̬' class='left_zt5' target='_blank'>��̬</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=�������' class='left_zt5' target='_blank'>�������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=ģ����' class='left_zt5' target='_blank'>ģ����</a>";
 zk_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=251&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=��̬' class='left_zt5' target='_blank'>��̬</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=��Ƶ��' class='left_zt5' target='_blank'>��Ƶ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=���ܿ���' class='left_zt5' target='_blank'>���ܿ���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=������' class='left_zt5' target='_blank'>������</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=��Ƭ��' class='left_zt5' target='_blank'>��Ƭ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=�Ǳ�' class='left_zt5' target='_blank'>�Ǳ�</a>";
 zk_hotstr[10]="<a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=�Զ���&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�Զ���</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=���ܻ�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>���ܻ�</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=�Կ�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�Կ�</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=���&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>���</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=����ϵͳ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����ϵͳ</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=�ֳ�����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�ֳ�����</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=�ɱ�̿�����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�ɱ�̿�����</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=չ��&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>չ��</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=����&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=�б�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�б�</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=�Ǳ�&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�Ǳ�</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=��Ʒ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��Ʒ</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=��Ƹ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��Ƹ</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=PLC&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>PLC</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=DCS&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>DCS</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=��ѵ&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>��ѵ</a>";
 zk_hotstr[11]="�̳� PLC DCSϵͳ �Ǳ�ѡ�� ������ ��λ�� ��Ƶ��";

var dt_hotstr = new Array();//���Źؼ�������
 dt_hotstr[0]="�������� ҷ��ϵͳ ����ϵͳ ���ݿ��� ���ݰ�ȫ ���ݲ���";
 dt_hotstr[1]="���� ���� ҷ���� ������ ��Ļ ���ݿ��ƹ� ������ ƽ��װ�� ";
 dt_hotstr[2]="�µ�˹ ���� ���� ͨ�� ���� Ĭ�ɿ� ���� ��ɭ";
 dt_hotstr[3]="�µ�˹ ���� ���� ͨ�� ���� Ĭ�ɿ� ���� ��ɭ";
 dt_hotstr[4]="PLC ��Ʒ���� ����ѡ�� ���ݸ��� ����ϵͳ";
 dt_hotstr[5]="�������� ���ϴ��� �������� ��Ʒ���� �������� ��ҵ��̬";
 dt_hotstr[6]="����ͼ ��ƷͼƬ";
 dt_hotstr[7]="���ұ�׼ ��ҵ��׼ GB50310-2002";
 dt_hotstr[8]="�������";
 dt_hotstr[9]="�������� ���ϴ��� �������� ��Ʒ���� �������� ��ҵ��̬";
 dt_hotstr[10]="��ҵ��̬ ��ҵ���� ��ҵ���� �ز���̬ �����г� �б� չ��";
 dt_hotstr[11]="�������� ���۾��� ��ҵ���� �������� ������ ��λ�� ��Ƶ��";

var zy_hotstr = new Array();//���Źؼ�������
 zy_hotstr[0]="���һ� ���� ����";
 zy_hotstr[1]="���һ� �廨�� ���� ���� ���� ����";
 zy_hotstr[2]="���һ� �廨�� ���� ���� ���� ����";
 zy_hotstr[3]="���һ� �廨�� ���� ���� ���� ����";
 zy_hotstr[4]="ˮ����顡�̵������Ž������������������ѹ����ˮԴ�ȱ�";
 zy_hotstr[5]="ˮ����顡�̵������Ž������������������ѹ����ˮԴ�ȱ�";
 zy_hotstr[6]="�ָ� ��ֽ ��ʽͼ";
 zy_hotstr[7]="���һ� ���� ����";
 zy_hotstr[8]="ˮ����顡�̵������Ž������������������ѹ����ˮԴ�ȱ�";
 zy_hotstr[9]="���һ� ���� ���� ���� ���ά�� չ�� ��װ";
 zy_hotstr[10]="��ҵ��̬ ��ҵ���� ��ҵ���� �ز���̬ �����г� �б� չ��";
 zy_hotstr[11]="���һ�ά�� �������� ���� ����";

var xm_hotstr = new Array();//���Źؼ�������
 xm_hotstr[0]="��ҩ ���� ���ݲ�Ʒ ��е";
 xm_hotstr[1]="��ҩ ���� ���ݲ�Ʒ ��е";
 xm_hotstr[2]="��ҩ ���� ���ݲ�Ʒ ��е";
 xm_hotstr[3]="��ҩ ���� ���ݲ�Ʒ ��е";
 xm_hotstr[4]="";
 xm_hotstr[5]="";
 xm_hotstr[6]="";
 xm_hotstr[7]="��ҩ ����";
 xm_hotstr[8]="";
 xm_hotstr[9]="";
 xm_hotstr[10]="ר�� չ�� ���߷���";
 xm_hotstr[11]="��ģ���� ��ҵ���� ������ֳ ���Ϲ�ҵ ��ҩ��ҵ ��Ӫ����";

var dc_hotstr = new Array();//���Źؼ�������
 dc_hotstr[0]="��ҩ ���� ���ݲ�Ʒ ��е";
 dc_hotstr[1]="д��¥ ����Ƶ� ��ס��Ԣ ���� �߿Ƽ�԰��";
 dc_hotstr[2]="��ҩ ���� ���ݲ�Ʒ ��е";
 dc_hotstr[3]="��ҩ ���� ���ݲ�Ʒ ��е";
 dc_hotstr[4]="";
 dc_hotstr[5]="";
 dc_hotstr[6]="";
 dc_hotstr[7]="��ҩ ����";
 dc_hotstr[8]="";
 dc_hotstr[9]="��ҵ���ýṹͼ ������ƽ��ͼ ������·ͼ";
 dc_hotstr[10]="�ོ ������ �������� ���伯�� �������";
 dc_hotstr[11]="���ӵ�ͼ ������ ���� ������� ¥�����а� ������¥��";

var soft_hotstr = new Array();//���Źؼ�������
 soft_hotstr[0]="��ҩ ���� ���ݲ�Ʒ ��е";
 soft_hotstr[1]="CAD  3D MAX  ���ο���  Inventor  ʵ�����";
 soft_hotstr[2]="CAD  3D MAX  ���ο���  Inventor  ʵ�����";
 soft_hotstr[3]="CAD  3D MAX  ���ο���  Inventor  ʵ�����";
 soft_hotstr[4]="";
 soft_hotstr[5]="";
 soft_hotstr[6]="";
 soft_hotstr[7]="CAD  3D MAX  ���ο���  Inventor  ʵ�����";
 soft_hotstr[8]="";
 soft_hotstr[9]="CAD  3D MAX  ���ο���  Inventor  ʵ�����";
 soft_hotstr[10]="CAD  3D MAX  ���ο���  Inventor  ʵ�����";
 soft_hotstr[11]="CAD  3D MAX  ���ο���  Inventor  ʵ�����";

var sl_hotstr = new Array();//���Źؼ�������
 sl_hotstr[0]="��ҩ ���� ���ݲ�Ʒ ��е";
 sl_hotstr[1]="��ҩ ���� ���ݲ�Ʒ ��е";
 sl_hotstr[2]="��ҩ ���� ���ݲ�Ʒ ��е";
 sl_hotstr[3]="��ҩ ���� ���ݲ�Ʒ ��е";
 sl_hotstr[4]="";
 sl_hotstr[5]="";
 sl_hotstr[6]="";
 sl_hotstr[7]="��ҩ ����";
 sl_hotstr[8]="";
 sl_hotstr[9]="";
 sl_hotstr[10]="ר�� չ�� ���߷���";
 sl_hotstr[11]="��ģ���� ��ҵ���� ������ֳ ���Ϲ�ҵ ��ҩ��ҵ ��Ӫ����";

var www1_hotstr = new Array();//���Źؼ�������
 www1_hotstr[0]="��Ƶ��ѹ ɢ���� ����� ����ն� ���� ��ͨ�� �������� ������";
 www1_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u53D8%u538B%u5668' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u907F%u96F7%u5668' class='left_zt5' target='_blank'>������</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6444%u50CF%u673A' class='left_zt5' target='_blank'>�����</a> <a href='http://xuan.shejis.com/index.aspx?productname=DVR' class='left_zt5' target='_blank'>DVR</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7A7A%u8C03' class='left_zt5' target='_blank'>�յ�</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u706F%u6CE1' class='left_zt5' target='_blank'>����</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6D41%u91CF%u8BA1' class='left_zt5' target='_blank'>������</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6C34%u6CF5' class='left_zt5' target='_blank'>ˮ��</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7535%u68AF' class='left_zt5' target='_blank'>����</a> ";
 www1_hotstr[2]="";
 www1_hotstr[3]="";
 www1_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=210&name=��ѹ��' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=����' class='left_zt5' target='_blank'>����</a>";
 www1_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=223&name=��ѹ��' class='left_zt5' target='_blank'>��ѹ��</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=����' class='left_zt5' target='_blank'>����</a>";
 www1_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=231&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=�Ž�' class='left_zt5' target='_blank'>�Ž�</a>";
 www1_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a> a href='http://bbs.shejis.com/tag2.php?typeid=241&name=����' class='left_zt5' target='_blank'>����</a>";
 www1_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=�Ž�' class='left_zt5' target='_blank'>�Ž�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=����' class='left_zt5' target='_blank'>����</a>";
 www1_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=242&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=����' class='left_zt5' target='_blank'>����</a>";
 www1_hotstr[10]="<a href='http://dq.shejis.com/search.php?searchtype=title&keywords=%B5%E7%C6%F8&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://nt.shejis.com/search.php?searchtype=title&keywords=%BF%D5%B5%F7&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�յ�</a> <a href='http://zm.shejis.com/search.php?searchtype=title&keywords=%D5%D5%C3%F7&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://af.shejis.com/search.php?searchtype=title&keywords=%B5%E7%D7%D3%D1%DB&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>������</a> <a href='http://af.shejis.com/search.php?searchtype=title&keywords=%C3%C5%BD%FB&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�Ž�</a> <a href='http://af.shejis.com/search.php?searchtype=title&keywords=%C9%E8%B1%B8&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>�豸</a> <a href='http://dt.shejis.com/search.php?searchtype=title&keywords=%B5%E7%CC%DD&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����</a> <a href='http://shui.shejis.com/search.php?searchtype=title&keywords=%B8%F8%C5%C5%CB%AE&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>����ˮ</a> <a href='http://zk.shejis.com//search.php?searchtype=title&keywords=%C2%A5%D3%EE%BF%D8%D6%C6&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>¥�����</a> ";
 www1_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=���' class='left_zt5' target='_blank'>���</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=�յ�' class='left_zt5' target='_blank'>�յ�</a> <a href='http://bbs.shejis.com/tag.php?name=һ��ͨ' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag.php?name=һ��ͨ��' class='left_zt5' target='_blank'>һ��ͨ</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a> <a href='http://bbs.shejis.com/tag.php?name=����' class='left_zt5' target='_blank'>����</a>";

var www_hotstr = new Array();
www_hotstr=www1_hotstr;

var xuan_hotstr = new Array();
xuan_hotstr=www1_hotstr;

var wwwtest_hotstr = new Array();
wwwtest_hotstr="";

var WebStr="dq";
if(location.href.indexOf('http://www1')>-1){WebStr="www1";}
if(location.href.indexOf('http://www.')>-1){WebStr="www";}
if(location.href.indexOf('http://dq')>-1){WebStr="dq";}
if(location.href.indexOf('http://nt')>-1){WebStr="nt";}
if(location.href.indexOf('http://af')>-1){WebStr="af";}
if(location.href.indexOf('http://shui')>-1){WebStr="shui";}
if(location.href.indexOf('http://zm')>-1){WebStr="zm";}
if(location.href.indexOf('http://zk')>-1){WebStr="zk";}
if(location.href.indexOf('http://dt')>-1){WebStr="dt";}
if(location.href.indexOf('http://zy')>-1){WebStr="zy";}
if(location.href.indexOf('http://xm')>-1){WebStr="xm";}
if(location.href.indexOf('http://dc')>-1){WebStr="dc";}
if(location.href.indexOf('http://soft')>-1){WebStr="soft";}
if(location.href.indexOf('http://www.xumuq')>-1){WebStr="xm";}
if(location.href.indexOf('http://sl.xumuq')>-1){WebStr="sl";}
if(location.href.indexOf('http://www.shejis.com/sl')>-1){WebStr="sl";}
if(location.href.indexOf('http://xuan')>-1){WebStr="xuan";}
if(location.href.indexOf('www.shejis.com/sytest/')>-1){WebStr="wwwtest";}


function show(sl,menuid,whichNum){//��ǩ����,��ǩIDǰ׺,��ǩID��׺
 var ysb1="top_menu_03";
 var ysb2="top_menu_02"
 if(whichNum<=12){
  for(var i=1;i<=12;i++){document.getElementById(menuid+"_"+i).className=ysb1;} 
  document.getElementById(menuid+"_"+whichNum).className=ysb2;
  MainSearchform.action=SearchUrl[whichNum-1];
  idaction=SearchUrl[whichNum-1];
  hotSearch.innerHTML=eval(WebStr+"_hotstr")[whichNum-1];
  if(document.getElementById("MainKeyword").value.substring(0,3)=="������"){
   document.getElementById("MainKeyword").value=d_value[whichNum-1];
  }
  if (document.getElementById("MainKeyword").value!=""){
   if(document.getElementById("MainKeyword").value.substring(0,3)!="������"){
    document.getElementById("MainKeyword").focus();
   }
  }
  if(whichNum==1){
   document.getElementById("MainKeyword").autocomplete="off";
   document.getElementById("MainKeyword").onpropertychange=Function("autoselect(1)");
   document.getElementById("MainKeyword").onblur=Function("endauto()");
   document.getElementById("MainKeyword").onkeydown=Function("KeyMove(event.keyCode)");
  }
  else if(whichNum==2){
   document.getElementById("MainKeyword").autocomplete="off";
   document.getElementById("MainKeyword").onpropertychange=Function("autoselect(5)");
   document.getElementById("MainKeyword").onblur=Function("endauto()");
   document.getElementById("MainKeyword").onkeydown=Function("KeyMove(event.keyCode)");
  }
  else{
   document.getElementById("MainKeyword").autocomplete="";
   document.getElementById("MainKeyword").onpropertychange="";
   document.getElementById("MainKeyword").onblur="";
   document.getElementById("MainKeyword").onkeydown="";
   endauto();
  }

  document.cookie = 'BiaoQian='+whichNum+';domain=shejis.com';
 }
  /*else{//�����ұ߱�ǩ�л�	
  for(var i=11;i<=12;i++){document.getElementById(subid+"_"+i).style.display="none";}
  for(var i=11;i<=12;i++){document.getElementById(menuid+"_"+i).className=ysb;} 
  document.getElementById(subid+"_"+whichNum).style.display="block";
  document.getElementById(menuid+"_"+whichNum).className="top_menu_02_1";
  for(var i=1;i<=12;i++){document.getElementById(subid+"_"+i).style.display="none";}
 }*///��ʱû�ã���ʱ�޸�
}

function show_select(){

  whichNum=document.getElementById("menu_select").selectedIndex+1;
 //hotSearch.innerHTML=eval(WebStr+"_hotstr")[whichNum-1];
  MainSearchform.action=SearchUrl[whichNum];
  idaction=SearchUrl[whichNum];
  hotSearch.innerHTML="";

  if(document.getElementById("MainKeyword").value.substring(0,3)=="������"){
   document.getElementById("MainKeyword").value=d_value[whichNum];
  }
  if (document.getElementById("MainKeyword").value!=""){
   if(document.getElementById("MainKeyword").value.substring(0,3)!="������"){
    document.getElementById("MainKeyword").focus();
   }
  }
if(document.getElementById("MainKeyword").value.substring(0,3)=="������"){
   document.getElementById("MainKeyword").value=d_value[whichNum];
  }
  if (document.getElementById("MainKeyword").value!=""){
   if(document.getElementById("MainKeyword").value.substring(0,3)!="������"){
    document.getElementById("MainKeyword").focus();
   }
  }
  if(whichNum==1){
   /*document.getElementById("MainKeyword").autocomplete="off";
   document.getElementById("MainKeyword").onpropertychange=Function("autoselect(1)");
   document.getElementById("MainKeyword").onblur=Function("endauto()");
   document.getElementById("MainKeyword").onkeydown=Function("KeyMove(event.keyCode)");*/

   document.getElementById("MainKeyword").autocomplete="off";
   document.getElementById("MainKeyword").onpropertychange=Function("autoselect(5)");
   document.getElementById("MainKeyword").onblur=Function("endauto()");
   document.getElementById("MainKeyword").onkeydown=Function("KeyMove(event.keyCode)");
  }
  /*else if(whichNum==2){
   document.getElementById("MainKeyword").autocomplete="off";
   document.getElementById("MainKeyword").onpropertychange=Function("autoselect(5)");
   document.getElementById("MainKeyword").onblur=Function("endauto()");
   document.getElementById("MainKeyword").onkeydown=Function("KeyMove(event.keyCode)");
  }*/
  else{
   document.getElementById("MainKeyword").autocomplete="";
   document.getElementById("MainKeyword").onpropertychange="";
   document.getElementById("MainKeyword").onblur="";
   document.getElementById("MainKeyword").onkeydown="";
   endauto();
  }
}

function MainFormSubmit(id){
  //alert(id.action);
  //alert(idaction);
  if(idaction=="csxx"){
   OpenWin();
   return false;
  }
  else if(idaction=="cpxx"||id.action.indexOf('http://xuan.shejis.com/index.aspx')>-1){
   if(document.getElementById("MainKeyword").value==d_value[1]){document.getElementById("MainKeyword").value="";}
   if(WebStr=="xuan"){
    location="http://xuan.shejis.com/index.aspx?productname="+escape(document.getElementById("MainKeyword").value);
    return false;
   }
   else{   
    document.getElementById("MainSearchform").action="http://xuan.shejis.com/index.aspx?productname="+escape(document.getElementById("MainKeyword").value);
   }
   
  }
  else if(idaction=="supplier"||id.action.indexOf('http://xuan.shejis.com/search_supplier_list.aspx')>-1){
    if(WebStr=="xuan"){
    location="http://xuan.shejis.com/search_supplier_list.aspx?sname="+escape(document.getElementById("MainKeyword").value);
    return false;
   }
   else{
    document.getElementById("MainSearchform").action="http://xuan.shejis.com/search_supplier_list.aspx?sname="+escape(document.getElementById("MainKeyword").value);
   }
  }
  else if(idaction=="agent"||id.action.indexOf('http://xuan.shejis.com/search_agent_list.aspx')>-1){
    if(WebStr=="xuan"){
    location="http://xuan.shejis.com/search_agent_list.aspx?aname="+escape(document.getElementById("MainKeyword").value);
    return false;
   }
   else{
    document.getElementById("MainSearchform").action="http://xuan.shejis.com/search_agent_list.aspx?aname="+escape(document.getElementById("MainKeyword").value);
   }
  }
  else if(idaction=="zlw"){
   document.getElementById("srchfid").value="136";
   document.getElementById("MainSearchform").action="http://bbs.shejis.com/search.php";
  }
  else if(idaction=="zal"){
   document.getElementById("srchfid").value="56";
   document.getElementById("MainSearchform").action="http://bbs.shejis.com/search.php";
  }
  else if(idaction=="ztz"){
   document.getElementById("srchfid").value="186";
   document.getElementById("MainSearchform").action="http://bbs.shejis.com/search.php";
  }
  else if(idaction=="zbz"){
   document.getElementById("srchfid").value="185";
   document.getElementById("MainSearchform").action="http://bbs.shejis.com/search.php";
  }
  else if(idaction=="zrj"){
   document.getElementById("srchfid").value="39";
   document.getElementById("MainSearchform").action="http://bbs.shejis.com/search.php";
  }
  else if(idaction=="zkj"){
   document.getElementById("srchfid").value="45";
   document.getElementById("MainSearchform").action="http://bbs.shejis.com/search.php";
  }
  else if(idaction=="zzx"){
   document.getElementById("MainSearchform").action="http://"+WebStr+".shejis.com/"+WebStr+"/search.php?searchtype=title&keywords="+document.getElementById("MainKeyword").value+"&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1";
   //return false;
  }
  else if(idaction=="zbbs"){
   document.getElementById("srchfid").value="all";
   document.getElementById("MainSearchform").action="http://bbs.shejis.com/search.php";
  }
  else{
   return true;
 }
}


function documentDiv(WebStr){//����ģ���������ģ�ⴰ��
 var leftValue1,leftValue2;
 var topValue1,topValue2;
 var widthValue1,widthValue2;
 if(WebStr=="www"){
   leftValue1="-142px";
   topValue1="-9px";
   widthValue1="357px";
   leftValue2="-260px";
   topValue2="-10px";
 }
 else{
   leftValue1="199px";
   topValue1="-31px";
   widthValue1="428px";
   leftValue2="180px";
   topValue2="-90px";
 }
 var target="target='_blank'";
 if(WebStr=="xuan"){target=""}
 document.write("<div style='position:absolute; z-index:2'>")
 document.write("<div id='MainV' style='display:none;position:absolute; width:"+widthValue1+"; z-index:1; border:1px solid; left:"+leftValue1+";top:"+topValue1+"; background:"+bgcolor+";'></div>");
 document.write("<div id='MainW' style='display:none;position:absolute; width:600px;z-index:1;text-align:left;font-size:12px;left:"+leftValue2+"; top:"+topValue2+"; background: #0081C3;'>");
 document.write("<table bgcolor='#0081C3' width=580 border=0 align=center><tr>");
 document.write("<td><b><font color=#ffffff>��������<span id=ParameterName><span></font></b></td>");
 document.write("<td><td align=right><a href='javascript:CloseWin(\"MainW\")'><img src='"+imgurl+"right_exit.gif' width=39 height=18 border=0></a></td></tr></table>");
 document.write("<table width=580 border=0 cellspacing=0 cellpadding=5 bgcolor=#FFFFFF align=center>");
 document.write("<tr><td colspan=2><span id='ParameterView'></span></td></tr>");
 document.write("<tr><td colspan=2><span id='ParameterValue'></span></td></tr>");
 document.write("<tr><td colspan=2><div align=right><a href='' "+target+" style='display:none' id='MainA' onclick='getPv2Url();MainW.style.display=\"none\"'><img src='"+imgurl+"queding.gif' border=0/></a>��<a href='javascript:CloseWin(\"MainW\")'><img border=0 src='"+imgurl+"quxiao.gif'/></a></div></td></tr>");
 document.write("<tr><td height=10 bgcolor=#0081C3 colspan=2></td></tr></table>");
 document.write("</div>");
 document.write("</div>");
}

function cc(){//���ͣ�����
 if(document.getElementById("MainKeyword").value.substring(0,3)=="������"){
   document.getElementById("MainKeyword").value="";
 }else{
 var e = event.srcElement; 
 var r =e.createTextRange(); 
 r.moveStart('character',e.value.length); 
 r.collapse(true); 
 r.select(); }
} 


document.write("<style>#MainV div{color:#000000;text-align:left;font-size:12px}</style>")
documentDiv(WebStr);


MainSearchform.action=SearchUrl[0];
hotSearch.innerHTML=eval(WebStr+"_hotstr")[0];
document.getElementById("MainKeyword").autocomplete="off";
document.getElementById("MainKeyword").onpropertychange=Function("autoselect(1)");
document.getElementById("MainKeyword").onblur=Function("endauto()");
document.getElementById("MainKeyword").onkeydown=Function("KeyMove(event.keyCode)");
document.getElementById("MainKeyword").onfocus=Function("cc()");
document.getElementById("MainKeyword").value="�������Ʒ�������磺��ѹ";

var cn_value="";
var old_value="";
var can_auto=true;
var can_div=false;
var getajax=""

function autoselect(t){
  thisvalue=document.getElementById("MainKeyword").value;
  /*if(can_auto){
     showRoles(thisvalue,"",t);
	 document.getElementById("MainV").innerHTML=getajax;
	 old_value=thisvalue;
     if(getajax==""){closediv();can_div=false;}
	 else{
	   document.getElementById("MainV").style.display="";
	   can_div=true;
	}
  } 
  else{can_auto=true;}*/
}

function endauto(){
 if(cn_value!=""){document.getElementById("MainKeyword").value=cn_value;}
 closediv();
}

function closediv(){
  document.getElementById("MainV").style.display="none";
}

function divfun(id,t){
    if(t==1){id.style.background=changecolor;cn_value=id.innerText;}
	if(t==2){id.style.background=bgcolor;cn_value="";}
}


function KeyMove(code){
  if(can_div&&MainV.style.display=="none"){MainV.style.display="";}
  else{
   
   if(code==40) {
    for (var i=0;i<document.getElementById('MainV').getElementsByTagName('DIV').length;i++){
     if (document.getElementById('MainV').getElementsByTagName('DIV')[i].style.background==changecolor){break;}
    }
   if (i==document.getElementById('MainV').getElementsByTagName('DIV').length){i=-1}
   
   if (i<document.getElementById('MainV').getElementsByTagName('DIV').length-2)
    {
	 document.getElementById('MainV').getElementsByTagName('DIV')[i+1].style.background=changecolor;
	 can_auto=false;
	 document.getElementById("MainKeyword").value=document.getElementById('MainV').getElementsByTagName('DIV')[i+1].innerText;
	}else{
	 document.getElementById("MainKeyword").value=old_value;
	}
	
   if(i>=0){document.getElementById('MainV').getElementsByTagName('DIV')[i].style.background=bgcolor;}
   }
  
  
  if(code==38) {
   if(document.getElementById('MainV').getElementsByTagName('DIV').length>0){ 
     for (var i=0;i<document.getElementById('MainV').getElementsByTagName('DIV').length;i++){
       if (document.getElementById('MainV').getElementsByTagName('DIV')[i].style.background==changecolor){break;}
     }
   if (i==document.getElementById('MainV').getElementsByTagName('DIV').length){i=document.getElementById('MainV').getElementsByTagName('DIV').length-1}
   if(i>=1){
   document.getElementById('MainV').getElementsByTagName('DIV')[i-1].style.background=changecolor;
   can_auto=false;
   document.getElementById("MainKeyword").value=document.getElementById('MainV').getElementsByTagName('DIV')[i-1].innerText;
   document.getElementById('MainV').getElementsByTagName('DIV')[i].style.background=bgcolor;
   }
   else {
    document.getElementById('MainV').getElementsByTagName('DIV')[i].style.background=bgcolor;
	document.getElementById("MainKeyword").value=old_value;
	}
   }
  }
 }
}


var http_request = false;
function send_request(url)//��ʼ����ָ������������������ĺ���
{
  http_request = false;//��ʼ��ʼ��XMLHttpRequest����
  if(window.XMLHttpRequest)//Mozilla �����
  { 
	http_request = new XMLHttpRequest();
	if (http_request.overrideMimeType) //����MiME���
	{http_request.overrideMimeType("text/xml");}
  }
  else if (window.ActiveXObject)// IE�����
  { 
   try {http_request = new ActiveXObject("Msxml2.XMLHTTP");} 
   catch (e) 
    {
	 try {http_request = new ActiveXObject("Microsoft.XMLHTTP");} 
	 catch (e) {}
	}
   }
   if (!http_request)// �쳣����������ʵ��ʧ��
   { 
     window.alert("���ܴ���XMLHttpRequest����ʵ��.");
	 return false;
   }
   http_request.onreadystatechange = processRequest;// ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���
   http_request.open("GET", url, false);   
   http_request.send(null); 
 }

	
function showRoles(keyword1,keyword2,t) 	// ��������Ϣ�ĺ���
{
 var regS = new RegExp(" ","gi"); //�滻�ո�
 keyword1=keyword1.replace(regS,"{0}");
 keyword2=keyword2.replace(regS,"{0}");
 if(WebStr=="xuan"){//ajax���ܿ����������Ҫ����ҳ����ת
    url=xmlhttpUrl+"?keyword1="+keyword1+"&keyword2="+keyword2+"&t="+t+"&webstr="+WebStr;
  }
  else{
    url="/js/getFile.php?url="+xmlhttpUrl+"?keyword1="+keyword1+"{}keyword2="+keyword2+"{}t="+t+"{}webstr="+WebStr;
  }
  //alert(url);
  send_request(url);
}       
function processRequest() // ��������Ϣ�ĺ���
{
 if (http_request.readyState == 4)// �ж϶���״̬
 { 
   if (http_request.status == 200) 
   { // ��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
	 getajax=http_request.responseText;
   } 
   else { }//ҳ�治����
  }
}

function ViewAll()
{
 if(MoreClass.style.display=="none"){
  ViewText.innerText="�������";
  MoreClass.style.display="";
 }
 else{
  ViewText.innerText="��ʾȫ��";
  MoreClass.style.display="none";
 }
}

function OpenWin()
{
 if(document.getElementById("MainKeyword").value!=""&&document.getElementById("MainKeyword").value!=d_value[0]){
     MainW.style.display="";
     ParameterName.innerText=document.getElementById("MainKeyword").value;
     showRoles(document.getElementById("MainKeyword").value,"",2);
     ParameterView.innerHTML=getajax;
     ParameterValue.innerHTML="";
     document.getElementById("MainA").style.display="none";
 }
 else{alert("����д��������")}
}

function CW(ClassID){
 cw.style.display="";
 showRoles(ClassID,"",3);
 ClassWin.innerHTML=getajax;
}

function CloseWin(id){
 eval(id).style.display="none";
}

function ParameterValueView(ClassID,ParameterName,pvid,i)
{
 //alert(ParameterName);
 showRoles(ClassID,ParameterName,4);
 //document.getElementById("ParameterValue").innerHTML=getajax;
 if(pvid=="pvH00"){
  for(j=0;j<=6;j++){
   document.getElementById("pvH"+j).innerHTML="";
  }
  document.getElementById(pvid).innerHTML=getajax+"<br>";
 }
 else{
  if(i==7){
   k=7;
  }
  else{
   k=6;
   document.getElementById("pvH00").innerHTML="";
  }
  //alert(k);
  for(j=0;j<=k;j++){
   document.getElementById("pvH"+j).innerHTML="";
  }
  document.getElementById(pvid).innerHTML=getajax+"<br>";
 }
}

function clearPV(pvid){
 document.getElementById(pvid).innerHTML="";
}

function ButtonView(cid,pn,pv){
 //alert("http://xuan.shejis.com/index_csxx.aspx?cid="+cid+"&pn="+pn+"&pv="+pv);
 document.getElementById("MainA").style.display="";
 //document.getElementById("MainA").href="http://xuan.shejis.com/index_csxx.aspx?cid="+cid+"&pn="+escape(pn)+"&pv="+pv;
 ifradio=1;
 g_cid=cid;g_pn=escape(pn);g_pv=escape(pv);
}

function ButtonView2(cid,pn){
 document.getElementById("myPV").style.display="";
 document.getElementById("pv2").focus();
 document.getElementById("MainA").style.display="";
 document.getElementById("MainA").href="";
 ifradio=2;
 g_cid=cid;g_pn=escape(pn);
}

function getPv2Url(cid,pn){
  if(ifradio==1){
   document.getElementById("MainA").href="http://xuan.shejis.com/index_csxx.aspx?cid="+g_cid+"&pn="+g_pn+"&pv="+g_pv;
 }
 else if(ifradio==2){
   document.getElementById("MainA").href="http://xuan.shejis.com/index_csxx.aspx?cid="+g_cid+"&pn="+g_pn+"&pv="+escape(document.getElementById("pv2").value);
 }
}

function getCookie(cookieName) {
  var cookieString = document.cookie;
  var start = cookieString.indexOf(cookieName + '=');
  // ���ϵȺŵ�ԭ���Ǳ�����ĳЩ Cookie ��ֵ����
  // �� cookieName һ�����ַ�����
  if (start == -1) // �Ҳ���
    return 0;
  start += cookieName.length + 1;
  var end = cookieString.indexOf(';', start);
  if (end == -1) return unescape(cookieString.substring(start));
  return unescape(cookieString.substring(start, end));
}

//alert(getCookie("BiaoQian"));
if(getCookie("BiaoQian")==0){
 thisWhichNum=2;
}
else{
 thisWhichNum=getCookie("BiaoQian");
}

function trView(i,j,k){
 if(eval(k).innerHTML=="��ʾȫ��"){
  for(x=4;x<j;x++){
   eval("t_"+i+"_"+x).style.display="";
  }
  eval(k).innerHTML="��ʾ����";
 }
 else{
  for(x=4;x<j;x++){
   eval("t_"+i+"_"+x).style.display="none";
  }
  eval(k).innerHTML="��ʾȫ��";
 }
}

if (WebStr!="www"){
 document.getElementById("menu_1").style.display="none";
 document.getElementById("menu_4").style.display="none";
 show(12,'menu',thisWhichNum);
}
else{
 document.getElementById("menu_select").selectedIndex=0;
 show_select();
}
if (WebStr=="dc"){
 document.getElementById("menu_1").style.display="none";
 document.getElementById("menu_3").style.display="none";
 document.getElementById("menu_4").style.display="none";
 document.getElementById("menu_5").style.display="none";
 document.getElementById("menu_6").style.display="none";
 document.getElementById("menu_7").style.display="none";
 document.getElementById("menu_8").style.display="none";
 document.getElementById("menu_9").style.display="none";
 show(12,'menu',thisWhichNum);
}
if (WebStr=="soft"){
 document.getElementById("menu_1").style.display="none";
 document.getElementById("menu_3").style.display="none";
 document.getElementById("menu_4").style.display="none";
 document.getElementById("menu_5").style.display="none";
 document.getElementById("menu_6").style.display="none";
 document.getElementById("menu_7").style.display="none";
 document.getElementById("menu_8").style.display="none";
 document.getElementById("menu_9").style.display="none";
 show(12,'menu',thisWhichNum);
}