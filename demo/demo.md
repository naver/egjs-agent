{% include_relative assets/html/demo.html %}

```js
var agentInfo = eg.Agent(uaInput.value);
osName.innerHTML = agentInfo.os.name;
osVersion.innerHTML = agentInfo.os.version;
browserName.innerHTML = agentInfo.browser.name;
browserVersion.innerHTML = agentInfo.browser.version;
browserWebview.innerHTML = agentInfo.browser.webview;
```