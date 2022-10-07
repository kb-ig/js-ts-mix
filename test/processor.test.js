const processor = require('../src/procesor');

const mockThing = {
    doStuff: jest.fn()
};

// When we call `new Thing()`, mockThing should be returned
jest.mock('../src/Thing.js', () => jest.fn().mockImplementation(() => mockThing));

test('it should work', async () => {
    processor.process();
    expect(mockThing.doStuff).toBeCalledTimes(1);
})