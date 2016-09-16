var chance = require('chance').Chance();

var year = new Date().getFullYear();
var cache = {

    loans: chance.n(function () {
        return {
            id: chance.guid(),
            name: chance.word({ length: 4 }),
            amount: chance.integer({ min: 100000, max: 1000000 }),
            progress: chance.integer({ min: 0, max: 100 }),
            created: chance.date({ year })
        };
    }, 10)

};

module.exports = () => {
    var loans = cache.loans;

    return {
        loans: loans
    };
};