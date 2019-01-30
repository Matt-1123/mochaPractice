// ------ MOCHA PRACTICE --------

// INSTRUCTIONS:
// A testing group named Temperature Conversion
// Within that testing group, two additional testing groups, one named cToF and one named fToC
// Each testing group will have three test cases: two numbers, and a non-integer test.

let assert = require('assert');
//test.js needs to interact with the functions in app.js.  Expose the functions by requiring app.js file:
let convert = require('../app.js');

describe('Temperature Conversion', function(){
  describe('cToF', function(){
    it('should convert -40c to -40f', function(){
      assert.equal(-40, convert.cToF(-40));
    });
    it('should convert 0c to 32f', function(){
      assert.equal(32, convert.cToF(0));
    });
    it('should return undefined if no temperature is input', function(){
      assert.equal(undefined, convert.cToF(''));
    });
  });
  describe('fToC', function(){
    it('should convert -40f to -40c', function(){
      assert.equal(-40, convert.fToC(-40));
    });
    it('should convert 32f to 0c', function(){
      assert.equal(0, convert.fToC(32));
    });
    it('should return undefined if no temperature is input', function(){
      assert.equal(undefined, convert.fToC(''));
    });
  });
});
