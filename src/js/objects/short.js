class Short extends Show {

    constructor(show){
        let crono = ( _.isNumber(show.cronoOrder) )? show.cronoOrder : show.watchOrder + 100000;
        super(show.name, show.releaseDate, show.watchOrder, crono, "short");
    }

}