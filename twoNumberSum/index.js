/**
 * Finds whether there is a pair of numbers in array that sums up to target number.
 * @function
 * @callback twoNumberSum
 *
 * @param {Array.<number>} numbers - represents list of numbers, no value is repeated.
 * @param {number} targetSum - represents a target sum of any pair from `numbers`.
 *
 * @returns {Array.<number>} two numbers tha sum up to `sum` target.
 */

/**
 * Uses nested `for` loops.
 * 0(n*n) time | O(1) space.
 *
 * @type {twoNumberSum}
 */
export const twoNumberSum_1 = (function(numbers, targetSum) {
    for (let i = 0; i < numbers.length; i++) {
        const fistNum = numbers[i]

        for (let j = i +1; j < numbers.length; j++) {
            const secondNum = numbers[j];

            if (fistNum + secondNum === targetSum) {
                return [fistNum, numbers[j]];
            }
        }
    }

    return [];
});

/**
 * Uses `hash` table loop.
 * 0(n) time | O(n) space.
 *
 * @type {twoNumberSum}
 */
export const twoNumberSum_2 = (function(numbers, targetSum) {
    const hash = {};

    for (const number of numbers) {
        const subResult = targetSum - number;

        if (subResult in hash) {
            /*
                Finding subtraction result in `hash` means that
                    `y = targetSum - number` is solved, because one of 2 values has already been found.
             */
            return [subResult, number];
        }

        hash[number] = true; // Adds number to hash table.
    }

    return [];
});

/**
 * Uses single loop against sorted array.
 * 0(nLog(n)) time | O(1) space.
 *
 * @type {twoNumberSum}
 */
export const twoNumberSum_3 = (function(numbers, targetSum) {
    const sorted = numbers.sort((a, b) => a - b); // should be quick sort

    let leftPointer = 0;
    let rightPointer = sorted.length - 1;
    let currentSum = 0;

    while (leftPointer < rightPointer) {
        currentSum = sorted[leftPointer] + sorted[rightPointer];

        if (currentSum === targetSum) {
            return [sorted[leftPointer], sorted[rightPointer]];
        }
        else if (currentSum < targetSum) {
            leftPointer += 1; // moves pointer towards to target value (right)
        }
        else if (currentSum > targetSum) {
            rightPointer -= 1; // moves pointer towards to target value (left)
        }
    }

    return [];
});
