class mango {
    constructor(x, y,radius) {
      var options = {
isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.r = radius;
      this.image = loadImage("images/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      imageMode(CENTER)
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, this.r+50, this.r+50);

      pop();
    }
  };
