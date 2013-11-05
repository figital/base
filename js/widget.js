/* TargetAnchorInterceptor(shazbot); */
function intercept(anchor) {

	var target = anchor.target;
	var href = anchor.href;
	
	// console.log(anchor);
	
	if (target == "_alert") {

		$.get(href, function( data ) {
			console.log(JSON.stringify(data));
			//alert(JSON.stringify(data));
		});


	} else if (target == "_widget") {


	} else if (target == "_blank") {

		window.open(href, target);
	
	} else {

		alert('TARGET: "' + target + '" does not exist');

	}

	return false;
	
}


console.log("widget.js is loaded");
