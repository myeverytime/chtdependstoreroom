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
//��ȡ��ǰ��ַǰ�벿����Ϊcookies���ƣ��Ա�֤nt/hykx/200804/article_6644.html��nt/hykx/200804/article_6644_2.html ����ͬ��COOKIES����

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
function send_request_2(url)//��ʼ����ָ������������������ĺ���
{
  http_request_2 = false;//��ʼ��ʼ��XMLHttpRequest����
  if(window.XMLHttpRequest)//Mozilla �����
  { 
	http_request_2 = new XMLHttpRequest();
	if (http_request_2.overrideMimeType) //����MiME���
	{http_request_2.overrideMimeType("text/xml");}
  }
  else if (window.ActiveXObject)// IE�����
  { 
   try {http_request_2 = new ActiveXObject("Msxml2.XMLHTTP");} 
   catch (e) 
    {
	 try {http_request_2 = new ActiveXObject("Microsoft.XMLHTTP");} 
	 catch (e) {}
	}
   }
   if (!http_request_2)// �쳣����������ʵ��ʧ��
   { 
     window.alert("���ܴ���XMLHttpRequest����ʵ��.");
	 return false;
   }
   http_request_2.onreadystatechange = processRequest_2;// ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���
   http_request_2.open("GET", url, false);   
   http_request_2.send(null); 
 }

	
function showRoles_2() 	// ��������Ϣ�ĺ���
{
  send_request_2("/js/getNav.php?Url="+referrerUrl);
}       

function processRequest_2() // ��������Ϣ�ĺ���
{
 if (http_request_2.readyState == 4)// �ж϶���״̬
 { 
   if (http_request_2.status == 200) 
   { // ��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
	 NavHTML=http_request_2.responseText;
   } 
   else { }//ҳ�治����
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