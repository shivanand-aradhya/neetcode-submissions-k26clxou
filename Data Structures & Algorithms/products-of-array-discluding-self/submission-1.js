class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let postfix = [];
        let final = [];
        let product = 1;
        for(let i = 0; i < nums.length; i++) {
            prefix.push(product);
            product *= nums[i];
        }
        console.log(prefix);
        product = 1;
        for(let i=nums.length - 1; i>=0; i--) {
            postfix.unshift(product);
            product *= nums[i];
        }
        console.log(postfix);

        for(let i = 0; i < nums.length; i++) {
            final[i] = prefix[i] * postfix[i];
        }
        return final;
    }
}
