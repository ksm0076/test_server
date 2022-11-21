const assert = require('assert');
const { sayHello } = require('./hello');

describe('hello test!', () => {
  it('Test - sayHello should return hello', (done) => {
    assert.equal(sayHello(), 'hello');
    done();
  });
});
