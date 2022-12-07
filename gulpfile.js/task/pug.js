const { src, dest } = require('gulp');

//Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Плагины
const plumber = require('gulp-plumber');
const pugs = require('gulp-pug');
const webpHtml = require('gulp-webp-html');

const pug = () => {
    return src(path.pug.src)
        .pipe(plumber())
        .pipe(pugs(app.pug))
        .pipe(webpHtml())
        .pipe(dest(path.pug.dest))
}

module.exports = pug;