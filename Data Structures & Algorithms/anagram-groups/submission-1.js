class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let i=0; i< strs.length; i++) {
            const str = strs[i];
            const asciiArr = new Array(26).fill(0);
            for (let char of str) {
                asciiArr[char.charCodeAt(0) - 97]++;
            }
            
            let key = asciiArr.join('#');

            if (!map.has(key)) {
                map.set(key, [])
            }

            map.get(key).push(str);
        }
        return Array.from(map.values());
    }
}
