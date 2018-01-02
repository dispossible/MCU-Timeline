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
        this.showFilms = true;
        this.showTV = true;
        this.showShorts = true;

        this.order = "watch";

        this.flipOrder = false;


        //Bind ctrls
        $("[data-toggle]").on("click",{"that":this},function(e){

            if( $(this).attr("data-toggle") === "tv" )
                e.data.that.showTV = !e.data.that.showTV;

            if( $(this).attr("data-toggle") === "short" )
                e.data.that.showShorts = !e.data.that.showShorts;

            if( $(this).attr("data-toggle") === "film" )
                e.data.that.showFilms = !e.data.that.showFilms;

            e.data.that.setClasses();
            e.data.that.sort();
            e.data.that.render();

        });

        $("[data-sort]").on("change",{"that":this},function(e){

            e.data.that.order = $(this).val();

            e.data.that.sort();
            e.data.that.render();

        });

        $("[data-flip]").on("click", e => {

            this.flipOrder = !this.flipOrder;

            if( this.flipOrder ) this.el.parent().addClass("is-flipped");
            else this.el.parent().removeClass("is-flipped");

            this.sort();
            this.render();

        });

        this.setClasses();
        this.sort();
        this.render();
    }


    setClasses(){

        if( this.showTV ) this.el.parent().addClass("is-showTv");
        else this.el.parent().removeClass("is-showTv");

        if( this.showShorts ) this.el.parent().addClass("is-showShorts");
        else this.el.parent().removeClass("is-showShorts");

        if( this.showFilms ) this.el.parent().addClass("is-showFilms");
        else this.el.parent().removeClass("is-showFilms");

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

        if( this.flipOrder ){
            this.data.reverse();
        }

    }


    render(){

        let list = "";

        for( let i = 0 ; i < this.data.length ; i++ ){

            let show = this.data[i];

            if( !show.isVisible(this.showFilms, this.showTV, this.showShorts) ){
                continue;
            }

            if( show.type === "episode" ){

                let eps = "";

                for( var ii = i ; ii < this.data.length ; ii++ ){
                    let show2 = this.data[ii];
                    if( show2.show === show.show ){
                        eps += show2.getEpisode();
                    } else if( show2.isVisible(this.showFilms, this.showTV, this.showShorts) ) {
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