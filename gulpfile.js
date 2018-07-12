const gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
const minifycss = require('gulp-minify-css');
const htmlmin = require('gulp-minify-html');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "public",
            browser: "google chrome",
            notify: false,
            open: "external"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('images', function(){
    gulp.src('src/images/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('public/images/'));
});

gulp.task('styles', function(){
    gulp.src(['src/styles/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('public/styles/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/styles/'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
    gulp.src(['src/scripts/*'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('public/scripts/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/scripts/'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('pages', function() {
    return gulp.src(['./src/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch("src/**/*.html", ['pages']);
    gulp.watch("src/scripts/*", ['scripts']);
    gulp.watch("src/styles/*.scss", ['styles']);
    gulp.watch("src/images/*", ['images']);
    gulp.watch("*.html", ['bs-reload']);
});