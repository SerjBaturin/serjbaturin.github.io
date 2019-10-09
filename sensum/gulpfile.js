const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function css() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("./"));
}

function watch() {
  browserSync.init({
    server: "./",
  });

  gulp.watch("./scss/*.scss", css);
  gulp.watch("./index.html").on("change", browserSync.reload);
  gulp.watch("./js/js.js").on("change", browserSync.reload);
  gulp.watch("./scss/*.scss").on("change", browserSync.reload);
}

exports.css = css;
exports.watch = watch;
