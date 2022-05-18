import { validateSubsequence_1, validateSubsequence_2 } from '../../validateSubsequence';

const testCases = [
    {
        sequence: [-4, -1, 3, 8, 3, 9, 11],
        subsequence: [-1, 8, 3, 11],
        assert: true
    },
    {
        sequence: [-4, -1, 3, 8, 3, 7, 9],
        subsequence: [-4, 3, 10],
        assert: false
    },
    {
        sequence: [-4, -1, 3, 6, 7, 9],
        subsequence: [19],
        assert: false
    },
    {
        sequence: [3],
        subsequence: [3],
        assert: true
    },
    {
        sequence: [-4, -1, 3, 8, 3, 9, 11],
        subsequence: [3, 3],
        assert: true
    }
];

function check(method, options) {
    const { assert, sequence, subsequence } = options;

    it(`Should return [${String(assert)}] if called with: [${String(sequence)}], [${String(subsequence)}]`, function () {
        expect(method(sequence, subsequence))
            .toEqual(assert);
    });
}

describe(validateSubsequence_1.name, function validateSubsequence_1_TestSuite() {
    for (const test of testCases) {
        check(validateSubsequence_1, test);
    }
});

describe(validateSubsequence_2.name, function validateSubsequence_2_TestSuite() {
    for (const test of testCases) {
        check(validateSubsequence_2, test);
    }
});
