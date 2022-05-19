import { twoNumberSum_1, twoNumberSum_2, twoNumberSum_3 } from '../../twoNumberSum'

const testCases = [
    {
        numbers: [-4, -1, 3, 8, 9, 11],
        targetSum: 10,
        expected: [11, -1]
    },
    {
        numbers: [-4, -1, 3, 8, 7, 9],
        targetSum: 10,
        expected: [3, 7]
    },
    {
        numbers: [-4, -1, 3, 6, 7, 9],
        targetSum: 100,
        expected: []
    },
    {
        numbers: [-999, 3, 6, 7, 12, 14, 9999],
        targetSum: 9,
        expected: [3, 6]
    }
];

describe(twoNumberSum_1.name, function twoNumberSum_1_TestSuite() {
    test.each(testCases)(`twoNumberSum($numbers, $targetSum) should return $expected`, function twoNumberSum_1_Test(params) {
        const { numbers, targetSum, expected } = params;

        expect(twoNumberSum_1(numbers, targetSum).sort())
            .toEqual(expected.sort());
    })
});

describe(twoNumberSum_2.name, function twoNumberSum_2_TestSuite() {
    test.each(testCases)(`twoNumberSum($numbers, $targetSum) should return $expected`, function twoNumberSum_2_Test(params) {
        const { numbers, targetSum, expected } = params;

        expect(twoNumberSum_2(numbers, targetSum).sort())
            .toEqual(expected.sort());
    })
});

describe(twoNumberSum_3.name, function twoNumberSum_3_TestSuite() {
    test.each(testCases)(`twoNumberSum($numbers, $targetSum) should return $expected`, function twoNumberSum_3_Test(params) {
        const { numbers, targetSum, expected } = params;

        expect(twoNumberSum_3(numbers, targetSum).sort())
            .toEqual(expected.sort());
    })
});


