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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head1 = list1;
        let head2 = list2;
        let head3 = new ListNode();
        let ans = head3;
        while(head1 && head2) {
            if(head1.val >= head2.val) {
                head3.next = head2;
                head2 = head2.next;
            } else {
                head3.next = head1;
                head1 = head1.next;
            }
            head3 = head3.next;
        }
        if(head1) {
            head3.next = head1;
        }
        if(head2) {
            head3.next = head2;
        }
        return ans.next;
    }
}
