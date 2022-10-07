const Thing = require('./Thing');

module.exports = {
    process: async () => {
        const thing = new Thing();
        thing.doStuff();
    }
}