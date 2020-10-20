// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, tier = "") {
    // recursive solution
    if (row === n) { // base case
        return; 
    }
    if (tier.length === (2 * n - 1)) { // general case #1
        console.log(tier);
        return pyramid(n, row + 1);
    }
    
    const midIndex = Math.floor((2 * n - 1) / 2);
    let modTier; 

    if (midIndex - row <= tier.length && midIndex + row >= tier.length) { // general case #2
        modTier = "#";
    }
    else {
        modTier = " ";
    }
    pyramid(n, row, tier + modTier);

    // first attempt (nested loops)
    // const midIndex = Math.floor((2 * n - 1) / 2);

    // for (let i = 0; i < n; i++) {
    //     let tier = "";

    //     for (let j = 0; j < (2 * n - 1); j++) {
    //         if (midIndex - i <= j && midIndex + i >= j) {
    //             tier += "#";
    //         }
    //         else {
    //             tier += " ";
    //         }
    //     }
    //     console.log(tier);
    // }   
}

module.exports = pyramid;
