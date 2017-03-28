function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  'piłka nozna, film, książki';

	document.getElementById("deviceDetails").innerHTML = info;	
}