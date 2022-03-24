const removeFromArray = function(array, ...items) {
    for (let i = 1; i < arguments.length; i++) {
        for(let j = array.length - 1; j >= 0; j--) {
            if (arguments[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};    
console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
