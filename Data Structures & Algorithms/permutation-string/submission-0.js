class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let arr = Array(26).fill(0);
        let arr1 = Array(26).fill(0);
        for(let i in s1) {
            arr[s1.charCodeAt(i) - 97]++;
        }
        let l=0;
        let r=s1.length-1;
        while(r<s2.length) {
            for(let i=l; i<=r; i++) {
                arr1[s2.charCodeAt(i) - 97]++;
            }
            console.log(arr1);
            if(arr.every((val, idx) => val == arr1[idx])) {
                return true;
            }
            arr1 = Array(26).fill(0);
            l++;
            r++;
        }
        return false;
    }
}