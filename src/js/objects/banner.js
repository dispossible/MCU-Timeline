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

        let files = [
            "img/banner1.png",
            "img/banner2.png",
            "img/banner3.png",
            "img/banner4.png",
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
            d.createElement("canvas"), // 2  Smoke
            d.createElement("canvas"), // 3  Smoke
        ];

        this.ctx = [];
        this.canvas.forEach(canvas=>{
            this.ctx.push(canvas.getContext("2d"));
        });

        this.particles = [[],[],[]];

        this.resize();

        this.el.append(this.canvas[0]);
        this.el.addClass("is-loaded");

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

            this.ctx[2].globalAlpha = 0.1;
            this.ctx[2].globalCompositeOperation = "screen";
            this.ctx[3].globalAlpha = 0.1;
            this.ctx[3].globalCompositeOperation = "screen";
            this.ctx[1].filter = "blur(4px)";

        }

        this.resized = false;
    }


    //Main animation loop
    loop(){

        if( this.resized ) this.resize();

        this.ctx[3].clearRect(0,0,this.width,this.height);
        this.particles[0].forEach(particle=>{
            particle.update( this.ctx[3], this.width, this.height );
        });

        this.ctx[2].clearRect(0,0,this.width,this.height);
        this.particles[1].forEach(particle=>{
            particle.update( this.ctx[2], this.width, this.height );
        });

        this.ctx[1].clearRect(0,0,this.width,this.height);
        this.particles[2].forEach(particle=>{
            particle.update( this.ctx[1], this.width, this.height );
        });

        this.ctx[0].clearRect(0,0,this.width,this.height);
        this.ctx[0].drawImage( this.canvas[3], 0, 0, this.width, this.height );
        this.ctx[0].drawImage( this.canvas[2], 0, 0, this.width, this.height );
        this.ctx.globalCompositeOperation = "screen";
        this.ctx[0].drawImage( this.canvas[1], 0, 0, this.width, this.height );
        this.ctx.globalCompositeOperation = "source-over";

        requestAnimationFrame(this.loop.bind(this));
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
        let count = this.width / 20;

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
                    x: (Math.random() * 0.3) + 0.2,
                    y: ((Math.random() * 0.5) + 0.4) * -1
                },
                size: (Math.random() * 2) + 2,
                color: [
                    (Math.random() * 40) + 20,
                    (Math.random() * 30) + 70,
                    (Math.random() * 20) + 40,
                    (Math.random() * 0.2) + 0.8
                ]
            };

            array.push( new Particle(options) );

        }
        return array;
    }


}