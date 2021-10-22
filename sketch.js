/*
@author Cody
@date 2021-10-22

https://youtu.be/Rr-5HiXquhw
Daniel Shiffman's Coding Train: Coding Challenge #160: Spring Forces

let's simulate a the oscillating motion of a spring using vectors and forces!

coding plan:
*   particle class ➜ constructor, show, update, apply_force
		pos, vel, acc
	spring class ➜ constructor, update, show
		a, b, k, rest_length
	multiple spring and particle arrays
	locked boolean for head to fix its position
	gravity
	use curvedVertex, noFill
	mouse sets position of tail

🐞 new objects need to be initialized in setup

 */
let font

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

let anchor, bob

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    anchor = new Particle(300, 0)
    bob = new Particle(300, 100)
}

function draw() {
    background(234, 34, 24)
    anchor.show()
    bob.show()
}