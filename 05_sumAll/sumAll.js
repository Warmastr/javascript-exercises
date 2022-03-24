// This function is the summation of all numbers between start and end and returns the final sum.
const sumAll = function(a, b) {
        let finalSum = 0;
        // Handles cases where b is smaller than a outside the loop so the variables can be swapped before they are processed by the loop.
        if (b < a) {
            [a, b] = [b, a];
        }
        
        if ( a < 0 || b < 0) {
            return 'ERROR';
            }
        
        if (typeof a != 'number' || typeof b != 'number') {
            return 'ERROR';
        }

        for (let i = a; i <= b; i++) {
            finalSum += i; 
        }
    return finalSum;
};
console.log(sumAll([1, 2, 3], 4));
// Do not edit below this line
module.exports = sumAll;
