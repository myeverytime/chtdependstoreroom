﻿// Copyright (c) 2008, The Code Project. All rights reserved.
/// <reference path="../../JS/jquery-1.3.2-vsdoc2.js" />

function bookmarkMe(objId, objTypeId, url) {
    var idPrefix = "bm_";
	var bmkLink = GetBmkLink(idPrefix, objId.toString(), objTypeId.toString());
	var bmkStatusMsg = GetBmkStatusMsg(idPrefix, objId.toString(), objTypeId.toString());

	if (LoadWaitMessage(bmkLink, bmkStatusMsg))
	    $(bmkStatusMsg).load(url);
	return false;
}

function watchMe(objId, objTypeId, url) {
    var idPrefix = "bmw_";
    var bmkLink = GetBmkLink(idPrefix, objId.toString(), objTypeId.toString());
    var bmkStatusMsg = GetBmkStatusMsg(idPrefix, objId.toString(), objTypeId.toString());
    
	if (LoadWaitMessage(bmkLink, bmkStatusMsg))
	    $(bmkStatusMsg).load(url);
	return false;
}

function GetBmkLink(idPrefix, objectId, objectTypeId) {
    return $("a[name=" + idPrefix + objectId + "_" + objectTypeId + "]");
}
function GetBmkStatusMsg(idPrefix, objectId, objectTypeId) {
	return document.getElementsByName(idPrefix + objectId + "_" + objectTypeId)[0];
}

function LoadWaitMessage(bmkLink, bmkStatusMsg)
{
	if (!bmkLink || !bmkStatusMsg) return false;

	$(bmkLink).css("display", "none");
    $(bmkStatusMsg).html(" please wait... ");
    $(bmkStatusMsg).css("display", "");
        
	return true;
}
