'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: ['plugins/custom_ui/custom_vis.js'],
      styleSheetPaths: (0, _path.resolve)(__dirname, 'public/index.scss')
    }
  });
};

var _path = require('path');
 

module.exports = exports['default'];