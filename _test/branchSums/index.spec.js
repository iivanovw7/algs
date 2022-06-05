import { branchSums_1 } from '../../branchSums';

const testCases = [
    {
        tree: {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 4,
                    left: {
                        value: 8
                    },
                    right: {
                        value: 9
                    }
                },
                right: {
                    value: 5,
                    left: {
                        value: 10
                    }
                }
            },
            right: {
                value: 3,
                left: {
                    value: 6,
                },
                right: {
                    value: 7,
                }
            }
        },
        expected: [15, 16, 18, 10, 11]
    },
    {
        tree: {
            value: 10
        },
        expected: [10]
    },
    {
        tree: {
            value: 10,
            left: {
                value: 5,
                left: {
                    value: 2,
                    left: {
                        value: 1
                    }
                },
                right: {
                    value: 5,
                }
            }
        },
        expected: [18, 20]
    },
    {
        tree: {
            value: 10,
            right: {
                value: 10
            },
            left: {
                value: 10
            }
        },
        expected: [20, 20]
    },
];

describe(branchSums_1.name, function branchSums_1_TestSuite() {
    test.each(testCases)(`branchSums_1($tree) should return $expected`, function branchSums_1_TestSuite_Test(params) {
        const { tree, expected } = params;

        expect(branchSums_1(tree))
            .toEqual(expected);
    })
});
