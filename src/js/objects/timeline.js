class Timeline{

    constructor(el, dataIn){

        this.el = el;

        //this.data = data;

        //Load Data
        this.data = [];
        dataIn.forEach(show=>{
            if( show.type === "Television" ){
                show.episodes.forEach(episode=>{
                    this.data.push( new Episode(show, episode) );
                });
            } else
            if( show.type === "Film" ){
                this.data.push( new Film(show) );
            } else
            if( show.type === "Short Film" ) {
                this.data.push( new Short(show) );
            }
        });


        //Ctrls
        this.showTV = true;
        this.showShorts = true;

        this.order = "watch";


        //Bind ctrls
        $("[data-toggle]").on("click",{"that":this},function(e){

            if( $(this).attr("data-toggle") === "tv" )
                e.data.that.showTV = !e.data.that.showTV;

            if( $(this).attr("data-toggle") === "short" )
                e.data.that.showShorts = !e.data.that.showShorts;

            e.data.that.render();

        });

        



        this.sort();
        this.render();
    }


    sort(){

        if( this.order === "release" ){
            this.data.sort((a,b)=>{
                return a.releaseDate - b.releaseDate;
            });
        } else

        if( this.order === "watch" ){
            this.data.sort((a,b)=>{
                return a.order - b.order;
            });
        } else

        if( this.order === "crono" ){
            this.data.sort((a,b)=>{
                return a.crono - b.crono;
            });
        }

    }


    render(){

        let list = "";

        for( let i = 0 ; i < this.data.length ; i++ ){

            let show = this.data[i];
            if( show.type === "short" && !this.showShorts ) return;
            if( show.type === "episode" && !this.showTV ) return;


            if( show.type === "episode" ){

                let eps = "";

                for( var ii = i ; ii < this.data.length ; ii++ ){
                    let show2 = this.data[ii];
                    if( show2.show === show.show ){
                        eps += show2.getEpisode();
                    } else {
                        break;
                    }
                }
                i = ii-1;

                list += show.getHtml(eps);

            } else {
                list += show.getHtml();
            }

        }

        this.el.html(list);

    }


}