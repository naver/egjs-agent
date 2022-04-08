import { PresetInfo, PresetResult, NavigatorUABrandVersion } from "./types";

export function some<T>(arr: T[], callback: (value: T, index: number) => any): boolean {
    const length = arr.length;

    for (let i = 0; i < length; ++i) {
        if (callback(arr[i], i)) {
            return true;
        }
    }

    return false;
}
export function find<T>(arr: T[], callback: (value: T, index: number) => any): T | null {
    const length = arr.length;

    for (let i = 0; i < length; ++i) {
        if (callback(arr[i], i)) {
            return arr[i];
        }
    }
    return null;
}
export function getUserAgentString(agent?: string): string {
    let userAgent = agent;
    if (typeof userAgent === "undefined") {
        if (typeof navigator === "undefined" || !navigator) {
            return "";
        }

        userAgent = navigator.userAgent || "";
    }
    return userAgent!.toLowerCase();
}
export function execRegExp(pattern: string, text: string): RegExpExecArray | null {
    try {
        return new RegExp(pattern, "g").exec(text);
    } catch (e) {
        return null;
    }
}
export function hasUserAgentData(): boolean {
    if (typeof navigator === "undefined" || !navigator || !navigator.userAgentData) {
        return false;
    }
    const userAgentData = navigator.userAgentData;
    const brands = (userAgentData.brands || userAgentData.uaList);

    return !!(brands && brands.length);
}
export function findVersion(versionTest: string, userAgent: string): string {
    const result = execRegExp(`(${versionTest})((?:\\/|\\s|:)([0-9|\\.|_]+))`, userAgent);

    return result ? result[3] : "";
}
export function convertVersion(text: string): string {
    return text.replace(/_/g, ".");
}
export function findPreset(presets: PresetInfo[], userAgent: string): PresetResult {
    let userPreset: PresetInfo | null = null;
    let version = "-1";

    some(presets, preset => {
        const result = execRegExp(`(${preset.test})((?:\\/|\\s|:)([0-9|\\.|_]+))?`, userAgent);

        if (!result || preset.brand) {
            return false;
        }
        userPreset = preset;
        version = result[3] || "-1";

        if (preset.versionAlias) {
            version = preset.versionAlias;
        } else if (preset.versionTest) {
            version = findVersion(preset.versionTest.toLowerCase(), userAgent) || version;
        }
        version = convertVersion(version);
        return true;
    });

    return {
        preset: userPreset,
        version,
    };
}
export function findPresetBrand(presets: PresetInfo[], brands: NavigatorUABrandVersion[]): NavigatorUABrandVersion {
    const brandInfo = {
        brand: "",
        version: "-1",
    };
    some(presets, preset => {
        const result = findBrand(brands, preset);

        if (!result) {
            return false;
        }

        brandInfo.brand = preset.id;
        brandInfo.version = preset.versionAlias || result.version;

        return brandInfo.version !== "-1";
    });

    return brandInfo;
}
export function findBrand(brands: NavigatorUABrandVersion[], preset: PresetInfo): NavigatorUABrandVersion | null {
    return find(brands, ({ brand }) => {
        return execRegExp(`${preset.test}`, brand.toLowerCase());
    });
}
