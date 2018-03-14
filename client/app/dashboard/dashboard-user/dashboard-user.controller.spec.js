'use strict';

describe('Component: DashboardUserComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var DashboardUserComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DashboardUserComponent = $componentController('dashboard-user', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
