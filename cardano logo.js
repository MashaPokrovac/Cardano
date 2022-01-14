var c = document.getElementById("logo");
var ctx = c.getContext("2d");


var width = c.width;
var center = width/2;
var c1 = 316 * width/2000;
var c2 = 540 * width/2000;
var c3 = 706 * width/2000;
var c4 = 870 * width/2000;
var c5 = 956 * width/2000;

var r1 = 270 * width/2000/2;
var r2 = 160 * width/2000/2;
var r3 = 134 * width/2000/2;
var r4 = 110 * width/2000/2;
var r5 = 88 * width/2000/2;

var alpha = 0;
var beta = -Math.PI/6;

for (var alpha = 0; alpha < 2 * Math.PI; alpha += Math.PI/6) {

ctx.fillStyle = 'rgba(30, 75, 172, 0.5)';

  if(Math.round(alpha*180/Math.PI) % 60 === 0){
    ctx.beginPath();
    ctx.arc(center + c1 * Math.cos(alpha), center + c1 * Math.sin(alpha), r1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c3 * Math.cos(alpha), center + c3 * Math.sin(alpha), r3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c5 * Math.cos(alpha), center + c5 * Math.sin(alpha), r5, 0, 2 * Math.PI);
    ctx.fill();
  }
  else{
    ctx.beginPath();
    ctx.arc(center + c2 * Math.cos(alpha), center + c2 * Math.sin(alpha), r2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c4 * Math.cos(alpha), center + c4 * Math.sin(alpha), r4, 0, 2 * Math.PI);
    ctx.fill();

  }
}

function pali(){


  ctx.fillStyle = `rgba(30, 75, 172, 1)`;

  if(Math.round(alpha*180/Math.PI) % 60 === 0){
    ctx.beginPath();
    ctx.arc(center + c1 * Math.cos(alpha), center + c1 * Math.sin(alpha), r1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c3 * Math.cos(alpha), center + c3 * Math.sin(alpha), r3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c5 * Math.cos(alpha), center + c5 * Math.sin(alpha), r5, 0, 2 * Math.PI);
    ctx.fill();
  }
  else{
    ctx.beginPath();
    ctx.arc(center + c2 * Math.cos(alpha), center + c2 * Math.sin(alpha), r2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c4 * Math.cos(alpha), center + c4 * Math.sin(alpha), r4, 0, 2 * Math.PI);
    ctx.fill();
  }

  ctx.fillStyle = `rgb(0, 0, 0)`;

  if(Math.round(beta*180/Math.PI) % 60 === 0){
    ctx.beginPath();
    ctx.arc(center + c1 * Math.cos(beta), center + c1 * Math.sin(beta), r1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c3 * Math.cos(beta), center + c3 * Math.sin(beta), r3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c5 * Math.cos(beta), center + c5 * Math.sin(beta), r5, 0, 2 * Math.PI);
    ctx.fill();
  }
  else{
    ctx.beginPath();
    ctx.arc(center + c2 * Math.cos(beta), center + c2 * Math.sin(beta), r2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c4 * Math.cos(beta), center + c4 * Math.sin(beta), r4, 0, 2 * Math.PI);
    ctx.fill();
  }

  ctx.fillStyle = 'rgba(30, 75, 172, 0.5)';

  if(Math.round(beta*180/Math.PI) % 60 === 0){
    ctx.beginPath();
    ctx.arc(center + c1 * Math.cos(beta), center + c1 * Math.sin(beta), r1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c3 * Math.cos(beta), center + c3 * Math.sin(beta), r3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c5 * Math.cos(beta), center + c5 * Math.sin(beta), r5, 0, 2 * Math.PI);
    ctx.fill();
  }
  else{
    ctx.beginPath();
    ctx.arc(center + c2 * Math.cos(beta), center + c2 * Math.sin(beta), r2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + c4 * Math.cos(beta), center + c4 * Math.sin(beta), r4, 0, 2 * Math.PI);
    ctx.fill();
  }


alpha += Math.PI/6
beta += Math.PI/6
setTimeout(pali,1000);

};

pali(); 