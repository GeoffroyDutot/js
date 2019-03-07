//gulpfile.js
var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets');
var sass = require('gulp-sass');
const babel = require('gulp-babel');
const zip = require('gulp-zip');


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




gulp.task('zip', () =>
    gulp.src('*')
        .pipe(zip('projet_gulp.zip'))
        .pipe(gulp.dest('packaging'))
);


const {src, task} = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', () => {
    return src(['scripts/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.<
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(gulp.dest('public'))
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.formatEach('compact', process.stderr))
        .pipe(eslint.failAfterError());
});


'use strict';

var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');

gulp.task('default1', function () {
  return gulp.src('sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
