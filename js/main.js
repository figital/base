

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

	$( "#launch" ).bind( "click", function() {
		var url = $('#url').val();
  		console.log("launch button clicked: " + url);
  		openWebView(url);
	});

})

console.log("main.js loaded");






