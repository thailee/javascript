#Function in Javascrpit
##1.Defining a Function
```javascript
var square = function(x) {
  return x * x;
};
square(5);
```
##2. Scope
####Scope is the area where contains all variable or function are living. </br>
####Scope has some rules:
+ Child Scope can access all variable and function in parent Scope. (E.g: Local Scope can access Global Scope)
```javascrpit
function saveName(firstName) {
    var temp = "temp";
    function capitalizeName() {
        temp = temp + " here";
        return firstName.toUpperCase();
    }
    var capitalized = capitalizeName();
    return capitalized;
}
alert(saveName("Robert"));
```
+ But parent Scope can access variable and function inside children scope (E.g: Global Scope cannot acces to local Scope)
```javascript
function talkDirty () {
    var saying = "Oh, you little VB lover, you";
    return alert(saying);
}
alert(saying); //->Error
```


##3. Call Stack
The storage where computer stores context is called CALL STACK.
```javascript
// CALL STACK
function greet(who) {
    console.log("Hello " + who);
    ask("How are you?");
    console.log("I'm fine");
};

function ask(question) {
    console.log("well, " + question);
};

greet("Harry");
console.log("Bye");
```

Out of Call Stack
```javascript
function chicken() {
    return egg();
}

function egg() {
    return chicken();
}
console.log(chicken() + " came first");
```

##4. Optional Argument
####We can pass too many or too few arguments to the function without any SyntaxError. 
+ If we pass too much arguments, the extra ones are ignored
+ If we pass to few arguments, the missing ones get value undefined
```javascript
function power(base, exponent) {
    if (exponent == undefined) {
        exponent = 2;
    }
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result = result * base;
    }
    return result;
}
console.log(power(4)); 
console.log(power(4,3));
```
**upside**: flexible </br>
**downside**: hard to control the error

##Closure
Look at this example: 
```javascript
function sayHello(name){
    var text = 'Hello' + name;
    var say = function(){
        console.log(text);
    }
    return say;
}
var say2 = sayHello("ahaha");
say2();
```
if in C program, does say2() work? <br/>
The answer is nope! Because in C program, when a function returns, the Stack-flame will be destroyed, and all the local variable such as *text* will undefinded. So, when say2() is called, there is no text anymore, and the error, will be shown! </br>
But, in JavaScript, This code works!! Because, it provides for us an Object called Closure! Closure is borned when we define a function in another function, it keep all the live local variable. So, when say2() is called, the closure will give all the value of local variable outside it, and text will be identity.!

```javascript
var globalVariable = 10;
function func(){
    var name = "xxx";
    function getName(){
        return name;
    }
    function speak(){
        var sound = "alo";
        function scream(){
            console.log(globalVariable);
            console.log(name);
            return "aaaaaaaaaa!";
        }
        function talk(){
            var voice = getName() + " speak " + sound;
            console.log(voice);
            return voice;
        }
        scream();
        talk();
    }
    speak();
}
func();
```

##5. Recursion
```javascript
// RECURSION
// A function can call itself, as long as it is not overflow 
// call stack
// A function call itself and not overflow called Recursion
function power(base, exponent){
    if (exponent == 0){
        return 1;
    }
    else{
        return base * power(base, exponent -1);
    } 
}
console.log(power(2,3));

function FindSolution(target){
    function Find(start, history){
        if (start == target){
            return history;
        }
        else if (start > target){
            return null;
        } 
        else{
            return Find(start + 5, "(" + history + " + 5 ") ||
            Find(start * 3, "(" + history + " * 3)");
        }
    }
    return Find(1, "1");
}
console.log(FindSolution(25));   
```