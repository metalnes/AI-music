song=""
leftWristx=""
leftWristy=""
rightWristx=""
rightWristy=""
scoreRightwrist=""
scoreleftwrist=""

function preload(){
    sound=loadSound("Dancin - Krono Remix.mp3")
}
function setup(){
    canvas=createCanvas(600,500)
    canvas.position(567,250)

    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotposes)
}
function play(){
    sound.play()
    sound.setVolume(1)
    sound.rate(1)
}
function modelloaded(){
    console.log("Pose Net IS initialized")
}
function gotposes(results){
console.log(results)
if(results.length > 0){
    scoreRightwrist=results[0].pose.keypoints[10].score
    scoreleftwrist=results[0].pose.keypoints[9].score

    leftWristx=results[0].pose.leftWrist.x
    leftWristy=results[0].pose.leftWrist.y

    rightWristx=results[0].pose.rightWristx
    rightWristy=results[0].pose.rightWristy
}



}
function draw(){
    image(video,0,0,600,500)
fill("red")
stroke("aquamarine")
if(scoreRightwrist>0.2){
    circle(rightWristx,rightWristy,30)
    if(rightWristy> 0 && rightWristy<=100){
        document.getElementById("speed").innerHTML="Speed=0.5x"
        sound.rate(0.5)
    }
    else if(rightWristy>100 && rightWristy<=200){
        document.getElementById("speed").innerHTML="Speed=1x" 
        sound.rate(1)
    }
    else if(rightWristy>200 && rightWristy<=300){
        document.getElementById("speed").innerHTML="Speed=1.5x" 
        sound.rate(1.5)
    }
    else if(rightWristy>300 && rightWristy<=400){
        document.getElementById("speed").innerHTML="Speed=2x" 
        sound.rate(2)
    }
else if(rightWristy>400 ){
    document.getElementById("speed").innerHTML="Speed=2.5x"
    sound.rate(2.5)
}



}
if(scoreleftwrist>0.2){
    circle(leftWristx,leftWristy,30)
    IsNumberleftWristY=Number(leftWristy)
    remove_decimals=floor(IsNumberleftWristY)
    volume=remove_decimals/400
    document.getElementById("volume").innerHTML="volume"+volume
    sound.setVolume(volume)
}



}


































