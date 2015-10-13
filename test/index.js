var path = require('path');
var test = require('tape');
var gulp = require('gulp');
var gulpModularize = require('../index');

test('module exists', function (t) {
  t.equals(typeof gulpModularize, 'function', '`gulpModularize` is a function');
  t.end();
});

test('includes tasks', function (t) {
  gulpModularize('test/fixtures/good-tasks/');
  t.ok(gulp.tasks['task1'], 'module with a single task is registered');
  t.ok(gulp.tasks['task2'] && gulp.tasks['task2.5'], 'multiple tasks in a single module are registered');
  t.ok(gulp.tasks['task3'], 'tasks without module.export are registered');
  t.end();
});

test('throws for invalid tasks', function (t) {
  try {
    gulpModularize('test/fixtures/bad-tasks/');
    t.fail('invalid tasks should throw an error');
  } catch (err) {
    t.ok(err, 'invalid tasks throw an error');
    t.ok(err.message.startsWith('Failed to require task'), 'invalid task error has custom message');
    t.end();
  }
});
