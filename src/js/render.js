import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import { writeDate, writeShortDate } from './utils';

export default function render(data, showFilms = true, showTV = true, showShorts = true, flipOrder = true){

    const showList = [];

    data.forEach( show => {
        if( !show.isVisible(showFilms, showTV, showShorts) ) return;
        if( show.type === "episode" ){
            if( 
                isArray(showList[showList.length-1]) &&
                showList[showList.length-1][0].type === "episode" &&
                showList[showList.length-1][0].show === show.show &&
                showList[showList.length-1][0].season === show.season
            ){
                showList[showList.length-1].push(show);
            }
            else {
                showList.push([show]);
            }
        }
        else {
            showList.push(show);
        }
    });

    return showList.map((show, i) => {
        var index = flipOrder? showList.length - i : i + 1;

        if( isArray(show) ){
            const isReleased = !!show.find( ep => ep.releaseDate < Date.now() );
            return buildTimelineEpisodesCard(show, index, isReleased);
        }
        return buildTimelineCard(show, index);
    }).join("");

}


function buildTimelineCard(show, index){
    return buildCard({
        index,
        imgSrc: show.imgSrc,
        type: show.type,
        isReleased: show.releaseDate < Date.now(),
        releaseDate: show.releaseDate,
        name: show.name,
        notes: show.notes
    });
}

function buildTimelineEpisodesCard(episodes, index, isReleased){
    return buildCard({
        index, 
        imgSrc: episodes[0].imgSrc,
        type: 'tv',
        isReleased, 
        name: episodes[0].show,
        notes: episodes[0].notes, 
        season: episodes[0].season,
        additionalHtml: `<div class="timeline-eps">
                <h3 class="timeline-epsTitle">Episodes</h3>
                <ol class="timeline-epList">
                    ${episodes.reduce((prev, ep) => prev + buildTimelineEpisode(ep), "" )}
                </ol>
            </div>`
    });
}

function buildCard({index, imgSrc, type, isReleased, releaseDate, name, notes, season, additionalHtml}){
    imgSrc = (isString(imgSrc))? `img/poster/${imgSrc}` : `img/poster/default.jpg`;
    return `<li>
            <div class="timeline-card timeline-card_${type} ${!isReleased?"is-unreleased":""}">
                <div class="timeline-posterFrame">
                    <img class="timeline-poster" src="${imgSrc}" alt="Poster for ${name}"/>
                </div>
                <div class="timeline-detail">
                    <div class="timeline-vol"> ${index} </div>
                    <div class="timeline-type"> ${type} </div>
                    <h2 class="timeline-title"> ${name} </h2>
                    ${season?`<small class="timeline-subTitle"> Season ${season} </small>`:``}
                    ${releaseDate?`<time class="timeline-date">${isReleased?'Released':'Releases'}: ${writeDate(releaseDate)}</time>`:``}
                    ${notes?`<div class="timeline-notes">${notes}</div>`:``}
                    ${additionalHtml?additionalHtml:``}
                </div>
            </div>
        </li>`;
}

function buildTimelineEpisode(episode){
    return `<li class="timeline-ep ${(episode.releaseDate > Date.now())?"is-unreleased":""}">`+
            `<span class="timeline-epNum"> ${episode.episodeNumber} </span>`+
            `<span class="timeline-epName">
                ${episode.name}
                ${(episode.episodeNotes)?`<div class="timeline-notes timeline-notes_episode">${episode.episodeNotes}</div>`:``}
            </span>`+
            `<time class="timeline-release"> ${writeShortDate(episode.releaseDate)} </time>`+
        `</li>`;
}