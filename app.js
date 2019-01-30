// Instead of two different functions, we’re going to make each function a method on our new convert object.
let convert = {};

convert.cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

convert.fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

// expose 'convert' object using module.exports. module.exports is how we tell JavaScript what object to return as the result of a require call.
module.exports = convert;
