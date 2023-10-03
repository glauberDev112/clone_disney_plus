const gulp = require('gulp')
const js_mimi = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const lessC = require('gulp-less')
const replace = require('gulp-replace')
gulp.task('html', (callback) => {
    return gulp.src('src/index.html')
        .pipe(replace('@@ENDERE_O_DO_JS','./scripts/main.js'))
        .pipe(replace('@@ENDERE_O_DO_CSS','./styles/main.css'))
        .pipe(gulp.dest('dist/'))
        .on('end', callback);
})
gulp.task('img',(callback) => {
    return gulp.src('src/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
        .on('end', callback)
})
gulp.task('img_dirs',(callback) => {
    return gulp.src('src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
        .on('end', callback)
})
gulp.task('js',(callback) => {
    return gulp.src('src/scripts/*.*')
        .pipe(js_mimi())
        .pipe(gulp.dest('dist/scripts'))
        .on('end', callback)
})
gulp.task('less', (callback) => {
    return gulp.src('src/styles/*.less')
        .pipe(lessC())
        .pipe(gulp.dest('dist/styles/'))
        .on('end', callback)
})
gulp.task('less_dirs', (callback) => {
    return gulp.src('src/styles/**/*.less')
        .pipe(lessC())
        .pipe(gulp.dest('dist/styles/'))
        .on('end', callback)
})
function watch (path,fun) {
    return (e) => (gulp.watch(path,gulp.series(fun)).on('end',e))
}
gulp.task('default', gulp.parallel('html', 'img','img_dirs', 'js', 'less'))
gulp.task('dev',gulp.parallel(watch('src/index.html','html'),watch('src/images/*.*','img'),watch('src/images/**/*.*','img_dirs'),watch('src/scripts/*.*','js'),watch('src/styles/*.less','less'),watch('src/styles/**/*.less','less_dirs')))