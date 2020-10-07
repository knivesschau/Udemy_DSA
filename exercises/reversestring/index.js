// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // built-in JS solution
    // return str.split("").reverse().join("");

    // loop solution
    // let reversal = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversal += str[i];
    // }

    // for (let character of str) { 
    //     reversal = character + reversal; 
    // }
    
    // return reversal;

    // reduce solution
    // return str.split("").reduce((reversed, i) => i + reversed, "");

    // recursion solution
    if (str === "") {
        return "";
    }

    else {
        return reverse(str.substring(1)) + str.charAt(0);
    }
}

module.exports = reverse;
