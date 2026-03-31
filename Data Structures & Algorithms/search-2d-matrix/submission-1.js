class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l=0;
        let r= matrix.length - 1;
        let store = 0;
        if(matrix.length > 1) {
            while(l<=r) {
                let mid = Math.floor((l+r)/2);
                if(matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]){
                    store = mid;
                    break;
                } else if(matrix[mid][0] > target) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        
        let left = 0;
        let right = matrix[store].length - 1;
        console.log('hello');
        while(left <= right) {
            let midd = Math.floor((left + right)/2);
            if(target > matrix[store][midd]) {
                left = midd + 1;
            } else if (target < matrix[store][midd]) {
                right = midd - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
