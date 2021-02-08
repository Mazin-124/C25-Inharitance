class Log extends BaseClass{
    constructor(x,y,height,angle){ //properties of the class are mentioned under constructor
       super(x,y,20,height,angle)
        Matter.Body.setAngle(this.body, angle)
        this.image = loadImage("sprites/wood2.png")  
    }
}