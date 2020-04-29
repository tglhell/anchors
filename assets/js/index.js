jQuery.event.add(window, 'load', function () {
	var mIrList = $('.main-ir-list'),
	mStepNavi = $('.main-step-navi li'),
	irBox = setTimeout, iCnt = 6,
	mLogoOuter = $('.main-logo-outer');
	mainHeight();
	
	$(window).resize(function(){
		mainHeight();
		naviWid();
	});
	
	mStepNavi.click(function(){
		var _this = $(this),
		stepIdx = _this.index() + 1;
		if (!mStepNavi.is(':animated')) {
			if (winW > 1024) {
				_this.stop().animate({'overflow':'visible'}, 1500);
			} else {
				_this.stop().animate({'overflow':'visible'}, 1000);
			}
			mLogoOuter.removeClass('l-phase');
			_this.addClass('on').siblings().removeClass('on');
			mIrList.attr('ir-intro', stepIdx);
			if (stepIdx == iCnt) {
				lPhase();
			}
		}
	});

	function naviWid() {
		winW = $(window).width();
		if (winW > 1024) {
			for (i = 1; i < iCnt + 1; i++) {
				$(function (i) {
					irBox(function () {
						mIrList.attr('ir-intro', i);
						mStepNavi.eq(i - 1).addClass('on').siblings().removeClass('on');
						if (i == iCnt) {
							lPhase();
						}
					}, 1500 * i);
				}(i));
			}
		}
	}
	naviWid();

	function mainHeight () {
		winH = $(window).height();
		$('.wrap.main').css('height', winH);
	}

	function lPhase () {
		irBox(function () {
			mLogoOuter.addClass('l-phase');
			$('.header-cont').prepend('<div class="chk-arrow">→</div>');
			$('.header-cont').prepend('<div class="chk-circle"></div>');
		}, 1000);

		irBox(function () {
			$('.chk-arrow, .chk-circle').addClass('active').fadeIn(800);
		}, 5000);

		irBox(function () {
			$('.chk-arrow, .chk-circle').remove();
		}, 10000);
	}
});