var angular = require('angular');
require('angular-mocks');
var footer = require('./footer');

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('appFooter', ['app/footer.html'])
      .component('appFooter', footer);
    angular.mock.module('appFooter');
  });

});
