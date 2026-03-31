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
    isBalanced(root) {
        
        function dfs(root){
            if(!root) return [1, 0];
            let left = dfs(root.left);
            let right = dfs(root.right);
            let balanced = left[0] === 1 && right[0] === 1 && Math.abs(dfs(root.left)[1] - dfs(root.right)[1]) <= 1
            let height = 1 + Math.max(left[1], right[1]);
            return [balanced ? 1 : 0, height]
        }

        return dfs(root)[0] === 1;
    }
}
