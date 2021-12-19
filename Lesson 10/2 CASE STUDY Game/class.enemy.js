class Enemy {
    constructor(x, y, I, clr,d) {
        this.x = x
        this.y = y
        this.I = I
        this.clr = clr
        this.d = d
    }

    show() {
        fill(this.clr)
        ellipse (this.x, this.y, this.I*2)

    }


    attack() {
        this.x-= this.d
        
    }
}