{% include_relative assets/html/demo.html %}

```js
var uaInput = document.querySelector(".useragent-input");
uaInput.addEventListener("input", function() {
    var agentInfo = eg.agent();

    osName.innerHTML = agentInfo.os.name;
    osVersion.innerHTML = agentInfo.os.version;
    osMajorVersion.innerHTML = agentInfo.os.majorVersion;

    browserName.innerHTML = agentInfo.browser.name;
    browserVersion.innerHTML = agentInfo.browser.version;
    browserMajorVersion.innerHTML = agentInfo.browser.majorVersion;
    
    browserWebview.innerHTML = agentInfo.browser.webview;
    browserWebkit.innerHTML = agentInfo.browser.webkit;
    browserChromium.innerHTML = agentInfo.browser.chromium;

    isHints.innerHTML = agentInfo.isHints;
    isMobile.innerHTML = agentInfo.isMobile;
})
```
