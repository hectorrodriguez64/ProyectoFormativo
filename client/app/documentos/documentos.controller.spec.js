'use strict';

describe('Component: DocumentosComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var DocumentosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DocumentosComponent = $componentController('DocumentosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
