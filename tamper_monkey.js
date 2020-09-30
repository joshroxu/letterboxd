// ==UserScript==
// @name        Letterboxd shortcut to mark as watched
// @description Hover & press 'w' to mark a movie as watched
// @include     https://letterboxd.com/*
// @version     1
// ==/UserScript==


var mouseOn = false;
var target = null;

window.onmouseover = function (e) {
  mouseOn = true;
  target = e.target;
}

window.onmouseleave = function (e) {
  mouseOn = false;
  target = null;
}

window.onkeypress = function (e) {
	if (mouseOn == true && e.key == "w") {
    if (target != null) {
      target.nextElementSibling.firstChild.firstChild.firstChild.click();
    }
  }
}