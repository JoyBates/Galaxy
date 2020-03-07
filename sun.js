class Sun {
    constructor() {
        this.xPos = 265;
        this.yPos = 313;
        this.radius = 150;
    }

    display() {
        fill(255);
        ellipse(this.xPos, this.yPos, this.radius, this.radius);

    }
}
