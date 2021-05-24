"use strict";

var moduleMap = {
  'src/assets/foo.js': function srcAssetsFooJs() {
    require('src/assets/foo.js');
  },
  'src/project.js': function srcProjectJs() {
    require('src/project.js');
  }
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};