class Bird extends BaseClass{
    constructor(x,y){ //properties of the class are mentioned under constructor
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
    }

    display(){
        //namespacing is purely optional but it is a good programming practise
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        
        super.display();
    }
}