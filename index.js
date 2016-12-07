const path = require('path');

module.exports = function requireResolver(file) {
  try {
    return require(path.resolve(file));
  } catch (e) {
    return function (curryFile) {
      return requireResolver(path.join(file, curryFile));
    };
  }
};
