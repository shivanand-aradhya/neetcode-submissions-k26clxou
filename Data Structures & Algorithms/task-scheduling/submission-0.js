class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let maps = new Map();
        for(let i=0; i<tasks.length; i++){
            maps.set(tasks[i], maps.get(tasks[i]) ? maps.get(tasks[i])+1: 1);
        }
        let heap = new PriorityQueue((a, b) => b-a);
        for(let [key, value] of maps) {
            heap.enqueue(value);
        }
        let time = 0;
        let q = new Queue();

        while(heap.size() > 0 || q.size() > 0){
          time++;
          if(heap.size() > 0){
            let cnt = heap.dequeue() - 1;
            if(cnt > 0) {
                q.push([cnt, time+n]);
            }
          }
          if(q.size() > 0 && q.front()[1] === time) {
            heap.enqueue(q.pop()[0]);
          }  
        }
        return time;
    }
}
