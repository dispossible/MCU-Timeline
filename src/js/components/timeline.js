import render from '../render';
import { parseData, sortData } from '../utils';

export const defaults = {
    showFilms: true,
    showOtherTV: true,
    showShorts: true,
    order: "watch",
    flipOrder: true,
    showMCUTV: true,
    showWebShow: true,
    showDefendersTv: true
}

export default class Timeline {

    constructor(el, dataIn){

        this.el = el;
        this.data = parseData(dataIn);


        //Ctrls
        this.showFilms = defaults.showFilms;
        this.showOtherTV = defaults.showOtherTV;
        this.showShorts = defaults.showShorts;
        this.showMCUTV = defaults.showMCUTV;
        this.showWebShow = defaults.showWebShow;
        this.showDefendersTv = defaults.showDefendersTv;
        this.order = defaults.order;
        this.flipOrder = defaults.flipOrder;


        //Bind ctrls
        const toggleBtns = document.querySelectorAll("[data-toggle]");
        if( toggleBtns.length > 0 ){
            toggleBtns[0].parentElement.addEventListener("click", e => {
                const el = e.target.closest("[data-toggle]");
                if( !el ) return;

                if( el.getAttribute("data-toggle") === "other tv" ){
                    this.showOtherTV = !this.showOtherTV;
                    gtag("event", `Toggle TV visibility ${this.showOtherTV?'on':'off'}`);
                }
                else if( el.getAttribute("data-toggle") === "MCU tv" ){
                    this.showMCUTV = !this.showMCUTV;
                    gtag("event", `Toggle TV visibility ${this.showMCUTV?'on':'off'}`);
                }
                else if( el.getAttribute("data-toggle") === "Defender tv" ){
                    this.showDefendersTv = !this.showDefendersTv;
                    gtag("event", `Toggle TV visibility ${this.showDefendersTv?'on':'off'}`);
                }
                else if( el.getAttribute("data-toggle") === "Web Shows" ){
                    this.showWebShow = !this.showWebShow;
                    gtag("event", `Toggle Shorts visibility ${this.showWebShow?'on':'off'}`);
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

        if( !this.showOtherTV ) document.body.classList.add("is-hideOtherTv");
        else document.body.classList.remove("is-hideOtherTv");

        if( !this.showMCUTV ) document.body.classList.add("is-hideMCUTv");
        else document.body.classList.remove("is-hideMCUTv");

        if( !this.showDefendersTv ) document.body.classList.add("is-hideDefendersTv");
        else document.body.classList.remove("is-hideDefendersTv");

        if( !this.showWebShow ) document.body.classList.add("is-hideWebShows");
        else document.body.classList.remove("is-hideWebShows");

        if( !this.showShorts ) document.body.classList.add("is-hideShorts");
        else document.body.classList.remove("is-hideShorts");

        if( !this.showFilms ) document.body.classList.add("is-hideFilms");
        else document.body.classList.remove("is-hideFilms");

    }


    sort(){
        this.data = sortData(this.data, this.order, this.flipOrder);
    }


    render(){
        this.el.innerHTML = render(this.data, this.showFilms, this.showOtherTV, this.showDefendersTv, this.showMCUTV, this.showShorts, this.showWebShow, this.flipOrder);
    }

}