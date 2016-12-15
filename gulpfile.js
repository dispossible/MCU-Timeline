//Vars
var src = "src";
var dist = "dist";


//Requires
var gulp = require("gulp");

var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var runSequence = require('run-sequence');



//Tasks
gulp.task("default", function(){
    
    runSequence(
        "js"
    );

});


gulp.task("js", function(){
    
    return gulp
        .src(src+"/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("js.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(dist+"/js"));

});