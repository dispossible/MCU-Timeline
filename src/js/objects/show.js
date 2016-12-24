class Show {

    constructor(show, type){

        let crono = ( _.isNumber(show.cronoOrder) )? show.cronoOrder : show.watchOrder + 100000;

        this.name = show.name;
        this.releaseDate = new Date(...show.releaseDate);
        this.type = type;
        this.order = show.watchOrder;
        this.crono = crono;

    }


    getHtml(){

        let html = `<div class="timeline-card timeline-card_${this.type} ${(this.releaseDate > _.now())?"is-unreleased":""}">

                <div class="timeline-type"> ${this.type} </div>`+

                `<div class="timeline-detail">

                    <h2 class="timeline-title"> ${this.name} </h2>

                    <p class="timeline-date">${this.writeDate(this.releaseDate)} </p>

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

        return date.getDate() + suffix + " " + months[date.getMonth()] + " " + date.getFullYear();

    }

}