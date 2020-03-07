class Paw {
    constructor() {
        this.xRad = 75;
        this.xPosMid = 1155;
        this.yPosBottom = 100;
        this.yPosTop = -330;
        this.pawColor = color(255, 179, 255);
        this.padColor = color(255, 51, 255);
        this.time = 0;
    }

    display() {
        this.time += 1;
        fill(this.pawColor);
        push();
            translate(this.xPosMid, window.innerHeight);
            rotate(sin(this.time * 0.2) * .2);
            beginShape();
                vertex(0, this.yPosBottom);
                vertex(-1*this.xRad, this.yPosBottom);
                vertex(-1*this.xRad, this.yPosTop + 100);
                curveVertex(0, this.yPosTop);
                curveVertex(this.xRad, this.yPosTop + 100);
                vertex(this.xRad, this.yPosBottom);
                vertex(0, this.yPosBottom);
            endShape();

            fill(this.padColor);
            // left paw pad
            push();
                translate(-.6*this.xRad, this.yPosTop + 100);
                rotate(radians(10));
                ellipse(0,0, 50, 70);
            pop();
            // right paw pad
            push();
                translate(.6*this.xRad, this.yPosTop + 100);
                rotate(radians(-10));
                ellipse(0,0, 50, 70);
            pop();
            // top paw pad
            ellipse(0,this.yPosTop + 50, 50, 70);
        pop();
        print(this.yPosTop, window.innerHeight);
    }

}
