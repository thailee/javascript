/**
 * Created by thaidl on 11-02-2017.
 */
/*
* Numbers, Booleans, and strings are vien gach de xay dung nên data structures
* object cho phep nhóm các giá trị kể cả other object
*
* */

//Data sets
/*
* javascript provides a data type specifically for storing sequences of values - it is called an array, and is written as a list of values
*
* */
var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
console.log(listOfNumbers[1 - 1]);

//Properties

/*
* myString.length, Math.max are expressions access a property of value
* almost all js values have properties.
* exceptions: if try access a property Null and undefined, get an error
*
*   2 ways to access properties in js, a dot and with square brackets
*   when use a dot, the part after the dot must be a valid variable name
*???   when use square brackets, the expression between brackets is evaluated to get property name
* */
var myName = [2, 2, 3,4,5];
console.log(myName.length);
console.log(myName[2]);
myName["length"];
//console.log(undefined.length);

//Methods
/*
* object chứa cả String and array
* 1 số properties có thể là 1 function values
* Properties that contain functions are generally called methods of the value they belong to. As in, “toUpperCase is a method of a string”.
*
* push method used to add values to the end of an array
* pop method: removes the value at the and of array and return it
* Join method can be flattened to a single string
*
* */

var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

//Objects
/*
* values of type object are collections of property
* create an object is by dấu ngoặc nhọn
*   trong dấu ngoặc ngọn ta co thể give a list of property, ngăn cách nhau bởi dấu phẩy
*   each property is writen as a name and a dấu 2 chấm and  value or an expression
* */
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

/*
* ??? Properties whose names are not valid variable names or valid numbers have to be quoted.
* properties có tên k hợp lệ or số hợp lệ được viết trong dấu nháy ""
* */
var descriptions = {
    work : "Went to work",
    "touched tree": "Touched a tree"
};

/*
*   delete operator xóa 1 tua của bạch tuộc
* ???  The difference between setting a property to undefined and  delete: in the first case, the object still has the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and in will return false.
*
* */
var anObject = { left : 1, right : 2};
console.log(anObject.left );
delete anObject.left;
console.log(anObject.left );
console.log ("left" in anObject );
console.log ("right" in anObject );

//array of object
/*
* array là 1 kiểu object specialized,
*
* */
var journal = [
    {events : ["work", "touch tree", "pizza", "running"],
        squirrel: false
    },
    {events : ["work", "ice cream", "lasagna", "running"],
        squirrel: true
    },
    {events : ["weekend", "touch tree", "peanuts", "running"],
        squirrel: false
    }


];
//Mutability
/*
* array là 1 kiểu object specialized,
* ??? You can combine them and derive new values from them, but when you take a specific string value, that value will always remain the same.
*
*   với 2 số 120 and 120 chúng ta có thể thấy chúng cùng same number,  nhưng chúng sẽ khác vị trí bits lưu trữ,
* ??  nhưng với 2 object khác nhau có thể có cùng properties
*
*  == khi so sánh object sẽ trả về true chỉ nếu cả 2 object có cùng giá trị,
*
* */
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

//The lycanthrope’s log
/*
* Correlation sự tương quan là có thể đo đếm đc phục thuộc vào giữa các biến
*
* */

var journa = [];

function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel

    });
}



//Computing correlation
/*
*
* ??We have to sum two fields from the table to get fields like n1• because the sums of rows or columns are not stored directly in our data structure.
* */

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

//Objects as maps
/*
* ???A map is a way to go from values in one domain (in this case, event names) to corresponding values in another domain (in this case, ϕ coefficients).
* khi muỐn tìm kiếm all những event được save trong map, we cannot use for loop,
* Javascript cung cấp keyword "in" để going over the properties of an object
* */
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

for(var event in map)
    console.log("the correlation for "+event+" is "+map[event]);

//The final analysis

//Further arrayology
/*
* tương ứng với method (push and pop) for adding and removing là unshift and shift
* unshift: add vào đầu list
* shift: get value ở đầu lisy
*/

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
/*  - tương tự indexOf có lastIndexOf: tìm kiếm từ cuối list
* */
console.log([1,2,3,4,12].indexOf(2));
console.log([1,2,4,12,41,2].lastIndexOf(2));

/* slice(start, end): return array bắt đầu từ element có index  = start và tới element có index = end (nếu end not givent slice sẽ take all elements after the start index)
*/
console.log([12,3,12,3,12,3].slice(2));
console.log([12,3,12,3,12,3].slice(2,5));

//concat
/*
* concat để nối 2 mảng ("+" operator for string)
* it takes an array and an index, returns new array
* */
function remove(arr, ind){
	return arr.slice(0, ind).concat(arr.slice(ind+1))
}877878
console.log(remove(["a","b","d","e","g"], 3))

//Strings and their properties
/*
* ??? Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties. The values are immutable and cannot be changed.
* - !! indexOf can take a string more than one character, trong khi những method khác thì chỉ 1
*
* */
console.log("one two threee".indexOf("eee"))

//Trim method: remove whitespace (spaces, newlines, tabs...) from the start and end of a String
console.log("       okey \n     ".trim());

//CharAt(index) method: = string[index]

//The arguments object
/*
* when function is called, a special variable name arguments is added to environment in which the function body runs
* this var hold all arguments passed to the function
* it not like a real array, no have methods slice or indexOf..
* */

function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");


//The Math object
/*
* Math.random() // random 0 ~~ 1
*   Math.ceil(2.6) // làm tròn lên
*   Math.floor(2.6) // làm tròn xuống
*   Math.round(2.6) //
* */
console.log(Math.floor(Math.random() * 10));
console.log(Math.round(5.6));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));

//The global object
//global scope object is stored in the window var
var myVar = 10;
console.log("myVar" in window);
console.log(window.myVar);
