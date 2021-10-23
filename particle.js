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
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.setMag(0)
    }

    applyForce(f) {
        this.acc.add(f) // F = ma, so a = F/m, but m = 1, so a = F
    }
}