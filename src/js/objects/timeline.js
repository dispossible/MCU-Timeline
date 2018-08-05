import Episode from './episode';
import Film from './film';
import Short from './short';


export function parseData(dataIn){
    const data = [];
    dataIn.forEach(show=>{
        if( show.type === "Television" ){
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


export function getHtml(data, showFilms = true, showTV = true, showShorts = true){
    let list = "";

    for( let i = 0 ; i < data.length ; i++ ){

        let show = data[i];

        if( !show.isVisible(showFilms, showTV, showShorts) ){
            continue;
        }

        if( show.type === "episode" ){

            let eps = "";
            let isReleased = false;

            for( var ii = i ; ii < data.length ; ii++ ){
                let show2 = data[ii];
                if( show2.show === show.show ){
                    eps += show2.getEpisode();
                    if( show2.releaseDate < Date.now() ){
                        isReleased = true;
                    }
                } else if( show2.isVisible(showFilms, showTV, showShorts) ) {
                    break;
                }
            }
            i = ii-1;

            list += show.getHtml(eps,isReleased);

        } else {
            list += show.getHtml();
        }

    }

    return list;
};



export default class Timeline {

    constructor(el, dataIn){

        this.el = el;
        this.data = parseData(dataIn);


        //Ctrls
        this.showFilms = true;
        this.showTV = true;
        this.showShorts = true;

        this.order = "watch";

        this.flipOrder = false;


        //Bind ctrls
        const toggleBtns = document.querySelectorAll("[data-toggle]");
        if( toggleBtns.length > 0 ){
            toggleBtns[0].parentElement.addEventListener("click", e => {
                const el = e.target.closest("[data-toggle]");
                if( !el ) return;

                if( el.getAttribute("data-toggle") === "tv" ){
                    this.showTV = !this.showTV;
                    gtag({ event: "Toggle TV visibility", value: this.showTV });
                }
                else if( el.getAttribute("data-toggle") === "short" ){
                    this.showShorts = !this.showShorts;
                    gtag({ event: "Toggle Shorts visibility", value: this.showShorts });
                }
                else if( el.getAttribute("data-toggle") === "film" ){
                    this.showFilms = !this.showFilms;
                    gtag({ event: "Toggle Film visibility", value: this.showFilms });
                }

                this.setClasses();
                this.sort();
                this.render();
            });
        }

        const sort = document.querySelector("[data-sort]");
        if( sort ){
            sort.addEventListener("change", e => {
                this.order = e.target.value;
                gtag({ event: "Change sort type", value: this.order });
                this.sort();
                this.render();
            });
        }

        const flip = document.querySelector("[data-flip]");
        if(flip){
            flip.addEventListener("click", e => {
                this.flipOrder = !this.flipOrder;

                if( this.flipOrder ) this.el.parentElement.classList.add("is-flipped");
                else this.el.parentElement.classList.remove("is-flipped");

                gtag({ event: "Flip sort order", value: this.flipOrder });

                this.sort();
                this.render();
            });
        }


        this.el.addEventListener("error", e => {
            if( e.target.tagName === "IMG" ){
                e.target.remove();
            }
        }, true);


        this.setClasses();
        this.sort();
        this.render();
    }

    setClasses(){

        if( this.showTV ) this.el.parentElement.classList.add("is-showTv");
        else this.el.parentElement.classList.remove("is-showTv");

        if( this.showShorts ) this.el.parentElement.classList.add("is-showShorts");
        else this.el.parentElement.classList.remove("is-showShorts");

        if( this.showFilms ) this.el.parentElement.classList.add("is-showFilms");
        else this.el.parentElement.classList.remove("is-showFilms");

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
        this.el.innerHTML = getHtml(this.data, this.showFilms, this.showTV, this.showShorts);
    }

}