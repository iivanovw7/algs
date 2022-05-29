/**
 * Finds less amount of change (number) that cannot be created with coins provided in array.
 *  Receives array of positive, non-zero, non-unique integers.
 *  Each number represents coin and its value.
 *
 * @function
 *
 * @param {Array.<number>} array - Represents a list of coins in possession.
 *
 * @returns {number}
 *      Number that represents minimal amount of change that cannon be created with possessed coins.
 *      Coins are non-reusable.
 *
 * @example
 *      [7] //=> 1
 *      [1,2,5] // => 4
 *      [5,7,1,1,2,3,22] // => 20
 *
 * Loops from 0 through sorted array and keeps track of the highest possible change,
 *  if current change + 1 is less than next coin - all change options are possible.
 *
 * 0(nLog(n)) time | O(n) space.
 *  sorting + one iteration
 */
export const nonConstructibleChange =  (function (coins) {
    const sortedCoins = coins.sort((a, b) => a - b);

    let changeCreated = 0;

    for (const coin of sortedCoins) {
        if (coin > changeCreated + 1) {
            return changeCreated + 1;
        }

        changeCreated += coin;
    }

    return changeCreated + 1;
});

