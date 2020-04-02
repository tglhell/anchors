jQuery.event.add(window, 'load', function () {
	var winW = $(window).outerHeight(),
	winH = $(window).height(),
	footH = $('.footer').outerHeight(),
	irSecM = $('body').css('font-weight') / 4,
	irSec = irSecM * 3,
	mainIrWrap = $('.main-ir-wrap'),
	mainIrListW = mainIrWrap.find('.main-ir-list').width() + irSecM;
	mainIrWrap.css('height', winH - footH);

	for (i = 1; i < 6; i++) {
		$(function (i) {
			setTimeout(function () {
				$('.main-ir-list').attr('ir-intro', i);
			}, (irSec * 5) * i);
		}(i));
	}

	console.log(mainIrListW);

	$(window).resize(function(){
		if (winW < mainIrListW) {

		}
	});
});