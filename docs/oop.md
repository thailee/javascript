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

In javascript, the Inheritance is showed through an concept called *prototype*.

```javascript
function Person(){
    this.name = 'Ken';
    this.age = '20';
    function show(){
        console.log(name, age);
    }
}

// another constructor 
function Superman(name, age){
    this.name = name;
    this.age = age;
}

// now we want Superman to inherit all methods of Person
Superman.prototype = Person();
var superman = new Superman('joker', 30);
superman.show();
```

Another example
```javascript
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

# 3. Encapsulation

**Encapsulation means, we cannot access and change the properties of an object, but we can do it through the methods of this object**

## 3.1 Namespace

Namespace wraps all objects, classes in an object

```javascript
var calculation = {
    add: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    multil: function(a,b){
        return a * b;
    },
    devide: function(a,b){
        return a / b;
    }
}

var add = function(a,b,c){
    return a + b + c;
}

console.log(calculation.add(5,6));
console.log(add(1,2,3));
```

## 3.2 Getter and Setter
```javascript
var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height(){
    return this.elements.length;
  },
  set height(value) {
    console.log("Ignoring attemp to set high to ", value);
  }
};

console.log(pile.height);
pile.height = 100;
console.log(pile.height);
```

# 4. Abstraction

Abstraction is to hide the details, and only show the features of an object.

Abstraction helps us avoid coupling pieces of code

(Achive Abstraction in Javascript)[http://www.yusufaytas.com/achieving-abstraction-in-javascript/]


[1]: [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
[2]: [How to call parent constructor?](http://stackoverflow.com/a/15399594/772391)