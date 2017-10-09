var angular = require('angular');
require('angular-mocks');
var title = require('./title');

describe('title component', function () {
  beforeEach(function () {
    angular
      .module('appTitle', ['app/title.html'])
      .component('appTitle', title);
    angular.mock.module('appTitle');
  });
});
