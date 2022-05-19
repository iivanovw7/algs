import { sortedSquaredArray_1, sortedSquaredArray_2 } from '../../sortedSquaredArray';

const testCases = [
    {
        array: [-7, -5, -4, 3, 6, 8, 12],
        expected: [9, 16, 25, 36, 49, 64, 144]
    },
    {
        array: [3, 6, 8],
        expected: [9, 36, 64]
    },
    {
        array: [0 ,0 , 0, 4],
        expected: [0, 0, 0, 16]
    },
    {
        array: [-7, 0, 3],
        expected: [0, 9, 49]
    },
    {
        array: [0],
        expected: [0]
    },
];

describe(sortedSquaredArray_1.name, function sortedSquaredArray_1_TestSuite() {
    test.each(testCases)(`sortedSquaredArray($array) should return $expected`, function sortedSquaredArray_1_Test(params) {
        const { array, expected } = params;

        expect(sortedSquaredArray_1(array))
            .toEqual(expected);
    })
});

describe(sortedSquaredArray_2.name, function sortedSquaredArray_2_TestSuite() {
    test.each(testCases)(`sortedSquaredArray($array) should return $expected`, function sortedSquaredArray_2_Test(params) {
        const { array, expected } = params;

        expect(sortedSquaredArray_2(array))
            .toEqual(expected);
    })
});

