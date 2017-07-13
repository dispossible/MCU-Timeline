class Episode extends Show {

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

    }


    getHtml(episodes){

        let html = `<div class="timeline-card timeline-card_${this.type} ${(this.releaseDate > _.now())?"is-unreleased":""}">

                <div class="timeline-type"> TV </div>`+

                `<div class="timeline-detail">

                    <h2 class="timeline-title"> ${this.show} <span class="timeline-subTitle"> Season ${this.season} </span> </h2>
                    
                    <h3 class="timeline-epsTitle">Episodes</h3>

                    <ol class="timeline-eps">
                        ${episodes}
                    </ol>

                </div>

            </div>`;

        return html;

    }

    getEpisode(){

        let html = `<li class="timeline-ep ${(this.releaseDate > _.now())?"is-unreleased":""}">
                <span class="timeline-epNum"> ${this.episodeNumber} </span>
                <span class="timeline-epName"> ${this.name} </span>
            </li>`;

        return html;

    }

}