class bob {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 1.0,
          friction: 0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x, y, 50, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0,0, 50, 50);
      pop();

    }
};
