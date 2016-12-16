//Vars
var src = "src";
var dist = "dist";


//imports
import pkg from './package.json';
import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();



//Tasks
gulp.task("default", ()=>
    runSequence(
        "clean",
        "js"
    )
);

gulp.task('clean', ()=>
    del(
        ['.tmp', 'dist/*'],
        { dot: true }
    )
);





//JS

gulp.task("lint", ()=>
    gulp
        .src(src+"/js/**/*.js")
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
);


gulp.task("js", ['lint'], ()=>
    gulp
        .src([
            src+"/js/**/*.js"
        ])
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.concat("js.js"))
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest(dist+"/js"))
        .pipe($.size({title: "javascript"}))
);




//Images

gulp.task("images", ()=>
    gulp
        .src(src+"/img")
        .pipe($.imagemin())
        .pipe(gulp.dest(dist+"/img"))
        .pipe($.size({title: "images"}))
);