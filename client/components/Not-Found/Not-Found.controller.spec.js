'use strict';

describe('Component: NotFoundComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var NotFoundComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    NotFoundComponent = $componentController('NotFoundComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
