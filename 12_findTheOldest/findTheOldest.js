const findTheOldest = function(array) {
    /* let currentYear = new Date().getFullYear(); */
    let sortOldest = array.sort(function(a, b) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].hasOwnProperty('name') === true && array[i].hasOwnProperty('yearOfDeath') === false) {
                array[i].yearOfDeath = new Date().getFullYear()
            }
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        if (lastGuy > nextGuy){
            return -1;
        } else {
            return 1;
        }
    });
    console.table(sortOldest);
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
