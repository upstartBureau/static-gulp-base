const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')

gulp.task('serve', ['sass', 'move'], function() {
  browserSync.init({
    server: './dist',
    port:1337
  })
  gulp.watch('src/**', ['move'])
  gulp.watch('src/sass/*.scss', ['sass'])
  gulp.watch('dist/*.html').on('change', browserSync.reload)
})
gulp.task('move', function(){
  gulp.src('src/html/*.html').pipe(gulp.dest('dist'))
  gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'))
  gulp.src('src/sass/fonts/**').pipe(gulp.dest('dist/css/fonts'))
  gulp.src('src/img/**').pipe(gulp.dest('dist/img'))
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
