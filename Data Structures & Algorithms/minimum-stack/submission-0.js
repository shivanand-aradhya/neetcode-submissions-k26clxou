class MinStack {
    constructor() {
        this.arr = [];

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = Infinity;
        for(let i=0;i<this.arr.length;i++) {
            min = Math.min(min, this.arr[i]);
        }
        return min;
        // return Math.min(this.arr);
    }
}
