var uniqueRandomArray = require('unique-random-array');
var guitarNames = require('./guitars.json');
var getRandomItem = uniqueRandomArray(guitarNames);

module.exports = {
    all: guitarNames,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    }
    var randomItems = [];
    for (var i = 0; i < number; i++) {
        randomItems.push(getRandomItem());
    }
    return randomItems;
}
