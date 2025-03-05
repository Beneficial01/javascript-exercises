function roundDecimals(num, precision){
  if(num == 0)
    return 0;
  let tmp = num*(10**(precision));
  tmp = Math.round(tmp)
  return tmp/(10**precision)
}

const convertToCelsius = function(temp) {
  convertedTemp = (temp-32)*(5/9);
  return roundDecimals(convertedTemp,1);
};

const convertToFahrenheit = function(temp) {
  convertedTemp = temp*(9/5) + 32;
  return roundDecimals(convertedTemp,1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
