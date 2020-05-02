$(function(){
	$(document).on('keydown keyup', function () {
		if (event.type == 'keydown') {
			if (event.shiftKey) {
				$('#map').addClass('dim');
			}
		} else {
			$('#map').removeClass('dim');
		}
	});

	$('.btn-large-map').click(function () {
		$('#map').removeClass('dim');
	});
});