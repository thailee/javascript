/**
 * Created by thaidl on 09-02-2017.
 */

//Variables
var ten = 10;
console.log(ten * ten); // → 100

var mood = "light";
console.log(mood); // → light
mood = "dark";
console.log(mood); // → dark

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // → 105

var one = 1, two = 2;
console.log(one + two);// → 3

//The environment: ?

//Functions
//alert("hahah!");
var x = 30;
console.log("the value of x is", x); // → the value of x is 30

confirm("Shall we, then?");
//true if clicks OK and false if clicks Cancel
prompt("Tell me everything you know.", "...");

//Control flow
var theNumber = Number(prompt("Pick a number", ""));
if(!isNaN(theNumber))
    alert("Your number is the square root of " + theNumber * theNumber);
else alert("ahihi, do ngok!!");

//while and do loops
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result); // → 1024

//do loops
do {
  var yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

//for loops
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;
console.log(result);

//Breaking Out of a Loop
for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);

//switch
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

