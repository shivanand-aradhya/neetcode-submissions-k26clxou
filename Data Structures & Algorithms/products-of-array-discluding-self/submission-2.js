class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let final = [];
        let product = 1;
        for(let i = 0; i < nums.length; i++) {
            final.push(product);
            product *= nums[i];
        }
        console.log(final);

        product = 1;
        for(let i=nums.length - 1; i>=0; i--) {
            final[i] *= product;
            product *= nums[i];
        }
        console.log(final);

        return final;
    }
}
