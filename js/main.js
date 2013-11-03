
function toggleFullScreen() {
	if (!document.webkitFullscreenElement) {  
		document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	} else {
		document.webkitCancelFullScreen();
	}
}


$(document).ready(function() {

	$( "#fullscreen" ).bind( "click", function() {
  		toggleFullScreen();
	});


})







