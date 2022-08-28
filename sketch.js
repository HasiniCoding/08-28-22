
var canvas
var backgroundImage, jewelsImage, sharkImage, playerImage, seaweedImage
var score = 0





function preload() {
backgroundImage = loadImage("background-water.webp")
jewelsImage = loadImage("Diamond.png")
seaweedImage = loadImage("SeaWeed.jpeg")
sharkImage = loadImage("2014470.png")
playerImage = loadImage("Diver-Vector-PNG.png")
}


function setup() {
canvas = createCanvas(1200,800)


ocean = createSprite(1200,400)
ocean.addImage(backgroundImage)
ocean.scale = 2.5
ocean.setVelocity(-2,0)


Diver = createSprite(350,windowHeight-250)
Diver.addImage(playerImage)


}


function draw() {
background(backgroundImage)
console.log(ocean.position.x)
if(ocean.position.x<120){
    ocean.position.x = 1200
}
if(keyDown(UP_ARROW)){
    Diver.position.y = Diver.position.y-2.5
}

if(keyDown(DOWN_ARROW)){
    Diver.position.y = Diver.position.y+2.5
}
spawnJewels()
spawnSharks()

drawSprites()
textSize(40)
text("Score: "+score,50,50)




}

function spawnJewels(){
    if(frameCount%200===0){
        Jewels = createSprite(1200,700)
        Jewels.addImage(jewelsImage)
        Jewels.scale = 0.01
        Jewels.setVelocity(-2,0)
    }

}

function spawnSharks(){
    if(frameCount%780===0){
Shark = createSprite(windowWidth,700)
Shark.addImage(sharkImage)
Shark.scale = 0.7
Shark.setVelocity(-2,0)
Shark.position.y = Math.round(random(400,700))
    }
}