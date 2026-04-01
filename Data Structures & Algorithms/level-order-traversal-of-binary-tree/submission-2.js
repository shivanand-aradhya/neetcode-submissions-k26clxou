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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let top = [root];
        let ans = [];
        while(top.length > 0) {
            let size = top.length;
            let level = [];
            for(let i=0; i< size; i++) {
                let curr = top.shift();
                if(curr.left) top.push(curr.left);
                if(curr.right) top.push(curr.right);
                level.push(curr.val);
            }
            
            ans.push(level);
        }
        return ans;
    }
}
