/**
 * Problem: Try to travel in a 2D grid
 *          You start in the top-left corner
 *          Want to reach bottom-right corner
 * Movement: onyl 'down' or 'right'
 * 
 * Requirment: Number of ways you can reach the Goal
 * Grid dimensions: m x n, m - lines | n - columns
 */

// Time Complexity: O(2 ^ (m+n)) 
// Space Complexity: O(m + n)
function gridTraveler(m: number, n: number): number{
    // find a base case possible for the recursion
    if(m == 0 || n == 0)
        return 0;
    if(m == 1 && n == 1){
        return 1;
    }
    //move to the right
    // let move_right = gridTraveler(m , n-1)
    // // move down
    // let move_down = gridTraveler(m-1, n)
    // return move_right + move_down;
    return gridTraveler(m, n-1) + gridTraveler(m-1, n);
}

// Using the memoization to speed up the algorithm
// the key will be the string: "m n"
// create helper function to create the key
const genkey = (m: number, n: number):  string =>{
    return `${m},${n}`;
} 



/**
 * In the end we have m*n possible values in the tree 
 * Time Complexity: O(m*n) 
 * Space Complexity: O(m+n)
 */
type GridMemo = {[key: string]: number}
function gridTravelerMemo(m: number, n: number, memo: GridMemo = {}): number{
    let key = genkey(m, n)
    let rev_key = genkey(n, m)
    if( key in memo)
        return memo[key];
    if( rev_key in memo)
        return memo[rev_key]

    if (m == 0 || n == 0)
        return 0;
    if (m == 1 && n == 1)
        return 1;

    memo[key] = gridTravelerMemo(m-1, n, memo) + gridTravelerMemo(m, n-1, memo);
    return memo[key];
}

export {gridTraveler, gridTravelerMemo}

/**
 * How to approach the problem is given all the movements we can do 
 * how is our grid change ex:
 * if(move right) I shrink the problem to a problem of a grid of (m, n-1)
 * 
 */