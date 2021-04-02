class Box{
    constructor(x,y,width,height,angle){
     
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        this.image=loadImage("images.png");
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        fill ("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-30,this.width,100);
        pop ();
    }
}