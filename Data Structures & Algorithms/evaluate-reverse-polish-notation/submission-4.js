class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr = [];
        for(let i=0; i< tokens.length; i++) {
            
            if(tokens[i] === "*" || tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "/") {
                console.log(arr);
                let number2 = parseInt(arr.pop());
                let number1 = parseInt(arr.pop());
                if(tokens[i] === "+") {
                    arr.push(number1 + number2);
                } if(tokens[i] === "-") {
                    arr.push(number1 - number2);
                }if(tokens[i] === "*") {
                    arr.push(number1 * number2);
                }if(tokens[i] === "/") {
                    arr.push(parseInt(number1 / number2));
                }
            } else {
                arr.push(tokens[i]);
            }
            
        }
        return arr[arr.length-1];
    }
}
