class BaseClass{
    constructor(x,y,width,height,angle){ //properties of the class are mentioned under constructor
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png")
        World.add(world,this.body);
    }

    display(){
        //namespacing is purely optional but it is a good programming practise
        var pos = this.body.position;
        var angle = this.body.angle;

        
        push();
        angleMode(RADIANS); //p5 uses degrees to measure angle,matter.js uses radians
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height); 
        pop();

    }
}