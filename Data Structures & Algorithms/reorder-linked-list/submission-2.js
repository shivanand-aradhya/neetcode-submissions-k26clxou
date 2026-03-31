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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //slow pointer for reaching the midway, fast pointer to reach the end
        let slow = head;
        let fast = head.next;
        let reference = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //using the slow pointer, reverse the rest
        let prev = null;
        while(slow) {
            let next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }
        
        //combine
        let left = reference;
        let right = prev;
        while(left && right) {
            let tempLeft = left.next;
            let tempRight = right.next;
            left.next = right;
            right.next = tempLeft;
            left = tempLeft;
            right = tempRight;
        }
    }
}
