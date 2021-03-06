// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
// first attempt (solution #1)
   const mapA = makeMap(stringA);
   const mapB = makeMap(stringB);

   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
       return false; 
   }

   for (let char in mapA) {
       if (mapA[char] !== mapB[char]) {
           return false; 
       }
   }
   return true; 

// alternative (solution #2) 
//    return formatStr(stringA) === formatStr(stringB);
}

function formatStr(str) { // helper function for solution #2 
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function makeMap(str) { // helper function for solution #1 
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1; 
    }

    return charMap;
}

module.exports = anagrams;
