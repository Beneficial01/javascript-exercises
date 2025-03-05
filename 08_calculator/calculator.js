const add = function(a,b) {
	return (a+b)
};

const subtract = function(a,b) {
	return (a-b)
};

const sum = function(arr) {
	result = 0;
  for(let x of arr){
    result += x;
  }
  return result;
};

const multiply = function(arr) {
  result = arr[0];
  for(let i = 1; i < arr.length; i++)
    result *= arr[i];
  return result;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  if(a === 0)
    return 1;
	let result = a
  for(let i = a - 1; i > 0; i--)
    result *= i;
  return result; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
