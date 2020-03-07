class Meteor {
    constructor() {
        this.xPos = random(window.innerWidth + 1, window.innerWidth + 500);
        this.yPos = random(-100, window.innerHeight);
        this.color = color(230, 138, 0); // orange
        this.xAcc = random(5,30);
        this.yAcc = random(-10,10);
        this.radius = random(5,30);
        this.isOutOfWindow;
    }

    display() {
        if (this.xPos > window.innerWidth) {
            this.xPos -= 1;
            this.isOutOfWindow = "out of window";
        }
        else if (this.xPos < window.innerWidth && this.xPos > 0) {
            this.xPos -= this.xAcc;
            this.yPos += this.yAcc;
            this.isOutOfWindow = "in window";
            fill(this.color);
            ellipse(this.xPos, this.yPos, this.radius, this.radius);
        }
        else if (this.xPos < 0) {
            this.isOutOfWindow = "gone";
        }
    }
}
