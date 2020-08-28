
### Supported Browsers
The following are the supported browsers.

* Internet Explorer: 7+
* Chromium (Chrome, Edge, Whale): latest
* Firefox: latest
* Safari: latest
* iOS: 3+
* Android: 2.1+

#### Client Hints Support
* Chromium (Chrome, Edge, Whale): 84+ (Experimental)
* Gecko (Firefox): Unknown
* Webkit (Safari): Unknown



### Quick steps to use:

#### Load files or import library

``` html
{% for dist in site.data.egjs.dist %}
<script src="//{{ site.data.egjs.github.user }}.github.io/{{ site.data.egjs.github.repo }}/{{ dist }}"></script>
{% endfor %}
```

```sh
$ npm i @egjs/agent
```

### Use

```javascript
import getAgent from "@egjs/agent";

// getAgent(eg.agent) will use browser's navigator.userAgentData or navigator.userAgent
var agentInfo = getAgent(); // or eg.agent();

// or you can use own user-agent string
agentInfo = getAgent(ua);

console.log(agentInfo);
/*
    {
        browser: {
            name: "string",
            version: "number",
            majorVersion: number,
            webview: true or false,
            webkit: true or false,
            chromium: true or false,
        },
        os: {
            name: "string",
            version: "number",
            majorVersion: number,
        },
        isHints: ture or false,
    }
*/
```

#### get accurate agent information.
* Prepare the Client Hints.
* Your agent information becomes uncertain.
* Use `getAccurateAgent(eg.agent.getAccurateAgent)` instead of `getAgent(eg.agent)`


```js
import { getAccurateAgent } from "@egjs/agent";

// Use Promise
// eg.agent.getAccurateAgent
getAccurateAgent().then(agent => {
    // Check OS, OS version
    agent.os.name
    agent.os.version

    // Check Browser full verion
    agent.browser.version
});

// Use Callback
getAccurateAgent(agent => {});
```
