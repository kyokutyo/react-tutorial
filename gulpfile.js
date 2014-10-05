var gulp = require('gulp');
var webserver = require('gulp-webserver');

//Webサーバー
gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
        }));
});

gulp.task('default', ['webserver']);
