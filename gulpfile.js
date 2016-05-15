var gulp = require('gulp');

// include plug-ins
var htmlmin = require('gulp-htmlmin'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	stripDebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	autoprefix = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css');

// minify new images
gulp.task('imagemin', function() {
  gulp.src('src/img/*')
    .pipe(imagemin([imagemin.jpegtran(), imagemin.optipng()]))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('pizzaimg', function() {
  gulp.src('src/views/images/*')
    .pipe(imagemin(imagemin.jpegtran(), imagemin.optipng()))
    .pipe(gulp.dest('dist/views/images/*'));
});


// htmlmin tastk
gulp.task('htmlmin', function(){
	return gulp.src(['src/*.html'])
		.pipe(htmlmin({collapseWhitespace: true,
						removeComments: true,
						minifyJS: true
					}))
    	.pipe(gulp.dest('dist/'))
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  	return gulp.src(['src/css/*.css'])
    	.pipe(concat('style.css'))
    	.pipe(autoprefix('last 2 versions'))
    	.pipe(cleanCSS())
    	.pipe(gulp.dest('dist/css/'))
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', function(){
  	gulp.watch('src/*.html',['htmlmin']);
  	gulp.watch('src/js/*.js',['scripts']);
  	gulp.watch('src/css/*.css', ['styles']);
  	gulp.watch('src/views/images/*', ['imagemin']);
  	gulp.watch('src/img/*', ['pizzaimg']);
})

// default gulp task
gulp.task('default', ['watch']);
