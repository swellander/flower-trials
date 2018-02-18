var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('jshint', function() {
    return gulp.src(['js/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});