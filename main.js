nose_x=0
nose_y=0

function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")

}

function setup(){
    canvas1=createCanvas(450,400)
    canvas1.center()
    imgholder = createCapture(VIDEO)
    imgholder.size(300,300) 
    imgholder.hide()

    poseinfo = ml5.poseNet(imgholder,model_loader)
    poseinfo.on("pose",gotresult)
}
function model_loader(){
    console.log("model has loaded")

}
function gotresult(result){
    console.log(result)

    if(result.length > 0){
        nose_x=result[0].pose.nose.x;
        nose_y=result[0].pose.nose.y;
    }

    
}
function draw(){
    image(imgholder,0,0,450,450)
    
    image(mustache,nose_x+50,nose_y+70,40,40)
}
function takepic(){
   
}