'use strict';

describe('Service: documentos', function () {

  // load the service's module
  beforeEach(module('startUpApp'));

  // instantiate service
  var documentos;
  beforeEach(inject(function (_documentos_) {
    documentos = _documentos_;
  }));

  it('should do something', function () {
    expect(!!documentos).to.be.true;
  });

});
