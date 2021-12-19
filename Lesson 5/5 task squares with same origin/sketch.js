let x = 200
let y = 300


function setup(){
    createCanvas(1000,800)
    background("black")
    stroke("white")
    noFill()
   

for(let w =100; w<500; w +=20){
  square(x, y, w)

}
}