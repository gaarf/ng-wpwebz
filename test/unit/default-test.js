'use strict';

describe('default', function(){

  it('test env is ready', function() {
    expect(jasmine).toBeDefined();
    expect(angular).toBeDefined();
    expect(module).toBe(angular.mock.module);
    expect(inject).toBe(angular.mock.inject);
  });


});
