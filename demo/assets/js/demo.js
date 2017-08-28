var uaSelect = document.querySelector('.useragent-select');
var uaInput = document.querySelector('.useragent-input');
autosize(uaInput);

uaInput.addEventListener('input', handler);
uaSelect.addEventListener('input', function(e) {
    var agentInfo = eg.Agent(e.target.value);
    render(agentInfo);
    uaInput.value = e.target.value;
});

var useragent = navigator.userAgent;
uaInput.value = useragent;

setTimeout(function() {
    autosize.update(uaInput);
}, 100);


var osName = document.querySelector(".os > .name");
var osVersion = document.querySelector(".os > .version");
var browserName = document.querySelector(".browser > .name");
var browserVersion = document.querySelector(".browser > .version");
var browserWebview = document.querySelector(".browser > .webview");
var isMobile = document.querySelector(".isMobile");

handler();

function handler() {
    var agentInfo = eg.Agent(uaInput.value);
    render(agentInfo);
}

function render(agentInfo) {
    osName.innerHTML = agentInfo.os.name;
    osVersion.innerHTML = agentInfo.os.version;
    browserName.innerHTML = agentInfo.browser.name;
    browserVersion.innerHTML = agentInfo.browser.version;
    browserWebview.innerHTML = agentInfo.browser.webview;
    isMobile.innerHTML = agentInfo.isMobile;
}