const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('js', shell.task([
		'npm run compile'
	])
);
 
gulp.task('default', () => {
	gulp.start('js');
	gulp.watch("src/**/*", ["js"]);
})