 AOS.init(); 

 function english(){
console.log('ingles')
document.getElementById('desarrollado').style.display='none';
document.getElementById('develop').style.display='block';
document.getElementById('contacto').style.display='none';
document.getElementById('contact').style.display='block';
document.getElementById('proyectos').style.display='none';
document.getElementById('projects').style.display='block';
document.getElementById('hola').style.display='none';
document.getElementById('hello').style.display='block';
document.getElementById('soy').style.display='none';
document.getElementById('im').style.display='block';
document.getElementById('world').style.display='block';
document.getElementById('mundo').style.display='none';
document.getElementById('p2-es').style.display='none';
document.getElementById('p3-es').style.display='none';
document.getElementById('p4-es').style.display='none';
document.getElementById('p2-en').style.display='block';
document.getElementById('p3-en').style.display='block';
document.getElementById('p4-en').style.display='block';
}

function spanish(){
  console.log("español");
document.getElementById('develop').style.display='none';
document.getElementById('desarrollado').style.display='block';
document.getElementById('contact').style.display='none';
document.getElementById('contacto').style.display='block';
document.getElementById('projects').style.display='none';
document.getElementById('proyectos').style.display='block';
document.getElementById('hola').style.display='block';
document.getElementById('hello').style.display='none';
document.getElementById('soy').style.display='block';
document.getElementById('im').style.display='none';
document.getElementById('world').style.display='none';
document.getElementById('mundo').style.display='block';
document.getElementById('p2-es').style.display='block';
document.getElementById('p3-es').style.display='block';
document.getElementById('p4-es').style.display='block';
document.getElementById('p2-en').style.display='none';
document.getElementById('p3-en').style.display='none';
document.getElementById('p4-en').style.display='none';
}

let checkbox = document.getElementById('checkbox');
console.log('checkbox:',checkbox)

checkbox.addEventListener("change", check, false);
console.log('checkbox:',checkbox)

function check(){
  if(checkbox.checked){
    english();
  }else{
    spanish();
  }
}
// var canvas = document.getElementById('rectangle'),
//   ctx = canvas.getContext('2d'),
//   w = canvas.width = window.innerWidth,
//   h = canvas.height = window.innerHeight,
    
//   hue = 217,
//   stars = [],
//   count = 0,
//   maxStars = 1400;

// // Thanks @jackrugile for the performance tip! https://codepen.io/jackrugile/pen/BjBGoM
// // Cache gradient
// var canvas2 = document.createElement('canvas'),
//     ctx2 = canvas2.getContext('2d');
//     canvas2.width = 100;
//     canvas2.height = 100;
// var half = canvas2.width/2,
//     gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
//     gradient2.addColorStop(0.025, '#fff');
//     gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
//     gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
//     gradient2.addColorStop(1, 'transparent');

//     ctx2.fillStyle = gradient2;
//     ctx2.beginPath();
//     ctx2.arc(half, half, half, 0, Math.PI * 2);
//     ctx2.fill();

// // End cache

// function random(min, max) {
//   if (arguments.length < 2) {
//     max = min;
//     min = 0;
//   }
  
//   if (min > max) {
//     var hold = max;
//     max = min;
//     min = hold;
//   }

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function maxOrbit(x,y) {
//   var max = Math.max(x,y),
//       diameter = Math.round(Math.sqrt(max*max + max*max));
//   return diameter/2;
// }

// var Star = function() {

//   this.orbitRadius = random(maxOrbit(w,h));
//   this.radius = random(60, this.orbitRadius) / 12;
//   this.orbitX = w / 2;
//   this.orbitY = h / 2;
//   this.timePassed = random(0, maxStars);
//   this.speed = random(this.orbitRadius) / 50000;
//   this.alpha = random(2, 10) / 10;

//   count++;
//   stars[count] = this;
// }

// Star.prototype.draw = function() {
//   var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
//       y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
//       twinkle = random(10);

//   if (twinkle === 1 && this.alpha > 0) {
//     this.alpha -= 0.05;
//   } else if (twinkle === 2 && this.alpha < 1) {
//     this.alpha += 0.05;
//   }

//   ctx.globalAlpha = this.alpha;
//     ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
//   this.timePassed += this.speed;
// }

// for (var i = 0; i < maxStars; i++) {
//   new Star();
// }

// function animation() {
//     ctx.globalCompositeOperation = 'source-over';
//     ctx.globalAlpha = 0.8;
//     ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
//     ctx.fillRect(0, 0, w, h)
  
//   ctx.globalCompositeOperation = 'lighter';
//   for (var i = 1, l = stars.length; i < l; i++) {
//     stars[i].draw();
//   };  
  
//   window.requestAnimationFrame(animation);
// }

// animation();

let colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

let step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
let colorIndices = [0,1,2,3];

//transition speed
let gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
let c0_0 = colors[colorIndices[0]];
let c0_1 = colors[colorIndices[1]];
let c1_0 = colors[colorIndices[2]];
let c1_1 = colors[colorIndices[3]];

let istep = 1 - step;
let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
let color1 = "rgb("+r1+","+g1+","+b1+")";

let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
let color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#background').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
