class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = -1;
        for(let i=0; i<piles.length; i++) {
            max = Math.max(max, piles[i]);
        }
        let k=1;
        let min = Infinity;
        while(k<=max) {
            let mid = Math.floor((k+max)/2);
            
            let total = 0;
            for(let i=0; i<piles.length; i++) {
                total += Math.ceil(piles[i]/mid);
            }
            if(total > h) {
                k = mid + 1;
            } else {
                min = Math.min(min, mid);
                max = mid - 1;
            }
        }
        return min;
    }
}
