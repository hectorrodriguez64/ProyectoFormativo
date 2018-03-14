'use strict';

describe('Component: PackagesComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var PackagesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PackagesComponent = $componentController('PackagesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
