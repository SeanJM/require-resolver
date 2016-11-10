# Require Resolve

Usage with a single argument (returns a function)

```javascript
const rr = require('require-resolve');
// This will return a new function
const scripts = rr('src/scripts');
// You can ommit the extension, this is just to clarity the example usage
const myScript = scripts('my-script.js');
```

Usage with 2 arguments

```javascript
const rr = require('require-resolve');
// This will return a new function
const myScript = rr('src/scripts', 'my-script');
```
