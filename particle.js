class Particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.vel = new p5.Vector(0, 0)
        this.acc = new p5.Vector(0, 0)
        this.r = 5
    }

    show() {
        noStroke()
        circle(this.pos.x, this.pos.y, this.r)
    }

    update() {
        this.vel.add(this.acc) // δ/δx(acceleration) = velocity
        this.pos.add(this.vel) // δ/δx(velocity) = position
        this.acc.setMag(0) // and of course, every frame, we reset our
        // acceleration
    }

    applyForce(f) {
        this.acc.add(f) // F = ma, so a = F/m, but m = 1, so a = F
    }
}