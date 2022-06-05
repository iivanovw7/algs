/**
 * Calculates sums of every branch in binary tree.
 *
 * @function
 * @callback branchSums
 *
 * @param {Object} tree - represents binary tree.
 *
 * @return {Array.<number>} list of every branch sums.
 */

/**
 * Uses recursive check of every node until it reaches a leaf node.
 *
 * 0(n) time | O(n) space.
 *  Traverses through all the nodes with constant tim operations.
 *  Space in affected with a recursive nature of solution and depends on how well the tree is balanced.
 *
 * @type {branchSums}
 */
export const branchSums_1 = (function(tree) {
    const sums = [];

    calculateSums(tree, 0, sums);

    return sums;
});

/**
 * Recursive calculation helper.
 *
 * @param {Object} node - binary tree.
 * @param {number} runningSums - current sum of nodes.
 * @param {Array.<number>} sums - contains a reverence to a list of results.
 */
function calculateSums(node, runningSums, sums) {
    if (node) {
        const { value, left, right } = node;
        const newRunningSum = runningSums + value;

        if (!left && !right) {
            sums.push(newRunningSum);
        } else {
            calculateSums(left, newRunningSum, sums);
            calculateSums(right, newRunningSum, sums);
        }
    }
}
