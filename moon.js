class Moon extends Planet {
    constructor(planet, red, green, blue, rotation) {
        this.planet = planet;
        this.xPos = planets[this.planet].xPos;
        this.yPos = planets[this.planet].yPos;
        this.radius = planets[this.planet].radius / 3;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.rotation = rotation;
        this.transX = planets[this.planet].xPos;
        this.transY = planets[this.planet].yPos;
    }

    display() {
        super.display();
    }
}
