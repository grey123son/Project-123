noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(360,175);

    canvas = createCanvas(550,550);
    canvas.position(940, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background("#F5DEB3");
    document.getElementById("squareSize").innerHTML = "Font size of the square will be:"+difference;
    text('Greyson',noseX,noseY)
    textSize(difference);
}
function modelLoaded(){
    console.log("PoseNet Initialized! ")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.x;
        console.log("noseX ="+noseX+"noseY ="+noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        if(rightWristX>leftWristX){
            difference=floor(rightWristX-leftWristX);
        }
        if(leftWristX>rightWristX){
            difference=floor(leftWristX-rightWristX)
        }
        console.log("leftWristX ="+leftWristX+"rightWristX ="+rightWristX+"difference ="+difference);
    }
}