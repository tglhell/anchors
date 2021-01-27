jQuery.event.add(window, 'load', function () {
	setInterval(function(){
		$('.main-scr-outer').append('<p class="main-scr-text"><marquee loop="1" scrollamount="5" direction="up"><strong>Anything is Possible</strong></marquee></p>');
	}, 25000);

	setTimeout(function(){
		$('.main-scr-text:nth-child(1)').remove();
			setInterval(function(){
				$('.main-scr-text:nth-child(1)').remove();
			}, 25000);
	}, 50000);
});