$(function(){
	posArr = [],
	pfHgt = $(window).height(),
	wrapBox = $('.ctr-ir'),
	wrapBoxLeng = wrapBox.length;
	Service = $('.service-list');
	servicePos = $('.service-cont').offset().top;
	anchorsMv = $('.anchors-mv-box').offset().top;
	partnersPos = $('.partners-outer').offset().top;

	$(window).scroll(function (e) {
		alignPos ();
		service();
		partners();

		if (scrPos > 0) {
			$('.top-about-outer').addClass('on');
		} else {
			$('.top-about-outer').removeClass('on');
		}
	});

	function service () {
		if (scrPos >= servicePos-800) {
			Service.addClass('on'); 
		} else {
			Service.removeClass('on cursor'); 
		}
	}

	function partners () {
		if (scrPos >= partnersPos-300) {
			$('.partners-outer').addClass('on');
		} else {
			$('.partners-outer').removeClass('on');
		}
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