const chance = require('chance').Chance();

const year = new Date().getFullYear();
const cache = {

    loans: chance.n(()=> {
        return {
            id: chance.guid(),
            name: chance.word({length: 4}),
            amount: chance.integer({min: 100000, max: 1000000}),
            progress: chance.integer({min: 0, max: 100}),
            created: chance.date({year})
        };
    }, 10)

};

module.exports = ()=> {
    const {loans} = cache;

    return {
        loans
    };
};