var uniqueRandomArray = require('unique-random-array');
var guitarNames = require('./guitars.json');

module.exports = {
    all: guitarNames,
    random: uniqueRandomArray(guitarNames)
};
