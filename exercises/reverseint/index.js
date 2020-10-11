// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // first attempt (cleaned up)
    const numberReverse = n.toString().split('').reverse().join('');
    return parseInt(numberReverse) * Math.sign(n); 
};

console.log(reverseInt(-90));

module.exports = reverseInt;
