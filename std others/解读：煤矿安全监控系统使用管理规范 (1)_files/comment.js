function addone(obj,cid)
{
    var url = phpcms_path + "comment/addone.php";
    var pars = "obj="+obj+"&cid="+cid;
    var spanid = obj+cid;
	var myAjax = new Ajax.Updater(
					spanid,
					url,
					{
					method: 'get',
					parameters: pars,
					evalScripts: true
					}
	             ); 
}

function AddOnPos(obj, charvalue)
{
	obj.focus();
	var r = document.selection.createRange();
	var ctr = obj.createTextRange();
	var i;
	var s = obj.value;

	//ע�͵������ַ���ֻ�����ڵ��е������input��
	//�Զ��������textarea��Ч
	//r.setEndPoint("StartToStart", ctr);
	//i = r.text.length;
	//ȡ�����λ��----Start----
	var ivalue = "&^asdjfls2FFFF325%$^&";
	r.text = ivalue;
	i = obj.value.indexOf(ivalue);
	r.moveStart("character", -ivalue.length);
	r.text = "";
	//ȡ�����λ��----End----
	//�����ַ�
	obj.value = s.substr(0,i) + charvalue + s.substr(i,s.length);
	ctr.collapse(true);
	ctr.moveStart("character", i + charvalue.length);
	ctr.select();
}
function docheck()
{
    if(commentform.commentcontent.value=="") {
       alert("��������������!");
       commentform.commentcontent.focus();
       return false;
    }
    return true;
}
function SelectSmilies(phpcms_path)
{
  var arr=Dialog(phpcms_path+'comment/smile_select.php','',200,400); 
  if(arr!=null){
    AddOnPos($('commentcontent'), arr);
  }
}
function reply(phpcms_path,cid)
{
	if(cid=='guest')
	{
		alert('����Ա�����οͲ��ܻظ����ۣ���ע���Ϊ���ǵĻ�Ա');
		commentform.replycid.value = 1;
		$('commentcontent').disabled=true;
		return false;
	}
	else
	{
	  commentform.replycid.value = cid;
	  commentform.commentcontent.style.background="url("+phpcms_path+"images/comment/txtareabg.gif) no-repeat top left" ;
	  commentform.commentcontent.focus();
	}
}