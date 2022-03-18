square_y_N="";
square_x_N="";
leftwrist_x="";
rightwrist_x="";
difference=""
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas= createCanvas(550,500);
canvas.position(650,100);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function preload(){

}
function draw(){
background("grey");
document.getElementById("Sqaure_size").innerHTML="The size of the font is-:"+difference+"px";
    fill("#fafad2");
    stroke("lightcoral");
    strokeWeight(3);
text("Nalin",square_x_N,square_y_N);
textSize(difference);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
square_x_N= results[0].pose.nose.x ;
square_y_N=results[0].pose.nose.y;
leftwrist_x=results[0].pose.leftWrist.x ;
rightwrist_x= results[0].pose.rightWrist.x ;
difference=  Math.round(leftwrist_x-rightwrist_x);
}
}