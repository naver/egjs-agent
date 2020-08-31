import { AgentInfo } from "./types";
import { getUserAgent, findPreset } from "./utils";
import { WEBVIEW_PRESETS, CHROMIUM_PRESETS, BROWSER_PRESETS, OS_PRESETS, WEBKIT_PRESETS } from "./presets";

export function parseUserAgent(userAgent?: string): AgentInfo {
    const nextAgent = getUserAgent(userAgent);
    const isMobile = !!/mobi/g.exec(nextAgent);
    const browser = {
        name: "unknown",
        version: "-1",
        majorVersion: -1,
        webview: !!findPreset(WEBVIEW_PRESETS, nextAgent).preset,
        chromium: !!findPreset(CHROMIUM_PRESETS, nextAgent).preset,
        webkit: false,
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

    browser.webkit = !browser.chromium && !!findPreset(WEBKIT_PRESETS, nextAgent).preset;

    if (osPreset) {
        os.name = osPreset.id;
        os.version = osVersion;
        os.majorVersion = parseInt(osVersion, 10);
    }
    if (browserPreset) {
        browser.name = browserPreset.id;
        browser.version = browserVersion;

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
