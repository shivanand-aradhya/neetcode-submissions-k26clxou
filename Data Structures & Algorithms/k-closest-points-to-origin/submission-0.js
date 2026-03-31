class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        
        const heap = new PriorityQueue((a, b) => a[0] - b[0]);
        for(let i=0; i<points.length; i++){
            const ans = Math.sqrt((points[i][0]) ** 2 + (points[i][1]) ** 2);
            heap.enqueue([ans, i]);
        }
        console.log(heap);
        const ans = [];

        for(let i=1; i<=k; i++) {
            let temp = points[heap.dequeue()[1]];
            ans.push(temp);
        }
        return ans;
    }
}
