var targets = ['./dist/bundle.js'];

targets.forEach(function (js) {
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('src', chrome.extension.getURL(js));
  document.body.appendChild(scriptElement);
});
