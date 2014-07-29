var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('js', function () {
    gulp.src(['src/app.js', 'src/**/*.js'])
        .pipe(sourcemaps.init())
            .pipe(concat('main.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('target'))
});

gulp.task('watch', ['js'], function () {
    gulp.watch('src/**/*.js', ['js'])
})