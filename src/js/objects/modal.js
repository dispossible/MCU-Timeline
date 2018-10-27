export default class Modal {

    constructor(el){

        this.button = el;

        this.aboutContent = `<h2> MCU Timeline </h2>
            <p> Code and design created by <a href='//dispossible.com'>Dispossible</a>, and the open source project is available on <a href='https://github.com/dispossible/MCU-Timeline'>GitHub</a>. </p>
            <p> Marvel logo, images and characters belong to <a href='//marvel.com/'>Marvel&copy;</a>. </p>
            <p> If you would like to contribute towards my server costs to keep this site running then <a target="_blank" href="//paypal.me/dispossible">PayPal donations</a> would be gratefully accepted. </p>`;


        this.el = document.createElement("div");
        this.el.classList.add("modal");

        this.overlay = document.createElement("div");
        this.overlay.classList.add("modal-overlay");

        this.closeBtn = document.createElement("button");
        this.closeBtn.classList.add("btn","btn_modal");
        this.closeBtn.innerText = "Close";

        this.content = document.createElement("div");
        this.content.classList.add("modal-content");

        this.content.innerHTML = this.aboutContent;
        this.content.appendChild(this.closeBtn);

        this.el.appendChild(this.overlay);
        this.el.appendChild(this.content);


        this.button.addEventListener("click", this.open.bind(this));
        this.closeBtn.addEventListener("click", this.close.bind(this));
        this.overlay.addEventListener("click",this.close.bind(this));

        document.body.appendChild(this.el);

    }

    open(){
        this.el.classList.add("is-open");
    }

    close(){
        this.el.classList.remove("is-open");
    }

}