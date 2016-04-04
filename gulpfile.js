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

gulp.task('images', function(){
	return gulp.src(['img/profilepic.jpg','views/images/pizzeria.jpg'])
		.pipe(imageop({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('dist/img/'));
});

gulp.task('copy', function(){
	return gulp.src(['index.html','css/print.css'], {base: './'})
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function(){
	return gulp.src('css/style.css')
		.pipe(sourcemaps.init())
			.pipe(cleanCSS({compatibility: 'ie8'}))
			//.pipe(concatify('style.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css/style.min.css'));
});

gulp.task('default', ['minify-css','scripts','copy']);