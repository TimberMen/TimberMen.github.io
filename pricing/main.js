var slider = document.getElementById("deweeding-slider");
var deweedFt = document.getElementById("deweeding-ft");
var deweedLight = document.getElementById("Light");
var deweedMedium = document.getElementById("Medium");
var deweedHeavy = document.getElementById("Heavy");
var deweedPrice;
var deweedAmountPerFoot;

var mowingSlider = document.getElementById("mowing-slider");
var mowingFt = document.getElementById("mowing-ft");
var Light1 = document.getElementById("Light1");
var Medium1 = document.getElementById("Medium1");
var Heavy1 = document.getElementById("Heavy1");

var mowingPrice;
var mowingAmountPerFoot;

var totalPrice;
function init(){
  deweedPrice = document.getElementById("deweeding-price");
  deweedAmountPerFoot = 5;
  deweedFt.value = slider.value;
  deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedLight.checked=true;


  mowingPrice = document.getElementById("mowing-price");
  mowingAmountPerFoot = 0.05;
  mowingFt.value = mowingSlider.value;
  mowingPrice.innerHTML = mowingSlider.value*mowingAmountPerFoot;
  Medium1.checked=true;

  totalPrice = document.getElementById("total-price");
}
init();
calcTotal();

function calcTotal(){
  totalPrice.innerHTML = parseFloat(deweedPrice.innerHTML) + parseFloat(mowingPrice.innerHTML);
}
slider.oninput = function() {
  deweedPrice.innerHTML = this.value*deweedAmountPerFoot;
  deweedFt.value=this.value
  calcTotal();
}

deweedFt.oninput = function(){
  deweedPrice.innerHTML = this.value*deweedAmountPerFoot;
  slider.value=this.value;
  calcTotal();
}
deweedLight.onclick = function(){
  deweedAmountPerFoot = 5;
  deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedMedium.checked=false;
  deweedHeavy.checked=false;
  calcTotal();
}

deweedMedium.onclick = function(){
 deweedAmountPerFoot = 10;
 deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedLight.checked=false;
  deweedHeavy.checked=false;
  calcTotal();
}

deweedHeavy.onclick = function(){
  deweedAmountPerFoot = 15;
  deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
  deweedMedium.checked=false;
  deweedLight.checked=false;
  calcTotal();
}
/******************************************************************************/
mowingSlider.oninput = function() {
  mowingPrice.innerHTML = this.value*mowingAmountPerFoot;
  mowingFt.value=this.value;
  calcTotal();
}

mowingFt.oninput = function(){
  mowingPrice.innerHTML = this.value*mowingAmountPerFoot;
  mowingSlider.value=this.value;
  calcTotal();
}
Light1.onclick = function(){
  mowingAmountPerFoot = 0.025;
  mowingPrice.innerHTML = mowingSlider.value*mowingAmountPerFoot;
  Medium1.checked=false;
  Heavy1.checked=false;
  calcTotal();
}

Medium1.onclick = function(){
  mowingAmountPerFoot = .05;
  mowingPrice.innerHTML = mowingSlider.value*mowingAmountPerFoot;
  Light1.checked=false;
  Heavy1.checked=false;
  calcTotal();
}

Heavy1.onclick = function(){
  mowingAmountPerFoot = .1;
  mowingPrice.innerHTML = mowingSlider.value*mowingAmountPerFoot;
  Medium1.checked=false;
  Light1.checked=false;
  calcTotal();
}
