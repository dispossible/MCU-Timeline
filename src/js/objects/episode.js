import Show from './show';

export default class Episode extends Show {

    constructor(show, episode){

        episode.releaseDate.push( episode.episode );

        super({
            name: episode.title,
            releaseDate: episode.releaseDate,
            watchOrder: episode.watchOrder,
            cronoOrder: episode.cronoOrder,
            notes: show.notes,
        }, "episode");

        this.showType = show.type;
        this.show = show.name;
        this.season = episode.season;
        this.episodeNumber = episode.episode;
        this.episodeNotes = episode.notes;
        this.imgSrc = show.img;

    }

}