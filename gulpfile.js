const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

const AWESOME_APPS_PATH = {
  css: './apps/awesome-app/src/tailwind-custom.css',
  config: './tailwind.config.js',
  dist: './apps/awesome-app/src/'
};

const PATH = AWESOME_APPS_PATH;

gulp.task('tailwind', () => {
  return gulp
    .src(PATH.css)
    .pipe(postcss([tailwindcss(PATH.config), require('autoprefixer')]))
    .pipe(gulp.dest(PATH.dist));
});
