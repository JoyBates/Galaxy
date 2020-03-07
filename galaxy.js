let stars_xPos = [];
let stars_yPos = [];
let stars_width = [];
let stars_height = [];

let sun = new Sun();

let planets = [];
let moon;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(10); //10

    initStars();
    initPlanetsAndMoon();
}

function draw() {
    print("Mouse: " + mouseX, mouseY);
    static();
    for (let i = 0; i < planets.length; i++) {
        planets[i].display();
    }
    moon.display();

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

function initPlanetsAndMoon() {
    planets.push(new Planet(100,100,20,100,100,100,0.5)); // Mercury
    planets.push(new Planet(175,100,45,100,100,100,0.4)); // Venus
    planets.push(new Planet(300,100,60,100,100,100,0.2)); // Earth
    planets.push(new Planet(600,100,44,100,100,100,0.1)); // Mars
    planets.push(new Planet(900,100,150,100,100,100,0.07)); // Jupiter
    moon = new Moon(2,50,50,50,0.2);
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
