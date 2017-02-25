"use strict";

window.onload = function() {
	document.querySelector("#reverseit").onclick = sendReverse;
};

function sendReverse() {
	var textarea = document.querySelector("textarea");

	var ajax = new XMLHttpRequest();
	ajax.open("GET", '/reverse?string=' + textarea.value, true)
	ajax.send();
}