import render from '../render';
import { parseData, sortData } from '../utils';

export const defaults = {
    showFilms: true,
    showTV: true,
    showShorts: true,
    order: "watch",
    flipOrder: true
}

export default class Timeline {

    constructor(el, dataIn){

        this.el = el;
        this.data = parseData(dataIn);


        //Ctrls
        this.showFilms = defaults.showFilms;
        this.showTV = defaults.showTV;
        this.showShorts = defaults.showShorts;
        this.order = defaults.order;
        this.flipOrder = defaults.flipOrder;


        //Bind ctrls
        const toggleBtns = document.querySelectorAll("[data-toggle]");
        if( toggleBtns.length > 0 ){
            toggleBtns[0].parentElement.addEventListener("click", e => {
                const el = e.target.closest("[data-toggle]");
                if( !el ) return;

                if( el.getAttribute("data-toggle") === "tv" ){
                    this.showTV = !this.showTV;
                    gtag("event", `Toggle TV visibility ${this.showTV?'on':'off'}`);
                }
                else if( el.getAttribute("data-toggle") === "short" ){
                    this.showShorts = !this.showShorts;
                    gtag("event", `Toggle Shorts visibility ${this.showShorts?'on':'off'}`);
                }
                else if( el.getAttribute("data-toggle") === "film" ){
                    this.showFilms = !this.showFilms;
                    gtag("event", `Toggle Film visibility ${this.showFilms?'on':'off'}`);
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
                gtag("event", "Change sort type", {event_label: this.order});
                this.sort();
                this.render();
            });
        }

        const flip = document.querySelector("[data-flip]");
        if(flip){
            flip.addEventListener("click", e => {
                this.flipOrder = !this.flipOrder;

                if( !this.flipOrder ) document.body.classList.add("is-flipped");
                else document.body.classList.remove("is-flipped");

                gtag("event", "Flip sort order", {event_label: this.flipOrder?'Newest first':'Oldest first'});

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

        if( !this.showTV ) document.body.classList.add("is-hideTv");
        else document.body.classList.remove("is-hideTv");

        if( !this.showShorts ) document.body.classList.add("is-hideShorts");
        else document.body.classList.remove("is-hideShorts");

        if( !this.showFilms ) document.body.classList.add("is-hideFilms");
        else document.body.classList.remove("is-hideFilms");

    }


    sort(){
        this.data = sortData(this.data, this.order, this.flipOrder);
    }


    render(){
        this.el.innerHTML = render(this.data, this.showFilms, this.showTV, this.showShorts, this.flipOrder);
    }

}