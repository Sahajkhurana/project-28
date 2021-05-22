class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
           length:10,
        }
        this.bodyA=bodyA;
        this.pointB=pointB
         this.sling=Constraint.create(options)
        World.add(world,this.sling)  
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
          
            var pos=this.sling.bodyA.position
            var pointB=this.pointB  
          
      strokeWeight(8)
      line(pos.x,pos.y,pointB.x,pointB.y)
        
   
    }
}



