// * `regularPrint(content)` &ndash; accepts a string `content` and prints it to the console

function regularPrint(content) {
  console.log(content);
}

// * `loudPrint(content)` &ndash; accepts a string `content` and prints an upcased version of it surrounded by stars (e.g. `***THIS VIDEO SUCKS***`)
function loudPrint(content) {
  var msg = '**' + content.toUpperCase + '**';
  console.log(msg);
}

// * `omissionCensor(content, badWords)` &ndash; accepts a string `content` and an array of strings `badWords`, and returns a version of `content` with all instances of the strings in `badWords` removed
function omissionCensor(content, badWords) {

}


// * `substitutionCensor(content, badWords)` &ndash; accepts a string `content` and an array of strings `badWords`, and returns a version of `content` with all instances of the strings in `badWords` replaced with a random element from an array of "substitute" strings (internally defined in the function)

// * `publishComment(comment, badWords, censorFunction, printFunction)` &ndash; accepts a string `comment`, an array of strings `badWords`, a function to censor the comment `censorFunction`, and a function to print the comment `printFunction`

// **Note:** Don't worry about handling punctuation gracefully. For now, just use simple strings with no punctuation.

// Once you write these functions, call `publishComment` with a string of your choosing 4 times, once with each combination of `censorFunction` and `printFunction`. For example:

// ```js
// publishComment("what the hell is going on", ["damn", "hell"], omissionCensor, loudPrint);
// ```

// Once you are done with all of the above, design and implement another censor function and another print function. They can operate however you like (go nuts!). Demonstrate the use of these new functions by calling `publishComment` with them.
// console.log('It works!');
