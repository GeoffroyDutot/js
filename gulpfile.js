//gulpfile.js
var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets');
var sass = require('gulp-sass');
const babel = require('gulp-babel');
 


// SASS, concaténation de fichiers et minification
gulp.task('css', function () {
  return gulp.src('*.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'));

})

gulp.task('js', () =>
    gulp.src('*.es')
        .pipe(babel())
        .pipe(gulp.dest('js'))
);

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
      .pipe(bundle())
      .pipe(gulp.dest('./public'));
});
