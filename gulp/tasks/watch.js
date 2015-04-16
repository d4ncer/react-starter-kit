var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['watchify', 'browserSync'], function () {
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.markup.src, ['markup']);
});