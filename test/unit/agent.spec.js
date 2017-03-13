import AgentInjector from "inject-loader!../../src/agent";
import AgentList from "./agent_list";
import {RegExp} from "../../src/browser";

describe("Agent", function() {
    AgentList.forEach(function(uaInfo) {
        it(uaInfo.device, () => {
            // Given
            var MockAgent = AgentInjector(
                {
                    "./browser": {
                        navigator: {
                            userAgent: uaInfo.ua
                        },
                        RegExp: RegExp
                    }
                }
            );

            // When
            const agent = MockAgent();

            // Then
            expect(agent.os.name).to.equal(uaInfo.os.name);
            expect(agent.os.version).to.equal(uaInfo.os.version);
            expect(agent.browser.name).to.equal(uaInfo.browser.name);
            expect(agent.browser.version).to.equal(uaInfo.browser.version);
            expect(agent.browser.webview).to.equal(uaInfo.browser.webview);
        });
    });
});
