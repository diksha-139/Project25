class Ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,1600,10,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill ("yellow");
        rect(this.body.position.x,this.body.position.y,1600,10);
    }
}