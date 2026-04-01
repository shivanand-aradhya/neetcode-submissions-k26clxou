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
     * @return {number}
     */
    goodNodes(root) {
        let counter = 0;
        function dfs(node, maxVal) {
            if(!node) return 0;
            if(node.val >= maxVal) {
                counter++;
            }
            dfs(node.left, Math.max(maxVal, node.val));
            dfs(node.right, Math.max(maxVal, node.val));
        }

        dfs(root, root.val);
        return counter;
    }
}
