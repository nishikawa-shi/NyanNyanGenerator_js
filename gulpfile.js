const gulp = require('gulp')
const sass = require('gulp-sass')
const concatCss = require('gulp-concat-css')

const paths = {
    'src': {
      'scss': 'src/*.scss',
    },
    'dist': {
      'css': 'public/assets/',
    }
};

gulp.task('sassBuild', done => {
    gulp.src(paths.src.scss)
    .pipe(sass({
        outputStyle: 'expanded',
    }))
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest(paths.dist.css))
    done()
})
