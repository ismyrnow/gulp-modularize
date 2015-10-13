'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function (dir) {
  var fullDir = path.join(process.cwd(), dir);
  var tasks = fs.readdirSync(fullDir).filter(onlyScripts);

  tasks.forEach(function(task) {
    var path = fullDir + task;
    try {
      var task = require(path);

      // If the task exports a function, call it.
      // This maintains backward compatibility with v2.0.x
      if (typeof task === 'function') {
        task();
      }
    } catch (err) {
      throw new Error('Failed to require task at ' + path);
    }
  });
};

function onlyScripts(name) {
  return /(\.js$)/i.test(path.extname(name));
}
