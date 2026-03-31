class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0;
        let r=0;
        let maxLen = 0;
        let set = new Set();
        while(r<s.length) {
            if(!set.has(s[r])) {
                set.add(s[r]);
                r++;
                
            } else {
                while(set.has(s[r])){
                    set.delete(s[l]);
                    l++;
                }
            }
            maxLen = Math.max(maxLen, r-l);
        }
        return maxLen;
    }
}