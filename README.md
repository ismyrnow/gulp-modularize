gulp-modularize
===============

Simple, unopinionated gulp task modularization.

`gulp-modularize` allows you to split your gulp tasks into separate modules, enabling task definitions to be resused easily without boilerplate code. It's unopinionated, and requires almost no configuration or setup.

## Install

```
npm install gulp-modularize
```

## Usage

Just point `gulp-modularize` to your tasks directory, and you're done.

In your `gulpfile.js`:

```javascript
// gulpfile.js
require('gulp-modularize')('./tasks/');
```

Each module in the tasks directory is required, and can add tasks to the global gulp instance.

For example:

```javascript
// tasks/mytask.js
var gulp = require('gulp');

module.exports = function (gulp) {

  gulp.task('mytask', function () {
    // do stuff
  });

};
```

It is up to you to decide how many tasks a module defines, and what they are called.

However, I recommend having each module at least create one task with the same name as the module.
