import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

export default class Show {

    constructor(show, type){

        let crono = ( isNumber(show.cronoOrder) )? show.cronoOrder : show.watchOrder;

        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

        if( isString(show.releaseDate[1]) ){
            show.releaseDate[1] = months.indexOf( show.releaseDate[1] );
        }

        this.name = show.name;
        this.releaseDate = new Date(...show.releaseDate);
        this.type = type;
        this.order = show.watchOrder;
        this.crono = crono;
        this.imgSrc = show.img;
        this.notes = show.notes;
        this.disneyLink = show.disneyLink
        this.primeLink = show.primeLink
        this.youtubeCode = show.youtubeCode

    }

    isVisible(showFilm,showTv,showShort){
        return (
            (this.type === "film" && showFilm) ||
            (this.type === "episode" && showTv) ||
            (this.type === "short" && showShort)
        );
    }

}