class Ball{
    constructor(x,y,r){
       var options = {
           isStatic: false,
           restitution: 0,
           density: 1,
           friction: 1.2,
           
       }
       this.body = Bodies.circle(x,y,r,options);
       this.r = r;
       this.image = loadImage("img.png");
       this.smokeImage = loadImage("smoke.png");
       this.trajectory =[];
      World.add(world,this.body);
   }
   display(){
       imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       if(this.body.velocity.x > 10 && this.body.position.x > 250){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
  }
  
 