const AGENT_LIST = [
    {
        // empty agent
        "name": "empty agent",
        "ua": "",
        "os": {
            "name": "unknown",
            "version": "-1",
        },
        "browser": {
            "name": "unknown",
            "version": "-1",
        },
        "isMobile": false,
    },
    {
        // Unknown agent
        "name": "unknown agent",
        "ua": "Mozilla/5.0 (PLAYSTATION 3; 1.00)",
        "os": {
            "name": "unknown",
            "version": "-1",
        },
        "browser": {
            "name": "unknown",
            "version": "-1",
        },
        "isMobile": false,
    },
    {
        // iPhone 3.0
        "name": "iPhone 3.0",
        "ua": "Mozilla/5.0 (iPod; U; CPU iPhone OS 3_0 like Mac OS X;ko-kr)AppleWebKit/528.18(KHTML, like Gecko)Version/4.0 Mobile/7A341 Safari/528.16",
        "os": {
            "name": "ios",
            "version": "3.0",
        },
        "browser": {
            "name": "safari",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "528.18",
        },
        "isMobile": true,
    },
    {
        // iPhone 4.3.3
        "name": "iPhone 4.3.3",
        "ua": "Mozilla/5.0 (iPhone;U;CPU iPhone OS 4_3_3 like Max OS X;ko-kr) AppleWebKit/533.17.9(KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5",
        "os": {
            "name": "ios",
            "version": "4.3.3",
        },
        "browser": {
            "name": "safari",
            "version": "5.0.2",
            "webkit": true,
            "webkitVersion": "533.17.9",
        },
        "isMobile": true,
    },
    {
        // iPad 4.2.1
        "name": "ipad 4.2.1",
        "ua": "Mozilla/5.0 (iPad;U;CPU OS 4_2_1 like Mac OS X;ko-kr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5",
        "os": {
            "name": "ios",
            "version": "4.2.1",
        },
        "browser": {
            "name": "safari",
            "version": "5.0.2",
            "webkit": true,
            "webkitVersion": "533.17.9",
        },
        "isMobile": true,
    },
    {
        // iPad 4.3.3
        "name": "ipad 4.3.3",
        "ua": "Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X;ko-kr)AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5",
        "os": {
            "name": "ios",
            "version": "4.3.3",
        },
        "browser": {
            "name": "safari",
            "version": "5.0.2",
            "webkit": true,
            "webkitVersion": "533.17.9",
        },
        "isMobile": true,
    },
    {
        // iPad 14.0
        "name": "iPad 14.0 (Mobile, Firefox)",
        "ua": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/28.0  Mobile/15E148 Safari/605.1.15",
        "os": {
            "name": "ios",
            "version": "14.0",
        },
        "browser": {
            "name": "firefox",
            "version": "28.0",
            "webkit": true,
            "webkitVersion": "605.1.15",
        },
        "isMobile": true,
    },
    {
        // iPad 14.0
        "name": "iPad 14.0 (Mobile, Edge)",
        "ua": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 EdgiOS/45.7.3 Mobile/15E148 Safari/605.1.15",
        "os": {
            "name": "ios",
            "version": "14.0",
        },
        "browser": {
            "name": "edge",
            "version": "45.7.3",
            "webkit": true,
            "webkitVersion": "605.1.15",
        },
        "isMobile": true,
    },
    {
        // iPad 14.0
        "name": "iPad 14.0 (PC, Edge)",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/10.1 Safari/602.1 EdgiOS/45.7.3",
        "os": {
            "name": "mac",
            "version": "10.12.4",
        },
        "browser": {
            "name": "edge",
            "version": "45.7.3",
            "webkit": true,
            "webkitVersion": "604.3.5",
        },
        "isMobile": false,
    },
    {
        // iPad 14.0
        "name": "iPad 14.0 (Mobile, Whale)",
        "ua": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Whale/1.7.0.2222 Mobile/15E148 Safari/605.1.15",
        "os": {
            "name": "ios",
            "version": "14.0",
        },
        "browser": {
            "name": "whale",
            "version": "1.7.0.2222",
            "webkit": true,
            "webkitVersion": "605.1.15",
        },
        "isMobile": true,
    },
    {
        "name": "iPad 14.0 (Mobile, Whale bug)",
        "ua": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Whale/1.7.0.2222 Mobile/15E148 Safari/605.1.15 NAVER(inapp; whale; 134; 5.8.0)",
        "os": {
            "name": "ios",
            "version": "14.0",
        },
        "browser": {
            "name": "whale",
            "version": "1.7.0.2222",
            "webkit": true,
            "webview": false,
            "webkitVersion": "605.1.15",
        },
        "isMobile": true,
    },
    {
        // iPad 14.0
        "name": "iPad 14.0 (PC, Whale)",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Whale/1.7.0.2222 Safari/600.7.12",
        "os": {
            "name": "mac",
            "version": "10.10.4",
        },
        "browser": {
            "name": "whale",
            "version": "1.7.0.2222",
            "webkit": true,
            "webkitVersion": "600.7.12",
        },
        "isMobile": false,
    },
    {
        // iPhone 5.0.1
        "name": "iPhone 5.0.1",
        "ua": "Mozilla/5.0 (iPhone;CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3",
        "os": {
            "name": "ios",
            "version": "5.0.1",
        },
        "browser": {
            "name": "safari",
            "version": "5.1",
            "webkit": true,
            "webkitVersion": "534.46",
        },
        "isMobile": true,
    },
    {
        // iPhone 6.0
        "name": "iPhone 6.0",
        "ua": "Mozilla/5.0 (iPhone;CPU iPhone OS 6_0_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A551 Safari/8536.25",
        "os": {
            "name": "ios",
            "version": "6.0.2",
        },
        "browser": {
            "name": "safari",
            "version": "6.0",
            "webkit": true,
            "webkitVersion": "536.26",
        },
        "isMobile": true,
    },
    {
        // iPhone 6.1.2
        "name": "iPhone 6.1.2",
        "ua": "Mozilla/5.0 (iPhone;CPU iPhone OS 6_1_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B146 Safari/8536.25",
        "os": {
            "name": "ios",
            "version": "6.1.2",
        },
        "browser": {
            "name": "safari",
            "version": "6.0",
            "webkit": true,
            "webkitVersion": "536.26",
        },
        "isMobile": true,
    },
    {
        // iPhone 7.0
        "name": "iPhone 7.0",
        "ua": "Mozilla/5.0 (iPhone;CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B146 Safari/8536.25",
        "os": {
            "name": "ios",
            "version": "7.0",
        },
        "browser": {
            "name": "safari",
            "version": "6.0",
            "webkit": true,
            "webkitVersion": "536.26",
        },
        "isMobile": true,
    },
    {
        // iPhone 8.0
        "name": "iPhone 8.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4",
        "os": {
            "name": "ios",
            "version": "8.0",
        },
        "browser": {
            "name": "safari",
            "version": "8.0",
            "webkit": true,
            "webkitVersion": "600.1.4",
        },
        "isMobile": true,
    },
    {
        // iPhone 8.0 - webview (Naver)
        "name": "iPhone 8.0 - webview (Naver)",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440 NAVER(inapp; search; 390; 6.0.2)",
        "os": {
            "name": "ios",
            "version": "8.0",
        },
        "browser": {
            "name": "safari",
            "version": "-1",
            "webview": true,
            "webkit": true,
            "webkitVersion": "600.1.4",
        },
        "isMobile": true,
    },
    {
        // iPhone 8.0 - webview
        "name": "iPhone 8.0 - webview",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440",
        "os": {
            "name": "ios",
            "version": "8.0",
        },
        "browser": {
            "name": "safari",
            "version": "-1",
            "webview": true,
            "webkit": true,
            "webkitVersion": "600.1.4",
        },
        "isMobile": true,
    },
    {
        // iPhone 9.0
        "name": "iPhone 9.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1",
        "os": {
            "name": "ios",
            "version": "9.0",
        },
        "browser": {
            "name": "safari",
            "version": "9.0",
            "webkit": true,
            "webkitVersion": "601.1.46",
        },
        "isMobile": true,
    },
    {
        // iPhone 9.0 - webview (Naver) on iPhone 4S
        "name": "iPhone 9.0 - webview (Naver app)",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13A452 NAVER(inapp; search; 450; 6.4.5; 4S)",
        "os": {
            "name": "ios",
            "version": "9.0",
        },
        "browser": {
            "name": "safari",
            "version": "-1",
            "webview": true,
            "webkit": true,
            "webkitVersion": "601.1.46",
        },
        "isMobile": true,
    },
    {
        // iPhone 9.0 - webview (LINE app)
        "name": "iPhone 9.0 - webview (LINE app)",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13A452 Safari Line/5.4.0",
        "os": {
            "name": "ios",
            "version": "9.0",
        },
        "browser": {
            "name": "safari",
            "version": "-1",
            "webview": true,
            "webkit": true,
            "webkitVersion": "601.1.46",
        },
        "isMobile": true,
    },
    {
        // iPhone 10.0 - WKWebView
        "name": "iPhone 10.0 - WKWebView",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A456 NAVER(inapp; search; 560; 7.7.0; 7)",
        "os": {
            "name": "ios",
            "version": "10.0.2",
        },
        "browser": {
            "name": "safari",
            "version": "-1",
            "webview": true,
            "webkit": true,
            "webkitVersion": "602.1.50",
        },
        "isMobile": true,
    },
    {
        // iPad 10.0 - WKWebView
        "name": "iPad 10.0 - WKWebView",
        "ua": "Mozilla/5.0 (iPad; CPU OS 10_0_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A456 Version/5.1 Safari/7534.48.3 NAVER(inapp; search; 134; 7.7.0)",
        "os": {
            "name": "ios",
            "version": "10.0.2",
        },
        "browser": {
            "name": "safari",
            "version": "5.1",
            "webview": true,
            "webkit": true,
            "webkitVersion": "602.1.50",
        },
        "isMobile": true,
    },
    {
        // GalaxyS:2.1
        "name": "GalaxyS:2.1",
        "ua": "Mozilla/5.0 (Linux;U;Android 2.1;ko-kr;SHW-M110S Build/ÉCLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17",
        "os": {
            "name": "android",
            "version": "2.1",
            "webkit": true,
            "webkitVersion": "530.17",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "530.17",
        },
        "isMobile": true,
    },
    {
        // GalaxyS:2.2
        "name": "GalaxyS:2.2",
        "ua": "Mozilla/5.0 (Linux;U;Android 2.2;ko-kr;SHW-M110S Build/FROYO) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        "os": {
            "name": "android",
            "version": "2.2",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "533.1",
        },
        "isMobile": true,
    },
    {
        // GalaxyS:2.3.4
        "name": "GalaxyS:2.3.4",
        "ua": "Mozilla/5.0 (Linux;U;Android 2.3.4;ko-kr;SHW-M110S Build/GINGERBREAD)AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        "os": {
            "name": "android",
            "version": "2.3.4",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "533.1",
        },
        "isMobile": true,
    },
    {
        // GalaxyS2:2.3.3
        "name": "GalaxyS2:2.3.3",
        "ua": "Mozilla/5.0 (Linux;U;Android 2.3.3;ko-kr;SHW-M250S Build/GINGERBREAD) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        "os": {
            "name": "android",
            "version": "2.3.3",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "533.1",
        },
        "isMobile": true,
    },
    {
        // GalaxyNote:2.3.6
        "name": "GalaxyNote:2.3.6",
        "ua": "Mozilla/5.0 (Linux;U;Android 2.3.6;ko-kr;SHV-E160S Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        "os": {
            "name": "android",
            "version": "2.3.6",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "533.1",
        },
        "isMobile": true,
    },
    {
        // GalaxyTab2:3.1
        "name": "GalaxyTab2:3.1",
        "ua": "Mozilla/5.0 (Linux;U; Android 3.1;ko-kr;SHW-M380S Build/HMJ37) AppleWebkit/534.13(KHTML, like Gecko) Version/4.0 Safari/534.13",
        "os": {
            "name": "android",
            "version": "3.1",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "534.13",
        },
        "isMobile": false,
    },
    {
        // GalaxyNexus:4.0.1
        "name": "GalaxyNexus:4.0.1",
        "ua": "Mozilla/5.0 (Linux;U;Android 4.0.1;ko-kr;Galaxy Nexus Build/ITL41F)AppleWebKit/534.30 (KHTML, like Gecko)Version/4.0 Mobile Safari/534.30",
        "os": {
            "name": "android",
            "version": "4.0.1",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "534.30",
        },
        "isMobile": true,
    },
    {
        // GalaxyS3:4.0.4
        "name": "GalaxyS3:4.0.4",
        "ua": "Mozilla/5.0 (Linux; U; Android 4.0.4; ko-kr; SHV-E210S Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "os": {
            "name": "android",
            "version": "4.0.4",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "534.30",
        },
        "isMobile": true,
    },
    {
        // GalaxyS2:chrome
        "name": "GalaxyS2:chrome",
        "ua": "Mozilla/5.0 (Linux; U;Android 4.0.3;ko-kr; SHW-M250S Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.77 Mobile Safari/535.7",
        "os": {
            "name": "android",
            "version": "4.0.3",
        },
        "browser": {
            "name": "chrome",
            "version": "16.0.912.77",
            "chromium": true,
            "chromiumVersion": "16.0.912.77",
        },
        "isMobile": true,
    },
    {
        // GalaxyS4:4.2.2
        "name": "GalaxyS4:4.2.2",
        "ua": "Mozilla/5.0 (Linux; Android 4.2.2; ko-kr; SAMSUNG SHV-E300S Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19",
        "os": {
            "name": "android",
            "version": "4.2.2",
        },
        "browser": {
            "name": "samsung internet",
            "version": "1.0",
            "chromium": true,
            "chromiumVersion": "18.0.1025.308",
        },
        "isMobile": true,
    },
    {
        // GalaxyS4:chrome
        "name": "GalaxyS4:chrome",
        "ua": "Mozilla/5.0 (Linux; Android 4.2.2; SHV-E300S Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19",
        "os": {
            "name": "android",
            "version": "4.2.2",
        },
        "browser": {
            "name": "chrome",
            "version": "18.0.1025.166",
            "chromium": true,
            "chromiumVersion": "18.0.1025.166",
        },
        "isMobile": true,
    },
    {
        // GalaxyS5:chrome
        "name": "GalaxyS5:chrome",
        "ua": "Mozilla/5.0 (Linux; Android 4.4.2; SM-G900S Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.108 Mobile Safari/537.36",
        "os": {
            "name": "android",
            "version": "4.4.2",
        },
        "browser": {
            "name": "chrome",
            "version": "42.0.2311.108",
            "chromium": true,
            "chromiumVersion": "42.0.2311.108",
        },
        "isMobile": true,
    },
    {
        // GalaxyS5 4.4.2 - webview (NAVER app)
        "name": "GalaxyS5 - webview",
        "ua": "Mozilla/5.0 (Linux; Android 4.4.2; SM-G900S Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/28.0.1500.94 Mobile Safari/537.36 NAVER(inapp; search; 340; 6.0.5)",
        "os": {
            "name": "android",
            "version": "4.4.2",
        },
        "browser": {
            "name": "chrome",
            "version": "28.0.1500.94",
            "webview": true,
            "chromium": true,
            "chromiumVersion": "28.0.1500.94",
        },
        "isMobile": true,
    },
    {
        // GalaxyS5 5.0 - webview
        "name": "GalaxyS5 5.0 - webview",
        "ua": "Mozilla/5.0 (Linux; Android 5.0; SM-G900S Build/LRX21T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/42.0.2311.138 Mobile Safari/537.36",
        "os": {
            "name": "android",
            "version": "5.0",
        },
        "browser": {
            "name": "chrome",
            "version": "42.0.2311.138",
            "webview": true,
            "chromium": true,
            "chromiumVersion": "42.0.2311.138",
        },
        "isMobile": true,
    },
    {
        // GalaxyS5 - higgs
        "name": "GalaxyS5 - higgs",
        "ua": "Mozilla/5.0 (Linux; Android 4.4.2; SM-G900S Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.61 Mobile Safari/537.36 NAVER(higgs; search; 340; 6.0.5; 1.0.6.2)",
        "os": {
            "name": "android",
            "version": "4.4.2",
        },
        "browser": {
            "name": "chrome",
            "version": "33.0.1750.61",
            "webview": true,
            "chromium": true,
            "chromiumVersion": "33.0.1750.61",
        },
        "isMobile": true,
    },
    {
        // GalaxyS6 5.1.1
        "name": "GalaxyS6:5.1.1",
        "ua": "Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-G925S Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.2 Chrome/38.0.2125.102 Mobile Safari/537.36",
        "os": {
            "name": "android",
            "version": "5.1.1",
        },
        "browser": {
            "name": "samsung internet",
            "version": "3.2",
            "chromium": true,
            "chromiumVersion": "38.0.2125.102",
        },
        "isMobile": true,
    },
    {
        // GalaxyS6:chrome
        "name": "GalaxyS6:chrome",
        "ua": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G925S Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36",
        "os": {
            "name": "android",
            "version": "5.1.1",
        },
        "browser": {
            "name": "chrome",
            "version": "45.0.2454.84",
            "chromium": true,
            "chromiumVersion": "45.0.2454.84",
        },
        "isMobile": true,
    },
    {
        // GalaxyS6 5.1.1 - webview (Naver app)
        "name": "GalaxyS6 - webview (Naver app)",
        "ua": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G925S Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.95 Mobile Safari/537.36 NAVER(inapp; search; 390; 6.4.5)",
        "os": {
            "name": "android",
            "version": "5.1.1",
        },
        "browser": {
            "name": "chrome",
            "version": "45.0.2454.95",
            "webview": true,
            "chromium": true,
            "chromiumVersion": "45.0.2454.95",
        },
        "isMobile": true,
    },
    {
        // GalaxyS6 5.1.1 - webview (KAKAOTALK app)
        "name": "GalaxyS6 - webview (KAKAOTALK app)",
        "ua": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G925S Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/45.0.2454.95 Mobile Safari/537.36;KAKAOTALK",
        "os": {
            "name": "android",
            "version": "5.1.1",
        },
        "browser": {
            "name": "chrome",
            "version": "45.0.2454.95",
            "webview": true,
            "chromium": true,
            "chromiumVersion": "45.0.2454.95",
        },
        "isMobile": true,
    },
    {
        // GalaxyS6 5.1.1 - webview (Facebook app)
        "name": "GalaxyS6 - webview (Facebook app)",
        "ua": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G925S Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/45.0.2454.95 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/50.0.0.10.54;]",
        "os": {
            "name": "android",
            "version": "5.1.1",
        },
        "browser": {
            "name": "chrome",
            "version": "45.0.2454.95",
            "webview": true,
            "chromium": true,
            "chromiumVersion": "45.0.2454.95",
        },
        "isMobile": true,
    },

    {
        // GalaxyS7 Edge 6.0.1
        "name": "GalaxyS7Edge:6.0.1",
        "ua": "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-G935L Build/MMB29K) AppleWebkit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
        "os": {
            "name": "android",
            "version": "6.0.1",
        },
        "browser": {
            "name": "samsung internet",
            "version": "4.0",
            "chromium": true,
            "chromiumVersion": "44.0.2403.133",
        },
        "isMobile": true,
    },
    {
        // GalaxyS7 Edge 6.0.1:chrome
        "name": "GalaxyS7Edge:chrome",
        "ua": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G935L Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.91 Mobile Safari/537.36",
        "os": {
            "name": "android",
            "version": "6.0.1",
        },
        "browser": {
            "name": "chrome",
            "version": "49.0.2623.91",
            "chromium": true,
            "chromiumVersion": "49.0.2623.91",
        },
        "isMobile": true,
    },
    {
        // GalaxyS7 Edge 6.0.1 - webview (Naver app)
        "name": "GalaxyS7Edge - webview (Naver app)",
        "ua": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G935L Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.10 Mobile Safari/537.36 NAVER(inapp; search; 430; 6.9.1)",
        "os": {
            "name": "android",
            "version": "6.0.1",
        },
        "browser": {
            "name": "chrome",
            "version": "48.0.2564.10",
            "webview": true,
            "chromium": true,
            "chromiumVersion": "48.0.2564.10",
        },
        "isMobile": true,
    },
    {
        // GalaxyNexus:4.2.2
        "name": "GalaxyNexus:4.2.2",
        "ua": "Mozilla/5.0 (Linux; Android 4.2.2;ko-kr; Galaxy Nexus Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "os": {
            "name": "android",
            "version": "4.2.2",
        },
        "browser": {
            "name": "android browser",
            "version": "4.0",
            "webkit": true,
            "webkitVersion": "534.30",
        },
        "isMobile": true,
    },
    {
        // GalaxyNexus:chrome
        "name": "GalaxyNexus:chrome",
        "ua": "Mozilla/5.0 (Linux; Android 4.2.2; Galaxy Nexus Build/JDQ39) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/18.0.1364.169 Mobile Safari/537.22",
        "os": {
            "name": "android",
            "version": "4.2.2",
        },
        "browser": {
            "name": "chrome",
            "version": "18.0.1364.169",
            "chromium": true,
            "chromiumVersion": "18.0.1364.169",
        },
        "isMobile": true,
    },
    {
        // GalaxyNexus:chrome
        "name": "GalaxyNexus:chrome",
        "ua": "Mozilla/5.0 (Linux; Android 4.2.2; Galaxy Nexus Build/JDQ39) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.169 Mobile Safari/537.22",
        "os": {
            "name": "android",
            "version": "4.2.2",
        },
        "browser": {
            "name": "chrome",
            "version": "25.0.1364.169",
            "chromium": true,
            "chromiumVersion": "25.0.1364.169",
        },
        "isMobile": true,
    },
    {
        // GalaxyNote2:chrome
        "name": "GalaxyNote2:chrome",
        "ua": "Mozilla/5.0 (Linux; Android 4.3; SHV-E250S Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Mobile Safari/537.36",
        "os": {
            "name": "android",
            "version": "4.3",
        },
        "browser": {
            "name": "chrome",
            "version": "31.0.1650.59",
            "chromium": true,
            "chromiumVersion": "31.0.1650.59",
        },
        "isMobile": true,
    },
    {
        // Xiaomi_2013061_TD:browser
        "name": "Xiaomi_2013061_TD:browser",
        "ua": "Xiaomi_2013061_TD/V1 Linux/3.4.5 Android/4.2.1 Release/09.18.2013 Browser/AppleWebKit534.30 Mobile Safari/534.30 MBBMS/2.2 System/Android 4.2.1 XiaoMi/MiuiBrowser/1.0",
        "os": {
            "name": "android",
            "version": "4.2.1",
        },
        "browser": {
            "name": "miui browser",
            "version": "1.0",
            "webkit": true,
            "webkitVersion": "534.30",
        },
        "isMobile": true,
    },
    {
        // window && IE
        "name": "window && IE",
        "ua": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; IPMS/930D0D0A-04A359770A0; TCO_20090615095913; InfoPath.2; .NET CLR 2.0.50727)",
        "os": {
            "name": "window",
            "version": "5.1",
        },
        "browser": {
            "name": "ie",
            "version": "7.0",
        },
        "isMobile": false,
    },
    {
        // Windows 7 && IE
        "name": "Windows 7 && IE",
        "ua": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)",
        "os": {
            "name": "window",
            "version": "6.1",
        },
        "browser": {
            "name": "ie",
            "version": "8.0",
        },
        "isMobile": false,
    },
    {
        // Windows 7 && IE
        "name": "Windows 7 && IE",
        "ua": "Mozilla/5.0 (Windows NT 6.1;; APCPMS=^N20120502090046254556C65BBCE3E22DEE3F_24184^; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; TCO_20150325103347; rv:11.0) like Gecko",
        "os": {
            "name": "window",
            "version": "6.1",
        },
        "browser": {
            "name": "ie",
            "version": "11.0",
        },
        "isMobile": false,
    },
    {
        // Windows 7 && Chrome
        "name": "Windows 7 && Chrome",
        "ua": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36",
        "os": {
            "name": "window",
            "version": "6.1",
        },
        "browser": {
            "name": "chrome",
            "version": "41.0.2272.101",
            "chromium": true,
            "chromiumVersion": "41.0.2272.101",
        },
        "isMobile": false,
    },
    {
        // Windows 7 && Firefox
        "name": "Windows 7 && Firefox",
        "ua": "Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0",
        "os": {
            "name": "window",
            "version": "6.1",
        },
        "browser": {
            "name": "firefox",
            "version": "36.0",
        },
        "isMobile": false,
    },
    {
        // IE11 on Windows 10
        "name": "Windows 10 Update && IE11",
        "ua": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko",
        "os": {
            "name": "window",
            "version": "10.0",
        },
        "browser": {
            "name": "ie",
            "version": "11.0",
        },
        "isMobile": false,
    },
    {
        // 64-bit Windows 8.1 Update && IE11
        "name": "64-bit Windows 8.1 Update && IE11",
        "ua": "Mozilla/5.0 (Windows NT 6.3; Win64, x64; Trident/7.0; Touch; rv:11.0) like Gecko",
        "os": {
            "name": "window",
            "version": "6.3",
        },
        "browser": {
            "name": "ie",
            "version": "11.0",
        },
        "isMobile": false,
    },
    {
        // 64-bit Windows 8.1 Update && IE11 for the desktop
        "name": "64-bit Windows 8.1 Update && IE11 for the desktop",
        "ua": "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko",
        "os": {
            "name": "window",
            "version": "6.3",
        },
        "browser": {
            "name": "ie",
            "version": "11.0",
        },
        "isMobile": false,
    },
    {
        // Windows 10 && Microsoft Edge for desktop
        "name": "Windows 10 && Microsoft Edge for desktop",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240",
        "os": {
            "name": "window",
            "version": "10.0",
        },
        "browser": {
            "name": "edge",
            "version": "12.10240",
            "chromium": true,
            "chromiumVersion": "42.0.2311.135",
        },
        "isMobile": false,
    },
    {
        // Mac && Chrome
        "name": "Mac && Chrome",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36",
        "os": {
            "name": "mac",
            "version": "10.10.2",
        },
        "browser": {
            "name": "chrome",
            "version": "41.0.2272.101",
            "chromium": true,
            "chromiumVersion": "41.0.2272.101",
        },
        "isMobile": false,
    },
    {
        "name": "Mac && Chrome2",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
        "os": {
            "name": "mac",
            "version": "10.15.4",
        },
        "browser": {
            "name": "chrome",
            "version": "84.0.4147.135",
            "webkit": false,
            "chromium": true,
            "chromiumVersion": "84.0.4147.135",
        },
        "isMobile": false,
    },
    {
        "name": "Mac && Firefox",
        "ua": " Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:79.0) Gecko/20100101 Firefox/79.0",
        "os": {
            "name": "mac",
            "version": "10.15",
        },
        "browser": {
            "name": "firefox",
            "version": "79.0",
        },
        "isMobile": false,
    },
    {
        // Mac && Safari
        "name": "Mac && Safari",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18",
        "os": {
            "name": "mac",
            "version": "10.10.2",
        },
        "browser": {
            "name": "safari",
            "version": "8.0.3",
            "webkit": true,
            "webkitVersion": "600.3.18",
        },
        "isMobile": false,
    },
    {
        // Phantomjs (default value)
        "name": "Phantomjs (default value)",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.8 Safari/534.34",
        "os": {
            "name": "mac",
            "version": "-1",
        },
        "browser": {
            "name": "phantomjs",
            "version": "1.9.8",
            "webkit": true,
            "webkitVersion": "534.34",
        },
        "isMobile": false,
    },
    {
        // Window XP && ie6
        "name": "Window XP && ie6",
        "ua": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 1.0.37052000; Media Center PC 3.1)",
        "os": {
            "name": "window",
            "version": "5.1",
        },
        "browser": {
            "name": "ie",
            "version": "6.0",
        },
        "isMobile": false,
    },
    {
        // Window 2000 && ie7
        "name": "Window 2000 && ie7",
        "ua": "Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.0; Trident/4.0; FBSMTWB; .NET CLR 2.0.34861; .NET CLR 3.0.3746.3218; .NET CLR 3.5.33652; msn OptimizedIE8;ENUS)",
        "os": {
            "name": "window",
            "version": "5.0",
        },
        "browser": {
            "name": "ie",
            "version": "7.0",
        },
        "isMobile": false,
    },
    {
        // Window Vista && ie6.2
        "name": "Window Vista && ie6.2",
        "ua": "Mozilla/5.3 (compatible; MSIE 6.2; Windows NT 6.0)",
        "os": {
            "name": "window",
            "version": "6.0",
        },
        "browser": {
            "name": "ie",
            "version": "6.2",
        },
        "isMobile": false,
    },
    {
        // Window 2000 && ie6
        "name": "Window 2000 && ie6",
        "ua": "Mozilla/4.0 (compatible; MSIE 6.0; Windows 2000)",
        "os": {
            "name": "window",
            "version": "5.0",
        },
        "browser": {
            "name": "ie",
            "version": "6.0",
        },
        "isMobile": false,
    },
    {
        // Phantomjs Window 7 (default value)
        "name": "Phantomjs Window (default value)",
        "ua": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.8 Safari/534.34",
        "os": {
            "name": "window",
            "version": "6.1",
        },
        "browser": {
            "name": "phantomjs",
            "version": "1.9.8",
            "webkit": true,
            "webkitVersion": "534.34",
        },
        "isMobile": false,
    },
    {
        "name": "Phantomjs (default value)",
        "ua": "Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.8 Safari/534.34",
        "browser": {
            "name": "phantomjs",
            "version": "1.9.8",
            "webkit": true,
            "webkitVersion": "534.34",
        },
        "os": {
            "name": "unknown",
            "version": "-1",
        },
        "isMobile": false,
    },
    {
        "name": "Windows 10 & Whale",
        "ua": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Whale/0.7.31.4 Safari/537.36",
        "os": {
            "name": "window",
            "version": "10.0",
        },
        "browser": {
            "name": "whale",
            "version": "0.7.31.4",
            "chromium": true,
            "chromiumVersion": "52.0.2743.116",
        },
        "isMobile": false,
    },
    {
        "name": "Tizen 2.3 & FamilyHub",
        "ua": "Mozilla/5.0 (Linux; Tizen 2.3; FamilyHub) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.3 Mobile Safari/537.3",
        "os": {
            "name": "tizen",
            "version": "2.3",
        },
        "browser": {
            "name": "safari",
            "version": "2.3",
            "webkit": true,
            "webkitVersion": "537.3",
        },
        "isMobile": true,
    },

    {
        "name": "Tizen 3.0 & FamilyHub",
        "ua": "Mozilla/5.0 (Linux; Tizen 3.0; FamilyHub) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.3 Mobile Safari/537.3",
        "os": {
            "name": "tizen",
            "version": "3.0",
        },
        "browser": {
            "name": "safari",
            "version": "2.3",
            "webkit": true,
            "webkitVersion": "537.3",
        },
        "isMobile": true,
    },

    {
        "name": "Tizen 2.4.0 & Z3 & samsung internet",
        "ua": "Mozilla/5.0 (Linux; Tizen 2.4.0; TIZEN SM-Z300H) AppleWebKit/537.3 (KHTML, like Gecko)SamsungBrowser/1.1 Mobile Safari/537.3",
        "os": {
            "name": "tizen",
            "version": "2.4.0",
            "webkit": true,
            "webkitVersion": "537.3",
        },
        "browser": {
            "name": "samsung internet",
            "version": "1.1",
            "webkit": true,
            "webkitVersion": "537.3",
        },
        "isMobile": true,
    },

    {
        "name": "Tizen 2.3 & SMART-TV & samsung internet",
        "ua": "Mozilla/5.0 (SMART-TV; Linux; Tizen 2.3) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.0 TV Safari/538.1",
        "browser": {
            "name": "samsung internet",
            "version": "1.0",
            "webkit": true,
            "webkitVersion": "538.1",
        },
        "os": {
            "name": "tizen",
            "version": "2.3",
        },
        "isMobile": false,
    },
    {
        "name": "Android 5.x & Gear VR & samsung internet",
        "ua": "Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925K Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile VR Safari/537.36",
        "browser": {
            "name": "samsung internet",
            "version": "4.0",
            "chromium": true,
            "chromiumVersion": "44.0.2403.133",
        },
        "os": {
            "name": "android",
            "version": "5.0.2",
        },
        "isMobile": true,
    },
    {
        "name": "WebOS & TV & app",
        "ua": "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/5.2.1 Chrome/38.0.2125.122 Safari/537.36 WebAppManager",
        "browser": {
            "name": "chrome",
            "version": "38.0.2125.122",
            "chromium": true,
            "chromiumVersion": "38.0.2125.122",
        },
        "os": {
            "name": "webos",
            "version": "-1",
        },
        "isMobile": false,
    },
];

// complement
AGENT_LIST.forEach(agent => {
    if (!agent.browser.webview) {
        agent.browser.webview = false;
    }
    if (!agent.browser.webkit) {
        agent.browser.webkit = false;
        agent.browser.webkitVersion = "-1";
    }
    if (!agent.browser.chromium) {
        agent.browser.chromium = false;
        agent.browser.chromiumVersion = "-1";
    }
});

export default AGENT_LIST;
