/**
 * Verifies if array of numbers is a valid `subsequence` of array given.
 *
 * Subsequence stands for sequence produced out of another sequence by removing certain elements.
 *  [1, 54, -1, 44, 5, 9, 0]
 *  [1, -1, 0]
 *
 * @function
 * @callback validateSubsequence
 *
 * @param {Array.<number>} sequence - represents initial base sequence given.
 * @param {Array.<number>} subsequence - represents subsequence to be verified.
 *
 * @returns {boolean} whether or not given `subsequence` is valid.
 */

/**
 * 0(n) time | O(1) space.
 * n - size of `sequence` array.
 *
 * @type {validateSubsequence}
 */
export const validateSubsequence_1 = (function (sequence, subsequence) {
    let sequenceIndex = 0;
    let subsequenceIndex = 0;

    while (sequenceIndex < sequence.length && subsequenceIndex < subsequence.length) {
        if (sequence[sequenceIndex] === subsequence[subsequenceIndex]) {
            // if there is a match - moves to the next subsequence element.
            subsequenceIndex++;
        }

        // increments in any case, doesn`t have to start over again.
        sequenceIndex++;
    }

    return subsequenceIndex === subsequence.length;
});

/**
 * 0(n) time | O(1) space.
 * n - size of `sequence` array.
 *
 * @type {validateSubsequence}
 */
export const validateSubsequence_2 = (function (sequence, subsequence) {
    let subsequenceIndex = 0;

    for (const value of sequence) {
        // Passed through all subsequence.
        if (subsequenceIndex === subsequence.length) {
            break;
        }
        // Requirement met.
        if (value === subsequence[subsequenceIndex]) {
            subsequenceIndex++;
        }
    }

    return subsequenceIndex === subsequence.length;
});

