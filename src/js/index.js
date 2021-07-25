import WebFont from "webfontloader";
import Timeline from './components/timeline';
import Modal from './components/modal';
import Nav from './components/nav';

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


new Timeline();
new Nav();

document.querySelectorAll("[data-modal]").forEach(el=>new Modal(el));