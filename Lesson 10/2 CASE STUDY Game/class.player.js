class Player {
    constructor(x, y, I, clr) {
        this.x = x
        this.y = y
        this.I = I
        this.bullets = []
        this.clr = clr
        this.d = 50
        this.bullets = []
        this.movingDir = -2

    }

    show() {
        this.y+= this.movingDir
        this.y=constrain(this.y,0,400)
        fill(this.clr)
        triangle(this.x, this.y, this.x - this.I, this.y - this.I / 2, this.x - this.I, this.y + this.I / 2)

    }


    moveUp() {
        this.y -= this.d
        this.y = constrain(this.y, 0, 400)
    }

    moveDown() {
        this.y += this.d
        this.y = constrain(this.y, 0, 400)
    }

    fire() {
        for (let i = 0; i < this.bullets.length; i++){
            this.bullets[i].fire()
        this.bullets[i].show()

    }

}

addBullet() {
    let bullet = new Bullet(this.x, this.y)
    this.bullets.push(bullet)
}
}