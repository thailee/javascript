# REST

## POST

```javascript
$.ajax({
  type: "POST",
  url: "http://service.com/items",
  data: JSON.stringify({"name": "new item"}),
  contentType: 'application/json'
}).done(function (data) {
  console.log(data)
}).fail(function () {
});
```