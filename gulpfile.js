//gulpfile.js
var gulp = require('gulp');

var sass = require('gulp-sass');
const babel = require('gulp-babel');
const zip = require('gulp-zip');
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_uglify = require('gulp-uglify');
cleanCSS = require('gulp-clean-css');


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


gulp.task('bundle_js', function(){

    return gulp.src(['./js/*.js'])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('public'))
        //.pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('public'));

  return gulp.src(['./js/*.js'])
      .pipe(gp_concat('concat.js'))
      .pipe(gulp.dest('public'))
      //.pipe(gp_rename('uglify.js'))
      .pipe(gp_uglify())
      .pipe(gulp.dest('public'));

});


gulp.task('bundle_css', function(){

    return gulp.src(['./css/*.css'])
        .pipe(gp_concat('concat.css'))
        .pipe(gulp.dest('public'))
        //.pipe(gp_rename('uglify.js'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public'));

  return gulp.src(['./css/*.css'])
      .pipe(gp_concat('concat.css'))
      .pipe(gulp.dest('public'))
      //.pipe(gp_rename('uglify.js'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('public'));

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


/*
gulp.task('installation'), function () {

    gulp.task('css'),
        gulp.task('js'),
        gulp.task('bundle_js'),
        gulp.task('bundle_css'),
        gulp.task('zip')
}
*/




