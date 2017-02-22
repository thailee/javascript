/**
 * Created by thaidl on 20-02-2017.
 */

//Creating a regular expression
var re1 = new RegExp("abc");
var re2 = /abc/;

//question marks and plus signs
var eighteenPlus = /eighteen\+/;
var question = /question\?/;

//Testing for matches
console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false

//Matching a set of characters
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

//Special character
/*
\d	    Any digit character
\w	    An alphanumeric character (“word character”)
\s	    Any whitespace character (space, tab, newline, and similar)
\D	    A character that is not a digit
\W	    A nonalphanumeric character
\S	    A nonwhitespace character
.	    Any character except for newline

*/

//date time

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));


//Repeating parts of a pattern
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));


//pattern “optional”
var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));


//date time:  single- and double-digit days, months, and hours
var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));

//Grouping subexpressions
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));

//Matches and groups
var match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

console.log("one two 100".match(/\d+/));

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));


console.log(new Date());
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
//timestap
console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000));

//Get day, get hour...

function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[2]) - 1,
                  Number(match[1]));
}
console.log(findDate("30-1-2003"));



//Word and string boundaries
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));

//Choice patterns
var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));

//The mechanics of matching
var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));

//The replace method
console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

console.log("thai, le\nVu, Anh\nLe , Khanh".replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));

//
var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));

//
var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

//Greed
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10;// ten!"));
console.log(stripComments("1 /* a */+/* b */ 1"));

//
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));

//Dynamically creating RegExp objects
var name = "harry";
var text = "Harry is a suspicious character.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
//
var name = "dea+hl[]rd";
var text = "This dea+hl[]rd guy is super annoying.";
var escaped = name.replace(/[^\w\s]/g, "\\$&");
var regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

//The search method
console.log("  word".search(/\S/));
console.log("    ".search(/\S/));

//The lastIndex property
var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec("xyzzy");
console.log(match.index);
console.log(pattern.lastIndex);

//
var digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1"));

//
console.log("Banana".match(/an/g));


//Looping over matches
var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);

//Parsing an INI file
function parseINI(string) {
  // Start with an object to hold the top-level fields
  var currentSection = {name: null, fields: []};
  var categories = [currentSection];

  string.split(/\r?\n/).forEach(function(line) {
    var match;
    if (/^\s*(;.*)?$/.test(line)) {
      return;
    } else if (match = line.match(/^\[(.*)\]$/)) {
      currentSection = {name: match[1], fields: []};
      categories.push(currentSection);
    } else if (match = line.match(/^(\w+)=(.*)$/)) {
      currentSection.fields.push({name: match[1],
                                  value: match[2]});
    } else {
      throw new Error("Line '" + line + "' is invalid.");
    }
  });

  return categories;
}