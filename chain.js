class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA : bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.4
        }
        this.Chain= Matter.Constraint.create(options);
        World.add(world,this.Chain);
    }
    display(){
        var posA=this.Chain.bodyA.position;
        var posB=this.Chain.bodyB.position;

        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}