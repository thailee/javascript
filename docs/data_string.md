### [sprintf](https://github.com/alexei/sprintf.js)

In `index.html`

```html
<script src="cdnjs.cloudflare.com/ajax/libs/sprintf/1.0.3/sprintf.js"/>

```


In `script.js`

```
// arguments
sprintf("%1$s %2$s", "hello", "sprintf")
# hello sprintf

// object
var user = {
    name: "Dolly"
}
sprintf("Hello %(name)s", user)
# Hello Dolly

// array of object
var users = [
    {name: "Dolly"},
    {name: "Molly"}
]
sprintf("Hello %(users[0].name)s and %(users[1].name)s", {users: users})
# Hello Dolly and Molly
```

### Multiline String

```javascript
str = "\
line 1\
line 2\
line 3";
```

#Regular Expression in JavaScript
_This lab is based on Chapter9: EloquentJavaScript_
##Creating a regular expression
There are 2 ways:
```javascript
var re1 = new RegExp("abc");
var re2 = /abc/
```
there are some special characters such as question mark, or plus sign. If you want to use them, you have to use backslash. Like this:
```javascript
var eighteen = /eighteen\+/;
var question = /question\?/;
```
##Testing for match
*Regular Express has a number of method. Simplest is test*
```javascript
console.log(/abc/.test("abcd"));
console.log(/abc/.test("abxde"));
```

**Matching a set of character**
**[]**: Put a set of characters between 2 square bracket
```javascript
console.log(/[0123456789]/.test("1245"));
console.log(/[0-9]/.test("1");
console.log(/[0-9]/.test("acd");
console.log(/[0-9]/.test("aaascacas1"));
```
There are some special character: </br>
**\d**	Any digit character (Like [0-9]) </br>
```javascript
var datetime = /\d\d-\d\d-\d\d\d\d\s\d\d:\d\d/;
console.log(datetime.test("16-06-2016 14:09"));
console.log(dateTime.test("30-jan-2003 15:20"));
```
**\w**	An alphanumeric character (“word character”) </br>
```javascript
var word = /\w/;
console.log(word.test("@#@#"));
```
**\s**	Any whitespace character (space, tab, newline, and similar) </br>
```javascript
var space = /\d\.\s+abc/;
console.log(space.test("1. abd"));
console.log(space.test("1.     abd"));
console.log(space.test("1.abd"));
```
**\D**	A character that is not a digit </br>
```javascript
var notDigit = /\D/;
console.log(notDigit.test("ww"));
console.log(notDigit.test("1a"));
console.log(notDigit.test("1124"));
```
**\W**	A nonalphanumeric character </br>
```javascript
var nonAlphanumbericChar = /\W/;
console.log(nonAlphanumbericChar.test("abc12231"));
console.log(nonAlphanumbericChar.test("!@#%{}_"));
```
**\S**	A nonwhitespace character </br>
```javascript
var nonWhiteSpace = /\S/;
console.log(nonWhiteSpace.test("abc123"));
console.log(nonWhiteSpace.test("1.  abcd"));
console.log(nonWhiteSpace.test("  "));
```
**"."**	Any character except for newline </br>
```javascript
var anyThing = /...\./;
console.log(anyThing.test("abc."));
console.log(anyThing.test("acbacd."));
console.log(anyThing.test("acba"));
```
**"^"** Using caret character to match any except the ones
```javascript
var notBinary = /[^01]/;
console.log(notBinary.test("01101011100"));
console.log(notBinary.test("01021010010"));
```
##Repeating parts of Pattern
The square bracket [] above only match 1 digit. How can regex match more than 1 digit? </br>
**"+"** Match one or more </br>
**"*"** Match zero or more </br>
```javascript
console.log(/\d+/.test(1234));
console.log(/\d+/.test());

console.log(/\d*/.test(1234));
console.log(/\d*/.test())
```
**"?"** Question mark test a character exist or not is still oke
```javascript
var ball = /bal?l/;
console.log(ball.test("ball"));
console.log(ball.test("bal"));
```
**{a,b}** the character before exist from a to b times. Check datetime:
```javascript
var datetime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
console.log(datetime.test("20-12-2015 14:09"));
```
```javascript
var checkTimes = /waz{3,5}up/;
console.log(checkTimes.test("wazzzzzup"));
console.log(checkTimes.test("wazzzup"));
console.log(checkTimes.test("wazup"));
```
##Grouping Subexpressions
**()** using prentheses to make whole group like one character
```javascript
var cartoonCrying = /boo+(hoo+)+/i; //i to match all Captalize or normal text
console.log(cartoonCrying.test("Boohoooohoohooo"));
console.log(cartoonCrying.test("boohoooohooOOO"));
```
##Matches and group
Test is a simplest method, and it only return true or false. </br>
**exec** (execute) is anther method in regex. It returns null if no match, and object if match.
```javascript
var match  = /\d+/.exec("one two 100");
console.log(match);
console.log(match.input);
console.log(match.index);
```
if in the expression has a group subexpression, then it will return the text contain this subexpress, and the text match this subexpress:
```javascript
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
```
and if the subexpression appears one more times, then the result will be displayed the last match one.
```javascript
console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));
```
##The date type
create new Date(). return the current time
```javascript
var date =  new Date();
console.log(new Date(2009, 11, 9);
console.log(new Date(2009, 11, 9, 23, 59, 61));
<!--TimeStamp-->
console.log(new Date(2009, 11, 9, 23, 59, 61).getTime());
console.log(new Date(1260378001000));
<!--getFullYear, getMonth,...-->
var date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
```
##Word and string boundaries
```javascript
console.log(/cat/.test("concatenate"));
console.log(/cat/.test("con123cat-129e0enate"));
console.log(/\bcat\b/.test("concatenate"));
console.log(/\bcat\b/.test("con123cat-129e0enate"));
```
##Choice patterm
Only one in the list beween the **"|"** match
```javascript
var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));
```
##Replace
Replace will find the first match and replace.if we want to replace all matches, using **"g"** behind the expresssion
```javascript
console.log("papa".replace("p", "m"));
console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));
```
Replace can refer back to the matched, and using them
```javascript
console.log("Le, Khanh\nNguyen, Hung\nDuong, Bach".replace(/([\w]+), ([\w]+)/g, "$1 $2"));
```
##Greed
```javascript
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1  1
```

##Search method
Search method return the first index if the regular expression match. </br>
And return -1 if not found
```javascript
console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1
```
#The last index property
In the regular expression has a property is lastIndex. And when this Regex do some method, it will start from the lastIndex. And after doing something, the lastIndex will update to the behind the index of the match exec.
```javascript
var pattern = /y/g;
pattern.lastIndex = 3; //lastIndex update to 3
var match = pattern.exec("xyzzy"); //lastIndex update to 5
console.log(pattern.lastIndex);

match = pattern.exec("xyzzyxxx"); //Not match any "y" from index 5
console.log(match.index);
console.log(pattern.lastIndex);
```
##Looping Over the Line
Applying the hepoloris of lastIndex, we can using while to do something like this:
```javascript
var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
```


