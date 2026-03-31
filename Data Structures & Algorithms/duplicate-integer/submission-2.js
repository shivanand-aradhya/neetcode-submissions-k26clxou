class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        // for(let i =0; i<nums.length; i++) {
        //     for(let j=i+1; j< nums.length; j++) {
        //         if (nums[i] === nums[j]) {
        //             return true;
        //         }
        //     }
        // }
        // return false;
        for(let i=0; i< nums.length; i++) {
            if(set.has(nums[i])) {
                return true;
            } 
            set.add(nums[i]);
        }
        return false;
    }
}
