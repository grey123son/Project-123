function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(360,150)

    canvas = createCanvas(550,550);
    canvas.position(940, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
}
function draw(){
    background("#F5DEB3");
}
function modelLoaded(){
    console.log("PoseNet Initialized! ")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}