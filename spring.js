
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

}

