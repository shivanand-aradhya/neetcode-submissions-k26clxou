class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let arr = Array(temperatures.length).fill(0);
        let st = [];
        for(let i=0; i< temperatures.length; i++){
            while(st.length !== 0 && temperatures[i] > temperatures[st[st.length-1]]) {
                let prev = st.pop();
                arr[prev] = i-prev;
            }
            st.push(i);
        }
        return arr;
    }
}
