'use strict';

describe('Service: packages', function () {

  // load the service's module
  beforeEach(module('startUpApp'));

  // instantiate service
  var packages;
  beforeEach(inject(function (_packages_) {
    packages = _packages_;
  }));

  it('should do something', function () {
    expect(!!packages).to.be.true;
  });

});
