##Array
####Some useful methods with array
+ push and pop
```javascript
var a = [1,2,3,4];
console.log(a.pop(), a);
console.log(a.push(3), a);
```
+ shift and unshift
```javascript
console.log(a.shift(), a);
console.log(a.unshift(1), a);
```
+ indexOf and lastIndexOf
```javascript
var b = [1,2,3,4,2,3,1];
console.log(b.indexOf(1));
console.log(b.lastIndexOf(1));
```
+ slice
```javascript
console.log([0,1,2,3,4].slice(2,4));
console.log([0,1,2,3,4].slice(2));
```
+ concat
```javascript
var a = [1,2,3];
var b = [4,5,6];
a.concat(b);
console.log(a);
```
