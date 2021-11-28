function preload()
{

}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded()
{
    console.log("Pose is Intialized");
}

function draw()
{
 image(video,0, 0, 300, 300);
}

function take_snapshot()
{
    save('You_Have_a_Giant_Moustache.png');
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);

    }
}