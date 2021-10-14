
 window.onload = function (){
  var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext("2d"),
  radius = canvas.height/2;
  
  ctx.translate(radius,radius);
  radius = radius * 0.90;
  
  drawClock(ctx,radius);
 };
 
 function drawClock(ctx,radius){
  drawFace(ctx,radius);
  drawNumbers(ctx,radius);
 }
 
 function drawNumbers(ctx,radius){
   var ang,num;
   
  ctx.font=radius*0.15+"px arial";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  
  for(num=1; num < 13; num++){
   ang = num*Math.PI/6;
   
   ctx.rotate(ang);
   ctx.translate(0, -radius*0.85);
   ctx.rotate(-ang);
   
   ctx.fillText(num.toString(),0,0);
   
   ctx.rotate(ang);
   ctx.translate(0,radius*0.85);
   ctx.rotate(-ang);
  }
 }
 
 function drawFace(ctx,radius){
   var grad;
   
  ctx.beginPath();
  ctx.arc(0,0,radius,0,Math.PI*2);
  ctx.fillStyle="white";
  ctx.fill();
  
  grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
  grad.addColorStop(0,"#333");
  grad.addColorStop(0.5,"white");
  grad.addColorStop(1,"#333");
  
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(0,0,radius*0.1,0,Math.PI*2);
  ctx.fillStyle="#333";
  ctx.fill();
 }
