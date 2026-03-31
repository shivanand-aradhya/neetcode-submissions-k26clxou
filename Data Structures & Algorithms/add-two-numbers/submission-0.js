/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let l3 = new ListNode();
        let ans = l3;
        while(l1 || l2 || carry) {
            let l1V = l1 ? l1.val : 0;
            let l2V = l2 ? l2.val : 0;
            let sum = l1V + l2V + carry;
            // if sum > 9, get last digit, make carry true
            carry = 0;
            if(sum > 9) {
                carry = 1;
                sum = sum % 10;
            } 
            l3.next = new ListNode(sum, null);
            l1 = l1.next ? l1.next: false;
            l2 = l2.next ? l2.next: false;
            l3 = l3.next;
        }
        return ans.next;
    }
}