var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('js', function () {
    gulp.src(['src/app.js', 'src/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('target'))
});

gulp.task('watch', ['js'], function () {
    gulp.watch('src/**/*.js', ['js'])
})