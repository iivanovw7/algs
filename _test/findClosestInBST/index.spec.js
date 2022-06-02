import { findClosestInBST } from '../../findClosestInBST';

const testCases = [
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
            },
            right: {
                value: 15,
                left: {
                    value: 15,
                    left: {
                        value: 13,
                        left: {
                            value: 11
                        }
                    }
                },
                right: {
                    value: 22,
                }
            }
        },
        target: 12,
        expected: 13
    },
    {
        tree: {
            value: 10
        },
        target: 12,
        expected: 10
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
        target: 5,
        expected: 5
    }
];

describe(findClosestInBST.name, function findClosestInBST_TestSuite() {
    test.each(testCases)(`findClosestInBST($coins, $target) should return $expected`, function findClosestInBST_TestSuite_Test(params) {
        const { tree, target, expected } = params;

        expect(findClosestInBST(tree, target))
            .toEqual(expected);
    })
});
