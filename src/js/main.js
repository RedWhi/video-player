var video;
var seconds = 5;
var seconds_timer_id;
var count = false;

// var result;

window.onload = function() {
	video = document.getElementById("video");
	video.addEventListener("play", function() {
		
		timer();

	}, false);
}

function playPause() {
	if (video.paused) {
		video.play();
	} else
	{
		video.pause();
	}
}

function timer() {
        seconds = 5;
        seconds_timer_id = setInterval(function() {
       if (count === false) {    
            if (seconds > 0) {
                seconds --;          
            } else 
            	if (seconds === 0) {
            	video.pause();	
            	check();
            	clearInterval(seconds_timer_id);
            	count = true;
            }
        }
        }, 1000);

    }

function check() {
	while (!count) {
		var result = prompt('Для продолжения просмотра нужно пройти регистрацию', 'example@gmail.com');
		if ( /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(result)) { 
			video.play();
			count = true;
			break }
			alert ('invalid email, try again');
	}
}

function fullSize() {
	video.webkitEnterFullscreen();
}
