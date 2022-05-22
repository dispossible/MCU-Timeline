export default class Modal {
    button: Element;
    id: string;
    el?: HTMLDivElement;
    overlay?: HTMLDivElement;
    closeButton?: HTMLButtonElement;
    content?: HTMLDivElement;

    constructor(el: Element) {
        this.button = el;

        this.id = this.button.getAttribute("data-modal") as string;

        const html = document.querySelector(`[data-modal-content='${this.id}']`);
        if (!html) return;
        html.remove();

        html.classList.remove("modal-hidden");

        this.el = document.createElement("div");
        this.el.classList.add("modal");

        this.overlay = document.createElement("div");
        this.overlay.classList.add("modal-overlay");

        this.closeButton = document.createElement("button");
        this.closeButton.classList.add("btn");
        this.closeButton.classList.add("btn_modal");
        this.closeButton.innerText = "Close";

        this.content = document.createElement("div");
        this.content.classList.add("modal-content");

        this.content.appendChild(html);
        this.content.appendChild(this.closeButton);

        this.el.appendChild(this.overlay);
        this.el.appendChild(this.content);

        this.button.addEventListener("click", this.open.bind(this));
        this.closeButton.addEventListener("click", this.close.bind(this));
        this.overlay.addEventListener("click", this.close.bind(this));

        document.body.appendChild(this.el);
    }

    open() {
        this.el?.classList?.add("is-open");
        window.gtag("event", `Open modal - ${this.id}`);
    }

    close() {
        this.el?.classList?.remove("is-open");
    }
}
