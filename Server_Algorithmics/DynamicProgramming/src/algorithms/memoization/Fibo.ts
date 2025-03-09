/**
 * 
 * Complexity O(2^n) time complexity
 * O(n) space complexity because at any given time the stack uses just the depth of the tree_call structure
 * the basic function from which we will build faster algorithm
 */
const fib = (n: number): number => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2)
}

/**
 * Memoiation technique used to save the already computed data 
 * becuase the stack uses just n calls until one base value 
 * we can store the values so that repeated sub tree structure are not traversed any more 
 * but their value fast accessed in a Fast_Access_Data_Structure
 * WE WILL USE JS OBJECT: KEY = ARG, VAL= RETURN VALUE
 */
 /**
  * the Time Complexity: O(n)
  */
type fin_obj = {[key: number]: number}
const fib_memo = (n: number, memo: fin_obj = {}): number => {
    // check for existance
    if( n in memo)return memo[n];
    if ( n <= 2 )return 1
    // store what is not a base case; store sub-tree structure of the problem
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-1, memo) 
    return memo[n];
}

export {fib, fib_memo};