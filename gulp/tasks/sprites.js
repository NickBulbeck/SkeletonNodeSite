var gulp = require('gulp'),
svgsprite = require('gulp-svg-sprite');

var config = {
	mode: {
		css: {

		}
	}
}


gulp.task('createSprite', function(){
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgsprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});