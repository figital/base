/* TargetAnchorInterceptor(shazbot); */

defaults = {
	height:"550px",
	width:"750px",
	top:"220px",
	left:"150px",
	scrollbars:true,
	resizable:true,
	location:"",
	backgroundColor:"#aaa"
}

function launchit(data) {

	var url = data.getAttribute('url');
	openWebView(url);


}

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


function openWebView(href) {

		var k = document.createElement("div");
		k.innerHTML = "X";
		k.style.width = 20;
		k.style.float = "right";
		k.style.position = "relative";
		k.style.right = "0px";


		// title / header
		var d = document.createElement("div");
		console.log('widge says hello');
		//d.innerHTML = "<div class='widge' style='padding:8px;font-size:15px;font-weight:bold;'>" + href + "</div>";
		d.style.position = "absolute";		
		d.style.width = defaults.width;
		d.style.height = defaults.height;
		d.style.top = defaults.top;
		d.style.left = defaults.left;
		
		d.style.background = defaults.backgroundColor;
		d.style.color = "white";

		d.style.border = "2px solid #333";
		d.style.zIndex = 1002;
		d.style.boxShadow = "5px 5px 8px #555";		
		d.style.overflow = "hidden";


		var t = document.createElement("div");
		t.className = "widge";
		t.innerHTML = href;


		// content window / webview
		var o = document.createElement("webview");


		o.setAttribute("src", href); 
		o.style.width = "100%";
		o.style.height = "100%";
		o.style.border = "0px";
		o.style.background = "#ccc";


		// status bar
		var s = document.createElement("div");

		s.style.width = "100%";
		s.style.height = "20";
		s.style.border = "0px";
		s.style.background = "#ccc";
		s.style.bottom = 0;	
		s.style.position = 'absolute';
		s.innerHTML = "resize knob goes here";

		
		d.appendChild(k);
		d.appendChild(t);
		d.appendChild(o);
		d.appendChild(s);
		document.body.appendChild(d);

		$(".widge").parent().draggable({
			containment: "window",
			stop: function(event, ui) {
			//console.log(ui);
			//chrome.storage.local.setItem(ui.helper.context.id, JSON.stringify(ui.position));
			//alert('you stopped dragging ' + ui.helper.context.id.toUpperCase() + ' at ' + ui.position.left + ',' + ui.position.top);
			console.log(JSON.stringify(ui.position)); 
			}
		}).css({cursor:'move'}).addClass('floater');
		
	return true;

}

console.log("widget.js is loaded");
