class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let ss = s.split('').sort().join('');
        let ts = t.split('').sort().join('');
        return ss == ts;
    }
}
