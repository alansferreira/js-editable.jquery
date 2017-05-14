// example of a common gulpfile
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');

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

gulp.task('default', ['compress-css', 'compress-js']);
