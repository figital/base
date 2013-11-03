
chrome.app.runtime.onLaunched.addListener(function() {
  runApp();

});

chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});


function runApp() {
  chrome.app.window.create('index.html', {
    bounds: {
      'width': 640,
      'height': 480
    },
    frame: 'chrome'
  });
}
