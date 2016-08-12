const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './dist'
  })
  gulp.watch('src/**', ['html'])
  gulp.watch('src/sass/*.scss', ['sass'])
  gulp.watch('dist/*.html').on('change', browserSync.reload)
})
gulp.task('html', function(){
  gulp.src('src/html/*.html').pipe(gulp.dest('dist'))
  gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'))
})
gulp.task('sass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['serve'])

// example task construction
// gulp.task('{command line command}', ['{task that will run}'])
