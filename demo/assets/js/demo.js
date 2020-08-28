var uaSelect = $('.useragent-select')[0];
var uaInput = $('.useragent-input')[0];

try {
	autosize(uaInput);
} catch(e) {}

function changeAgent(value) {
    var agentInfo;

    if (value === "Your Client Hints") {
        agentInfo = eg.agent();
    } else {
        agentInfo = eg.agent(value);
    }

    render(agentInfo);
}
function hasUserAgentData() {
    if (!navigator.userAgentData) {
        return false;
    }
    var userAgentData = navigator.userAgentData;
    var brands = (userAgentData.brands || userAgentData.uaList);

    return !!(brands && brands.length);
}
if (uaInput.addEventListener) {
	uaInput.addEventListener('input', handler);
	uaSelect.addEventListener('input', function(e) {
        uaInput.value = e.target.value;
		changeAgent(e.target.value);
	});
	uaSelect.addEventListener('change', function(e) {
        uaInput.value = e.target.value;
		changeAgent(e.target.value);
	});
  } else if (uaInput.attachEvent)  {
	uaInput.attachEvent('oninput', handler);
	uaSelect.attachEvent('oninput', function(e) {
        uaInput.value = e.srcElement.value;
        changeAgent(e.srcElement.value);
	});
	uaSelect.attachEvent('onchange', function(e) {
        uaInput.value = e.srcElement.value;
		changeAgent(e.srcElement.value);
	});
  }

var useragent = navigator.userAgent;
uaSelect.children[0].setAttribute("value", useragent);
if (hasUserAgentData()) {
    uaSelect.insertAdjacentHTML("afterbegin", '<option value="Your Client Hints">Your Client Hints</option>');

    uaSelect.value = "Your Client Hints";
    uaInput.value = "Your Client Hints";
} else {
    uaInput.value = useragent;
}


setTimeout(function() {
	try {
		autosize.update(uaInput);
	} catch(e) {}
}, 100);

var osName = $(".os > .name")[0];
var osVersion = $(".os > .version")[0];
var browserName = $(".browser > .name")[0];
var browserVersion = $(".browser > .version")[0];
var browserWebview = $(".browser > .webview")[0];
var browserWebkit = $(".browser > .webkit")[0];
var browserChromium = $(".browser > .chromium")[0];
var isMobile = $(".isMobile")[0];
var isHints = $(".isHints")[0];

handler();

function handler() {
    changeAgent(uaInput.value);
}

function render(agentInfo) {
    osName.innerHTML = agentInfo.os.name;
    osVersion.innerHTML = agentInfo.os.version;
    browserName.innerHTML = agentInfo.browser.name;
    browserVersion.innerHTML = agentInfo.browser.version;
    browserWebview.innerHTML = agentInfo.browser.webview;
    browserWebkit.innerHTML = agentInfo.browser.webkit;
    browserChromium.innerHTML = agentInfo.browser.chromium;

    isHints.innerHTML = agentInfo.isHints;
    isMobile.innerHTML = agentInfo.isMobile;
}
