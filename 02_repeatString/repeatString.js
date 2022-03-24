const repeatString = function(string, number) {
    const err = 'ERROR';
    let result = '';
    if (number < 0) {
        result = 'ERROR';
    } else if (string === '') {
        result = '';
    } else {
        for (let i = 0; i < number; i++) {
            result += string;
        }
    }
    return result
};

repeatString('hey', -1);
// Do not edit below this line
module.exports = repeatString;
