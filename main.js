function setup() {
    webcam=createCapture(video);
    webcam.size(500,350);
    webcam.postion(150,100);
    canvas=createCanvas(350,350);
    canvas.postion(700,100);
    ml=ml5.poseNet(webcam,modelLoaded);
    ml.on("pose",gotPoses)
}


function modelLoaded(params) {
    console.log("The model is loaded");
}

function gotPoses(arrayResults) {
    if (arrayResults.lenth>0) {
        console.log(arrayResults);
    }
}