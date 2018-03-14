'use strict';

describe('Service: departaments', function () {

  // load the service's module
  beforeEach(module('startUpApp'));

  // instantiate service
  var departaments;
  beforeEach(inject(function (_departaments_) {
    departaments = _departaments_;
  }));

  it('should do something', function () {
    expect(!!departaments).to.be.true;
  });

});
