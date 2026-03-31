class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new PriorityQueue((a, b) => b - a);
        for(let i=0; i<nums.length; i++) {
            heap.enqueue(nums[i]);
        }
        let a = 1;
        while(a < k) {
            heap.dequeue();
            a++;
        }
        return heap.front();
    }
}
