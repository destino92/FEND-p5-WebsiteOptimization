var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	concatify = require('gulp-concat'),
	imageop = require('gulp-image-optimization'),
	sourcemaps = require('gulp-sourcemaps'),
	imageResize = require('gulp-image-resize');

gulp.task('scripts', function(){
	return gulp.src('js/*.js')
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concatify('perfmatters.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('images', function(){
	return gulp.src(['img/profilepic.jpg','views/images/pizzeria.jpg'])
		.pipe(imageop({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/img/'));
});

gulp.task('imgResize',function(){
	return gulp.src('dist/img/pizzeria.jpg')
		.pipe(imageResize({
			width: 115,
			height: 62,
			crop: true,
			upscale: false,
			quality: 0.6,
			imageMagick: true
		}))
		.pipe(gulp.dest('dist/img/'));
});

gulp.task('copy', function(){
	return gulp.src(['index.html','css/print.css'], {base: './'})
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function(){
	return gulp.src('css/style.css')
		//.pipe(sourcemaps.init())
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(concatify('style.min.css'))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['minify-css','scripts','copy','images','imgResize']);