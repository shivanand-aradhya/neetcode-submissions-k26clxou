class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r= heights.length-1;
        let max= -1;
        while(l<r){
            let area = Math.min(heights[r], heights[l]) * (r-l);
            max = Math.max(max, area);
            if(heights[r] >= heights[l]) {
                l++;
            } else {
                r--;
            }
        }
        return max;

    }
}
