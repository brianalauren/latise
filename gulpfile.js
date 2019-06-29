var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCss = require("gulp-clean-css");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var runSequence = require("run-sequence");

sass.compiler = require("node-sass");

gulp.task("build", function(callback) {
  runSequence("clean:dist", ["sass", "html", "java", "images"], callback);
});

gulp.task("sass", function() {
  return gulp
    .src("src/css/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      cleanCss({
        compatibility: "ie8"
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("html", function() {
  return gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("java", function() {
  return gulp
    .src("src/js/*")
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("images", function() {
  return gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});

gulp
  .watch("src/*.html", gulp.series(gulp.parallel("html")))
  .on("change", browserSync.reload);
gulp.watch("src/css/*", gulp.series(gulp.parallel("sass")));
gulp.watch("src/js/*", gulp.series(gulp.parallel("java")));
gulp.watch("src/img/*", gulp.series(gulp.parallel("images")));

gulp.task(
  "default",
  gulp.series(gulp.parallel("html", "sass", "java", "images", "watch"))
);
