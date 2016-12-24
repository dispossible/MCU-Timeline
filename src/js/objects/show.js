class Show {

    constructor(name, releaseDate, order, crono, type){

        this.name = name;
        this.releaseDate = new Date(...releaseDate);
        this.type = type;
        this.order = order;
        this.crono = crono;

    }


    getHtml(){

        let html = `<div class="timeline-card timeline-card_${this.type}">

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