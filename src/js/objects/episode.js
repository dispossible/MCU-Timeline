import Show from './show';
import isString from 'lodash/isString';
import { writeShortDate } from '../utils';

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

        this.show = show.name;
        this.season = episode.season;
        this.episodeNumber = episode.episode;
        this.episodeNotes = episode.notes;
        this.imgSrc = show.img;

    }

}