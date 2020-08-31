import agent, * as modules from "./agent";

for (const name in modules) {
    (agent as any)[name] = (modules as any)[name];
}

export default agent;
