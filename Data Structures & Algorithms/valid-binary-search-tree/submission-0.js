/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {

        function dfs(currentNode, leftBound, rightBound) {
            if(!currentNode) return true;
            if(currentNode.val <= leftBound || currentNode.val >= rightBound) {
                return false;
            }

            return dfs(currentNode.left, leftBound, currentNode.val) && dfs(currentNode.right, currentNode.val, rightBound);
        }

        return dfs(root, -1001, 1001);
    }
}
