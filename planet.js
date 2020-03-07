class Planet {
    constructor(xPos, yPos, radius, red, green, blue, rotation) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.color = color(red, green, blue);
        this.rotation = 0;
        this.increment = rotation;
        this.transX = sun.xPos;
        this.transY = sun.yPos;
    }

    display() {
        if (this.green == 1 && this.blue == 1) {
            fill(this.red, this.red, this.red);
        }
        else {
            fill(this.color);
        }
        push();
            translate(this.transX, this.transY);
            rotate(this.rotation);
            ellipse(this.xPos, this.yPos, this.radius, this.radius);
            this.rotation += this.increment;
        pop();
    }
}
