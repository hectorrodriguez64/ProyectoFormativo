'use strict';

describe('Component: CompanyCreateComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var CompanyCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CompanyCreateComponent = $componentController('CompanyCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
