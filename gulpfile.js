var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	concatify = require('gulp-concat'),
	imageop = require('gulp-image-optimization'),
	sourcemaps = require('gulp-sourcemaps'),
	imageResize = require('gulp-image-resize');

gulp.task('scripts', function(){
	return gulp.src('js/*.js')
		//.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concatify('perfmatters.min.js'))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('profilepicJPG', function(){
	return gulp.src(['img/profilepic.jpg',])
		.pipe(imageop({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/img/'));
});

gulp.task('pizzaPNG', function(){
	return gulp.src(['views/images/pizza.png'])
		.pipe(imageResize({
			width: 188,
			height: 243,
			crop: true,
			upscale: false,
			quality: 1,
			imageMagick: true,
			progressive: true
		}))
		.pipe(gulp.dest('dist/views/images/'));
})

gulp.task('pizzeriaJPG',function(){
	return gulp.src('views/images/pizzeria.jpg')
		.pipe(imageResize({
			width: 478,
			height: 352,
			quality: 1,
			imageMagick: true,
			progressive: true
		}))
		.pipe(gulp.dest('dist/views/images/'))
		.pipe(imageResize({
			width: 115,
			height: 62,
			crop: true,
			upscale: false,
			quality: 0.6,
			imageMagick: true,
			progressive: true
		}))
		.pipe(gulp.dest('dist/img/'));
});

gulp.task('copy', function(){
	return gulp.src(['index.html','css/print.css','views/*/**'], {base: './'})
		.pipe(gulp.dest('dist'));
});

gulp.task('imgOptimization', ['profilepicJPG','pizzaPNG','pizzeriaJPG'])

gulp.task('minify-css', function(){
	return gulp.src('css/style.css')
		//.pipe(sourcemaps.init())
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(concatify('style.min.css'))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['minify-css','scripts','copy','imgOptimization']);