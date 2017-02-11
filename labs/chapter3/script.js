/**
 * Created by thaidl on 10-02-2017.
 */
//defining a function
var makeNoise = function() {
  console.log("Pling!");
};
makeNoise();

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};
console.log(power(2, 10));

//parameters and scopes
var x = "outside";
var f1 = function(){
    var x = "inside f1";
};
f1();
console.log(x);

var f2 = function () {
    x = "inside f2";
};
f2();
console.log(x);

//Nested scope
var landscape = function () {
    var result = "";
    var flat = function (size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };

    var mountain = function (size) {
        result += "/";
        for(var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};

console.log(landscape());

//Call Stack
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

//out of call stack
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");

//Closure
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));

//Recursion
function power(base, exponent) {
    if(exponent == 0)
        return 1;
    else
        return base * power(base,exponent - 1)
}

console.log(power(2,3));

function findSolution(target) {
    function find(start, history) {
        if(start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}
console.log(findSolution(26));

//Growing functions
function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

//--- 1
function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3)
    numberString = "0" + numberString;
  console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
//--- 2
function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);