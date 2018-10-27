import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import padStart from 'lodash/padStart';

export default class Show {

    constructor(show, type){

        let crono = ( isNumber(show.cronoOrder) )? show.cronoOrder : show.watchOrder + 100000;

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

    }


    getHtml(){

        let imgSrc = (isString(this.imgSrc))? `img/poster/${this.imgSrc}` : `img/poster/default.jpg`;

        let html = `<div class="timeline-card timeline-card_${this.type} ${(this.releaseDate > Date.now())?"is-unreleased":""}">
                <div class="timeline-posterFrame">
                    <img class="timeline-poster" src="${imgSrc}" alt="Poster for ${this.name}"/>
                </div>
                <div class="timeline-detail">
                    <div class="timeline-type"> ${this.type} </div>
                    <h2 class="timeline-title"> ${this.name} </h2>
                    <time class="timeline-date">Released: ${this.writeDate(this.releaseDate)}</time>
                </div>
            </div>`;

        return html;

    }


    writeDate(date){

        const months = [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "October",
            "September",
            "Novemeber",
            "December",
        ];

        let suffix = "th";
        if( date.getDate() % 10 === 1 && date.getDate() !== 11 ) suffix = "st";
        if( date.getDate() % 10 === 2 && date.getDate() !== 12 ) suffix = "nd";
        if( date.getDate() % 10 === 3 && date.getDate() !== 13 ) suffix = "rd";

        return date.getDate() + suffix + " " + months[date.getMonth()] + " " + date.getFullYear();

    }

    writeShortDate(date){
        return padStart(date.getDate(), 2, "0") + "/" + padStart(date.getMonth() + 1, 2, "0") + "/" + date.getFullYear();
    }

    isVisible(showFilm,showTv,showShort){
        return (
            (this.type === "film" && showFilm) ||
            (this.type === "episode" && showTv) ||
            (this.type === "short" && showShort)
        );
    }

}