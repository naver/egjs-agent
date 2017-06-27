/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/agent project is licensed under the MIT license
 * 
 * @egjs/agent JavaScript library
 * 
 * 
 * @version 2.0.0-pre
 * 
 * All-in-one packaged file for ease use of '@egjs/agent' with below dependencies.
 * NOTE: This is not an official distribution file and is only for user convenience.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Agent", [], factory);
	else if(typeof exports === 'object')
		exports["Agent"] = factory();
	else
		root["eg"] = root["eg"] || {}, root["eg"]["Agent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _browser = __webpack_require__(2);

var _Parser = __webpack_require__(1);

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extracts browser and operating system information from the user agent string.
 * @ko 유저 에이전트 문자열에서 브라우저와 운영체제 정보를 추출한다.
 * @alias eg.Agent
 */
/**
 * Copyright (c) NAVER Corp.
 * egjs-agent projects are licensed under the MIT license
 */
function Agent() {
	var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _browser.navigator.userAgent;

	_Parser2.default.setUa(ua);

	var agent = {
		os: _Parser2.default.getOs(),
		browser: _Parser2.default.getBrowser()
	};

	agent.browser.name = agent.browser.name.toLowerCase();
	agent.os.name = agent.os.name.toLowerCase();
	agent.os.version = agent.os.version.toLowerCase();

	if (agent.os.name === "ios" && agent.browser.webview) {
		agent.browser.version = "-1";
	}

	return agent;
}

exports.default = Agent;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _parseRules = __webpack_require__(4);

var _parseRules2 = _interopRequireDefault(_parseRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UA = void 0;

function setUa(ua) {
	UA = ua;
}

function isMatched(base, target) {
	return target && target.test ? !!target.test(base) : base.indexOf(target) > -1;
}

function getIdentityStringFromArray(rules, defaultStrings) {
	var matchedRule = rules.filter(function (rule) {
		return isMatched(UA, rule.criteria);
	})[0];

	return matchedRule && matchedRule.identity || defaultStrings.name;
}

function getRule(rules, targetIdentity) {
	return rules.filter(function (rule) {
		var criteria = rule.criteria;
		var identityMatched = new RegExp(rule.identity, "i").test(targetIdentity);

		if (criteria ? identityMatched && isMatched(UA, criteria) : identityMatched) {
			return true;
		} else {
			return false;
		}
	})[0];
}

function getBrowserName() {
	return getIdentityStringFromArray(_parseRules2.default.browser, _parseRules2.default.defaultString.browser);
}

function getBrowserRule(browserName) {
	var rule = getRule(_parseRules2.default.browser, browserName);

	if (!rule) {
		rule = {
			criteria: browserName,
			versionSearch: browserName,
			identity: browserName
		};
	}

	return rule;
}

function extractBrowserVersion(versionToken, ua) {
	var browserVersion = _parseRules2.default.defaultString.browser.version;
	var versionRegexResult = new RegExp("(" + versionToken + ")", "i").exec(ua);

	if (!versionRegexResult) {
		return browserVersion;
	}

	var versionTokenIndex = versionRegexResult.index;
	var verTkn = versionRegexResult[0];

	if (versionTokenIndex > -1) {
		var versionIndex = versionTokenIndex + verTkn.length + 1;

		browserVersion = ua.substring(versionIndex).split(" ")[0].replace(/_/g, ".").replace(/;|\)/g, "");
	}
	return browserVersion;
}

function getBrowserVersion(browserName) {
	if (!browserName) {
		return undefined;
	}

	// console.log(browserRule);
	// const versionToken = browserRule ? browserRule.versionSearch : browserName;
	var browserRule = getBrowserRule(browserName);
	var versionToken = browserRule.versionSearch || browserName;
	var browserVersion = extractBrowserVersion(versionToken, UA);

	return browserVersion;
}

function isWebview() {
	var webviewRules = _parseRules2.default.webview;
	var browserVersion = void 0;

	return webviewRules.filter(function (rule) {
		return isMatched(UA, rule.criteria);
	}).some(function (rule) {
		browserVersion = extractBrowserVersion(rule.browserVersionSearch, UA);
		if (isMatched(UA, rule.webviewToken) || isMatched(browserVersion, rule.webviewBrowserVersion)) {
			return true;
		} else {
			return false;
		}
	});
}

function getOSRule(osName) {
	return getRule(_parseRules2.default.os, osName);
}

function getOsName() {
	return getIdentityStringFromArray(_parseRules2.default.os, _parseRules2.default.defaultString.os);
}

function getOsVersion(osName) {
	var osRule = getOSRule(osName) || {};
	var defaultOSVersion = _parseRules2.default.defaultString.os.version;
	var osVersion = void 0;

	if (!osName) {
		return undefined;
	}
	if (osRule.versionAlias) {
		return osRule.versionAlias;
	}
	var osVersionToken = osRule.versionSearch || osName;
	var osVersionRegex = new RegExp("(" + osVersionToken + ")\\s([\\d_\\.]+|\\d_0)", "i");
	var osVersionRegexResult = osVersionRegex.exec(UA);

	if (osVersionRegexResult) {
		osVersion = osVersionRegex.exec(UA)[2].replace(/_/g, ".").replace(/;|\)/g, "");
	}
	return osVersion || defaultOSVersion;
}

function getOs() {
	var name = getOsName();
	var version = getOsVersion(name);

	return { name: name, version: version };
}

function getBrowser() {
	var name = getBrowserName();
	var version = getBrowserVersion(name);

	return { name: name, version: version, webview: isWebview() };
}

exports.default = {
	getOs: getOs,
	getBrowser: getBrowser,
	setUa: setUa
};
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var win = typeof window !== "undefined" && window || {};

var RegExp = exports.RegExp = win.RegExp;
var navigator = exports.navigator = win.navigator;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Agent = __webpack_require__(0);

var _Agent2 = _interopRequireDefault(_Agent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Agent2.default.VERSION = "2.0.0-pre"; /**
                                        * Copyright (c) NAVER Corp.
                                        * egjs-agent projects are licensed under the MIT license
                                        */

module.exports = _Agent2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var parseRules = {
	browser: [{
		criteria: "PhantomJS",
		identity: "PhantomJS"
	}, {
		criteria: /Whale/,
		identity: "Whale",
		versionSearch: "Whale"
	}, {
		criteria: /Edge/,
		identity: "Edge",
		versionSearch: "Edge"
	}, {
		criteria: /MSIE|Trident|Windows Phone/,
		identity: "IE",
		versionSearch: "IEMobile|MSIE|rv"
	}, {
		criteria: /MiuiBrowser/,
		identity: "MIUI Browser",
		versionSearch: "MiuiBrowser"
	}, {
		criteria: /SamsungBrowser/,
		identity: "Samsung Internet",
		versionSearch: "SamsungBrowser"
	}, {
		criteria: /SAMSUNG /,
		identity: "Samsung Internet",
		versionSearch: "Version"
	}, {
		criteria: /Chrome|CriOS/,
		identity: "Chrome"
	}, {
		criteria: /Android/,
		identity: "Android Browser",
		versionSearch: "Version"
	}, {
		criteria: /iPhone|iPad/,
		identity: "Safari",
		versionSearch: "Version"
	}, {
		criteria: "Apple",
		identity: "Safari",
		versionSearch: "Version"
	}, {
		criteria: "Firefox",
		identity: "Firefox"
	}],
	os: [{
		criteria: /Windows Phone/,
		identity: "Windows Phone",
		versionSearch: "Windows Phone"
	}, {
		criteria: "Windows 2000",
		identity: "Window",
		versionAlias: "5.0"
	}, {
		criteria: /Windows NT/,
		identity: "Window",
		versionSearch: "Windows NT"
	}, {
		criteria: /iPhone|iPad/,
		identity: "iOS",
		versionSearch: "iPhone OS|CPU OS"
	}, {
		criteria: "Mac",
		versionSearch: "OS X",
		identity: "MAC"
	}, {
		criteria: /Android/,
		identity: "Android"
	}],

	// Webview check condition
	// ios: If has no version information
	// Android 5.0 && chrome 40+: Presence of "; wv" in userAgent
	// Under android 5.0: Presence of "NAVER" or "Daum" in userAgent
	webview: [{
		criteria: /iPhone|iPad/,
		browserVersionSearch: "Version",
		webviewBrowserVersion: /-1/
	}, {
		criteria: /iPhone|iPad|Android/,
		webviewToken: /NAVER|DAUM|; wv/

	}],
	defaultString: {
		browser: {
			version: "-1",
			name: "unknown"
		},
		os: {
			version: "-1",
			name: "unknown"
		}
	}
};

exports.default = parseRules;
module.exports = exports["default"];

/***/ })
/******/ ]);
});