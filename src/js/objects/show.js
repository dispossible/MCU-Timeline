import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

export default class Show {

    constructor(show){

        let crono = ( isNumber(show.cronoOrder) )? show.cronoOrder : show.watchOrder;

        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

        if( isString(show.releaseDate[1]) ){
            show.releaseDate[1] = months.indexOf( show.releaseDate[1] );
        }

        this.name = show.name;
        this.releaseDate = new Date(...show.releaseDate);
        this.type = show.type;
        this.order = show.watchOrder;
        this.crono = crono;
        this.imgSrc = show.img;
        this.notes = show.notes;
        this.phase = show.phase ?? 0;

    }

    isVisible(filters){
        return (
            (filters.PHASE.includes(this.phase) || filters.PHASE.length === 0) &&
            (filters.TYPE.includes(this.type) || filters.TYPE.length === 0)
        );
    }

}