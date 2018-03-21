var slider = document.getElementById("deweeding-slider");
 var deweedFt = document.getElementById("deweeding-ft");
var deweedLight = document.getElementById("Light");
var deweedMedium = document.getElementById("Medium");
var deweedHeavy = document.getElementById("Heavy");
 var deweedPrice;
 var deweedAmountPerFoot;

function init(){
  deweedPrice = document.getElementById("deweeding-price");
  deweedAmountPerFoot = 20;
  deweedFt.value = slider.value;
  deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedMedium.checked=true;
}

slider.oninput = function() {
  deweedPrice.innerHTML = this.value*deweedAmountPerFoot;
  deweedFt.value=this.value;
}

deweedFt.oninput = function(){
  deweedPrice.innerHTML = this.value*deweedAmountPerFoot;
  slider.value=this.value;
}
deweedLight.onclick = function(){
  deweedAmountPerFoot = 15;
  deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedMedium.checked=false;
  deweedHeavy.checked=false;
}

deweedMedium.onclick = function(){
 deweedAmountPerFoot = 20;
 deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedLight.checked=false;
  deweedHeavy.checked=false;
}

deweedHeavy.onclick = function(){
  deweedAmountPerFoot = 30;
  deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedMedium.checked=false;
  deweedLight.checked=false;
}
init();
