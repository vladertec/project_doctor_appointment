const gulp = require('gulp');

function htmlTask() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
}

exports.html = htmlTask;