import getAgent, { getAccurateAgent } from "../../src/agent";
import AGENT_DATA_LIST from "./userAgentDataConsts";

describe("test userAgentData", () => {
    AGENT_DATA_LIST.forEach(data => {
        [true, false].forEach(hasPlatform => {
            describe(`test ${data.name}'s agent (userAgentData has ${hasPlatform ? "" : "not "}platform)`, () => {
            const originalNavigator = window.navigator;

                beforeEach(() => {
                    Object.defineProperty(window, "navigator", {
                        value: {
                            ...originalNavigator,
                            userAgentData: {
                                ...data.userAgentData,
                                platform: hasPlatform ? data.userAgentData.platform : "",
                                getHighEntropyValues: () => Promise.resolve(data.osData),
                            },
                            platform: data.platform,
                        },
                        configurable: true,
                        writable: true,
                    });
                });
                afterEach(() => {
                    Object.defineProperty(window, "navigator", {
                        value: originalNavigator,
                        configurable: true,
                        writable: true,
                    });
                });
                it ("test getAgent", () => {
                    // Given, When
                    const agent = getAgent();

                    // Then
                    // name
                    expect(agent.os.name).toBe(data.result.os.name);
                    expect(agent.browser.name).toBe(data.result.browser.name);

                    // version
                    expect(agent.os.version).toBe(data.result.os.version);
                    expect(agent.browser.version).toBe(data.result.browser.version);

                    // engine
                    expect(agent.isMobile).toBe(data.result.isMobile);

                    expect(agent.browser.chromium).toBe(data.result.browser.chromium);
                    expect(agent.browser.chromiumVersion).toBe(data.result.browser.chromiumVersion);

                    expect(agent.browser.webkit).toBe(data.result.browser.webkit);
                    expect(agent.browser.webkitVersion).toBe(data.result.browser.webkitVersion);
                });
                it ("test getAccurateAgent", async () => {
                    // Given, When
                    const agent = await getAccurateAgent()!;

                    // Then
                    // name
                    expect(agent.os.name).toBe(data.accurateResult.os.name);
                    expect(agent.browser.name).toBe(data.result.browser.name);

                    // version
                    expect(agent.os.version).toBe(data.accurateResult.os.version);
                    expect(agent.browser.version).toBe(data.accurateResult.browser.version);

                    // engine
                    expect(agent.isMobile).toBe(data.result.isMobile);

                    expect(agent.browser.chromium).toBe(data.result.browser.chromium);
                    expect(agent.browser.chromiumVersion).toBe(data.result.browser.chromiumVersion);

                    expect(agent.browser.webkit).toBe(data.result.browser.webkit);
                    expect(agent.browser.webkitVersion).toBe(data.result.browser.webkitVersion);
                });
            });
        });
    });
});
