
var bgcolor="#ffffff";
var changecolor="#00ccff";
var xmlhttpUrl="http://xuan.shejis.com/js/selectAjax.asp";
var imgurl="http://dq.shejis.com/images1/win/";

var d_value=new Array();//搜索栏默认值
 d_value[0]="请输入产品参数，如：电压";
 d_value[1]="请输入产品名称、品牌、类别、型号等信息进行产品查找";
 d_value[2]="请输入供应商名称";
 d_value[3]="请输入代理商名称";
 d_value[4]="请输入论文关键字";
 d_value[5]="请输入案例关键字";
 d_value[6]="请输入图纸关键字";
 d_value[7]="请输入标准关键字";
 d_value[8]="请输入软件关键字";
 d_value[9]="请输入课件关键字";
 d_value[10]="请输入资讯关键字";
 d_value[11]="请输入帖子关键字";

var ysb1="top_menu_03";//标签变化后样式CLASS
var ysb2="top_menu_02";//标签原先样式CLASS

var SearchUrl =new Array();//不同标签搜索地址数组
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

var dq_hotstr = new Array();//热门关键字数组
 dq_hotstr[0]="工频耐压 额定电流 标称截面 电阻 响应时间 额定短时耐受时间";
 dq_hotstr[1]="<a href=' http://xuan.shejis.com/index.aspx?productname=%u53D8%u538B%u5668' class='left_zt5' target='_blank'>变压器</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u5F00%u5173' class='left_zt5' target='_blank'>开关</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u7194%u65AD%u5668' class='left_zt5' target='_blank'>熔断器</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u907F%u96F7%u5668' class='left_zt5' target='_blank'>避雷器</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u7535%u7F06' class='left_zt5' target='_blank'>电缆</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u7535%u6E90' class='left_zt5' target='_blank'>电源</a> <a href=' http://xuan.shejis.com/index.aspx?productname=%u4F20%u611F%u5668' class='left_zt5' target='_blank'>传感器</a>";
 dq_hotstr[2]="";
 dq_hotstr[3]="";
 dq_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=208&name=变电站' class='left_zt5' target='_blank'>变电站</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=继电保护' class='left_zt5' target='_blank'>继电保护</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=变压器' class='left_zt5' target='_blank'>变压器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=开关' class='left_zt5' target='_blank'>开关</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=断路器' class='left_zt5' target='_blank'>断路器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=电容器' class='left_zt5' target='_blank'>电容器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=无功补偿' class='left_zt5' target='_blank'>无功补偿</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=电源' class='left_zt5' target='_blank'>电源</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=发电机' class='left_zt5' target='_blank'>发电机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=电动机' class='left_zt5' target='_blank'>电动机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=电缆' class='left_zt5' target='_blank'>电缆</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=输电线路' class='left_zt5' target='_blank'>输电线路</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=变频器' class='left_zt5' target='_blank'>变频器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=接地' class='left_zt5' target='_blank'>接地</a>";
 dq_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=217&name=变电站' class='left_zt5' target='_blank'>变电站</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=继电保护' class='left_zt5' target='_blank'>继电保护</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=变压器' class='left_zt5' target='_blank'>变压器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=开关' class='left_zt5' target='_blank'>开关</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=断路器' class='left_zt5' target='_blank'>断路器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=电源' class='left_zt5' target='_blank'>电源</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=发电机' class='left_zt5' target='_blank'>发电机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=电动机' class='left_zt5' target='_blank'>电动机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=电缆' class='left_zt5' target='_blank'>电缆</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=输电线路'>输电线路</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=变频器'>变频器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=217&name=接地'>接地</a> ";
 dq_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=218&name=变电站' class='left_zt5' target='_blank'>变电站</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=变压器' class='left_zt5' target='_blank'>变压器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=施工' class='left_zt5' target='_blank'>施工</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=箱变' class='left_zt5' target='_blank'>箱变</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=发电机' class='left_zt5' target='_blank'>发电机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=电动机' class='left_zt5' target='_blank'>电动机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=开关' class='left_zt5' target='_blank'>开关</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=电源' class='left_zt5' target='_blank'>电源</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=厂房' class='left_zt5' target='_blank'>厂房</a> <a href='http://bbs.shejis.com/tag2.php?typeid=218&name=接地' class='left_zt5' target='_blank'>接地</a>";
 dq_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=219&name=建筑' class='left_zt5' target='_blank'>建筑</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=施工' class='left_zt5' target='_blank'>施工</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=电厂' class='left_zt5' target='_blank'>电厂</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=电缆' class='left_zt5' target='_blank'>电缆</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=高压' class='left_zt5' target='_blank'>高压</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=低压' class='left_zt5' target='_blank'>低压</a> <a href='http://bbs.shejis.com/tag2.php?typeid=219&name=接地' class='left_zt5' target='_blank'>接地</a>";
 dq_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=221&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=221&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=221&name=建筑' class='left_zt5' target='_blank'>建筑</a> <a href='http://bbs.shejis.com/tag2.php?typeid=221&name=负荷' class='left_zt5' target='_blank'>负荷</a>";
 dq_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=220&name=电工' class='left_zt5' target='_blank'>电工</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=施工' class='left_zt5' target='_blank'>施工</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=电力' class='left_zt5' target='_blank'>电力</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=电机' class='left_zt5' target='_blank'>电机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=变压器' class='left_zt5' target='_blank'>变压器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=220&name=视频' class='left_zt5' target='_blank'>视频</a>";
 dq_hotstr[10]="<a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=电价&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>电价</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=核电&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>核电</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=环保&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>环保</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=电荒&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>电荒</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=节能&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>节能</a> <a href='http://dq.shejis.com/dq/search.php?searchtype=title&keywords=风电&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>风电</a>";
 dq_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=变电站' class='left_zt5' target='_blank'>变电站</a> <a href='http://bbs.shejis.com/tag.php?name=继电保护' class='left_zt5' target='_blank'>继电保护</a> <a href='http://bbs.shejis.com/tag.php?name=变压器' class='left_zt5' target='_blank'>变压器</a> <a href='http://bbs.shejis.com/tag.php?name=开关' class='left_zt5' target='_blank'>开关</a> <a href='http://bbs.shejis.com/tag.php?name=断路器' class='left_zt5' target='_blank'>断路器</a> <a href='http://bbs.shejis.com/tag.php?name=电容器' class='left_zt5' target='_blank'>电容器</a> <a href='http://bbs.shejis.com/tag.php?name=无功补偿' class='left_zt5' target='_blank'>无功补偿</a> <a href='http://bbs.shejis.com/tag.php?name=电源' class='left_zt5' target='_blank'>电源</a> <a href='http://bbs.shejis.com/tag.php?name=发电机' class='left_zt5' target='_blank'>发电机</a> <a href='http://bbs.shejis.com/tag.php?name=电动机' class='left_zt5' target='_blank'>电动机</a> <a href='http://bbs.shejis.com/tag.php?name=电缆' class='left_zt5' target='_blank'>电缆</a> <a href='http://bbs.shejis.com/tag.php?name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag.php?name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag.php?name=输电线路' class='left_zt5' target='_blank'>输电线路</a> <a href='http://bbs.shejis.com/tag.php?name=变频器' class='left_zt5' target='_blank'>变频器</a> <a href='http://bbs.shejis.com/tag.php?name=接地' class='left_zt5' target='_blank'>接地</a> <a href='http://bbs.shejis.com/tag.php?name=视频' class='left_zt5' target='_blank'>视频</a> <a href='http://bbs.shejis.com/tag.php?name=建筑' class='left_zt5' target='_blank'>建筑</a>";

var nt_hotstr = new Array();//热门关键字数组
 nt_hotstr[0]="中央空调主机 制冷配件 采暖设备 供热设备 通风设备";
 nt_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u79BB%u5FC3%u673A' class='left_zt5' target='_blank'>离心机</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u4E2D%u592E%u7A7A%u8C03' class='left_zt5' target='_blank'>中央空调</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u98CE%u673A%u76D8%u7BA1' class='left_zt5' target='_blank'>风机盘管</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u65B0%u98CE%u673A%u7EC4%20' class='left_zt5' target='_blank'>新风机组</a>";
 nt_hotstr[2]="";
 nt_hotstr[3]="";
 nt_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=209&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=供暖' class='left_zt5' target='_blank'>供暖</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=通风' class='left_zt5' target='_blank'>通风</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=风机盘管' class='left_zt5' target='_blank'>风机盘管</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=新风机组' class='left_zt5' target='_blank'>新风机组</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=制冷剂' class='left_zt5' target='_blank'>制冷剂</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=中央空调' class='left_zt5' target='_blank'>中央空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=209&name=热泵' class='left_zt5' target='_blank'>热泵 </a> ";
 nt_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=222&name=热泵' class='left_zt5' target='_blank'>热泵</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=通风' class='left_zt5' target='_blank'>通风</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name= 空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=中央空调' class='left_zt5' target='_blank'>中央空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=制冷系统' class='left_zt5' target='_blank'>制冷系统</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=冷水机组' class='left_zt5' target='_blank'>冷水机组</a> <a href='http://bbs.shejis.com/tag2.php?typeid=222&name=通风系统' class='left_zt5' target='_blank'>通风系统</a>";
 nt_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=230&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=中央空调' class='left_zt5' target='_blank'>中央空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=制冷' class='left_zt5' target='_blank'>制冷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=太阳能' class='left_zt5' target='_blank'>太阳能</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=热泵' class='left_zt5' target='_blank'>热泵</a> <a href='http://bbs.shejis.com/tag2.php?typeid=230&name=通风' class='left_zt5' target='_blank'>通风</a>";
 nt_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=238&name=建筑' class='left_zt5' target='_blank'>建筑 </a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=采暖' class='left_zt5' target='_blank'>采暖 </a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=通风' class='left_zt5' target='_blank'>通风 </a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=制冷' class='left_zt5' target='_blank'>制冷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=238&name=供热' class='left_zt5' target='_blank'>供热</a>";
 nt_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=240&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=天正' class='left_zt5' target='_blank'>天正</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=采暖' class='left_zt5' target='_blank'>采暖</a>";
 nt_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=239&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=工程' class='left_zt5' target='_blank'>工程</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=地暖' class='left_zt5' target='_blank'>地暖</a> <a href='http://bbs.shejis.com/tag2.php?typeid=240&name=建筑' class='left_zt5' target='_blank'>建筑</a>";
 nt_hotstr[10]="<a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=空调&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>空调</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=供暖&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>供暖</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=除湿&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>除湿</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=制冷&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>制冷</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=地源热泵&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>地源热泵</a> <a href='http://nt.shejis.com/nt/search.php?searchtype=title&keywords=通风&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>通风</a>";
 nt_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag.php?name=热泵' class='left_zt5' target='_blank'>热泵</a> <a href='http://bbs.shejis.com/tag.php?name=供热' class='left_zt5' target='_blank'>供热</a> <a href='http://bbs.shejis.com/tag.php?name=采暖' class='left_zt5' target='_blank'>采暖</a> <a href='http://bbs.shejis.com/tag.php?name=制冷' class='left_zt5' target='_blank'>制冷</a> <a href='http://bbs.shejis.com/tag.php?name=气流组织' class='left_zt5' target='_blank'>气流组织</a>";

var af_hotstr = new Array();//热门关键字数组
 af_hotstr[0]="最低照度 背光补偿 电子快门 信噪比 白平衡 分辨率 压缩格式";
 af_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u6444%u50CF%u673A' class='left_zt5' target='_blank'>摄像机</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u62A5%u8B66%u5668' class='left_zt5' target='_blank'>报警器</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u955C%u5934' class='left_zt5' target='_blank'>镜头</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u5149%u7AEF%u673A' class='left_zt5' target='_blank'>光端机</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u4E91%u53F0' class='left_zt5' target='_blank'>云台</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u786C%u76D8%u5F55%u50CF%u673A' class='left_zt5' target='_blank'>硬盘录像机</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u9AD8%u901F%u7403' class='left_zt5' target='_blank'>高速球</a>";
 af_hotstr[2]="";
 af_hotstr[3]="";
 af_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=210&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=防盗报警' class='left_zt5' target='_blank'>防盗报警</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=门禁' class='left_zt5' target='_blank'>门禁</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=摄像机' class='left_zt5' target='_blank'>摄像机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=光端机' class='left_zt5' target='_blank'>光端机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=布线' class='left_zt5' target='_blank'>布线</a>";
 af_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=223&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=防盗' class='left_zt5' target='_blank'>防盗</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=弱电' class='left_zt5' target='_blank'>弱电</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=停车场' class='left_zt5' target='_blank'>停车场</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=门禁' class='left_zt5' target='_blank'>门禁</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=报警' class='left_zt5' target='_blank'>报警</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=智能小区' class='left_zt5' target='_blank'>智能小区</a>";
 af_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=231&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=门禁' class='left_zt5' target='_blank'>门禁</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=对讲' class='left_zt5' target='_blank'>对讲</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=巡更' class='left_zt5' target='_blank'>巡更</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=弱电' class='left_zt5' target='_blank'>弱电</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=综合布线' class='left_zt5' target='_blank'>综合布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=停车场' class='left_zt5' target='_blank'>停车场</a>";
 af_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=241&name=对讲' class='left_zt5' target='_blank'>对讲</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=防盗' class='left_zt5' target='_blank'>防盗</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=智能建筑' class='left_zt5' target='_blank'>智能建筑</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=线缆' class='left_zt5' target='_blank'>线缆</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=报警' class='left_zt5' target='_blank'>报警</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=安全防范' class='left_zt5' target='_blank'>安全防范</a>";
 af_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=243&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=驱动' class='left_zt5' target='_blank'>驱动</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=设计' class='left_zt5' target='_blank'>设计</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=考勤' class='left_zt5' target='_blank'>考勤</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=播放器'>播放器</a>";
 af_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=242&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=综合布线' class='left_zt5' target='_blank' class='left_zt5' target='_blank'>综合布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=防盗' class='left_zt5' target='_blank'>防盗</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=手册' class='left_zt5' target='_blank'>手册</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=教程'>教程</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=讲座'>讲座</a>";
 af_hotstr[10]="<a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=电子眼&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>电子眼</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=监控&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>监控</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=报警&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>报警</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=智能交通&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>智能交通</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=门禁&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>门禁</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=安全&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>安全</a> <a href='http://af.shejis.com/af/search.php?searchtype=title&keywords=一卡通&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>一卡通</a>";
 af_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag.php?name=报警' class='left_zt5' target='_blank'>报警</a> <a href='http://bbs.shejis.com/tag.php?name=智能交通' class='left_zt5' target='_blank'>智能交通</a> <a href='http://bbs.shejis.com/tag.php?name=门禁' class='left_zt5' target='_blank'>门禁</a> <a href='http://bbs.shejis.com/tag.php?name=安全' class='left_zt5' target='_blank'>安全</a> <a href='http://bbs.shejis.com/tag.php?name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag.php?name=布线' class='left_zt5' target='_blank'>布线</a> <a href='http://bbs.shejis.com/tag.php?name=停车场' class='left_zt5' target='_blank'>停车场</a> <a href='http://bbs.shejis.com/tag.php?name=防盗' class='left_zt5' target='_blank'>防盗</a>";

var shui_hotstr = new Array();//热门关键字数组
 shui_hotstr[0]="泵 阀门 管材 水表 药剂 膜";
 shui_hotstr[1]="<a href='http://xuan.shejis.com/norecord.aspx?nid=196' class='left_zt5' target='_blank'>泵</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=571' class='left_zt5' target='_blank'>阀门</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=403' class='left_zt5' target='_blank'>管材</a> <a href='http://xuan.shejis.com/index_cpzj.aspx?cid=701' class='left_zt5' target='_blank'>水表</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=731' class='left_zt5' target='_blank'>药剂</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=1008' class='left_zt5' target='_blank'>曝气设备</a> <a href='http://xuan.shejis.com/norecord.aspx?nid=1029' class='left_zt5' target='_blank'>膜</a>";
 shui_hotstr[2]="水泵 阀门 管材 水表 药剂 膜";
 shui_hotstr[3]="水泵 阀门 管材 水表 药剂 膜";
 shui_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=211&name=废水' class='left_zt5' target='_blank'></a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=污水' class='left_zt5' target='_blank'>污水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=消防' class='left_zt5' target='_blank'>消防</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=中水' class='left_zt5' target='_blank'>中水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=自来水厂' class='left_zt5' target='_blank'>自来水厂</a> <a href='http://bbs.shejis.com/tag2.php?typeid=211&name=废水' class='left_zt5' target='_blank'>废水</a>";
 shui_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=224&name=污水厂' class='left_zt5' target='_blank'>污水厂</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=自来水厂' class='left_zt5' target='_blank'>自来水厂</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=消防' class='left_zt5' target='_blank'>消防</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=住宅' class='left_zt5' target='_blank'>住宅</a> <a href='http://bbs.shejis.com/tag2.php?typeid=224&name=水处理工艺' class='left_zt5' target='_blank'>水处理工艺</a>";
 shui_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=232&name=污水厂' class='left_zt5' target='_blank'>污水厂</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=自来水厂' class='left_zt5' target='_blank'>自来水厂</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=消防' class='left_zt5' target='_blank'>消防</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=住宅' class='left_zt5' target='_blank'>住宅</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=水处理工艺' class='left_zt5' target='_blank'>水处理工艺</a> <a href='http://bbs.shejis.com/tag2.php?typeid=232&name=高层' class='left_zt5' target='_blank'>高层</a>";
 shui_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=244&name=室外排水' class='left_zt5' target='_blank'>室外排水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=244&name=建筑' class='left_zt5' target='_blank'>建筑</a> <a href='http://bbs.shejis.com/tag2.php?typeid=244&name=排水' class='left_zt5' target='_blank'>排水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=244&name=污水' class='left_zt5' target='_blank'>污水</a>";
 shui_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=246&name=消防' class='left_zt5' target='_blank'>消防</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=污水' class='left_zt5' target='_blank'>污水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=天正给排水' class='left_zt5' target='_blank'>天正给排水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=246&name=排水' class='left_zt5' target='_blank'>排水</a>";
 shui_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=245&name=消防' class='left_zt5' target='_blank'>消防</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=污水处理' class='left_zt5' target='_blank'>污水处理</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=纯水' class='left_zt5' target='_blank'>纯水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=建筑给排水' class='left_zt5' target='_blank'>建筑给排水</a> <a href='http://bbs.shejis.com/tag2.php?typeid=245&name=反渗透' class='left_zt5' target='_blank'>反渗透</a>";
 shui_hotstr[10]="<a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=污染&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>污染</a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=污水&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>污水</a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=海水淡化&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>海水淡化</a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=水价&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'></a> <a href='http://shui.shejis.com/shui/search.php?searchtype=title&keywords=水价&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>水价</a>";
 shui_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=水处理' class='left_zt5' target='_blank'>水处理</a> <a href='http://bbs.shejis.com/tag.php?name=污水' class='left_zt5' target='_blank'>污水</a> <a href='http://bbs.shejis.com/tag.php?name=污泥' class='left_zt5' target='_blank'>污泥</a> <a href='http://bbs.shejis.com/tag.php?name=膜' class='left_zt5' target='_blank'>膜</a> <a href='http://bbs.shejis.com/tag.php?name=消防' class='left_zt5' target='_blank'>消防</a> <a href='http://bbs.shejis.com/tag.php?name=给排水' class='left_zt5' target='_blank'>给排水</a>";

var zm_hotstr = new Array();//热门关键字数组
 zm_hotstr[0]="光通量 寿命 功率 防护等级 电压 色温 电流 安装方式";
 zm_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u5364%u94A8%u706F' class='left_zt5' target='_blank'>卤钨灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u683C%u6805%u706F' class='left_zt5' target='_blank'>格栅灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u8367%u5149%u706F' class='left_zt5' target='_blank'>荧光灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u53F0%u706F' class='left_zt5' target='_blank'>台灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7B52%u706F' class='left_zt5' target='_blank'>筒灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u58C1%u706F' class='left_zt5' target='_blank'>壁灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u94A0%u706F' class='left_zt5' target='_blank'>钠灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=LED%20' class='left_zt5' target='_blank'>LED</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u666F%u89C2%u706F%20' class='left_zt5' target='_blank'>景观灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u5EAD%u9662%u706F' class='left_zt5' target='_blank'>庭院灯</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u592A%u9633%u80FD%u706F' class='left_zt5' target='_blank'>太阳能灯</a>";
 zm_hotstr[2]="照明 灯具 电器附件 飞利浦 灯管 照明工程 佛山照明 雷士照明";
 zm_hotstr[3]="照明 灯具 电器附件 亮化 LED 照明工程";
 zm_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=212&name=照明设计' class='left_zt5' target='_blank'>照明设计</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=灯光' class='left_zt5' target='_blank'>灯光</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=防爆灯具' class='left_zt5' target='_blank'>防爆灯具</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=镇流器' class='left_zt5' target='_blank' >镇流器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=212&name=LED' class='left_zt5' target='_blank'>LED</a>";
 zm_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=225&name=LED照明' class='left_zt5' target='_blank'>LED照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=照明工程' class='left_zt5' target='_blank'>照明工程</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=光源' class='left_zt5' target='_blank' >光源</a> <a href='http://bbs.shejis.com/tag2.php?typeid=225&name=夜景' class='left_zt5' target='_blank'>夜景</a>";
 zm_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=233&name=照明工程' class='left_zt5' target='_blank'>照明工程</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=亮化' class='left_zt5' target='_blank'>亮化</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=灯光' class='left_zt5' target='_blank' >灯光</a> <a href='http://bbs.shejis.com/tag2.php?typeid=233&name=灯具' class='left_zt5' target='_blank'>灯具</a>";
 zm_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=247&name=灯泡' class='left_zt5' target='_blank'>灯泡</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=灯具' class='left_zt5' target='_blank'>灯具</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=LED' class='left_zt5' target='_blank'>LED</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=照度' class='left_zt5' target='_blank'>照度</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=灯头' class='left_zt5' target='_blank'>灯头</a> <a href='http://bbs.shejis.com/tag2.php?typeid=247&name=灯座' class='left_zt5' target='_blank'>灯座</a>";
 zm_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=249&name=照度' class='left_zt5' target='_blank'>照度</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=渲染' class='left_zt5' target='_blank'>渲染</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=霓虹灯' class='left_zt5' target='_blank'>霓虹灯</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=电子镇流器' class='left_zt5' target='_blank'>电子镇流器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=249&name=灯光' class='left_zt5' target='_blank'>灯光</a>";
 zm_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=248&name=灯光' class='left_zt5' target='_blank'>灯光</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=渲染' class='left_zt5' target='_blank'>渲染</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=LED' class='left_zt5' target='_blank'>LED</a> <a href='http://bbs.shejis.com/tag2.php?typeid=248&name=照度' class='left_zt5' target='_blank'>照度</a>";
 zm_hotstr[10]="<a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=照明&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank' class='left_zt5' target='_blank'>照明</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=LED&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>LED</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=灯具&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>灯具</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=照明设计&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>照明设计</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=照明工程&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>照明工程</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=灯光&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>灯光</a> <a href='http://zm.shejis.com/zm/search.php?searchtype=title&keywords=节能&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>节能</a>";
 zm_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=电光源' class='left_zt5' target='_blank'>电光源</a> <a href='http://bbs.shejis.com/tag.php?name=灯具' class='left_zt5' target='_blank'>灯具</a> <a href='http://bbs.shejis.com/tag.php?name=照明设计' class='left_zt5' target='_blank'>照明设计</a> <a href='http://bbs.shejis.com/tag.php?name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag.php?name=灯光' class='left_zt5' target='_blank'>灯光</a> <a href='http://bbs.shejis.com/tag.php?name=LED' class='left_zt5' target='_blank'>LED</a>";

var zk_hotstr = new Array();//热门关键字数组
 zk_hotstr[0]="流量计 物位计 PLC DCS 压力表 执行器 现场仪表 无线通讯";
 zk_hotstr[1]="流量计 物位计 PLC DCS 压力表 执行器 现场仪表 无线通讯";
 zk_hotstr[2]="<a href='http://xuan.shejis.com/index.aspx?productname=%u6D41%u91CF%u8BA1' class='left_zt5' target='_blank'>流量计</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7269%u4F4D%u8BA1' class='left_zt5' target='_blank'>物位计</a> <a href='http://xuan.shejis.com/index.aspx?productname=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://xuan.shejis.com/index.aspx?productname=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u538B%u529B%u8868' class='left_zt5' target='_blank'>压力表</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6267%u884C%u5668' class='left_zt5' target='_blank'>执行器</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u73B0%u573A%u4EEA%u8868' class='left_zt5' target='_blank'>现场仪表</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u65E0%u7EBF%u901A%u8BAF' class='left_zt5' target='_blank'>无线通讯</a>";
 zk_hotstr[3]="流量计 物位计 PLC DCS 压力表 执行器 现场仪表 无线通讯";
 zk_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=208&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=PLC改造' class='left_zt5' target='_blank'>PLC改造</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=传动' class='left_zt5' target='_blank'>传动</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=通讯' class='left_zt5' target='_blank'>通讯</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=传感器' class='left_zt5' target='_blank'>传感器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=组态软件' class='left_zt5' target='_blank'>组态软件</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=变频器' class='left_zt5' target='_blank'>变频器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=208&name=仪表' class='left_zt5' target='_blank'>仪表</a>";
 zk_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=226&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=西门子' class='left_zt5' target='_blank'>西门子</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=ABB' class='left_zt5' target='_blank'>ABB</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=方案' class='left_zt5' target='_blank'>方案</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=脱硫系统' class='left_zt5' target='_blank'>脱硫系统</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=系统' class='left_zt5' target='_blank'>系统</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=应用' class='left_zt5' target='_blank'>应用</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=控制系统' class='left_zt5' target='_blank'>控制系统</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=自动化' class='left_zt5' target='_blank'>自动化</a> <a href='http://bbs.shejis.com/tag2.php?typeid=226&name=智能化' class='left_zt5' target='_blank'>智能化</a>";
 zk_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=234&name=星三角启动原理图' class='left_zt5' target='_blank'>星三角启动原理图</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=星三角启动图纸' class='left_zt5' target='_blank'>星三角启动图纸</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=PLC梯形图' class='left_zt5' target='_blank'>PLC梯形图</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=交通灯梯形图' class='left_zt5' target='_blank'>交通灯梯形图</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=控制图' class='left_zt5' target='_blank'>控制图</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=仪表回路图' class='left_zt5' target='_blank'>仪表回路图</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=接线图' class='left_zt5' target='_blank'>接线图</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=234&name=西门子' class='left_zt5' target='_blank'>西门子</a>";
 zk_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=250&name=自动化' class='left_zt5' target='_blank'>自动化</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=流量计' class='left_zt5' target='_blank'>流量计</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=仪表' class='left_zt5' target='_blank'>仪表</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=仪表选型' class='left_zt5' target='_blank'>仪表选型</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=验收' class='left_zt5' target='_blank'>验收</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=技术要求' class='left_zt5' target='_blank'>技术要求</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=图形符号' class='left_zt5' target='_blank'>图形符号</a> <a href='http://bbs.shejis.com/tag2.php?typeid=250&name=设计' class='left_zt5' target='_blank'>设计</a>";
 zk_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=251&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=仿真软件' class='left_zt5' target='_blank'>仿真软件</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=编程软件' class='left_zt5' target='_blank'>编程软件</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=触摸屏' class='left_zt5' target='_blank'>触摸屏</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=解密' class='left_zt5' target='_blank'>解密</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=组态' class='left_zt5' target='_blank'>组态</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=西门子' class='left_zt5' target='_blank'>西门子</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=三菱' class='left_zt5' target='_blank'>三菱</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=测试软件' class='left_zt5' target='_blank'>测试软件</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=模拟器' class='left_zt5' target='_blank'>模拟器</a>";
 zk_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=251&name=PLC' class='left_zt5' target='_blank'>PLC</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=DCS' class='left_zt5' target='_blank'>DCS</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=组态' class='left_zt5' target='_blank'>组态</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=西门子' class='left_zt5' target='_blank'>西门子</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=三菱' class='left_zt5' target='_blank'>三菱</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=变频器' class='left_zt5' target='_blank'>变频器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=智能控制' class='left_zt5' target='_blank'>智能控制</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=传感器' class='left_zt5' target='_blank'>传感器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=单片机' class='left_zt5' target='_blank'>单片机</a> <a href='http://bbs.shejis.com/tag2.php?typeid=251&name=仪表' class='left_zt5' target='_blank'>仪表</a>";
 zk_hotstr[10]="<a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=自动化&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>自动化</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=智能化&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>智能化</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=自控&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>自控</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=控制&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>控制</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=设计&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>设计</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=控制系统&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>控制系统</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=现场总线&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>现场总线</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=可编程控制器&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>可编程控制器</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=展会&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>展会</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=工程&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>工程</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=招标&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>招标</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=仪表&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>仪表</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=新品&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>新品</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=招聘&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>招聘</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=PLC&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>PLC</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=DCS&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>DCS</a> <a href='http://zk.shejis.com/zk/search.php?searchtype=title&keywords=培训&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>培训</a>";
 zk_hotstr[11]="教程 PLC DCS系统 仪表选型 流量计 物位计 变频器";

var dt_hotstr = new Array();//热门关键字数组
 dt_hotstr[0]="电梯整机 曳引系统 轿厢系统 电梯控制 电梯安全 电梯部件";
 dt_hotstr[1]="客梯 货梯 曳引机 轿厢门 光幕 电梯控制柜 缓冲器 平层装置 ";
 dt_hotstr[2]="奥的斯 三菱 日立 通力 康力 默纳克 广日 蒂森";
 dt_hotstr[3]="奥的斯 三菱 日立 通力 康力 默纳克 广日 蒂森";
 dt_hotstr[4]="PLC 产品介绍 电梯选择 电梯改造 控制系统";
 dt_hotstr[5]="调试资料 故障代码 技术文章 产品介绍 故障讨论 行业动态";
 dt_hotstr[6]="井道图 产品图片";
 dt_hotstr[7]="国家标准 行业标准 GB50310-2002";
 dt_hotstr[8]="解密软件";
 dt_hotstr[9]="调试资料 故障代码 技术文章 产品介绍 故障讨论 行业动态";
 dt_hotstr[10]="行业动态 行业人物 行业会议 地产动态 区域市场 招标 展会";
 dt_hotstr[11]="技术交流 销售经验 企业管理 休闲娱乐 流量计 物位计 变频器";

var zy_hotstr = new Array();//热门关键字数组
 zy_hotstr[0]="缝纫机 面料 辅料";
 zy_hotstr[1]="缝纫机 绣花机 面料 辅料 机针 拉链";
 zy_hotstr[2]="缝纫机 绣花机 面料 辅料 机针 拉链";
 zy_hotstr[3]="缝纫机 绣花机 面料 辅料 机针 拉链";
 zy_hotstr[4]="水冷机组　继电器　门禁　监视器　风机　变压器　水源热泵";
 zy_hotstr[5]="水冷机组　继电器　门禁　监视器　风机　变压器　水源热泵";
 zy_hotstr[6]="手稿 样纸 款式图";
 zy_hotstr[7]="缝纫机 面料 辅料";
 zy_hotstr[8]="水冷机组　继电器　门禁　监视器　风机　变压器　水源热泵";
 zy_hotstr[9]="缝纫机 缝企 面料 辅料 缝机维修 展会 服装";
 zy_hotstr[10]="行业动态 行业人物 行业会议 地产动态 区域市场 招标 展会";
 zy_hotstr[11]="缝纫机维修 流行趋势 面料 辅料";

var xm_hotstr = new Array();//热门关键字数组
 xm_hotstr[0]="兽药 饲料 畜禽产品 机械";
 xm_hotstr[1]="兽药 饲料 畜禽产品 机械";
 xm_hotstr[2]="兽药 饲料 畜禽产品 机械";
 xm_hotstr[3]="兽药 饲料 畜禽产品 机械";
 xm_hotstr[4]="";
 xm_hotstr[5]="";
 xm_hotstr[6]="";
 xm_hotstr[7]="兽药 饲料";
 xm_hotstr[8]="";
 xm_hotstr[9]="";
 xm_hotstr[10]="专题 展会 政策法规";
 xm_hotstr[11]="规模养猪 禽业交流 其它养殖 饲料工业 兽药行业 经营管理";

var dc_hotstr = new Array();//热门关键字数组
 dc_hotstr[0]="兽药 饲料 畜禽产品 机械";
 dc_hotstr[1]="写字楼 商务酒店 商住公寓 商铺 高科技园区";
 dc_hotstr[2]="兽药 饲料 畜禽产品 机械";
 dc_hotstr[3]="兽药 饲料 畜禽产品 机械";
 dc_hotstr[4]="";
 dc_hotstr[5]="";
 dc_hotstr[6]="";
 dc_hotstr[7]="兽药 饲料";
 dc_hotstr[8]="";
 dc_hotstr[9]="商业大厦结构图 王府井平面图 弱电线路图";
 dc_hotstr[10]="燕郊 富力城 华威大厦 经典集团 华电大厦";
 dc_hotstr[11]="电子地图 买房流程 打折 房贷理财 楼盘排行榜 网上售楼处";

var soft_hotstr = new Array();//热门关键字数组
 soft_hotstr[0]="兽药 饲料 畜禽产品 机械";
 soft_hotstr[1]="CAD  3D MAX  二次开发  Inventor  实体设计";
 soft_hotstr[2]="CAD  3D MAX  二次开发  Inventor  实体设计";
 soft_hotstr[3]="CAD  3D MAX  二次开发  Inventor  实体设计";
 soft_hotstr[4]="";
 soft_hotstr[5]="";
 soft_hotstr[6]="";
 soft_hotstr[7]="CAD  3D MAX  二次开发  Inventor  实体设计";
 soft_hotstr[8]="";
 soft_hotstr[9]="CAD  3D MAX  二次开发  Inventor  实体设计";
 soft_hotstr[10]="CAD  3D MAX  二次开发  Inventor  实体设计";
 soft_hotstr[11]="CAD  3D MAX  二次开发  Inventor  实体设计";

var sl_hotstr = new Array();//热门关键字数组
 sl_hotstr[0]="兽药 饲料 畜禽产品 机械";
 sl_hotstr[1]="兽药 饲料 畜禽产品 机械";
 sl_hotstr[2]="兽药 饲料 畜禽产品 机械";
 sl_hotstr[3]="兽药 饲料 畜禽产品 机械";
 sl_hotstr[4]="";
 sl_hotstr[5]="";
 sl_hotstr[6]="";
 sl_hotstr[7]="兽药 饲料";
 sl_hotstr[8]="";
 sl_hotstr[9]="";
 sl_hotstr[10]="专题 展会 政策法规";
 sl_hotstr[11]="规模养猪 禽业交流 其它养殖 饲料工业 兽药行业 经营管理";

var www1_hotstr = new Array();//热门关键字数组
 www1_hotstr[0]="工频耐压 散热量 信噪比 最低照度 功率 光通量 电梯整机 流量计";
 www1_hotstr[1]="<a href='http://xuan.shejis.com/index.aspx?productname=%u53D8%u538B%u5668' class='left_zt5' target='_blank'>变压器</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u907F%u96F7%u5668' class='left_zt5' target='_blank'>避雷器</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6444%u50CF%u673A' class='left_zt5' target='_blank'>摄像机</a> <a href='http://xuan.shejis.com/index.aspx?productname=DVR' class='left_zt5' target='_blank'>DVR</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7A7A%u8C03' class='left_zt5' target='_blank'>空调</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u706F%u6CE1' class='left_zt5' target='_blank'>灯泡</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6D41%u91CF%u8BA1' class='left_zt5' target='_blank'>流量计</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u6C34%u6CF5' class='left_zt5' target='_blank'>水泵</a> <a href='http://xuan.shejis.com/index.aspx?productname=%u7535%u68AF' class='left_zt5' target='_blank'>电梯</a> ";
 www1_hotstr[2]="";
 www1_hotstr[3]="";
 www1_hotstr[4]="<a href='http://bbs.shejis.com/tag2.php?typeid=210&name=变压器' class='left_zt5' target='_blank'>变压器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=布线' class='left_zt5' target='_blank'>布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=210&name=弱电' class='left_zt5' target='_blank'>弱电</a>";
 www1_hotstr[5]="<a href='http://bbs.shejis.com/tag2.php?typeid=223&name=变压器' class='left_zt5' target='_blank'>变压器</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=布线' class='left_zt5' target='_blank'>布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=223&name=弱电' class='left_zt5' target='_blank'>弱电</a>";
 www1_hotstr[6]="<a href='http://bbs.shejis.com/tag2.php?typeid=231&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=布线' class='left_zt5' target='_blank'>布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=弱电' class='left_zt5' target='_blank'>弱电</a> <a href='http://bbs.shejis.com/tag2.php?typeid=231&name=门禁' class='left_zt5' target='_blank'>门禁</a>";
 www1_hotstr[7]="<a href='http://bbs.shejis.com/tag2.php?typeid=241&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=布线' class='left_zt5' target='_blank'>布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=241&name=弱电' class='left_zt5' target='_blank'>弱电</a> a href='http://bbs.shejis.com/tag2.php?typeid=241&name=安防' class='left_zt5' target='_blank'>安防</a>";
 www1_hotstr[8]="<a href='http://bbs.shejis.com/tag2.php?typeid=243&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=安防' class='left_zt5' target='_blank'>安防</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=CAD' class='left_zt5' target='_blank'>CAD</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=防雷' class='left_zt5' target='_blank'>防雷</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=布线' class='left_zt5' target='_blank'>布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=弱电' class='left_zt5' target='_blank'>弱电</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=门禁' class='left_zt5' target='_blank'>门禁</a> <a href='http://bbs.shejis.com/tag2.php?typeid=243&name=电梯' class='left_zt5' target='_blank'>电梯</a>";
 www1_hotstr[9]="<a href='http://bbs.shejis.com/tag2.php?typeid=242&name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=布线' class='left_zt5' target='_blank'>布线</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=弱电' class='left_zt5' target='_blank'>弱电</a> <a href='http://bbs.shejis.com/tag2.php?typeid=242&name=安防' class='left_zt5' target='_blank'>安防</a>";
 www1_hotstr[10]="<a href='http://dq.shejis.com/search.php?searchtype=title&keywords=%B5%E7%C6%F8&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>电气</a> <a href='http://nt.shejis.com/search.php?searchtype=title&keywords=%BF%D5%B5%F7&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>空调</a> <a href='http://zm.shejis.com/search.php?searchtype=title&keywords=%D5%D5%C3%F7&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>照明</a> <a href='http://af.shejis.com/search.php?searchtype=title&keywords=%B5%E7%D7%D3%D1%DB&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>电子眼</a> <a href='http://af.shejis.com/search.php?searchtype=title&keywords=%C3%C5%BD%FB&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>门禁</a> <a href='http://af.shejis.com/search.php?searchtype=title&keywords=%C9%E8%B1%B8&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>设备</a> <a href='http://dt.shejis.com/search.php?searchtype=title&keywords=%B5%E7%CC%DD&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>电梯</a> <a href='http://shui.shejis.com/search.php?searchtype=title&keywords=%B8%F8%C5%C5%CB%AE&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>给排水</a> <a href='http://zk.shejis.com//search.php?searchtype=title&keywords=%C2%A5%D3%EE%BF%D8%D6%C6&catid=0&typeid=0&fromdate=&todate=&ordertype=0&search=1' class='left_zt5' target='_blank'>楼宇控制</a> ";
 www1_hotstr[11]="<a href='http://bbs.shejis.com/tag.php?name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag.php?name=监控' class='left_zt5' target='_blank'>监控</a> <a href='http://bbs.shejis.com/tag.php?name=照明' class='left_zt5' target='_blank'>照明</a> <a href='http://bbs.shejis.com/tag.php?name=电气' class='left_zt5' target='_blank'>电气</a> <a href='http://bbs.shejis.com/tag.php?name=空调' class='left_zt5' target='_blank'>空调</a> <a href='http://bbs.shejis.com/tag.php?name=一卡通' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag.php?name=一卡通线' class='left_zt5' target='_blank'>一卡通</a> <a href='http://bbs.shejis.com/tag.php?name=弱电' class='left_zt5' target='_blank'>弱电</a> <a href='http://bbs.shejis.com/tag.php?name=安防' class='left_zt5' target='_blank'>安防</a>";

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


function show(sl,menuid,whichNum){//标签总数,标签ID前缀,标签ID后缀
 var ysb1="top_menu_03";
 var ysb2="top_menu_02"
 if(whichNum<=12){
  for(var i=1;i<=12;i++){document.getElementById(menuid+"_"+i).className=ysb1;} 
  document.getElementById(menuid+"_"+whichNum).className=ysb2;
  MainSearchform.action=SearchUrl[whichNum-1];
  idaction=SearchUrl[whichNum-1];
  hotSearch.innerHTML=eval(WebStr+"_hotstr")[whichNum-1];
  if(document.getElementById("MainKeyword").value.substring(0,3)=="请输入"){
   document.getElementById("MainKeyword").value=d_value[whichNum-1];
  }
  if (document.getElementById("MainKeyword").value!=""){
   if(document.getElementById("MainKeyword").value.substring(0,3)!="请输入"){
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
  /*else{//处理右边标签切换	
  for(var i=11;i<=12;i++){document.getElementById(subid+"_"+i).style.display="none";}
  for(var i=11;i<=12;i++){document.getElementById(menuid+"_"+i).className=ysb;} 
  document.getElementById(subid+"_"+whichNum).style.display="block";
  document.getElementById(menuid+"_"+whichNum).className="top_menu_02_1";
  for(var i=1;i<=12;i++){document.getElementById(subid+"_"+i).style.display="none";}
 }*///暂时没用，用时修改
}

function show_select(){

  whichNum=document.getElementById("menu_select").selectedIndex+1;
 //hotSearch.innerHTML=eval(WebStr+"_hotstr")[whichNum-1];
  MainSearchform.action=SearchUrl[whichNum];
  idaction=SearchUrl[whichNum];
  hotSearch.innerHTML="";

  if(document.getElementById("MainKeyword").value.substring(0,3)=="请输入"){
   document.getElementById("MainKeyword").value=d_value[whichNum];
  }
  if (document.getElementById("MainKeyword").value!=""){
   if(document.getElementById("MainKeyword").value.substring(0,3)!="请输入"){
    document.getElementById("MainKeyword").focus();
   }
  }
if(document.getElementById("MainKeyword").value.substring(0,3)=="请输入"){
   document.getElementById("MainKeyword").value=d_value[whichNum];
  }
  if (document.getElementById("MainKeyword").value!=""){
   if(document.getElementById("MainKeyword").value.substring(0,3)!="请输入"){
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


function documentDiv(WebStr){//制作模拟下拉层和模拟窗口
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
 document.write("<td><b><font color=#ffffff>参数名：<span id=ParameterName><span></font></b></td>");
 document.write("<td><td align=right><a href='javascript:CloseWin(\"MainW\")'><img src='"+imgurl+"right_exit.gif' width=39 height=18 border=0></a></td></tr></table>");
 document.write("<table width=580 border=0 cellspacing=0 cellpadding=5 bgcolor=#FFFFFF align=center>");
 document.write("<tr><td colspan=2><span id='ParameterView'></span></td></tr>");
 document.write("<tr><td colspan=2><span id='ParameterValue'></span></td></tr>");
 document.write("<tr><td colspan=2><div align=right><a href='' "+target+" style='display:none' id='MainA' onclick='getPv2Url();MainW.style.display=\"none\"'><img src='"+imgurl+"queding.gif' border=0/></a>　<a href='javascript:CloseWin(\"MainW\")'><img border=0 src='"+imgurl+"quxiao.gif'/></a></div></td></tr>");
 document.write("<tr><td height=10 bgcolor=#0081C3 colspan=2></td></tr></table>");
 document.write("</div>");
 document.write("</div>");
}

function cc(){//光标停在最后
 if(document.getElementById("MainKeyword").value.substring(0,3)=="请输入"){
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
document.getElementById("MainKeyword").value="请输入产品参数，如：电压";

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
function send_request(url)//初始化、指定处理函数、发送请求的函数
{
  http_request = false;//开始初始化XMLHttpRequest对象
  if(window.XMLHttpRequest)//Mozilla 浏览器
  { 
	http_request = new XMLHttpRequest();
	if (http_request.overrideMimeType) //设置MiME类别
	{http_request.overrideMimeType("text/xml");}
  }
  else if (window.ActiveXObject)// IE浏览器
  { 
   try {http_request = new ActiveXObject("Msxml2.XMLHTTP");} 
   catch (e) 
    {
	 try {http_request = new ActiveXObject("Microsoft.XMLHTTP");} 
	 catch (e) {}
	}
   }
   if (!http_request)// 异常，创建对象实例失败
   { 
     window.alert("不能创建XMLHttpRequest对象实例.");
	 return false;
   }
   http_request.onreadystatechange = processRequest;// 确定发送请求的方式和URL以及是否同步执行下段代码
   http_request.open("GET", url, false);   
   http_request.send(null); 
 }

	
function showRoles(keyword1,keyword2,t) 	// 处理返回信息的函数
{
 var regS = new RegExp(" ","gi"); //替换空格
 keyword1=keyword1.replace(regS,"{0}");
 keyword2=keyword2.replace(regS,"{0}");
 if(WebStr=="xuan"){//ajax不能跨域，如跨域需要本地页面跳转
    url=xmlhttpUrl+"?keyword1="+keyword1+"&keyword2="+keyword2+"&t="+t+"&webstr="+WebStr;
  }
  else{
    url="/js/getFile.php?url="+xmlhttpUrl+"?keyword1="+keyword1+"{}keyword2="+keyword2+"{}t="+t+"{}webstr="+WebStr;
  }
  //alert(url);
  send_request(url);
}       
function processRequest() // 处理返回信息的函数
{
 if (http_request.readyState == 4)// 判断对象状态
 { 
   if (http_request.status == 200) 
   { // 信息已经成功返回，开始处理信息
	 getajax=http_request.responseText;
   } 
   else { }//页面不正常
  }
}

function ViewAll()
{
 if(MoreClass.style.display=="none"){
  ViewText.innerText="精简分类";
  MoreClass.style.display="";
 }
 else{
  ViewText.innerText="显示全部";
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
 else{alert("请填写参数名！")}
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
  // 加上等号的原因是避免在某些 Cookie 的值里有
  // 与 cookieName 一样的字符串。
  if (start == -1) // 找不到
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
 if(eval(k).innerHTML=="显示全部"){
  for(x=4;x<j;x++){
   eval("t_"+i+"_"+x).style.display="";
  }
  eval(k).innerHTML="显示部分";
 }
 else{
  for(x=4;x<j;x++){
   eval("t_"+i+"_"+x).style.display="none";
  }
  eval(k).innerHTML="显示全部";
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