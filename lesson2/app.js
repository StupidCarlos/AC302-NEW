console.log("test.....");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0)
ctx.lineTo(200,100)
ctx.lineWidth= 5 ;
ctx.stroke();

ctx.moveTo(200,100)
ctx.lineTo(400,0)
ctx.lineWidth= 5 ;
ctx.stroke();


ctx.moveTo(400,0)
ctx.lineTo(600,100)
ctx.lineWidth= 5 ;
ctx.stroke();


ctx.moveTo(600,100)
ctx.lineTo(800,0)
ctx.lineWidth= 5 ;
ctx.stroke();

ctx.fillStyle='rgb(200,50,10)';
ctx.fillRect(75,125,150,100);

ctx.strokeStyle='rgb(10,200,10)';
ctx.strokeRect(65,115,175,125);