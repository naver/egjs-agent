import { UADataValues, AgentInfo, AgentBrowserInfo, AgentOSInfo } from "./types";
import { some, find, findBrand, convertVersion, findPresetBrand } from "./utils";
import { BROWSER_PRESETS, OS_PRESETS, CHROMIUM_PRESETS, WEBKIT_PRESETS, WEBVIEW_PRESETS } from "./presets";

export function parseUserAgentData(osData?: UADataValues): AgentInfo {
    const userAgentData = navigator.userAgentData;
    const brands = [...(userAgentData.uaList || userAgentData.brands)!];
    const isMobile = userAgentData.mobile || false;
    const firstBrand = brands[0];
    const browser: AgentBrowserInfo = {
        name: firstBrand.brand,
        version: firstBrand.version,
        majorVersion: -1,
        webkit: false,
        webkitVersion: "-1",
        chromium: false,
        chromiumVersion: "-1",
        webview: !!findPresetBrand(WEBVIEW_PRESETS, brands).brand,
    };
    const os: AgentOSInfo = {
        name: "unknown",
        version: "-1",
        majorVersion: -1,
    };
    browser.webkit = !browser.chromium && some(WEBKIT_PRESETS, preset => findBrand(brands, preset));

    const chromiumBrand = findPresetBrand(CHROMIUM_PRESETS, brands);

    browser.chromium = !!chromiumBrand.brand;
    browser.chromiumVersion = chromiumBrand.version;
    if (!browser.chromium) {
        const webkitBrand = findPresetBrand(WEBKIT_PRESETS, brands);

        browser.webkit = !!webkitBrand.brand;
        browser.webkitVersion = webkitBrand.version;
    }
    if (osData) {
        const platform = osData.platform.toLowerCase();

        const result = find(OS_PRESETS, preset => {
            return new RegExp(`${preset.test}`, "g").exec(platform);
        });
        os.name = result ? result.id : platform;
        os.version = osData.platformVersion;
    }
    const browserBrand = findPresetBrand(BROWSER_PRESETS, brands);

    if (browserBrand.brand) {
        browser.name = browserBrand.brand;
        browser.version = osData ? osData.uaFullVersion : browserBrand.version;
    }
    if (navigator.platform === "Linux armv8l") {
        os.name = "android";
    } else if (browser.webkit) {
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
