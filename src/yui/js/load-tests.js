/* This file is auto-generated by src/loader/scripts/meta_join.py */
var add = Y.Features.add;
// io-nodejs
add('load', '0', {
    "name": "io-nodejs", 
    "trigger": "io-base", 
    "ua": "nodejs"
});
// graphics-canvas-default
add('load', '1', {
    "name": "graphics-canvas-default", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
        useCanvas = Y.config.defaultGraphicEngine && Y.config.defaultGraphicEngine == "canvas",
		canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
        svg = (DOCUMENT && DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
    return (!svg || useCanvas) && (canvas && canvas.getContext && canvas.getContext("2d"));
}, 
    "trigger": "graphics"
});
// autocomplete-list-keys
add('load', '2', {
    "name": "autocomplete-list-keys", 
    "test": function (Y) {
    // Only add keyboard support to autocomplete-list if this doesn't appear to
    // be an iOS or Android-based mobile device.
    //
    // There's currently no feasible way to actually detect whether a device has
    // a hardware keyboard, so this sniff will have to do. It can easily be
    // overridden by manually loading the autocomplete-list-keys module.
    //
    // Worth noting: even though iOS supports bluetooth keyboards, Mobile Safari
    // doesn't fire the keyboard events used by AutoCompleteList, so there's
    // no point loading the -keys module even when a bluetooth keyboard may be
    // available.
    return !(Y.UA.ios || Y.UA.android);
}, 
    "trigger": "autocomplete-list"
});
// graphics-svg
add('load', '3', {
    "name": "graphics-svg", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
        useSVG = !Y.config.defaultGraphicEngine || Y.config.defaultGraphicEngine != "canvas",
		canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
        svg = (DOCUMENT && DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
    
    return svg && (useSVG || !canvas);
}, 
    "trigger": "graphics"
});
// editor-para-ie
add('load', '4', {
    "name": "editor-para-ie", 
    "trigger": "editor-para", 
    "ua": "ie", 
    "when": "instead"
});
// graphics-vml-default
add('load', '5', {
    "name": "graphics-vml-default", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
		canvas = DOCUMENT && DOCUMENT.createElement("canvas");
    return (DOCUMENT && !DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!canvas || !canvas.getContext || !canvas.getContext("2d")));
}, 
    "trigger": "graphics"
});
// graphics-svg-default
add('load', '6', {
    "name": "graphics-svg-default", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
        useSVG = !Y.config.defaultGraphicEngine || Y.config.defaultGraphicEngine != "canvas",
		canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
        svg = (DOCUMENT && DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
    
    return svg && (useSVG || !canvas);
}, 
    "trigger": "graphics"
});
// history-hash-ie
add('load', '7', {
    "name": "history-hash-ie", 
    "test": function (Y) {
    var docMode = Y.config.doc && Y.config.doc.documentMode;

    return Y.UA.ie && (!('onhashchange' in Y.config.win) ||
            !docMode || docMode < 8);
}, 
    "trigger": "history-hash"
});
// transition-timer
add('load', '8', {
    "name": "transition-timer", 
    "test": function (Y) {
    var DOCUMENT = Y.config.doc,
        node = (DOCUMENT) ? DOCUMENT.documentElement: null,
        ret = true;

    if (node && node.style) {
        ret = !('MozTransition' in node.style || 'WebkitTransition' in node.style);
    } 

    return ret;
}, 
    "trigger": "transition"
});
// dom-style-ie
add('load', '9', {
    "name": "dom-style-ie", 
    "test": function (Y) {

    var testFeature = Y.Features.test,
        addFeature = Y.Features.add,
        WINDOW = Y.config.win,
        DOCUMENT = Y.config.doc,
        DOCUMENT_ELEMENT = 'documentElement',
        ret = false;

    addFeature('style', 'computedStyle', {
        test: function() {
            return WINDOW && 'getComputedStyle' in WINDOW;
        }
    });

    addFeature('style', 'opacity', {
        test: function() {
            return DOCUMENT && 'opacity' in DOCUMENT[DOCUMENT_ELEMENT].style;
        }
    });

    ret =  (!testFeature('style', 'opacity') &&
            !testFeature('style', 'computedStyle'));

    return ret;
}, 
    "trigger": "dom-style"
});
// selector-css2
add('load', '10', {
    "name": "selector-css2", 
    "test": function (Y) {
    var DOCUMENT = Y.config.doc,
        ret = DOCUMENT && !('querySelectorAll' in DOCUMENT);

    return ret;
}, 
    "trigger": "selector"
});
// widget-base-ie
add('load', '11', {
    "name": "widget-base-ie", 
    "trigger": "widget-base", 
    "ua": "ie"
});
// event-base-ie
add('load', '12', {
    "name": "event-base-ie", 
    "test": function(Y) {
    var imp = Y.config.doc && Y.config.doc.implementation;
    return (imp && (!imp.hasFeature('Events', '2.0')));
}, 
    "trigger": "node-base"
});
// dd-gestures
add('load', '13', {
    "name": "dd-gestures", 
    "test": function(Y) {
    return ((Y.config.win && ("ontouchstart" in Y.config.win)) && !(Y.UA.chrome && Y.UA.chrome < 6));
}, 
    "trigger": "dd-drag"
});
// scrollview-base-ie
add('load', '14', {
    "name": "scrollview-base-ie", 
    "trigger": "scrollview-base", 
    "ua": "ie"
});
// app-transitions-native
add('load', '15', {
    "name": "app-transitions-native", 
    "test": function (Y) {
    var doc  = Y.config.doc,
        node = doc ? doc.documentElement : null;

    if (node && node.style) {
        return ('MozTransition' in node.style || 'WebkitTransition' in node.style);
    }

    return false;
}, 
    "trigger": "app-transitions"
});
// graphics-canvas
add('load', '16', {
    "name": "graphics-canvas", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
        useCanvas = Y.config.defaultGraphicEngine && Y.config.defaultGraphicEngine == "canvas",
		canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
        svg = (DOCUMENT && DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
    return (!svg || useCanvas) && (canvas && canvas.getContext && canvas.getContext("2d"));
}, 
    "trigger": "graphics"
});
// graphics-vml
add('load', '17', {
    "name": "graphics-vml", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
		canvas = DOCUMENT && DOCUMENT.createElement("canvas");
    return (DOCUMENT && !DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!canvas || !canvas.getContext || !canvas.getContext("2d")));
}, 
    "trigger": "graphics"
});