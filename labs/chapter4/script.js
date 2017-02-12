/**
 * Created by thaidl on 11-02-2017.
 */
//Data sets
var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
console.log(listOfNumbers[1 - 1]);

//Properties
var myName = ["ledinhthai"];
console.log(myName.length);
console.log(myName[2]);
//console.log(undefined.length); //error

//Methods
var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());

//Objects
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var descriptions = {
work : " Went to work ",
" touched tree ": " Touched a tree "
};
var anObject = { left : 1, right : 2};
console .log( anObject . left );
delete anObject . left ;
console .log( anObject . left );
console .log (" left " in anObject );
console .log (" right " in anObject );

//array of object
var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break",
            "peanuts", "beer"],
   squirrel: true}
];

//Mutability
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

//Computing correlation
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

//Objects as maps
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

//Further arrayology
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

//concat and slice
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

//The arguments object
function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");

//The global object
// var myVar = 10;
// console.log("myVar" in window);
// console.log(window.myVar);
