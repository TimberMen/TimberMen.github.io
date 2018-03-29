function init(){
	var html =""+
	'<h1 class="title"> Timber Men  Vaughan</h1>'+
	'<div class ="nav-bar">'+
	'	<div class="container">'+
	'		<img class="bg-image" src="../pics/smallBg.png"></img>'+
	'	</div>'+
	'	<ul>'+
	'	<li><a href="../index.html">Home</a></li>'+
	'	<li><a href="./projects.html"  class="active">Projects</a></li>'+
	'	<li><a href="../pricing/pricing.html">Pricing</a></li>'+
	'	</ul>'+
	'<div>'+
	'<hr/>';
	document.getElementById("header").innerHTML = html;
}
init();
