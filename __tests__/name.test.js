import formatName from '../src/name.js';

describe('formatName', () => {
    test('should return a name with the first letter in upper case and the rest in lower case(s)', () => {
        const name = "monica";
        expect(formatName(name)).toEqual("Monica");
    });

    test('should return a name with the first letter in upper case and the rest in lower case(s)', () => {
        const name = "BOBBY";
        expect(formatName(name)).toEqual("Bobby");
    });
})