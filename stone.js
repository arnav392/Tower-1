class Stone{
    constructor(x,y,height,width)
    {
		var options={
			
			restitution :0.8,
            friction :1,
            density :1
			}

		this.height=height
		this.width=width

		this.body=Bodies.rectangle(x,y, this.height,this.width, options)
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		rectMode(CENTER);
		fill("yellow");
	
	   rect(0,0,this.width,this.height)
		pop()
 }
}