var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var title = require('./app/title');
var footer = require('./app/footer');

var wiggle = require('./app/directives/wiggleHover');

require('./index.css');

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('appTitle', title)
  .component('appFooter', footer)
  .directive('wiggleHover', wiggle);
