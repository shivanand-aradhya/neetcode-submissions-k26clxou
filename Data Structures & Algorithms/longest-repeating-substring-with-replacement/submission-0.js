class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //keep a var to compare the number of replacements with k
        //increment the window size till the var reaches k
        //if it reaches k, decrement the window size
        //
        //
        let map = new Map();
        let l=0;
        let r=0;
        let maxLen=0;
        while(r<s.length){
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            while((r-l+1) - Math.max(...map.values()) > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
            maxLen = Math.max(maxLen, r-l+1);
            r++;
        }
        return maxLen;
    }
}
