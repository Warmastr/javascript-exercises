const add = function(intA, intB) {
	let result = 0;
  result = intA + intB;
  return result;
};

const subtract = function(intA, intB) {
	let result = 0;
  result = intA - intB;
  return result;
};

const sum = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (let i=0; i < arr.length; i++)
    result = result *= arr[i];
  return result;
};

const power = function(num, pwr) {
  let result = 1;
	// num needs to be multiplied by itself pwr times
  for (let i = 0; i < pwr; i++) {
    result = result * num;
  }
  return result;
};

const factorial = function(n) {
	let result = n;
    if (n === 0 || n === 1) {
        result = 1;
    } else if (n > 1) {
        while (n > 1) {
            let prod = n - 1;
            console.log(result);
            result = result * prod;
            n--;
        }
    }
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
