import { tournamentWinner } from '../../tournamentWinner'

const testCases = [
    {
        competitions: [['a', 'b']],
        results: [0],
        expected: "b"
    },
    {
        competitions: [['a', 'b']],
        results: [1],
        expected: "a"
    },
    {
        competitions: [
            ['a', 'b'],
            ['a', 'b'],
            ['a', 'b']
        ],
        results: [0, 0, 1],
        expected: "b"
    },
    {
        competitions: [
            ['a', 'b'],
            ['a', 'b'],
            ['a', 'b'],
            ['c', 'a'],
            ['c', 'a'],
            ['c', 'a'],
            ['c', 'a']
        ],
        results: [0, 0, 1, 1, 0, 0, 1],
        expected: "a"
    }
];

describe(tournamentWinner.name, function tournamentWinner_TestSuite() {
    test.each(testCases)(`tournamentWinner($competitions, $results) should return $expected`, function tournamentWinner_Test(params) {
        const { competitions, results, expected } = params;

        expect(tournamentWinner(competitions, results))
            .toEqual(expected);
    })
});
