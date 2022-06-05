/**
 * Finds the closet value to a target inside a BST (binary search tree).
 *
 * @param {Object} tree - BST.
 * @param {number} target - search term.
 *
 * @return {number} closes value or the target value.
 *
 * O(Log(n)) time | O(nLog(n)) space.
 *  can bde O(n) in case of only one branch.
 */
export function findClosestInBST(tree, target) {
    return findClosesValueInBST(tree, target, Number.POSITIVE_INFINITY)
}

/**
 * Recursive search helper.
 *
 * @param {Object} node - BST.
 * @param {number} target - search term.
 * @param {number} closest - last known closes value.
 *
 * @return {number} closes value or the target value.
 */
function findClosesValueInBST(node, target, closest) {
    if (node) {
        const { value, left, right } = node;

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
