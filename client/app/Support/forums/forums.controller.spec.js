'use strict';

describe('Component: ForumsComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var ForumsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ForumsComponent = $componentController('ForumsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
