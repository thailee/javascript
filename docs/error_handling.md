*In javascript bugs may be displayed is **NaN** or **underfined** and program still run but after that, the wrong value can cause some mistake when we use it
So, finding bugs and fix them is the quiet hard work in javascript But we can do, and this job is called debugging*

##STRICT MODE
This is the way to find errors that javascript ignores.
Example is using an undefined variable. if we dont use strick mode, then everything will be ok, but if using, the error will be shown
```javascript
function SpotProblem(){
//     "use strict";
    for (counter = 0; counter < 10; counter++){
        console.log("Good!");
    }
}
SpotProblem();
console.log(counter);
```
strick mode can find error when using this in local, but it is still in global.
Example: When we forget to declare the key word "new" when create an new Object
```javascript
"use strict";
function Person(name){
    this.name = name;
}
var john = Person("John");
console.log(name);
```
And there are another cases, that trick mode is not allowed:
**Delete an object is not allowed**
```javascript
"use strict";
var x = 3.14;
delete x;

"use strict";
var obj = {v1: 3, v2: 4};
delete pbj;

"use strict";
var func = function(){};
delete func;
```
**Duplicate parameter is not allowed**
```javascript
"use strict";
var func = function(a1, a1){
    console.log(a1);
}
```
**Reserve Word is not allowed to name variable**
```javascript
"use strict";
var arguments = 5;
var eval = 6;
console.log(arguments);
console.log(eval);
```

##TESTING
**Testing makes sure that the program working well, and if there are any changes, testing will automatic show us the error, thus, we know where need to fix**
```javascript
function Vector(x, y){
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(other){
    return new Vector(this.x + other.x, this.y + other.y);
}

function TestVector(){
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);

    if (p1.x !== 10) return "fail: x property";
    if (p1.y !== 20) return "fail: y property";
    if (p2.x !== -10) return "fail: nagative x property";
    if (p2.y !== 5) return "fail: y property";
    if (p3.x !== 0) return "fail: x property from plus";
    if (p3.y !== 25) return "fail: y property from plus";
    return "Vector is Oke";
}
TestVector();
```
##DEBUGGING
when the testing is fail, we have to debug to find the bugs. </br>
The first we should guess the bug. And then we put break point in the line, we assume it make bug </br>
If that is the exactly bug we want to find, then we fix it, and write more test for this case </br>
In this example code below, the function convert the number in the decima to another. we run and see the result is wrong, so we guess that the error may be caused by the result variable, then we put break point in the line contains result variable.
```javascript
function ConvertNumber(n, base) {
  var result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base; //-> n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}
console.log(ConvertNumber(13, 10));
console.log(ConvertNumber(14, 2));
```
##ERROR PROPAGATION
Sometime our code is working well with normal input. But with special one, they can cause error. So, we have to consider all situation can make Flaws, and handling them. </br>
This example code below has an if..else to handle the wrong input if user types not a number in the prompt input
```javascript
function promptNumber(question) {
  var result = Number(prompt(question, ""));
  if (isNaN(result)) return null;
  else return result;
}
console.log(promptNumber("How many trees do you see?"));
```
##EXCEPTION
In the Error Propagation, we can control the errors if we know them. But what will happen if we don't know the error? For solving this problem, javascript provides for us an try...catch.. to control error we dont know or not sure
```javascript
try {
    throw new Error("Invalid defination");
} catch (error){
    console.log(error);
}

function promtDirection(question){
    var result = prompt(question, "");
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look(){
    if (promtDirection("Which way?") == "L") {
        return "a house";
    }
    else{
        return "two angry bears";
    }
}

try {
    console.log("you see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}
```
##CLEAN UP AFTER EXCEPTIONS
We have a block of code below:
```javascript
var context = null;
function withContext(newContext, body){
  var oldContext = context;
  context = newContext;
  var result = body();
  context = oldContext;
  return result;
}
withContext("new", function(){
  var a = b/0;
  return a;
});
```
What would happend with context? It cannot be excute the last line code, because in withContext function, it will throw off the stack by an exception. So javascript provides a **try...finally...**
```javascript
var context = null;
function withContext(newContext, body){
  var oldContext = context;
  context = newContext;
  try{
    return body();
  } finally {
    context = oldContext;
  }
}
withContext("new", function(){
  var a = b/0;
  return a;
});
```
##SELECTIVE CATCHING
There are some errors cannot handle by environment. So, if we let the error go through, it can cause broken program.</br>
For examnple, the Error() in environment cannot catch the infinitive loop in the try block, if we dont catch this problem, the programm will crash soon
```javascript
for (;;) {
  try {
    var dir = promtDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}
```
The loop will break out if the promptDirection() can excute. </br>
But it doesn't. Because it is not defined before, so the environment catch it and go through the catch to show error </br>
The circle again and again will make the program crash. </br>
**So we will create a special Exception.**
```javascript
function InputError(message){
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";
```
Error: has an property is stack. it contains all exception, which environment can catch.
Then, we have the promptDirection function to return the result if Enter valid format, or an exception if invalid
```javascript
function promptDirection(question){
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}
```
Finally, we can catch all exception we want
```javascript
for (;;){
  try {
    var dir = promptDirection("Where?");
    console.log("You choose ", dir);
    break;
  } catch(e) {
    if (e instanceof InputError){
      console.log("Not a valid direction. Try again. ");
    }
    else {
      throw e;
    }
  }
}
```
##ASSERTIONS
```javascript
function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "empty array in lastElement");
  return array[array.length - 1];
}
```



