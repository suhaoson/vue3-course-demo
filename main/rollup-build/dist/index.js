function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var _PatchFlagNames, _slotFlagsText;
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

/**
 * dev only flag -> name mapping
 */
(_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1 /* PatchFlags.TEXT */, "TEXT"), _defineProperty(_PatchFlagNames, 2 /* PatchFlags.CLASS */, "CLASS"), _defineProperty(_PatchFlagNames, 4 /* PatchFlags.STYLE */, "STYLE"), _defineProperty(_PatchFlagNames, 8 /* PatchFlags.PROPS */, "PROPS"), _defineProperty(_PatchFlagNames, 16 /* PatchFlags.FULL_PROPS */, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32 /* PatchFlags.HYDRATE_EVENTS */, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64 /* PatchFlags.STABLE_FRAGMENT */, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128 /* PatchFlags.KEYED_FRAGMENT */, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256 /* PatchFlags.UNKEYED_FRAGMENT */, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512 /* PatchFlags.NEED_PATCH */, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024 /* PatchFlags.DYNAMIC_SLOTS */, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1 /* PatchFlags.HOISTED */, "HOISTED"), _defineProperty(_PatchFlagNames, -2 /* PatchFlags.BAIL */, "BAIL"), _PatchFlagNames);

/**
 * Dev only
 */
(_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1 /* SlotFlags.STABLE */, 'STABLE'), _defineProperty(_slotFlagsText, 2 /* SlotFlags.DYNAMIC */, 'DYNAMIC'), _defineProperty(_slotFlagsText, 3 /* SlotFlags.FORWARDED */, 'FORWARDED'), _slotFlagsText);
function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};
    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[\s\S]*?\*\//g;
function parseStringStyle(cssText) {
  var ret = {};
  cssText.replace(styleCommentRE, '').split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  var res = '';
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      var normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }
  return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `("development" !== 'production')` flag.
 */
var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `("development" !== 'production')` flag.
 */
var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
  return !!value || value === '';
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
var toDisplayString = function toDisplayString(val) {
  return isString(val) ? val : val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = function replacer(_key, val) {
  // can't use isRef here since @vue/shared has no deps
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];
      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
var EMPTY_OBJ = Object.freeze({}) ;
var EMPTY_ARR = Object.freeze([]) ;
var NOOP = function NOOP() {};
/**
 * Always return false.
 */
var NO = function NO() {
  return false;
};
var onRE = /^on[^a-z]/;
var isOn = function isOn(key) {
  return onRE.test(key);
};
var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};
var extend = Object.assign;
var remove = function remove(arr, el) {
  var i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty$1.call(val, key);
};
var isArray = Array.isArray;
var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};
var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};
var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
var isString = function isString(val) {
  return typeof val === 'string';
};
var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};
var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};
var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
};
var objectToString = Object.prototype.toString;
var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};
var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};
var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};
var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};
var isReservedProp = /*#__PURE__*/makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');
var isBuiltInDirective = /*#__PURE__*/makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
/**
 * @private
 */
var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */
var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */
var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
});
// compare whether a value has changed, accounting for NaN.
var hasChanged = function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue);
};
var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};
/**
 * "123-foo" will be parsed to 123
 * This is used for the .number modifier in v-model
 */
var looseToNumber = function looseToNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};

function warn$1(msg) {
  var _console;
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  (_console = console).warn.apply(_console, ["[Vue warn] ".concat(msg)].concat(args));
}
var activeEffectScope;
var EffectScope = /*#__PURE__*/function () {
  function EffectScope() {
    var detached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    _classCallCheck(this, EffectScope);
    this.detached = detached;
    /**
     * @internal
     */
    this._active = true;
    /**
     * @internal
     */
    this.effects = [];
    /**
     * @internal
     */
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  _createClass(EffectScope, [{
    key: "active",
    get: function get() {
      return this._active;
    }
  }, {
    key: "run",
    value: function run(fn) {
      if (this._active) {
        var currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else {
        warn$1("cannot run an inactive effect scope.");
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
  }, {
    key: "on",
    value: function on() {
      activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
  }, {
    key: "off",
    value: function off() {
      activeEffectScope = this.parent;
    }
  }, {
    key: "stop",
    value: function stop(fromParent) {
      if (this._active) {
        var i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        }
        // nested scope, dereference from parent to avoid memory leaks
        if (!this.detached && this.parent && !fromParent) {
          // optimized O(1) removal
          var last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = undefined;
        this._active = false;
      }
    }
  }]);
  return EffectScope;
}();
function recordEffectScope(effect) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activeEffectScope;
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
var createDep = function createDep(effects) {
  var dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
var wasTracked = function wasTracked(dep) {
  return (dep.w & trackOpBit) > 0;
};
var newTracked = function newTracked(dep) {
  return (dep.n & trackOpBit) > 0;
};
var initDepMarkers = function initDepMarkers(_ref) {
  var deps = _ref.deps;
  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit; // set was tracked
    }
  }
};

var finalizeDepMarkers = function finalizeDepMarkers(effect) {
  var deps = effect.deps;
  if (deps.length) {
    var ptr = 0;
    for (var i = 0; i < deps.length; i++) {
      var dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep["delete"](effect);
      } else {
        deps[ptr++] = dep;
      }
      // clear bits
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
var targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
var effectTrackDepth = 0;
var trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
var maxMarkerBits = 30;
var activeEffect;
var ITERATE_KEY = Symbol('iterate' );
var MAP_KEY_ITERATE_KEY = Symbol('Map key iterate' );
var ReactiveEffect = /*#__PURE__*/function () {
  function ReactiveEffect(fn) {
    var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var scope = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, ReactiveEffect);
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = undefined;
    recordEffectScope(this, scope);
  }
  _createClass(ReactiveEffect, [{
    key: "run",
    value: function run() {
      if (!this.active) {
        return this.fn();
      }
      var parent = activeEffect;
      var lastShouldTrack = shouldTrack;
      while (parent) {
        if (parent === this) {
          return;
        }
        parent = parent.parent;
      }
      try {
        this.parent = activeEffect;
        activeEffect = this;
        shouldTrack = true;
        trackOpBit = 1 << ++effectTrackDepth;
        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }
        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }
        trackOpBit = 1 << --effectTrackDepth;
        activeEffect = this.parent;
        shouldTrack = lastShouldTrack;
        this.parent = undefined;
        if (this.deferStop) {
          this.stop();
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      // stopped while running itself - defer the cleanup
      if (activeEffect === this) {
        this.deferStop = true;
      } else if (this.active) {
        cleanupEffect(this);
        if (this.onStop) {
          this.onStop();
        }
        this.active = false;
      }
    }
  }]);
  return ReactiveEffect;
}();
function cleanupEffect(effect) {
  var deps = effect.deps;
  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i]["delete"](effect);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    var depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }
    var dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    var eventInfo = {
      effect: activeEffect,
      target: target,
      type: type,
      key: key
    } ;
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  var shouldTrack = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit; // set newly tracked
      shouldTrack = !wasTracked(dep);
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
  }
  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({
        effect: activeEffect
      }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);
  if (!depsMap) {
    // never been tracked
    return;
  }
  var deps = [];
  if (type === "clear" /* TriggerOpTypes.CLEAR */) {
    // collection being cleared
    // trigger all effects for target
    deps = _toConsumableArray(depsMap.values());
  } else if (key === 'length' && isArray(target)) {
    var newLength = Number(newValue);
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    // also run for iteration key on ADD | DELETE | Map.SET
    switch (type) {
      case "add" /* TriggerOpTypes.ADD */:
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          // new index added to array -> length changes
          deps.push(depsMap.get('length'));
        }
        break;
      case "delete" /* TriggerOpTypes.DELETE */:
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set" /* TriggerOpTypes.SET */:
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  var eventInfo = {
    target: target,
    type: type,
    key: key,
    newValue: newValue,
    oldValue: oldValue,
    oldTarget: oldTarget
  } ;
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    var effects = [];
    var _iterator = _createForOfIteratorHelper(deps),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dep = _step.value;
        if (dep) {
          effects.push.apply(effects, _toConsumableArray(dep));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  // spread into array for stabilization
  var effects = isArray(dep) ? dep : _toConsumableArray(dep);
  var _iterator2 = _createForOfIteratorHelper(effects),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _effect2 = _step2.value;
      if (_effect2.computed) {
        triggerEffect(_effect2, debuggerEventExtraInfo);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(effects),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _effect3 = _step3.value;
      if (!_effect3.computed) {
        triggerEffect(_effect3, debuggerEventExtraInfo);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend({
        effect: effect
      }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
var isNonTrackableKeys = /*#__PURE__*/makeMap("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set( /*#__PURE__*/
Object.getOwnPropertyNames(Symbol)
// ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
// but accessing them on Symbol leads to TypeError because Symbol is a strict mode
// function
.filter(function (key) {
  return key !== 'arguments' && key !== 'caller';
}).map(function (key) {
  return Symbol[key];
}).filter(isSymbol));
var get$1 = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();
function createArrayInstrumentations() {
  var instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
    instrumentations[key] = function () {
      var arr = toRaw(this);
      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get" /* TrackOpTypes.GET */, i + '');
      }
      // we run the method using the original args first (which may be reactive)
      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var res = arr[key].apply(arr, args);
      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key].apply(arr, _toConsumableArray(args.map(toRaw)));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
    instrumentations[key] = function () {
      pauseTracking();
      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  var obj = toRaw(this);
  track(obj, "has" /* TrackOpTypes.HAS */, key);
  return obj.hasOwnProperty(key);
}
function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */) {
      return !isReadonly;
    } else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */) {
      return isReadonly;
    } else if (key === "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */) {
      return shallow;
    } else if (key === "__v_raw" /* ReactiveFlags.RAW */ && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    var targetIsArray = isArray(target);
    if (!isReadonly) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === 'hasOwnProperty') {
        return hasOwnProperty;
      }
    }
    var res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get" /* TrackOpTypes.GET */, key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      // ref unwrapping - skip unwrap for Array + integer key.
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }
    return res;
  };
}
var set$1 = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);
function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow$1(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    var hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    var result = Reflect.set(target, key, value, receiver);
    // don't trigger if target is something up in the prototype chain of original
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add" /* TriggerOpTypes.ADD */, key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set" /* TriggerOpTypes.SET */, key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  var hadKey = hasOwn(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete" /* TriggerOpTypes.DELETE */, key, undefined, oldValue);
  }
  return result;
}
function has$1(target, key) {
  var result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has" /* TrackOpTypes.HAS */, key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate" /* TrackOpTypes.ITERATE */, isArray(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty: deleteProperty,
  has: has$1,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    {
      warn$1("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    {
      warn$1("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }
    return true;
  }
};
var shallowReactiveHandlers = /*#__PURE__*/extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
var shallowReadonlyHandlers = /*#__PURE__*/extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
var toShallow = function toShallow(value) {
  return value;
};
var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};
function _get(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw" /* ReactiveFlags.RAW */];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);
  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "get" /* TrackOpTypes.GET */, key);
    }
    track(rawTarget, "get" /* TrackOpTypes.GET */, rawKey);
  }
  var _getProto = getProto(rawTarget),
    has = _getProto.has;
  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}
function _has(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw" /* ReactiveFlags.RAW */];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);
  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "has" /* TrackOpTypes.HAS */, key);
    }
    track(rawTarget, "has" /* TrackOpTypes.HAS */, rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw" /* ReactiveFlags.RAW */];
  !isReadonly && track(toRaw(target), "iterate" /* TrackOpTypes.ITERATE */, ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}
function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add" /* TriggerOpTypes.ADD */, value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  var target = toRaw(this);
  var _getProto2 = getProto(target),
    has = _getProto2.has,
    get = _getProto2.get;
  var hadKey = has.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else {
    checkIdentityKeys(target, has, key);
  }
  var oldValue = get.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add" /* TriggerOpTypes.ADD */, key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set" /* TriggerOpTypes.SET */, key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  var target = toRaw(this);
  var _getProto3 = getProto(target),
    has = _getProto3.has,
    get = _getProto3.get;
  var hadKey = has.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else {
    checkIdentityKeys(target, has, key);
  }
  var oldValue = get ? get.call(target, key) : undefined;
  // forward the operation before queueing reactions
  var result = target["delete"](key);
  if (hadKey) {
    trigger(target, "delete" /* TriggerOpTypes.DELETE */, key, undefined, oldValue);
  }
  return result;
}
function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget = isMap(target) ? new Map(target) : new Set(target) ;
  // forward the operation before queueing reactions
  var result = target.clear();
  if (hadItems) {
    trigger(target, "clear" /* TriggerOpTypes.CLEAR */, undefined, undefined, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw" /* ReactiveFlags.RAW */];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */, ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw" /* ReactiveFlags.RAW */];
    var rawTarget = toRaw(target);
    var targetIsMap = isMap(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator
    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
          value = _innerIterator$next.value,
          done = _innerIterator$next.done;
        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}
function createReadonlyMethod(type) {
  return function () {
    {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat(capitalize(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }
    return type === "delete" /* TriggerOpTypes.DELETE */ ? false : this;
  };
}
function createInstrumentations() {
  var mutableInstrumentations = {
    get: function get(key) {
      return _get(this, key);
    },
    get size() {
      return size(this);
    },
    has: _has,
    add: add,
    set: set,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get: function get(key) {
      return _get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: _has,
    add: add,
    set: set,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get: function get(key) {
      return _get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has: function has(key) {
      return _has.call(this, key, true);
    },
    add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */),
    set: createReadonlyMethod("set" /* TriggerOpTypes.SET */),
    "delete": createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */),
    clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get: function get(key) {
      return _get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has: function has(key) {
      return _has.call(this, key, true);
    },
    add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */),
    set: createReadonlyMethod("set" /* TriggerOpTypes.SET */),
    "delete": createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */),
    clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(function (method) {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}
var _createInstrumentatio = /* #__PURE__*/createInstrumentations(),
  _createInstrumentatio2 = _slicedToArray(_createInstrumentatio, 4),
  mutableInstrumentations = _createInstrumentatio2[0],
  readonlyInstrumentations = _createInstrumentatio2[1],
  shallowInstrumentations = _createInstrumentatio2[2],
  shallowReadonlyInstrumentations = _createInstrumentatio2[3];
function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */) {
      return !isReadonly;
    } else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */) {
      return isReadonly;
    } else if (key === "__v_raw" /* ReactiveFlags.RAW */) {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);
  if (rawKey !== key && has.call(target, rawKey)) {
    var type = toRawType(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}
var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1 /* TargetType.COMMON */;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2 /* TargetType.COLLECTION */;
    default:
      return 0 /* TargetType.INVALID */;
  }
}

function getTargetType(value) {
  return value["__v_skip" /* ReactiveFlags.SKIP */] || !Object.isExtensible(value) ? 0 /* TargetType.INVALID */ : targetTypeMap(toRawType(value));
}
function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }
    return target;
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  if (target["__v_raw" /* ReactiveFlags.RAW */] && !(isReadonly && target["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */])) {
    return target;
  }
  // target already has corresponding Proxy
  var existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  // only specific value types can be observed.
  var targetType = getTargetType(target);
  if (targetType === 0 /* TargetType.INVALID */) {
    return target;
  }
  var proxy = new Proxy(target, targetType === 2 /* TargetType.COLLECTION */ ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
  }

  return !!(value && value["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly" /* ReactiveFlags.IS_READONLY */]);
}

function isShallow$1(value) {
  return !!(value && value["__v_isShallow" /* ReactiveFlags.IS_SHALLOW */]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  var raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
  return value;
}
var toReactive = function toReactive(value) {
  return isObject(value) ? reactive(value) : value;
};
var toReadonly = function toReadonly(value) {
  return isObject(value) ? readonly(value) : value;
};
function trackRefValue(ref) {
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref);
    {
      trackEffects(ref.dep || (ref.dep = createDep()), {
        target: ref,
        type: "get" /* TrackOpTypes.GET */,
        key: 'value'
      });
    }
  }
}
function triggerRefValue(ref, newVal) {
  ref = toRaw(ref);
  var dep = ref.dep;
  if (dep) {
    {
      triggerEffects(dep, {
        target: ref,
        type: "set" /* TriggerOpTypes.SET */,
        key: 'value',
        newValue: newVal
      });
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}
var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a$1;
var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly, isSSR) {
    var _this2 = this;
    _classCallCheck(this, ComputedRefImpl);
    this._setter = _setter;
    this.dep = undefined;
    this.__v_isRef = true;
    this[_a$1] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, function () {
      if (!_this2._dirty) {
        _this2._dirty = true;
        triggerRefValue(_this2);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly" /* ReactiveFlags.IS_READONLY */] = isReadonly;
  }
  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);
      trackRefValue(self);
      if (self._dirty || !self._cacheable) {
        self._dirty = false;
        self._value = self.effect.run();
      }
      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);
  return ComputedRefImpl;
}();
_a$1 = "__v_isReadonly" /* ReactiveFlags.IS_READONLY */;
function computed$1(getterOrOptions, debugOptions) {
  var isSSR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getter;
  var setter;
  var onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = function () {
      console.warn('Write operation failed: computed value is readonly');
    } ;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}

var _ErrorTypeStrings;
var stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  pauseTracking();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11 /* ErrorCodes.APP_WARN_HANDLER */, [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;
    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */
    if (trace.length &&
    // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
    }
    (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
  }
  resetTracking();
}
function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.
  var normalizedStack = [];
  while (currentVNode) {
    var last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
  });
  return logs;
}
function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
    recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
  });
  if (keys.length > 3) {
    res.push(" ...");
  }
  return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if (isFunction(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = toRaw(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}
var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty(_ErrorTypeStrings, "sp" /* LifecycleHooks.SERVER_PREFETCH */, 'serverPrefetch hook'), _defineProperty(_ErrorTypeStrings, "bc" /* LifecycleHooks.BEFORE_CREATE */, 'beforeCreate hook'), _defineProperty(_ErrorTypeStrings, "c" /* LifecycleHooks.CREATED */, 'created hook'), _defineProperty(_ErrorTypeStrings, "bm" /* LifecycleHooks.BEFORE_MOUNT */, 'beforeMount hook'), _defineProperty(_ErrorTypeStrings, "m" /* LifecycleHooks.MOUNTED */, 'mounted hook'), _defineProperty(_ErrorTypeStrings, "bu" /* LifecycleHooks.BEFORE_UPDATE */, 'beforeUpdate hook'), _defineProperty(_ErrorTypeStrings, "u" /* LifecycleHooks.UPDATED */, 'updated'), _defineProperty(_ErrorTypeStrings, "bum" /* LifecycleHooks.BEFORE_UNMOUNT */, 'beforeUnmount hook'), _defineProperty(_ErrorTypeStrings, "um" /* LifecycleHooks.UNMOUNTED */, 'unmounted hook'), _defineProperty(_ErrorTypeStrings, "a" /* LifecycleHooks.ACTIVATED */, 'activated hook'), _defineProperty(_ErrorTypeStrings, "da" /* LifecycleHooks.DEACTIVATED */, 'deactivated hook'), _defineProperty(_ErrorTypeStrings, "ec" /* LifecycleHooks.ERROR_CAPTURED */, 'errorCaptured hook'), _defineProperty(_ErrorTypeStrings, "rtc" /* LifecycleHooks.RENDER_TRACKED */, 'renderTracked hook'), _defineProperty(_ErrorTypeStrings, "rtg" /* LifecycleHooks.RENDER_TRIGGERED */, 'renderTriggered hook'), _defineProperty(_ErrorTypeStrings, 0 /* ErrorCodes.SETUP_FUNCTION */, 'setup function'), _defineProperty(_ErrorTypeStrings, 1 /* ErrorCodes.RENDER_FUNCTION */, 'render function'), _defineProperty(_ErrorTypeStrings, 2 /* ErrorCodes.WATCH_GETTER */, 'watcher getter'), _defineProperty(_ErrorTypeStrings, 3 /* ErrorCodes.WATCH_CALLBACK */, 'watcher callback'), _defineProperty(_ErrorTypeStrings, 4 /* ErrorCodes.WATCH_CLEANUP */, 'watcher cleanup function'), _defineProperty(_ErrorTypeStrings, 5 /* ErrorCodes.NATIVE_EVENT_HANDLER */, 'native event handler'), _defineProperty(_ErrorTypeStrings, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */, 'component event handler'), _defineProperty(_ErrorTypeStrings, 7 /* ErrorCodes.VNODE_HOOK */, 'vnode hook'), _defineProperty(_ErrorTypeStrings, 8 /* ErrorCodes.DIRECTIVE_HOOK */, 'directive hook'), _defineProperty(_ErrorTypeStrings, 9 /* ErrorCodes.TRANSITION_HOOK */, 'transition hook'), _defineProperty(_ErrorTypeStrings, 10 /* ErrorCodes.APP_ERROR_HANDLER */, 'app errorHandler'), _defineProperty(_ErrorTypeStrings, 11 /* ErrorCodes.APP_WARN_HANDLER */, 'app warnHandler'), _defineProperty(_ErrorTypeStrings, 12 /* ErrorCodes.FUNCTION_REF */, 'ref function'), _defineProperty(_ErrorTypeStrings, 13 /* ErrorCodes.ASYNC_COMPONENT_LOADER */, 'async component loader'), _defineProperty(_ErrorTypeStrings, 14 /* ErrorCodes.SCHEDULER */, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'), _ErrorTypeStrings);
function callWithErrorHandling(fn, instance, type, args) {
  var res;
  try {
    res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res["catch"](function (err) {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  var values = [];
  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;
  if (instance) {
    var cur = instance.parent;
    // the exposed instance is the render proxy to keep it consistent with 2.x
    var exposedInstance = instance.proxy;
    // in production the hook receives only the error code
    var errorInfo = ErrorTypeStrings[type] ;
    while (cur) {
      var errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    // app-level handling
    var appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10 /* ErrorCodes.APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  {
    var info = ErrorTypeStrings[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));
    if (contextVNode) {
      popWarningContext();
    }
    // crash in dev by default so it's more noticeable
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}
var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /*#__PURE__*/Promise.resolve();
var currentFlushPromise = null;
var RECURSION_LIMIT = 100;
function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
  // the start index should be `flushIndex + 1`
  var start = flushIndex + 1;
  var end = queue.length;
  while (start < end) {
    var middle = start + end >>> 1;
    var middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  var i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingPostFlushCbs.push.apply(pendingPostFlushCbs, _toConsumableArray(cb));
  }
  queueFlush();
}
function flushPreFlushCbs(seen) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isFlushing ? flushIndex + 1 : 0;
  {
    seen = seen || new Map();
  }
  for (; i < queue.length; i++) {
    var cb = queue[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));
    pendingPostFlushCbs.length = 0;
    // #1947 already has active queue, nested flushPostFlushCbs call
    if (activePostFlushCbs) {
      var _activePostFlushCbs;
      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || new Map();
    }
    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};
var comparator = function comparator(a, b) {
  var diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre) return -1;
    if (b.pre && !a.pre) return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || new Map();
  }
  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.
  queue.sort(comparator);
  // conditional usage of checkRecursiveUpdate must be determined out of
  // try ... catch block since Rollup by default de-optimizes treeshaking
  // inside try-catch. This can leave all warning code unshaked. Although
  // they would get eventually shaken by a minifier like terser, some minifiers
  // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
  var check = function (job) {
    return checkRecursiveUpdates(seen, job);
  } ;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];
      if (job && job.active !== false) {
        if ("development" !== 'production' && check(job)) {
          continue;
        }
        // console.log(`running:`, job.id)
        callWithErrorHandling(job, null, 14 /* ErrorCodes.SCHEDULER */);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    // some postFlushCb queued jobs!
    // keep flushing until it drains.
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      warn("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". ") + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}

/* eslint-disable no-restricted-globals */
var isHmrUpdating = false;
var hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
var map = new Map();
function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances["delete"](instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  var record = map.get(id);
  if (!record) {
    return;
  }
  // update initial record (for not-yet-rendered component)
  record.initialDef.render = newRender;
  _toConsumableArray(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    // this flag forces child components with slot content to update
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  // update initial def (for not-yet-rendered components)
  updateComponentDef(record.initialDef, newComp);
  // create a snapshot which avoids the set being mutated during updates
  var instances = _toConsumableArray(record.instances);
  var _iterator = _createForOfIteratorHelper(instances),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var instance = _step.value;
      var oldComp = normalizeClassComponent(instance.type);
      if (!hmrDirtyComponents.has(oldComp)) {
        // 1. Update existing comp definition to match new one
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        // 2. mark definition dirty. This forces the renderer to replace the
        // component on patch.
        hmrDirtyComponents.add(oldComp);
      }
      // 3. invalidate options resolution cache
      instance.appContext.optionsCache["delete"](instance.type);
      // 4. actually update
      if (instance.ceReload) {
        // custom element
        hmrDirtyComponents.add(oldComp);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents["delete"](oldComp);
      } else if (instance.parent) {
        // 4. Force the parent instance to re-render. This will cause all updated
        // components to be unmounted and re-mounted. Queue the update so that we
        // don't end up forcing the same parent to re-render multiple times.
        queueJob(instance.parent.update);
      } else if (instance.appContext.reload) {
        // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
      } else if (typeof window !== 'undefined') {
        // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
      } else {
        console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
      }
    }
    // 5. make sure to cleanup dirty hmr components after update
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  queuePostFlushCb(function () {
    var _iterator2 = _createForOfIteratorHelper(instances),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var instance = _step2.value;
        hmrDirtyComponents["delete"](normalizeClassComponent(instance.type));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (var key in oldComp) {
    if (key !== '__file' && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}
var devtools;
var buffer = [];
var devtoolsNotInstalled = false;
function emit$1(event) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (devtools) {
    var _devtools;
    (_devtools = devtools).emit.apply(_devtools, [event].concat(args));
  } else if (!devtoolsNotInstalled) {
    buffer.push({
      event: event,
      args: args
    });
  }
}
function setDevtoolsHook(hook, target) {
  var _a, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(function (_ref3) {
      var _devtools2;
      var event = _ref3.event,
        args = _ref3.args;
      return (_devtools2 = devtools).emit.apply(_devtools2, [event].concat(_toConsumableArray(args)));
    });
    buffer = [];
  } else if (
  // handle late devtools injection - only do this if we are in an actual
  // browser environment to avoid the timer handle stalling test runner exit
  // (#4815)
  typeof window !== 'undefined' &&
  // some envs mock window but not fully
  window.HTMLElement &&
  // also exclude jsdom
  !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
    var replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push(function (newHook) {
      setDevtoolsHook(newHook, target);
    });
    // clear buffer after 3s - the user probably doesn't have devtools installed
    // at all, and keeping the buffer will cause memory leaks (#4738)
    setTimeout(function () {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3000);
  } else {
    // non-browser env, assume not installed
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version) {
  emit$1("app:init" /* DevtoolsHooks.APP_INIT */, app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment,
    Static: Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount" /* DevtoolsHooks.APP_UNMOUNT */, app);
}
var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added" /* DevtoolsHooks.COMPONENT_ADDED */);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated" /* DevtoolsHooks.COMPONENT_UPDATED */);
var _devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed" /* DevtoolsHooks.COMPONENT_REMOVED */);
var devtoolsComponentRemoved = function devtoolsComponentRemoved(component) {
  if (devtools && typeof devtools.cleanupBuffer === 'function' &&
  // remove the component if it wasn't buffered
  !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
function createDevtoolsComponentHook(hook) {
  return function (component) {
    emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}
var devtoolsPerfStart = /*#__PURE__*/createDevtoolsPerformanceHook("perf:start" /* DevtoolsHooks.PERFORMANCE_START */);
var devtoolsPerfEnd = /*#__PURE__*/createDevtoolsPerformanceHook("perf:end" /* DevtoolsHooks.PERFORMANCE_END */);
function createDevtoolsPerformanceHook(hook) {
  return function (component, type, time) {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1("component:emit" /* DevtoolsHooks.COMPONENT_EMIT */, component.appContext.app, component, event, params);
}
function emit(instance, event) {
  if (instance.isUnmounted) return;
  var props = instance.vnode.props || EMPTY_OBJ;
  for (var _len3 = arguments.length, rawArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    rawArgs[_key3 - 2] = arguments[_key3];
  }
  {
    var emitsOptions = instance.emitsOptions,
      _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption[0];
    if (emitsOptions) {
      if (!(event in emitsOptions) && !false) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat(toHandlerKey(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];
        if (isFunction(validator)) {
          var isValid = validator.apply(void 0, rawArgs);
          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }
  var args = rawArgs;
  var isModelListener = event.startsWith('update:');
  // for v-model update:xxx events, apply modifiers on args
  var modelArg = isModelListener && event.slice(7);
  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");
    var _ref4 = props[modifiersKey] || EMPTY_OBJ,
      number = _ref4.number,
      trim = _ref4.trim;
    if (trim) {
      args = rawArgs.map(function (a) {
        return isString(a) ? a.trim() : a;
      });
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    var lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
    }
  }
  var handlerName;
  var handler = props[handlerName = toHandlerKey(event)] ||
  // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case
  if (!handler && isModelListener) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */, args);
  }
  var onceHandler = props[handlerName + "Once"];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */, args);
  }
}
function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);
  if (cached !== undefined) {
    return cached;
  }
  var raw = comp.emits;
  var normalized = {};
  // apply mixin/extends props
  var hasExtends = false;
  if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
    var extendEmits = function extendEmits(raw) {
      var normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp["extends"]) {
      extendEmits(comp["extends"]);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, '');
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
var currentRenderingInstance = null;
var currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  if (!ctx) return fn;
  // already normalized
  if (fn._n) {
    return fn;
  }
  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we disable block tracking and
    // force bail out when invoking a compiled slot (indicated by the ._d flag).
    // This isn't necessary if rendering a compiled `<slot>`, so we flip the
    // ._d flag off when invoking the wrapped fn inside `renderSlot`.
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    var prevInstance = setCurrentRenderingInstance(ctx);
    var res;
    try {
      res = fn.apply(void 0, arguments);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  // mark normalized to avoid duplicated wrapping
  renderFnWithContext._n = true;
  // mark this as compiled by default
  // this is used in vnode.ts -> normalizeChildren() to set the slot
  // rendering flag.
  renderFnWithContext._c = true;
  // disable block tracking by default
  renderFnWithContext._d = true;
  return renderFnWithContext;
}

/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
var accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  var Component = instance.type,
    vnode = instance.vnode,
    proxy = instance.proxy,
    withProxy = instance.withProxy,
    props = instance.props,
    _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
    propsOptions = _instance$propsOption2[0],
    slots = instance.slots,
    attrs = instance.attrs,
    emit = instance.emit,
    render = instance.render,
    renderCache = instance.renderCache,
    data = instance.data,
    setupState = instance.setupState,
    ctx = instance.ctx,
    inheritAttrs = instance.inheritAttrs;
  var result;
  var fallthroughAttrs;
  var prev = setCurrentRenderingInstance(instance);
  {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */) {
      // withProxy is a proxy with a different `has` trap only for
      // runtime-compiled render functions using `with` block.
      var proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      // functional
      var _render = Component;
      // in dev, mark attrs accessed if optional props (attrs === props)
      if ("development" !== 'production' && attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(_render.length > 1 ? _render(props, "development" !== 'production' ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots: slots,
        emit: emit
      } : {
        attrs: attrs,
        slots: slots,
        emit: emit
      }) : _render(props, null /* we know it doesn't need it */));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1 /* ErrorCodes.RENDER_FUNCTION */);
    result = createVNode(Comment);
  }
  // attr merging
  // in dev mode, comments are preserved, and it's possible for a template
  // to have comments along side the root element which makes it a fragment
  var root = result;
  var setRoot = undefined;
  if (result.patchFlag > 0 && result.patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */) {
    var _getChildRoot = getChildRoot(result);
    var _getChildRoot2 = _slicedToArray(_getChildRoot, 2);
    root = _getChildRoot2[0];
    setRoot = _getChildRoot2[1];
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    var keys = Object.keys(fallthroughAttrs);
    var _root = root,
      shapeFlag = _root.shapeFlag;
    if (keys.length) {
      if (shapeFlag & (1 /* ShapeFlags.ELEMENT */ | 6 /* ShapeFlags.COMPONENT */)) {
        if (propsOptions && keys.some(isModelListener)) {
          // If a v-model listener (onUpdate:xxx) has a corresponding declared
          // prop, it indicates this component expects to handle v-model and
          // it should not fallthrough.
          // related: #1543, #1643, #1989
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      } else if (!accessedAttrs && root.type !== Comment) {
        var allAttrs = Object.keys(attrs);
        var eventAttrs = [];
        var extraAttrs = [];
        for (var i = 0, l = allAttrs.length; i < l; i++) {
          var key = allAttrs[i];
          if (isOn(key)) {
            // ignore v-model handlers when they fail to fallthrough
            if (!isModelListener(key)) {
              // remove `on`, lowercase first letter to reflect event casing
              // accurately
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
        }
        if (eventAttrs.length) {
          warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
        }
      }
    }
  }
  // inherit directives
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
    }
    // clone before mutating since the root may be a hoisted vnode
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  // inherit transition data
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
    }
    root.transition = vnode.transition;
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);
  if (!childRoot) {
    return [vnode, undefined];
  }
  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(_toConsumableArray(dynamicChildren), [updatedRoot]);
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
  var singleRoot;
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;
  for (var key in attrs) {
    if (key === 'class' || key === 'style' || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};
  for (var key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & (6 /* ShapeFlags.COMPONENT */ | 1 /* ShapeFlags.ELEMENT */) || vnode.type === Comment // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
    prevChildren = prevVNode.children,
    component = prevVNode.component;
  var nextProps = nextVNode.props,
    nextChildren = nextVNode.children,
    patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions;
  // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  // force child update for runtime directive or transition on component vnode.
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024 /* PatchFlags.DYNAMIC_SLOTS */) {
      // slot content that references values that might have changed,
      // e.g. in a v-for
      return true;
    }
    if (patchFlag & 16 /* PatchFlags.FULL_PROPS */) {
      if (!prevProps) {
        return !!nextProps;
      }
      // presence of this flag indicates props are always non-null
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8 /* PatchFlags.PROPS */) {
      var dynamicProps = nextVNode.dynamicProps;
      for (var i = 0; i < dynamicProps.length; i++) {
        var key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl(_ref5, el // HostNode
) {
  var vnode = _ref5.vnode,
    parent = _ref5.parent;
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
};
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      var _suspense$effects;
      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance) {
    {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides;
    // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.
    var parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    // TS doesn't allow symbol as index type
    provides[key] = value;
  }
}
function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;
  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the instance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else {
    warn("inject() can only be used inside setup() or functional components.");
  }
}
// initial value for watchers to trigger on undefined initial values
var INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb) {
  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJ,
    immediate = _ref7.immediate,
    deep = _ref7.deep,
    flush = _ref7.flush,
    onTrack = _ref7.onTrack,
    onTrigger = _ref7.onTrigger;
  if (!cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }
  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };
  var instance = getCurrentScope() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
  // const instance = currentInstance
  var getter;
  var forceTrigger = false;
  var isMultiSource = false;
  if (isRef(source)) {
    getter = function getter() {
      return source.value;
    };
    forceTrigger = isShallow$1(source);
  } else if (isReactive(source)) {
    getter = function getter() {
      return source;
    };
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some(function (s) {
      return isReactive(s) || isShallow$1(s);
    });
    getter = function getter() {
      return source.map(function (s) {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return callWithErrorHandling(s, instance, 2 /* ErrorCodes.WATCH_GETTER */);
        } else {
          warnInvalidSource(s);
        }
      });
    };
  } else if (isFunction(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2 /* ErrorCodes.WATCH_GETTER */);
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    var baseGetter = getter;
    getter = function getter() {
      return traverse(baseGetter());
    };
  }
  var cleanup;
  var onCleanup = function onCleanup(fn) {
    cleanup = effect.onStop = function () {
      callWithErrorHandling(fn, instance, 4 /* ErrorCodes.WATCH_CLEANUP */);
    };
  };
  // in SSR there is no need to setup an actual effect, and it should be noop
  // unless it's eager or sync flush
  var ssrCleanup;
  if (isInSSRComponentSetup) {
    // we will also not call the invalidate callback (+ runner is not set up)
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [getter(), isMultiSource ? [] : undefined, onCleanup]);
    }
    if (flush === 'sync') {
      var ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  var oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  var job = function job() {
    if (!effect.active) {
      return;
    }
    if (cb) {
      // watch(source, cb)
      var newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
        return hasChanged(v, oldValue[i]);
      }) : hasChanged(newValue, oldValue)) || false) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [newValue,
        // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue, onCleanup]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      effect.run();
    }
  };
  // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)
  job.allowRecurse = !!cb;
  var scheduler;
  if (flush === 'sync') {
    scheduler = job; // the scheduler function gets called directly
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    job.pre = true;
    if (instance) job.id = instance.uid;
    scheduler = function scheduler() {
      return queueJob(job);
    };
  }
  var effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  // initial run
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  var unwatch = function unwatch() {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  if (ssrCleanup) ssrCleanup.push(unwatch);
  return unwatch;
}
// this.$watch
function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = isString(source) ? source.includes('.') ? createPathGetter(publicThis, source) : function () {
    return publicThis[source];
  } : source.bind(publicThis, publicThis);
  var cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  var cur = currentInstance;
  setCurrentInstance(this);
  var res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;
    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject(value) || value["__v_skip" /* ReactiveFlags.SKIP */]) {
    return value;
  }
  seen = seen || new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}
var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots["default"] && getTransitionRawChildren(slots["default"](), true);
      if (!children || !children.length) {
        return;
      }
      var child = children[0];
      if (children.length > 1) {
        var hasFound = false;
        // locate first non-comment child
        var _iterator3 = _createForOfIteratorHelper(children),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var c = _step3.value;
            if (c.type !== Comment) {
              if ("development" !== 'production' && hasFound) {
                // warn more than one non-comment child
                warn('<transition> can only be used on a single element or component. ' + 'Use <transition-group> for lists.');
                break;
              }
              child = c;
              hasFound = true;
              if (!("development" !== 'production')) ;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf
      var rawProps = toRaw(props);
      var mode = rawProps.mode;
      // check mode
      if (mode && mode !== 'in-out' && mode !== 'out-in' && mode !== 'default') {
        warn("invalid <transition> mode: ".concat(mode));
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.
      var innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;
      if (getTransitionKey) {
        var key = getTransitionKey();
        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      // handle mode
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        // update old tree's hooks in case of dynamic transition
        setTransitionHooks(oldInnerChild, leavingHooks);
        // switching between different views
        if (mode === 'out-in') {
          state.isLeaving = true;
          // return placeholder node and queue update when leave finishes
          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            // #6835
            // it also needs to be updated when active is undefined
            if (instance.update.active !== false) {
              instance.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === 'in-out' && innerChild.type !== Comment) {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            // early removal callback
            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
var BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
    mode = props.mode,
    _props$persisted = props.persisted,
    persisted = _props$persisted === void 0 ? false : _props$persisted,
    onBeforeEnter = props.onBeforeEnter,
    onEnter = props.onEnter,
    onAfterEnter = props.onAfterEnter,
    onEnterCancelled = props.onEnterCancelled,
    onBeforeLeave = props.onBeforeLeave,
    onLeave = props.onLeave,
    onAfterLeave = props.onAfterLeave,
    onLeaveCancelled = props.onLeaveCancelled,
    onBeforeAppear = props.onBeforeAppear,
    onAppear = props.onAppear,
    onAfterAppear = props.onAfterAppear,
    onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);
  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9 /* ErrorCodes.TRANSITION_HOOK */, args);
  };
  var callAsyncHook = function callAsyncHook(hook, args) {
    var done = args[1];
    callHook(hook, args);
    if (isArray(hook)) {
      if (hook.every(function (hook) {
        return hook.length <= 1;
      })) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      // for same element (v-show)
      if (el._leaveCb) {
        el._leaveCb(true /* cancelled */);
      }
      // for toggled element with same key (v-if)
      var leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }
      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      var called = false;
      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = undefined;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true /* cancelled */);
      }

      if (state.isUnmounting) {
        return remove();
      }
      callHook(onBeforeLeave, [el]);
      var called = false;
      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();
        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }
        el._leaveCb = undefined;
        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };
      leavingVNodesCache[key] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */ && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var parentKey = arguments.length > 2 ? arguments[2] : undefined;
  var ret = [];
  var keyedFragmentCount = 0;
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    // #5360 inherit parent key in case of <template v-for>
    var key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    // handle fragment children case, e.g. v-for
    if (child.type === Fragment) {
      if (child.patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    }
    // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, {
        key: key
      }) : child);
    }
  }
  // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.
  if (keyedFragmentCount > 1) {
    for (var _i = 0; _i < ret.length; _i++) {
      ret[_i].patchFlag = -2 /* PatchFlags.BAIL */;
    }
  }

  return ret;
}
var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};
var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a" /* LifecycleHooks.ACTIVATED */, target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da" /* LifecycleHooks.DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.
  if (target) {
    var current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
  onUnmounted(function () {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (target) {
    var hooks = target[type] || (target[type] = []);
    // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".
    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      }
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      pauseTracking();
      // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.
      setCurrentInstance(target);
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    var apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}
var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (
      // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp" /* LifecycleHooks.SERVER_PREFETCH */) && injectHook(lifecycle, function () {
        return hook.apply(void 0, arguments);
      }, target)
    );
  };
};
var onBeforeMount = createHook("bm" /* LifecycleHooks.BEFORE_MOUNT */);
var onMounted = createHook("m" /* LifecycleHooks.MOUNTED */);
var onBeforeUpdate = createHook("bu" /* LifecycleHooks.BEFORE_UPDATE */);
var onUpdated = createHook("u" /* LifecycleHooks.UPDATED */);
var onBeforeUnmount = createHook("bum" /* LifecycleHooks.BEFORE_UNMOUNT */);
var onUnmounted = createHook("um" /* LifecycleHooks.UNMOUNTED */);
var onServerPrefetch = createHook("sp" /* LifecycleHooks.SERVER_PREFETCH */);
var onRenderTriggered = createHook("rtg" /* LifecycleHooks.RENDER_TRIGGERED */);
var onRenderTracked = createHook("rtc" /* LifecycleHooks.RENDER_TRACKED */);
function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec" /* LifecycleHooks.ERROR_CAPTURED */, hook, target);
}

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;
  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    var hook = binding.dir[name];
    if (hook) {
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8 /* ErrorCodes.DIRECTIVE_HOOK */, [vnode.el, binding, vnode, prevVNode]);
      resetTracking();
    }
  }
}
var NULL_DYNAMIC_COMPONENT = Symbol();

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
var getPublicInstance = function getPublicInstance(i) {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
var publicPropertiesMap =
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*#__PURE__*/
extend(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return shallowReadonly(i.props) ;
  },
  $attrs: function $attrs(i) {
    return shallowReadonly(i.attrs) ;
  },
  $slots: function $slots(i) {
    return shallowReadonly(i.slots) ;
  },
  $refs: function $refs(i) {
    return shallowReadonly(i.refs) ;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return getPublicInstance(i.root);
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type;
  },
  $forceUpdate: function $forceUpdate(i) {
    return i.f || (i.f = function () {
      return queueJob(i.update);
    });
  },
  $nextTick: function $nextTick(i) {
    return i.n || (i.n = nextTick.bind(i.proxy));
  },
  $watch: function $watch(i) {
    return __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : NOOP;
  }
});
var isReservedPrefix = function isReservedPrefix(key) {
  return key === '_' || key === '$';
};
var hasSetupBinding = function hasSetupBinding(state, key) {
  return state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
};
var PublicInstanceProxyHandlers = {
  get: function get(_ref12, key) {
    var instance = _ref12._;
    var ctx = instance.ctx,
      setupState = instance.setupState,
      data = instance.data,
      props = instance.props,
      accessCache = instance.accessCache,
      type = instance.type,
      appContext = instance.appContext;
    // for internal formatters to know that this is a Vue instance
    if (key === '__isVue') {
      return true;
    }
    // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.
    var normalizedProps;
    if (key[0] !== '$') {
      var n = accessCache[key];
      if (n !== undefined) {
        switch (n) {
          case 1 /* AccessTypes.SETUP */:
            return setupState[key];
          case 2 /* AccessTypes.DATA */:
            return data[key];
          case 4 /* AccessTypes.CONTEXT */:
            return ctx[key];
          case 3 /* AccessTypes.PROPS */:
            return props[key];
          // default: just fallthrough
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1 /* AccessTypes.SETUP */;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2 /* AccessTypes.DATA */;
        return data[key];
      } else if (
      // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3 /* AccessTypes.PROPS */;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4 /* AccessTypes.CONTEXT */;
        return ctx[key];
      } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
        accessCache[key] = 0 /* AccessTypes.OTHER */;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties;
    // public $xxx properties
    if (publicGetter) {
      if (key === '$attrs') {
        track(instance, "get" /* TrackOpTypes.GET */, key);
        markAttrsAccessed();
      }
      return publicGetter(instance);
    } else if (
    // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 4 /* AccessTypes.CONTEXT */;
      return ctx[key];
    } else if (
    // global properties
    globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) ||
    // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else if (instance === currentRenderingInstance) {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref13, key, value) {
    var instance = _ref13._;
    var data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn("Cannot mutate <script setup> binding \"".concat(key, "\" from Options API."));
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."));
      return false;
    }
    if (key[0] === '$' && key.slice(1) in instance) {
      warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.");
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has: function has(_ref14, key) {
    var _ref14$_ = _ref14._,
      data = _ref14$_.data,
      setupState = _ref14$_.setupState,
      accessCache = _ref14$_.accessCache,
      ctx = _ref14$_.ctx,
      appContext = _ref14$_.appContext,
      propsOptions = _ref14$_.propsOptions;
    var normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty: function defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      // invalidate key cache of a getter based property #5417
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, 'value')) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
  var target = {};
  // expose internal instance for proxy handlers
  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  });
  // expose public properties
  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
    _instance$propsOption3 = _slicedToArray(instance.propsOptions, 1),
    propsOptions = _instance$propsOption3[0];
  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: NOOP
      });
    });
  }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
    setupState = instance.setupState;
  Object.keys(toRaw(setupState)).forEach(function (key) {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return setupState[key];
        },
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}
var shouldCacheAccess = true;
function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx;
  // do not cache property access on public proxy during state initialization
  shouldCacheAccess = false;
  // call beforeCreate first before accessing other options since
  // the hook may mutate resolved options (#2791)
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc" /* LifecycleHooks.BEFORE_CREATE */);
  }

  var dataOptions = options.data,
    computedOptions = options.computed,
    methods = options.methods,
    watchOptions = options.watch,
    provideOptions = options.provide,
    injectOptions = options.inject,
    created = options.created,
    beforeMount = options.beforeMount,
    mounted = options.mounted,
    beforeUpdate = options.beforeUpdate,
    updated = options.updated,
    activated = options.activated,
    deactivated = options.deactivated;
    options.beforeDestroy;
    var beforeUnmount = options.beforeUnmount;
    options.destroyed;
    var unmounted = options.unmounted,
    render = options.render,
    renderTracked = options.renderTracked,
    renderTriggered = options.renderTriggered,
    errorCaptured = options.errorCaptured,
    serverPrefetch = options.serverPrefetch,
    expose = options.expose,
    inheritAttrs = options.inheritAttrs,
    components = options.components,
    directives = options.directives;
    options.filters;
  var checkDuplicateProperties = createDuplicateChecker() ;
  {
    var _instance$propsOption4 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption4[0];
    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props" /* OptionTypes.PROPS */, key);
      }
    }
  }
  // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (var _key5 in methods) {
      var methodHandler = methods[_key5];
      if (isFunction(methodHandler)) {
        // In dev mode, we use the `createRenderContext` function to define
        // methods to the proxy target, and those are read-only but
        // reconfigurable, so it needs to be redefined here
        {
          Object.defineProperty(ctx, _key5, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods" /* OptionTypes.METHODS */, _key5);
        }
      } else {
        warn("Method \"".concat(_key5, "\" has type \"").concat(_typeof(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn("The data option must be a function. " + "Plain object usage is no longer supported.");
    }
    var data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
    }
    if (!isObject(data)) {
      warn("data() should return an object.");
    } else {
      instance.data = reactive(data);
      {
        var _loop2 = function _loop2(_key6) {
          checkDuplicateProperties("Data" /* OptionTypes.DATA */, _key6);
          // expose data on ctx during dev
          if (!isReservedPrefix(_key6[0])) {
            Object.defineProperty(ctx, _key6, {
              configurable: true,
              enumerable: true,
              get: function get() {
                return data[_key6];
              },
              set: NOOP
            });
          }
        };
        for (var _key6 in data) {
          _loop2(_key6);
        }
      }
    }
  }
  // state initialization complete at this point - start caching access
  shouldCacheAccess = true;
  if (computedOptions) {
    var _loop3 = function _loop3(_key7) {
      var opt = computedOptions[_key7];
      var get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get === NOOP) {
        warn("Computed property \"".concat(_key7, "\" has no getter."));
      }
      var set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : function () {
        warn("Write operation failed: computed property \"".concat(_key7, "\" is readonly."));
      } ;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key7, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });
      {
        checkDuplicateProperties("Computed" /* OptionTypes.COMPUTED */, _key7);
      }
    };
    for (var _key7 in computedOptions) {
      _loop3(_key7);
    }
  }
  if (watchOptions) {
    for (var _key8 in watchOptions) {
      createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
    }
  }
  if (provideOptions) {
    var provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(function (key) {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c" /* LifecycleHooks.CREATED */);
  }

  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach(function (_hook) {
        return register(_hook.bind(publicThis));
      });
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = {});
      expose.forEach(function (key) {
        Object.defineProperty(exposed, key, {
          get: function get() {
            return publicThis[key];
          },
          set: function set(val) {
            return publicThis[key] = val;
          }
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  // options that are handled when creating the instance but also need to be
  // applied from mixins
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  // asset options.
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NOOP;
  var unwrapRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  var _loop4 = function _loop4() {
    var opt = injectOptions[key];
    var injected;
    if (isObject(opt)) {
      if ('default' in opt) {
        injected = inject(opt.from || key, opt["default"], true /* treat default function as factory */);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      // TODO remove the check in 3.3
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return injected.value;
          },
          set: function set(v) {
            return injected.value = v;
          }
        });
      } else {
        {
          warn("injected property \"".concat(key, "\" is a ref and will be auto-unwrapped ") + "and no longer needs `.value` in the next minor release. " + "To opt-in to the new behavior now, " + "set `app.config.unwrapInjectedRef = true` (this config is " + "temporary and will not be needed in the future.)");
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject" /* OptionTypes.INJECT */, key);
    }
  };
  for (var key in injectOptions) {
    _loop4();
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map(function (h) {
    return h.bind(instance.proxy);
  }) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };
  if (isString(raw)) {
    var handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(_handler)) {
        watch(getter, _handler, raw);
      } else {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */
function resolveMergedOptions(instance) {
  var base = instance.type;
  var mixins = base.mixins,
    extendsOptions = base["extends"];
  var _instance$appContext = instance.appContext,
    globalMixins = _instance$appContext.mixins,
    cache = _instance$appContext.optionsCache,
    optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
  var cached = cache.get(base);
  var resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(function (m) {
        return mergeOptions(resolved, m, optionMergeStrategies, true);
      });
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var mixins = from.mixins,
    extendsOptions = from["extends"];
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(function (m) {
      return mergeOptions(to, m, strats, true);
    });
  }
  for (var key in from) {
    if (asMixin && key === 'expose') {
      warn("\"expose\" option is ignored when declared in mixins or extends. " + "It should only be declared in the base component itself.");
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    var res = {};
    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? _toConsumableArray(new Set([].concat(to, from))) : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = extend(Object.create(null), to);
  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  // ensure all declared prop keys are present
  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = undefined;
    }
  }
  // validation
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
    attrs = instance.attrs,
    patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = toRaw(props);
  var _instance$propsOption5 = _slicedToArray(instance.propsOptions, 1),
    options = _instance$propsOption5[0];
  var hasAttrsChanged = false;
  if (
  // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !(isInHmrContext(instance)) && (optimized || patchFlag > 0) && !(patchFlag & 16 /* PatchFlags.FULL_PROPS */)) {
    if (patchFlag & 8 /* PatchFlags.PROPS */) {
      // Compiler-generated props & no keys change, just set the updated
      // the props.
      var propsToUpdate = instance.vnode.dynamicProps;
      for (var i = 0; i < propsToUpdate.length; i++) {
        var key = propsToUpdate[i];
        // skip if the prop key is a declared emit event listener
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        // PROPS flag guarantees rawProps to be non-null
        var value = rawProps[key];
        if (options) {
          // attr / props separation was done on init and will be consistent
          // in this code path, so just check if attrs have it.
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            var camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false /* isAbsent */);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    // full props update.
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    // in case of dynamic props, check if we need to delete keys from
    // the props object
    var kebabKey;
    for (var _key9 in rawCurrentProps) {
      if (!rawProps ||
      // for camelCase
      !hasOwn(rawProps, _key9) && (
      // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = hyphenate(_key9)) === _key9 || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (
          // for camelCase
          rawPrevProps[_key9] !== undefined ||
          // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key9] = resolvePropValue(options, rawCurrentProps, _key9, undefined, instance, true /* isAbsent */);
          }
        } else {
          delete props[_key9];
        }
      }
    }
    // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.
    if (attrs !== rawCurrentProps) {
      for (var _key10 in attrs) {
        if (!rawProps || !hasOwn(rawProps, _key10) && !false) {
          delete attrs[_key10];
          hasAttrsChanged = true;
        }
      }
    }
  }
  // trigger updates for $attrs in case it's used in component slots
  if (hasAttrsChanged) {
    trigger(instance, "set" /* TriggerOpTypes.SET */, '$attrs');
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption6 = _slicedToArray(instance.propsOptions, 2),
    options = _instance$propsOption6[0],
    needCastKeys = _instance$propsOption6[1];
  var hasAttrsChanged = false;
  var rawCastValues;
  if (rawProps) {
    for (var key in rawProps) {
      // key, ref are reserved and never passed down
      if (isReservedProp(key)) {
        continue;
      }
      var value = rawProps[key];
      // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.
      var camelKey = void 0;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    var rawCurrentProps = toRaw(props);
    var castValues = rawCastValues || EMPTY_OBJ;
    for (var i = 0; i < needCastKeys.length; i++) {
      var _key11 = needCastKeys[i];
      props[_key11] = resolvePropValue(options, rawCurrentProps, _key11, castValues[_key11], instance, !hasOwn(castValues, _key11));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];
  if (opt != null) {
    var hasDefault = hasOwn(opt, 'default');
    // default values
    if (hasDefault && value === undefined) {
      var defaultValue = opt["default"];
      if (opt.type !== Function && isFunction(defaultValue)) {
        var propsDefaults = instance.propsDefaults;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    // boolean casting
    if (opt[0 /* BooleanFlags.shouldCast */]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1 /* BooleanFlags.shouldCastTrue */] && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  var raw = comp.props;
  var normalized = {};
  var needCastKeys = [];
  // apply mixin/extends props
  var hasExtends = false;
  if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;
      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
        _normalizePropsOption2 = _slicedToArray(_normalizePropsOption, 2),
        props = _normalizePropsOption2[0],
        keys = _normalizePropsOption2[1];
      extend(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray(keys));
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp["extends"]) {
      extendProps(comp["extends"]);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }
      var normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn("invalid props options", raw);
    }
    for (var key in raw) {
      var _normalizedKey = camelize(key);
      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = isArray(opt) || isFunction(opt) ? {
          type: opt
        } : Object.assign({}, opt);
        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0 /* BooleanFlags.shouldCast */] = booleanIndex > -1;
          prop[1 /* BooleanFlags.shouldCastTrue */] = stringIndex < 0 || booleanIndex < stringIndex;
          // if the prop needs boolean casting or default value
          if (booleanIndex > -1 || hasOwn(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }
  var res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }
  return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex(function (t) {
      return isSameType(t, type);
    });
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
/**
 * dev only
 */
function validateProps(rawProps, props, instance) {
  var resolvedValues = toRaw(props);
  var options = instance.propsOptions[0];
  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
    required = prop.required,
    validator = prop.validator;
  // required!
  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  }
  // missing but optional
  if (value == null && !prop.required) {
    return;
  }
  // type check
  if (type != null && type !== true) {
    var isValid = false;
    var types = isArray(type) ? type : [type];
    var expectedTypes = [];
    // value is valid as long as one of the specified types match
    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
        valid = _assertType.valid,
        expectedType = _assertType.expectedType;
      expectedTypes.push(expectedType || '');
      isValid = valid;
    }
    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  // custom validator
  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
var isSimpleType = /*#__PURE__*/makeMap('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */
function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    var t = _typeof(value);
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isObject(value);
  } else if (expectedType === 'Array') {
    valid = isArray(value);
  } else if (expectedType === 'null') {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(capitalize).join(' | '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }
  message += ", got ".concat(receivedType, " ");
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }
  return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */
function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */
function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key12 = 0; _key12 < _len5; _key12++) {
    args[_key12] = arguments[_key12];
  }
  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};
var normalizeSlotValue = function normalizeSlotValue(value) {
  return isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};
var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  if (rawSlot._n) {
    // already normalized - #5353
    return rawSlot;
  }
  var normalized = withCtx(function () {
    if (currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }
    return normalizeSlotValue(rawSlot.apply(void 0, arguments));
  }, ctx);
  normalized._c = false;
  return normalized;
};
var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
  var ctx = rawSlots._ctx;
  var _loop5 = function _loop5() {
    if (isInternalKey(key)) return "continue";
    var value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      {
        warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
      }
      var normalized = normalizeSlotValue(value);
      slots[key] = function () {
        return normalized;
      };
    }
  };
  for (var key in rawSlots) {
    var _ret = _loop5();
    if (_ret === "continue") continue;
  }
};
var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if (!isKeepAlive(instance.vnode) && !false) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }
  var normalized = normalizeSlotValue(children);
  instance.slots["default"] = function () {
    return normalized;
  };
};
var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */) {
    var type = children._;
    if (type) {
      // users can get the shallow readonly version of the slots object through `this.$slots`,
      // we should avoid the proxy object polluting the slots of the internal instance
      instance.slots = toRaw(children);
      // make compiler marker non-enumerable
      def(children, '_', type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
var updateSlots = function updateSlots(instance, children, optimized) {
  var vnode = instance.vnode,
    slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */) {
    var type = children._;
    if (type) {
      // compiled slots.
      if (isHmrUpdating) {
        // Parent was HMR updated so slot content may have changed.
        // force update slots and mark instance for hmr as well
        extend(slots, children);
      } else if (optimized && type === 1 /* SlotFlags.STABLE */) {
        // compiled AND stable.
        // no need to update, and skip stale slots removal.
        needDeletionCheck = false;
      } else {
        // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
        // normalization.
        extend(slots, children);
        // #2893
        // when rendering the optimized slots by manually written render function,
        // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
        // i.e. let the `renderSlot` create the bailed Fragment
        if (!optimized && type === 1 /* SlotFlags.STABLE */) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      "default": 1
    };
  }
  // delete stale slots
  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
var uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }
    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },
      use: function use(plugin) {
        for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key13 = 1; _key13 < _len6; _key13++) {
          options[_key13 - 1] = arguments[_key13];
        }
        if (installedPlugins.has(plugin)) {
          warn("Plugin has already been applied to target app.");
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }
        return app;
      },
      mixin: function mixin(_mixin) {
        if (__VUE_OPTIONS_API__) {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin);
          } else {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        } else {
          warn('Mixins are only available in builds supporting Options API');
        }
        return app;
      },
      component: function component(name, _component) {
        {
          validateComponentName(name, context.config);
        }
        if (!_component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }
        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        {
          validateDirectiveName(name);
        }
        if (!_directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }
        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          // #5571
          if (rootContainer.__vue_app__) {
            warn("There is already an app instance mounted on the host container.\n" + " If you want to mount another app on the same host container," + " you need to unmount the previous app by calling `app.unmount()` first.");
          }
          var vnode = createVNode(rootComponent, rootProps);
          // store app context on the root VNode.
          // this will be set on the root instance on initial mount.
          vnode.appContext = context;
          // HMR root reload
          {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);
          {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if (key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}

/**
 * Function for handling a template ref
 */
function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isArray(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
  }
  var refValue = vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */ ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var owner = rawRef.i,
    ref = rawRef.r;
  if (!owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }
  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState;
  // dynamic ref changed. unset old ref
  if (oldRef != null && oldRef !== ref) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref)) {
    callWithErrorHandling(ref, owner, 12 /* ErrorCodes.FUNCTION_REF */, [value, refs]);
  } else {
    var _isString = isString(ref);
    var _isRef = isRef(ref);
    if (_isString || _isRef) {
      var doSet = function doSet() {
        if (rawRef.f) {
          var existing = _isString ? hasOwn(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref] = [refValue];
                if (hasOwn(setupState, ref)) {
                  setupState[ref] = refs[ref];
                }
              } else {
                ref.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;
          if (hasOwn(setupState, ref)) {
            setupState[ref] = value;
          }
        } else if (_isRef) {
          ref.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else {
          warn('Invalid template ref type:', ref, "(".concat(_typeof(ref), ")"));
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else {
      warn('Invalid template ref type:', ref, "(".concat(_typeof(ref), ")"));
    }
  }
}

/* eslint-disable no-restricted-globals */
var supported;
var perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }
  {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== undefined) {
    return supported;
  }
  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
  var needWarn = [];
  if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
    needWarn.push("__VUE_OPTIONS_API__");
    getGlobalThis().__VUE_OPTIONS_API__ = true;
  }
  if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
    needWarn.push("__VUE_PROD_DEVTOOLS__");
    getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
  }
  if (needWarn.length) {
    var multi = needWarn.length > 1;
    console.warn("Feature flag".concat(multi ? "s" : "", " ").concat(needWarn.join(', '), " ").concat(multi ? "are" : "is", " not explicitly defined. You are running the esm-bundler build of Vue, ") + "which expects these compile-time feature flags to be globally injected " + "via the bundler config in order to get better tree-shaking in the " + "production bundle.\n\n" + "For more details, see https://link.vuejs.org/feature-flags.");
  }
}
var queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
  return baseCreateRenderer(options);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }
  var target = getGlobalThis();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  var hostInsert = options.insert,
    hostRemove = options.remove,
    hostPatchProp = options.patchProp,
    hostCreateElement = options.createElement,
    hostCreateText = options.createText,
    hostCreateComment = options.createComment,
    hostSetText = options.setText,
    hostSetElementText = options.setElementText,
    hostParentNode = options.parentNode,
    hostNextSibling = options.nextSibling,
    _options$setScopeId = options.setScopeId,
    hostSetScopeId = _options$setScopeId === void 0 ? NOOP : _options$setScopeId,
    hostInsertStaticContent = options.insertStaticContent;
  // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.
  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : isHmrUpdating ? false : !!n2.dynamicChildren;
    if (n1 === n2) {
      return;
    }
    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2 /* PatchFlags.BAIL */) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    var type = n2.type,
      ref = n2.ref,
      shapeFlag = n2.shapeFlag;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else {
          patchStaticNode(n1, n2, container, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1 /* ShapeFlags.ELEMENT */) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else {
          warn('Invalid VNode type:', type, "(".concat(_typeof(type), ")"));
        }
    }
    // set ref
    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };
  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);
    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */
  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor);
      // remove existing
      removeStaticNode(n1);
      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);
      var _hostInsertStaticCont4 = _slicedToArray(_hostInsertStaticCont3, 2);
      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  var moveStaticNode = function moveStaticNode(_ref15, container, nextSibling) {
    var el = _ref15.el,
      anchor = _ref15.anchor;
    var next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  var removeStaticNode = function removeStaticNode(_ref16) {
    var el = _ref16.el,
      anchor = _ref16.anchor;
    var next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    isSVG = isSVG || n2.type === 'svg';
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
      props = vnode.props,
      shapeFlag = vnode.shapeFlag,
      transition = vnode.transition,
      dirs = vnode.dirs;
    el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
    // mount children first, since some props may rely on child content
    // being already rendered, e.g. `<select value>`
    if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
      mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'created');
    }
    // scopeId
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    // props
    if (props) {
      for (var key in props) {
        if (key !== 'value' && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      /**
       * Special case for setting value on DOM elements:
       * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
       * - it needs to be forced (#1471)
       * #2353 proposes adding another renderer option to configure this, but
       * the properties affects are so finite it is worth special casing it
       * here to reduce the complexity. (Special casing it also should not
       * affect non-DOM renderers)
       */
      if ('value' in props) {
        hostPatchProp(el, 'value', null, props.value);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    }
    // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it
    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };
  var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      var subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
      dynamicChildren = n2.dynamicChildren,
      dirs = n2.dirs;
    // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS
    patchFlag |= n1.patchFlag & 16 /* PatchFlags.FULL_PROPS */;
    var oldProps = n1.props || EMPTY_OBJ;
    var newProps = n2.props || EMPTY_OBJ;
    var vnodeHook;
    // disable recurse in beforeUpdate hooks
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
      if (parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16 /* PatchFlags.FULL_PROPS */) {
        // element props contain dynamic keys, full diff needed
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2 /* PatchFlags.CLASS */) {
          if (oldProps["class"] !== newProps["class"]) {
            hostPatchProp(el, 'class', null, newProps["class"], isSVG);
          }
        }
        // style
        // this flag is matched when the element has dynamic style bindings
        if (patchFlag & 4 /* PatchFlags.STYLE */) {
          hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
        }
        // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key
        if (patchFlag & 8 /* PatchFlags.PROPS */) {
          // if the flag is present then dynamicProps must be non-null
          var propsToUpdate = n2.dynamicProps;
          for (var i = 0; i < propsToUpdate.length; i++) {
            var key = propsToUpdate[i];
            var prev = oldProps[key];
            var next = newProps[key];
            // #1471 force patch value
            if (next !== prev || key === 'value') {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      // text
      // This flag is matched when the element has only dynamic text children.
      if (patchFlag & 1 /* PatchFlags.TEXT */) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  };
  // The fast path for blocks.
  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i];
      // Determine the container (parent element) for the patch.
      var container =
      // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && (
      // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment ||
      // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) ||
      // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & (6 /* ShapeFlags.COMPONENT */ | 64 /* ShapeFlags.TELEPORT */)) ? hostParentNode(oldVNode.el) :
      // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (var key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      for (var _key14 in newProps) {
        // empty string is not valid prop
        if (isReservedProp(_key14)) continue;
        var next = newProps[_key14];
        var prev = oldProps[_key14];
        // defer patching value
        if (next !== prev && _key14 !== 'value') {
          hostPatchProp(el, _key14, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if ('value' in newProps) {
        hostPatchProp(el, 'value', oldProps.value, newProps.value);
      }
    }
  };
  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
      dynamicChildren = n2.dynamicChildren,
      fragmentSlotScopeIds = n2.slotScopeIds;
    if ((
    // #5523 dev root fragment may inherit directives
    isHmrUpdating || patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */)) {
      // HMR updated / Dev root fragment (w/ comments), force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    // check if this is a slot fragment with :slotted scope ids
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */ && dynamicChildren &&
      // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if (
        // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true /* shallow */);
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    }
    // inject renderer internals for keepAlive
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    // resolve props and slots for setup context
    {
      {
        startMeasure(instance, "init");
      }
      setupComponent(instance);
      {
        endMeasure(instance, "init");
      }
    }
    // setup() is async. This component relies on async logic to be resolved
    // before proceeding
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback
      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };
  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        {
          popWarningContext();
        }
        return;
      } else {
        // normal update
        instance.next = n2;
        // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.
        invalidateJob(instance.update);
        // instance.update is the reactive effect.
        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    var componentUpdateFn = function componentUpdateFn() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
          el = _initialVNode.el,
          props = _initialVNode.props;
        var bm = instance.bm,
          m = instance.m,
          parent = instance.parent;
        var isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        // beforeMount hook
        if (bm) {
          invokeArrayFns(bm);
        }
        // onVnodeBeforeMount
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          var hydrateSubTree = function hydrateSubTree() {
            {
              startMeasure(instance, "render");
            }
            instance.subTree = renderComponentRoot(instance);
            {
              endMeasure(instance, "render");
            }
            {
              startMeasure(instance, "hydrate");
            }
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            {
              endMeasure(instance, "hydrate");
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            function () {
              return !instance.isUnmounted && hydrateSubTree();
            });
          } else {
            hydrateSubTree();
          }
        } else {
          {
            startMeasure(instance, "render");
          }
          var subTree = instance.subTree = renderComponentRoot(instance);
          {
            endMeasure(instance, "render");
          }
          {
            startMeasure(instance, "patch");
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          {
            endMeasure(instance, "patch");
          }
          initialVNode.el = subTree.el;
        }
        // mounted hook
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        // onVnodeMounted
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        }
        // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive
        if (initialVNode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        {
          devtoolsComponentAdded(instance);
        }
        // #2458: deference mount-only object parameters to prevent memleaks
        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
          bu = instance.bu,
          u = instance.u,
          _parent = instance.parent,
          vnode = instance.vnode;
        var originNext = next;
        var _vnodeHook;
        {
          pushWarningContext(next || instance.vnode);
        }
        // Disallow component effect recursion during pre-lifecycle hooks.
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        // beforeUpdate hook
        if (bu) {
          invokeArrayFns(bu);
        }
        // onVnodeBeforeUpdate
        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        }
        toggleRecurse(instance, true);
        // render
        {
          startMeasure(instance, "render");
        }
        var nextTree = renderComponentRoot(instance);
        {
          endMeasure(instance, "render");
        }
        var prevTree = instance.subTree;
        instance.subTree = nextTree;
        {
          startMeasure(instance, "patch");
        }
        patch(prevTree, nextTree,
        // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el),
        // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        {
          endMeasure(instance, "patch");
        }
        next.el = nextTree.el;
        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        }
        // updated hook
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        // onVnodeUpdated
        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }
        {
          devtoolsComponentUpdated(instance);
        }
        {
          popWarningContext();
        }
      }
    };
    // create reactive effect for rendering
    var effect = instance.effect = new ReactiveEffect(componentUpdateFn, function () {
      return queueJob(update);
    }, instance.scope // track it in component's effect scope
    );

    var update = instance.update = function () {
      return effect.run();
    };
    update.id = instance.uid;
    // allowRecurse
    // #1801, #2043 component render effects should allow recursive updates
    toggleRecurse(instance, true);
    {
      effect.onTrack = instance.rtc ? function (e) {
        return invokeArrayFns(instance.rtc, e);
      } : void 0;
      effect.onTrigger = instance.rtg ? function (e) {
        return invokeArrayFns(instance.rtg, e);
      } : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    // props update may have triggered pre-flush watchers.
    // flush them before the render update.
    flushPreFlushCbs();
    resetTracking();
  };
  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
      shapeFlag = n2.shapeFlag;
    // fast path
    if (patchFlag > 0) {
      if (patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */) {
        // this could be either fully-keyed or mixed (some keyed some not)
        // presence of patchFlag means children are guaranteed to be arrays
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256 /* PatchFlags.UNKEYED_FRAGMENT */) {
        // unkeyed
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    // children has 3 possibilities: text, array or no children.
    if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
      // text children fast path
      if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
        // prev children was array
        if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
          // two arrays, cannot assume anything, do full diff
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          // no new children, just unmount old
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
          hostSetElementText(container, '');
        }
        // mount new if array
        if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;
    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  // can be all-keyed or mixed
  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index
    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e
    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    // 2. sync from end
    // a (b c)
    // d e (b c)
    while (i <= e1 && i <= e2) {
      var _n = c1[e1];
      var _n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(_n, _n2)) {
        patch(_n, _n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0
    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    }
    // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    }
    // 5. unknown sequence
    // [i ... e1 + 1]: a b [c d e] f g
    // [i ... e2 + 1]: a b [e d c h] f g
    // i = 2, e1 = 4, e2 = 5
    else {
      var s1 = i; // prev starting index
      var s2 = i; // next starting index
      // 5.1 build key:index map for newChildren
      var keyToNewIndexMap = new Map();
      for (i = s2; i <= e2; i++) {
        var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      // 5.2 loop through old children left to be patched and try to patch
      // matching nodes & remove nodes that are no longer present
      var j;
      var patched = 0;
      var toBePatched = e2 - s2 + 1;
      var moved = false;
      // used to track whether any node has moved
      var maxNewIndexSoFar = 0;
      // works as Map<newIndex, oldIndex>
      // Note that oldIndex is offset by +1
      // and oldIndex = 0 is a special value indicating the new node has
      // no corresponding old node.
      // used for determining longest stable subsequence
      var newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        var prevChild = c1[i];
        if (patched >= toBePatched) {
          // all new children have been patched so this can only be a removal
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        var newIndex = void 0;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          // key-less node, try to locate a key-less node of the same type
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === undefined) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      // 5.3 move and mount
      // generate longest stable subsequence only when nodes have moved
      var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      // looping backwards so that we can use last patched node as anchor
      for (i = toBePatched - 1; i >= 0; i--) {
        var nextIndex = s2 + i;
        var _nextChild = c2[nextIndex];
        var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          // mount new
          patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          // move if:
          // There is no stable subsequence (e.g. a reverse)
          // OR current node is not among the stable sequence
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(_nextChild, container, _anchor2, 2 /* MoveType.REORDER */);
          } else {
            j--;
          }
        }
      }
    }
  };
  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
      type = vnode.type,
      transition = vnode.transition,
      children = vnode.children,
      shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    // single nodes
    var needTransition = moveType !== 2 /* MoveType.REORDER */ && shapeFlag & 1 /* ShapeFlags.ELEMENT */ && transition;
    if (needTransition) {
      if (moveType === 0 /* MoveType.ENTER */) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(function () {
          return transition.enter(el);
        }, parentSuspense);
      } else {
        var leave = transition.leave,
          delayLeave = transition.delayLeave,
          afterLeave = transition.afterLeave;
        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };
        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
      props = vnode.props,
      ref = vnode.ref,
      children = vnode.children,
      dynamicChildren = vnode.dynamicChildren,
      shapeFlag = vnode.shapeFlag,
      patchFlag = vnode.patchFlag,
      dirs = vnode.dirs;
    // unset ref
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    var shouldInvokeDirs = shapeFlag & 1 /* ShapeFlags.ELEMENT */ && dirs;
    var shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    var vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }
      if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (
      // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */)) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 /* PatchFlags.KEYED_FRAGMENT */ | 256 /* PatchFlags.UNKEYED_FRAGMENT */) || !optimized && shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };
  var remove = function remove(vnode) {
    var type = vnode.type,
      el = vnode.el,
      anchor = vnode.anchor,
      transition = vnode.transition;
    if (type === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */ && transition && !transition.persisted) {
        vnode.children.forEach(function (child) {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    var performRemove = function performRemove() {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 /* ShapeFlags.ELEMENT */ && transition && !transition.persisted) {
      var leave = transition.leave,
        delayLeave = transition.delayLeave;
      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    var bum = instance.bum,
      scope = instance.scope,
      update = instance.update,
      subTree = instance.subTree,
      um = instance.um;
    // beforeUnmount hook
    if (bum) {
      invokeArrayFns(bum);
    }
    // stop effects in component scope
    scope.stop();
    // update may be null if a component is unmounted before its async
    // setup has resolved.
    if (update) {
      // so that scheduler will no longer invoke it
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    // unmounted hook
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense);
    // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    {
      devtoolsComponentRemoved(instance);
    }
  };
  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  var render = function render(vnode, container, isSVG) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;
  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);
    var _createHydrationFns2 = _slicedToArray(_createHydrationFns, 2);
    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }
  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse(_ref17, allowed) {
  var effect = _ref17.effect,
    update = _ref17.update;
  effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */
function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];
      if (c2.shapeFlag & 1 /* ShapeFlags.ELEMENT */ && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* PatchFlags.HYDRATE_EVENTS */) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow) traverseStaticChildren(c1, c2);
      }
      // #6852 also inherit for text nodes
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;
  for (i = 0; i < len; i++) {
    var arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};
var Fragment = Symbol('Fragment' );
var Text = Symbol('Text' );
var Comment = Symbol('Comment' );
var Static = Symbol('Static' );
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
var isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  // save current block children on the block vnode
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  // close block
  closeBlock();
  // a block is always going to be patched, so track it as a child of its
  // parent block
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
/**
 * @private
 */
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true /* isBlock */));
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 /* ShapeFlags.COMPONENT */ && hmrDirtyComponents.has(n2.type)) {
    // #7042, ensure the vnode being unmounted during HMR
    // bitwise operations to remove keep alive flags
    n1.shapeFlag &= ~256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */;
    n2.shapeFlag &= ~512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */;
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key15 = 0; _key15 < _len7; _key15++) {
    args[_key15] = arguments[_key15];
  }
  return _createVNode.apply(void 0, _toConsumableArray(args));
};
var InternalObjectKey = "__vInternal";
var normalizeKey = function normalizeKey(_ref21) {
  var key = _ref21.key;
  return key != null ? key : null;
};
var normalizeRef = function normalizeRef(_ref22) {
  var ref = _ref22.ref,
    ref_key = _ref22.ref_key,
    ref_for = _ref22.ref_for;
  return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? {
    i: currentRenderingInstance,
    r: ref,
    k: ref_key,
    f: !!ref_for
  } : ref : null;
};
function createBaseVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var shapeFlag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : type === Fragment ? 0 : 1;
  var isBlockNode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type,
    props: props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: shapeFlag,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    // normalize suspense children
    if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
      type.normalize(vnode);
    }
  } else if (children) {
    // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= isString(children) ? 8 /* ShapeFlags.TEXT_CHILDREN */ : 16 /* ShapeFlags.ARRAY_CHILDREN */;
  }
  // validate key
  if (vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  }
  // track vnode for block tree
  if (isBlockTreeEnabled > 0 &&
  // avoid a block node from tracking itself
  !isBlockNode &&
  // has current parent block
  currentBlock && (
  // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  vnode.patchFlag > 0 || shapeFlag & 6 /* ShapeFlags.COMPONENT */) &&
  // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32 /* PatchFlags.HYDRATE_EVENTS */) {
    currentBlock.push(vnode);
  }
  return vnode;
}
var createVNode = createVNodeWithArgsTransform ;
function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }
    type = Comment;
  }
  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true /* mergeRef: true */);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2 /* PatchFlags.BAIL */;
    return cloned;
  }
  // class component normalization.
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  // class & style normalization.
  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    props = guardReactiveProps(props);
    var _props = props,
      klass = _props["class"],
      style = _props.style;
    if (klass && !isString(klass)) {
      props["class"] = normalizeClass(klass);
    }
    if (isObject(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  // encode the vnode type information into a bitmap
  var shapeFlag = isString(type) ? 1 /* ShapeFlags.ELEMENT */ : isSuspense(type) ? 128 /* ShapeFlags.SUSPENSE */ : isTeleport(type) ? 64 /* ShapeFlags.TELEPORT */ : isObject(type) ? 4 /* ShapeFlags.STATEFUL_COMPONENT */ : isFunction(type) ? 2 /* ShapeFlags.FUNCTIONAL_COMPONENT */ : 0;
  if (shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */ && isProxy(type)) {
    type = toRaw(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
    ref = vnode.ref,
    patchFlag = vnode.patchFlag,
    children = vnode.children;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ?
    // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 /* PatchFlags.HOISTED */ && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
    ? 16 /* PatchFlags.FULL_PROPS */ : patchFlag | 16 /* PatchFlags.FULL_PROPS */ : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
/**
 * @private
 */
function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment);
  } else if (isArray(child)) {
    // fragment
    return createVNode(Fragment, null,
    // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (_typeof(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 /* PatchFlags.HOISTED */ || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16 /* ShapeFlags.ARRAY_CHILDREN */;
  } else if (_typeof(children) === 'object') {
    if (shapeFlag & (1 /* ShapeFlags.ELEMENT */ | 64 /* ShapeFlags.TELEPORT */)) {
      // Normalize slot to plain children for plain element and Teleport
      var slot = children["default"];
      if (slot) {
        // _c marker is added by withCtx() indicating this is a compiled slot
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32 /* ShapeFlags.SLOTS_CHILDREN */;
      var slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 /* SlotFlags.FORWARDED */ && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.slots._ === 1 /* SlotFlags.STABLE */) {
          children._ = 1 /* SlotFlags.STABLE */;
        } else {
          children._ = 2 /* SlotFlags.DYNAMIC */;
          vnode.patchFlag |= 1024 /* PatchFlags.DYNAMIC_SLOTS */;
        }
      }
    }
  } else if (isFunction(children)) {
    children = {
      "default": children,
      _ctx: currentRenderingInstance
    };
    type = 32 /* ShapeFlags.SLOTS_CHILDREN */;
  } else {
    children = String(children);
    // force teleport children to array so it can be moved around
    if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
      type = 16 /* ShapeFlags.ARRAY_CHILDREN */;
      children = [createTextVNode(children)];
    } else {
      type = 8 /* ShapeFlags.TEXT_CHILDREN */;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps() {
  var ret = {};
  for (var i = 0; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];
    for (var key in toMerge) {
      if (key === 'class') {
        if (ret["class"] !== toMerge["class"]) {
          ret["class"] = normalizeClass([ret["class"], toMerge["class"]]);
        }
      } else if (key === 'style') {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7 /* ErrorCodes.VNODE_HOOK */, [vnode, prevVNode]);
}
var emptyAppContext = createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type;
  // inherit parent app context - or - if root, adopt from root vnode
  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true /* detached */),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  // apply custom element special handling
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
var currentInstance = null;
var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};
var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
  instance.scope.on();
};
var unsetCurrentInstance = function unsetCurrentInstance() {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
var isBuiltInTag = /*#__PURE__*/makeMap('slot,component');
function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */;
}

var isInSSRComponentSetup = false;
function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
    props = _instance$vnode.props,
    children = _instance$vnode.children;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a;
  var Component = instance.type;
  {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      var names = Object.keys(Component.components);
      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      var _names = Object.keys(Component.directives);
      for (var _i4 = 0; _i4 < _names.length; _i4++) {
        validateDirectiveName(_names[_i4]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn("\"compilerOptions\" is only supported when using a build of Vue that " + "includes the runtime compiler. Since you are using a runtime-only " + "build, the options should be passed via your build tool config instead.");
    }
  }
  // 0. create render proxy property access cache
  instance.accessCache = Object.create(null);
  // 1. create public instance / render proxy
  // also mark it raw so it's never observed
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  // 2. call setup()
  var setup = Component.setup;
  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    var setupResult = callWithErrorHandling(setup, instance, 0 /* ErrorCodes.SETUP_FUNCTION */, [shallowReadonly(instance.props) , setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult, isSSR);
        })["catch"](function (e) {
          handleError(e, instance, 0 /* ErrorCodes.SETUP_FUNCTION */);
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          var name = (_a = Component.name) !== null && _a !== void 0 ? _a : 'Anonymous';
          warn("Component <".concat(name, ">: setup function returned a promise, but no ") + "<Suspense> boundary was found in the parent component tree. " + "A component with async setup() must be nested in a <Suspense> " + "in order to be rendered.");
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    // setup returned an inline render function
    if (instance.type.__ssrInlineRender) {
      // when the function's name is `ssrRender` (compiled by SFC inline mode),
      // set it as ssrRender instead.
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    }
    // setup returned bindings.
    // assuming a render function compiled from template is present.
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : _typeof(setupResult)));
  }
  finishComponentSetup(instance, isSSR);
}
var compile;
// dev only
var isRuntimeOnly = function isRuntimeOnly() {
  return !compile;
};
function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type;
  // template / render function normalization
  // could be already set when returned from setup()
  if (!instance.render) {
    // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
    // is done by server-renderer
    if (!isSSR && compile && !Component.render) {
      var template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        {
          startMeasure(instance, "compile");
        }
        var _instance$appContext$ = instance.appContext.config,
          isCustomElement = _instance$appContext$.isCustomElement,
          compilerOptions = _instance$appContext$.compilerOptions;
        var delimiters = Component.delimiters,
          componentCompilerOptions = Component.compilerOptions;
        var finalCompilerOptions = extend(extend({
          isCustomElement: isCustomElement,
          delimiters: delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
        {
          endMeasure(instance, "compile");
        }
      }
    }
    instance.render = Component.render || NOOP;
  }
  // support for 2.x options
  if (__VUE_OPTIONS_API__ && !false) {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  // warn missing template/render
  // the runtime compilation of template in SSR is done by server-render
  if (!Component.render && instance.render === NOOP && !isSSR) {
    /* istanbul ignore if */
    if (Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"." /* should not happen */);
    } else {
      warn("Component is missing template or render function.");
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get: function get(target, key) {
      markAttrsAccessed();
      track(instance, "get" /* TrackOpTypes.GET */, '$attrs');
      return target[key];
    },
    set: function set() {
      warn("setupContext.attrs is readonly.");
      return false;
    },
    deleteProperty: function deleteProperty() {
      warn("setupContext.attrs is readonly.");
      return false;
    }
  } );
}
function createSetupContext(instance) {
  var expose = function expose(exposed) {
    {
      if (instance.exposed) {
        warn("expose() should be called only once per setup().");
      }
      if (exposed != null) {
        var exposedType = _typeof(exposed);
        if (exposedType === 'object') {
          if (isArray(exposed)) {
            exposedType = 'array';
          } else if (isRef(exposed)) {
            exposedType = 'ref';
          }
        }
        if (exposedType !== 'object') {
          warn("expose() should be passed a plain object, received ".concat(exposedType, "."));
        }
      }
    }
    instance.exposed = exposed || {};
  };
  var attrs;
  {
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return function (event) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key16 = 1; _key16 < _len8; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }
          return instance.emit.apply(instance, [event].concat(args));
        };
      },
      expose: expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get: function get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has: function has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
var classifyRE = /(?:^|[-_])(\w)/g;
var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};
function getComponentName(Component) {
  var includeInferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
/* istanbul ignore next */
function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);
  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}
function isClassComponent(value) {
  return isFunction(value) && '__vccOpts' in value;
}
var computed = function computed(getterOrOptions, debugOptions) {
  // @ts-ignore
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
var ssrContextKey = Symbol("ssrContext" );
var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);
    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSSRContext() conditionally in the server build.");
    }
    return ctx;
  }
};
function isShallow(value) {
  return !!(value && value["__v_isShallow" /* ReactiveFlags.IS_SHALLOW */]);
}

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if (typeof window === 'undefined') {
    return;
  }
  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  };
  // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if (isRef(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if (isReactive(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReactive' : 'Reactive'], '<', formatValue(obj), ">".concat(isReadonly(obj) ? " (readonly)" : "")];
      } else if (isReadonly(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReadonly' : 'Readonly'], '<', formatValue(obj), '>'];
      }
      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(_toConsumableArray(formatInstance(obj.$)));
      }
    }
  };
  function formatInstance(instance) {
    var blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock('data', toRaw(instance.data)));
    }
    var computed = extractKeys(instance, 'computed');
    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }
    var injected = extractKeys(instance, 'inject');
    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }
    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ['span', {}];
    }
    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(_toConsumableArray(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }
  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if (isObject(v)) {
      return ['object', {
        object: asRaw ? toRaw(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    var Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    var extracted = {};
    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp["extends"] && isKeyOfType(Comp["extends"], key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return "ShallowRef";
    }
    if (v.effect) {
      return "ComputedRef";
    }
    return "Ref";
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

// Core API ------------------------------------------------------------------
var version = "3.2.47";

var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var templateContainer = doc && /*#__PURE__*/doc.createElement('template');
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);
    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }
    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, start, end) {
    // <parent> before | first ... last | anchor </parent>
    var before = anchor ? anchor.previousSibling : parent.lastChild;
    // #5308 can only take cached path if:
    // - has a single root node
    // - nextSibling info is still available
    if (start && (start === end || start.nextSibling)) {
      // cached
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      // fresh insert
      templateContainer.innerHTML = isSVG ? "<svg>".concat(content, "</svg>") : content;
      var template = templateContainer.content;
      if (isSVG) {
        // remove outer svg wrapper
        var wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
    // first
    before ? before.nextSibling : parent.firstChild,
    // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
  // directly setting className should be faster than setAttribute in theory
  // if this is an element during a transition, take the temporary transition
  // classes into account.
  var transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(' ');
  }
  if (value == null) {
    el.removeAttribute('class');
  } else if (isSVG) {
    el.setAttribute('class', value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  var style = el.style;
  var isCssString = isString(next);
  if (next && !isCssString) {
    if (prev && !isString(prev)) {
      for (var key in prev) {
        if (next[key] == null) {
          setStyle(style, key, '');
        }
      }
    }
    for (var _key in next) {
      setStyle(style, _key, next[_key]);
    }
  } else {
    var currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute('style');
    }
    // indicates that the `display` of the element is controlled by `v-show`,
    // so we always keep the current `display` value regardless of the `style`
    // value, thus handing over control to `v-show`.
    if ('_vod' in el) {
      style.display = currentDisplay;
    }
  }
}
var semicolonRE = /[^\\];\s*$/;
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (val == null) val = '';
    {
      if (semicolonRE.test(val)) {
        warn("Unexpected semicolon at the end of '".concat(name, "' style value: '").concat(val, "'"));
      }
    }
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        // !important
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}
var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};
function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  var name = camelize(rawName);
  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
var xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value,
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? '' : value;
    return;
  }
  if (key === 'value' && el.tagName !== 'PROGRESS' &&
  // custom elements may use _value internally
  !el.tagName.includes('-')) {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;
    if (el.value !== newValue ||
    // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    el.tagName === 'OPTION') {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  var needRemove = false;
  if (value === '' || value == null) {
    var type = _typeof(el[key]);
    if (type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      value = includeBooleanAttr(value);
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      value = '';
      needRemove = true;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      value = 0;
      needRemove = true;
    }
  }
  // some properties perform value validation and throw,
  // some properties has getter, no setter, will error in 'use strict'
  // eg. <select :type="null"></select> <select :willValidate="null"></select>
  try {
    el[key] = value;
  } catch (e) {
    // do not warn if value is auto-coerced from nullish values
    if (!needRemove) {
      warn("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
      _parseName2 = _slicedToArray(_parseName, 2),
      name = _parseName2[0],
      options = _parseName2[1];
    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  var options;
  if (optionsModifierRE.test(name)) {
    options = {};
    var m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  var event = name[2] === ':' ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
// To avoid the overhead of repeatedly calling Date.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
var cachedNow = 0;
var p = /*#__PURE__*/Promise.resolve();
var getNow = function getNow() {
  return cachedNow || (p.then(function () {
    return cachedNow = 0;
  }), cachedNow = Date.now());
};
function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case vuejs/vue#6566
    // inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // this no longer happens for templates in Vue 3, but could still be
    // theoretically possible for hand-written render functions.
    // the solution: we save the timestamp when a handler is attached,
    // and also attach the timestamp to any event that was handled by vue
    // for the first time (to avoid inconsistent event timestamp implementations
    // or events fired from iframes, e.g. #2513)
    // The handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* ErrorCodes.NATIVE_EVENT_HANDLER */, [e]);
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    var originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn && fn(e);
      };
    });
  } else {
    return value;
  }
}
var nativeOnRE = /^on[a-z]/;
var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;
  if (key === 'class') {
    patchClass(el, nextValue, isSVG);
  } else if (key === 'style') {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    // ignore v-model listeners
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    // special case for <input v-model type="checkbox"> with
    // :true-value & :false-value
    // store value as dom properties since non-string values will be
    // stringified.
    if (key === 'true-value') {
      el._trueValue = nextValue;
    } else if (key === 'false-value') {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML & textContent
    if (key === 'innerHTML' || key === 'textContent') {
      return true;
    }
    // or native onclick with function values
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  // these are enumerated attrs, however their corresponding DOM properties
  // are actually booleans - this leads to setting it with a string "false"
  // value leading it to be coerced to `true`, so we need to always treat
  // them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.
  if (key === 'spellcheck' || key === 'draggable' || key === 'translate') {
    return false;
  }
  // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.
  if (key === 'form') {
    return false;
  }
  // #1526 <input list> must be set as attribute
  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  }
  // #2766 <textarea type> must be set as attribute
  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  }
  // native onclick with string value, must be set as attribute
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    "default": true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
/*#__PURE__*/extend({}, BaseTransition.props, DOMTransitionPropsValidators);
var rendererOptions = /*#__PURE__*/extend({
  patchProp: patchProp
}, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
var renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
var createApp = function createApp() {
  var _ensureRenderer2;
  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);
  {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  var mount = app.mount;
  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    }
    // clear content before mounting
    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }
    return proxy;
  };
  return app;
};
function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return isHTMLTag(tag) || isSVGTag(tag);
    },
    writable: false
  });
}
// dev only
function injectCompilerOptionsCheck(app) {
  if (isRuntimeOnly()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        warn("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        warn(msg);
        return compilerOptions;
      },
      set: function set() {
        warn(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    var res = document.querySelector(container);
    if (!res) {
      warn("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }
    return res;
  }
  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') {
    warn("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }
  return container;
}

function initDev() {
  {
    initCustomFormatter();
  }
}

// This entry exports the runtime only, and is built as
{
  initDev();
}

const _hoisted_1 = { class: "app" };
const _hoisted_2 = { class: "text" };
    
var script = {
  __name: 'app',
  setup(__props) {

    const state = reactive({
      count: 0
    });
    const onClick = () => {
      state.count ++;
    };
  
return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, "Count: " + toDisplayString(state.count), 1 /* TEXT */),
    createBaseVNode("button", {
      class: "btn",
      onClick: onClick
    }, "Add")
  ]))
}
}

};

script.__file = "src/app.vue";

document.addEventListener('DOMContentLoaded', function () {
  var app = createApp(script);
  app.moumt('#app');
});
