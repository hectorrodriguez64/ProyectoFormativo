'use strict';

describe('Component: TiposDocumentosComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var TiposDocumentosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TiposDocumentosComponent = $componentController('tipos-documentos', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
