'use strict';

describe('Component: ChangePasswordComponent', function() {
  // load the controller's module
  beforeEach(module('startUpApp.change-password'));

  var ChangePasswordComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ChangePasswordComponent = $componentController('change-password', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
