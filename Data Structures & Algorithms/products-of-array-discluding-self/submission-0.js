class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        for(const num in nums) {
            let product = 1;
            for(const n in nums) {
                if(n !== num) {
                    product = product * nums[n];
                }
            }
            arr.push(product);
        }
        return arr;
    }
}
