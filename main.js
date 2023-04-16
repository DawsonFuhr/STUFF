function preloal() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaed);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initalized')
}

function gotPoses()
{
    if(results.lenght > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose x = " + results[0].pose.nose.x);
    }
}

function draw() {

}

function take_snapshot()
{
    save('myFilterImage.png');
}