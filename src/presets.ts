import { PresetInfo } from "./types";

export const BROWSER_PRESETS: PresetInfo[] = [
    {
        test: "phantomjs",
        id: "phantomjs",
    },
    {
        test: "whale",
        id: "whale",
    }, {
        test: "edgios|edge|edg",
        id: "edge",
    },
    {
        test: "msie|trident|windows phone",
        id: "ie",
        versionTest: "iemobile|msie|rv",
    },
    {
        test: "miuibrowser",
        id: "miui browser",
    },
    {
        test: "samsungbrowser",
        id: "samsung internet",
    },
    {
        test: "samsung",
        id: "samsung internet",
        versionTest: "version",
    },
    {
        test: "chrome|crios",
        id: "chrome",
    },
    {
        test: "firefox|fxios",
        id: "firefox",
    },
    {
        test: "android",
        id: "android browser",
        versionTest: "version",
    },
    {
        test: "safari|iphone|ipad|ipod",
        id: "safari",
        versionTest: "version",
    },
];

// chromium's engine(blink) is based on applewebkit 537.36.
export const CHROMIUM_PRESETS: PresetInfo[] = [
    {
        test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
        id: "chrome",
        versionTest: "chrome",
    },
    {
        test: "chromium",
        id: "chrome",
    },
    {
        test: "whale",
        id: "chrome",
        versionAlias: "-1",
        brand: true,
    },
];
export const WEBKIT_PRESETS: PresetInfo[] = [
    {
        test: "applewebkit",
        id: "webkit",
        versionTest: "applewebkit|safari",
    },
];
export const WEBVIEW_PRESETS: PresetInfo[] = [
    {
        test: "(?=(iphone|ipad))(?!(.*version))",
        id: "webview",
    },
    {
        test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
        id: "webview",
    },
    {
        // test webview
        test: "webview",
        id: "webview",
    },
];
export const OS_PRESETS: PresetInfo[] = [
    {
        test: "windows phone",
        id: "windows phone",
    },
    {
        test: "windows 2000",
        id: "window",
        versionAlias: "5.0",
    },
    {
        test: "windows nt",
        id: "window",
    },
    {
        test: "win32|windows",
        id: "window",
    },
    {
        test: "iphone|ipad|ipod",
        id: "ios",
        versionTest: "iphone os|cpu os",
    },
    {
        test: "macos|macintel|mac os x",
        id: "mac",
    },
    {
        test: "android|linux armv81",
        id: "android",
    },
    {
        test: "tizen",
        id: "tizen",
    },
    {
        test: "webos|web0s",
        id: "webos",
    },
    // {
    //     test: "linux|ubuntu|debian",
    //     id: "linux",
    //     versionAlias: "-1",
    // },
];
