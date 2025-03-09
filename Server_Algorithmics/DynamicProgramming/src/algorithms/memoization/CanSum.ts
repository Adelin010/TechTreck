/**
 *  canSum(target, numbers) -> bool 
 *  The function returns wether or not is possible to generate the target sum given the numbers
 *  1!!: We may use an element as many times as needed
 *  2!!: all numbers are nonnegative 
 */

/**
 * Solution: create a Tree like structure that starts with the root on the target 
 *           and for all value in the array that can be subtract from the current node 
 *           subtract the value and the result becomes the child node of the current node
 *           for each child repeat the process until either the leaf == 0 or there are not values that can be subtraced
 */

/**
 * Time Complexity: O(n ^ m)
 * Space Complexity: O(m)
 */
const canSum = (targetSum: number, numbers: number[]): boolean => {
    if (targetSum === 0) return true;

    for( let num of numbers){
        if(num <= targetSum)
            if(canSum(targetSum - num, numbers))return true;
    }
    return false;
}

/**
 * Memoized variante where in the Map the key is the targetSum
 * and the value if either True or False
 * Time Complexity: O(m*n)
 * Space Complexity: O(m)
 */
type CanSumMemo = {[key: number]: boolean};
const canSumMemo = (target: number, arr: number[], memo: CanSumMemo= {}): boolean => {
    if( target in memo)return memo[target];
    if( target == 0)return true;

    for (let elem of arr){
        if(elem <= target){
            if(canSumMemo(target-elem, arr, memo)){
                memo[target] = true;
                return true;
            }
        }
    }
    return false;
}

<<<<<<< HEAD
export {canSum, canSumMemo};
=======
export {canSum, canSumMemo};
>>>>>>> origin/main
