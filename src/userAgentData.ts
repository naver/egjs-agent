import { UADataValues, AgentInfo, AgentBrowserInfo, AgentOSInfo } from "./types";
import { some, find, findBrand, convertVersion, findPresetBrand, getUserAgentString } from "./utils";
import { BROWSER_PRESETS, OS_PRESETS, CHROMIUM_PRESETS, WEBKIT_PRESETS, WEBVIEW_PRESETS } from "./presets";
import { isWebView } from "./userAgent";

export function getClientHintsAgent(osData?: UADataValues): AgentInfo {
    const userAgentData = navigator.userAgentData;
    const brands = [...(userAgentData.uaList || userAgentData.brands)!];
    const fullVersionList = osData && osData.fullVersionList;
    const isMobile = userAgentData.mobile || false;
    const firstBrand = brands[0];
    const platform = (osData && osData.platform || userAgentData.platform || navigator.platform).toLowerCase();
    const browser: AgentBrowserInfo = {
        name: firstBrand.brand,
        version: firstBrand.version,
        majorVersion: -1,
        webkit: false,
        webkitVersion: "-1",
        chromium: false,
        chromiumVersion: "-1",
        webview: !!findPresetBrand(WEBVIEW_PRESETS, brands).brand || isWebView(getUserAgentString()),
    };
    const os: AgentOSInfo = {
        name: "unknown",
        version: "-1",
        majorVersion: -1,
    };
    browser.webkit = !browser.chromium && some(WEBKIT_PRESETS, preset => findBrand(brands, preset));

    const chromiumBrand = findPresetBrand(CHROMIUM_PRESETS, brands);

    browser.chromium = !!chromiumBrand.brand;
    browser.chromiumVersion = chromiumBrand.version || "-1";
    if (!browser.chromium) {
        const webkitBrand = findPresetBrand(WEBKIT_PRESETS, brands);

        browser.webkit = !!webkitBrand.brand;
        browser.webkitVersion = webkitBrand.version || "-1";
    }

    const platfomResult = find(OS_PRESETS, preset => {
        return new RegExp(`${preset.test}`, "g").exec(platform);
    });
    os.name = platfomResult ? platfomResult.id : "";

    if (osData) {
        os.version = osData.platformVersion || "-1";
    }
    if (fullVersionList && fullVersionList.length) {
        const browserBrandByFullVersionList = findPresetBrand(BROWSER_PRESETS, fullVersionList);

        browser.name = browserBrandByFullVersionList.brand || browser.name;
        browser.version = browserBrandByFullVersionList.version || browser.version;
    } else {
        const browserBrand = findPresetBrand(BROWSER_PRESETS, brands);

        browser.name = browserBrand.brand || browser.name;
        browser.version = browserBrand.brand && osData ? osData.uaFullVersion : browserBrand.version;
    }
    if (browser.webkit) {
        os.name = isMobile ? "ios" : "mac";
    }
    if (os.name === "ios" && browser.webview) {
        browser.version = "-1";
    }

    os.version = convertVersion(os.version);
    browser.version = convertVersion(browser.version);
    os.majorVersion = parseInt(os.version, 10);
    browser.majorVersion = parseInt(browser.version, 10);

    return {
        browser,
        os,
        isMobile,
        isHints: true,
    };
}
