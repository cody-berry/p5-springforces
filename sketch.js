/*
@author Cody
@date 2021-10-22

https://youtu.be/Rr-5HiXquhw
Daniel Shiffman's Coding Train: Coding Challenge #160: Spring Forces

let's simulate a the oscillating motion of a spring using vectors and forces!

coding plan:
.   particle class ➜ constructor, show, update, apply_force
 		pos, vel, acc
.	spring class ➜ constructor, update, show
 		a, b, k, rest_length
.	multiple spring and particle arrays
.	use curvedVertex, noFill
.	mouse sets position of tail
}   experiments

🐞 new objects need to be initialized in setup

 */
let font

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

let bobs = []
let gravity
let springs = []
let SPACING
let CIRCLE_RADIUS // this is just a silly variable; I don't know how to
// explain it. You'll see why I have it later.
let angle = 0 // this is the angle for where we place our points.
const VERTICES = 3 // this is the number of vertices we'll be creating.



function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    CIRCLE_RADIUS = 60

    const DELTA_ANGLE = 2*PI/VERTICES // we need to split up the circle into
    // `vertices` sections. // this is our change in angle.

    // Preparation: For our springs, we need a restLength, but that requires
    // knowing the distance between each vertex.
    let x = CIRCLE_RADIUS*cos(DELTA_ANGLE) - CIRCLE_RADIUS*1 // cos(0) = 1
    let y = CIRCLE_RADIUS*sin(DELTA_ANGLE) - CIRCLE_RADIUS*0 // sin(0) = 0
    let distance = sqrt(x*x + y*y) // and we've got the Pythagorean Theorem!
    // let's generate our bobs!
    for (let i = 0; i < VERTICES; i++) {
        x = CIRCLE_RADIUS*cos(angle)
        y = CIRCLE_RADIUS*sin(angle)
        let bob = new Particle(x+width/2, y+height/2, false)
        bobs.push(bob)
        if (i > 0) {
            let spring = new Spring(bobs[i-1], bob, 0.01, distance, 0.99)
            springs.push(spring)
        }
        angle += DELTA_ANGLE
    }
    // we need to add a spring to connect the last to the first.
    let spring = new Spring(bobs[0], bobs[bobs.length-1], 0.01, distance, 0.99)
    springs.push(spring)

    gravity = new p5.Vector(0, 0.1)

    frameRate(60)
}

function draw() {
    background(234, 34, 24)
    for (let b of bobs) {
        b.edges()
        b.update()
        b.applyForce(gravity)
        b.show()
    }
    for (let s of springs) {
        s.update()
        s.show()
    }
}

function string_setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    stroke(0, 0, 100)
    strokeWeight(5)
    SPACING = 20

    for (let i = 0; i < 10; i++) {
        let bob = new Particle(SPACING/2*i + width/2, SPACING*i, i===0)
        bobs.push(bob)
        if (i > 0) {
            let spring = new Spring(bobs[i-1], bob, 0.06, SPACING, 0.99)
            springs.push(spring)
        }
    }
    gravity = new p5.Vector(0, 0.1)
}

function string_draw() {
    background(234, 34, 24)
    for (let bob of bobs) {
        // bob.show()
        bob.update()
        bob.applyForce(gravity)
        bob.edges()
    }

    // let's begin a curved vertex!
    noFill()
    beginShape()
    let tail = bobs[0]
    curveVertex(tail.pos.x, tail.pos.y)

    for (let spring of springs) {
        // spring.show()
        spring.update()
        curveVertex(spring.a.pos.x, spring.a.pos.y)
    }
    let head = bobs[bobs.length - 1]
    curveVertex(head.pos.x, head.pos.y)
    endShape()

    if (mouseIsPressed) {
        // we want to set our head's position to the location of our mouse
        // if our mouse is pressed
        head.pos = new p5.Vector(mouseX, mouseY)
    }

}