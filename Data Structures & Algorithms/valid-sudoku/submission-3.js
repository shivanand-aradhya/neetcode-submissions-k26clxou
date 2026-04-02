class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let sett = new Set();
        
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                if(board[i][j] !== '.'){
                    let num = board[i][j];
                    let rowKey = `r${i},${num}`;
                    let colKey = `c${num},${j}`;
                    let boxKey =  `${Math.floor(i / 3)},${Math.floor(j / 3)},${num}`;
                    if(sett.has(rowKey) || sett.has(colKey) || sett.has(boxKey)) {
                        return false;
                    }
                    sett.add(rowKey);
                    sett.add(colKey);
                    sett.add(boxKey);
                }
                
            }
        }
        return true;
    }
}
