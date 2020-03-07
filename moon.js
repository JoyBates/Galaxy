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
        this.rot = planets[this.planet].rotation;
        this.inc = rot;
        this.X = sun.xPos + planets[this.planet].xPos;// + planets[this.planet].radius;
        this.Y = sun.yPos + planets[this.planet].yPos;
    }

    display() {
        push();
            translate(planets[this.planet].radius * cos(this.rot), planets[this.planet].radius * sin(this.rot));
                super.display();
        pop();
        this.rot += this.inc;
    }
}
