// const gulp = require('gulp');
// const browserSync = require('browser-sync');
// const sass = require('gulp-sass');
// const rename = require("gulp-rename");
// const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');


// // Static server
// gulp.task('server', function () {
//     browserSync.init({
//         server: {
//             baseDir: "src"
//         }
//     });
// });
// gulp.task('styles', function () {
//     return gulp.src("src/sass/*.+(scs|sass")
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(rename({
//             prefix: "",
//             suffix: ".min",
//         }))
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(cleanCSS({ compatibility: 'ie8' }))
//         .pipe(gulp.dest("src/css"))
//         .pipe(browserSync.stream());
// });

// gulp.task('watch', function () {
//     gulp.watch("src/sass/*.+(scs|sass", gulp.parallel("styles"));
//     gulp.watch("src/*.html").on("change", browserSync.reload);
// });
// gulp.task('default', gulp.parallel('watch', 'server', 'styles'));

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function () {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));