const assert = require('assert');
const square = require('./square');

describe('Square test!', () => {
  it('Test - Square should return x*x', (done) => {
    assert.equal(square.sq(10), 100);
    done();
  });
});
