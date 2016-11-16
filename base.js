// var carousel = document.getElementByClassName('owl-stage')[0];


function rodaARoda() {
	var carousel = document.getElementsByClassName('owl-stage')[0];
	carousel.style.transform = 'translate3d(-18475px, 0 ,0)';
	carousel.style.transition = '15s';
	setTimeout(function() { amostraOTreco(); }, 15010);
}

function amostraOTreco() {
	document.getElementById('premio-loco').style.display = "block";
}
function altera() {
  document.getElementById("credits").innerHTML="$ 6.00";
}