// ==UserScript==
// @name        Letterboxd shortcut to mark as watched
// @description Hover & press 'w' to mark a movie as watched
// @include     https://letterboxd.com/*
// @version     1
// ==/UserScript==


let mouseOn = false;
let target = null;

window.onmouseover = (e) => {
    mouseOn = true;
    target = e.target;
}

window.onmouseleave = (e) => {
    mouseOn = false;
    target = null;
}

window.onkeypress = (e) => {
	if (mouseOn == true && e.key == "w" && target != null) {
        target.nextElementSibling.firstChild.firstChild.firstChild.click();
    }
}
