'use strict';

describe('Component: ProfileUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var ProfileUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProfileUpdateComponent = $componentController('ProfileUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
