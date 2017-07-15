class Modal{

    constructor(el){

        this.button = el;

        this.type = this.button.attr("data-modal");

        this.aboutContent = `<h2> MCU Timeline </h2>

            <p> Code and design created by <a href='//dispossible.com'>Dispossible</a>, and the open source project is available on <a href='https://github.com/dispossible/MCU-Timeline'>GitHub</a>. </p>

            <p> Marvel logo and characters belong to <a href='//marvel.com/'>Marvel&copy;</a>. </p>

            <p> Tools used include; Node, Gulp, Bower, Babel, Photoshop, Sublime Text, Jquery, and Lodash. </p>

            <p> If you would like to contribute towards my server costs to keep this site running then <a target="_blank" href="//paypal.me/dispossible">PayPal donations</a> would be gratefully accepted. </p>`;

        this.el = $("<div class='modal'></div>");
        this.overlay = $("<div class='modal-overlay'></div>");
        this.closeBtn = $("<button class='btn btn_modal'>Close</button>");
        this.content =  $("<div class='modal-content'></div>");

        this.content.append(this.closeBtn);
        this.content.append(this.aboutContent);
        this.el.append(this.overlay);
        this.el.append(this.content);


        this.button.on("click",{that:this},function(e){
            e.data.that.open();
        });
        this.closeBtn.on("click",{that:this},function(e){
            e.data.that.close();
        });
        this.overlay.on("click",{that:this},function(e){
            e.data.that.close();
        });


        $("body").append(this.el);

    }

    open(){
        this.el.addClass("is-open");
    }

    close(){
        this.el.removeClass("is-open");
    }

}