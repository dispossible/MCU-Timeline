//Load fonts
WebFont.load({
    google: {
        families: ['Open Sans', 'Passion One']
    }
});


//Global
w.MCU = {};



//Create Main Objects
$(function(){

    let $ban = $("[data-banner]");
    w.MCU.banner = new Banner($ban);


    let el = $("[data-timeline]");
    w.MCU.timeline = new Timeline(el, mcuData);

    
    $("[data-modal]").each((i,el)=>{
        new Modal(el);
    });

});



//Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40732084-2', 'auto');
ga('send', 'pageview');