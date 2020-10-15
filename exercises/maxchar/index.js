// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// first attempt 
function maxChar(str) {
     const letters = {};
     let counter = 0;
     let recurChara = '';

     for (let chara of str) { // for-of used to iterate over strings and arrays. 
         if (letters[chara]) {
             letters[chara]++;
         }
         else {
             letters[chara] = 1; 
         }
     }

     for (let chara in letters) { // for in used to iterate over objects.
         if (letters[chara] > counter) {
             counter = letters[chara];
             recurChara = chara; 
         }
     }

     return recurChara;
}

module.exports = maxChar;
