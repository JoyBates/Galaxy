class Meteor {
    constructor() {
        this.xPos = random(window.innerWidth + 1, window.innerWidth + 1000);
        this.yPos = random(window.innerHeight - 100, window.innerHeight + 100);
        this.color = color(230, 138, 0); // orange
        this.xAcc = random(5,30);
        this.yAcc = random(-10,10);
        this.radius = random(10,100);
    }

    display() {
        while (this.xPos > window.innerWidth) {
            this.xPos -= 1;
            ellipse(this.xPos, this.yPos, this.radius, this.radius);
        }
        while (this.xPos <= window.innerWidth) {
            this.xPos += cos(this.xAcc*.8);
            this.yPos += sin(this.yAcc*.8);
            ellipse(this.xPos, this.yPos, this.radius, this.radius);
        }
    }
}
