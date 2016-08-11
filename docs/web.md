# **Web in javascript**

## Finding Elements

+ GetElementByTagName
```javascript
document.documentElement.getElementsByTagName("a")
```

+ GetElementByClassName
```javascript
document.documentElement.getElementsByClassName("image")
```

+ GetElementById
```javascript
document.documentElement.getElementsById("ContentWrapper")
```

## Changing the Document

+ removeChild
```javascript
document.body.getElementsByTagName("div")[0].remove()
```

+ appendChild
```javascript
var newpTag = document.createElement("p");
document.body.appendChild(newpTag);
```

+ insertBefore
```html
<p>One</p>
<p>Two</p>
<p>Three</p>

<script>
  var paragraphs = document.body.getElementsByTagName("p");
  document.body.insertBefore(paragraphs[2], paragraphs[0]);
</script>
```

## Creating Node

+ createElement
```javascript
var newElement = document.createElement("div");
```

+ createTextNode
```javascript
var newTextNode = document.createTextNode("hello");
```

## Query Selector

+ querySelectorAll(selector)
```javascript
document.querySelectorAll("div");
document.querySelectorAll(".class");
document.querySelectorAll("#id");
```

+ Select the direct children of an element
```javascript
document.querySelectorAll("div > p");
```

*querySelector / querySelectorAll cannot change the given document*

----
# **Handling Events**

## Event Handlers

**addEventListener**: ```dom.addEventListener("[event_names]", function(){});```
+ click
+ mouseover
+ mouseout
+ keydown
+ scroll

```javascript
var dom = document.getElementByTagName("p")[0];
dom.addEventListener("mouseover", function(){alert("Hello")});
```

[**All Events is counted here (soure: W3Schools)**] (http://www.w3schools.com/jsref/dom_obj_event.asp) (to use these events with addEventListener, delete the "on" in each event)

**removeEventListener**: ```dom.removeEventListener("[event_names]", function(){});```
```javascript
  var pTag = document.querySelector("p");
  function once() {
    console.log("Done.");
    pTag.removeEventListener("click", once);
  }
  pTag.addEventListener("click", once);
```

## Event Objects
   All information of events is held in **event** object 
```javascript
var dom = document.querySelector("p");
dom.addEventListener("click", function(event){console.log(event)})
```

## Propagation
   When the children Nodes handles events, whole events of its parent will also handle.
   
   We can use **event.stopPropagation()** to stop propagation
```html
<p>A paragraph with a <button>button</button>.</p>
<script>
  var para = document.querySelector("p");
  var button = document.querySelector("button");
  para.addEventListener("mousedown", function() {
    console.log("Handler for paragraph.");
  });
  button.addEventListener("mousedown", function(event) {
    console.log("Handler for button.");
    if (event.which == 3)
      event.stopPropagation();
  });
</script>
```

## Default Action
There are some actions are created automatically. Such as when you click a link, when you press keydown, when you click right click.

We can change the default by  preventDefault.

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  var link = document.querySelector("a");
  link.addEventListener("click", function(event) {
    console.log("Nope.");
    event.preventDefault();
  });
</script>
```

## Event Target
Using event.target to get the element which is handled event
```javascript
document.body.addEventListener("click", function(event){console.log(event.target.nodeName)})
```
## Key Event

+ keyup & keydown
```javascript
document.body.addEventListener("keydown", function(event){
    if (event.keyCode == 86) 
      document.body.style.background = 'violet';
});

document.body.addEventListener("keyup", function(event){
    if (event.keyCode == 86) 
      document.body.style.background = '';
});
```
+ Ctrl, Alt, Shift
```javascript
document.body.addEventListener("keydown", function(event){
    if (event.keyCode == 86 && event.ctrlKey && event.shiftKey)
      document.body.style.background = 'violet';
});
```