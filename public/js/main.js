<canvas id="canvas" width="500" height="500"></canvas>
var base = new Image();
var eje = new Image();
var rota;

let apagador = document.getElementById("checkbox"),
  slider = document.getElementById("range");

function fun(val) {
  let x = val == 0 ? 10 : 0;
  apagador.value = x;
  clean();
  slider.value = x;

  
}

function dimmer(val) {
  clean();
  if (val == 0) {
    apagador.checked = false;
    apagador.value = 0;
  } else {
    apagador.checked = true;
    apagador.value = 10;
  }

  if(val>=1&&val<=3){
    rota=250;
  }else if(val>3&&val<=6){
    rota=500;
  }else if(val==0){
    rota=0;
  }
}

function init(){
  base.src = 'img/base.png';
  eje.src = 'img/eje2.png';
  window.requestAnimationFrame(draw);
}

function draw(rota) {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // limpiar canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);
  var r=rota;

  // aspas
  var time = new Date();
      ctx.rotate( ((r*Math.PI)/60)*time.getSeconds() + ((r*Math.PI)/60000)*time.getMilliseconds() );
      ctx.fillRect(0,-12,100,24); // aspa 1
      ctx.fillRect(-100,-12,100,24); // aspa 2
      ctx.drawImage(eje,-12,-12);

      ctx.restore();
      ctx.beginPath();
      ctx.stroke();
 
      ctx.drawImage(base,0,40,300,300);

      window.requestAnimationFrame(draw);
  
}

init();

function clean() {
  for (var i = 0; i <= 10; i++) {
  }
}