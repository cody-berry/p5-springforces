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
	multiple spring and particle arrays
	gravity
	use curvedVertex, noFill
	mouse sets position of tail

🐞 new objects need to be initialized in setup

 */
let font

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

let anchor, bob, gravity, spring

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    stroke(0, 0, 100)
    strokeWeight(5)
    anchor = new Particle(300, height/2, true)
    bob = new Particle(500, height/2+10, false)
    gravity = new p5.Vector(0, 0.01)
    spring = new Spring(anchor, bob, 0.01, 120, 0.99)
}

function draw() {
    background(234, 34, 24)
    anchor.show()
    bob.show()
    anchor.applyForce(gravity)
    bob.applyForce(gravity)
    anchor.update()
    bob.update()
    spring.show()
    spring.update()
}