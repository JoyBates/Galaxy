class Paw {
    constructor() {
        this.xPosLeft = 1080;
        this.xPosRight = 1230;
        this.xPosMid = (this.xPosLeft + this.xPosRight) / 2;
        this.yPosBottom = window.innerHeight + 100;
        this.yPosTop = 400;
        this.color = color(255, 179, 255);
        this.time = 0;
    }

    display() {
        this.time += 1;
        fill(this.color);
        push();
            // translate(this.xPosMid, this.window.innerHeight);
            // rotate(sin(this.time * 0.1) * 1.5);
            beginShape();
                vertex(this.xPosMid, this.yPosBottom);
                vertex(this.xPosLeft, this.yPosBottom);
                vertex(this.xPosLeft, 500);
                curveVertex(this.xPosMid, this.yPosTop);
                curveVertex(this.xPosRight, 500);
                vertex(this.xPosRight, this.yPosBottom);
                vertex(this.xPosMid, this.yPosBottom);
            endShape();
        pop();
    }

}
