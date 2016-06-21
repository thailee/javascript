# [Mocha](https://mochajs.org/)

Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

## Usage
1. Edit `index.html`

[code lang="html" title="index.html" highlight="6,9,10,11"]
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
  <script>mocha.setup('bdd')</script>
  <script src="function_tests.js"></script>
  <script>mocha.run();</script>
</body>
</html>
[/code]