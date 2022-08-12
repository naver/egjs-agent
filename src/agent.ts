import { AgentInfo } from "./types";
import { hasUserAgentData } from "./utils";
import { getClientHintsAgent } from "./userAgentData";
import { getLegacyAgent } from "./userAgent";

/**
 * @namespace eg.agent
 */

/**
* Extracts accuate browser and operating system information from the user agent string or client hints.
* @ko 유저 에이전트 문자열 또는 client hints에서 정확한 브라우저와 운영체제 정보를 추출한다.
* @function eg.agent#getAccurateAgent
* @param - Callback function to get the accuate agent <ko>정확한 에이전트를 가져오기 위한 callback 함수</ko>
* @return - get the accuate agent promise. If Promise are not supported, null is returned. <ko> 정확한 에이전트 promise를 가져온다. Promise를 지원 하지 않는 경우, null을 반환한다. </ko>
* @example
import { getAccurateAgent } from "@egjs/agent";
// eg.agent.getAccurateAgent()
getAccurateAgent().then(agent => {
   const { os, browser, isMobile } = agent;
});
getAccurateAgent(agent => {
    const { os, browser, isMobile } = agent;
});
*/
export function getAccurateAgent(callback?: (result: AgentInfo) => void): Promise<AgentInfo> | null {
    if (hasUserAgentData()) {
        return navigator.userAgentData.getHighEntropyValues([
            "architecture",
            "model",
            "platform",
            "platformVersion",
            "uaFullVersion",
            "fullVersionList",
        ]).then(info => {
            const agentInfo = getClientHintsAgent(info);

            callback && callback(agentInfo);
            return agentInfo;
        });
    }
    callback && callback(agent());
    if (typeof Promise === "undefined" || !Promise) {
        return null;
    }
    return Promise.resolve(agent());
}



/**
 * Extracts browser and operating system information from the user agent string.
 * @ko 유저 에이전트 문자열에서 브라우저와 운영체제 정보를 추출한다.
 * @function eg.agent#agent
 * @param - user agent string to parse <ko>파싱할 유저에이전트 문자열</ko>
 * @return - agent Info <ko> 에이전트 정보 </ko>
 * @example
import agent from "@egjs/agent";
// eg.agent();
const { os, browser, isMobile } = agent();
 */
function agent(userAgent?: string): AgentInfo {
    if (typeof userAgent === "undefined" && hasUserAgentData()) {
        return getClientHintsAgent();
    } else {
        return getLegacyAgent(userAgent);
    }
}
export { getLegacyAgent };

export default agent;

export * from "./types";
