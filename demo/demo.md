{% include_relative assets/html/demo.html %}

```js
var uaInput = document.querySelector(".useragent-input");
uaInput.addEventListener("input", function() {
    var agentInfo = eg.agent(uaInput.value);
    osName.innerHTML = agentInfo.os.name;
    osVersion.innerHTML = agentInfo.os.version;
    browserName.innerHTML = agentInfo.browser.name;
    browserVersion.innerHTML = agentInfo.browser.version;
    browserWebview.innerHTML = agentInfo.browser.webview;
    isMobile.innerHTML = agentInfo.isMobile;
})
```