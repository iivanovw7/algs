import { twoNumberSum_1, twoNumberSum_2, twoNumberSum_3 } from '../../twoNumberSum'

const testCases = [
    {
        numbers: [-4, -1, 3, 8, 9, 11],
        targetSum: 10,
        assert: [11, -1]
    },
    {
        numbers: [-4, -1, 3, 8, 7, 9],
        targetSum: 10,
        assert: [3, 7]
    },
    {
        numbers: [-4, -1, 3, 6, 7, 9],
        targetSum: 100,
        assert: []
    },
    {
        numbers: [-999, 3, 6, 7, 12, 14, 9999],
        targetSum: 9,
        assert: [3, 6]
    }
];

function check(method, options) {
    const { assert, numbers, targetSum } = options;

    it(`Should return [${String(assert)}] if called with: [${String(numbers)}], ${targetSum}`, function () {
        expect(method(numbers, targetSum).sort())
            .toEqual(assert.sort());
    });
}

describe(twoNumberSum_1.name, function twoNumberSum_1_TestSuite() {
    for (const test of testCases) {
        check(twoNumberSum_1, test);
    }
});

describe(twoNumberSum_2.name, function twoNumberSum_2_TestSuite() {
    for (const test of testCases) {
        check(twoNumberSum_2, test);
    }
});

describe(twoNumberSum_3.name, function twoNumberSum_3_TestSuite() {
    for (const test of testCases) {
        check(twoNumberSum_3, test);
    }
});





