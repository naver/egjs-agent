# egjs-agent
Provide cache interface to handle persisted data among history navigation.

## Documentation
* API Documentation
    - Latest: [http://naver.github.io/egjs/latest/doc/eg.Agent.html](http://naver.github.io/egjs/latest/doc/eg.Agent.html)
    - Specific version: [http://naver.github.io/egjs/[VERSION]/doc/eg.Agent.html](http://naver.github.io/egjs/[VERSION]/doc/eg.Agent.html)
* An advanced demo is available here: []()

## How to Use
### 1. Load agent.js
```html
<script src="../dist/agent.js"></script>
```

### 2. Use eg.Agent
```javascript
var agent = eg.Agent(); // eg.Agent will use browser's navigator.userAgent 
console.log(agent);
/*
    {
        browser: {
            name: "",
            version: ""
            isWebview: true or false
        },
        os: {
            name: "",
            version: ""
        }
    }
*/
var agent = eg.Agent(ua); // eg.Agent will use given user-agent string
```

## Bug Report

If you find a bug, please report it to us using the [Issues](https://github.com/naver/egjs-agent/issues) page on GitHub.


## License
eg.Agent is released under the [MIT license](http://naver.github.io/egjs/license.txt).

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
