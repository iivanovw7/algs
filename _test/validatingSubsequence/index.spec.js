import { validateSubsequence_1, validateSubsequence_2 } from '../../validateSubsequence';

const testCases = [
    {
        sequence: [-4, -1, 3, 8, 3, 9, 11],
        subsequence: [-1, 8, 3, 11],
        expected: true
    },
    {
        sequence: [-4, -1, 3, 8, 3, 7, 9],
        subsequence: [-4, 3, 10],
        expected: false
    },
    {
        sequence: [-4, -1, 3, 6, 7, 9],
        subsequence: [19],
        expected: false
    },
    {
        sequence: [3],
        subsequence: [3],
        expected: true
    },
    {
        sequence: [-4, -1, 3, 8, 3, 9, 11],
        subsequence: [3, 3],
        expected: true
    }
];

describe(validateSubsequence_1.name, function validateSubsequence_1_TestSuite() {
    test.each(testCases)(`validateSubsequence($sequence, $subsequence) should return $expected`, function validateSubsequence_1_Test(params) {
        const { sequence, subsequence, expected } = params;

        expect(validateSubsequence_1(sequence, subsequence))
            .toBe(expected);
    })
});

describe(validateSubsequence_2.name, function validateSubsequence_2_TestSuite() {
    test.each(testCases)(`validateSubsequence($sequence, $subsequence) should return $expected`, function validateSubsequence_2_Test(params) {
        const { sequence, subsequence, expected } = params;

        expect(validateSubsequence_2(sequence, subsequence))
            .toBe(expected);
    })
});
