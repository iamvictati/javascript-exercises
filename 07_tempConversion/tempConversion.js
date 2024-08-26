const convertToCelsius = function(Fahren) { 
  const inCelsius = (Fahren - 32) * 5/9;
  const toCelsius = Math.round(inCelsius * 10) / 10;
  return toCelsius; 
};

const convertToFahrenheit = function(Cels) {
  const inFahrenheit = (Cels * 9/5 + 32); 
  const toFahrenheit = Math.round(inFahrenheit * 10) / 10; 
  return toFahrenheit; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
