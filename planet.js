class Planet {
    constructor(xPos, yPos, radius, red, green, blue, rotation) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.rotation = rotation;
        this.increment = rotation;
        this.transX = sun.xPos;
        this.transY = sun.yPos;
    }

    display() {
        fill(this.red, this.green, this.blue);
        push();
            translate(this.transX, this.transY);
            rotate(this.rotation);
            ellipse(this.xPos, this.yPos, this.radius, this.radius);
        pop();
    }
}
