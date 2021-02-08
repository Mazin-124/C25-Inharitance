class Box extends BaseClass{
    constructor(x,y,width,height){ //properties of the class are mentioned under constructor
        super(x,y,width,height);
        this.image = loadImage("sprites/wood1.png");
    }
}