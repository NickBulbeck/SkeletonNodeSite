var gulp = require('gulp'),
	watch = require('gulp-watch');


gulp.task('default',function(){
	console.log("Default gulp task ran successfully.");
});

gulp.task('html',function(){
	console.log("index.html has changed.");
})

gulp.task('styles',function(){
	console.log("One or more stylesheets has changed");
})

gulp.task('watch',function(){

	watch('./app/index.html',function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});

});