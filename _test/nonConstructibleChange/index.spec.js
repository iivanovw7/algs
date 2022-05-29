import { nonConstructibleChange } from '../../nonConstructibleChange';

const testCases = [
    {
        coins: [7],
        expected: 1
    },
    {
        coins: [1, 2, 5],
        expected: 4
    },
    {
        coins: [5, 7, 1, 1, 2, 3, 22],
        expected: 20
    },
];

describe(nonConstructibleChange.name, function nonConstructibleChange_TestSuite() {
    test.each(testCases)(`nonConstructibleChange($coins) should return $expected`, function nonConstructibleChange_Test(params) {
        const { coins, expected } = params;

        expect(nonConstructibleChange(coins))
            .toEqual(expected);
    })
});

