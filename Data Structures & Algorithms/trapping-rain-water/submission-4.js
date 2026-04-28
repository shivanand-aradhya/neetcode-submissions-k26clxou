class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefix= [];
        let postfix= [];
        let max = -1;
        for(let i=0; i<height.length; i++) {
            max = Math.max(height[i], max);
            prefix.push(max);
        }
        console.log(prefix);
        max = -1;
        for(let i=height.length-1; i>=0; i--) {
            max = Math.max(height[i], max);
            postfix.unshift(max);
        }
        console.log(postfix);
        let vol =0;
        for(let i=0; i<height.length; i++) {
            vol += Math.max(0, (Math.min(prefix[i], postfix[i]) - height[i]));
        }
        return vol;
    }
}
