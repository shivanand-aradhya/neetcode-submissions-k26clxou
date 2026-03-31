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
        while(k<=max) {
            let total = 0;
            for(let i=0; i<piles.length; i++) {
                total += Math.ceil(piles[i]/k);
            }
            if(total <= h) {
                return k;
            }
            k++;
        }
    }
}
