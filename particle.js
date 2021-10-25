class Particle {
    constructor(x, y, lock) {
        this.pos = new p5.Vector(x, y)
        this.vel = new p5.Vector(0, 0)
        this.acc = new p5.Vector(0, 0)
        this.r = 5
        this.locked = lock
    }

    show() {
        noStroke()
        circle(this.pos.x, this.pos.y, this.r*2)
    }

    update() {
        // if the particle is locked, no physics applies.
        if (!this.locked) {
            this.vel.add(this.acc) // δ/δx(acceleration) = velocity
            this.pos.add(this.vel) // δ/δx(velocity) = position
            this.acc.setMag(0) // and of course, every frame, we reset our
            // acceleration
        }
    }

    applyForce(f) {
        this.acc.add(f) // F = ma, so a = F/m, but m = 1, so a = F
    }

    edges() {
        if ((this.pos.x + this.r) >= width) {
            this.vel.x *= -1
            this.pos.x = width - this.r
        }
        if (this.pos.x - this.r <= 0) {
            this.vel.x *= -1
            this.pos.x = this.r
        }

        if (this.pos.y - this.r <= 0) {
            this.vel.y *= -1
            this.pos.y = this.r
        }

        if (this.pos.y + this.r >= height) {
            this.vel.y *= -1
            this.pos.y = height - this.r
        }
    }
}