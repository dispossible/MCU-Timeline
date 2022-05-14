import render from '../render';
import mcuData from '../data.json';
import { parseData, sortData } from '../utils';

const data = parseData(mcuData.shows);

export const defaults = {
    order: "watch",
    flipOrder: true,
    filters: {
        TYPE: [
            "FILM",
            "SHORT",
            "MCU_TV",
        ],
        PHASE: []
    }
}

export default class Timeline {

    constructor(){

        this.el = document.querySelector("[data-timeline]");
        this.data = data;


        //Ctrls
        this.order = defaults.order;
        this.flipOrder = defaults.flipOrder;
        this.filters = defaults.filters;


        //Bind ctrls
        const filterGroups = document.querySelectorAll("[data-filter-list]");
        filterGroups.forEach(filterGroup => {
            filterGroup.addEventListener("change", e => {
                const filter = e.target.getAttribute("name");
                let value = e.target.getAttribute("value");
                if( filter === "PHASE" ) value = parseInt(value);

                if( e.target.checked && !this.filters[filter].includes(value) ){
                    this.filters[filter].push(value);
                    gtag("event", `Toggle ${filter}`, { event_label: `${value} on` });
                }
                else if( !e.target.checked && this.filters[filter].includes(value) ){
                    this.filters[filter] = this.filters[filter].filter(val => val !== value);
                    gtag("event", `Toggle ${filter}`, { event_label: `${value} off` });
                }
                this.render();
            })
        });

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

                if( !this.flipOrder ) flip.classList.add("is-flipped");
                else flip.classList.remove("is-flipped");

                const text = flip.querySelector("[data-flip-text]");
                if( text ){
                    const t1 = text.dataset.flipText;
                    const t2 = text.innerText;
                    text.dataset.flipText = t2;
                    text.innerText = t1;
                }

                gtag("event", "Flip sort order", {event_label: this.flipOrder?'Newest first':'Oldest first'});

                this.sort();
                this.render();
            });
        }

        const clears = document.querySelectorAll("[data-filter-clear]");
        clears.forEach(clear => {
            const type = clear.getAttribute("data-filter-clear");
            clear.addEventListener("click", (e) => {
                this.filters[type] = [];

                document
                    .querySelector(`[data-filter-list='${type}']`)
                    .querySelectorAll("[data-filter]")
                    .forEach(filter => {
                        filter.checked = false;
                    });
                    
                this.sort();
                this.render();
            });
        });


        this.el.addEventListener("error", e => {
            if( e.target.tagName === "IMG" ){
                e.target.remove();
            }
        }, true);

        this.sort();
        this.render();
    }


    sort(){
        this.data = sortData(this.data, this.order, this.flipOrder);
    }


    render(){
        const list = render(this.data, this.filters, this.flipOrder);
        if( list.length < 1 ){
            document.querySelector("[data-empty]").style.display = null;
        } else {
            document.querySelector("[data-empty]").style.display = "none";
        }
        this.el.innerHTML = list;
    }

}