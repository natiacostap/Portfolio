 AOS.init(); 

 function english(){
console.log('ingles')
document.getElementById('fe-ca').style.display='none';
document.getElementById('fe-ca-en').style.display='block';
document.getElementById('aboutme').style.display='none';
document.getElementById('aboutme-en').style.display='block';
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
  document.getElementById('fe-ca').style.display='block';
document.getElementById('fe-ca-en').style.display='none';
document.getElementById('aboutme').style.display='block';
document.getElementById('aboutme-en').style.display='none';
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

checkbox.addEventListener("change", check, false);

function check(){
  if(checkbox.checked){
    
    english();
  }else{
    spanish();
  }
}


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

document.getElementById("proj1").addEventListener("click", function(){
  document.getElementById("overlay1").style.display='block';
});

document.getElementById("proj2").addEventListener("click", function(){
  document.getElementById("overlay2").style.display='block';
});
document.getElementById("proj3").addEventListener("click", function(){
  document.getElementById("overlay3").style.display='block';
});
document.getElementById("proj4").addEventListener("click", function(){
  document.getElementById("overlay4").style.display='block';
});


function off() {
  document.getElementById("overlay1").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlay3").style.display = "none";
  document.getElementById("overlay4").style.display = "none";
}
