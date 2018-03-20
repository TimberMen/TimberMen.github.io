var slider = document.getElementById("deweeding-slider");
 var deweedFt = document.getElementById("deweeding-ft");
 var deweedPrice;
 var deweedAmountPerFoot;

function init(){
  deweedPrice = document.getElementById("deweeding-price");

  deweedAmountPerFoot = 10;
  deweedFt.value = slider.value;
  deweedPrice.innerHTML = slider.value*deweedAmountPerFoot;
}

slider.oninput = function() {
  deweedPrice.innerHTML = this.value*deweedAmountPerFoot;
  deweedFt.value=this.value;
}

deweedFt.oninput = function(){
  deweedPrice.innerHTML = this.value*deweedAmountPerFoot;
  slider.value=this.value;
}

init();
