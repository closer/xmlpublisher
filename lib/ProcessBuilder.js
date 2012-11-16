/* ----------------------------------------------------------------- */
/*
/* Adobe InDesign CS3
/*
/* class ProcessBuilder
/*
/* ----------------------------------------------------------------- */
#targetengine "session"
#include "glue code.jsx"
#include "lib/DocumentUtil.js"


/* ----------------------------------------------------------------- */
/* class ProcessBuilder
/* ----------------------------------------------------------------- */

var ProcessBuilder = function(document) {
	this.prosesses = [];
	this.document = document;
	this.page = new DocumentUtil.Page(document);
	this.variables = {};
	this.initParams();
}

ProcessBuilder.prototype.initParams = function(){
	this.name  = "";
	this.xpath = "";
	this.apply = function(){};
	this.after = function(){};
};

ProcessBuilder.prototype.build = function(){
	var _before = this['apply'];
	var _after = this['after'];
	this.addProsess(this['name'], this['xpath'], function(element, processer){
		_before(element, processer);
		__processChildren(processer);
		_after(element, processer);
	});
	this.initParams();
}

ProcessBuilder.prototype.execute = function(element){
	__processRuleSet(element, this.prosesses);
}

ProcessBuilder.prototype.addProsess = function(name, xpath, func){
	this.prosesses.push(new (function(){
		this.name = name;
		this.xpath = xpath;
		this.apply = func;
	})());
}

ProcessBuilder.prototype.storeValiable = function(name, initvalue) {
	this.variables[name] = initvalue;
	this[name] = initvalue;
}

ProcessBuilder.prototype.resetValiables = function() {
	for(name in this.variables){
		this[name] = this.variables[name];
	}
}

