'use strict';

describe('Service: company', function () {

  // load the service's module
  beforeEach(module('startUpApp'));

  // instantiate service
  var company;
  beforeEach(inject(function (_company_) {
    company = _company_;
  }));

  it('should do something', function () {
    expect(!!company).to.be.true;
  });

});
