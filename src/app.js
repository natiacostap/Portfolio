 AOS.init(); 

 function english(){
console.log('on')
document.getElementById('home-right-en').style.display='block';
document.getElementById('home-right-es').style.display='none';
document.getElementById('world').style.display='block';
document.getElementById('mundo').style.display='none';
document.getElementById('navbar-en').style.display='block';
document.getElementById('navbar-es').style.display='none';
document.getElementById('contact-me').style.display='block';
document.getElementById('contactame').style.display='none';
document.getElementById('project').style.display='block';
document.getElementById('proyecto').style.display='none';
document.getElementById('aboutme').style.display='block';
document.getElementById('sobremi').style.display='none';



}

function spanish(){
  console.log("Hemos pulsado en off");
document.getElementById('home-right-en').style.display='none';
document.getElementById('home-right-es').style.display='block';
document.getElementById('world').style.display='none';
document.getElementById('mundo').style.display='block';
document.getElementById('navbar-en').style.display='none';
document.getElementById('navbar-es').style.display='block';
document.getElementById('contact-me').style.display='none';
document.getElementById('contactame').style.display='block';
document.getElementById('project').style.display='none';
document.getElementById('proyecto').style.display='block';
document.getElementById('aboutme').style.display='none';
document.getElementById('sobremi').style.display='block';



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

