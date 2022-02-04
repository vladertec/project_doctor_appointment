
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function imgMin() {
    return gulp.src('src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

exports.img = imgMin;
