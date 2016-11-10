const path = require('path');

module.exports = function requireResolver() {
  let aArgs = [];
  let i = 0;
  let n = arguments.length;

  for (; i < n; i++) {
    aArgs[i] = arguments[i];
  }

  if (aArgs.length > 1) {
    return require(
      path.resolve(
        path.join.apply(null, aArgs)
      )
    );
  } else {
    return function () {
      let bArgs = [];
      let i = 0;
      let n = arguments.length;

      for (; i < n; i++) {
        bArgs[i] = arguments[i];
      }

      return require(
        path.resolve(
          path.join.apply(null, aArgs.concat(bArgs))
        )
      );
    };
  }
};
