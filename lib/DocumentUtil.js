/* ----------------------------------------------------------------- */
/* 
/* Adobe InDesign CS3
/* 
/* module DocumentUtil
/* 
/* ----------------------------------------------------------------- */
#targetengine "session"


/* ----------------------------------------------------------------- */
/* module DocumentUtil
/* ----------------------------------------------------------------- */

var DocumentUtil = {};


/* ----------------------------------------------------------------- */
/* class DocumentUtil::Page
/* ----------------------------------------------------------------- */

DocumentUtil.Page = function(document){
	this.document = document;
	this.count = 0;
}

DocumentUtil.Page.prototype.get = function(){
	return this.document.pages.item(this.count);
}

DocumentUtil.Page.prototype.prev = function(){
	this.count--;
	return this.get();
}

DocumentUtil.Page.prototype.next = function(){
	this.count++;
	this.document.pages.add();
	return this.get();
}