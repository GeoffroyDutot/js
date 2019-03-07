//gulpfile.js
var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets');
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
});


gulp.task('bundle_css', function(){
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




