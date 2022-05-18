/**
 * Receives array of integers (positive and negative) sorted in ascending order and returns
 *      new array of squares off all values in a given array, also sorted in ascending order.
 *
 * @function
 * @callback sortedSquaredArray
 *
 * @param {Array.<number>} array - represents sorted array of positive and negative integers.
 *
 * @returns {Array.<number>} sorted array of squares.
 */

/**
 * Two loops, multiply each value and then sort the result.
 * 0(nLog(n)) time | O(n) space.
 *
 * @type {sortedSquaredArray}
 */
export const sortedSquaredArray_1 =  (function (array) {
    return array
        .reduce((prev, curr) => {
            prev.push(curr * curr);

            return prev;
        }, [])
        .sort((a, b) => a - b)
});

/**
 * One backward loop which takes two numbers from opposite sides, compares absolute values
 *      and moves pointers accordingly.
 *
 * 0(n) time | O(n) space.
 *
 * @type {sortedSquaredArray}
 */
export const sortedSquaredArray_2 = (function (array) {
    const result = new Array(array.length).fill(0);

    let { length: index } = array;
    let minIndex = 0;
    let maxIndex = array.length - 1;

    while (index--) {
        let minValue = array[minIndex];
        let maxValue = array[maxIndex];

        if (Math.abs(minValue) > Math.abs(maxValue)) {
            result[index] = minValue * minValue;
            minIndex++;
        }
        else {
            result[index] = maxValue * maxValue;
            maxIndex--;
        }
    }

    return result;
});
