const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('minifyMyTask', function() {
  gulp.src('./src/*.js')
  .pipe(concat('dest.js'))
  .pipe(minify())
  .pipe(gulp.dest('./dest'))
});