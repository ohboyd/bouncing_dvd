// control + option + l starts live server
let coord = {
  x: 40,
  y: 40
};

let velocity = {
  x: 2,
  y: 2
};

let dvd;

function preload() {
  dvd = loadImage("assets/white_dvd.png");
}

function setup() {
  // this creates the initial window and loads the image
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  image(dvd, coord.x, coord.y);

  // changes x velocity and color when an edge is impacted
  if(coord.x + dvd.width > width || coord.x < 0) {
    velocity.x = (-velocity.x);
    tint(random(0, 255), random(0, 255), random(0, 255));
  }
  coord.x = coord.x + velocity.x;

  // changes y velocity and color when an edge is impacted
  if (coord.y + dvd.height > height || coord.y < 0) {
    velocity.y = (-velocity.y);
    tint(random(0, 255), random(0, 255), random(0, 255));
  }
  coord.y = coord.y + velocity.y
}
