class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let i=0; i< strs.length; i++) {
            const asciiArr = new Array(26).fill(0);
            for (let chr of strs[i]) {
                asciiArr[chr.charCodeAt() - 97]++;
            }
            let key = asciiArr.join('@');
            if(!map.has(key)) {
                map.set(key, []);
            } 
            map.get(key).push(strs[i]);
        }
        return Array.from(map.values());
    }
}
