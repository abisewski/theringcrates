// var carousel = document.getElementByClassName('owl-stage')[0];


function rodaARoda() {
	var carousel = document.getElementsByClassName('owl-stage')[0];
	carousel.style.transform = 'translate3d(-18295px, 0 ,0)';
	carousel.style.transition = '15s';
	setTimeout(function() { amostraOTreco(); }, 15800);
}

function amostraOTreco() {
	document.getElementById('premio-loco2').style.display = "block";
}

function altera() {
  document.getElementById("credits").innerHTML="$ ❤.❤❤";
}