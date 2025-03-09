import { fib, fib_memo } from "./algorithms/memoization/Fibo.js"
import { gridTraveler, gridTravelerMemo } from "./algorithms/memoization/GridTraveler.js"
import { canSum, canSumMemo } from "./algorithms/memoization/CanSum.js"
import { howSum, howSumMemo } from "./algorithms/memoization/HowSum.js"

/**
 * 
 * The for-in loop iterates over the indeces of an array 
 * To iterate over the values of an rest param use for-of
 */
function log(...args: any[]): void{
    if(args.length != 0){  
        args.forEach((arg) => console.log(`\x1b[33m${arg}`))
    }
    
}

function memoAlgo(): void{
    // it blocks to much the 
    // FIBO problem
    const f = () => Promise.resolve(fib(6))
    f().then((result) => console.log(`Result from the simple fib ${result}`));
    
    const fm = () => Promise.resolve(fib_memo(50))
    fm().then((result) => console.log(`Result from the memoized function ${result}`));

    // Grid traveler
    const g = () => Promise.resolve(gridTraveler(3, 3))
    g().then((result) => console.log(result))
    // memo solution
    const g2 = () => Promise.resolve(gridTravelerMemo(18, 18))
    g2().then(result => log(result))


    //CanSum Algo 
    let c = () => Promise.resolve(canSum(7, [2, 3, 5]))
    c().then(res => log(res))
    c = () => Promise.resolve(canSum(7, [2, 4]))
    c().then(res => log(res))

    c = () => Promise.resolve(canSumMemo(300, [7, 14]))
    // c().then(res => log(res))

    // howSum Algo
    let h = () => Promise.resolve(howSum(7, [2, 3, 5]))
    h().then(res => log(res));
    h = () => Promise.resolve(howSumMemo(300, [7, 14, 50]))
    h().then(res => log(res));
}

function main(args?: string[]): void{
    console.log("\x1b[32mStarting...\x1b[0m")
    memoAlgo()
    
}

main()