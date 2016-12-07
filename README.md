# Require Resolve

An auto curried function which will return a new function until the required file resolves.

```javascript
const rr = require('require-resolve');
// This will return a new function
const scripts = rr('src/scripts');
// You can ommit the extension, this is just to clarity the example usage
const myScript = scripts('my-script.js');
```

```javascript
const rr = require('require-resolve');
// This will return the exports of the resolved script
const myScript = rr('src/scripts/my-script');
```
