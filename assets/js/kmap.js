(function () {
	var c = (location.protocol == "https:") ? "https:" : "http:";
	var a = "16137cec";
	if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
		return
	}
	window.daum = window.daum || {};
	window.daum.roughmap = {
		cdn: a,
		URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
		url_protocal: c
	};
	var b = c + "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" + a + "/roughmapLander.js";
	document.write('<script charset="UTF-8" src="' + b + '"><\/script>')

		
	$(document).on('keydown keyup', function (e) {
		if (e.type == 'keydown') {
			if (e.shiftKey) {
				$('.kmap').addClass('dim');
			}
		} else {
			$('.kmap').removeClass('dim');
		}
	});

	$('.btn-large-map').click(function () {
		$('.kmap').removeClass('dim');
	});
})();
