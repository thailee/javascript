/**
 * Created by thaidl on 15-02-2017.
 */

//Method
/*    *method are simple properties that hold function values
  - the special variable "this" in its body will point to the object that it was called on.
*/
var rabbit =  {};
rabbit.speak = function(line){
  console.log("the rabbit says: '"+ line +" '")
};

rabbit.speak("i'm alive");

function spk(line){
  console.log("the "+ this.type + " rabbit says'" + line+"'");
}

var whiteRabbit = {type: "white", speak: spk};
var fatRabbit = {type: "fat", speak: spk};

whiteRabbit.speak("oh my ear");
fatRabbit.speak("I cold")

spk.apply(fatRabbit, ["Burp!!"]);
spk.call({type: "old"}, "Oh Myy");


//Prototypes
/*
*  A prototype is another object that is used as a fallback source of properties.
* Object.getPrototypeOf: return prototype of an object
* function dc lay ra from Function.prototype
* arrays dc lay ra from Array.prototype
* Use Objcet.create: create an object with specific prototype
* */

var empty = {};
console.log(empty.toString);
console.log(empty.toString());

//- Get prototype of an object
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

//- Object.create to create an object with a specific prototype
var protoRabbit = {speak: function(line){
  console.log("the "+ this.type+" rabbit says: '"+line+" '")
}};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREE!!")


//Constructors
/*
* create objects that derive from some shared prototype is to use a constructor
* An object created with new is said to be an instance of its constructor.

* */

function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);

Rabbit.prototype.speak = function(line) {
  console.log("the " + this.type +" rabbit says '"+ line +"'");
};
blackRabbit.speak("dddoom...");


//Overriding derived properties
/*
* khi add a property to an object: whether it is present in the prototype or not, the property is added to the object itself, which will henceforth have it as its own property.
*  If there is a property by the same name in the prototype, this property will no longer affect the object. The prototype itself is not changed.
* */

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, and black";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());

console.log(Object.prototype.toString.call([1, 2]));

//Prototype interference
/*
* add new properties and methods to all objects based on it.
*
* */

Rabbit.prototype.dance = function() {
  console.log("yhe " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();

//-
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log(map);

/*
* We can iterate over all phi values in the object using a for/in loop and test whether a name is in there using the regular in operator. But unfortunately, the object’s prototype gets in the way.
* */
Object.prototype.nonsense = "ahiih";
for (var name in map)
  console.log(name);

console.log("nonsense" in map);
console.log("toString" in map);

// Delete the problematic property again
delete Object.prototype.nonsense;
/*?? toString did not show up in the for/in loop, but the in operator did return true for it. This is because JavaScript distinguishes between enumerable and nonenumerable properties.
* All properties that we create by simply assigning to them are enumerable.
* standard properties in Object.prototype are all nonenumerable,
* *hasOwnProperty method:
* When you are worried that someone nhầm lẫn with the base object prototype, use: for/in loops.
*/
//--
Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
for (var name in map)
  console.log(name);

console.log(map.hiddenNonsense);
console.log("toString" in map);
console.log(map.hasOwnProperty("toString"));

for (var name in map) {
  if (map.hasOwnProperty(name)) {
    //this is an own property
  }
}

//Prototype-less objects
/*
* Object.create function:
* Object.create(null) ~ create a fresh object with no prototype
* */

var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
console.log("pizza" in map);


//Polymorphism
//??polymorphism


//Laying out a table
/*
* function (_, i):this argument is not going to be used.
*
* */

console.log("----------------------------\n");
function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max,cell.minHeight());
    },0 )
  })
}

function colWidths(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0)
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function (block) {
      return block[lineNo];
    }).join(" ");
  }


  function drawRow(row, rowNum) {
    var blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function (_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n")
  }
  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var rs = "";
  for(var i = 0; i< times; i++)
    rs += string;
  return rs;
}
function TextCell(text) {
  this.text = text.split("\n")
}
TextCell.prototype.minWidth = function(){
  return this.text.reduce(function (wid, line) {
    return Math.max(wid, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function(){
  return this.text.length;
};

TextCell.prototype.draw = function(wid, hei){
  var rs = [];
  for(var i = 0; i< hei; i++){
    var line = this.text[i] || "";
    rs.push(line + repeat(" ", wid - line.length))
  }
  return rs;
};

var rows = [];
for(var i = 0; i< 5; i++){
  var row = [];
  for(var j = 0; j < 5; j++){
    if((j+i)%2 ==0)
      row.push(new TextCell("##"));
    else
      row.push(new TextCell("  "));
  }
  rows.push(row);
}

console.log(drawTable(rows));

//-- Mountains
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;

function UnderlineCell(inner) {
  this.inner = inner;
}
UnderlineCell.prototype.minWidth = function () {
  return this.inner.minWidth();
}
UnderlineCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
};

UnderlineCell.prototype.draw = function(wid, hei){
  return this.inner.draw(wid, hei - 1).concat([repeat("-", wid)]);
}

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function (name) {
    return new UnderlineCell(new TextCell(name));
  });
  var body = data.map(function (row) {
    return keys.map(function (name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));


//Getters and setters
/*
* Rather than directly access a simple value property, they’d use getSomething and setSomething methods to read and write the property.
* You can also add such a property to an existing object, for example a prototype, using the Object.defineProperty function
* */

var pile = {
  elements: ["egg", "orange", "worm"],
  get height(){
    return this.elements.length;
  },
  set height(value){
    console.log("ignoring attempt to set height to ", value)
  }
};

console.log(pile.height);
pile.height = 100;

Object.defineProperty(TextCell.prototype, "heightProp", {
  get: function () {
    return this.text.length;
  }
});

var cell = new TextCell("no\nWay");
console.log(cell.heightProp);
cell.heightProp = 100;
console.log(cell.heightProp)


//Inheritance
//inheritance???
function RTextCell(text) {
  TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(wid, hei){
  var rs =[];
  for(var i = 0; i< hei; i++){
    var line = this.text[i] || "";
    rs.push(repeat(" ", wid - line.length) + line);
  }
  return rs;
};

function dataTable2(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function (name) {
    return new UnderlineCell(new TextCell(name));
  });
  var body = data.map(function (row) {
    return keys.map(function (name) {
      var value = row[name];
      if(typeof value == "number")
        return new RTextCell(String(value));
      else
        return new RTextCell(String(value));
    });
  });
  return [headers].concat(body);
}

console.log(drawTable(dataTable2(MOUNTAINS)));