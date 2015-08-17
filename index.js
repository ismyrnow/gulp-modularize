'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function (gulp, dir) {
  var fullDir = path.join(process.cwd(), dir);
  var tasks = fs.readdirSync(fullDir).filter(onlyScripts);

  tasks.forEach(function(task) {
    require(fullDir + task)(gulp);
  });
};

function onlyScripts(name) {
  return /(\.js$)/i.test(path.extname(name));
}
