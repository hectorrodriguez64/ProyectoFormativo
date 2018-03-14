'use strict';

describe('Component: TermsUseComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var TermsUseComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TermsUseComponent = $componentController('TermsUseComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
