class Island {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.island= loadImage("rock.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.island,this.body.position.x,this.body.position.y,150,100);
    }
}