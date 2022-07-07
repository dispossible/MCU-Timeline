import WebFont from "webfontloader";
import Timeline from "./components/timeline";
import Modal from "./components/modal";
import Nav from "./components/nav";

//Analytics
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}
window.dataLayer = window.dataLayer || [];
window.gtag = function (...args) {
    window.dataLayer.push(args);
};
window.gtag("js", new Date());
window.gtag("config", "G-4RHJGS2LH9");

//Load fonts
WebFont.load({
    google: {
        families: ["Passion One"],
    },
});

// Init everything
new Timeline();
new Nav();
document.querySelectorAll("[data-modal]").forEach((el) => new Modal(el));
