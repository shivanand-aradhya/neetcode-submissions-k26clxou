class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        for(let i=0; i< s.length; i++) {
            let opening;
            let closing;
            if(s[i] === "{" || s[i] === "(" || s[i] === "[") {
                arr.push(s[i]);
            } else {
                opening = arr.pop();
                closing = s[i];
                if(!(opening === "{" && closing === "}" || opening === "(" && closing === ")" || opening === "[" && closing === "]")) {
                    return false;
                }
            }
        }
        let ans = arr.length ? false :  true;
        console.log(arr.length);
        return ans;
    }
}
