![](http://wearelaunchbox.com/wp-content/uploads/2012/11/oop-basics.png)


# 1. Classes and Objects

### Constructor

```
function Ball(position){
    this.position = position;
    this.display = function(){
        console.log(this.position[0], ", ", this.position[1]);
    }
}

ball = new Ball([2, 3]);
ball.display();
```

# 2. Inheritance


```
Person = function (name, birthday, job) {
  this.name = name;
  this.birthday = birthday;
  this.job = job;
};

Person.prototype.display = function () {
  console.log(this.name, "\n");
  console.log(this.birthday, "\n");
  console.log(this.job, "\n");
};

Politician = function (name, birthday) {
  Person.call(this, name, birthday, "Politician");
};
Politician.prototype = Object.create(Person.prototype);
Politician.prototype.constructor = Politician;

var person1 = new Person("Barack Obama", "04/08/1961", "Politician");
var person2 = new Politician("David Cameron", "09/10/1966");
person1.display();
person2.display();

```

# Object-Oriented Programming

```javascript
var rabbit = {};
rabbit.speak = function(line){
console.log("The rabit says:'" + line + "'");
 };
rabbit.speak("I'm alive");

function speak(line){
   console.log("The "+ this.type + " rabbit says '" + line + "'");
 }

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now");

// Prototype
// Prototype is another object that is used as a fallback source of properties
// When object request a property that it does not have, its prototype will be searched for the property
var empty = {};
console.log(empty.toString);
console.log(empty.toString);

// Get prototype of an object 2 ways:
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

// Using Object.create to create an object with an specific prototype
var protoRabbit = {
  speak: function(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("Skreeee!");

// Constructor
function Rabbit(type){
   this.type = type;
}
var killerRabbit = new Rabbit("Killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);

// using prototype to add a new method
Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabit says '" + line + "'");
};
blackRabbit.speak("Doom...");


// OVERRIDING DERIVED PROPERTIES
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "Long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

// PROTOTYPE INTERFERENCE
// A prototype can be used at any time to add methods, properties
// to all objects based on it
Rabbit.prototype.dance = function (){
  console.log("The " + this.type + " rabbit dances a jig");
};
killerRabbit.dance();
// but there is a problem:
var map = {};
function storePhi(event, phi){
   map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log(map);

Object.prototype.nonsense = "hi";
for (var name in map) {
  console.log(name);
}
console.log("nonsense" in map);
console.log("toString" in map);
delete Object.prototype.nonsense;
//  we can use Object.defineProperty to solve it
Object.defineProperty(Object.prototype, "hiddenNonsense", {
   enumerable: false,
   value: "hi"
});

for (var name in map) {
  console.log(name);
}
console.log(map.hiddenNonsense);
// but there still has a problem
console.log("toString" in map);
console.log(map.hasOwnProperty("toString"));

// PROTOTYPE-LESS OBJECTS
// if we only want to create an fresh object, without prototype then we tranform null to create
var map = Object.create(null);
map["pizza"] = 0.09;
console.log("toString" in map);
console.log("pizza" in map);

// POLYMORPHISM
// laying out a table: example for polymorphism
function rowHeights(rows) {
    return rows.map(function(row){
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row){
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum){
        var blocks = row.map(function(cell, colNum) {
           return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times){
    var result = "";
    for (var i = 0; i < times; i++){
        result += string;
    }
    return result;
}

function TextCell(text){
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function(){
    return this.text.reduce(function(width, line){
        return Math.max(width, line.lenght);
    }, 0);
};
TextCell.prototype.minHeight = function(){
    return this.text.length;
}
TextCell.prototype.minHeight = function(){
    return this.text.lenght;
}
TextCell.prototype.minHeight = function(){
    return this.text.length;
}
TextCell.prototype.draw = function(width, height){
    var result = [];
    for (var i = 0; i < height; i++){
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
}

var rows = [];
for (var i = 0; i < 5; i++){
    var row = [];
    for (var j = 0; j < 5; j++){
        if ((i + j) % 2 == 0){
            row.push(new TextCell("1234"));
        } else{
            row.push(new TextCell("5"));
        }
    }
    rows.push(row);
}
console.log(drawTable(rows));

// // GETTERS AND SETTERS
// var pile = {
//     elements: ["eggshell", "orange peel", "worm"],
//     get height(){
//         return this.elements.length;
//     },
//     set height(value) {
//         console.log("Ignoring attemp to set high to ", value);
//     }
// };

// console.log(pile.height);
// pile.height = 100;
// console.log(pile.height);

```


[1]: [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
[2]: [How to call parent constructor?](http://stackoverflow.com/a/15399594/772391)