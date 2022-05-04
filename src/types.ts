
/**
 * @memberof eg.agent
 * @typedef
 * @property - Agent name <ko>에이전트 이름 </ko>
 * @property - Agent version <ko>에이전트 버전 </ko>
 * @property - Agent major version <ko>에이전트 메이저 버전 </ko>
 */
export interface AgentVersionInfo {
    name: string;
    version: string;
    majorVersion: number;
}
/**
**
 * @memberof eg.agent
 * @extends eg.agent.AgentVersionInfo
 * @typedef - OS information <ko>OS 정보</ko>
 */
export interface AgentOSInfo extends AgentVersionInfo {}

/**
 * @memberof eg.agent
 * @extends eg.agent.AgentVersionInfo
 * @typedef - Browser information <ko>브라우저 정보</ko>
 * @property - Whether the browser is webkit <ko>브라우저가 webkit인지 여부</ko>
 * @property - Version of the webkit. If it is not webkit, "-1" is returned.<ko>webkit의 버전. webkit가 아닌 경우 "-1"을 반환한다.</ko>
 * @property - Whether the browser is chromium. Check applewebkit/537.6 and chrome<ko>브라우저가 chromium인지 여부. applewebkit/537.6과 chrome을 검사한다.</ko>
 * @property - Version of the chromium. If it is not chromium, "-1" is returned.<ko>chromium의 버전. chromium이 아닌 경우 "-1"을 반환한다.</ko>
 * @property - Whether the browser is webview.<ko>브라우저가 웹뷰인지 여부</ko>
 */
export interface AgentBrowserInfo extends AgentVersionInfo {
    webkit: boolean;
    webkitVersion: string;
    chromium: boolean;
    chromiumVersion: string;
    webview: boolean;
}

/**
 * @memberof eg.agent
 * @typedef - All Agent information <ko>모든 에이전트 정보</ko>
 * @property - Browser information <ko>브라우저 정보</ko>
 * @property - OS information <ko>OS 정보</ko>
 * @property - Whether the browser is for mobile<ko>모바일 브라우저 여부</ko>
 * @property - Whether agent information is obtained from Client Hints <ko> 에이전트 정보가 Client Hints로 얻어온 정보인지 여부</ko>
 */
export interface AgentInfo {
    browser: AgentBrowserInfo;
    os: AgentOSInfo;
    isMobile: boolean;
    isHints: boolean;
}

export interface PresetInfo {
    test: string;
    id: string;
    brand?: boolean;
    versionTest?: string;
    versionAlias?: string;
}
export interface PresetResult {
    preset: PresetInfo | null;
    version: string;
}

export interface NavigatorUABrandVersion {
    brand: string;
    version: string;
}

export interface UADataValues {
    platform: string;
    platformVersion: string;
    architecture: string;
    model: string;
    uaFullVersion: string;
    fullVersionList: NavigatorUABrandVersion[];
}
export interface NavigatorUAData {
    brands?: NavigatorUABrandVersion[];
    uaList?: NavigatorUABrandVersion[];
    mobile: boolean;
    platform: string;
    getHighEntropyValues<T extends keyof UADataValues>(hints: readonly T[]): Promise<{
        [key in T]: UADataValues[key]
    }>;
}
