import { sortedSquaredArray_1, sortedSquaredArray_2 } from '../../sortedSquaredArray';

const testCases = [
    {
        array: [-7, -5, -4, 3, 6, 8, 12],
        assert: [9, 16, 25, 36, 49, 64, 144]
    },
    {
        array: [3, 6, 8],
        assert: [9, 36, 64]
    },
    {
        array: [0 ,0 , 0, 4],
        assert: [0, 0, 0, 16]
    },
    {
        array: [-7, 0, 3],
        assert: [0, 9, 49]
    },
    {
        array: [0],
        assert: [0]
    },
];

function check(method, options) {
    const { assert, array } = options;

    it(`Should return [${String(assert)}] if called with: [${String(array)}]`, function () {
        expect(method(array))
            .toEqual(assert);
    });
}

describe(sortedSquaredArray_1.name, function sortedSquaredArray_1_TestSuite() {
    for (const test of testCases) {
        check(sortedSquaredArray_1, test);
    }
});

describe(sortedSquaredArray_2.name, function sortedSquaredArray_2_TestSuite() {
    for (const test of testCases) {
        check(sortedSquaredArray_2, test);
    }
});
