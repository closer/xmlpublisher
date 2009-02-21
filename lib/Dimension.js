/* ----------------------------------------------------------------- */
/* 
/* Adobe InDesign CS3
/* 
/* class Dimension
/* 
/* ----------------------------------------------------------------- */
#targetengine "session"


/* ----------------------------------------------------------------- */
/* class Dimension
/* ----------------------------------------------------------------- */

Dimension = function(x, y){
	this.static_points = {x:0,y:0};
}

Dimension.prototype.setStaticPoint = function(x, y){
	this.setStaticPointX(x);
	this.setStaticPointY(y);
}

Dimension.prototype.setStaticPointX = function(value){
	this.static_points.x = value;
}

Dimension.prototype.setStaticPointY = function(value){
	this.static_points.y = value;
}

Dimension.prototype.getAbsX = function(x){
	return new Number(x) + this.static_points.x;
}

Dimension.prototype.getAbsY = function(y){
	return new Number(y) + this.static_points.y;
}

Dimension.prototype.getRect = function(x, y, w, h){
	var r_x = this.getAbsX(x);
	var r_y = this.getAbsY(y);
	return [r_y, r_x, r_y + h, r_x + w];
}