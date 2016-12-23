//Load fonts
WebFont.load({
    google: {
        families: ['Open Sans', 'Passion One']
    }
});


//Global
w.MCU = {};


//Load Data
let data = [];

mcuData.forEach(function(show){

    if( show.type === "Television" ){
        show.episodes.forEach(function(episode){
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

MCU.data = data;





// data.sort((a,b)=>{
//     return a.releaseDate - b.releaseDate;
// });