const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyjs = require('gulp-js-minify');

function jsBuild() {
    return gulp.src('src/js/*.js') // подумать как сделать перенос в новом проекте. у нас будет папка со скриптами
        .pipe(concat('scripts.min.js'))
        .pipe(minifyjs())
        .pipe(gulp.dest('dist/js'));
}

exports.js = jsBuild;