<strong>Gulp</strong>

Automate and enhance your workflow

Here's some of the sweet stuff you try out with this repo.

<ul>
    <li>Compile CoffeeScript (with source maps!)</li>
    <li>Compile Handlebars Templates</li>
    <li>Compile SASS with Compass</li>
    <li>LiveReload</li>
    <li>require non-CommonJS code, with dependencies</li>
    <li>Set up module aliases</li>
    <li>Run a static Node server (with logging)</li>
    <li>Pop open your app in a Browser</li>
    <li>Report Errors through Notification Center</li>
    <li>Image processing</li>
</ul>

Watch

[code lang="javascript" title="gulpfile.js"]
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jsdoc = require("gulp-jsdoc");

var third_parties = [
  "bower_components/jquery/dist/jquery.js",
  "bower_components/bootstrap/dist/js/bootstrap.js",
  "bower_components/underscore/underscore.js",
  "bower_components/ring/ring.js",
  "bower_components/moment/moment.js",
  "bower_components/sprintf/src/sprintf.js",
  "bower_components/uri.js/src/URI.js",
  "bower_components/run/run.js"
];

var modules = [
  "modules/....js"
];

gulp.watch(third_parties, ['js_thirdparty']);
gulp.watch(modules, ['js_modules']);

gulp.task('js_thirdparty', function () {
  return gulp
    .src(third_parties)
    .pipe(concat('third_party.uglify.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./scripts'));
});

gulp.task('js_modules', function () {
  return gulp
    .src(modules)
    .pipe(concat('modules.uglify.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./scripts'));
});

gulp.task('documentation', function () {
  return gulp
    .src("./modules/*/*.js")
    .pipe(jsdoc('./documentation'));
});

gulp.task('default', ['js_thirdparty', 'js_modules']);
[/code]

<a href="http://gulpjs.com/" target="_blank">http://gulpjs.com/</a>

### Deprecated

<span style="text-decoration:line-through;">grunt</span>