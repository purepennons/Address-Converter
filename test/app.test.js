var chai       = require('chai')
  , sinon      = require('sinon')
;

var testApp = require('../src/app.js')
;

var expect = chai.expect;

chai.use(require('sinon-chai'));


describe('test convertToLat', function() {
  return it('works', function() {
    var actual, address;

    actual = testApp(address, function());
    return expect(actual).to.eql('123');
  });
});
