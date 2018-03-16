var uaSelect = $('.useragent-select')[0];
var uaInput = $('.useragent-input')[0];

try {
	autosize(uaInput);
} catch(e) {}

if (uaInput.addEventListener) {
	uaInput.addEventListener('input', handler);
	uaSelect.addEventListener('input', function(e) {
		var agentInfo = eg.agent(e.target.value);
		render(agentInfo);
		uaInput.value = e.target.value;
	});
	uaSelect.addEventListener('change', function(e) {
		var agentInfo = eg.agent(e.target.value);
		render(agentInfo);
		uaInput.value = e.target.value;
	});
  } else if (uaInput.attachEvent)  {
	uaInput.attachEvent('oninput', handler);
	uaSelect.attachEvent('oninput', function(e) {
		var agentInfo = eg.agent(e.srcElement.value);
		render(agentInfo);
		uaInput.value = e.srcElement.value;
	});
	uaSelect.attachEvent('onchange', function(e) {
		var agentInfo = eg.agent(e.srcElement.value);
		render(agentInfo);
		uaInput.value = e.srcElement.value;
	});
  }

var useragent = navigator.userAgent;
uaInput.value = useragent;

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
var isMobile = $(".isMobile")[0];

handler();

function handler() {
    var agentInfo = eg.agent(uaInput.value);
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