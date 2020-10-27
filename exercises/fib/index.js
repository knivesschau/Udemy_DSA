// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // first attempt with recursion, but exponential run time!! 
    if (n === 0) { // base case #1 
        return 0;
    }
    else if (n === 1) { // base case #2
        return 1;
    }
    else if (n === 2) { // base case #3 
        return 1;
    }
    return fib(n - 2) + fib(n - 1); 

    // iterative alternative, linear run time 
    // const fibSeq = [0, 1];
    
    // for (let i = 2; i <= n; i++) {
    //     const a = fibSeq[i - 1];
    //     const b = fibSeq[i - 2];
    //     fibSeq.push(a + b);
    // }

    // return fibSeq[n];
}

// memoize to improve run time
function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        const fibSequence = fn.apply(this, args);
        cache[args] = fibSequence;
        return fibSequence;
    }
}

fib = memoize(fib);

module.exports = fib;
