## Component

[jsdoc](https://github.com/jsdoc3/jsdoc), gulp, PyCharm

## Usage

### 1. Install `gulp-jsdoc`

[code]
npm install --save-dev gulp-jsdoc
[/code]

### 2. Create `documentation` task in `gulpfile.js`

[code lang="javascript"]
gulp.task('documentation', function(){
  return gulp
    .src("./src/*.js")
    .pipe(jsdoc('./documentation'));
});
[/code]

### 3. Refresh `Gulp` tasks

### 4. Add documentation to your code ([example: should.js](https://github.com/shouldjs/should.js/blob/master/lib/should.js))

[code lang="javascript"]
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
[/code]

### 5. Run `documentation` task

