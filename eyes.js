class Eyes {
    constructor() {
        this.xPos = 470;
        this.yPos = 140;
        this.width = 90;
        this.height = this.width;
        this.spacing = this.width * 1.5;
        this.color1 = color(46, 184, 46); // bright green
        this.color2 = color(153, 230, 153); // light green
        this.color3 = color(35, 144, 35); // dark green
        this.color4 = color(0); // black
    }

    display() {
        for (let i = 0; i < 4; i++) {
            if (i == 0) {
                fill(this.color3);
            }
            if (i == 1) {
                fill(this.color1);
            }
            if (i == 2) {
                fill(this.color2);
            }
            if (i == 3) {
                fill(this.color4);
                this.width *= .3;
                this.height = 60;
            }

            ellipse(this.xPos, this.yPos, this.width, this.height);
            ellipse(this.xPos + this.spacing, this.yPos, this.width, this.height);

            this.width *= 0.8;
        }
        this.width = 90;
    }

    blink() {

    }
}
