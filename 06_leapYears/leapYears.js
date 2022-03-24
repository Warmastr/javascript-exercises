const leapYears = function(year) {
    let result = '';
    if (year % 100 == 0 && year % 400 == 0) {
        result = true;
        } else if (year % 100 == 0) {
            result = false;
                } else if (year % 4 == 0) {
                    result = true;
                        } else {
                            result = false;
    }
    return result;
};
console.log(leapYears(2000));
// Do not edit below this line
module.exports = leapYears;
