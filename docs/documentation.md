## Components

[`jsdoc`](https://github.com/jsdoc3/jsdoc) (with [`docdash`](https://github.com/clenemt/docdash) template)

JSDoc is an API documentation generator for JavaScript, similar to JavaDoc or PHPDoc. You add documentation comments directly to your source code, right along side the code itself. The JSDoc Tool will scan your source code, and generate a complete HTML documentation website for you.

`gulp`, `PyCharm`

## Usage

### Step 1. Install `gulp-jsdoc`

```
npm install --save-dev gulp gulp-jsdoc docdash
```

### Step 2. Create `documentation` task

Create `documentation` task in `gulpfile.js` file

```javascript
var template = {
  "path": "./node_modules/docdash"
};

gulp.task('docs', function(){
  return gulp.src("./src/*.js")
    .pipe(jsdoc('./docs', template));
});
```

### Step 3. Refresh `Gulp` tasks

In pycharm, click to refresh button in `gulp` window.
### Step 4. Add comment to your code

Add comment to your code, You can see an [example: should.js](https://github.com/shouldjs/should.js/blob/master/lib/should.js)

```javascript
/**
 * Simple utility function for a bit more easier should assertion
 * extension
 * @param {Function} f So called plugin function. It should accept
 * 2 arguments: `should` function and `Assertion` constructor
 * @memberOf should
 * @returns {Function} Returns `should` function
 * @static
 * @example
 *
 * should.use(function(should, Assertion) {
 *   Assertion.add('asset', function() {
 *      this.params = { operator: 'to be asset' };
 *
 *      this.obj.should.have.property('id').which.is.a.Number();
 *      this.obj.should.have.property('path');
 *  })
 * })
 */
should.use = function(f) {
  f(should, should.Assertion);
  return this;
};

```

**Types**: `boolean`, `string`, `number`, `Array` ([see more](https://developers.google.com/closure/compiler/docs/js-for-compiler#types))

### Step 5. Run `docs` task

In pycharm, click to `docs` task in `gulp` window.