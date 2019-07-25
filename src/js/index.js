import WebFont from "webfontloader";
import mcuData from './data.json';
import Timeline from './components/timeline';
import Modal from './components/modal';

import './polyfills';


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
        families: ['Passion One']
    }
});


//Global
window.MCU = {};


//Create Main Objects
const el = document.querySelector("[data-timeline]");
new Timeline(el, mcuData.shows);

//Modals
document.querySelectorAll("[data-modal]").forEach(el=>new Modal(el));
