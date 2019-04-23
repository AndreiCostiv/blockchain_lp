const
    gulp = require('gulp'),
    sass = require ('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

const path = {
    sassMain: './src/sass/main.sass',
    sassAll: './src/sass/*.sass',
    sassDest: './src/css/',
    cssMain: './src/css/main.css',
    cssDest: './cssProduction/'
};

const style = () => (
    gulp
        .src(path.sassMain)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(path.sassDest))
);

const production = () => (
    gulp.src(path.cssMain)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path.cssDest))
);

const watch = () => gulp.watch( path.sassAll, style );

exports.watch = watch;
exports.style = style;
exports.production = production;