var path = require('path');
var test = require('tape');
var gulp = require('gulp');
var gulpModularize = require('../index');

test('module exists', function (t) {
  t.equals(typeof gulpModularize, 'function', '`gulpModularize` is a function');
  t.end();
});

test('includes tasks', function (t) {
  gulpModularize('tests/fixtures/good-tasks/');
  t.ok(gulp.tasks['task1'], 'module with a single task is registered');
  t.ok(gulp.tasks['task2'] && gulp.tasks['task2.5'], 'multiple tasks in a single module are registered');
  t.end();
});
