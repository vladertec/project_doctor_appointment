const gulp = require('gulp');
const html = require('./gulp-tasks/htmlTask').html;
const clean = require('./gulp-tasks/cleanTask').clean;
const css = require('./gulp-tasks/cssTask').styles;
const js = require('./gulp-tasks/jsTask').js;
const img = require('./gulp-tasks/imgTask').img;
const browserSync = require('browser-sync').create();

function watchFiles() {
    gulp.watch(['src/'], buildTask())
}

function buildTask() {
    return gulp.series(clean, gulp.parallel(html, css, js, img));
}

function serve () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    browserSync.watch('src', browserSync.reload)
};

exports.build = buildTask();
exports.dev = gulp.parallel(watchFiles, serve);

