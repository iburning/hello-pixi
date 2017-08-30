/**
 * @fileoverview gulpfile
 * @author burning (www.cafeinit.com)
 * @version 2017.08.30
 */

const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
// const pug = require('gulp-pug')

const autoprefix = new LessAutoprefix({ browsers: ['last 5 versions'] })

// tasks
// gulp.task('default', ['views', 'style', 'copy'])
gulp.task('default', ['script', 'views', 'style', 'assets'])

gulp.task('script', () => {
  return gulp.src([
    './node_modules/pixi.js/dist/*',
    './bower_components/bump/bin/*',
    './bower_components/contain/contain.js',
    './bower_components/keyboard/keyboard.js',
    './bower_components/scaleToWindow/scaleToWindow.js',
    './bower_components/tink/bin/*',
  ])
    .pipe(gulp.dest('./dist/script'))
})

gulp.task('views', () => {
  return gulp.src([
    './src/*/*.html'
  ])
    .pipe(gulp.dest('./dist'))
})

gulp.task('assets', () => {
  return gulp.src([
    './src/*/assets/*'
  ])
    .pipe(gulp.dest('./dist'))
})

gulp.task('style', () => {
  return gulp.src([
    './src/style/*.less'
  ])
    .pipe(less({
      plugins: [ autoprefix ]
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/style'))
})
