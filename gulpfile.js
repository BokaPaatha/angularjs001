var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
// requires browserify and vinyl-source-stream
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('default', [ 'connect', 'watch' ])

// Create a basic server. Serve it from public folder on port 4000.
gulp.task('connect',  function() {
	connect.server({
		root : 'public',
		port : 4000
	})
})

// Take the Angular file and make it usable.
gulp.task('browserify', function() {
	// Grabs the app.js file
	return browserify('./app/app.js')
	// bundles it and creates a file called main.js
	.bundle().pipe(source('main.js'))
	// saves it the public/js/ directory
	.pipe(gulp.dest('./public/js/'));
})

// Watch for any change in js file and browserify them
gulp.task('watch', function() {
    gulp.watch('./app/**/*.js', ['browserify'])
    gulp.watch('./sass/**/*.sass', ['sass'])
})

// Compile sass files into css 
gulp.task('sass', function() {
    return sass('./sass/*.sass')
        .pipe(gulp.dest('public/css'))
})