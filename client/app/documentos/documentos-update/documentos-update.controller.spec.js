'use strict';

describe('Component: DocumentosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var DocumentosUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DocumentosUpdateComponent = $componentController('DocumentosUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
