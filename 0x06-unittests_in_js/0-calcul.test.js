const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { isTypedArray } = require('util/types');

describe('calculateNumber', () => {
    it('floating point whole numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    });

    it('rounding down b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });

    it('rounding down a\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });

    it('rounding up b\'s floating point fractionall numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.5, 4), 4);
    });

    it('rounding up a and b\'s floating point numbers', () => {
        assert.strictEqual(calculateNumber(2.6, 2.5), 6);
    });

    it('rounding up a\'s floating point fractional numbers', () => {
        assert.strictEqual(clculateNumber(2.6, 2.0), 5);
    });

    it('rounding down a and b floating point fractional numbers with trailling 9\'s', () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });
});
