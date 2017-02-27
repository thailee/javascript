/**
 * Created by thaidl on 12-02-2017.
 */
//Abstraction
/*
* các loại vocabularies are usually called abstractions.
*
* */

var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

//Abstracting array traversal

var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}
//
function logEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
forEach(["thai", "le", "dinh"], console.log);

//
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);

//Higher-order functions
/*
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions
Higher-order functions allow us to abstract over actions, not just values
*/
function greaterThan(n){
    return function(m){
        return m > n;};
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11))
//
function noisy(f){
    return function(arg){
        console.log("calling with ", arg);
        var val = f(arg);
        console.log("called with", arg, "- got ", val);
        return val;
};

}
noisy(Boolean)(0)

function unless(test, then){
    if(!test) then();
}

function repeat(times, body){
    for(var i=0;i < times; i++) body(i);
}

repeat(3, function(n){
    unless(n % 2, function(){
        console.log(n, " is even");
    })
})

//Passing along arguments
/*
* method apply and call???
* */
function transparentWrapping(f){
    return function(){
        return f.apply(null, arguments);
    };
}
function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
//theFunction.call(undefined, ...["Matthew", "physicist"]);


//Json
/*
* JSON (pronounced “Jason”). It is widely used as a data storage and communication format on the Web.
* All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, variables, or anything that involves actual computation.
* Comments are not allowed in JSON
* JSON.stringify: takes a value and returns a JSON-encoded string
 * JSON.parse:  takes such a string and converts it to the value it encodes.
* */
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);


//Reduce
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));


