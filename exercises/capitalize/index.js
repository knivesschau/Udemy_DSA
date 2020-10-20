// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // first attempt 
    const newString = [];
    
    for (let word of str.split(" ")) {
        newString.push(word[0].toUpperCase() + word.slice(1));
    }
    return newString.join(' ');

    // alt solution
    // let newString = str[0].toUpperCase();

    // for (let i = 1; i < str.length; i++) {
    //     if (str[i - 1] === " ") {
    //         newString += str[i].toUpperCase();
    //     }
    //     else {
    //         newString += str[i];
    //     }
    // }
    // return newString;
}

module.exports = capitalize;
