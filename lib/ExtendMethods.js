/* ----------------------------------------------------------------- */
/*
/* Adobe InDesign CS3
/*
/* API extend methods
/*
/* ----------------------------------------------------------------- */
#targetengine "session"


/* ----------------------------------------------------------------- */
/* class Text extend methods
/* ----------------------------------------------------------------- */

Text.prototype.thin = function(){
	this.horizontalScale = this.horizontalScale -1;
}

Text.prototype.fat = function(){
	this.horizontalScale = this.horizontalScale +1;
}

Text.prototype.setStyle = function(name, value){
	switch(name) {
	case 'font-family' :
		this.appliedFont = value;
		break;

	case 'font-style' :
		this.fontStyle = value;
		break;

	case 'font-size' :
		this.pointSize = value;
		break;

	case 'color' :
		this.fillColor = value;
		break;

	case "Leading" :
		this.leading = value;
		break;
	}
}

Text.prototype.setStyles = function(styles){
	for(name in styles) {
		this.setStyle(name, styles[name]);
	}
}


/* ----------------------------------------------------------------- */
/* class Text extend methods
/* ----------------------------------------------------------------- */

Paragraph.prototype.thin = function(){
	this.horizontalScale = this.horizontalScale -1;
}

Paragraph.prototype.fat = function(){
	this.horizontalScale = this.horizontalScale +1;
}


Paragraph.prototype.setStyle = function(name, value){
	switch(name) {
	case 'font-family' :
		this.appliedFont = value;
		break;

	case 'font-style' :
		this.fontStyle = value;
		break;

	case 'font-size' :
		this.pointSize = value;
		break;

	case 'color' :
		this.fillColor = value;
		break;

	case "Leading" :
		this.leading = value;
		break;

	case "justification" :
		this.justification = value;
		break;

	}
}

Paragraph.prototype.setStyles = function(styles){
	for(name in styles) {
		this.setStyle(name, styles[name]);
	}
}


/* ----------------------------------------------------------------- */
/* class TextFrame extend methods
/* ----------------------------------------------------------------- */

TextFrame.build = function(page, format){
	var textframe = page.textFrames.add();
	if(format) textframe.setStyles(format);
	return textframe;
}

TextFrame.prototype.thin = function(){
	this.texts[0].thin();
}

TextFrame.prototype.fat = function(){
	this.texts[0].fat();
}

TextFrame.prototype.setStyle = function(name, value){
	switch(name) {
	case 'size' :
		this.geometricBounds = value;
		break;

	case 'contents' :
		this.addText(value);
		break;

	case 'text-align' :
		this.textFramePreferences.verticalJustification = value;
		break;

	//case 'text-columnDirection' ://tategumi
	//	this.storyPreferences.storyOrientation = value;
	//	break;

	case 'margin-p' :
		this.textFramePreferences.insetSpacing = value;
		break;

	case 'background-color' :
		this.fillColor = value;
		break;

	/* case 'justification' :
		for(var i = 0, l = this.psragraphs.length; i < l; i++) {
			this.psragraphs[i].setStyle('justification', value);
		}
		break;*/
	}
}

TextFrame.prototype.setStyles = function(styles){
	for(name in styles) {
		this.setStyle(name, styles[name]);
	}
}

TextFrame.prototype.addText = function(text){
	this.insertionPoints.item(-1).contents += text;
	return this.texts.itemByRange(
		this.characters[- text.length],
		this.characters.lastItem());
}

TextFrame.prototype.addParagraph = function(text){
	this.addText("\r");
	this.addText(text);
	return this.lastParagraph();
}

TextFrame.prototype.lastParagraph = function(){
	return this.paragraphs.lastItem();
}


/* ----------------------------------------------------------------- */
/* class TextFrame extend methods
/* ----------------------------------------------------------------- */

TextFrame.build = function(page, format){
	var textframe = page.textFrames.add();
	if(format) textframe.setStyles(format);
	return textframe;
}

TextFrame.prototype.thin = function(){
	this.texts[0].thin();
}

TextFrame.prototype.fat = function(){
	this.texts[0].fat();
}

TextFrame.prototype.setStyle = function(name, value){
	switch(name) {
	case 'size' :
		this.geometricBounds = value;
		break;

	case 'contents' :
		this.addText(value);
		break;

	case 'text-align' :
		this.textFramePreferences.verticalJustification = value;
		break;

	case 'margin-p' :
		this.textFramePreferences.insetSpacing = value;
		break;

	case 'background-color' :
		this.fillColor = value;
		break;

	case 'border' :
		this.strokeWeight = value;
		break;

	case 'border-color' :
		this.strokeColor = value;
		break;

	case 'corner-option' :
		this.cornerOption = value;
		break;

	case 'corner-radius' :
		this.cornerRadius = value;
	}
}

TextFrame.prototype.setStyles = function(styles){
	for(name in styles) {
		this.setStyle(name, styles[name]);
	}
}

TextFrame.prototype.addText = function(text){
	this.insertionPoints.item(-1).contents += text;
	return this.texts.itemByRange(
		this.characters[- text.length],
		this.characters.lastItem());
}

TextFrame.prototype.addParagraph = function(text){
	this.addText("\r");
	return this.addText(text);
	//return this.lastParagraph();
}

TextFrame.prototype.lastParagraph = function(){
	return this.paragraphs.lastItem();
}

/* ----------------------------------------------------------------- */
/* class Table extend methods
/* ----------------------------------------------------------------- */

Table.prototype.setStyle = function(name, value){
	switch(name){
	case 'cell_width' :
		for(var i=0,c = this.cells.length;i < c;i++){
			if(value[i]) this.cells[i].width = value[i];
		}
		break;

	case 'row_height' :
		//this.height = value;
		for(var h=0,t = this.cells.length;h < t;h++){
			if(value[h]) this.rows[h].height = value[h];
		}
		break;
	}
}


/* ----------------------------------------------------------------- */
/* class Row extend methods
/* ----------------------------------------------------------------- */

Row.prototype.setStyle = function(name, value){
	switch(name){
	case 'height' :
		this.height = value;
		break;
	}
}


/* ----------------------------------------------------------------- */
/* class Cell extend methods
/* ----------------------------------------------------------------- */

Cell.prototype.setStyle = function(name, value){
	switch(name){
		case 'cell_border' :
			this.topEdgeStrokeWeight    = value[0];
			this.rightEdgeStrokeWeight  = value[1];
			this.bottomEdgeStrokeWeight = value[2];
			this.leftEdgeStrokeWeight   = value[3];
			break;
		case 'cell_justification' :
			this.paragraphs[0].justification  = value;

		case 'cell_Vertical' :
			this.verticalJustification = value;
			break;
		case 'cell_Inset' :
			this.topInset    = value[0];
			this.rightInset  = value[1];
			this.bottomInset = value[2];
			this.leftInset   = value[3];
			break;
	}
}
Cell.prototype.thin = function() {
	this.texts[0].thin();
}