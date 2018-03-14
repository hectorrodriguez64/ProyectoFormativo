'use strict';

describe('Component: HelpComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var HelpComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    HelpComponent = $componentController('HelpComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
