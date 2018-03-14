'use strict';

describe('Component: TermsServiceComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var TermsServiceComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TermsServiceComponent = $componentController('TermsServiceComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
