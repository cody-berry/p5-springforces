
class Spring {
    constructor(anchor, bob, springConstant, restLength, dampen) {
        this.a = anchor
        this.b = bob
        this.k = springConstant
        this.restLength = restLength
        this.dampening = dampen
    }

    show() {
        stroke(0, 0, 100)
        strokeWeight(1)
        line(this.a.pos.x, this.a.pos.y, this.b.pos.x, this.b.pos.y)
    }

    update() {
        // the restoration force is -kx, where k is this.k and x is the
        // distance between this.a and this.b minus the rest length.
        let displacement = p5.Vector.sub(this.b.pos, this.a.pos).mag() -
            this.restLength
        let dir = p5.Vector.sub(this.b.pos, this.a.pos).heading()
        let forceMag = displacement*this.k
        // now we can calculate the force!
        let force = new p5.Vector(forceMag*cos(dir), forceMag*sin(dir))
        // all right, time to apply forces!
        this.a.applyForce(force)
        force.mult(-1)
        this.b.applyForce(force)

        // let's dampen everything.
        this.b.vel.mult(this.dampening)
        this.a.vel.mult(this.dampening)
    }
}

