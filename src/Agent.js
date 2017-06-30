/**
 * Copyright (c) NAVER Corp.
 * egjs-agent projects are licensed under the MIT license
 */
import {navigator} from "./browser";
import Parser from "./Parser";

/**
 * @typedef {Object} BrowserInfo
 * @property {String} name browser name
 * @property {String} version browser version
 * @property {Boolean} webview is webview or not
 */

/**
 * @typedef {Object} OsInfo
 * @property {String} name OS name
 * @property {String} version OS version
 */

/**
 * @typedef {Object} AgentInfo
 * @property {BrowserInfo} browser browser information
 * @property {OsInfo} os browser information
 */

/**
 * Extracts browser and operating system information from the user agent string.
 * @ko 유저 에이전트 문자열에서 브라우저와 운영체제 정보를 추출한다.
 * @param {String} [userAgent=navigator.userAgent] user agent string to parse <ko>파싱할 유저에이전트 문자열</ko>
 * @return {AgentInfo} result
 */
function Agent(ua = navigator.userAgent) {
	Parser.setUa(ua);

	const agent = {
		os: Parser.getOs(),
		browser: Parser.getBrowser(),
	};

	agent.browser.name = agent.browser.name.toLowerCase();
	agent.os.name = agent.os.name.toLowerCase();
	agent.os.version = agent.os.version.toLowerCase();

	if (agent.os.name === "ios" && agent.browser.webview) {
		agent.browser.version = "-1";
	}

	return agent;
}

export default Agent;
