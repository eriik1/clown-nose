function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes)
}
function takesnapeshot(){
    save("selfe.png")
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotposes(results){
if(results.length>0){
    console.log(results)
}
}
function draw(){
    image(video,0,0,300,300)
}