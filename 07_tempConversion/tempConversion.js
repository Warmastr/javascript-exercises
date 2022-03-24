const ftoc = function(temp) {
  let celsius = (temp - 32) * (5/9);
  celsius = celsius.toFixed(1) * 1;
  return celsius;
};

const ctof = function(temp) {
  let fahrenheit = (temp * 9/5) + 32;
  fahrenheit = fahrenheit.toFixed(1) * 1;
  return fahrenheit;
};

console.log(ftoc(100));
console.log(ctof(73.2));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
