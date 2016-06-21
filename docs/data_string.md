### [sprintf](https://github.com/alexei/sprintf.js)

In `index.html`

```html
<script src="cdnjs.cloudflare.com/ajax/libs/sprintf/1.0.3/sprintf.js"/>

```


In `script.js`

```
// arguments
sprintf("%1$s %2$s", "hello", "sprintf")
# hello sprintf

// object
var user = {
    name: "Dolly"
}
sprintf("Hello %(name)s", user)
# Hello Dolly

// array of object
var users = [
    {name: "Dolly"},
    {name: "Molly"}
]
sprintf("Hello %(users[0].name)s and %(users[1].name)s", {users: users})
# Hello Dolly and Molly
```
