/**
 * Created by thaidl on 10-02-2017.
 */
//defining a function
/*
* A function is created by an expression that starts with the keyword function
* A function can have multiple parameters or no parameters at all.
* some function produces a value, and some don't
* return determines the value the function values
*
* */
var makeNoise = function () {
    console.log("Pling!!");
};
makeNoise();

var power = function (base, exponent) {
    var result = 1;
    for(var count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};
console.log(power(3,2));


//parameters
/*
* parameter like regular variable, but initial values are given by caller of the function
* variable local được xem như là parameters và được khai bao với từ khóa var trong bodu function
* Global: variable được declared outside function // nó được chạy suốt chương trình
* , có thể truy cập trong function miễn là không declared a local var with same name
*
* */

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
/*
* function created inside other functions
*
*
* */
var landscape = function () {
    var result = "";
    var flat = function (size) {
        for (var count = 0; count < size; count++){
            result += "_";
        }
    };
    var mountain = function (size) {
        result += "/";
        for (var count  = 0; count < size; count++){
            result += "'";
        }
        result += "\\";
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    return result;
};

console.log(landscape());

//Call Stack
/*
* the computer stores this context is the call stack???
* mỗi lần function được gọi, current context sẽ được put vào stack
* khi function return nó sẽ bị pop khỏi stack, để sử dụng tiếp
*
* */
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

//out of call stack
//When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”
// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first.");


//Optional Arguments
//!!JavaScript is extremely broad-minded about the number of arguments you pass to a function?
//nếu thêm vào quá nhiều arg thì những arg không liên quan sẽ bị ignore,
//nếu quá ít, những arg miss sẽ bị gán là undefined
//alert("ahihi", "Good bye", "how do u do?");

function power(base, exp) {
    if(exp == undefined){
        exp = 2;
    }
    var result = 1;
    for(var i = 0; i< exp; i++)
        result *= base;
    return result;
}
console.log(power(4));
console.log(power(3,2));


//Closure
//- local variables có thể được re-create mỗi khi function called mà không ảnh hưởng tới local variables khác,
function wrapValue(n) {
    var localVariable = n;
    return function () {
        return localVariable;
    }
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//-----????
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(5));

// function mul(factor, number) {
//     return number*factor;
// }
// var tw = mul(2);
// console.log(tw(3));


//Recursion
/*
* a function call itself, (not to overflow stack)
* but it 10 times slower than loop
*
* */
function power(base, exp) {
    if(exp == 0)
        return 1;
    else
        return base * (power(base, exp -1))
}
console.log(power(3,4));

function findSolution(target) {
    function find(start, history) {
        if(start == target)
            return history;
        else if (start > target)
            return null
        else
            return find(start + 5 ,"(" + history + " + 5)") ||
                    find(start *3, "(" + history +" * 3)");
    }
    return find(4, "4");
}

console.log(findSolution(24));



//Growing functions

function printFarmInventory1(cows, chikens) {
    var cowString = String(cows);
    while (cowString.length <3)
        cowString = "0"+ cowString;
    console.log(cowString + " Cows");
    var chickenString = String(chikens);
    while (chickenString < 3)
        chickenString = "0"+chickenString;
    console.log(chickenString+ " chickens")
}

printFarmInventory1(7,11);

//add pigs
function printZeroPaddedWithLabel(number, label) {
    var numberString = String(number);
    while (numberString.length <3)
        numberString = "0"+numberString;
    console.log(numberString+ " "+ label);
}

function printFarmInventory2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pig");
}

printFarmInventory2(7,11,22);

//name function shorter

function zeroPad(number, width) {
    var string  = String(number);
    while (string.length < width)
        string = "0"+string;
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) +" Cows");
    console.log(zeroPad(chickens, 3) +" Chickens");
    console.log(zeroPad(pigs, 3) +" Pigs");
}

printFarmInventory(7,33,22);

