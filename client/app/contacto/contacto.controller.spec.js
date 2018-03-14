'use strict';

describe('Component: ContactoComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var ContactoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContactoComponent = $componentController('ContactoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
