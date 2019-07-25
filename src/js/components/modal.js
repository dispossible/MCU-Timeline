export default class Modal {

    constructor(el){

        this.button = el;

        const id = this.button.getAttribute("data-modal");

        const html = document.querySelector(`[data-modal-content='${id}']`);
        if(!html) return;
        html.remove();

        html.classList.remove("modal-hidden");

        this.el = document.createElement("div");
        this.el.classList.add("modal");

        this.overlay = document.createElement("div");
        this.overlay.classList.add("modal-overlay");

        this.closeBtn = document.createElement("button");
        this.closeBtn.classList.add("btn");
        this.closeBtn.classList.add("btn_modal");
        this.closeBtn.innerText = "Close";

        this.content = document.createElement("div");
        this.content.classList.add("modal-content");

        this.content.appendChild(html);
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