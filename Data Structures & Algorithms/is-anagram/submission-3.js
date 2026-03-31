class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length ){
            return false;
        }
        const smap = new Map();
        const tmap = new Map();
        for(let n of s){
            if (!smap.has(n)){
                smap.set(n, 1);
            } else {
                smap.set(n, smap.get(n)+1);
            }
        }
        for(let n of t){
            if (!tmap.has(n)){
                tmap.set(n, 1);
            } else {
                tmap.set(n, tmap.get(n)+1);
            }
        }
        for (let [key, value] of smap) {
            if(tmap.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}
