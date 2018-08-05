import Show from './show';

export default class Episode extends Show {

    constructor(show, episode){

        episode.releaseDate.push( episode.episode );

        super({
            name: episode.title,
            releaseDate: episode.releaseDate,
            watchOrder: episode.watchOrder,
            cronoOrder: episode.cronoOrder,
        }, "episode");

        this.show = show.name;
        this.season = episode.season;
        this.episodeNumber = episode.episode;
        this.imgSrc = show.img;

    }


    getHtml(episodes,isReleased){

        let html = `<div class="timeline-card timeline-card_${this.type} ${isReleased?"":"is-unreleased"}">

                <div class="timeline-posterFrame">
                    <img class="timeline-poster" src="img/poster/${this.imgSrc}" alt="Poster for ${this.name}"/>
                </div>

                <div class="timeline-detail">

                    <div class="timeline-type"> TV </div>

                    <h2 class="timeline-title"> ${this.show} <small class="timeline-subTitle"> Season ${this.season} </small> </h2>

                    <time class="timeline-date">Released: ${this.writeDate(this.releaseDate)}</time>

                </div>

                <div class="timeline-eps">
                    
                    <h3 class="timeline-epsTitle">Episodes</h3>

                    <ol class="timeline-epList">
                        ${episodes}
                    </ol>

                </div>

            </div>`;

        return html;

    }

    getEpisode(){

        let html = `<li class="timeline-ep ${(this.releaseDate > Date.now())?"is-unreleased":""}">`+
                `<span class="timeline-epNum"> ${this.episodeNumber} </span>`+
                `<span class="timeline-epName"> ${this.name} </span>`+
                `<time class="timeline-release"> ${this.writeShortDate(this.releaseDate)} </time>`+
            `</li>`;

        return html;

    }

}