# [Mocha](https://mochajs.org/)

Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

## Installation

```
bower install -D mocha chai
```

## Usage

Step 1. Make `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tests</title>
  <link rel="stylesheet" media="all" href="mocha.css">
</head>
<body>
  <div id="mocha"></div>
  <script src="mocha.js"></script>
  <script src="chai.js"></script>
  <script src="functions.js"></script>
  <script>mocha.setup('bdd'); chai.should();</script>
  <script src="tests.js"></script>
  <script>mocha.run();</script>
</body>
</html>
```

Step 2. Edit `functions.js`

```javascript
function sum(a, b){
  return a + b;
}

function asynchronusSum(a, b){
  return new Promise(function(fulfill, reject){
    fulfill(a + b);
  });
}
```

Step 3. Edit `tests.js`

```javascript
describe('Calculator', function() {
  this.timeout(5000);
  describe('#sum()', function() {
    it('should return sum of two number', function() {
      sum(2, 3).should.equal(5)
    });
  });

  describe('#asynchronusSum()', function() {
    it('should return sum of two number', function(done) {
      asynchronusSum(2, 3).then(function(output){
          output.should.equal(5);
          done();
      })
    });
  });
});
```

