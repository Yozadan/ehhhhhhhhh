function preload(){

}
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(480,480);
canvas.position(560,80);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Pose Net Is Initalized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    background("#4fbd9c");
}

