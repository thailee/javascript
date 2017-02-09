// number
console.log(2.998e8); // → 2.998 × 10^8
console.log(typeof 0/0); // → NaN
console.log(Infinity);
console.log(-Infinity);

// Strings
console.log("This is the first line\nAnd this is the second");
console.log("\tThis is a tab character");
console.log("A newline character is written like \"\\n\".");
console.log("con" + "cat" + "e" + "nate"); // → concatenate

//Unary operator
console.log(typeof 2.2); // → number
console.log(typeof "thai"); // → string

//Boolean
console.log("Abs" < "Zoro");// → true
console.log(3 < 2);// → false
console.log("Itchy" != "Scratchy"); //or >=, <= // → true
console.log(NaN == NaN);// → false

//Undefined values
console.log(typeof null);
console.log(typeof undefined);

//Automatic type conversion
console.log(8 * null); // → 0
console.log("5" - 1); // → 4
console.log("5" + 1); // → 51
console.log("five" * 2); // → NaN
console.log(false == 0); // → true
console.log(2 === 2); // → true
console.log("2" === 2); // → false