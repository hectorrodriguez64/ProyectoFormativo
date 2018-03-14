'use strict';

describe('Component: FAQComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var FAQComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    FAQComponent = $componentController('FAQComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
