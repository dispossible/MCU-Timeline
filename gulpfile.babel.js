import { series, parallel, src, dest, watch } from 'gulp';

import webpack  from 'webpack-stream';
import webpackConfig from './webpack.config';
import del from 'del';
import browserSync from 'browser-sync';
const bs = browserSync.create();

import postCss from 'gulp-postcss';
import postCssPresetEnv from 'postcss-preset-env';
import postCssImport from 'postcss-import';
import precss from 'precss';
import cssNano from 'cssnano';
import postCssScss from 'postcss-scss';

import imageMin from 'gulp-imagemin';
import rename from 'gulp-rename';
import htmlMin from 'gulp-htmlmin';
import inject from 'gulp-inject-string';

import { parseData, sortData, getFilterLists } from './src/js/utils';
import mcuData from './src/js/data.json';
import { defaults } from './src/js/components/timeline';
import render, { buildFilterList } from './src/js/render';



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
        .pipe(postCss([
            postCssImport(),
            precss(),
            postCssPresetEnv({ stage: 0, features: {
                'color-mod-function': true
            }}),
            cssNano(),
        ], {
            parser: postCssScss,
        }))
        .pipe(rename("style.css"))
        .pipe(dest("dist/"))
        .pipe(bs.stream());
}

function createHtml(){
    const data = sortData(parseData(mcuData.shows), defaults.order, defaults.flipOrder);
    const html = render(data, defaults.filters, defaults.flipOrder);

    const filters = getFilterLists(data);
    const phases = buildFilterList("PHASE", filters.phases, defaults.filters.PHASE);
    const types = buildFilterList("TYPE", filters.types, defaults.filters.TYPE);

    return src("src/index.html")
        .pipe(inject.replace("{{prerenderList}}", html))
        .pipe(inject.replace("{{prerenderPhase}}", phases))
        .pipe(inject.replace("{{prerenderType}}", types))
        .pipe(htmlMin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(dest("dist/"));
}

const build = series( clean, parallel(staticFiles, runWebpack, compressImages, styling, createHtml) );

export default build;


function startServer(){
    bs.init({
        server: {
            baseDir: "./dist/"
        }
    });

    watch("src/js/**",runWebpack).on("change", bs.reload);
    watch("src/img/**",compressImages).on("change", bs.reload);
    watch("src/css/**",styling);
    watch("src/*.html",createHtml).on("change", bs.reload);
    watch(["src/*.*","!src/*.html"],staticFiles).on("change", bs.reload);
}

export const start = series(build, startServer);