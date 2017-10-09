var angular = require('angular');
require('angular-mocks');
var main = require('./main');

describe('main component', function () {
  beforeEach(function () {
    angular
      .module('app', ['app/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the title and footer', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('app-title').length).toEqual(1);
    expect(element.find('app-footer').length).toEqual(1);
  }));
});
