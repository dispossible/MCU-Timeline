import { series, parallel, src, dest, watch } from 'gulp';

import webpack  from 'webpack-stream';
import webpackConfig from './webpack.config';
import del from 'del';

import imageMin from 'gulp-imagemin';
import postCss from 'gulp-postcss';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import htmlMin from 'gulp-htmlmin';
import inject from 'gulp-inject-string';

import { parseData, getHtml } from './src/js/objects/timeline';
import mcuData from './src/js/data.json';


function clean(){
    return del(['dist/*']);
}

function staticFiles(){
    return src(["src/*.*","!src/*.html"])
        .pipe(dest("dist/"));
}

function runWebpack(){
    return src('src/js/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(dest("dist/"));
}

function compressImages(){
    return src("src/img/**/*.{jpg,png,gif,svg}")
        .pipe(imageMin())
        .pipe(dest("dist/img/"));
}

function styling(){
    return src("src/css/template.scss")
        .pipe(sass().on('error',sass.logError))
        .pipe(postCss())
        .pipe(rename("style.css"))
        .pipe(dest("dist/"));
}

function createHtml(){
    const list = getHtml( parseData(mcuData.shows) );
    return src("src/index.html")
        .pipe(inject.replace("{{prerender}}",list))
        .pipe(htmlMin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(dest("dist/"));
}



export default series( clean, parallel(staticFiles, runWebpack, compressImages, styling, createHtml) );

export function watcher(cb){
    watch("src/js/**",runWebpack);
    watch("src/img/**",compressImages);
    watch("src/css/**",styling);
    watch("src/*.html",createHtml);
    watch(["src/*.*","!src/*.html"],staticFiles);
    cb();
};