document.write( "<img src=\"http://imp.constantcontact.com/imp/cmp.jsp?impcc=IMP_143021010432450&o=http://img.constantcontact.com/lp/images/standard/spacer.gif\" height=\"1\" width=\"1\" alt=\"\">" );

function MediaplexFlashAOL(){
var mp_swver = 0, mp_html = "";

if( navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin ) {
  if( navigator.plugins && navigator.plugins["Shockwave Flash"] ) {
    mp_swver = (navigator.plugins["Shockwave Flash"].description.split( " " ))[2];
  }
} else if ( navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0 && ( navigator.userAgent.indexOf("Windows") >= 0 ) ) {
var mp_axo,e;
  for( var mp_i = 11; mp_i > 6; mp_i-- ) {
    try {
    mp_axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + mp_i );
    mp_swver = mp_i;
    break;
    } catch (e) {}
  }
}
if( mp_swver >= 6 ) {
  mp_html =  "<OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" ";
  mp_html += " codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\" id=\"4948336\" NAME=\"movie4948336\" WIDTH=\"728\" HEIGHT=\"90\">";
  if( mp_swver > 5 ) {
    mp_html += "<PARAM NAME=\"FlashVars\" VALUE=\"clickTAG=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag1=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0\">";
    mp_html += "<PARAM NAME=\"movie\" VALUE=\"http://img-cdn.mediaplex.com/0/14302/101043/robot_dev_728x90.swf\">";
    mp_html += "<PARAM NAME=\"wmode\" VALUE=\"opaque\">";
    mp_html += "<PARAM NAME=\"allowscriptaccess\" VALUE=\"always\">";
  } else
    mp_html += "<PARAM NAME=\"movie\" VALUE=\"http://img-cdn.mediaplex.com/0/14302/101043/robot_dev_728x90.swf?clickTAG=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag1=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0\">";
  mp_html += "<PARAM NAME=wmode VALUE='opaque'>";
  mp_html += "<PARAM NAME=\"allowscriptaccess\" VALUE=\"always\">";
  if( mp_swver > 5 )
    mp_html += "<EMBED wmode=\"opaque\" allowscriptaccess=\"always\" NAME=\"4948336\" src=\"http://img-cdn.mediaplex.com/0/14302/101043/robot_dev_728x90.swf\" FlashVars=\"clickTAG=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag1=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0\"";
  else
    mp_html += "<EMBED wmode=\"opaque\" allowscriptaccess=\"always\" NAME=\"4948336\" src=\"http://img-cdn.mediaplex.com/0/14302/101043/robot_dev_728x90.swf?clickTAG=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0&clickTag1=http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com%2Fad%2Fck%2F14302-101043-245-0\"";
  mp_html += " swLiveConnect=\"FALSE\" WIDTH=\"728\" HEIGHT=\"90\" TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"\">";
  mp_html += "</EMBED>";
  mp_html += "</OBJECT>";
  if( window.DocumentWrite )
    DocumentWrite( mp_html );
  else
    document.write( mp_html );
} else if( !( navigator.appName && navigator.appName.indexOf("Netscape") >= 0 && navigator.appVersion.indexOf("2.") >= 0 ) ) {
  document.write("<a href=\"http://mjxads.internet.com/RealMedia/ads/click_lx.ads/intm/webdev/www.codeguru.com/cpp/misc/misc/L32/746868410/468x60-2/WMBrands/Constant_Contact_CPC_GEMS_1f/constantcontactcpcgemsdevsegleo.html/33647433774576777047414144686f43?http://altfarm.mediaplex.com/ad/ck/14302-101043-245-0\" target=\"_blank\"><img src=\"http://img-cdn.mediaplex.com/0/14302/101043/robot_dev_728x90.gif\" width=\"728\" height=\"90\" border=\"0\" alt=\"\"></a>");
}
}
MediaplexFlashAOL();
//-->

