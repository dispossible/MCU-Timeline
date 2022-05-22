export default class Nav {
    isOpen: boolean;
    buttons: NodeListOf<Element>;

    constructor() {
        this.isOpen = false;

        this.buttons = document.querySelectorAll("[data-nav]");

        this.buttons.forEach((btn) =>
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                this.toggle();
            })
        );
    }

    toggle() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            document.body.classList.add("is-navOpen");
        } else {
            document.body.classList.remove("is-navOpen");
        }
    }
}
