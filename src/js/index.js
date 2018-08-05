import WebFont from "webfontloader";
import mcuData from './data.json';
import Timeline from './objects/timeline';
import Modal from './objects/Modal';


//Analytics
window.dataLayer = window.dataLayer || [];
window.gtag = function(){
	dataLayer.push(arguments);
};
gtag('js', new Date());
gtag('config', 'UA-40732084-2');


//Load fonts
WebFont.load({
    google: {
        families: ['Open Sans', 'Passion One']
    }
});


//Global
window.MCU = {};


//Create Main Objects
const el = document.querySelector("[data-timeline]");
const timeline = new Timeline(el, mcuData.shows);

document.querySelectorAll("[data-modal]").forEach(el=>new Modal(el));
