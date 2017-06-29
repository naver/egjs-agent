import AgentInjector from "inject-loader!../../src/Agent";
import AgentList from "./agent_list";
import {RegExp} from "../../src/browser";

function getMockAgent(userAgent) {
    return AgentInjector(
        {
            "./browser": {
                navigator: { userAgent },
                RegExp: RegExp
            }
        }
    );
}

describe("Agent", function() {

    describe("OS name", function() {
        AgentList.forEach(function(uaInfo) {
            it(uaInfo.device, () => {
                // Given
                var MockAgent = getMockAgent(uaInfo.ua);

                // When
                const agent = MockAgent();

                // Then
                expect(agent.os.name).to.equal(uaInfo.os.name);
            });
        });
    });

    describe("OS version", function() {
        AgentList.forEach(function(uaInfo) {
            it(uaInfo.device, () => {
                // Given
                var MockAgent = getMockAgent(uaInfo.ua);

                // When
                const agent = MockAgent();

                // Then
                expect(agent.os.version).to.equal(uaInfo.os.version);
            });
        });
    });

    describe("Browser name", function() {
        AgentList.forEach(function(uaInfo) {
            it(uaInfo.device, () => {
                // Given
                var MockAgent = getMockAgent(uaInfo.ua);

                // When
                const agent = MockAgent();

                // Then
                expect(agent.browser.name).to.equal(uaInfo.browser.name);
            });
        });
    });

    describe("Browser version", function() {
        AgentList.forEach(function(uaInfo) {
            it(uaInfo.device, () => {
                // Given
                var MockAgent = getMockAgent(uaInfo.ua);

                // When
                const agent = MockAgent();

                // Then
                expect(agent.browser.version).to.equal(uaInfo.browser.version);
            });
        });
    });

    describe("Browser is webview", function() {
        AgentList.forEach(function(uaInfo) {
            it(uaInfo.device, () => {
                // Given
                var MockAgent = getMockAgent(uaInfo.ua);

                // When
                const agent = MockAgent();

                // Then
                expect(agent.browser.webview).to.equal(uaInfo.browser.webview);
            });
        });
    });
});
