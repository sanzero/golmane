/*! vue-onsenui v2.0.0-alpha.1 - Tue Mar 14 2017 16:22:17 GMT+0900 (JST) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("onsenui"));
	else if(typeof define === 'function' && define.amd)
		define("VueOnsen", ["onsenui"], factory);
	else if(typeof exports === 'object')
		exports["VueOnsen"] = factory(require("onsenui"));
	else
		root["VueOnsen"] = factory(root["ons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_55__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _components = __webpack_require__(36);
	
	var components = _interopRequireWildcard(_components);
	
	var _directives = __webpack_require__(124);
	
	var directives = _interopRequireWildcard(_directives);
	
	var _util = __webpack_require__(53);
	
	var _onsenui = __webpack_require__(55);
	
	var _onsenui2 = _interopRequireDefault(_onsenui);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var register = function register(Vue, type, items) {
	  (0, _keys2.default)(items).forEach(function (key) {
	    var value = items[key];
	    key = (0, _util.hyphenate)(key);
	    Vue[type](key, value);
	  });
	};
	
	var install = function install(Vue) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  register(Vue, 'component', components);
	
	  register(Vue, 'directive', directives);
	
	  if (!Vue.config.silent) {
	    Vue.mixin({
	      beforeCreate: function beforeCreate() {
	        if (this.$options.template) {
	          var match = this.$options.template.match(/<(ons-[\w-]+)/im);
	
	          if (match) {
	            var location = this.$options._componentTag ? ' in component <' + this.$options._componentTag + '>' : '';
	            _onsenui2.default._util.warn('[vue-onsenui] Vue templates must not contain <ons-*> elements directly.\n' + ('<' + match[1] + '> element found near index ' + match.index + location + '. Please use <v-' + match[1] + '> instead:\n              ' + this.$options.template));
	          }
	        }
	      }
	    });
	  }
	
	  Vue.prototype.$ons = (0, _keys2.default)(_onsenui2.default).filter(function (k) {
	    return [/^enable/, /^disable/, /^set/, /animit/, /Element$/, /fastClick/, /GestureDetector/, /notification/, /orientation/, /platform/, /ready/].some(function (t) {
	      return k.match(t);
	    });
	  }).reduce(function (r, k) {
	    r[k] = _onsenui2.default[k];
	    return r;
	  }, { _ons: _onsenui2.default });
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use({ install: install });
	}
	
	exports.default = install;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);
	
	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VOnsModal = exports.VOnsDialog = exports.VOnsPage = exports.VOnsFab = exports.VOnsSplitter = exports.VOnsPullHook = exports.VOnsSplitterContent = exports.VOnsSplitterMask = exports.VOnsCarouselItem = exports.VOnsProgressCircular = exports.VOnsProgressBar = exports.VOnsCol = exports.VOnsRow = exports.VOnsRipple = exports.VOnsListHeader = exports.VOnsListItem = exports.VOnsList = exports.VOnsSpeedDialItem = exports.VOnsBottomToolbar = exports.VOnsSelect = exports.VOnsRange = exports.VOnsInput = exports.VOnsSwitch = exports.VOnsIcon = exports.VOnsButton = exports.VOnsToolbarButton = exports.VOnsToolbar = exports.VOnsLazyRepeat = exports.VOnsSplitterSide = exports.VOnsNavigator = exports.VOnsBackButton = exports.VOnsTabbar = exports.VOnsTab = exports.VOnsCarousel = exports.VOnsSpeedDial = exports.VOnsAlertDialog = exports.VOnsPopover = undefined;
	
	var _VOnsPopover = __webpack_require__(37);
	
	Object.defineProperty(exports, 'VOnsPopover', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsPopover).default;
	  }
	});
	
	var _VOnsAlertDialog = __webpack_require__(57);
	
	Object.defineProperty(exports, 'VOnsAlertDialog', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsAlertDialog).default;
	  }
	});
	
	var _VOnsSpeedDial = __webpack_require__(60);
	
	Object.defineProperty(exports, 'VOnsSpeedDial', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsSpeedDial).default;
	  }
	});
	
	var _VOnsCarousel = __webpack_require__(63);
	
	Object.defineProperty(exports, 'VOnsCarousel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsCarousel).default;
	  }
	});
	
	var _VOnsTab = __webpack_require__(66);
	
	Object.defineProperty(exports, 'VOnsTab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTab).default;
	  }
	});
	
	var _VOnsTabbar = __webpack_require__(69);
	
	Object.defineProperty(exports, 'VOnsTabbar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTabbar).default;
	  }
	});
	
	var _VOnsBackButton = __webpack_require__(76);
	
	Object.defineProperty(exports, 'VOnsBackButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsBackButton).default;
	  }
	});
	
	var _VOnsNavigator = __webpack_require__(79);
	
	Object.defineProperty(exports, 'VOnsNavigator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsNavigator).default;
	  }
	});
	
	var _VOnsSplitterSide = __webpack_require__(116);
	
	Object.defineProperty(exports, 'VOnsSplitterSide', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsSplitterSide).default;
	  }
	});
	
	var _VOnsLazyRepeat = __webpack_require__(119);
	
	Object.defineProperty(exports, 'VOnsLazyRepeat', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsLazyRepeat).default;
	  }
	});
	
	var _VGeneric = __webpack_require__(121);
	
	var _VGeneric2 = _interopRequireDefault(_VGeneric);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var extend = function extend(component) {
	  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  return { name: 'v-ons-' + component, mixins: mixins, extends: _VGeneric2.default };
	};
	
	var VOnsToolbar = exports.VOnsToolbar = extend('toolbar');
	var VOnsToolbarButton = exports.VOnsToolbarButton = extend('toolbar-button');
	var VOnsButton = exports.VOnsButton = extend('button');
	var VOnsIcon = exports.VOnsIcon = extend('icon');
	var VOnsSwitch = exports.VOnsSwitch = extend('switch');
	var VOnsInput = exports.VOnsInput = extend('input');
	var VOnsRange = exports.VOnsRange = extend('range');
	var VOnsSelect = exports.VOnsSelect = extend('select');
	var VOnsBottomToolbar = exports.VOnsBottomToolbar = extend('bottom-toolbar');
	var VOnsSpeedDialItem = exports.VOnsSpeedDialItem = extend('speed-dial-item');
	var VOnsList = exports.VOnsList = extend('list');
	var VOnsListItem = exports.VOnsListItem = extend('list-item');
	var VOnsListHeader = exports.VOnsListHeader = extend('list-header');
	var VOnsRipple = exports.VOnsRipple = extend('ripple');
	var VOnsRow = exports.VOnsRow = extend('row');
	var VOnsCol = exports.VOnsCol = extend('col');
	var VOnsProgressBar = exports.VOnsProgressBar = extend('progress-bar');
	var VOnsProgressCircular = exports.VOnsProgressCircular = extend('progress-circular');
	var VOnsCarouselItem = exports.VOnsCarouselItem = extend('carousel-item');
	var VOnsSplitterMask = exports.VOnsSplitterMask = extend('splitter-mask');
	var VOnsSplitterContent = exports.VOnsSplitterContent = extend('splitter-content', [_mixins.destroyable]);
	var VOnsPullHook = exports.VOnsPullHook = extend('pull-hook', [(0, _mixins.deriveHandler)('onAction')]);
	var VOnsSplitter = exports.VOnsSplitter = extend('splitter', [_mixins.selfProvider, _mixins.deriveDBB]);
	var VOnsFab = exports.VOnsFab = extend('fab', [_mixins.hidable]);
	var VOnsPage = exports.VOnsPage = extend('page', [_mixins.destroyable, _mixins.deriveDBB, (0, _mixins.deriveHandler)('onInfiniteScroll')]);
	var VOnsDialog = exports.VOnsDialog = extend('dialog', [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.deriveDBB]);
	var VOnsModal = exports.VOnsModal = extend('modal', [_mixins.hidable, _mixins.hasOptions, _mixins.deriveDBB]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(39),
	  /* template */
	  __webpack_require__(56),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.modifier, _mixins.deriveEvents, _mixins.deriveDBB],
	
	  props: {
	    target: {
	      validator: function validator(value) {
	        return value._isVue || typeof value === 'string' || value instanceof Event || value instanceof HTMLElement;
	      }
	    }
	  },
	
	  computed: {
	    normalizedTarget: function normalizedTarget() {
	      if (this.target && this.target._isVue) {
	        return this.target.$el;
	      }
	      return this.target;
	    },
	    normalizedOptions: function normalizedOptions() {
	      if (this.target) {
	        return (0, _extends3.default)({
	          target: this.normalizedTarget
	        }, this.options);
	      }
	      return this.options;
	    }
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(41);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(44)});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(6)
	  , gOPS     = __webpack_require__(45)
	  , pIE      = __webpack_require__(46)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 46 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _derive = __webpack_require__(48);
	
	Object.defineProperty(exports, 'deriveDBB', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveDBB;
	  }
	});
	Object.defineProperty(exports, 'deriveHandler', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveHandler;
	  }
	});
	Object.defineProperty(exports, 'deriveEvents', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveEvents;
	  }
	});
	
	var _common = __webpack_require__(54);
	
	Object.defineProperty(exports, 'hidable', {
	  enumerable: true,
	  get: function get() {
	    return _common.hidable;
	  }
	});
	Object.defineProperty(exports, 'destroyable', {
	  enumerable: true,
	  get: function get() {
	    return _common.destroyable;
	  }
	});
	Object.defineProperty(exports, 'hasOptions', {
	  enumerable: true,
	  get: function get() {
	    return _common.hasOptions;
	  }
	});
	Object.defineProperty(exports, 'modifier', {
	  enumerable: true,
	  get: function get() {
	    return _common.modifier;
	  }
	});
	Object.defineProperty(exports, 'selfProvider', {
	  enumerable: true,
	  get: function get() {
	    return _common.selfProvider;
	  }
	});
	Object.defineProperty(exports, 'dialogCancel', {
	  enumerable: true,
	  get: function get() {
	    return _common.dialogCancel;
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deriveEvents = exports.deriveHandler = exports.deriveDBB = undefined;
	
	var _defineProperty2 = __webpack_require__(49);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _util = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _setupDBB = function _setupDBB(component) {
	  var dbb = 'onDeviceBackButton';
	
	  var handler = component[dbb] || component.$el[dbb] && component.$el[dbb]._callback || function (e) {
	    return e.callParentHandler();
	  };
	
	  component.$el[dbb] = function (event) {
	    var runDefault = true;
	
	    component.$emit((0, _util.handlerToProp)(dbb), (0, _extends3.default)({}, event, {
	      preventDefault: function preventDefault() {
	        return runDefault = false;
	      }
	    }));
	
	    runDefault && handler(event);
	  };
	
	  component._isDBBSetup = true;
	};
	
	var deriveDBB = {
	  mounted: function mounted() {
	    _setupDBB(this);
	  },
	  activated: function activated() {
	    this._isDBBSetup === false && _setupDBB(this);
	  },
	  deactivated: function deactivated() {
	    this._isDBBSetup === true && (this._isDBBSetup = false);
	  }
	};
	
	var deriveHandler = function deriveHandler(handlerName) {
	  var propName = (0, _util.handlerToProp)(handlerName);
	
	  return {
	    props: (0, _defineProperty3.default)({}, propName, {
	      type: Function,
	      default: null
	    }),
	
	    watch: (0, _defineProperty3.default)({}, propName, function () {
	      this.$el[handlerName] = this[propName];
	    }),
	
	    mounted: function mounted() {
	      this[propName] && (this.$el[handlerName] = this[propName]);
	    }
	  };
	};
	
	var deriveEvents = {
	  mounted: function mounted() {
	    var _this = this;
	
	    this._handlers = {};
	    this._boundEvents = this.$el.constructor.__proto__.events || [];
	
	    this._boundEvents.forEach(function (key) {
	      _this._handlers[(0, _util.eventToHandler)(key)] = function (event) {
	        if (event.target === _this.$el || !/^ons-/i.test(event.target.tagName)) {
	          _this.$emit(key, event);
	        }
	      };
	      _this.$el.addEventListener(key, _this._handlers[(0, _util.eventToHandler)(key)]);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this2 = this;
	
	    this._boundEvents.forEach(function (key) {
	      _this2.$el.removeEventListener(key, _this2._handlers[(0, _util.eventToHandler)(key)]);
	    });
	    this._handlers = this._boundEvents = null;
	  }
	};
	
	exports.deriveDBB = deriveDBB;
	exports.deriveHandler = deriveHandler;
	exports.deriveEvents = deriveEvents;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(50);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var $Object = __webpack_require__(23).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(22);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(31), 'Object', {defineProperty: __webpack_require__(27).f});

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var hyphenate = exports.hyphenate = function hyphenate(string) {
	  return string.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
	};
	
	var camelize = exports.camelize = function camelize(string) {
	  return string.toLowerCase().replace(/-([a-z])/g, function (m, l) {
	    return l.toUpperCase();
	  });
	};
	
	var eventToHandler = exports.eventToHandler = function eventToHandler(name) {
	  return '_on' + name.charAt(0).toUpperCase() + name.slice(1);
	};
	
	var handlerToProp = exports.handlerToProp = function handlerToProp(name) {
	  return name.slice(2).charAt(0).toLowerCase() + name.slice(2).slice(1);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dialogCancel = exports.selfProvider = exports.modifier = exports.hasOptions = exports.destroyable = exports.hidable = undefined;
	
	var _defineProperty2 = __webpack_require__(49);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _onsenui = __webpack_require__(55);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _toggleVisibility = function _toggleVisibility() {
	  if (this.visible !== this.$el.visible) {
	    this.$el[this.visible ? 'show' : 'hide'].call(this.$el, this.normalizedOptions || this.options);
	  }
	};
	
	var hidable = {
	  props: {
	    visible: {
	      type: Boolean,
	      default: undefined }
	  },
	
	  watch: {
	    visible: function visible() {
	      _toggleVisibility.call(this);
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$nextTick(function () {
	      if (typeof _this.visible === 'boolean') {
	        _toggleVisibility.call(_this);
	      }
	    });
	  }
	};
	
	var destroyable = {
	  beforeDestroy: function beforeDestroy() {
	    if (this.$el._destroy instanceof Function) {
	      this.$el._destroy();
	    }
	  }
	};
	
	var hasOptions = {
	  props: {
	    options: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  }
	};
	
	var modifier = {
	  props: {
	    modifier: {
	      type: String,
	      default: ''
	    }
	  },
	
	  methods: {
	    _updateModifier: function _updateModifier() {
	      var _this2 = this;
	
	      if (this.hasOwnProperty('_previousModifier')) {
	        this._previousModifier.split(/\s+/).forEach(function (modifier) {
	          return _onsenui._util.removeModifier(_this2.$el, modifier, { autoStyle: true });
	        });
	      }
	      this.modifier.trim().split(/\s+/).forEach(function (modifier) {
	        return _onsenui._util.addModifier(_this2.$el, modifier, { autoStyle: true });
	      });
	      this._previousModifier = this.modifier;
	    }
	  },
	
	  watch: {
	    modifier: function modifier() {
	      this._updateModifier();
	    }
	  },
	
	  mounted: function mounted() {
	    this.modifier && this._updateModifier();
	  }
	};
	
	var selfProvider = {
	  provide: function provide() {
	    return (0, _defineProperty3.default)({}, this.$options._componentTag.slice(6), this);
	  }
	};
	
	var dialogCancel = {
	  mounted: function mounted() {
	    var _this3 = this;
	
	    this.$on('dialog-cancel', function () {
	      return _this3.$emit('update', false);
	    });
	  }
	};
	
	exports.hidable = hidable;
	exports.destroyable = destroyable;
	exports.hasOptions = hasOptions;
	exports.modifier = modifier;
	exports.selfProvider = selfProvider;
	exports.dialogCancel = dialogCancel;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-popover', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(59),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.modifier, _mixins.deriveEvents, _mixins.deriveDBB],
	
	  props: {
	    title: {
	      type: String
	    },
	    footer: {
	      type: Object,
	      validator: function validator(value) {
	        return (0, _keys2.default)(value).every(function (key) {
	          return value[key] instanceof Function;
	        });
	      }
	    }
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-alert-dialog', [_c('div', {
	    staticClass: "alert-dialog-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-content"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-footer"
	  }, [_vm._t("footer", _vm._l((_vm.footer), function(handler, key) {
	    return _c('button', {
	      key: key,
	      staticClass: "alert-dialog-button",
	      on: {
	        "click": handler
	      }
	    }, [_vm._v(_vm._s(key))])
	  }))], 2)])
	},staticRenderFns: []}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(62),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.deriveEvents, _mixins.hidable],
	
	  props: {
	    open: {
	      type: Boolean,
	      default: undefined
	    }
	  },
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault) {
	        this.$el.toggleItems();
	      }
	    },
	    _shouldUpdate: function _shouldUpdate() {
	      return this.open !== undefined && this.open !== this.$el.isOpen();
	    },
	    _updateToggle: function _updateToggle() {
	      this._shouldUpdate() && this.$el[this.open ? 'showItems' : 'hideItems'].call(this.$el);
	    }
	  },
	
	  watch: {
	    open: function open() {
	      this._updateToggle();
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$on(['open', 'close'], function () {
	      return _this._shouldUpdate() && _this.$emit('update', _this.$el.isOpen());
	    });
	
	    this._updateToggle();
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-speed-dial', {
	    domProps: {
	      "onClick": _vm.action
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(64),
	  /* template */
	  __webpack_require__(65),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.hasOptions, _mixins.deriveEvents],
	
	  props: {
	    index: {
	      type: Number
	    }
	  },
	
	  watch: {
	    index: function index() {
	      if (this.index !== this.$el.getActiveIndex()) {
	        this.$el.setActiveIndex(this.index, this.options);
	      }
	    }
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-carousel', {
	    attrs: {
	      "initial-index": _vm.index
	    },
	    on: {
	      "postchange": function($event) {
	        _vm.$emit('update', $event.activeIndex)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(67),
	  /* template */
	  __webpack_require__(68),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  inject: ['tabbar'],
	
	  props: {
	    page: {},
	    active: {
	      type: Boolean
	    }
	  },
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault) {
	        this.tabbar.$el.setActiveTab(this.$el._findTabIndex(), this.tabbar.options);
	      }
	    }
	  },
	
	  watch: {
	    active: function active() {
	      this.active ? this.$el.setActive() : this.$el.setInactive();
	    }
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tab', {
	    attrs: {
	      "active": _vm.active
	    },
	    domProps: {
	      "onClick": _vm.action
	    }
	  })
	},staticRenderFns: []}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(70),
	  /* template */
	  __webpack_require__(75),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getOwnPropertyDescriptor = __webpack_require__(71);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.deriveEvents, _mixins.hasOptions, _mixins.hidable, _mixins.selfProvider],
	
	  props: {
	    index: {
	      type: Number
	    },
	    tabs: {
	      type: Array,
	      validator: function validator(value) {
	        return value.every(function (tab) {
	          return ['icon', 'label', 'page'].some(function (prop) {
	            return !!(0, _getOwnPropertyDescriptor2.default)(tab, prop);
	          });
	        });
	      }
	    }
	  },
	
	  watch: {
	    index: function index() {
	      if (this.index !== this.$el.getActiveTabIndex()) {
	        this.$el.setActiveTab(this.index, this.options);
	      }
	    }
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	var $Object = __webpack_require__(23).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(9)
	  , $getOwnPropertyDescriptor = __webpack_require__(74).f;
	
	__webpack_require__(21)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(46)
	  , createDesc     = __webpack_require__(35)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(34)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(31) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tabbar', {
	    attrs: {
	      "activeIndex": _vm.index
	    },
	    on: {
	      "postchange": function($event) {
	        _vm.$emit('update', $event.index)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "tabbar__content"
	  }, [_vm._t("pages", _vm._l((_vm.tabs), function(tab) {
	    return _c(tab.page, {
	      key: (tab.key || tab.page),
	      tag: "component"
	    })
	  }))], 2), _vm._v(" "), _c('div', {
	    staticClass: "tabbar"
	  }, [_vm._t("default", _vm._l((_vm.tabs), function(tab) {
	    return _c('v-ons-tab', _vm._b({
	      key: (tab.key || tab)
	    }, 'v-ons-tab', tab))
	  }))], 2)])
	},staticRenderFns: []}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(77),
	  /* template */
	  __webpack_require__(78),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  inject: ['navigator'],
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault) {
	        this.navigator.pageStack.pop();
	      }
	    }
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-back-button', {
	    domProps: {
	      "onClick": _vm.action
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(80),
	  /* template */
	  __webpack_require__(115),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _promise = __webpack_require__(81);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.destroyable, _mixins.hasOptions, _mixins.selfProvider, _mixins.deriveEvents, _mixins.deriveDBB],
	
	  props: {
	    pageStack: {
	      type: Array,
	      required: true
	    }
	  },
	
	  methods: {
	    isReady: function isReady() {
	      if (this.hasOwnProperty('_ready') && this._ready instanceof _promise2.default) {
	        return this._ready;
	      }
	      return _promise2.default.resolve();
	    },
	    onDeviceBackButton: function onDeviceBackButton(event) {
	      if (this.pageStack.length > 1) {
	        this.pageStack.pop();
	      } else {
	        event.callParentHandler();
	      }
	    },
	    _setPagesVisibility: function _setPagesVisibility(start, end, visibility) {
	      for (var i = start; i < end - 1; i++) {
	        this.$children[i].$el.style.visibility = visibility;
	      }
	    },
	    _reattachPage: function _reattachPage(pageElement) {
	      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	      this.$el.insertBefore(pageElement, position);
	      pageElement._isShown = true;
	    },
	    _redetachPage: function _redetachPage(pageElement) {
	      pageElement._destroy();
	      return _promise2.default.resolve();
	    },
	    _animate: function _animate(_ref) {
	      var _this = this;
	
	      var lastLength = _ref.lastLength,
	          currentLength = _ref.currentLength,
	          lastTopPage = _ref.lastTopPage,
	          currentTopPage = _ref.currentTopPage;
	
	      if (currentLength > lastLength) {
	        var isReattached = false;
	        if (lastTopPage.parentElement !== this.$el) {
	          this._reattachPage(lastTopPage, this.$el.children[lastLength - 1]);
	          isReattached = true;
	          lastLength--;
	        }
	        this._setPagesVisibility(lastLength, currentLength, 'hidden');
	
	        return this.$el._pushPage((0, _extends3.default)({}, this.options, { leavePage: lastTopPage })).then(function () {
	          _this._setPagesVisibility(lastLength, currentLength, '');
	          if (isReattached) {
	            _this._redetachPage(lastTopPage);
	          }
	        });
	      }
	
	      if (currentLength < lastLength) {
	        this._reattachPage(lastTopPage, null);
	        return this.$el._popPage(this.options, function () {
	          return _this._redetachPage(lastTopPage);
	        });
	      }
	
	      this._reattachPage(lastTopPage, currentTopPage);
	      return this.$el._pushPage(this.options).then(function () {
	        _this._redetachPage(lastTopPage);
	      });
	    }
	  },
	
	  watch: {
	    pageStack: function pageStack() {
	      var _this2 = this;
	
	      var lastLength = this.$children.length;
	      var lastTopPage = this.$children[this.$children.length - 1].$el;
	
	      this.$nextTick(function () {
	        var currentLength = _this2.$children.length;
	        var currentTopPage = _this2.$children[currentLength - 1].$el;
	
	        if (currentTopPage !== lastTopPage) {
	          _this2._ready = _this2._animate({ lastLength: lastLength, currentLength: currentLength, lastTopPage: lastTopPage, currentTopPage: currentTopPage });
	        } else if (currentLength !== lastLength) {
	          currentTopPage.updateBackButton(currentLength > 1);
	        }
	
	        lastTopPage = currentTopPage = null;
	      });
	    }
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(97);
	__webpack_require__(101);
	module.exports = __webpack_require__(23).Promise;

/***/ },
/* 83 */
/***/ function(module, exports) {



/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(85)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(86)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(87)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(88)
	  , hide           = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(89)
	  , $iterCreate    = __webpack_require__(90)
	  , setToStringTag = __webpack_require__(94)
	  , getPrototypeOf = __webpack_require__(96)
	  , ITERATOR       = __webpack_require__(95)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(91)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(94)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(26)(IteratorPrototype, __webpack_require__(95)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(28)
	  , dPs         = __webpack_require__(92)
	  , enumBugKeys = __webpack_require__(20)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(33)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(93).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(27)
	  , anObject = __webpack_require__(28)
	  , getKeys  = __webpack_require__(6);
	
	module.exports = __webpack_require__(31) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(27).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(95)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(17)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(18).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	var global        = __webpack_require__(18)
	  , hide          = __webpack_require__(26)
	  , Iterators     = __webpack_require__(89)
	  , TO_STRING_TAG = __webpack_require__(95)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(99)
	  , step             = __webpack_require__(100)
	  , Iterators        = __webpack_require__(89)
	  , toIObject        = __webpack_require__(9);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(86)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(87)
	  , global             = __webpack_require__(18)
	  , ctx                = __webpack_require__(24)
	  , classof            = __webpack_require__(102)
	  , $export            = __webpack_require__(22)
	  , isObject           = __webpack_require__(29)
	  , aFunction          = __webpack_require__(25)
	  , anInstance         = __webpack_require__(103)
	  , forOf              = __webpack_require__(104)
	  , speciesConstructor = __webpack_require__(108)
	  , task               = __webpack_require__(109).set
	  , microtask          = __webpack_require__(111)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(95)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(112)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(94)($Promise, PROMISE);
	__webpack_require__(113)(PROMISE);
	Wrapper = __webpack_require__(23)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(114)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(95)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(24)
	  , call        = __webpack_require__(105)
	  , isArrayIter = __webpack_require__(106)
	  , anObject    = __webpack_require__(28)
	  , toLength    = __webpack_require__(13)
	  , getIterFn   = __webpack_require__(107)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(28);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(89)
	  , ITERATOR   = __webpack_require__(95)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(102)
	  , ITERATOR  = __webpack_require__(95)('iterator')
	  , Iterators = __webpack_require__(89);
	module.exports = __webpack_require__(23).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(28)
	  , aFunction = __webpack_require__(25)
	  , SPECIES   = __webpack_require__(95)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(24)
	  , invoke             = __webpack_require__(110)
	  , html               = __webpack_require__(93)
	  , cel                = __webpack_require__(33)
	  , global             = __webpack_require__(18)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(11)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , macrotask = __webpack_require__(109).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(11)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(26);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(18)
	  , core        = __webpack_require__(23)
	  , dP          = __webpack_require__(27)
	  , DESCRIPTORS = __webpack_require__(31)
	  , SPECIES     = __webpack_require__(95)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(95)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-navigator', [_vm._t("default", _vm._l((_vm.pageStack), function(page) {
	    return _c(page, {
	      key: page,
	      tag: "component"
	    })
	  }))], 2)
	},staticRenderFns: []}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(117),
	  /* template */
	  __webpack_require__(118),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.destroyable, _mixins.hasOptions, _mixins.deriveEvents],
	
	  props: {
	    open: {
	      type: Boolean,
	      default: undefined
	    }
	  },
	
	  methods: {
	    action: function action() {
	      this._shouldUpdate() && this.$el[this.open ? 'open' : 'close'].call(this.$el, this.options).catch(function () {});
	    },
	    _shouldUpdate: function _shouldUpdate() {
	      return this.open !== undefined && this.open !== this.$el.isOpen;
	    }
	  },
	
	  watch: {
	    open: function open() {
	      this.action();
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$on(['postopen', 'postclose'], function () {
	      return _this._shouldUpdate() && _this.$emit('update', _this.$el.isOpen);
	    });
	
	    this.action();
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-splitter-side', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(120),
	  /* template */
	  null,
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  render: function render() {},
	
	
	  props: {
	    renderItem: {
	      type: Function,
	      required: true,
	      validator: function validator(value) {
	        var component = value(0);
	        if (component._isVue && !component._isMounted) {
	          component.$destroy();
	          return true;
	        }
	        return false;
	      }
	    },
	    length: {
	      type: Number,
	      required: true
	    },
	    calculateItemHeight: {
	      type: Function,
	      default: undefined
	    }
	  },
	
	  data: function data() {
	    return {
	      provider: null
	    };
	  },
	
	
	  methods: {
	    _setup: function _setup() {
	      var _this = this;
	
	      var delegate = new this.$ons._ons._internal.LazyRepeatDelegate({
	        calculateItemHeight: this.calculateItemHeight,
	        createItemContent: function createItemContent(i) {
	          return _this.renderItem(i).$mount().$el;
	        },
	        destroyItem: function destroyItem(i, _ref) {
	          var element = _ref.element;
	          return element.__vue__.$destroy();
	        },
	        countItems: function countItems() {
	          return _this.length;
	        }
	      }, null);
	
	      this.provider = new this.$ons._ons._internal.LazyRepeatProvider(this.$parent.$el, delegate);
	    },
	    refresh: function refresh() {
	      return this.provider.refresh();
	    }
	  },
	
	  watch: {
	    renderItem: function renderItem() {
	      this._setup();
	    },
	    length: function length() {
	      this._setup();
	    },
	    calculateItemHeight: function calculateItemHeight() {
	      this._setup();
	    }
	  },
	
	  mounted: function mounted() {
	    this._setup();
	    this.$vnode.context.$on('refresh', this.refresh);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$vnode.context.$off('refresh', this.refresh);
	    this.provider && this.provider.destroy();
	  }
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(122),
	  /* template */
	  __webpack_require__(123),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.modifier, _mixins.deriveEvents]
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c(_vm.$options._componentTag.slice(2), {
	    tag: "component",
	    on: {
	      "click": function($event) {
	        _vm.$emit('click', $event)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VOnsModel = __webpack_require__(125);
	
	Object.defineProperty(exports, 'OnsModel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsModel).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _formatOutput = function _formatOutput() {
	  var modifiers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var output = arguments[1];
	
	  if (Object.hasOwnProperty.call(modifiers, 'number')) {
	    return Number(output);
	  }
	  if (Object.hasOwnProperty.call(modifiers, 'trim')) {
	    return output.trim();
	  }
	  return output;
	};
	var _bindOn = function _bindOn(eventName, modelKey, vnode, handler) {
	  if (vnode.context.hasOwnProperty(modelKey)) {
	    vnode.child.$on(eventName, handler);
	  }
	};
	var _bindSimpleInputOn = function _bindSimpleInputOn(eventName, modelKey, vnode, propName) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    vnode.context[modelKey] = event.target[propName];
	  });
	};
	var _bindModifierInputOn = function _bindModifierInputOn(eventName, modelKey, vnode, modifiers) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    vnode.context[modelKey] = _formatOutput(modifiers, event.target.value);
	  });
	};
	var _bindArrayInputOn = function _bindArrayInputOn(eventName, modelKey, vnode) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    if (vnode.context[modelKey].indexOf(event.target.value) >= 0) {
	      !event.target.checked && vnode.context[modelKey].splice(vnode.context[modelKey].indexOf(event.target.value), 1);
	    } else {
	      event.target.checked && vnode.context[modelKey].push(event.target.value);
	    }
	  });
	};
	var _bindCheckbox = function _bindCheckbox(el, binding, vnode, modelKey) {
	  if (binding.value instanceof Array) {
	    el.checked = binding.value.indexOf(el.value) >= 0;
	    _bindArrayInputOn('change', modelKey, vnode);
	  } else {
	    el.checked = !!binding.value;
	    _bindSimpleInputOn('change', modelKey, vnode, 'checked');
	  }
	};
	var _updateCheckbox = function _updateCheckbox(el, binding, vnode, modelKey) {
	  if (binding.value instanceof Array) {
	    el.checked = (vnode.context[modelKey] || []).indexOf(el.value) >= 0;
	  } else {
	    el.checked = !!binding.value;
	  }
	};
	
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var modelKey = binding.expression.trim();
	    var tag = el.tagName.toLowerCase();
	
	    switch (tag) {
	      case 'ons-select':
	        el.querySelector('option[value=' + binding.value + ']').setAttribute('selected', 'selected');
	        _bindSimpleInputOn('change', modelKey, vnode, 'value');
	        break;
	
	      case 'ons-switch':
	        _bindCheckbox(el, binding, vnode, modelKey);
	        break;
	
	      case 'ons-range':
	        el.value = binding.value;
	        _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', modelKey, vnode, binding.modifiers);
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = el.value === binding.value;
	            _bindSimpleInputOn('change', modelKey, vnode, 'value');
	            break;
	
	          case 'checkbox':
	            _bindCheckbox(el, binding, vnode, modelKey);
	            break;
	
	          default:
	            el.value = binding.value;
	            _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', modelKey, vnode, binding.modifiers);
	        }
	        break;
	
	      default:
	        throw new Error('"v-ons-model" directive cannot be used with "' + tag + '" element.');
	    }
	  },
	  update: function update(el, binding, vnode) {
	    var modelKey = binding.expression.trim();
	    var tag = el.tagName.toLowerCase();
	
	    switch (tag) {
	      case 'ons-select':
	        el.querySelectorAll('option').forEach(function (option) {
	          option.value == binding.value ? option.setAttribute('selected', 'selected') : option.removeAttribute('selected');
	        });
	        break;
	
	      case 'ons-switch':
	        _updateCheckbox(el, binding, vnode, modelKey);
	        break;
	
	      case 'ons-range':
	        el.value = binding.value;
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = vnode.context[modelKey] === el.value;
	            break;
	
	          case 'checkbox':
	            _updateCheckbox(el, binding, vnode, modelKey);
	            break;
	
	          default:
	            el.value !== binding.value && (el.value = binding.value);
	        }
	        break;
	    }
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NDM1ZjMyMjc0MTNjYzFlZTZlMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9WT25zUG9wb3Zlci52dWUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2Rlcml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJuYWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwib25zXCIsXCJjb21tb25qc1wiOlwib25zZW51aVwiLFwiY29tbW9uanMyXCI6XCJvbnNlbnVpXCIsXCJhbWRcIjpcIm9uc2VudWlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1BvcG92ZXIudnVlP2RiZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0FsZXJ0RGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vVk9uc0FsZXJ0RGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WT25zQWxlcnREaWFsb2cudnVlP2M2NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1NwZWVkRGlhbC52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNTcGVlZERpYWwudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNTcGVlZERpYWwudnVlPzFkNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vVk9uc0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WT25zQ2Fyb3VzZWwudnVlPzJhMDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYi52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNUYWIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlP2ZlZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNUYWJiYXIudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWJiYXIudnVlPzEzMTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlIiwid2VicGFjazovLy9WT25zQmFja0J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlPzE1NDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc05hdmlnYXRvci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNOYXZpZ2F0b3IudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNOYXZpZ2F0b3IudnVlP2Q5NDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1NwbGl0dGVyU2lkZS52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNTcGxpdHRlclNpZGUudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNTcGxpdHRlclNpZGUudnVlPzQyOWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlIiwid2VicGFjazovLy9WT25zTGF6eVJlcGVhdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlIiwid2VicGFjazovLy9WR2VuZXJpYy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlP2FhNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvVk9uc01vZGVsLmpzIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJkaXJlY3RpdmVzIiwicmVnaXN0ZXIiLCJWdWUiLCJ0eXBlIiwiaXRlbXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJpbnN0YWxsIiwicGFyYW1zIiwiY29uZmlnIiwic2lsZW50IiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCIkb3B0aW9ucyIsInRlbXBsYXRlIiwibWF0Y2giLCJsb2NhdGlvbiIsIl9jb21wb25lbnRUYWciLCJfdXRpbCIsIndhcm4iLCJpbmRleCIsInByb3RvdHlwZSIsIiRvbnMiLCJmaWx0ZXIiLCJzb21lIiwiayIsInQiLCJyZWR1Y2UiLCJyIiwiX29ucyIsIndpbmRvdyIsInVzZSIsImRlZmF1bHQiLCJleHRlbmQiLCJjb21wb25lbnQiLCJtaXhpbnMiLCJuYW1lIiwiZXh0ZW5kcyIsIlZPbnNUb29sYmFyIiwiVk9uc1Rvb2xiYXJCdXR0b24iLCJWT25zQnV0dG9uIiwiVk9uc0ljb24iLCJWT25zU3dpdGNoIiwiVk9uc0lucHV0IiwiVk9uc1JhbmdlIiwiVk9uc1NlbGVjdCIsIlZPbnNCb3R0b21Ub29sYmFyIiwiVk9uc1NwZWVkRGlhbEl0ZW0iLCJWT25zTGlzdCIsIlZPbnNMaXN0SXRlbSIsIlZPbnNMaXN0SGVhZGVyIiwiVk9uc1JpcHBsZSIsIlZPbnNSb3ciLCJWT25zQ29sIiwiVk9uc1Byb2dyZXNzQmFyIiwiVk9uc1Byb2dyZXNzQ2lyY3VsYXIiLCJWT25zQ2Fyb3VzZWxJdGVtIiwiVk9uc1NwbGl0dGVyTWFzayIsIlZPbnNTcGxpdHRlckNvbnRlbnQiLCJWT25zUHVsbEhvb2siLCJWT25zU3BsaXR0ZXIiLCJWT25zRmFiIiwiVk9uc1BhZ2UiLCJWT25zRGlhbG9nIiwiVk9uc01vZGFsIiwiZGVyaXZlREJCIiwiZGVyaXZlSGFuZGxlciIsImRlcml2ZUV2ZW50cyIsImhpZGFibGUiLCJkZXN0cm95YWJsZSIsImhhc09wdGlvbnMiLCJtb2RpZmllciIsInNlbGZQcm92aWRlciIsImRpYWxvZ0NhbmNlbCIsIl9zZXR1cERCQiIsImRiYiIsImhhbmRsZXIiLCIkZWwiLCJfY2FsbGJhY2siLCJlIiwiY2FsbFBhcmVudEhhbmRsZXIiLCJydW5EZWZhdWx0IiwiJGVtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiX2lzREJCU2V0dXAiLCJtb3VudGVkIiwiYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZWQiLCJwcm9wTmFtZSIsImhhbmRsZXJOYW1lIiwicHJvcHMiLCJGdW5jdGlvbiIsIndhdGNoIiwiX2hhbmRsZXJzIiwiX2JvdW5kRXZlbnRzIiwiY29uc3RydWN0b3IiLCJfX3Byb3RvX18iLCJldmVudHMiLCJ0YXJnZXQiLCJ0ZXN0IiwidGFnTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImh5cGhlbmF0ZSIsInN0cmluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsaXplIiwibSIsImwiLCJ0b1VwcGVyQ2FzZSIsImV2ZW50VG9IYW5kbGVyIiwiY2hhckF0Iiwic2xpY2UiLCJoYW5kbGVyVG9Qcm9wIiwiX3RvZ2dsZVZpc2liaWxpdHkiLCJ2aXNpYmxlIiwiY2FsbCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwib3B0aW9ucyIsIkJvb2xlYW4iLCJ1bmRlZmluZWQiLCIkbmV4dFRpY2siLCJfZGVzdHJveSIsIk9iamVjdCIsIlN0cmluZyIsIm1ldGhvZHMiLCJfdXBkYXRlTW9kaWZpZXIiLCJoYXNPd25Qcm9wZXJ0eSIsIl9wcmV2aW91c01vZGlmaWVyIiwic3BsaXQiLCJyZW1vdmVNb2RpZmllciIsImF1dG9TdHlsZSIsInRyaW0iLCJhZGRNb2RpZmllciIsInByb3ZpZGUiLCIkb24iLCJfZm9ybWF0T3V0cHV0IiwibW9kaWZpZXJzIiwib3V0cHV0IiwiTnVtYmVyIiwiX2JpbmRPbiIsImV2ZW50TmFtZSIsIm1vZGVsS2V5Iiwidm5vZGUiLCJjb250ZXh0IiwiY2hpbGQiLCJfYmluZFNpbXBsZUlucHV0T24iLCJfYmluZE1vZGlmaWVySW5wdXRPbiIsIl9iaW5kQXJyYXlJbnB1dE9uIiwiaW5kZXhPZiIsImNoZWNrZWQiLCJzcGxpY2UiLCJwdXNoIiwiX2JpbmRDaGVja2JveCIsImVsIiwiYmluZGluZyIsIkFycmF5IiwiX3VwZGF0ZUNoZWNrYm94IiwiYmluZCIsImV4cHJlc3Npb24iLCJ0YWciLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiRXJyb3IiLCJ1cGRhdGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9uIiwicmVtb3ZlQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7S0FBWUEsVTs7QUFDWjs7S0FBWUMsVTs7QUFDWjs7QUFFQTs7Ozs7Ozs7QUFF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEc7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0VWLHlCQUFnQkgsRUFBaEIsRUFBb0JDLE9BQXBCLEVBQTZCWixLQUE3QixFQUFvQ0QsUUFBcEM7QUFDQTs7QUFFRixZQUFLLFdBQUw7QUFDRVksWUFBR3ZKLEtBQUgsR0FBV3dKLFFBQVF4SixLQUFuQjtBQUNBOztBQUVGLFlBQUssV0FBTDtBQUNFLGlCQUFRdUosR0FBRzNKLElBQVg7QUFDRSxnQkFBSyxPQUFMO0FBQ0UySixnQkFBR0osT0FBSCxHQUFhUCxNQUFNQyxPQUFOLENBQWNGLFFBQWQsTUFBNEJZLEdBQUd2SixLQUE1QztBQUNBOztBQUVGLGdCQUFLLFVBQUw7QUFDRTBKLDZCQUFnQkgsRUFBaEIsRUFBb0JDLE9BQXBCLEVBQTZCWixLQUE3QixFQUFvQ0QsUUFBcEM7QUFDQTs7QUFFRjtBQUNFWSxnQkFBR3ZKLEtBQUgsS0FBYXdKLFFBQVF4SixLQUFyQixLQUErQnVKLEdBQUd2SixLQUFILEdBQVd3SixRQUFReEosS0FBbEQ7QUFWSjtBQVlBO0FBMUJKO0FBNEJEO0FBbkZZLEUiLCJmaWxlIjoidnVlLW9uc2VudWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJvbnNlbnVpXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVnVlT25zZW5cIiwgW1wib25zZW51aVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWdWVPbnNlblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm9uc2VudWlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZ1ZU9uc2VuXCJdID0gZmFjdG9yeShyb290W1wib25zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NDM1ZjMyMjc0MTNjYzFlZTZlMSIsImltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIGRpcmVjdGl2ZXMgZnJvbSAnLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IGh5cGhlbmF0ZSB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbCc7XG5cbmltcG9ydCBvbnMgZnJvbSAnb25zZW51aSc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gKFZ1ZSwgdHlwZSwgaXRlbXMpID0+IHtcbiAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gaXRlbXNba2V5XTtcbiAgICBrZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICBWdWVbdHlwZV0oa2V5LCB2YWx1ZSk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5zdGFsbCA9IChWdWUsIHBhcmFtcyA9IHt9KSA9PiB7XG4gIC8qKlxuICAgKiBSZWdpc3RlciBjb21wb25lbnRzIG9mIHZ1ZS1vbnNlbnVpLlxuICAgKi9cbiAgcmVnaXN0ZXIoVnVlLCAnY29tcG9uZW50JywgY29tcG9uZW50cyk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGRpcmVjdGl2ZXMgb2YgdnVlLW9uc2VudWkuXG4gICAqL1xuICByZWdpc3RlcihWdWUsICdkaXJlY3RpdmUnLCBkaXJlY3RpdmVzKTtcblxuICAvKipcbiAgICogQXBwbHkgYSBtaXhpbiBnbG9iYWxseSB0byBwcmV2ZW50IG9ucy0qIGVsZW1lbnRzXG4gICAqIGZyb20gYmVpbmcgaW5jbHVkZWQgZGlyZWN0bHkgaW4gVnVlIGluc3RhbmNlIHRlbXBsYXRlcy5cbiAgICpcbiAgICogTm90ZTogVGhpcyBhZmZlY3RzIGV2ZXJ5IFZ1ZSBpbnN0YW5jZSBvbmx5IHdoZW4gd2FybnNcbiAgICogYXJlIGFsbG93ZWQgYnkgVnVlLlxuICAgKi9cbiAgaWYgKCFWdWUuY29uZmlnLnNpbGVudCkge1xuICAgIFZ1ZS5taXhpbih7XG4gICAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLiRvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLiRvcHRpb25zLnRlbXBsYXRlLm1hdGNoKC88KG9ucy1bXFx3LV0rKS9pbSk7XG5cbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy4kb3B0aW9ucy5fY29tcG9uZW50VGFnID8gYCBpbiBjb21wb25lbnQgPCR7dGhpcy4kb3B0aW9ucy5fY29tcG9uZW50VGFnfT5gIDogJyc7XG4gICAgICAgICAgICBvbnMuX3V0aWwud2FybignW3Z1ZS1vbnNlbnVpXSBWdWUgdGVtcGxhdGVzIG11c3Qgbm90IGNvbnRhaW4gPG9ucy0qPiBlbGVtZW50cyBkaXJlY3RseS5cXG4nICtcbiAgICAgICAgICAgICAgYDwke21hdGNoWzFdfT4gZWxlbWVudCBmb3VuZCBuZWFyIGluZGV4ICR7bWF0Y2guaW5kZXh9JHtsb2NhdGlvbn0uIFBsZWFzZSB1c2UgPHYtJHttYXRjaFsxXX0+IGluc3RlYWQ6XG4gICAgICAgICAgICAgICR7dGhpcy4kb3B0aW9ucy50ZW1wbGF0ZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBvbnMgb2JqZWN0LlxuICAgKi9cbiAgVnVlLnByb3RvdHlwZS4kb25zID0gT2JqZWN0LmtleXMob25zKVxuICAgIC5maWx0ZXIoayA9PiBbXG4gICAgICAvXmVuYWJsZS8sXG4gICAgICAvXmRpc2FibGUvLFxuICAgICAgL15zZXQvLFxuICAgICAgL2FuaW1pdC8sXG4gICAgICAvRWxlbWVudCQvLFxuICAgICAgL2Zhc3RDbGljay8sXG4gICAgICAvR2VzdHVyZURldGVjdG9yLyxcbiAgICAgIC9ub3RpZmljYXRpb24vLFxuICAgICAgL29yaWVudGF0aW9uLyxcbiAgICAgIC9wbGF0Zm9ybS8sXG4gICAgICAvcmVhZHkvLFxuICAgIF0uc29tZSh0ID0+IGsubWF0Y2godCkpKVxuICAgIC5yZWR1Y2UoKHIsIGspID0+IHtcbiAgICAgIHJba10gPSBvbnNba107XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCB7IF9vbnM6IG9ucyB9KTtcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKHtpbnN0YWxsfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zUG9wb3ZlciB9IGZyb20gJy4vVk9uc1BvcG92ZXIudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc0FsZXJ0RGlhbG9nIH0gZnJvbSAnLi9WT25zQWxlcnREaWFsb2cudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc1NwZWVkRGlhbCB9IGZyb20gJy4vVk9uc1NwZWVkRGlhbC52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zQ2Fyb3VzZWwgfSBmcm9tICcuL1ZPbnNDYXJvdXNlbC52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zVGFiIH0gZnJvbSAnLi9WT25zVGFiLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNUYWJiYXIgfSBmcm9tICcuL1ZPbnNUYWJiYXIudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc0JhY2tCdXR0b24gfSBmcm9tICcuL1ZPbnNCYWNrQnV0dG9uLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNOYXZpZ2F0b3IgfSBmcm9tICcuL1ZPbnNOYXZpZ2F0b3IudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc1NwbGl0dGVyU2lkZSB9IGZyb20gJy4vVk9uc1NwbGl0dGVyU2lkZS52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zTGF6eVJlcGVhdCB9IGZyb20gJy4vVk9uc0xhenlSZXBlYXQudnVlJztcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG5pbXBvcnQgVkdlbmVyaWMgZnJvbSAnLi9WR2VuZXJpYy52dWUnO1xuaW1wb3J0IHsgaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBkZXN0cm95YWJsZSwgZGVyaXZlREJCLCBkZXJpdmVIYW5kbGVyLCBzZWxmUHJvdmlkZXIgfSBmcm9tICcuLi9taXhpbnMnO1xuXG5jb25zdCBleHRlbmQgPSAoY29tcG9uZW50LCBtaXhpbnMgPSBbXSkgPT4gKHsgbmFtZTogJ3Ytb25zLScgKyBjb21wb25lbnQsIG1peGlucywgZXh0ZW5kczogVkdlbmVyaWMgfSk7XG5cbmV4cG9ydCBjb25zdCBWT25zVG9vbGJhciA9IGV4dGVuZCgndG9vbGJhcicpO1xuZXhwb3J0IGNvbnN0IFZPbnNUb29sYmFyQnV0dG9uID0gZXh0ZW5kKCd0b29sYmFyLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IFZPbnNCdXR0b24gPSBleHRlbmQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IFZPbnNJY29uID0gZXh0ZW5kKCdpY29uJyk7XG5leHBvcnQgY29uc3QgVk9uc1N3aXRjaCA9IGV4dGVuZCgnc3dpdGNoJyk7XG5leHBvcnQgY29uc3QgVk9uc0lucHV0ID0gZXh0ZW5kKCdpbnB1dCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNSYW5nZSA9IGV4dGVuZCgncmFuZ2UnKTtcbmV4cG9ydCBjb25zdCBWT25zU2VsZWN0ID0gZXh0ZW5kKCdzZWxlY3QnKTtcbmV4cG9ydCBjb25zdCBWT25zQm90dG9tVG9vbGJhciA9IGV4dGVuZCgnYm90dG9tLXRvb2xiYXInKTtcbmV4cG9ydCBjb25zdCBWT25zU3BlZWREaWFsSXRlbSA9IGV4dGVuZCgnc3BlZWQtZGlhbC1pdGVtJyk7XG5leHBvcnQgY29uc3QgVk9uc0xpc3QgPSBleHRlbmQoJ2xpc3QnKTtcbmV4cG9ydCBjb25zdCBWT25zTGlzdEl0ZW0gPSBleHRlbmQoJ2xpc3QtaXRlbScpO1xuZXhwb3J0IGNvbnN0IFZPbnNMaXN0SGVhZGVyID0gZXh0ZW5kKCdsaXN0LWhlYWRlcicpO1xuZXhwb3J0IGNvbnN0IFZPbnNSaXBwbGUgPSBleHRlbmQoJ3JpcHBsZScpO1xuZXhwb3J0IGNvbnN0IFZPbnNSb3cgPSBleHRlbmQoJ3JvdycpO1xuZXhwb3J0IGNvbnN0IFZPbnNDb2wgPSBleHRlbmQoJ2NvbCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNQcm9ncmVzc0JhciA9IGV4dGVuZCgncHJvZ3Jlc3MtYmFyJyk7XG5leHBvcnQgY29uc3QgVk9uc1Byb2dyZXNzQ2lyY3VsYXIgPSBleHRlbmQoJ3Byb2dyZXNzLWNpcmN1bGFyJyk7XG5leHBvcnQgY29uc3QgVk9uc0Nhcm91c2VsSXRlbSA9IGV4dGVuZCgnY2Fyb3VzZWwtaXRlbScpO1xuZXhwb3J0IGNvbnN0IFZPbnNTcGxpdHRlck1hc2sgPSBleHRlbmQoJ3NwbGl0dGVyLW1hc2snKTtcbmV4cG9ydCBjb25zdCBWT25zU3BsaXR0ZXJDb250ZW50ID0gZXh0ZW5kKCdzcGxpdHRlci1jb250ZW50JywgW2Rlc3Ryb3lhYmxlXSk7XG5leHBvcnQgY29uc3QgVk9uc1B1bGxIb29rID0gZXh0ZW5kKCdwdWxsLWhvb2snLCBbZGVyaXZlSGFuZGxlcignb25BY3Rpb24nKV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNTcGxpdHRlciA9IGV4dGVuZCgnc3BsaXR0ZXInLCBbc2VsZlByb3ZpZGVyLCBkZXJpdmVEQkJdKTtcbmV4cG9ydCBjb25zdCBWT25zRmFiID0gZXh0ZW5kKCdmYWInLCBbaGlkYWJsZV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNQYWdlID0gZXh0ZW5kKCdwYWdlJywgW2Rlc3Ryb3lhYmxlLCBkZXJpdmVEQkIsIGRlcml2ZUhhbmRsZXIoJ29uSW5maW5pdGVTY3JvbGwnKV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNEaWFsb2cgPSBleHRlbmQoJ2RpYWxvZycsIFtoaWRhYmxlLCBoYXNPcHRpb25zLCBkaWFsb2dDYW5jZWwsIGRlcml2ZURCQl0pO1xuZXhwb3J0IGNvbnN0IFZPbnNNb2RhbCA9IGV4dGVuZCgnbW9kYWwnLCBbaGlkYWJsZSwgaGFzT3B0aW9ucywgZGVyaXZlREJCXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNQb3BvdmVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGM5NTYwNjBcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc1BvcG92ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IE9iamVjdC5jcmVhdGUob3B0aW9ucy5jb21wdXRlZCB8fCBudWxsKVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgICBvcHRpb25zLmNvbXB1dGVkID0gY29tcHV0ZWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy1wb3BvdmVyPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9vbnMtcG9wb3Zlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGhpZGFibGUsIGhhc09wdGlvbnMsIGRpYWxvZ0NhbmNlbCwgbW9kaWZpZXIsIGRlcml2ZUV2ZW50cywgZGVyaXZlREJCIH0gZnJvbSAnLi4vbWl4aW5zJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBtb2RpZmllciwgZGVyaXZlRXZlbnRzLCBkZXJpdmVEQkJdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuX2lzVnVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdmFsdWUgaW5zdGFuY2VvZiBFdmVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBub3JtYWxpemVkVGFyZ2V0KCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuX2lzVnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LiRlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gICAgICB9LFxuICAgICAgbm9ybWFsaXplZE9wdGlvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMubm9ybWFsaXplZFRhcmdldCxcbiAgICAgICAgICAgIC4uLnRoaXMub3B0aW9uc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zUG9wb3Zlci52dWU/YWUzMWVlZTYiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlcml2ZURCQiwgZGVyaXZlSGFuZGxlciwgZGVyaXZlRXZlbnRzIH0gZnJvbSAnLi9kZXJpdmUnO1xuZXhwb3J0IHsgaGlkYWJsZSwgZGVzdHJveWFibGUsIGhhc09wdGlvbnMsIG1vZGlmaWVyLCBzZWxmUHJvdmlkZXIsIGRpYWxvZ0NhbmNlbCB9IGZyb20gJy4vY29tbW9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvaW5kZXguanMiLCJpbXBvcnQgeyBldmVudFRvSGFuZGxlciwgaGFuZGxlclRvUHJvcCB9IGZyb20gJy4uL2ludGVybmFsL3V0aWwnO1xuXG4vKiBQcml2YXRlICovXG5jb25zdCBfc2V0dXBEQkIgPSBjb21wb25lbnQgPT4ge1xuICBjb25zdCBkYmIgPSAnb25EZXZpY2VCYWNrQnV0dG9uJztcbiAgLy8gQ2FsbCBvcmlnaW5hbCBoYW5kbGVyIG9yIHBhcmVudCBoYW5kbGVyIGJ5IGRlZmF1bHRcbiAgY29uc3QgaGFuZGxlciA9IGNvbXBvbmVudFtkYmJdIHx8IChjb21wb25lbnQuJGVsW2RiYl0gJiYgY29tcG9uZW50LiRlbFtkYmJdLl9jYWxsYmFjaykgfHwgKGUgPT4gZS5jYWxsUGFyZW50SGFuZGxlcigpKTtcblxuICBjb21wb25lbnQuJGVsW2RiYl0gPSBldmVudCA9PiB7XG4gICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuXG4gICAgY29tcG9uZW50LiRlbWl0KGhhbmRsZXJUb1Byb3AoZGJiKSwge1xuICAgICAgLi4uZXZlbnQsXG4gICAgICBwcmV2ZW50RGVmYXVsdDogKCkgPT4gcnVuRGVmYXVsdCA9IGZhbHNlXG4gICAgfSk7XG5cbiAgICBydW5EZWZhdWx0ICYmIGhhbmRsZXIoZXZlbnQpO1xuICB9O1xuXG4gIGNvbXBvbmVudC5faXNEQkJTZXR1cCA9IHRydWU7XG59O1xuXG4vKiBQdWJsaWMgKi9cbi8vIERldmljZSBCYWNrIEJ1dHRvbiBIYW5kbGVyXG5jb25zdCBkZXJpdmVEQkIgPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgX3NldHVwREJCKHRoaXMpO1xuICB9LFxuXG4gIC8vIENvcmUgZGVzdHJveXMgZGV2aWNlQmFja0J1dHRvbiBoYW5kbGVycyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAgLy8gVGhpcyBmaXhlcyB0aGUgYmVoYXZpb3IgZm9yIDxrZWVwLWFsaXZlPiBjb21wb25lbnQuXG4gIGFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLl9pc0RCQlNldHVwID09PSBmYWxzZSAmJiBfc2V0dXBEQkIodGhpcyk7XG4gIH0sXG5cbiAgZGVhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy5faXNEQkJTZXR1cCA9PT0gdHJ1ZSAmJiAodGhpcy5faXNEQkJTZXR1cCA9IGZhbHNlKTtcbiAgfVxufTtcblxuLy8gVGhlc2UgaGFuZGxlcnMgY2Fubm90IHRocm93IGV2ZW50cyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbmNvbnN0IGRlcml2ZUhhbmRsZXIgPSBoYW5kbGVyTmFtZSA9PiB7XG4gIGNvbnN0IHByb3BOYW1lID0gaGFuZGxlclRvUHJvcChoYW5kbGVyTmFtZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgW3Byb3BOYW1lXToge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgW3Byb3BOYW1lXSgpIHtcbiAgICAgICAgdGhpcy4kZWxbaGFuZGxlck5hbWVdID0gdGhpc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzW3Byb3BOYW1lXSAmJiAodGhpcy4kZWxbaGFuZGxlck5hbWVdID0gdGhpc1twcm9wTmFtZV0pO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IGRlcml2ZUV2ZW50cyA9IHtcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHRoaXMuX2JvdW5kRXZlbnRzID0gdGhpcy4kZWwuY29uc3RydWN0b3IuX19wcm90b19fLmV2ZW50cyB8fCBbXTtcblxuICAgIHRoaXMuX2JvdW5kRXZlbnRzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50VG9IYW5kbGVyKGtleSldID0gZXZlbnQgPT4ge1xuICAgICAgICAvLyBGaWx0ZXIgZXZlbnRzIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHMgd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuJGVsIHx8ICEvXm9ucy0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICAgIHRoaXMuJGVtaXQoa2V5LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKGtleSwgdGhpcy5faGFuZGxlcnNbZXZlbnRUb0hhbmRsZXIoa2V5KV0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fYm91bmRFdmVudHMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMuX2hhbmRsZXJzW2V2ZW50VG9IYW5kbGVyKGtleSldKTtcbiAgICB9KTtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHRoaXMuX2JvdW5kRXZlbnRzID0gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGVyaXZlREJCLCBkZXJpdmVIYW5kbGVyLCBkZXJpdmVFdmVudHMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvZGVyaXZlLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IHN0cmluZyA9PiBzdHJpbmcucmVwbGFjZSgvKFthLXpBLVpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyaW5nID0+IHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oW2Etel0pL2csIChtLCBsKSA9PiBsLnRvVXBwZXJDYXNlKCkpO1xuXG5leHBvcnQgY29uc3QgZXZlbnRUb0hhbmRsZXIgPSBuYW1lID0+ICdfb24nICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyVG9Qcm9wID0gbmFtZSA9PiBuYW1lLnNsaWNlKDIpLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgyKS5zbGljZSgxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnRlcm5hbC91dGlsLmpzIiwiaW1wb3J0IHsgX3V0aWwgYXMgdXRpbCB9IGZyb20gJ29uc2VudWknO1xuXG4vKiBQcml2YXRlICovXG5jb25zdCBfdG9nZ2xlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy52aXNpYmxlICE9PSB0aGlzLiRlbC52aXNpYmxlKSB7XG4gICAgdGhpcy4kZWxbdGhpcy52aXNpYmxlID8gJ3Nob3cnIDogJ2hpZGUnXS5jYWxsKHRoaXMuJGVsLCB0aGlzLm5vcm1hbGl6ZWRPcHRpb25zIHx8IHRoaXMub3B0aW9ucyk7XG4gIH1cbn07XG5cbi8qIFB1YmxpYyAqL1xuLy8gQ29tcG9uZW50cyB0aGF0IGNhbiBiZSBzaG93biBvciBoaWRkZW5cbmNvbnN0IGhpZGFibGUgPSB7XG4gIHByb3BzOiB7XG4gICAgdmlzaWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCAvLyBBdm9pZCBjYXN0aW5nIHRvIGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgdmlzaWJsZSgpIHtcbiAgICAgIF90b2dnbGVWaXNpYmlsaXR5LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4geyAvLyBGQUIgdGFrZXMgMSBleHRyYSBjeWNsZVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZpc2libGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBfdG9nZ2xlVmlzaWJpbGl0eS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBDb21wb25lbnRzIHRoYXQgY29udGFpbiBwYWdlc1xuY29uc3QgZGVzdHJveWFibGUgPSB7XG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuJGVsLl9kZXN0cm95IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMuJGVsLl9kZXN0cm95KCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBDb21wb25lbnRzIHdpdGggJ29wdGlvbnMnIHByb3BlcnR5XG5jb25zdCBoYXNPcHRpb25zID0ge1xuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIENvbXBvbmVudHMgd2l0aCAnbW9kaWZpZXInIGF0dHJpYnV0ZVxuY29uc3QgbW9kaWZpZXIgPSB7XG4gIHByb3BzOiB7XG4gICAgbW9kaWZpZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBfdXBkYXRlTW9kaWZpZXIoKSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnX3ByZXZpb3VzTW9kaWZpZXInKSkge1xuICAgICAgICB0aGlzLl9wcmV2aW91c01vZGlmaWVyLnNwbGl0KC9cXHMrLykuZm9yRWFjaChtb2RpZmllciA9PiB1dGlsLnJlbW92ZU1vZGlmaWVyKHRoaXMuJGVsLCBtb2RpZmllciwgeyBhdXRvU3R5bGU6IHRydWUgfSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RpZmllci50cmltKCkuc3BsaXQoL1xccysvKS5mb3JFYWNoKG1vZGlmaWVyID0+IHV0aWwuYWRkTW9kaWZpZXIodGhpcy4kZWwsIG1vZGlmaWVyLCB7IGF1dG9TdHlsZTogdHJ1ZSB9KSk7XG4gICAgICB0aGlzLl9wcmV2aW91c01vZGlmaWVyID0gdGhpcy5tb2RpZmllcjtcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBtb2RpZmllcigpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1vZGlmaWVyKCk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5tb2RpZmllciAmJiB0aGlzLl91cGRhdGVNb2RpZmllcigpO1xuICB9XG59O1xuXG4vLyBQcm92aWRlcyBpdHNlbGYgdG8gaXRzIGRlc2NlbmRhbnRzXG5jb25zdCBzZWxmUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLiRvcHRpb25zLl9jb21wb25lbnRUYWcuc2xpY2UoNildOiB0aGlzXG4gICAgfVxuICB9XG59O1xuXG4vLyBDb21tb24gZXZlbnQgZm9yIERpYWxvZ3NcbmNvbnN0IGRpYWxvZ0NhbmNlbCA9IHtcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRvbignZGlhbG9nLWNhbmNlbCcsICgpID0+IHRoaXMuJGVtaXQoJ3VwZGF0ZScsIGZhbHNlKSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGhpZGFibGUsIGRlc3Ryb3lhYmxlLCBoYXNPcHRpb25zLCBtb2RpZmllciwgc2VsZlByb3ZpZGVyLCBkaWFsb2dDYW5jZWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvY29tbW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwib25zXCIsXCJjb21tb25qc1wiOlwib25zZW51aVwiLFwiY29tbW9uanMyXCI6XCJvbnNlbnVpXCIsXCJhbWRcIjpcIm9uc2VudWlcIn1cbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtcG9wb3ZlcicsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi04Yzk1NjA2MFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1BvcG92ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zQWxlcnREaWFsb2cudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWRhZjQyMlxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zQWxlcnREaWFsb2cudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNBbGVydERpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy1hbGVydC1kaWFsb2c+XG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPlxuICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+e3t0aXRsZX19PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctY29udGVudFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctZm9vdGVyXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gdi1mb3I9XCIoaGFuZGxlciwga2V5KSBpbiBmb290ZXJcIiA6a2V5PVwia2V5XCIgY2xhc3M9XCJhbGVydC1kaWFsb2ctYnV0dG9uXCIgQGNsaWNrPVwiaGFuZGxlclwiPnt7a2V5fX08L2J1dHRvbj5cbiAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgPC9vbnMtYWxlcnQtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBtb2RpZmllciwgZGVyaXZlRXZlbnRzLCBkZXJpdmVEQkIgfSBmcm9tICcuLi9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtoaWRhYmxlLCBoYXNPcHRpb25zLCBkaWFsb2dDYW5jZWwsIG1vZGlmaWVyLCBkZXJpdmVFdmVudHMsIGRlcml2ZURCQl0sXG5cbiAgICBwcm9wczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5ldmVyeShrZXkgPT4gdmFsdWVba2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNBbGVydERpYWxvZy52dWU/NWFhY2QxYzIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLWFsZXJ0LWRpYWxvZycsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0LWRpYWxvZy10aXRsZVwiXG4gIH0sIFtfdm0uX3QoXCJ0aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQtZGlhbG9nLWNvbnRlbnRcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0LWRpYWxvZy1mb290ZXJcIlxuICB9LCBbX3ZtLl90KFwiZm9vdGVyXCIsIF92bS5fbCgoX3ZtLmZvb3RlciksIGZ1bmN0aW9uKGhhbmRsZXIsIGtleSkge1xuICAgIHJldHVybiBfYygnYnV0dG9uJywge1xuICAgICAga2V5OiBrZXksXG4gICAgICBzdGF0aWNDbGFzczogXCJhbGVydC1kaWFsb2ctYnV0dG9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGhhbmRsZXJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhrZXkpKV0pXG4gIH0pKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi0zOWRhZjQyMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc0FsZXJ0RGlhbG9nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc1NwZWVkRGlhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XFxcImlkXFxcIjpcXFwiZGF0YS12LWE0ZDY1ODdjXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNTcGVlZERpYWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNTcGVlZERpYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtc3BlZWQtZGlhbCA6b24tY2xpY2sucHJvcD1cImFjdGlvblwiPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9vbnMtc3BlZWQtZGlhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGhpZGFibGUsIGRlcml2ZUV2ZW50cyB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2Rlcml2ZUV2ZW50cywgaGlkYWJsZV0sXG5cbiAgICBwcm9wczoge1xuICAgICAgb3Blbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgYWN0aW9uKCkge1xuICAgICAgICBsZXQgcnVuRGVmYXVsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gcnVuRGVmYXVsdCA9IGZhbHNlIH0pO1xuXG4gICAgICAgIGlmIChydW5EZWZhdWx0KSB7XG4gICAgICAgICAgdGhpcy4kZWwudG9nZ2xlSXRlbXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9zaG91bGRVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wZW4gIT09IHRoaXMuJGVsLmlzT3BlbigpO1xuICAgICAgfSxcbiAgICAgIF91cGRhdGVUb2dnbGUoKSB7XG4gICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZSgpICYmIHRoaXMuJGVsW3RoaXMub3BlbiA/ICdzaG93SXRlbXMnIDogJ2hpZGVJdGVtcyddLmNhbGwodGhpcy4kZWwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlVG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLiRvbihbJ29wZW4nLCAnY2xvc2UnXSwgKCkgPT4gdGhpcy5fc2hvdWxkVXBkYXRlKCkgJiYgdGhpcy4kZW1pdCgndXBkYXRlJywgdGhpcy4kZWwuaXNPcGVuKCkpKTtcblxuICAgICAgdGhpcy5fdXBkYXRlVG9nZ2xlKCk7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1NwZWVkRGlhbC52dWU/MTdjNmFkODYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLXNwZWVkLWRpYWwnLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwib25DbGlja1wiOiBfdm0uYWN0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP3tcImlkXCI6XCJkYXRhLXYtYTRkNjU4N2NcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNTcGVlZERpYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zQ2Fyb3VzZWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NmQwNmQ0NVxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zQ2Fyb3VzZWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNDYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy1jYXJvdXNlbCA6aW5pdGlhbC1pbmRleD1cImluZGV4XCIgQHBvc3RjaGFuZ2U9XCIkZW1pdCgndXBkYXRlJywgJGV2ZW50LmFjdGl2ZUluZGV4KVwiPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9vbnMtY2Fyb3VzZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoYXNPcHRpb25zLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuLi9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtoYXNPcHRpb25zLCBkZXJpdmVFdmVudHNdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIGluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgaW5kZXgoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLiRlbC5nZXRBY3RpdmVJbmRleCgpKSB7XG4gICAgICAgICAgdGhpcy4kZWwuc2V0QWN0aXZlSW5kZXgodGhpcy5pbmRleCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNDYXJvdXNlbC52dWU/NGJjMjcxYzIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLWNhcm91c2VsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImluaXRpYWwtaW5kZXhcIjogX3ZtLmluZGV4XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJwb3N0Y2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGVtaXQoJ3VwZGF0ZScsICRldmVudC5hY3RpdmVJbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi00NmQwNmQ0NVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc0Nhcm91c2VsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc1RhYi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XFxcImlkXFxcIjpcXFwiZGF0YS12LWM5ZmY4YjgwXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNUYWIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtdGFiIDphY3RpdmU9XCJhY3RpdmVcIiA6b24tY2xpY2sucHJvcD1cImFjdGlvblwiPlxuICA8L29ucy10YWI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5qZWN0OiBbJ3RhYmJhciddLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIHBhZ2U6IHsgfSxcbiAgICAgIGFjdGl2ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHJ1bkRlZmF1bHQgPSBmYWxzZSB9KTtcblxuICAgICAgICBpZiAocnVuRGVmYXVsdCkge1xuICAgICAgICAgIHRoaXMudGFiYmFyLiRlbC5zZXRBY3RpdmVUYWIodGhpcy4kZWwuX2ZpbmRUYWJJbmRleCgpLCB0aGlzLnRhYmJhci5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgYWN0aXZlKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA/IHRoaXMuJGVsLnNldEFjdGl2ZSgpIDogdGhpcy4kZWwuc2V0SW5hY3RpdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zVGFiLnZ1ZT8zMWRlZWRkZiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGl2ZVwiOiBfdm0uYWN0aXZlXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJvbkNsaWNrXCI6IF92bS5hY3Rpb25cbiAgICB9XG4gIH0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP3tcImlkXCI6XCJkYXRhLXYtYzlmZjhiODBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zVGFiYmFyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2EyNzY0ODNcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc1RhYmJhci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy10YWJiYXIgOmFjdGl2ZUluZGV4PVwiaW5kZXhcIiBAcG9zdGNoYW5nZT1cIiRlbWl0KCd1cGRhdGUnLCAkZXZlbnQuaW5kZXgpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhYmJhcl9fY29udGVudFwiPlxuICAgICAgPHNsb3QgbmFtZT1cInBhZ2VzXCI+XG4gICAgICAgIDxjb21wb25lbnQgdi1mb3I9XCJ0YWIgaW4gdGFic1wiIDppcz1cInRhYi5wYWdlXCIgOmtleT1cIih0YWIua2V5IHx8IHRhYi5wYWdlKVwiPjwvY29tcG9uZW50PlxuICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJiYXJcIj5cbiAgICAgIDxzbG90PlxuICAgICAgICA8di1vbnMtdGFiIHYtZm9yPVwidGFiIGluIHRhYnNcIiB2LWJpbmQ9XCJ0YWJcIiA6a2V5PVwiKHRhYi5rZXkgfHwgdGFiKVwiPjwvdi1vbnMtdGFiPlxuICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICA8L29ucy10YWJiYXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBkZXJpdmVFdmVudHMsIGhhc09wdGlvbnMsIGhpZGFibGUsIHNlbGZQcm92aWRlciB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2Rlcml2ZUV2ZW50cywgaGFzT3B0aW9ucywgaGlkYWJsZSwgc2VsZlByb3ZpZGVyXSxcblxuICAgIHByb3BzOiB7XG4gICAgICBpbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZXZlcnkodGFiID0+IFsnaWNvbicsICdsYWJlbCcsICdwYWdlJ10uc29tZShwcm9wID0+ICEhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YWIsIHByb3ApKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIGluZGV4KCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCAhPT0gdGhpcy4kZWwuZ2V0QWN0aXZlVGFiSW5kZXgoKSkge1xuICAgICAgICAgIHRoaXMuJGVsLnNldEFjdGl2ZVRhYih0aGlzLmluZGV4LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1RhYmJhci52dWU/ZTJjMGY2ZWEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy10YWJiYXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aXZlSW5kZXhcIjogX3ZtLmluZGV4XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJwb3N0Y2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGVtaXQoJ3VwZGF0ZScsICRldmVudC5pbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYmJhcl9fY29udGVudFwiXG4gIH0sIFtfdm0uX3QoXCJwYWdlc1wiLCBfdm0uX2woKF92bS50YWJzKSwgZnVuY3Rpb24odGFiKSB7XG4gICAgcmV0dXJuIF9jKHRhYi5wYWdlLCB7XG4gICAgICBrZXk6ICh0YWIua2V5IHx8IHRhYi5wYWdlKSxcbiAgICAgIHRhZzogXCJjb21wb25lbnRcIlxuICAgIH0pXG4gIH0pKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYmJhclwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIsIF92bS5fbCgoX3ZtLnRhYnMpLCBmdW5jdGlvbih0YWIpIHtcbiAgICByZXR1cm4gX2MoJ3Ytb25zLXRhYicsIF92bS5fYih7XG4gICAgICBrZXk6ICh0YWIua2V5IHx8IHRhYilcbiAgICB9LCAndi1vbnMtdGFiJywgdGFiKSlcbiAgfSkpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz97XCJpZFwiOlwiZGF0YS12LTNhMjc2NDgzXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zVGFiYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc0JhY2tCdXR0b24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NTkzZjFjNFxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zQmFja0J1dHRvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtYmFjay1idXR0b24gOm9uLWNsaWNrLnByb3A9XCJhY3Rpb25cIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLWJhY2stYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGluamVjdDogWyduYXZpZ2F0b3InXSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHJ1bkRlZmF1bHQgPSBmYWxzZSB9KTtcblxuICAgICAgICBpZiAocnVuRGVmYXVsdCkge1xuICAgICAgICAgIHRoaXMubmF2aWdhdG9yLnBhZ2VTdGFjay5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNCYWNrQnV0dG9uLnZ1ZT81NWVlOTRmYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtYmFjay1idXR0b24nLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwib25DbGlja1wiOiBfdm0uYWN0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP3tcImlkXCI6XCJkYXRhLXYtNTU5M2YxYzRcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNCYWNrQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc05hdmlnYXRvci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XFxcImlkXFxcIjpcXFwiZGF0YS12LTI1NWVmOWMyXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNOYXZpZ2F0b3IudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNOYXZpZ2F0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtbmF2aWdhdG9yPlxuICAgIDxzbG90PlxuICAgICAgPGNvbXBvbmVudCB2LWZvcj1cInBhZ2UgaW4gcGFnZVN0YWNrXCIgOmtleT1cInBhZ2VcIiA6aXM9XCJwYWdlXCI+PC9jb21wb25lbnQ+XG4gICAgPC9zbG90PlxuICA8L29ucy1uYXZpZ2F0b3I+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBkZXN0cm95YWJsZSwgaGFzT3B0aW9ucywgc2VsZlByb3ZpZGVyLCBkZXJpdmVFdmVudHMsIGRlcml2ZURCQiB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2Rlc3Ryb3lhYmxlLCBoYXNPcHRpb25zLCBzZWxmUHJvdmlkZXIsIGRlcml2ZUV2ZW50cywgZGVyaXZlREJCXSxcblxuICAgIHByb3BzOiB7XG4gICAgICBwYWdlU3RhY2s6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGlzUmVhZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdfcmVhZHknKSAmJiB0aGlzLl9yZWFkeSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSxcbiAgICAgIG9uRGV2aWNlQmFja0J1dHRvbihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMucGFnZVN0YWNrLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ZW50LmNhbGxQYXJlbnRIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfc2V0UGFnZXNWaXNpYmlsaXR5KHN0YXJ0LCBlbmQsIHZpc2liaWxpdHkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kIC0gMTsgaSsrKSB7XG4gICAgICAgICAgdGhpcy4kY2hpbGRyZW5baV0uJGVsLnN0eWxlLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3JlYXR0YWNoUGFnZShwYWdlRWxlbWVudCwgcG9zaXRpb24gPSBudWxsKSB7XG4gICAgICAgIHRoaXMuJGVsLmluc2VydEJlZm9yZShwYWdlRWxlbWVudCwgcG9zaXRpb24pO1xuICAgICAgICBwYWdlRWxlbWVudC5faXNTaG93biA9IHRydWU7XG4gICAgICB9LFxuICAgICAgX3JlZGV0YWNoUGFnZShwYWdlRWxlbWVudCkge1xuICAgICAgICBwYWdlRWxlbWVudC5fZGVzdHJveSgpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9LFxuICAgICAgX2FuaW1hdGUoeyBsYXN0TGVuZ3RoLCBjdXJyZW50TGVuZ3RoLCBsYXN0VG9wUGFnZSwgY3VycmVudFRvcFBhZ2V9KSB7XG5cbiAgICAgICAgLy8gUHVzaFxuICAgICAgICBpZiAoY3VycmVudExlbmd0aCA+IGxhc3RMZW5ndGgpIHtcbiAgICAgICAgICBsZXQgaXNSZWF0dGFjaGVkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGxhc3RUb3BQYWdlLnBhcmVudEVsZW1lbnQgIT09IHRoaXMuJGVsKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWF0dGFjaFBhZ2UobGFzdFRvcFBhZ2UsIHRoaXMuJGVsLmNoaWxkcmVuW2xhc3RMZW5ndGggLSAxXSk7XG4gICAgICAgICAgICBpc1JlYXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdExlbmd0aC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zZXRQYWdlc1Zpc2liaWxpdHkobGFzdExlbmd0aCwgY3VycmVudExlbmd0aCwgJ2hpZGRlbicpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLl9wdXNoUGFnZSh7IC4uLnRoaXMub3B0aW9ucywgbGVhdmVQYWdlOiBsYXN0VG9wUGFnZSB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9zZXRQYWdlc1Zpc2liaWxpdHkobGFzdExlbmd0aCwgY3VycmVudExlbmd0aCwgJycpO1xuICAgICAgICAgICAgICBpZiAoaXNSZWF0dGFjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVkZXRhY2hQYWdlKGxhc3RUb3BQYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3BcbiAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPCBsYXN0TGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fcmVhdHRhY2hQYWdlKGxhc3RUb3BQYWdlLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kZWwuX3BvcFBhZ2UodGhpcy5vcHRpb25zLCAoKSA9PiB0aGlzLl9yZWRldGFjaFBhZ2UobGFzdFRvcFBhZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgcGFnZVxuICAgICAgICB0aGlzLl9yZWF0dGFjaFBhZ2UobGFzdFRvcFBhZ2UsIGN1cnJlbnRUb3BQYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLl9wdXNoUGFnZSh0aGlzLm9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlZGV0YWNoUGFnZShsYXN0VG9wUGFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgcGFnZVN0YWNrKCkge1xuICAgICAgICBjb25zdCBsYXN0TGVuZ3RoID0gdGhpcy4kY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgbGFzdFRvcFBhZ2UgPSB0aGlzLiRjaGlsZHJlblt0aGlzLiRjaGlsZHJlbi5sZW5ndGggLSAxXS4kZWw7XG5cbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSB0aGlzLiRjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUb3BQYWdlID0gdGhpcy4kY2hpbGRyZW5bY3VycmVudExlbmd0aCAtIDFdLiRlbDtcblxuICAgICAgICAgIGlmIChjdXJyZW50VG9wUGFnZSAhPT0gbGFzdFRvcFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYWR5ID0gdGhpcy5fYW5pbWF0ZSh7IGxhc3RMZW5ndGgsIGN1cnJlbnRMZW5ndGgsIGxhc3RUb3BQYWdlLCBjdXJyZW50VG9wUGFnZX0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudExlbmd0aCAhPT0gbGFzdExlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudFRvcFBhZ2UudXBkYXRlQmFja0J1dHRvbihjdXJyZW50TGVuZ3RoID4gMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGFzdFRvcFBhZ2UgPSBjdXJyZW50VG9wUGFnZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNOYXZpZ2F0b3IudnVlPzFhNzUwYWE4IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtbmF2aWdhdG9yJywgW192bS5fdChcImRlZmF1bHRcIiwgX3ZtLl9sKChfdm0ucGFnZVN0YWNrKSwgZnVuY3Rpb24ocGFnZSkge1xuICAgIHJldHVybiBfYyhwYWdlLCB7XG4gICAgICBrZXk6IHBhZ2UsXG4gICAgICB0YWc6IFwiY29tcG9uZW50XCJcbiAgICB9KVxuICB9KSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz97XCJpZFwiOlwiZGF0YS12LTI1NWVmOWMyXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zTmF2aWdhdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNTcGxpdHRlclNpZGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjBlZWIyM1xcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zU3BsaXR0ZXJTaWRlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zU3BsaXR0ZXJTaWRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy1zcGxpdHRlci1zaWRlPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9vbnMtc3BsaXR0ZXItc2lkZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlc3Ryb3lhYmxlLCBoYXNPcHRpb25zLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuLi9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtkZXN0cm95YWJsZSwgaGFzT3B0aW9ucywgZGVyaXZlRXZlbnRzXSxcblxuICAgIHByb3BzOiB7XG4gICAgICBvcGVuOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBhY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZSgpICYmIHRoaXMuJGVsW3RoaXMub3BlbiA/ICdvcGVuJyA6ICdjbG9zZSddLmNhbGwodGhpcy4kZWwsIHRoaXMub3B0aW9ucykuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgfSxcbiAgICAgIF9zaG91bGRVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wZW4gIT09IHRoaXMuJGVsLmlzT3BlbjtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLiRvbihbJ3Bvc3RvcGVuJywgJ3Bvc3RjbG9zZSddLCAoKSA9PiB0aGlzLl9zaG91bGRVcGRhdGUoKSAmJiB0aGlzLiRlbWl0KCd1cGRhdGUnLCB0aGlzLiRlbC5pc09wZW4pKTtcblxuICAgICAgdGhpcy5hY3Rpb24oKTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zU3BsaXR0ZXJTaWRlLnZ1ZT8yNmJkMDdlNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtc3BsaXR0ZXItc2lkZScsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi0xYjBlZWIyM1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1NwbGl0dGVyU2lkZS52dWVcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zTGF6eVJlcGVhdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcigpIHsgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICByZW5kZXJJdGVtOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdmFsdWUoMCk7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5faXNWdWUgJiYgIWNvbXBvbmVudC5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNhbGN1bGF0ZUl0ZW1IZWlnaHQ6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZXI6IG51bGxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIF9zZXR1cCgpIHtcbiAgICAgICAgY29uc3QgZGVsZWdhdGUgPSBuZXcgdGhpcy4kb25zLl9vbnMuX2ludGVybmFsLkxhenlSZXBlYXREZWxlZ2F0ZSh7XG4gICAgICAgICAgY2FsY3VsYXRlSXRlbUhlaWdodDogdGhpcy5jYWxjdWxhdGVJdGVtSGVpZ2h0LFxuICAgICAgICAgIGNyZWF0ZUl0ZW1Db250ZW50OiBpID0+IHRoaXMucmVuZGVySXRlbShpKS4kbW91bnQoKS4kZWwsXG4gICAgICAgICAgZGVzdHJveUl0ZW06IChpLCB7IGVsZW1lbnQgfSkgPT4gZWxlbWVudC5fX3Z1ZV9fLiRkZXN0cm95KCksXG4gICAgICAgICAgY291bnRJdGVtczogKCkgPT4gdGhpcy5sZW5ndGhcbiAgICAgICAgfSwgbnVsbCk7XG5cbiAgICAgICAgdGhpcy5wcm92aWRlciA9IG5ldyB0aGlzLiRvbnMuX29ucy5faW50ZXJuYWwuTGF6eVJlcGVhdFByb3ZpZGVyKHRoaXMuJHBhcmVudC4kZWwsIGRlbGVnYXRlKTtcbiAgICAgIH0sXG4gICAgICByZWZyZXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICByZW5kZXJJdGVtKCkge1xuICAgICAgICB0aGlzLl9zZXR1cCgpO1xuICAgICAgfSxcbiAgICAgIGxlbmd0aCgpIHtcbiAgICAgICAgdGhpcy5fc2V0dXAoKTtcbiAgICAgIH0sXG4gICAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0KCkge1xuICAgICAgICB0aGlzLl9zZXR1cCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5fc2V0dXAoKTtcbiAgICAgIHRoaXMuJHZub2RlLmNvbnRleHQuJG9uKCdyZWZyZXNoJywgdGhpcy5yZWZyZXNoKTtcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgIHRoaXMuJHZub2RlLmNvbnRleHQuJG9mZigncmVmcmVzaCcsIHRoaXMucmVmcmVzaCk7XG4gICAgICB0aGlzLnByb3ZpZGVyICYmIHRoaXMucHJvdmlkZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNMYXp5UmVwZWF0LnZ1ZT9jN2FhODBjMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZHZW5lcmljLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTlmMDUyMjhcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVkdlbmVyaWMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZHZW5lcmljLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGNvbXBvbmVudCA6aXM9XCIkb3B0aW9ucy5fY29tcG9uZW50VGFnLnNsaWNlKDIpXCIgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJywgJGV2ZW50KVwiPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9jb21wb25lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBtb2RpZmllciwgZGVyaXZlRXZlbnRzIH0gZnJvbSAnLi4vbWl4aW5zJztcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW21vZGlmaWVyLCBkZXJpdmVFdmVudHNdXG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWR2VuZXJpYy52dWU/MzJmMGVkYmEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYyhfdm0uJG9wdGlvbnMuX2NvbXBvbmVudFRhZy5zbGljZSgyKSwge1xuICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRlbWl0KCdjbGljaycsICRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi0xOWYwNTIyOFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBPbnNNb2RlbCB9IGZyb20gJy4vVk9uc01vZGVsJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzIiwiLyogUHJpdmF0ZSAqL1xuY29uc3QgX2Zvcm1hdE91dHB1dCA9IChtb2RpZmllcnMgPSB7fSwgb3V0cHV0KSA9PiB7XG4gIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2RpZmllcnMsICdudW1iZXInKSkge1xuICAgIHJldHVybiBOdW1iZXIob3V0cHV0KTtcbiAgfVxuICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kaWZpZXJzLCAndHJpbScpKSB7XG4gICAgcmV0dXJuIG91dHB1dC50cmltKCk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG5jb25zdCBfYmluZE9uID0gKGV2ZW50TmFtZSwgbW9kZWxLZXksIHZub2RlLCBoYW5kbGVyKSA9PiB7XG4gIGlmICh2bm9kZS5jb250ZXh0Lmhhc093blByb3BlcnR5KG1vZGVsS2V5KSkge1xuICAgIHZub2RlLmNoaWxkLiRvbihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG59O1xuY29uc3QgX2JpbmRTaW1wbGVJbnB1dE9uID0gKGV2ZW50TmFtZSwgbW9kZWxLZXksIHZub2RlLCBwcm9wTmFtZSkgPT4ge1xuICBfYmluZE9uKGV2ZW50TmFtZSwgbW9kZWxLZXksIHZub2RlLCBldmVudCA9PiB7XG4gICAgdm5vZGUuY29udGV4dFttb2RlbEtleV0gPSBldmVudC50YXJnZXRbcHJvcE5hbWVdO1xuICB9KTtcbn07XG5jb25zdCBfYmluZE1vZGlmaWVySW5wdXRPbiA9IChldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgbW9kaWZpZXJzKSA9PiB7XG4gIF9iaW5kT24oZXZlbnROYW1lLCBtb2RlbEtleSwgdm5vZGUsIGV2ZW50ID0+IHtcbiAgICB2bm9kZS5jb250ZXh0W21vZGVsS2V5XSA9IF9mb3JtYXRPdXRwdXQobW9kaWZpZXJzLCBldmVudC50YXJnZXQudmFsdWUpO1xuICB9KTtcbn07XG5jb25zdCBfYmluZEFycmF5SW5wdXRPbiA9IChldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSkgPT4ge1xuICBfYmluZE9uKGV2ZW50TmFtZSwgbW9kZWxLZXksIHZub2RlLCBldmVudCA9PiB7XG4gICAgaWYgKHZub2RlLmNvbnRleHRbbW9kZWxLZXldLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKSA+PSAwKSB7XG4gICAgICAhZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgdm5vZGUuY29udGV4dFttb2RlbEtleV0uc3BsaWNlKHZub2RlLmNvbnRleHRbbW9kZWxLZXldLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jaGVja2VkICYmIHZub2RlLmNvbnRleHRbbW9kZWxLZXldLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IF9iaW5kQ2hlY2tib3ggPSAoZWwsIGJpbmRpbmcsIHZub2RlLCBtb2RlbEtleSkgPT4ge1xuICBpZiAoYmluZGluZy52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgZWwuY2hlY2tlZCA9IGJpbmRpbmcudmFsdWUuaW5kZXhPZihlbC52YWx1ZSkgPj0gMDtcbiAgICBfYmluZEFycmF5SW5wdXRPbignY2hhbmdlJywgbW9kZWxLZXksIHZub2RlKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5jaGVja2VkID0gISFiaW5kaW5nLnZhbHVlO1xuICAgIF9iaW5kU2ltcGxlSW5wdXRPbignY2hhbmdlJywgbW9kZWxLZXksIHZub2RlLCAnY2hlY2tlZCcpO1xuICB9XG59O1xuY29uc3QgX3VwZGF0ZUNoZWNrYm94ID0gKGVsLCBiaW5kaW5nLCB2bm9kZSwgbW9kZWxLZXkpID0+IHtcbiAgaWYgKGJpbmRpbmcudmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGVsLmNoZWNrZWQgPSAodm5vZGUuY29udGV4dFttb2RlbEtleV0gfHwgW10pLmluZGV4T2YoZWwudmFsdWUpID49IDA7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2hlY2tlZCA9ICEhYmluZGluZy52YWx1ZTtcbiAgfVxufTtcblxuLyogUHVibGljICovXG4vLyBWT25zTW9kZWwgZGlyZWN0aXZlXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgY29uc3QgbW9kZWxLZXkgPSBiaW5kaW5nLmV4cHJlc3Npb24udHJpbSgpO1xuICAgIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICBjYXNlICdvbnMtc2VsZWN0JzpcbiAgICAgICAgZWwucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPScgKyBiaW5kaW5nLnZhbHVlICsgJ10nKS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgIF9iaW5kU2ltcGxlSW5wdXRPbignY2hhbmdlJywgbW9kZWxLZXksIHZub2RlLCAndmFsdWUnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29ucy1zd2l0Y2gnOlxuICAgICAgICBfYmluZENoZWNrYm94KGVsLCBiaW5kaW5nLCB2bm9kZSwgbW9kZWxLZXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXJhbmdlJzpcbiAgICAgICAgZWwudmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICBfYmluZE1vZGlmaWVySW5wdXRPbihPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChiaW5kaW5nLm1vZGlmaWVycywgJ2xhenknKSA/ICdjaGFuZ2UnIDogJ2lucHV0JywgbW9kZWxLZXksIHZub2RlLCBiaW5kaW5nLm1vZGlmaWVycyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvbnMtaW5wdXQnOlxuICAgICAgICBzd2l0Y2ggKGVsLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICBlbC5jaGVja2VkID0gZWwudmFsdWUgPT09IGJpbmRpbmcudmFsdWU7XG4gICAgICAgICAgICBfYmluZFNpbXBsZUlucHV0T24oJ2NoYW5nZScsIG1vZGVsS2V5LCB2bm9kZSwgJ3ZhbHVlJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgIF9iaW5kQ2hlY2tib3goZWwsIGJpbmRpbmcsIHZub2RlLCBtb2RlbEtleSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGJpbmRpbmcudmFsdWU7XG4gICAgICAgICAgICBfYmluZE1vZGlmaWVySW5wdXRPbihPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChiaW5kaW5nLm1vZGlmaWVycywgJ2xhenknKSA/ICdjaGFuZ2UnIDogJ2lucHV0JywgbW9kZWxLZXksIHZub2RlLCBiaW5kaW5nLm1vZGlmaWVycyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJ2LW9ucy1tb2RlbFwiIGRpcmVjdGl2ZSBjYW5ub3QgYmUgdXNlZCB3aXRoIFwiJyArIHRhZyArICdcIiBlbGVtZW50LicpO1xuICAgIH1cbiAgfSxcblxuICAvKlxuICAgKiBDYXV0aW9uOlxuICAgKiBUaGlzIGhvb2sgaXMgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHZpZXcgY2hhbmdlcyBzaW5jZVxuICAgKiB0aGUgZGlyZWN0aXZlJ3MgdmFsdWUgaXMgdXBkYXRlZCBpbiB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAqXG4gICAqIEFsc28sIG9ubHkgMSBpbnN0YW5jZSBvZiB0aGlzIGRpcmVjdGl2ZSBleGlzdHMuIFRoZXJlZm9yZSxcbiAgICogaXQgaXMgY2FsbGVkIGZvciBldmVyeSBjb21wb25lbnQgd2hlbmV2ZXIgMSBzaW5nbGVcbiAgICogY29tcG9uZW50IHVzaW5nIHRoaXMgZGlyZWN0aXZlIGlzIHVwZGF0ZWQuXG4gICAqL1xuICB1cGRhdGUoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgY29uc3QgbW9kZWxLZXkgPSBiaW5kaW5nLmV4cHJlc3Npb24udHJpbSgpO1xuICAgIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICBjYXNlICdvbnMtc2VsZWN0JzpcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7IG9wdGlvbi52YWx1ZSA9PSBiaW5kaW5nLnZhbHVlID8gb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKSA6IG9wdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvbnMtc3dpdGNoJzpcbiAgICAgICAgX3VwZGF0ZUNoZWNrYm94KGVsLCBiaW5kaW5nLCB2bm9kZSwgbW9kZWxLZXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXJhbmdlJzpcbiAgICAgICAgZWwudmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLWlucHV0JzpcbiAgICAgICAgc3dpdGNoIChlbC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHZub2RlLmNvbnRleHRbbW9kZWxLZXldID09PSBlbC52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgX3VwZGF0ZUNoZWNrYm94KGVsLCBiaW5kaW5nLCB2bm9kZSwgbW9kZWxLZXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWwudmFsdWUgIT09IGJpbmRpbmcudmFsdWUgJiYgKGVsLnZhbHVlID0gYmluZGluZy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvVk9uc01vZGVsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==