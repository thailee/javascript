Convert dict to object [^1]
###Object
####Define an object
```javascript
var object = {
  number: 10,
  string: "string",
  array: [1,2,3],
  object: {a: 1, b: 2}
}
```
####Add new property to object
```javascript
object.newProperty = "value";
object['key'] = 'value';
```
####delete property
```javascript
delete object.newProperty;
```

###Window object (global object)
The Global scope is stored in an object which called window
```javascript
function test(){
    var local = 10;
    console.log("local" in window);
    console.log(window.local);
}
test();
var global = 10;
console.log("global" in window);
console.log(window.global);
```

[^1]: [stackoverflow, Convert Python dict to object?](http://stackoverflow.com/questions/1305532/convert-python-dict-to-object)