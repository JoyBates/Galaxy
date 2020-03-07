class Moon extends Planet {
    constructor(planet, red, green, blue, rot) {
        super();
        this.planet = planet;
        this.xPos = planets[this.planet].xPos;//radius;
        this.yPos = planets[this.planet].yPos;//radius;
        this.radius = planets[this.planet].radius / 3;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.rotation = 0;
        this.increment = planets[this.planet].increment;
        this.rot = rot;
        this.inc = rot;
        // this.transX = sun.xPos;// + planets[this.planet].xPos;
        // this.transY = sun.yPos;// + planets[this.planet].yPos;
    }

    display() {
        super.display();
        rotate();
        print("Moon: " + this.xPos, this.yPos);
    }

    rotate() {
        push();
            this.xPos = (this.xPos + planets[this.planet].xPos) * cos(this.rot);
            this.yPos = (this.yPos + planets[this.planet].yPos) * sin(this.rot);
        pop();
        this.rot += this.inc;

        print("Moon: " + this.xPos, this.yPos);
    }
}
