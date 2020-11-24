class Box9 {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        console.log(this.body);
        var pos =this.body.position;
       var angle = this.body.angle;
         push();
        translate(pos.x,pos.y); 
         rotate(angle);
      rectMode(CENTER);
      fill(255,0,0);
      rect(0, 0, this.width, this.height);
      pop();
      } else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        //tint(255,this.Visiblity);
        pop();
      }
    }
    Score(){
      if(this.Visiblity<0&&this.Visiblity>-1005){
        score++
      }
     }
  }
  