/**
 * Finds the closet value to a target inside a BST.
 *
 * @param {Object} tree - BST.
 * @param {number} target - search term.
 *
 * @return {number} closes value or the target value.
 *
 * O(Log(n)) time | O(n) space.
 *  can bde O(n) in case of only one branch.
 */
export function findClosestInBST(tree, target) {
    return findClosesValueInBST(tree, target, Number.POSITIVE_INFINITY)
}

/**
 * Recursive search helper.
 *
 * @param {Object} tree - BST.
 * @param {number} target - search term.
 * @param {number} closest - last known closes value.
 *
 * @return {number} closes value or the target value.
 */
function findClosesValueInBST(tree, target, closest) {
    if (tree) {
        const { value, left, right } = tree;

        if (Math.abs(target - closest) > Math.abs(target - value)) {
            closest = value;
        }

        if (target < value) {
            return findClosesValueInBST(left, target, closest);
        }

        if (target > value) {
            return findClosesValueInBST(right, target, closest);
        }
    }

    return closest;
}
