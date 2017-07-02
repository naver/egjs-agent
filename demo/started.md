### Browser support
IE 6+, latest of Chrome/FF/Safari, iOS 7+ and Android 2.3+ (except 3.x)

### Quick steps to use:

#### Load files or import library


##### ES5
``` html
<script src="//{{ site.data.egjs.github.user }}.github.io/{{ site.data.egjs.github.repo }}/release/latest/dist/{{ site.data.egjs.download.production }}"></script>
```

##### ES6+
```js
import Agent from "@egjs/agent";
```

### Use

```javascript
// eg.Agent will use browser's navigator.userAgent 
var agentInfo = eg.agent();

// or you can use own user-agent string
agentInfo = eg.agent(ua);

console.log(agentInfo);
/*
    {
        browser: {
            name: "",
            version: ""
            webview: true or false
        },
        os: {
            name: "",
            version: ""
        }
    }
*/
```
