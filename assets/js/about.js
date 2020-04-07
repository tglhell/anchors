$(function(){
	posArr = [],
	pfHgt = $(window).height(),
	wrapBox = $('.ctr-ir'),
	wrapBoxLeng = wrapBox.length;
	ServiceLi = $('.service-list li');
	ServiceLen = ServiceLi.length;
	servicePos = $('.service-cont').offset().top;
	anchorsMv = $('.anchors-mv-box').offset().top;

	$(window).scroll(function (e) {
		alignPos ();
		service();
	});

	function service () {
		if (scrPos >= servicePos - 700) {
			for (i = 0; i <= ServiceLen; i++) {
				$(function (i) {
					setTimeout(function () {
						ServiceLi.eq(i).addClass('on'); 
					}, i * 600);
				}(i));
			}
		}

		setTimeout(function () {
			if ($('.service-list li').hasClass('on')) {
				$('.service-list li').addClass('cursor');
			}
		}, ServiceLen * 600 + 400);
	}

	function alignPos (){
		scrPos = $(this).scrollTop();
		for (var i = 0; i < wrapBoxLeng; i++) {
			var thisPos = wrapBox.eq(i).offset().top;
			posArr.push(thisPos);
			if (scrPos > posArr[i] - pfHgt + 100) {
				wrapBox.eq(i).removeClass('on').removeAttr('ir').attr('ir-idx', (i + 5));
			} else {
				wrapBox.eq(i).addClass('on').removeAttr('ir-idx').attr('ir', '');
			}
		}
	};
	alignPos();
});