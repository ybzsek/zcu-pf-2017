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


(lib.zcu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// link en
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23549B").s().p("ABVA5IAehxIAKAAIgeBxgACZAkQgFgDgFgEQgEgFgDgGQgCgGAAgIQAAgHACgHQADgGAEgEQAFgFAEgCQAGgCAGAAQAGAAAGACQAEACAEAFQADADACAGIABAMIAAAHIgpAAQABAIAFAFQAFAFAIAAQAEAAAEgBIAIgEIAEAKQgEADgGACQgFACgHAAQgGAAgHgCgACagNQgEAEgBAIIAdAAQgBgIgCgEQgEgEgHAAQgFAAgFAEgAgLAkQgFgDgFgEQgEgEgDgHQgCgGAAgIQAAgHACgHQAEgGAEgEQAFgFAFgCQAGgCAFAAQAHAAAFACIAIAFIgHAKIgGgEIgGgBQgHAAgFAGQgEAGAAAJQAAAJAEAGQAFAGAHAAIAHgBIAGgEIAHAKQgFAEgFACQgGACgGAAQgGAAgFgCgAg9AjQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAACADQADADAAAEQAAAFgDADQgCADgFAAQgEAAgDgDgAiDAfQgFgHAAgMIAAgoIAPAAIAAAmQAAAIACADQADAEAFAAQAEAAAEgDQADgBADgFIAAgsIAPAAIAABAIgLAAIgBgJIgBAAIgJAIQgGADgHAAQgKAAgEgHgAi2AkQgFgDgFgEQgEgEgDgHQgCgGAAgIQAAgHACgHQAEgGAEgEQAFgFAFgCQAGgCAGAAQAHAAAFACIAIAFIgHAKIgGgEIgGgBQgIAAgFAGQgEAGAAAJQAAAJAEAGQAFAGAIAAIAHgBIAGgEIAHAKQgFAEgFACQgGACgGAAQgHAAgFgCgAD2AkIAAglQgBgJgCgDQgCgDgGAAQgDAAgDACIgIAGIAAAsIgQAAIAAhAIANAAIACAJIAAAAQAEgEAFgDQAGgDAGAAQAKAAAFAGQAFAHgBAMIAAAogAAeAkIAAgIIAegsIgbAAIAAgMIAuAAIAAAIIgeAsIAfAAIAAAMgAkEAkIAAgIIAfgsIgbAAIAAgMIAuAAIAAAIIgfAsIAgAAIAAAMg");
	this.shape.setTransform(10.6,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AknhRIJPAAIl5BzIjWAwg");
	this.shape_1.setTransform(10.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.zcu, new cjs.Rectangle(-19.2,6.1,59.2,16.4), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt en
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AYzA9IgJgDIgFgGQgCgDAAgEQAAgEADgEQACgEAFgDIAAAAIgEgEQgCgDAAgDQAAgFACgDIAFgEIAAgBQgEgCgCgFQgCgDAAgGIABgJQACgEAEgDQADgDAEgCIAJgCIAFABIAEABIAWAAIAAAIIgNAAIAEAGQACADAAAEQAAAFgCAEIgFAGQgDADgFACQgEABgFAAIgEAAIgFgCIgDAEIgBAEQAAADACACQACACAHAAIAMAAQAMAAAFADQAFAEAAAIQAAAFgBAEIgHAGQgEADgGACQgGACgIAAIgKgBgAYuAmIgBAFQAAAGAEADQAFADAJAAIAIgCQAEgBACgCQADgBACgDIABgEQAAgFgDgBQgDgCgHAAIgKAAIgFgBIgEAAQgDACgCADgAY0gUQgEAEAAAHIABAGIADAEIAEADIAFABIAGgBIAEgDIADgEQABgDAAgDQAAgHgEgEQgEgEgGAAQgFAAgEAEgARnA7IgEAAIADgJIACABIACAAQAGAAADgEQAEgEACgGIABgEIgZg/IAKAAIAOAiIADAJIADAJIAAAAIADgJIACgJIAMgiIAKAAIgXBEIgEAJIgFAGIgHAFQgDACgFAAIgEgBgA1qA7IgEAAIADgJIACABIACAAQAGAAADgEQAEgEACgGIACgEIgag/IALAAIANAiIADAJIADAJIAAAAIADgJIADgJIAMgiIAKAAIgYBEIgEAJIgFAGIgHAFQgDACgFAAIgEgBgA5CA7IgEAAIADgJIACABIADAAQAFAAADgEQAEgEACgGIACgEIgag/IALAAIANAiIADAJIADAJIAAAAIADgJIADgJIAMgiIAKAAIgYBEIgEAJIgFAGQgDADgEACQgDACgFAAIgEgBgAqSAxQAGgDADgEQADgEAAgFIgBAAQgDAAgCgCQgDgCAAgEQAAgDADgCQACgCADAAQAEAAADADQACADAAAGQAAAJgEAGQgFAHgIADgEAg1AAhIgGgFQgCgDgBgDIgBgJIAAgiIgJAAIAAgIIAKgBIABgSIAJAAIAAASIARAAIAAAJIgRAAIAAAiQAAAGACADQADADAFAAIAEAAIADgBIADAIIgGABIgGABQgGAAgDgBgAe7AeQgFgFAAgJQAAgKAJgGQAJgEAVgDIAAgGIgDgFQgBgCgDgBQgCgCgEAAQgGAAgFACIgIAFIgFgIIAMgFQAGgDAHAAQAMAAAGAHQAFAHAAAMIAAAnIgJAAIgBgIQgFAEgFACQgGADgGAAQgHAAgGgEgAfQACIgJADQgEACgBADIgBAFQAAAGADACQADACAEAAQAFAAAEgBIAJgHIAAgRIgNACgAdZAZQgIgIAAgQQAAgHADgGQACgGAEgEQAEgFAFgCQAEgDAGAAQAGAAAEADQAEABAEAEIAAgkIAKAAIAABdIgJAAIAAgIIgBAAQgDAEgGACQgEADgGAAQgMAAgHgJgAdogVQgEACgCADIgEAIIgBAJQAAALAEAHQAFAGAJAAIAIgCIAIgGIAAghIgIgFIgIgBQgEAAgDABgAbOAeQgFgFAAgJQAAgKAIgGQAKgEAVgDIgBgGIgCgFQgBgCgDgBQgDgCgDAAQgGAAgFACQgFACgDADIgFgIIALgFQAGgDAIAAQAMAAAFAHQAGAHAAAMIAAAnIgJAAIgCgIQgEAEgGACQgFADgGAAQgIAAgFgEgAbiACIgJADQgDACgCADIgBAFQAAAGADACQADACAFAAQAFAAAEgBIAJgHIAAgRIgOACgAXVAfQgGgCgFgEIAFgHQAEAEAFACQAEACAGAAQAGAAAEgDQADgDAAgEIgBgEIgEgEIgFgCIgFgCIgHgDIgGgCIgEgGQgCgCAAgEQAAgFACgDQABgDADgCIAHgEIAJgCQAGAAAFADIAJAFIgFAGIgHgEIgIgBQgGAAgCACQgDADAAAEIABAEIADADIAFACIAFACIAGADQAEAAADACIAEAGQACADAAAEIgBAIQgCADgDACQgDADgEACQgFABgFAAQgHAAgGgDgAWeAgQgFgCgFgFQgEgEgCgGQgDgGAAgIQAAgHADgGQACgGAEgFQAFgEAEgCQAGgDAFAAQAGAAAFADQAEACAEADQADAFACAFQACAFAAAIIgBAEIgrAAQABALAGAGQAFAFAKAAIAIgBIAHgDIAEAHIgJAEQgGACgGAAQgGAAgGgCgAWigWQgEABgCADIgEAGIgCAJIAiAAQAAgKgEgFQgEgFgHAAIgHABgAVKAZQgHgIAAgQQAAgHACgGQADgGADgEQAEgFAFgCQAFgDAGAAQAFAAAEADIAJAFIgBgkIALAAIAABdIgJAAIgBgIIAAAAQgEAEgFACQgFADgFAAQgNAAgHgJgAVZgVQgDACgCADIgFAIIgBAJQAAALAFAHQAEAGAJAAIAIgCIAIgGIAAghIgIgFIgHgBQgFAAgDABgATPAgQgGgCgEgFQgEgEgCgGQgDgGAAgIQAAgHADgGQACgHAEgEQAEgEAGgCQAFgDAGAAQAGAAAFADQAFACAEAEQAFAEACAHQACAGAAAHQAAAIgCAGQgCAGgFAEQgEAFgFACQgFACgGAAQgGAAgFgCgATSgVQgDACgDADIgDAIIgBAJIABAKIADAHQADAEADACQAEABAEAAIAHgBQAEgCACgEQADgDABgEIABgKIgBgJQgBgFgDgDQgCgDgEgCIgHgCQgEAAgEACgARJAhQgEgCgBgDQgDgDAAgDQgCgEAAgFIAAgiIgJAAIAAgIIAKgBIABgSIAJAAIAAASIARAAIAAAJIgRAAIAAAiQAAAGADADQACADAFAAIAEAAIADgBIADAIIgGABIgGABQgFAAgEgBgAQfAeQgDgDAAgHIAAhQIALAAIAABRIABADIACABIABAAIABAAIACAIIgDABIgDAAQgGAAgDgEgAPZAcQgFgGAAgNIAAgnIALAAIAAAmQAAAJADAEQACAEAHAAQAFAAAEgCIAIgJIAAgsIALAAIAAA/IgJAAIgBgKIgBAAQgEAFgFADQgFADgHAAQgKAAgEgGgAOnAgQgGgCgEgFQgEgEgCgGQgCgGAAgIQAAgHACgGQACgHAFgEQAEgEAGgCQAFgDAHAAQAGAAAEADIAIAFIgFAHIgGgEQgDgCgEAAQgFAAgDACIgHAFQgCADgCAFQgBAEAAAFQAAAFABAFQACAEACADQADAEADACQAEABAFAAQAEAAAEgBIAGgFIAFAHQgEAEgFACQgGACgGAAQgGAAgFgCgANZAeQgGgFAAgJQAAgKAJgGQAKgEAVgDIgBgGIgCgFIgFgDQgCgCgEAAQgGAAgEACQgFACgEADIgEgIIALgFQAGgDAIAAQAMAAAFAHQAFAHAAAMIAAAnIgJAAIgBgIQgFAEgFACQgFADgGAAQgIAAgFgEgANtACIgJADQgEACgBADQgBACAAADQAAAGADACQADACAFAAIAJgBIAJgHIAAgRIgOACgAKoAeQgFgFAAgJQAAgKAJgGQAKgEAUgDIAAgGIgDgFQgBgCgDgBQgCgCgEAAQgGAAgEACQgFACgEADIgFgIIAMgFQAGgDAHAAQAMAAAGAHQAFAHAAAMIAAAnIgJAAIgBgIQgFAEgFACQgFADgGAAQgIAAgGgEgAK9ACIgJADQgEACgBADQgBACAAADQAAAGADACQADACAFAAQAEAAAEgBIAJgHIAAgRIgNACgAI+AhQgEgCgBgDQgDgDAAgDQgCgEAAgFIAAgiIgJAAIAAgIIAKgBIABgSIAJAAIAAASIARAAIAAAJIgRAAIAAAiQAAAGADADQACADAFAAIAEAAIADgBIADAIIgGABIgGABQgFAAgEgBgAHvAcQgEgGAAgNIAAgnIAKAAIAAAmQAAAJADAEQADAEAGAAQAFAAAEgCIAJgJIAAgsIAKAAIAAA/IgJAAIgBgKIAAAAIgJAIQgGADgGAAQgKAAgFgGgAG4AfQgGgCgFgEIAGgHQAEAEAFACQAEACAGAAQAGAAADgDQADgDAAgEIgBgEIgDgEIgFgCIgGgCIgGgDIgGgCIgFgGQgCgCAAgEQAAgFACgDQACgDACgCIAHgEIAJgCQAGAAAGADIAIAFIgFAGIgHgEIgIgBQgGAAgCACQgDADAAAEIABAEIADADIAFACIAFACIAHADQADAAADACIAFAGQABADAAAEIgBAIQgCADgDACQgDADgEACQgEABgGAAQgGAAgHgDgAEcAeQgFgFAAgJQAAgKAJgGQAJgEAVgDIAAgGIgDgFIgEgDQgCgCgEAAQgGAAgFACIgIAFIgFgIIAMgFQAFgDAIAAQAMAAAFAHQAGAHAAAMIAAAnIgJAAIgBgIQgFAEgFACQgGADgGAAQgHAAgGgEgAEwACIgIADQgEACgBADIgBAFQAAAGADACQADACAEAAQAFAAAEgBIAJgHIAAgRIgOACgAD7AeQgCgDAAgHIAAhQIAKAAIAABRIABADIACABIABAAIACAAIABAIIgDABIgDAAQgGAAgDgEgADFAfQgGgCgEgEIAFgHIAJAGQAEACAGAAQAGAAAEgDQADgDAAgEIgCgEIgDgEIgFgCIgFgCIgHgDIgGgCIgFgGQgBgCAAgEQAAgFABgDIAFgFIAHgEQAEgCAFAAQAGAAAFADQAFACADADIgEAGIgIgEIgHgBQgGAAgDACQgDADAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIACADIAFACIAGACIAGADQAEAAADACIAEAGQACADAAAEIgCAIQgBADgDACQgDADgEACQgFABgGAAQgGAAgHgDgABbAZQgHgIAAgQQAAgHADgGQACgGAEgEQAEgFAFgCQAEgDAGAAQAGAAAEADIAIAFIAAgkIAKAAIAABdIgJAAIAAgIIgBAAQgDAEgGACQgFADgFAAQgMAAgIgJgABrgVIgGAFIgEAIIgBAJQAAALAEAHQAFAGAIAAQAFAAAEgCIAIgGIAAghIgIgFIgIgBQgEAAgDABgAAYAeQgFgFAAgJQAAgKAJgGQAJgEAVgDIAAgGIgDgFIgEgDQgCgCgEAAQgGAAgFACIgIAFIgFgIIAMgFQAFgDAIAAQAMAAAFAHQAGAHAAAMIAAAnIgJAAIgBgIQgFAEgFACQgGADgGAAQgHAAgGgEgAAsACIgIADQgEACgBADIgBAFQAAAGADACQADACAEAAQAFAAAEgBIAJgHIAAgRIgOACgAgIAeQgCgDAAgHIAAhQIAKAAIAABRIAAADIACABIABAAIACAAIABAIIgDABIgDAAQgFAAgDgEgAiDAgQgGgCgEgFQgEgEgCgGQgDgGAAgIQAAgHADgGQACgHAEgEQAEgEAGgCQAFgDAGAAQAGAAAFADQAFACAEAEQAEAEADAHQACAGAAAHQAAAIgCAGQgDAGgEAEQgEAFgFACQgFACgGAAQgGAAgFgCgAiAgVQgDACgDADQgCADgBAFIgBAJIABAKQABAEACADQADAEADACQAEABAEAAIAHgBQAEgCACgEQADgDABgEIABgKIgBgJQgBgFgDgDQgCgDgEgCIgHgCQgEAAgEACgAjMAhIgFgFQgDgDAAgDIgBgJIAAgiIgKAAIAAgIIAKgBIABgSIAJAAIAAASIASAAIAAAJIgSAAIAAAiQAAAGADADQACADAFAAIAEAAIAEgBIACAIIgGABIgGABQgFAAgEgBgAlSAgQgFgCgEgFQgEgEgDgGQgCgGAAgIQAAgHACgGQADgGAEgFQAEgEAFgCQAFgDAFAAQAGAAAFADQAFACADADIAFAKQACAFAAAIIgBAEIgqAAQAAALAGAGQAFAFAKAAIAIgBIAHgDIAFAHIgKAEQgFACgHAAQgGAAgGgCgAlOgWQgDABgDADIgEAGIgBAJIAhAAQAAgKgEgFQgEgFgHAAIgHABgAmmAZQgHgIAAgQQAAgHADgGQACgGAEgEQAEgFAEgCQAFgDAGAAQAGAAAEADIAIAFIgBgkIALAAIAABdIgJAAIAAgIIgBAAQgEAEgFACQgFADgFAAQgMAAgIgJgAmWgVIgGAFIgEAIIgBAJQAAALAEAHQAEAGAJAAQAFAAAEgCIAHgGIAAghIgHgFIgIgBQgEAAgDABgAnsAcQgEgGAAgNIAAgnIALAAIAAAmQAAAJADAEQACAEAHAAQAEAAAFgCIAIgJIAAgsIALAAIAAA/IgJAAIgCgKIAAAAQgEAFgFADQgFADgHAAQgKAAgFgGgAoQAhQgEgCgBgDQgDgDAAgDQgCgEAAgFIAAgiIgJAAIAAgIIAKgBIABgSIAJAAIAAASIARAAIAAAJIgRAAIAAAiQAAAGACADQADADAFAAIAEAAIADgBIADAIIgGABIgGABQgGAAgDgBgApPAfQgGgCgEgEIAFgHQAEAEAFACQAEACAGAAQAGAAAEgDQADgDAAgEIgCgEIgDgEIgFgCIgFgCIgHgDIgGgCIgFgGQgBgCAAgEQAAgFABgDIAFgFIAHgEQAEgCAFAAQAGAAAFADQAFACADADIgEAGIgIgEIgHgBQgGAAgDACQgDADAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIADADIAEACIAGACIAGADQAEAAADACIAEAGQACADAAAEIgBAIQgCADgDACQgDADgEACQgFABgGAAQgGAAgHgDgArOAeQgFgFAAgJQAAgKAJgGQAJgEAVgDIgBgGIgCgFIgEgDQgDgCgDAAQgGAAgFACQgFACgDADIgFgIIALgFQAGgDAIAAQAMAAAFAHQAGAHAAAMIAAAnIgJAAIgBgIQgFAEgGACQgFADgGAAQgIAAgFgEgAq6ACIgJADQgDACgBADQgCACAAADQAAAGADACQADACAFAAIAJgBIAJgHIAAgRIgOACgAswAeQgCgDAAgHIAAhQIAKAAIAABRIABADIACABIABAAIACAAIABAIIgDABIgDAAQgGAAgDgEgAtmAgQgFgCgEgFQgEgEgDgGQgCgGAAgIQAAgHACgGQADgGAEgFQAEgEAFgCQAFgDAFAAQAGAAAFADQAFACAEADIAEAKQACAFAAAIIgBAEIgqAAQAAALAGAGQAGAFAJAAIAIgBIAIgDIAEAHIgKAEQgFACgHAAQgGAAgGgCgAthgWQgEABgCADIgFAGIgBAJIAiAAQAAgKgFgFQgEgFgHAAIgGABgAwTAgQgFgCgEgFQgEgEgDgGQgCgGAAgIQAAgHACgGQADgGAEgFQAEgEAFgCQAFgDAFAAQAGAAAFADQAFACADADIAFAKQACAFAAAIIgBAEIgrAAQABALAGAGQAFAFAKAAIAIgBIAHgDIAFAHIgKAEQgFACgHAAQgGAAgGgCgAwPgWQgDABgDADIgEAGIgCAJIAiAAQAAgKgEgFQgEgFgHAAIgHABgAxUAfQgGgCgEgEIAFgHQAEAEAFACQAEACAGAAQAGAAAEgDQADgDAAgEIgCgEIgDgEIgFgCIgFgCIgHgDIgGgCIgFgGQgBgCAAgEQAAgFABgDIAFgFIAHgEQAEgCAFAAQAGAAAFADQAFACADADIgEAGIgIgEIgHgBQgGAAgDACQgDADAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIADADIAEACIAGACIAGADQAEAAADACIAEAGQACADAAAEIgCAIQgBADgDACQgDADgEACQgFABgGAAQgGAAgHgDgAzlAgQgGgCgEgFQgEgEgCgGQgDgGAAgIQAAgHADgGQACgGAEgFQAEgEAFgCQAFgDAGAAQAGAAAEADQAFACAEADIAFAKQABAFAAAIIAAAEIgrAAQAAALAGAGQAGAFAJAAIAJgBIAHgDIAEAHIgKAEQgFACgGAAQgGAAgGgCgAzhgWQgEABgCADIgEAGIgCAJIAiAAQAAgKgEgFQgFgFgHAAIgGABgA0mAfQgGgCgFgEIAFgHIAJAGQAEACAGAAQAGAAAEgDQADgDAAgEIgBgEIgEgEIgFgCIgFgCIgGgDIgGgCIgFgGQgCgCAAgEQAAgFACgDIAEgFQADgDAEgBQAEgCAFAAQAGAAAFADQAFACAEADIgFAGIgHgEIgIgBQgGAAgCACQgDADAAAEIABAEIADADIAFACIAFACQADACAEABQADAAADACIAEAGQACADAAAEIgBAIQgCADgDACQgDADgEACQgFABgFAAQgHAAgGgDgA2dAgQgEgCgFgEIAAAAIgBAHIgJAAIAAhdIALAAIAAAlIAJgGQAFgDAGAAQAGAAAEADQAFACAEAEQADAEABAGQACAGAAAHQAAAIgCAGQgDAHgDAEQgEAFgFACQgFACgGAAQgEAAgFgCgA2lgOIAAAgIAIAGIAHABIAIgBQADgCADgEIAEgHIABgLIgBgJQgBgEgCgDIgFgFIgIgBQgHAAgKAIgA51AgQgEgCgFgEIAAAAIgBAHIgJAAIAAhdIALAAIAAAlIAJgGQAFgDAGAAQAGAAAEADQAFACAEAEQADAEABAGQACAGAAAHQAAAIgCAGQgCAHgEAEQgEAFgFACQgFACgGAAQgEAAgFgCgA59gOIAAAgIAIAGIAIABIAHgBQADgCADgEIAEgHIABgLIgBgJQgBgEgCgDQgCgDgDgCIgIgBQgHAAgKAIgA7oAZQgHgIAAgQQAAgHACgGQADgGADgEQAEgFAFgCQAFgDAGAAQAFAAAEADIAJAFIgBgkIALAAIAABdIgJAAIgBgIIAAAAQgEAEgFACQgFADgFAAQgNAAgHgJgA7ZgVIgGAFIgEAIIgBAJQAAALAFAHQAEAGAJAAQAEAAAEgCIAIgGIAAghIgIgFIgHgBQgFAAgDABgA8eAgQgFgCgEgFQgEgEgDgGQgCgGAAgIQAAgHACgGQADgGAEgFQAEgEAFgCQAFgDAGAAQAFAAAFADQAFACAEADQADAFABAFQACAFAAAIIAAAEIgrAAQAAALAGAGQAGAFAJAAIAIgBIAIgDIAEAHIgKAEQgFACgHAAQgGAAgGgCgA8ZgWQgEABgCADIgFAGIgBAJIAiAAQAAgKgFgFQgEgFgHAAIgGABgA9MAhQgEgCgBgDQgDgDAAgDQgCgEAAgFIAAgiIgJAAIAAgIIAKgBIABgSIAJAAIAAASIARAAIAAAJIgRAAIAAAiQAAAGADADQACADAFAAIAEAAIADgBIADAIIgGABIgGABQgFAAgEgBgA+YAeQgGgFAAgJQAAgKAJgGQAKgEAVgDIgBgGIgCgFQgBgCgDgBQgDgCgDAAQgGAAgFACIgIAFIgFgIIALgFQAGgDAIAAQAMAAAFAHQAFAHAAAMIAAAnIgIAAIgCgIQgEAEgGACQgFADgGAAQgIAAgFgEgA+EACIgJADQgDACgCADIgBAFQAAAGADACQADACAFAAQAFAAAEgBIAJgHIAAgRIgOACgA/OAgQgFgCgEgFQgEgEgDgGQgCgGAAgIQAAgHACgGQADgGAEgFQAEgEAFgCQAFgDAFAAQAGAAAFADQAFACADADIAFAKQACAFAAAIIgBAEIgqAAQAAALAGAGQAFAFAKAAIAIgBIAHgDIAFAHIgKAEQgFACgHAAQgGAAgGgCgA/KgWQgDABgCADIgFAGIgBAJIAhAAQAAgKgEgFQgEgFgHAAIgHABgEgg3AAgQgFgCgFgFQgDgEgCgGQgDgGAAgIQAAgHADgGQACgHAFgEQAEgEAFgCQAGgDAGAAQAGAAAFADIAIAFIgGAHIgGgEQgDgCgEAAQgEAAgEACIgGAFQgDADgBAFQgCAEAAAFQAAAFACAFQABAEADADQACAEAEACQAEABAEAAQAFAAADgBIAHgFIAFAHQgEAEgGACQgFACgGAAQgGAAgGgCgAf8AhIAAg/IAJAAIABALQAEgGAFgDQAEgEAGAAQADAAADACIgCAJIgCgBIgEAAQgEAAgEADQgFAEgDAIIAAAogAc3AhIAAgmQAAgKgDgDQgDgEgGAAQgFAAgEACQgEACgFAGIAAAtIgKAAIAAg/IAJAAIABAJIAJgHQAGgEAGAAQAKAAAFAHQAFAGAAAMIAAAogAaSAhIAAgmQAAgKgDgDQgDgEgGAAQgFAAgDACQgFACgEAGIAAAtIgLAAIAAg/IAJAAIABAJIAKgHQAFgEAGAAQALAAAEAHQAFAGAAAMIAAAogAYIAhIAAg/IAKAAIAAA/gAUKAhIAAg2IgJAAIAAgIIAJgBIAAgKQAAgKAEgGQAFgFAJAAIAGABIAFABIgCAIQgEgCgEAAQgJAAAAANIAAAKIAOAAIAAAJIgOAAIAAA2gAMzAhIAAg2IgJAAIAAgIIAJgBIAAgKQAAgKAEgGQAEgFAKAAIAGABIAFABIgDAIQgDgCgEAAQgJAAAAANIAAAKIAOAAIAAAJIgOAAIAAA2gALpAhIAAg/IAJAAIABALQAEgGAFgDQAEgEAGAAQADAAADACIgCAJIgCgBIgEAAQgEAAgEADQgEAEgEAIIAAAogAKHAhIAAgmQAAgKgDgDQgDgEgGAAQgFAAgEACQgEACgFAGIAAAtIgKAAIAAg/IAJAAIABAJIAJgHQAGgEAGAAQAKAAAFAHQAFAGAAAMIAAAogAFrAhIgXg/IALAAIAMAjIADAKIADAJIAAAAIADgJIADgKIAMgjIALAAIgXA/gACiAhIAAg/IAKAAIAAA/gAhIAhIAAg2IgJAAIAAgIIAJgBIAAgKQAAgKAEgGQAFgFAJAAIAGABIAFABIgDAIQgDgCgEAAQgJAAAAANIAAAKIAOAAIAAAJIgOAAIAAA2gAj2AhIAAgmQAAgKgDgDQgDgEgHAAQgEAAgEACQgEACgFAGIAAAtIgLAAIAAg/IAJAAIACAJIAJgHQAFgEAHAAQAKAAAFAHQAFAGAAAMIAAAogAroAhIgTgfIgLAOIAAARIgLAAIAAhdIALAAIAAA+IAAAAIAbggIAMAAIgWAaIAZAlgAuSAhIAAgmQAAgKgDgDQgDgEgGAAQgHAAgJAKIAAAtIgLAAIAAgmQAAgKgDgDQgDgEgGAAQgHAAgJAKIAAAtIgLAAIAAg/IAJAAIACAJIAIgHQAGgEAFAAQAIAAAEAEQAEADACAGQAFgGAFgDQAFgEAGAAQAKAAAFAHQAEAGAAAMIAAAogAyJAhIgTgfIgMAOIAAARIgKAAIAAhdIAKAAIAAA+IABAAIAbggIAMAAIgWAaIAZAlgA3uAhIAAgGIAhgwIgeAAIAAgJIAsAAIAAAGIghAwIAiAAIAAAJgEggJAAhIAAg/IAJAAIABALQAEgGAFgDQAEgEAGAAQAEAAACACIgCAJIgCgBIgEAAQgEAAgEADQgEAEgEAIIAAAogA0cgpIgNgTIAIAAIAJAMIABAAIAIgMIAIAAIgMATgAYIgtQgCgCAAgDQAAgDACgCQACgCADAAQAEAAABACQADACAAADQAAADgDACQgBACgEAAQgDAAgCgCgACigtQgCgCAAgDQAAgDACgCQACgCADAAQAEAAABACQADACAAADQAAADgDACQgBACgEAAQgDAAgCgCg");
	this.shape.setTransform(362.5,48.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(150.4,42.4,424.4,12.4), null);


(lib.infbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23549B").s().p("AgJAJIAAgRIASAAIAAARg");
	this.shape.setTransform(13.9,8.9,1.65,1.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23549B").s().p("AgPAoIAAhPIAfAAIAABPg");
	this.shape_1.setTransform(13.9,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23549B").s().p("AhVBXQglgjAAgzQAAgzAlgkQAjgkAyAAQAzAAAkAkQAkAkAAAzQAAAzgkAjQgkAkgzAAQgyAAgjgkgAhGhFQgdAdAAApQAAApAdAdQAeAdAoAAQApAAAdgdQAdgdAAgpQAAgpgdgdQgdgdgpAAQgoAAgeAdg");
	this.shape_2.setTransform(13.9,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifChIAAlBIE/AAIAAFBg");
	this.shape_3.setTransform(13.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.infbtn, new cjs.Rectangle(-2.5,-2.5,32.1,32.1), null);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23549B").s().p("AhFBHQgegdAAgpQAAgpAegeQAdgdAoAAQAqAAAdAdQAdAeAAApQAAApgdAdQgdAdgqABQgogBgdgdgAg1g1QgYAWAAAgQAAAgAYAXQAWAXAfAAQAhAAAWgXQAXgXAAggQAAgggXgWQgWgYghAAQgfAAgWAYgAAAATIgZAZIgSgRIAbgaIgbgaIASgSIAZAbIAbgbIARASIgaAaIAaAaIgRARg");
	this.shape.setTransform(12,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjBlIAAjJIDHAAIAADJg");
	this.shape_1.setTransform(12,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.close, new cjs.Rectangle(2,1.4,20.1,20.2), null);


// stage content:
(lib.aitpfinfbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
				this.info.cursor = "pointer";
				this.close.cursor = "pointer";
				this.zculink.cursor = "pointer";
		
				this.text.visible = false;
				this.zculink.visible = false;
				this.close.visible = false;
		
				this.info.addEventListener("click", show.bind(this));
				function show()
				{
					this.info.visible = false;
					this.text.visible = true;
					this.zculink.visible = true;
					this.close.visible = true;
					can3show();
				}
		
				this.close.addEventListener("click", hide.bind(this));
				function hide()
				{
					this.info.visible = true;
					this.text.visible = false;
					this.zculink.visible = false;
					this.close.visible = false;
					can3hide();
				}
		
		
		
		zculink = this.zculink;
		this.zculink.addEventListener("click", urlZ, false);
		
		function urlZ(){
			window.open("http://zcu.cz/en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// close
	this.close = new lib.close();
	this.close.parent = this;
	this.close.setTransform(572.4,47.4,0.9,0.9,0,0,0,12,11.5);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(1));

	// info copy 2
	this.info = new lib.infbtn();
	this.info.parent = this;
	this.info.setTransform(561.4,36.3,0.795,0.795);

	this.timeline.addTween(cjs.Tween.get(this.info).wait(1));

	// text copy 2
	this.zculink = new lib.zcu();
	this.zculink.parent = this;
	this.zculink.setTransform(617.7,105.2,1.1,1.1,0,0,0,99,67);

	this.text = new lib.text();
	this.text.parent = this;
	this.text.setTransform(216.9,35.7,0.93,0.93,0,0,0,296.4,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.zculink}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(381,53,503.9,44.4);
// library properties:
lib.properties = {
	width: 600,
	height: 75,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(infbtn = infbtn||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var infbtn, images, createjs, ss, AdobeAn;