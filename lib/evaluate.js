const vm = require('vm');
const _  = require('lodash');
module.exports = function(input, sandbox) {
  var script = new vm.Script(input);
  if (sandbox) {
    sandbox = { _, ...sandbox };
    const context = vm.createContext(sandbox);
    return script.runInContext(context);
  }
  return script.runInNewContext();
}
