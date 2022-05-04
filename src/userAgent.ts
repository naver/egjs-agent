import { AgentInfo } from "./types";
import { getUserAgentString, findPreset } from "./utils";
import { WEBVIEW_PRESETS, CHROMIUM_PRESETS, BROWSER_PRESETS, OS_PRESETS, WEBKIT_PRESETS } from "./presets";

export function isWebView(userAgent: string): boolean {
    return !!findPreset(WEBVIEW_PRESETS, userAgent).preset;
}

export function getLegacyAgent(userAgent?: string): AgentInfo {
    const nextAgent = getUserAgentString(userAgent);
    const isMobile = !!/mobi/g.exec(nextAgent);
    const browser = {
        name: "unknown",
        version: "-1",
        majorVersion: -1,
        webview: isWebView(nextAgent),
        chromium: false,
        chromiumVersion: "-1",
        webkit: false,
        webkitVersion: "-1",
    };
    const os = {
        name: "unknown",
        version: "-1",
        majorVersion: -1,
    };
    const {
        preset: browserPreset,
        version: browserVersion,
    } = findPreset(BROWSER_PRESETS, nextAgent);

    const {
        preset: osPreset,
        version: osVersion,
    } = findPreset(OS_PRESETS, nextAgent);

    const chromiumPreset = findPreset(CHROMIUM_PRESETS, nextAgent);

    browser.chromium = !!chromiumPreset.preset;
    browser.chromiumVersion = chromiumPreset.version;
    if (!browser.chromium) {
        const webkitPreset = findPreset(WEBKIT_PRESETS, nextAgent);

        browser.webkit = !!webkitPreset.preset;
        browser.webkitVersion = webkitPreset.version;
    }

    if (osPreset) {
        os.name = osPreset.id;
        os.version = osVersion;
        os.majorVersion = parseInt(osVersion, 10);
    }
    if (browserPreset) {
        browser.name = browserPreset.id;
        browser.version = browserVersion;

        // Early whale bugs
        if (browser.webview && os.name === "ios" && browser.name !== "safari") {
            browser.webview = false;
        }
    }
    browser.majorVersion = parseInt(browser.version, 10);

    return {
        browser,
        os,
        isMobile,
        isHints: false,
    };
}
