img="";
objects=[];
status="";
function preload(){
    img=loadImage("0514a04548a0b8764b1029bc85576d8d.jpg");
}
function setup(){
   canvas= createCanvas(640,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
    }
     function modelLoaded() {
          console.log("Model Loaded!");
          status = true;
           objectDetector.detect(img, gotResult);
 }
  function gotResult(error, results) {
       if (error) {
            console.log(error);
    
         } 
         console.log(results); 
         objects = results; }

         function draw() { 
             image(img, 0, 0, 640, 400);
              if(status != "") {
              for (i = 0; i < objects.length; i++) {
              document.getElementById("status").innerHTML = "Status : Object Detected";
               fill("#FF0000"); percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
                noFill();
                 stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
        } } }

