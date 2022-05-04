

# egjs-agent
[![npm version](https://img.shields.io/npm/v/@egjs/agent.svg?style=flat-square&color=007acc&label=version)](https://www.npmjs.com/package/@egjs/agent) [![Build Status](https://img.shields.io/travis/naver/egjs-agent.svg?style=flat-square&label=build)](https://travis-ci.org/naver/egjs-agent) [![Coverage Status](https://img.shields.io/coveralls/github/naver/egjs-agent.svg?style=flat-square&label=coverage)](https://coveralls.io/github/naver/egjs-agent?branch=master)
![Support TypeScript](https://img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80&style=flat-square&logo=typescript)

Extracts browser and operating system information from the user agent string or user agent object(userAgentData).

## Documents
- [Get Started and Demos](https://naver.github.io/egjs-agent/)
- [API documentation](https://naver.github.io/egjs-agent/release/latest/doc/)
- [Prepare for Client Hints, freezing User Agent](https://medium.com/naver-fe-platform/prepare-for-client-hints-freezing-user-agent-9c0ea1ddd02c)

## Download and Installation

Download dist files from repo directly or install it via npm. 

### Installation with npm

The following command shows how to install egjs-agent using npm.

```bash
$ npm install @egjs/agent
```

### For development

You can download the files for development

* Latest : https://naver.github.io/egjs-agent/release/latest/dist/agent.js
* Latest(min): https://naver.github.io/egjs-agent/release/latest/dist/agent.min.js
* Specific version : https://naver.github.io/egjs-agent/release/[VERSION]/dist/agent.js
* Specific version(min):  https://naver.github.io/egjs-agent/release/[VERSION]/dist/agent.min.js


## Prepare for Client Hints and User-Agent Reduction!

Chrome was planned to freeze userAgent to improve user privacy, and it is being applied as an experimental feature in 84+.

Not only Chrome, but other browsers will come someday.

> It is still an experimental feature until Chrome(Chromium) 86.
>
> If you want to test, enable the flag below.
>
> **chrome://flags/#enable-experimental-web-platform-features**
> **chrome://flags/#freeze-user-agent**
>
> This reduced format will be available for testing via chrome://flags/#reduce-user-agent in Chrome 93.
> **chrome://flags/#reduce-user-agent**


### User-Agent Reduction Proposed Rollout Plan
```
Phase 4: Chrome 101 Ship reduced Chrome MINOR.BUILD.PATCH version numbers (“0.0.0”). Once rolled-out, the reduced UA string would apply to all page loads on desktop and mobile OSes that do not opt into the reverse Origin Trial.

Phase 5: Chrome 107 Begin roll-out of reduced Desktop UA string and related JS APIs (navigator.userAgent, navigator.appVersion, navigator.platform). Once rolled-out, the reduced UA string would apply to all page loads on desktop OSes that do not opt into the reverse Origin Trial.

Phase 6: Chrome 110 Begin roll-out of reduced Android Mobile (and Tablet) UA string and related JS APIs. Once rolled-out, the reduced UA string would apply to all page loads on Android that do not opt into the reverse Origin Trial.

Reduction Completion Phase 7: Chrome 113 reverse Origin Trial ends and all page loads receive the reduced UA string and related JS APIs.
```

### In the future
1. the following attribute values will not appear correctly.
    * navigator.userAgent
    * navigator.appVersion
    * navigator.platform
    * navigator.productSub
    * navigator.vendor
2. You should use `navigator.userAgentData` instead of `navigator.userAgent`.
    * Browser version only shows major.
    * OS name, OS version, Browser full version should be fetched asynchronously.
    * The only OS name that you can check synchronously are iOS and Android.

### Possible (You can know exactly)
* Check browser name, major version
* Check the full version under Chrome 101
* Check mobile
* Check OS name
* Check Webkit, Chromium 
* Check old OS, OS Version (Chrome 84 support range or less)
    * **< Android 5.0**
    * **< Mac OS X 10.10**
    * **< Windows 7**
    * **< iOS Unknown**


```js
import getAgent from "@egjs/agent";

const agent = getAgent();

// Check iOS
agent.os.name === "ios"
agent.os.majorVersion === 9
// Check Android
agent.os.name === "android"
agent.os.majorVersion === 4
parseFloat(agent.os.version) <= 4.4
// Check browser name
agent.browser.name === "safari"
// Check webkit
agent.browser.webkit
// Check chromium
agent.browser.chromium
```

### If you want to use only the method using navigator.userAgent
```js
import { getLegacyAgent } from "@egjs/agent";

const agent = getLegacyAgent();
// Check iOS
agent.os.name === "ios"
agent.os.majorVersion === 9
// Check Android
agent.os.name === "android"
agent.os.majorVersion === 4
parseFloat(agent.os.version) <= 4.4
// Check browser name
agent.browser.name === "safari"
// Check webkit
agent.browser.webkit
// Check chromium
agent.browser.chromium
```
### Not Possible (If synchronous)
* Check OS version.
* Check Browser full version.

```js
import getAgent from "@egjs/agent";
const agent = getAgent();

// If the full version is 10.5, it is displayed as 10.
agent.browser.version
// "unknown"
agent.os.name
// -1
agent.os.majorVersion
```

### Possible (If asynchronous)
* You can get accurate agent information.
* Check OS version.
* Check Browser full version.
```js
import { getAccurateAgent } from "@egjs/agent";

// Use Promise
getAccurateAgent().then(agent => {
    // Check OS version
    agent.os.version

    // Check Browser full verion
    agent.browser.version
});

// Use Callback
getAccurateAgent(agent => {});
```

### If you dare to use synchrous, you have to choose.
* If you're checking a version (ex. 93.0.1234.56) lower than Chrome 101 to fix the bug, there shouldn't be a problem.
* However, if you need to check the minor or patch version of version 101 or higher, you have to check it asynchronously.
* You can check the OS name, but if you want to check the OS version, consider switching to asynchronous before reduction is applied.


## Supported Browsers
The following are the supported browsers.

|Internet Explorer|Chrome|Firefox|Safari|iOS|Android|
|---|---|---|---|---|---|
|7+|latest|latest|latest|3+|2.1+|

### Client Hints Support

Chromium (Chrome, Edge, Whale)|Gecko (Firefox)|Webkit (Safari)|
|---|---|---|
|84+ (Experimental)|Unknown|Unknown|




## How to start developing egjs-agent?

For anyone interested to develop egjs-agent, follow the instructions below.

### Development Environment

#### 1. Clone the repository

Clone the egjs-agent repository and install the dependency modules.

```bash
# Clone the repository.
$ git clone https://github.com/naver/egjs-agent.git
```

#### 2. Install dependencies
`npm` is supported.

```
# Install the dependency modules.
$ npm install
```

#### 3. Build

Use npm script to build eg.agent

```bash
# Run rollup
$ npm start

# Build
$ npm run build

# Generate jsdoc
$ npm run jsdoc
```

Two folders will be created after complete build is completed.

- **dist** folder: Includes the **agent.js** and **agent.min.js** files.
- **doc** folder: Includes API documentation. The home page for the documentation is **doc/index.html**.

### Linting

To keep the same code style, we adopted [ESLint](http://eslint.org/) to maintain our code quality. 
Setup your editor for check or run below command for linting.

```bash
$ npm run lint
```

### Test

Once you created a branch and done with development, you must perform a test running `npm run test` command before you push code to a remote repository.

```bash
$ npm run test
```
Running a `npm run test` command will start [Jest](https://jestjs.io/).


## Bug Report

If you find a bug, please report it to us using the [Issues](https://github.com/naver/egjs-agent/issues) page on GitHub.


## License
egjs-agent is released under the [MIT license](http://naver.github.io/egjs/license.txt).


```
Copyright (c) 2015 NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
