(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.en = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23549B").s().p("AgtAhQgHgCgEgEQgFgFgCgHQgDgGAAgJQAAgHADgHQACgHAFgEQAEgFAGgDQAGgCAGAAQAHAAAFACQAFADAEAEQADAFACAGQACAFAAAHIgBAHIgrAAQABAJAFAGQAGAEAIAAIAIgBIAIgDIAFAKIgLAFQgGACgGAAQgHAAgGgDgAgtgSQgEAEgBAJIAeAAQAAgIgDgFQgEgEgHgBQgGABgFAEgAAzAjIAAgpQAAgIgDgDQgCgEgGAAQgEAAgEACIgHAGIAAAwIgQAAIAAhEIANAAIABAJIAAAAIAKgIQAGgDAHAAQALAAAFAHQAFAHAAAOIAAAqg");
	this.shape.setTransform(49.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmBiIAAjDIDOAAIAADDg");
	this.shape_1.setTransform(49.7,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.en, new cjs.Rectangle(39.3,2.3,20.7,19.7), null);


(lib.cz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23549B").s().p("AglAiQgGgCgFgFQgEgFgDgHQgDgGAAgJQAAgHADgHQADgHAFgEQAFgFAGgDQAGgCAHAAQAHAAAFACQAFADADADIgIALIgFgFIgGgBQgJAAgFAHQgFAFAAAKQAAALAFAGQAFAGAIAAQAFAAADgCIAHgEIAGALQgFAEgGACQgFACgGAAQgHAAgGgCgAAFAjIAAgJIAhgvIgdAAIAAgMIAxAAIAAAJIghAtIAiAAIAAAOg");
	this.shape.setTransform(15.2,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbBcIAAi3IC3AAIAAC3g");
	this.shape_1.setTransform(14.7,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cz, new cjs.Rectangle(5.5,3.8,18.5,18.4), null);


// stage content:
(lib.aitpfzculink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.czl.cursor = "pointer";
		this.enl.cursor = "pointer";
		
		this.czl.addEventListener("click", czll, false);
		
		function czll(){
			window.open("index.html","_self");
		}
		
		this.enl.addEventListener("click", enll, false);
		
		function enll(){
			window.open("en.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23549B").s().p("AgVA9IAgh5IALAAIggB5g");
	this.shape.setTransform(57.6,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// cz
	this.czl = new lib.cz();
	this.czl.parent = this;
	this.czl.setTransform(54.3,28.3,1,1,0,0,0,29.7,16);

	this.timeline.addTween(cjs.Tween.get(this.czl).wait(1));

	// en
	this.enl = new lib.en();
	this.enl.parent = this;
	this.enl.setTransform(53.8,28.3,1,1,0,0,0,29.7,16);

	this.timeline.addTween(cjs.Tween.get(this.enl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.1,39.6,54,19.9);
// library properties:
lib.properties = {
	width: 100,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(libzculink = libzculink||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libzculink, images, createjs, ss, AdobeAn;