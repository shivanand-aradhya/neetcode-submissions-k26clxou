class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxPQ  = new MaxPriorityQueue();

        for(let i=0; i<stones.length; i++){
            maxPQ.enqueue(stones[i]);
        }

        console.log(maxPQ.size());
        while(maxPQ.size() > 1) {
            const one = maxPQ.dequeue();
            const two = maxPQ.dequeue();

            if(one !== two) {
                maxPQ.enqueue(one - two);
            }
        }

        return maxPQ.size() === 1 ? maxPQ.dequeue(): 0; 
    }
}
