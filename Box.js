class Box{
     constructor(x,y){
        var options={
            'restitution': 0.8,
            'friction':0.04,
            'density':1
        }
        this.width = 70;
        this.height = 70;
        this.body = Matter.Bodies.rectangle(x,y,this.width,this,height,options);
        Matter.World.add(world,this.body);
     }
  display(){
      push();
      fill("red");
      strokeWeight(10);
      stroke("white");
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      rect(0,0,this.weight,this.height);
      pop();
  }
}