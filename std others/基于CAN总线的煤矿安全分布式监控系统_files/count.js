var _ourplusCount = 'http://www.51kaifa.com/HostAdmin/ZiYouCount';

var _debug;
var _ourplusType;
var _ourplusShow;
var _ourplusShowStr='';
var _ourplusIframe;

var _ourplusCountPage = _ourplusCount + '/count/count.php';
if( _ourplusIframe == true )
{
	var _ourplusPageurl = escape(location.href);
	var _ourplusReferer = escape(document.referrer);
}
else
{
	var _ourplusPageurl = escape(top.location.href);
	var _ourplusReferer = escape(top.document.referrer);
}

var _ourplusLanguage = (navigator.systemLanguage?navigator.systemLanguage:navigator.language);
var _ourplusColor = screen.colorDepth;
var _ourplusScreenSize = screen.width + '*' + screen.height;
var _ourplusCharset = document.charset


var _ourplusFirstTime;
var _ourplusLastTime;
_ourplusFirstTime = _ourplusReadCookie( '_ourplusFirstTime' );
if( _ourplusFirstTime == '' )
{
	_ourplusFirstTime = getTime();
	_ourplusLastTime = _ourplusFirstTime;
	_ourplusWriteCookie( '_ourplusFirstTime', _ourplusFirstTime, 10000 );
}
else
{
	_ourplusLastTime = getTime();
}

if( _ourplusType == null )
{
	_ourplusType = 1;
}

_ourplusReturnCount = _ourplusReadCookie( '_ourplusReturnCount' );
_ourplusReturnCount = _ourplusReturnCount == '' ? 0 : _ourplusReturnCount;

_ourplusReturnTime = _ourplusReadCookie( '_ourplusReturnTime' );
if( _ourplusReturnTime == '' )
{
	_ourplusReturnTime = getTime();
	_ourplusWriteCookie( '_ourplusReturnTime', _ourplusReturnTime, 10000 );
}

temp = _ourplusReturnTime.split( '-' )
_ourplusReturnTimeDate = new Date(temp[0], temp[1]-1, temp[2], temp[3], temp[4], temp[5] );
_ourplusNowTimeDate = new Date();

if( _ourplusNowTimeDate - _ourplusReturnTimeDate >= 43200000 )
{
	_ourplusWriteCookie( '_ourplusReturnCount', ++_ourplusReturnCount, 10000 );
	_ourplusWriteCookie( '_ourplusReturnTime', getTime(), 10000 );
}
else
{
	_ourplusReturnCount = null;
}


if( _ourplusShow != null && _ourplusShow.length > 0 )
{
	var _ourplusShowStr = '';
	for( i = 0; i < _ourplusShow.length; i ++ )
	{
		_ourplusShowStr += "&show[]=" + _ourplusShow[i];
	}
}
else
{
	var _ourplusShowStr = "";
}



var _ourplusCountUrl = _ourplusCountPage + '?'
+ '&counturl=' + _ourplusCount
+ '&pageurl=' + _ourplusPageurl
+ '&referer=' + _ourplusReferer
+ '&language=' + _ourplusLanguage
+ '&color=' + _ourplusColor
+ '&screensize=' + _ourplusScreenSize
+ '&debug=' + _debug
+ '&firsttime=' + _ourplusFirstTime
+ '&lasttime=' + _ourplusLastTime
+ '&type=' + _ourplusType
+ '&charset=' + _ourplusCharset
+ _ourplusShowStr
+ '&timezone=' + (new Date()).getTimezoneOffset()/60;

if( _ourplusReturnCount != null )
{
	_ourplusCountUrl += '&return1=' + _ourplusReturnCount;
}


if( _debug )
{
	document.write(_ourplusCountUrl);
	document.write("<iframe src='" + _ourplusCountUrl + "' width=100% height=500></iframe>");
}
else
{
	document.write("<script src='" + _ourplusCountUrl + "'></script>");
}



//Functions

function getTime() 
{ 
	now = new Date(); 
	year=now.getYear();
	Month=now.getMonth()+1;
	Day=now.getDate();
	Hour=now.getHours(); 
	Minute=now.getMinutes(); 
	Second=now.getSeconds(); 
	return year+"-"+Month+"-"+Day+"-"+Hour+"-"+Minute+"-"+Second;
} 


function _ourplusReadCookie(name)
{
  var cookieValue = "";
  var search = name + "=";
  if(document.cookie.length > 0)
  { 
    offset = document.cookie.indexOf(search);
    if (offset != -1)
    { 
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      cookieValue = unescape(document.cookie.substring(offset, end))
    }
  }
  return cookieValue;
}

function _ourplusWriteCookie(name, value, hours)
{
  var expire = "";
  if(hours != null)
  {
    expire = new Date((new Date()).getTime() + hours * 3600000);
    expire = "; expires=" + expire.toGMTString();
  }
  document.cookie = name + "=" + escape(value) + expire + "domain=;" + "path=/;";
}