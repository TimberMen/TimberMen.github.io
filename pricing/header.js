function init(){
	var html =
`
	<h1 class="title"> Timber Men  Vaughan</h1>
	<div class ="nav-bar">
	<div class="container">
		<img class="bg-image" src="smallBg.png"></img>
	</div>
		<ul>
		<li><a href="../index.html">Home</a></li>
		<li><a href="./pricing.html" class="active">Pricing</a></li>
		</ul>
	<div>
`;
	document.getElementById("header").innerHTML = html;
}

init();
