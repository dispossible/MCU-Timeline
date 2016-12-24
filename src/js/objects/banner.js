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
            "img/ban-smoke1.png",
            "img/ban-smoke2.png",
        ];

        let toLoad = files.length;

        files.forEach((url,i)=>{
            let img = d.createElement("img");
            img.onload = function(){
                toLoad--;
                if( toLoad < 1 ) this.init();
            }.bind(this);
            img.src = url;
            this.images[ files[i].replace(/^.*\-(.*?)\..*$/,"$1") ] = img;
        });

    }


    // Initialise all of the needed canvases
    init(){

        this.canvas = [
            d.createElement("canvas"), // 0  Screen
            d.createElement("canvas"), // 1  Fire
            d.createElement("canvas"), // 2  Char1
            d.createElement("canvas"), // 3  Char2
            d.createElement("canvas"), // 4  Smoke
            d.createElement("canvas"), // 5  Char3
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

        this.particles = [[],[],[]];

        this.resize();

        this.el.append(this.canvas[0]);
        this.el.removeClass("is-loading");

        //Show Layers for debug
        /*this.canvas.forEach((canvas,i)=>{
            if( i > 0 ) this.el.after(canvas);
        });*/
        
        requestAnimationFrame(this.loop.bind(this));

    }


    //Run when the canvas needs to update its dimentions
    resize(){

        if( this.width !== this.el.outerWidth() ){

            this.width = this.el.outerWidth();
            this.height = this.el.outerHeight();

            this.canvas.forEach(canvas=>{
                canvas.width = this.width;
                canvas.height = this.height;
            });

            this.particles[0] = this.populateSmoke(0,0.5);
            this.particles[1] = this.populateSmoke(50);
            this.particles[2] = this.populateFire();

            this.ctx[4].globalAlpha = 0.1;
            this.ctx[4].globalCompositeOperation = "screen";
            this.ctx[8].globalAlpha = 0.1;
            this.ctx[8].globalCompositeOperation = "screen";
            this.ctx[1].filter = "blur(4px)";

            this.drawStatics();

        }

        this.resized = false;
    }


    //Main animation loop
    loop(){

        if( this.resized ) this.resize();

        this.ctx[8].clearRect(0,0,this.width,this.height);
        this.particles[0].forEach(particle=>{
            particle.update( this.ctx[8], this.width, this.height );
        });

        this.ctx[4].clearRect(0,0,this.width,this.height);
        this.particles[1].forEach(particle=>{
            particle.update( this.ctx[4], this.width, this.height );
        });

        this.ctx[1].clearRect(0,0,this.width,this.height);
        this.particles[2].forEach(particle=>{
            particle.update( this.ctx[1], this.width, this.height );
        });



        let top = w.scrollY;
        let offset = this.el.offset().top;
        if( offset > top ) top = 0;
        else top -= offset;

        this.ctx[0].drawImage( this.canvas[13], 0, 0 + (top/1), this.width, this.height );
        this.ctx[0].drawImage( this.canvas[12], 0, 0 + (top/1.1), this.width, this.height );
        this.ctx[0].drawImage( this.canvas[11], 0, 0 + (top/1.2), this.width, this.height );
        this.ctx[0].drawImage( this.canvas[10], 0, 0 + (top/1.4), this.width, this.height );
        this.ctx[0].drawImage( this.canvas[9],  0, 0 + (top/1.6), this.width, this.height );
        this.ctx[0].drawImage( this.canvas[8],  0, 0 + (top/2), this.width, this.height );
        this.ctx[0].drawImage( this.canvas[7],  0, 0 + (top/3), this.width, this.height );
        this.ctx.globalCompositeOperation = "screen";
        this.ctx[0].drawImage( this.canvas[6],  0, 0 + (top/4), this.width, this.height );
        this.ctx.globalCompositeOperation = "source-over";
        this.ctx[0].drawImage( this.canvas[5],  0, 0 + (top/5), this.width, this.height );
        this.ctx[0].drawImage( this.canvas[4],  0, 0 + (top/6), this.width, this.height );
        this.ctx.globalCompositeOperation = "screen";
        this.ctx[0].drawImage( this.canvas[3],  0, 0 + (top/8), this.width, this.height );
        this.ctx.globalCompositeOperation = "source-over";
        this.ctx[0].drawImage( this.canvas[2],  0, 0 + (top/10), this.width, this.height );
        this.ctx.globalCompositeOperation = "screen";
        this.ctx[0].drawImage( this.canvas[1],  0, 0 + (top/30), this.width, this.height );
        this.ctx.globalCompositeOperation = "source-over";

        requestAnimationFrame(this.loop.bind(this));
    }





    //Draws all of the canvas contents that will not change between frames
    drawStatics(){

        if( this.width > 2000 ) this.drawImg( this.ctx[13], this.images.sky2, "center" );
        else if( this.width > 800) this.drawImg( this.ctx[13], this.images.sky, "center" );
        else this.drawImg( this.ctx[13], this.images.sky, "center", 300 );

        if( this.width > 1900 ) this.drawImg( this.ctx[12], this.images.jet, "left", 120, 320 );

        this.drawImg( this.ctx[11], this.images.rubble4, "center", 0, 80 );
        if( this.width > 1800 ){
            this.drawImg( this.ctx[11], this.images.rubble4L, "left", 0, 40 );
            this.drawImg( this.ctx[11], this.images.rubble4R, "right", 0, 40 );
        }

        this.drawImg( this.ctx[10], this.images.rubble3, "center" );
        if( this.width > 1000 ){
            this.drawImg( this.ctx[10], this.images.rubble3, "center", 900 );
            this.drawImg( this.ctx[10], this.images.rubble3, "center", -900 );
        }

        if( this.width > 820 ) this.drawImg( this.ctx[9], this.images.rubble2L, "left" );
        if( this.width > 950 ) this.drawImg( this.ctx[9], this.images.rubble2R, "right" );

        if( this.width > 1400 ) this.drawImg( this.ctx[7], this.images.strange, "center", -680, 60 );
        if( this.width > 820 ) this.drawImg( this.ctx[7], this.images.vision, "center", 330, 80 );
        if( this.width > 1750 ) this.drawImg( this.ctx[7], this.images.hulk, "center", 800, 30 );

        this.drawImg( this.ctx[6], this.images.rubble1, "center" );
        if( this.width > 2000 ){
            this.drawImg( this.ctx[6], this.images.rubble1, "center", -1900 );
            this.drawImg( this.ctx[6], this.images.rubble1, "center", 1900 );
        }

        if( this.width > 1200 ) this.drawImg( this.ctx[5], this.images.groot, "center", 540 );
        if( this.width > 950 ) this.drawImg( this.ctx[5], this.images.panther, "center", -400 );

        if( this.width > 400 ){
            this.drawImg( this.ctx[3], this.images.thor, "center", -190 );
            this.drawImg( this.ctx[3], this.images.captain, "center", 200 );
        }

        this.drawImg( this.ctx[2], this.images.ironMan, "center" );

    }



    //Draw an image to a context in set positions
    drawImg(ctx,img,position,offsetL,offsetB){

        if( !_.isNumber(offsetL) ) offsetL = 0;
        if( !_.isNumber(offsetB) ) offsetB = 0;

        let height = img.naturalHeight;
        let width = img.naturalWidth;
        let left = 0;
        let top = 0;

        if( position === "center" ){

            left = ((this.width / 2) - (width / 2)) + offsetL;
            top = (this.height - height) - offsetB;

        }

        else if( position === "left" ){

            left = offsetL;
            top = (this.height - height) - offsetB;

        }

        else if( position === "right" ){

            left = (this.width - width) - offsetL;
            top = (this.height - height) - offsetB;

        }

        ctx.drawImage(img, left, top, width, height);

    }



    populateSmoke( height, speed ){
        if( !_.isNumber(height) ) height = 0;
        if( !_.isNumber(speed) ) speed = 1;
        let array = [];
        let count = this.width / 6;

        for( let i = 0 ; i < count ; i++ ){

            let options = {
                pos: {
                    x: Math.random() * this.width,
                    y: (Math.random() * (this.height / 2)) + (this.height / 2) + height
                },
                vel: {
                    x: Math.random() * speed,
                    y: 0
                },
                rotate: Math.random() * 360,
                size: 212,
                image: ( Math.random() > 0.5 )? this.images.smoke1 : this.images.smoke2
            };

            array.push( new Particle(options) );

        }
        return array;
    }




    populateFire(){
        let array = [];
        let count = this.width / 100;
        for( let i = 0 ; i < count ; i++ ){

            let options = {
                pos: {
                    x: Math.random() * this.width,
                    y: this.height + (Math.random() * this.height)
                },
                vel: {
                    x: (Math.random() * 2) + 1,
                    y: ((Math.random() * 1) + 0.5) * -1
                },
                size: (Math.random() * 2) + 1,
                color: [
                    Math.random() * 60,
                    (Math.random() * 30) + 70,
                    (Math.random() * 20) + 60,
                    (Math.random() * 0.5) + 0.5
                ]
            };

            array.push( new Particle(options) );

        }
        return array;
    }


}