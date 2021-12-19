class Bullet {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.I = 5
        this.clr = "violet"
        this.d = 2
    }

    show() {
        fill(this.clr)
        rect (this.x, this.y, this.I*2)

    }


    attack() {
        this.x+= this.d
        
    }
}