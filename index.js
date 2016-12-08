const path = require('path');
let root;

function isError(e) {
  let isModule = e.code === 'MODULE_NOT_FOUND';
  let hasRoot = e.message.split(' ').slice(3).join(' ').slice(1).startsWith(root);
  if (isModule && !hasRoot) {
    return true;
  }
  if (!isModule) {
    return true;
  }
  return false;
}

module.exports = function requireResolver(file) {
  try {
    root = path.resolve(file).split(path.sep).slice(0, 2).join(path.sep);
    return require(path.resolve(file));
  } catch (e) {
    if (isError(e)) {
      console.log(e.stack);
    } else {
      return function (curryFile) {
        return requireResolver(path.join(file, curryFile));
      };
    }
  }
};
