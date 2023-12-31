img="";
status="";
objects=[];
function preload(){
    img=loadImage('tv.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML='Detecting Objects';
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for (let i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="Object Detected";
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    stroke('red');
    noFill();
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

            
        }
    }
  
}

function modelLoaded(){
    console.log("model is loaded!");
    status=true;
    objectDetector.detect( img ,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function back(){
    window.location="index.html";
}