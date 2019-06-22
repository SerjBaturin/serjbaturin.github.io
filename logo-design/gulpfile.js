const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

function css () {
  return gulp.src('./styles.scss')
  .pipe(sass())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('./'))
}

function watch () {
  browserSync.init({
    server: './'
  })

  gulp.watch('./styles.scss', css)
  gulp.watch('./index.html').on('change', browserSync.reload)
  gulp.watch('./styles.scss').on('change', browserSync.reload)
}

exports.watch = watch