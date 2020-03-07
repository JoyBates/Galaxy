class Moon extends Planet {
    constructor(planet, red, green, blue, rotation) {
        super();
        this.planet = planet;
        this.xPos = planets[this.planet].radius;
        this.yPos = planets[this.planet].radius;
        this.radius = planets[this.planet].radius / 3;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.rotation = planets[this.planet].rotation;
        this.increment = rotation;
        this.transX = planets[this.planet].xPos + sun.xPos;
        this.transY = planets[this.planet].yPos + sun.yPos;
    }

    display() {
        super.display();
        print("Moon: " + this.xPos, this.yPos);
    }
}
