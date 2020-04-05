jQuery.event.add(window, 'load', function () {
	for (i = 1; i < 6; i++) {
		$(function (i) {
			setTimeout(function () {
				$('.main-ir-list').attr('ir-intro', i);
				if (i == 5) {
					setTimeout(function(){
						$('.main-logo-outer').addClass('l-phase');
					}, 2200);
				}
			}, 1500 * i);
		}(i));
	}
});