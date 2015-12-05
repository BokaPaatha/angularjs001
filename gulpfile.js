var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')

// Create a basic server. Serve it from public folder on port 4000.
gulp.task('connect', function() {
	connect.server({
		root : 'public',
		port : 4000
	})
})