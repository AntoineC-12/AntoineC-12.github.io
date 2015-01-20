<<<<<<< HEAD
=======
/* global btoa: true */
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
/*!
 * Bootstrap Grunt task for generating raw-files.min.js for the Customizer
 * http://getbootstrap.com
 * Copyright 2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
<<<<<<< HEAD

/* global btoa: true */

'use strict';
var fs = require('fs');
var btoa = require('btoa');
var glob = require('glob');

function getFiles(type) {
  var files = {};
  var recursive = (type === 'less');
  var globExpr = (recursive ? '/**/*' : '/*');
  glob.sync(type + globExpr)
    .filter(function (path) {
      return type === 'fonts' ? true : new RegExp('\\.' + type + '$').test(path);
    })
    .forEach(function (fullPath) {
      var relativePath = fullPath.replace(/^[^/]+\//, '');
      files[relativePath] = (type === 'fonts' ? btoa(fs.readFileSync(fullPath)) : fs.readFileSync(fullPath, 'utf8'));
=======
'use strict';
var btoa = require('btoa');
var fs = require('fs');

function getFiles(type) {
  var files = {};
  fs.readdirSync(type)
    .filter(function (path) {
      return type === 'fonts' ? true : new RegExp('\\.' + type + '$').test(path);
    })
    .forEach(function (path) {
      var fullPath = type + '/' + path;
      files[path] = (type === 'fonts' ? btoa(fs.readFileSync(fullPath)) : fs.readFileSync(fullPath, 'utf8'));
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    });
  return 'var __' + type + ' = ' + JSON.stringify(files) + '\n';
}

<<<<<<< HEAD
module.exports = function generateRawFilesJs(grunt, banner) {
  if (!banner) {
    banner = '';
  }
  var dirs = ['js', 'less', 'fonts'];
  var files = banner + dirs.map(getFiles).reduce(function (combined, file) {
    return combined + file;
  }, '');
  var rawFilesJs = 'docs/assets/js/raw-files.min.js';
  try {
    fs.writeFileSync(rawFilesJs, files);
  }
  catch (err) {
    grunt.fail.warn(err);
  }
  grunt.log.writeln('File ' + rawFilesJs.cyan + ' created.');
=======
module.exports = function generateRawFilesJs(banner) {
  if (!banner) {
    banner = '';
  }
  var files = banner + getFiles('js') + getFiles('less') + getFiles('fonts');
  fs.writeFileSync('docs/assets/js/raw-files.min.js', files);
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
};
