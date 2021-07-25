

export default class Nav {

    constructor(){

        this.isOpen = false;

        this.btnEl = document.querySelectorAll("[data-nav]");

        this.btnEl.forEach(btn => btn.addEventListener("click", e => {
            e.preventDefault();
            this.toggle();
        }));

    }

    toggle(){
        this.isOpen = !this.isOpen;

        if( this.isOpen ){
            document.body.classList.add("is-navOpen");
        } else {
            document.body.classList.remove("is-navOpen");
        }
    }

}