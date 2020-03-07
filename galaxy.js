let stars_xPos = [];
let stars_yPos = [];
let stars_width = [];
let stars_height = [];

let sun = new Sun();
let planets = [];
let moon;
let asteroids = [];
let meteors = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(10); //10

    initStars();
    initClasses();
}

function draw() {
    print("Mouse: " + mouseX, mouseY);
    static();
    for (let i = 0; i < planets.length; i++) {
        planets[i].display();
    }
    moon.display();
    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
    }
    for (let i = 0; i < meteors.length; i++) {
        meteors[i].display();
        print("Meteor " + i + " is at " + meteors[i].xPos, meteors[i].yPos + " which is " + meteors[i].isOutOfWindow);
    }
}

//==============================================
function initStars() {
    for (let i = 0; i < 100; i++) {
        stars_xPos[i] = random(0, window.innerWidth);
        stars_yPos[i] = random(0, window.innerHeight);
        stars_width[i] = random(.2,5);
        stars_height[i] = random(.2,5);
    }
}

function initClasses() {
    planets.push(new Planet(100,100,20,100,100,100,0.5)); // Mercury
    planets.push(new Planet(175,100,45,100,100,100,0.4)); // Venus
    planets.push(new Planet(300,100,60,100,100,100,0.2)); // Earth
    planets.push(new Planet(500,100,44,100,100,100,0.1)); // Mars
    planets.push(new Planet(900,100,150,100,100,100,0.07)); // Jupiter
    moon = new Moon(2,50,50,50,0.2);
    for (let i = 0; i < 100; i++) {
        asteroids.push(new Planet(random(635, 665),100,random(2,15),80,80,80,random(0.1,0.3)));
    }
    for (let i = 0; i < 15; i++) {
        meteors.push(new Meteor());
    }
}

function static() {
    background(26, 0, 26); // dark purple
    noStroke();
    fill(217, 217, 217); // light gray
    for (let i = 0; i < 100; i++) {
        ellipse(stars_xPos[i], stars_yPos[i], stars_width[i], stars_height[i]);
    }
    sun.display();
}
