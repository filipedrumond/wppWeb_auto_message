// paste on console of whatsapp wheb with any in text box of mesage

function loadJquery(){
	var jQueryScript = document.createElement('script'); jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'); document.head.appendChild(jQueryScript);
	// if(typeof jQuery == 'undefined'){
	// }
	// return jQuery;
}
function sendMsg(message){
	$("._2WovP ._2S1VP").html(message);
	$($('._39LWd')[1]).remove();
	$('[data-icon="send"]').click();
}
function cron(horas, minutos, message){
	loadJquery();
	var tempo = 1 * 1000 * 60;
	var observerTimer = setInterval(function(){ 
		var agora = new Date(); 
		if(agora.getHours() == horas && agora.getMinutes() == minutos){
			sendMsg(message);
			clearInterval(observerTimer);
		}
	}, tempo);
}
cron(4,20,'Yeah, science bitch');

// var press = jQuery.Event("keydown");
// press.which = 40;
// press.keyCode = 88;
// press.currentTarget = 'div._2S1VP.copyable-text.selectable-text';
// press.keyCode = 88;
// $("._2WovP ._2S1VP").trigger(press);