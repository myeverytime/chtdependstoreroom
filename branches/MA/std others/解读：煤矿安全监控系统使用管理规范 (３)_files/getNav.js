var thisUrl=location.href;
var cookName=thisUrl.substring(0,thisUrl.length-5);
var cookName1=cookName.split("_");
var len=cookName1.length;
if (len>2){len=len-1;}
cookName="";
for(i=0;i<len;i++){
 cookName+=cookName1[i]+"_";
}
cookName=cookName.substring(0,cookName.length-1);
//获取当前地址前半部分作为cookies名称，以保证nt/hykx/200804/article_6644.html与nt/hykx/200804/article_6644_2.html 有相同的COOKIES名称

if (getCookie(cookName)==""){
 referrerUrl=document.referrer;
}
else{
 referrerUrl=getCookie(cookName);
}



referrerUrl1=referrerUrl;
referrerUrl=referrerUrl.replace("http://","");
treferrerUrl=referrerUrl.split("/");
referrerUrl="";
for(i=0;i<treferrerUrl.length;i++){
  referrerUrl+=treferrerUrl[i]+"|";
}

//alert(referrerUrl);

var http_request_2 = false;
function send_request_2(url)//初始化、指定处理函数、发送请求的函数
{
  http_request_2 = false;//开始初始化XMLHttpRequest对象
  if(window.XMLHttpRequest)//Mozilla 浏览器
  { 
	http_request_2 = new XMLHttpRequest();
	if (http_request_2.overrideMimeType) //设置MiME类别
	{http_request_2.overrideMimeType("text/xml");}
  }
  else if (window.ActiveXObject)// IE浏览器
  { 
   try {http_request_2 = new ActiveXObject("Msxml2.XMLHTTP");} 
   catch (e) 
    {
	 try {http_request_2 = new ActiveXObject("Microsoft.XMLHTTP");} 
	 catch (e) {}
	}
   }
   if (!http_request_2)// 异常，创建对象实例失败
   { 
     window.alert("不能创建XMLHttpRequest对象实例.");
	 return false;
   }
   http_request_2.onreadystatechange = processRequest_2;// 确定发送请求的方式和URL以及是否同步执行下段代码
   http_request_2.open("GET", url, false);   
   http_request_2.send(null); 
 }

	
function showRoles_2() 	// 处理返回信息的函数
{
  send_request_2("/js/getNav.php?Url="+referrerUrl);
}       

function processRequest_2() // 处理返回信息的函数
{
 if (http_request_2.readyState == 4)// 判断对象状态
 { 
   if (http_request_2.status == 200) 
   { // 信息已经成功返回，开始处理信息
	 NavHTML=http_request_2.responseText;
   } 
   else { }//页面不正常
  }
}

function setCookie(name, value) {
        
document.cookie = name + "=" + escape(value);
}


function getCookie(Name) {
   var search = Name + "=";
   if(document.cookie.length > 0) {
      var offset = document.cookie.indexOf(search);
      if(offset != -1) {
         offset += search.length;
         var end = document.cookie.indexOf(";", offset);
         if(end == -1) end = document.cookie.length;
         return unescape(document.cookie.substring(offset, end));
      }
      else return "";
   }
}

if(treferrerUrl[1]=="zxkw"){
 setCookie(cookName,referrerUrl1);
 //alert(getCookie(cookName));
 showRoles_2();
 thisNav.innerHTML=NavHTML;
 
}