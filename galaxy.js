let stars_xPos = [];
let stars_yPos = [];
let stars_width = [];
let stars_height = [];

let sun = new Sun();

let planets = [];
let venus = ["100","100","20","100","100","100","0.2"];
let earth = ["200","200","40","100","100","100","100","0.2"];
let mars = ["300","300","60","100","100","100","0.2"];
let moon;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(10); //10

    initStars();
    initPlanetsAndMoon();
}

function draw() {
    // print(mouseX, mouseY);
    static();
    for (let i = 0; i < planets.length; i++) {
        planets[i].display();
        planets[i].rotation += planets[i].increment;
    }
    moon.display();
    moon.rotation += moon.increment;
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
    planets.push(new Planet(venus)); // Venus
    planets.push(new Planet(200,200,40,100,100,100,100,0.2)); // Earth
    planets.push(new Planet(mars)); // Mars
    planets.push(new Planet(100*4,100*4,20*4,100,100,100,0.2)); // Reef
    moon = new Moon(1,50,50,50,0.2);
}

function static() {
    background(26, 0, 26); // dark purple
    fill(217, 217, 217); // light gray
    for (let i = 0; i < 100; i++) {
        ellipse(stars_xPos[i], stars_yPos[i], stars_width[i], stars_height[i]);
    }
    sun.display();
}
