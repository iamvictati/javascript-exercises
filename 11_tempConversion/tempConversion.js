const convertToCelsius = function(Fahren) { 
  const inCelsius = (Fahren - 32) * 5/9;
  return Math.round(inCelsius * 10) / 10; 
};

const convertToFahrenheit = function(Cels) {
  const inFahrenheit = (Cels * 9/5 + 32); 
  return Math.round(inFahrenheit * 10) / 10;  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
