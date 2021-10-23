/*
@author Cody
@date 2021-10-22

https://youtu.be/Rr-5HiXquhw
Daniel Shiffman's Coding Train: Coding Challenge #160: Spring Forces

let's simulate a the oscillating motion of a spring using vectors and forces!

coding plan:
.   particle class ➜ constructor, show, update, apply_force
0		pos, vel, acc
.	spring class ➜ constructor, update, show
0		a, b, k, rest_length
.	multiple spring and particle arrays
*	use curvedVertex, noFill
*	mouse sets position of tail

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

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    stroke(0, 0, 100)
    strokeWeight(5)
    SPACING = 20
    for (let i = 0; i < 20; i++) {
        let bob = new Particle(SPACING/2*i + width/2, SPACING*i, i===0)
        bobs.push(bob)
        if (i > 0) {
            let spring = new Spring(bobs[i-1], bob, 0.06, SPACING, 0.99)
            springs.push(spring)
        }
    }
    gravity = new p5.Vector(0, 0.01)
}

function draw() {
    background(234, 34, 24)
    for (let bob of bobs) {
        // bob.show()
        bob.update()
        bob.applyForce(gravity)
    }

    // let's begin a curved vertex!
    noFill()
    beginShape()
    let tail = bobs[0]
    curveVertex(tail.pos.x, tail.pos.y)

    for (let spring of springs) {
        // spring.show()
        curveVertex(spring.a.pos.x, spring.a.pos.y)
        spring.update()
    }
    let head = bobs[bobs.length - 1]
    curveVertex(head.pos.x, head.pos.y)
    curveVertex(head.pos.x, head.pos.y)
    endShape()

    if (mouseIsPressed) {
        // we want to set our head's position to the location of our mouse
        // if our mouse is pressed
        head.pos = new p5.Vector(mouseX, mouseY)
    }

}