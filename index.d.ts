export as namespace eg;

declare const Agent: Agent.Agent;
export default Agent;

declare module Agent {

	interface Agent {
		(ua?: string): AgentInfo
	}

	export interface AgentInfo {
		os: AgentInfoOs;
		browser: AgentInfoBrowser;
		isMobile: boolean;
	}

	export interface AgentInfoOs {
		name: string;

	}
	export interface AgentInfoBrowser {
		name: string;
		version: string;
		webview: boolean;
	}
}

