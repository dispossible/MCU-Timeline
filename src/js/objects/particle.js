class Particle{

    constructor(args){

        this.pos = {
            x: args.pos.x,
            y: args.pos.y
        };

        this.vel = {
            x: args.vel.x,
            y: args.vel.y
        };

        this.rotate = ( _.isNumber(args.rotate) )? args.rotate : 0;

        this.size = args.size;

        this.image = ( args.image )? args.image : null;

        this.lastUpdate = 0;

        this.color = [
            ( _.isArray(args.color) && _.isNumber(args.color[0]) )? args.color[0] : 0,
            ( _.isArray(args.color) && _.isNumber(args.color[1]) )? args.color[1] : 50,
            ( _.isArray(args.color) && _.isNumber(args.color[2]) )? args.color[2] : 50,
            ( _.isArray(args.color) && _.isNumber(args.color[3]) )? args.color[3] : 1,
        ];

    }


    update(ctx,width,height){

        let time = _.now() - this.lastUpdate;
        if( this.lastUpdate < 1 ) time = 1;
        this.lastUpdate = _.now();
        if( time > 300 ) time = 300;

        this.pos.x += (time*this.vel.x)/20;
        this.pos.y += (time*this.vel.y)/20;

        if( this.pos.x > width + this.size && this.vel.x > 0 ) this.pos.x -= width + this.size*2;
        if( this.pos.y > height + this.size && this.vel.y > 0 ) this.pos.y -= height + this.size*2;
        if( this.pos.x < 0 - this.size && this.vel.x < 0 ) this.pos.x += width + this.size;
        if( this.pos.y < 0 - this.size && this.vel.y < 0 ) this.pos.y += height + this.size;

        this.render(ctx);

    }


    render(ctx){

        if( this.image ){
            ctx.translate( this.pos.x, this.pos.y );
            ctx.rotate( this.rotate );
            ctx.drawImage( this.image, -this.image.naturalWidth/2, -this.image.naturalHeight/2, this.size, this.size );
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else {

            ctx.fillStyle = `hsla(${this.color[0]},${this.color[1]}%,${this.color[2]}%,${this.color[3]})`;
            ctx.beginPath();
            ctx.arc( this.pos.x, this.pos.y, this.size, 0, 2*Math.PI );
            ctx.fill();

        }

    }

}