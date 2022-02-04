const gulp = require('gulp');
const del = require('delete');

function cleanDist() {
    return del('dist');
}

exports.clean = cleanDist;