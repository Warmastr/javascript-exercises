const reverseString = function(str) {
    let reverse = '';
    if (str === '') {
        return reverse;
    } else {
        for (i = str.length - 1; i >= 0; i--) {
            reverse += str.charAt(i);
        }
    }
    return reverse;
};

console.log(reverseString('123! abc!'));

// Do not edit below this line
module.exports = reverseString;
