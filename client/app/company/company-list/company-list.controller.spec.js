'use strict';

describe('Component: CompanyListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var CompanyListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CompanyListComponent = $componentController('CompanyListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
