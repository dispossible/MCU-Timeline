class Banner {
    
    constructor(el){

        this.el = el;
        this.images = {};

        this.resized = true;

        $(w).on("resize",()=>{
            this.resized = true;
        });

        this.preload();
    }
    

    //Preload all needed images
    preload(){

        //TODO: Only load the assest needed for the current resolution
        let files = [
            "img/ban-captain.png",
            "img/ban-groot.png",
            "img/ban-hulk.png",
            "img/ban-ironMan.png",
            "img/ban-panther.png",
            "img/ban-strange.png",
            "img/ban-thor.png",
            "img/ban-vision.png",
            "img/ban-jet.png",
            "img/ban-rubble1.png",
            "img/ban-rubble2L.png",
            "img/ban-rubble2R.png",
            "img/ban-rubble3.png",
            "img/ban-rubble4.png",
            "img/ban-rubble4L.png",
            "img/ban-rubble4R.png",
            "img/ban-sky.png",
            "img/ban-sky2.png",
        ];

        let fetches = [];
        files.forEach(file=>{
            fetches.push( fetch(file) );
        });
        
        Promise
            .all(fetches)
            .catch(err=>{
                console.error(err);
            })
            .then(data=>{
                let blobs = [];
                data.forEach(res=>{
                    blobs.push( res.blob() );
                });
                return Promise.all(blobs);
            })
            .then(blobs=>{

                blobs.forEach((blob,i)=>{
                    let imgName = files[i].replace(/^.*\-(.*?)\..*$/,"$1");
                    this.images[imgName] = URL.createObjectURL(blob);
                });

                this.init();
            });
    }


    init(){

        this.canvas = [
            d.createElement("canvas"), // 0  Screen
            d.createElement("canvas"), // 1  Fire
            d.createElement("canvas"), // 2  Char1
            d.createElement("canvas"), // 3  Char2
            d.createElement("canvas"), // 4  Char3
            d.createElement("canvas"), // 5  Smoke
            d.createElement("canvas"), // 6  Rubble1
            d.createElement("canvas"), // 7  Char4
            d.createElement("canvas"), // 8  Smoke
            d.createElement("canvas"), // 9  Rubble2
            d.createElement("canvas"), // 10 Rubble3
            d.createElement("canvas"), // 11 Rubble4
            d.createElement("canvas"), // 12 Jet
            d.createElement("canvas")  // 13 Sky
        ];

        this.ctx = [];
        this.canvas.forEach(canvas=>{
            this.ctx.push(canvas.getContext("2d"));
        });

        this.el.append(this.canvas[0]);
        this.el.removeClass("is-loading");

        this.loop();

    }



    resize(){

        this.width = this.el.outerWidth();
        this.height = this.el.outerHeight();

        this.canvas.forEach(canvas=>{
            canvas.width = this.width;
            canvas.height = this.height;
        });

        this.drawStatics();

        this.resized = false;
    }



    loop(){

        if( this.resized ) this.resize();






        this.ctx[0].drawImage( this.canvas[13], 0, 0 );

        requestAnimationFrame(this.loop.bind(this));
    }






    drawStatics(){

        if( this.width < 2000 ) this.drawCenteredImg( this.ctx[13], this.images.sky );
        else this.drawCenteredImg( this.ctx[13], this.images.sky2 );

    }




    drawCenteredImg(ctx,img){



    }


}