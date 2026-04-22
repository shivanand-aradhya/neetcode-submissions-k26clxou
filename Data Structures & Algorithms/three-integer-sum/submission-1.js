class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = [];
        nums.sort((a, b) => a-b);
        for(let i=0; i<nums.length; i++) {
            if(i>0 && nums[i] === nums[i-1]) {
                continue;
            }
            let l=i+1;
            let r=nums.length-1;
            while(l<r){
                if(nums[l] + nums[r] + nums[i] === 0) {
                    ans.push([nums[i], nums[l], nums[r]]);
                    l++;
                    while(l<r && nums[l] === nums[l-1]) {
                        l++;
                    }
                } else if(nums[l] + nums[r] + nums[i] < 0)  {
                    l++;
                    while(l<r && nums[l] === nums[l-1]) {
                        l++;
                    }
                } else {
                    r--;
                }
            } 
        }
        return ans;
    }
}
