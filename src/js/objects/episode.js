class Episode extends Show {

    constructor(show, episode){
        super(episode.title, episode.releaseDate, "Episode");
        this.show = show.name;
        this.season = episode.season;
        this.episodeNumber = episode.episode;
    }

}