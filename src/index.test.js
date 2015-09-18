var expect = require('chai').expect;
var guitars = require('./index');

describe('guitar names', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            expect(guitars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `My`', function () {
            expect(guitars.all).to.include('My');
        })
    });

    describe('random', function () {
        it('should return random item from guitars.all', function () {
            var randomItem = guitars.random();

            expect(guitars.all).to.include(randomItem);
        });
    });
});
