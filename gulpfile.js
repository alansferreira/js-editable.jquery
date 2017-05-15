// example of a common gulpfile
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');
var bump = require('gulp-bump');
var run = require('gulp-run');


// Defined method of updating: 
// Semantic 
gulp.task('bump', function(){
  gulp.src('./*.json')
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});

gulp.task('compress-js', function () {
  // returns a Node.js stream, but no handling of error messages
  return gulp.src('./js-editable-jquery.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compress-css', function () {
  // returns a Node.js stream, but no handling of error messages
  return gulp.src('./js-editable.css')
        .pipe(cleancss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('publish-on-npm', function(){
  return run('npm publish').exec().pipe(gulp.dest('output'));
});

gulp.task('default', ['bump', 'compress-css', 'compress-js', 'publish-on-npm']);
