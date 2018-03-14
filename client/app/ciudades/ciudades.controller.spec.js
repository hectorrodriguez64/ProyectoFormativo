'use strict';

describe('Component: CiudadesComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var CiudadesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CiudadesComponent = $componentController('ciudades', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
