class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max= 0;
        let set = new Set(nums);
        for(let n of set){
            if(!set.has(n-1)){
                let count = 1;
                while(set.has(n+1)) {
                    count++;
                    n++;
                }
                max = Math.max(max, count);
            }
        }
        return max;
    }
}
