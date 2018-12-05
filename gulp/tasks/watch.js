var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

  gulp.task('watch',function(){

    gulp.start('styles');

    browserSync.init({
      notify: false, // stops a wee notification appearing when the page is updated
      server: {
        baseDir: "app" // relative to where gulpfile.js is
      }
    })

    watch('./app/index.html',function(){
      browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css',function(){
      gulp.start('cssInject');
    });

  });

  gulp.task('cssInject', ['styles'],function(){
    return gulp.src('./app/temp/styles/styles.css')
          .pipe(browserSync.stream());
  });