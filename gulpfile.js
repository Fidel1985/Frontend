const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

let watch = function() {
    browserSync.init({
        server: './dist'
    });
    gulp.watch('src/**/*', gulp.series('build'));
    gulp.watch('dist/*').on('change', browserSync.reload);
};

let build = function () {
    copy();
    return gulp.src('src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
};

let copy = function () {
    return gulp
        .src(['src/index.html', 'src/css/styles.css'])
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
};

let start = function () {
    build();
    watch();
};

gulp.task('build', function() { return build(); });
gulp.task('start', function() { return start(); });
