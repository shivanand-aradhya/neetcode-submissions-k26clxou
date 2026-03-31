class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleets = [];
        let arr= [];
        for(let i=0; i<position.length;i++) {
            arr.push([position[i], speed[i]]);
        }
        arr.sort((a, b) => b[0] - a[0]);
        for(let i=0; i<arr.length; i++) {
            let calc = (target - arr[i][0]) / arr[i][1];
            if(fleets.length === 0 || fleets[fleets.length-1] < calc) {
                fleets.push(calc);
            }
        }

        return fleets.length;
    }
}
