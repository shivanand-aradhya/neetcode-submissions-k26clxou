class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let sum=0;
        for(let i=0; i<nums.length; i++) {
            let num = nums[i];
            if(map.has(target - num)) {
                return [map.get(target - num), i];
            } else {
                map.set(num, i);
            }
        }
    }
}
