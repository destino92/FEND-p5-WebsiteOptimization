var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	concatify = require('gulp-concat'),
	imageop = require('gulp-image-optimization'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function(){
	return gulp.src('js/*.js')
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concatify('permatters.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'))
});