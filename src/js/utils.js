import padStart from 'lodash/padStart';
import Episode from './objects/episode';
import Show from './objects/show';
import isArray from 'lodash/isArray';
import { showNames } from './objects/ShowType';

export function parseData(dataIn){
    const data = [];
    dataIn.forEach(show=>{
        if(isArray(show.episodes)){
            show.episodes.forEach(episode=>{
                data.push( new Episode(show, episode) );
            });
        } else {
            data.push( new Show(show) );
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
        "September",
        "October",
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


export function getFilterLists(data){
    const phases = data.reduce((ps, show) => {
            if( !ps.includes(show.phase) ){
                ps.push(show.phase);
            }
            return ps;
        }, [])
        .sort()
        .map(p => [p, p === 0 ? "None" : p.toString() ]);
    const types = Object.entries(showNames);
    return {
        phases,
        types,
    };
}