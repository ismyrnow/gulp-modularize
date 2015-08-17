gulp-modularize
===============

Simple, unopinionated gulp tasks modularization.

## Install

```
npm install gulp-modularize
```

## Usage

In your `gulpfile.js`:

```javascript
// ./gulpfile.js
var gulp = require('gulp');
var modularize = require('gulp-modularize');

modularize(gulp, './path/to/tasks/');
```

Each module in the tasks directory is required, and passed an instance of `gulp`.

For example:

```javascript
// ./path/to/tasks/mytask.js
module.exports = function (gulp) {

  gulp.task('mytask', function () {
    // do stuff
  });

};
```

It is up to you to decide how many tasks a module defines, and what they are called.

However, I recommend having each module at least create one task with the same name as the module.
