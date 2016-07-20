##Values, types, and operator in javascript
###1.Value
There are 6 basic types of value: number, string, Boolean, obeject, function, and undefined value:
####1.1.Number
Some example of number: **10, 1.234, 1.99e9, NaN, Infinity, -Infinity**
```javascript
console.log(2.99e9); 
console.log(0 /0);
console.log(1 /0);
console.log(-1 /0);
```
####1.2.String
Multil String
```javascript
var multilString = 
    "this is the first line \
     this is the second line \
     this is the third line"
```
####1.3.Boolean
```javascript
console.log("Abc" < "Abcd") // -> true
console.log("abc" < "Abcd") // -> fasle
console.log("123" == "123") // -> true
console.log(NaN == NaN) // -> false
```
####1.4.Object
All type of value in javascript is object! We will know this in the [Object]();
```javascript
var obj = {
  name: "object",
  speak: funtcion(){
    console.log("Ahihi");
  }
}
console.log(obj.name);
obj.speak();
```
####1.5.Function
Function has some important concept: Scope, Closure, Call Stack, Option Argument, Recursion,... Go to [here]() to find more things about function
####1.6.Undefined
What is the different between null and undefined?
###2.Operator
+ Unary Operator: is the operator which is only used with only one value
```javascript
var a = 10;
var b = -a;
console.log(typeof "string");
```
+ Binary Operator: is the operator which is used with two values
```javascript
var total = (5 + 10)/3;
```
+ Terary Operator: is the operator which is used with 3 value
```javascript
// condition ? expression1 : expression2
var pi = (Math.PI > 4) ? "Yep": "No";
console.log(pi);
```
###3.Automatic Conversion
```javascript
console.log(8 * null); // -> 0
console.log("5" - 1); // -> 4
console.log("5" + 1); //-> 51
console.log(false == 0) //-> true
```
what is the different?
```javascript
console.log("5" == 5);
console.log("5" === 5);
```

