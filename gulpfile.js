const gulp = require('gulp');
const browserSync = require('browser-sync').create();

let paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',
    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
};

gulp.task('html', function () {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.dist));
});

gulp.task('css', function () {
    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.dist));
});

gulp.task('js', function () {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.dist));
});

gulp.task('copy', gulp.series('html', 'css', 'js'));

gulp.task('watch', function() {
    browserSync.init({
        server: paths.dist
    });
    gulp.watch(paths.src, gulp.series('copy'));
    gulp.watch(paths.dist).on('change', browserSync.reload);
});

gulp.task('start', gulp.series('copy', 'watch'));
