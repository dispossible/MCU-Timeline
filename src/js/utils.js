import padStart from 'lodash/padStart';
import Episode from './objects/episode';
import Film from './objects/film';
import Short from './objects/short';

export function parseData(dataIn){
    const data = [];
    dataIn.forEach(show=>{
        if( show.type === "Television" || show.type === "MCU TV" ){
            show.episodes.forEach(episode=>{
                data.push( new Episode(show, episode) );
            });
        } else
        if( show.type === "Film" ){
            data.push( new Film(show) );
        } else
        if( show.type === "Short Film" ) {
            data.push( new Short(show) );
        }
    });
    return data;
};

export function writeDate(date){

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "October",
        "September",
        "November",
        "December",
    ];

    let suffix = "th";
    if( date.getDate() % 10 === 1 && date.getDate() !== 11 ) suffix = "st";
    if( date.getDate() % 10 === 2 && date.getDate() !== 12 ) suffix = "nd";
    if( date.getDate() % 10 === 3 && date.getDate() !== 13 ) suffix = "rd";

    return date.getDate() + "<sup>" + suffix + "</sup> " + months[date.getMonth()] + " " + date.getFullYear();

}

export function writeShortDate(date){
    return padStart(date.getDate(), 2, "0") + "/" + padStart(date.getMonth() + 1, 2, "0") + "/" + date.getFullYear();
}


export function sortData(data, order, flipOrder){
    if( order === "release" ){
        data.sort((a,b)=>{
            if( a.releaseDate === b.releaseDate ){
                return a.order - b.order;
            }
            return a.releaseDate - b.releaseDate;
        });
    } else

    if( order === "watch" ){
        data.sort((a,b)=>{
            return a.order - b.order;
        });
    } else

    if( order === "crono" ){
        data.sort((a,b)=>{
            return a.crono - b.crono;
        });
    }

    if( flipOrder ){
        data.reverse();
    }

    return data;
}
