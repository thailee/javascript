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

[1]: [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
[2]: [How to call parent constructor?](http://stackoverflow.com/a/15399594/772391)