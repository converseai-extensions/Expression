const vm = require('vm');
module.exports = function(input) {
  var script = new vm.Script(input);
  return script.runInNewContext();
}
