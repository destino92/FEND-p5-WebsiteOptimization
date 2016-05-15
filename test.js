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
		.pipe(imageop({
			optimizationLevel: 5,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/views/images/'));
})

gulp.task('pizzeriaJPG',function(){
	return gulp.src('views/images/pizzeria.jpg')
		.pipe(imageop({
			optimizationLevel: 5,
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