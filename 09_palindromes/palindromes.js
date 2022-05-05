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

const palindromes = function (str) {
    let original = str.replace(/[^a-zA-Z0-9]/g, '').split('');
    let reverse = reverseString(str);
    let reverseSplit = reverse.replace(/[^a-zA-Z0-9]/g, '').split('');
    let finalOriginal = original.toString().toLowerCase();
    let finalReverse = reverseSplit.toString().toLowerCase();
    console.log(finalOriginal);
    console.log(finalReverse);
    
    if (finalOriginal == finalReverse){
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
};



// Do not edit below this line
module.exports = palindromes;
