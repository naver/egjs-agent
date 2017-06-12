import {navigator, RegExp} from "./browser";

const userAgentRules = {
	browser: [{
		criteria: "PhantomJS",
		identity: "PhantomJS",
	}, {
		criteria: /Whale/,
		identity: "Whale",
		versionSearch: "Whale",
	}, {
		criteria: /Edge/,
		identity: "Edge",
		versionSearch: "Edge",
	}, {
		criteria: /MSIE|Trident|Windows Phone/,
		identity: "IE",
		versionSearch: "IEMobile|MSIE|rv",
	}, {
		criteria: /MiuiBrowser/,
		identity: "MIUI Browser",
		versionSearch: "MiuiBrowser",
	}, {
		criteria: /SamsungBrowser/,
		identity: "Samsung Internet",
		versionSearch: "SamsungBrowser",
	}, {
		criteria: /SAMSUNG /,
		identity: "Samsung Internet",
		versionSearch: "Version",
	}, {
		criteria: /Chrome|CriOS/,
		identity: "Chrome",
	}, {
		criteria: /Android/,
		identity: "Android Browser",
		versionSearch: "Version",
	}, {
		criteria: /iPhone|iPad/,
		identity: "Safari",
		versionSearch: "Version",
	}, {
		criteria: "Apple",
		identity: "Safari",
		versionSearch: "Version",
	}, {
		criteria: "Firefox",
		identity: "Firefox",
	}],
	os: [{
		criteria: /Windows Phone/,
		identity: "Windows Phone",
		versionSearch: "Windows Phone",
	}, {
		criteria: "Windows NT 6.3",
		identity: "Window",
		versionAlias: "8.1",
	}, {
		criteria: "Windows NT 6.2",
		identity: "Window",
		versionAlias: "8",
	}, {
		criteria: "Windows NT 6.1",
		identity: "Window",
		versionAlias: "7",
	}, {
		criteria: "Windows NT 6.0",
		identity: "Window",
		versionAlias: "Vista",
	}, {
		criteria: "Windows NT 5.1",
		identity: "Window",
		versionAlias: "XP",
	}, {
		criteria: "Windows NT 5.2",
		identity: "Window",
		versionAlias: "XP",
	}, {
		criteria: "Windows NT 5.1",
		identity: "Window",
		versionAlias: "XP",
	}, {
		criteria: /Windows NT 5.0|Windows NT 5.01/,
		identity: "Window",
		versionAlias: "2000",
	}, {
		criteria: "Windows 2000",
		identity: "Window",
		versionAlias: "2000",
	}, {
		criteria: /Windows NT/,
		identity: "Window",
		versionSearch: "Windows NT",
	}, {
		criteria: /iPhone|iPad/,
		identity: "iOS",
		versionSearch: "iPhone OS|CPU OS",
	}, {
		criteria: "Mac",
		versionSearch: "OS X",
		identity: "MAC",
	}, {
		criteria: /Android/,
		identity: "Android",
	}],

	// Webview check condition
	// ios: If has no version information
	// Android 5.0 && chrome 40+: Presence of "; wv" in userAgent
	// Under android 5.0:  Presence of "NAVER" or "Daum" in userAgent
	webview: [{
		criteria: /iPhone|iPad/,
		browserVersionSearch: "Version",
		webviewBrowserVersion: /-1/,
	}, {
		criteria: /iPhone|iPad|Android/,
		webviewToken: /NAVER|DAUM|; wv/,

	}],
	defaultString: {
		browser: {
			version: "-1",
			name: "default",
		},
		os: {
			version: "-1",
			name: "unknown",
		},
	},
};

let UA;

function isMatched(base, target) {
	return target &&
		target.test ? !!target.test(base) : base.indexOf(target) > -1;
}

function getIdentityStringFromArray(rules, defaultStrings) {
	const matchedRule = rules.filter(rule => isMatched(UA, rule.criteria))[0];

	return (matchedRule && matchedRule.identity) || defaultStrings.name;
}

function getBrowserName(browserRules) {
	return getIdentityStringFromArray(browserRules, userAgentRules.defaultString.browser);
}

function getRule(rules, targetIdentity) {
	return rules.filter(rule => {
		const criteria = rule.criteria;
		const identityMatched = new RegExp(rule.identity, "i").test(targetIdentity);

		if (criteria ?
			identityMatched && isMatched(UA, criteria) :
			identityMatched) {
			return true;
		} else {
			return false;
		}
	})[0];
}

function getBrowserRule(browserName) {
	return getRule(userAgentRules.browser, browserName);
}

function extractBrowserVersion(versionToken, ua) {
	let browserVersion = userAgentRules.defaultString.browser.version;
	const versionRegexResult =
		(new RegExp(`(${versionToken})`, "i")).exec(ua);

	if (!versionRegexResult) {
		return browserVersion;
	}

	const versionTokenIndex = versionRegexResult.index;
	const verTkn = versionRegexResult[0];

	if (versionTokenIndex > -1) {
		const versionIndex = versionTokenIndex + verTkn.length + 1;

		browserVersion = ua.substring(versionIndex)
			.split(" ")[0]
			.replace(/_/g, ".")
			.replace(/;|\)/g, "");
	}
	return browserVersion;
}

function getBrowserVersion(browserName) {
	if (!browserName) {
		return undefined;
	}
	const versionToken = getBrowserRule(browserName).versionSearch || browserName;
	const browserVersion = extractBrowserVersion(versionToken, UA);

	return browserVersion;
}

function getOSName(osRules) {
	return getIdentityStringFromArray(osRules, userAgentRules.defaultString.os);
}

function getOSRule(osName) {
	return getRule(userAgentRules.os, osName);
}

function getOSVersion(osName) {
	const osRule = getOSRule(osName) || {};
	const defaultOSVersion = userAgentRules.defaultString.os.version;
	let osVersion;

	if (!osName) {
		return undefined;
	}
	if (osRule.versionAlias) {
		return osRule.versionAlias;
	}
	const osVersionToken = osRule.versionSearch || osName;
	const osVersionRegex =
		new RegExp(`(${osVersionToken})\\s([\\d_\\.]+|\\d_0)`, "i");
	const osVersionRegexResult = osVersionRegex.exec(UA);

	if (osVersionRegexResult) {
		osVersion = osVersionRegex.exec(UA)[2].replace(/_/g, ".")
											.replace(/;|\)/g, "");
	}
	return osVersion || defaultOSVersion;
}

function isWebview() {
	const webviewRules = userAgentRules.webview;
	let browserVersion;

	return webviewRules.filter(rule => isMatched(UA, rule.criteria))
		.some(rule => {
			browserVersion =
				extractBrowserVersion(rule.browserVersionSearch, UA);
			if (isMatched(UA, rule.webviewToken) ||
				isMatched(browserVersion, rule.webviewBrowserVersion)) {
				return true;
			} else {
				return false;
			}
		});
}

function postProcess(agent) {
	agent.browser.name = agent.browser.name.toLowerCase();
	agent.os.name = agent.os.name.toLowerCase();

	if (agent.os.name === "ios" && agent.browser.webview) {
		agent.browser.version = "-1";
	}
	return agent;
}

/**
 * @namespace eg
 */

/**
 * @typedef {Object} AgentInfo
 * @property {Object} browser a object that contains browser information <ko>브라우저 정보를 담은 객체</ko>
 * @property {String} browser.name name of the browser <ko>브라우저 이름</ko>
 * @property {String} browser.version version of the browser <ko>브라우저 버전</ko>
 * @property {Object} os a object that contains OS information <ko>운영체제 정보를 담은 객체</ko>
 * @property {String} os.name name of the OS <ko>운영체제 이름</ko>
 * @property {String} os.version version of the OS <ko>운영체제 버전</ko>
 */

/**
 * Returns browser and OS information by parsing User-Agent string.
 * @ko 유저 에이전트 문자열을 파싱하여 브라우저와 운영체제 정보를 반환한다.
 * @name eg#Agent
 * @alias eg.Agent
 * @method
 * @param {String} [uastring=navigator.userAgent] The user-agent string to parse. <ko>환경 분석에 사용할 유저에이전트 문자열</ko>
 * @return {AgentInfo} agent information <ko>사용자 환경 정보</ko>
 * @example
 * ```javascript
 * var agent = eg.Agent(); // eg.Agent will use browser's navigator.userAgent
 * console.log(agent);
 * // console.log will print below
 * {
 *  browser: {
 *	 name: "",
 *	 version: "",
 *	 isWebview: true or false
 *  },
 *  os: {
 *	 name: "",
 *	 version: ""
 *  }
 * }
 * var agent = eg.Agent(ua); // eg.Agent will use given user-agent string
 * ```
 */
function Agent(uastring) {
	if (uastring) {
		UA = uastring;
	} else {
		UA = navigator.userAgent;
	}

	const agent = {
		os: {},
		browser: {},
	};

	agent.browser.name = getBrowserName(userAgentRules.browser);
	agent.browser.version = getBrowserVersion(agent.browser.name);
	agent.os.name = getOSName(userAgentRules.os);
	agent.os.version = getOSVersion(agent.os.name);
	agent.browser.webview = isWebview();

	agent.browser.name = agent.browser.name.toLowerCase();
	agent.os.name = agent.os.name.toLowerCase();

	return postProcess(agent);
}

export default Agent;
