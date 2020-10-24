// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // first attempt 
    let counter = 0;
    let stringVowels = ["a", "e", "i", "o", "u"];

    for (let char of str.toLowerCase()) {
        if (stringVowels.includes(char)) {
            counter ++;
        }
    }
    return counter;

    // alternative solution (regex and ternary)
    // const matchingChar = str.match(/[aeiou]/gi);
    // return matchingChar ? matchingChar.length : 0;
}

module.exports = vowels;
