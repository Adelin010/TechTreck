/**
 * howSum(target, numbers): solution[] 
 * returns any single one solution for the target sum given the numbers
 */


/**
 * 
 * Because we need to return only one valid combination 
 * we can return an empty list when the target === 0 is hit
 * then in the return from recursion we populate the array response
 */

/*
    Time Complexity: O(n^m * m) -> extra *m because we create the array each time when returning a valid sequence
    Space Complexity: O(m)
*/
function howSum(target: number, numbers: number[]): number[] | null{
    if(target == 0) return [];
    if(target < 0) return null;

    for( let num of numbers){
        if(num <= target){
            let arr = howSum(target-num, numbers);
            if(arr !== null){
                return [...arr, num];
            }
        }
    }

    return null;
}

/*
    Time Complexity: O(n*(m^2))
    Space Complexity: O(m*n); where n is the length of the values in the memo
*/
type HowSumMemo = {[key: number]: number[] | null}
function howSumMemo(target: number, numbers: number[], memo: HowSumMemo = {}): number[] | null{
    if ( target in memo) return memo[target];
    if (target === 0)return [];
    if(target < 0) return null;

    for( let num of numbers ){
        if(num <= target){
            const result = howSumMemo(target-num , numbers, memo);
            if(result !== null ){
                memo[target] = [...result, num]
                return memo[target];
            }

        }
    }
    return null;
}

export {howSum, howSumMemo}