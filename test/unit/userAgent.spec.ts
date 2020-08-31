import AGENT_LIST from "./userAgentConsts";
import getAgent, { getAccurateAgent } from "../../src/agent";

describe("test userAgent", () => {
    describe("test getAgent function with custom userAgent", () => {
        AGENT_LIST.forEach(uaInfo => {
            it(`test ${uaInfo.name} - ${uaInfo.ua}`, () => {
                // Given, When
                const agent = getAgent(uaInfo.ua);

                // Then
                // name
                expect(agent.os.name).toBe(uaInfo.os.name);
                expect(agent.browser.name).toBe(uaInfo.browser.name);

                // engine
                expect(agent.browser.webview).toBe(uaInfo.browser.webview);
                expect(agent.browser.webkit).toBe(uaInfo.browser.webkit);
                expect(agent.browser.chromium).toBe(uaInfo.browser.chromium);

                // version
                expect(agent.browser.version).toBe(uaInfo.browser.version);
                expect(agent.os.version).toBe(uaInfo.os.version);

                expect(agent.os.majorVersion).toBe(parseInt(uaInfo.os.version, 10));
                expect(agent.browser.majorVersion).toBe(parseInt(uaInfo.browser.version, 10));

                expect(agent.isMobile).toBe(uaInfo.isMobile);
            });
        });
    });
    describe("test getAccurateAgent with custom userAgent", () => {
        AGENT_LIST.forEach(uaInfo => {
            describe(`test ${uaInfo.name} - ${uaInfo.ua}`, () => {
                let originalNavigator: Navigator;

                beforeEach(() => {
                    originalNavigator = window.navigator;
                    Object.defineProperty(window, "navigator", {
                        value: {
                            ...originalNavigator,
                            userAgent: uaInfo.ua,
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
                it(`test getAccurateAgent function`, async () => {
                    // Given, When
                    const agent = await getAccurateAgent()!;

                    // Then
                    // name
                    expect(agent.os.name).toBe(uaInfo.os.name);
                    expect(agent.browser.name).toBe(uaInfo.browser.name);

                    // engine
                    expect(agent.browser.webview).toBe(uaInfo.browser.webview);
                    expect(agent.browser.webkit).toBe(uaInfo.browser.webkit);
                    expect(agent.browser.chromium).toBe(uaInfo.browser.chromium);

                    // version
                    expect(agent.browser.version).toBe(uaInfo.browser.version);
                    expect(agent.os.version).toBe(uaInfo.os.version);

                    expect(agent.os.majorVersion).toBe(parseInt(uaInfo.os.version, 10));
                    expect(agent.browser.majorVersion).toBe(parseInt(uaInfo.browser.version, 10));

                    expect(agent.isMobile).toBe(uaInfo.isMobile);
                });
            });
        });
    });
});
