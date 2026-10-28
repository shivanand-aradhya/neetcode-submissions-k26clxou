class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = Array(nums.length).fill(1);
        const suffix = Array(nums.length).fill(1);
        const result = Array(nums.length);

        for (let i=1; i<nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1]; 
        }

        console.log(prefix);

        for(let i=nums.length-2; i>=0; i--) {
            suffix[i] = suffix[i+1] * nums[i+1];
        }

         console.log(suffix);

        for (let i=0; i<nums.length; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}
