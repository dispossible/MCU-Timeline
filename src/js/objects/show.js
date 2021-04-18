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
        this.showType = show.type;
        this.order = show.watchOrder;
        this.crono = crono;
        this.imgSrc = show.img;
        this.notes = show.notes;

    }

    isVisible(showFilm,showOtherTv,showShort,showMCUTV,showDefendersTv,showWebShow){
        return (
            (this.type === "film" && showFilm) ||
            (this.showType === "Other TV" && showOtherTv) ||
            (this.showType === "Web Show" && showWebShow) ||
            (this.showType === "Defenders TV" && showDefendersTv) ||
            (this.showType === "MCU TV" && showMCUTV) ||
            (this.type === "short" && showShort)
        );
    }

}