jQuery.event.add(window, 'load', function () {
	var mIrList = $('.main-ir-list'),
	mStepNavi = $('.main-step-navi li'),
	irBox = setTimeout,
	mLogoOuter = $('.main-logo-outer');
	mainHeight ();
	
	$(window).resize(function(){
		mainHeight ();
	});
	
	for (i = 1; i < 7; i++) {
		$(function (i) {
			irBox(function () {
				mIrList.attr('ir-intro', i);
				mStepNavi.eq(i - 1).addClass('on').siblings().removeClass('on');
				if (i == 6) {
					lPhase ();
				}
			}, 1500 * i);
		}(i));
	}

	mStepNavi.click(function(){
		var _this = $(this),
		stepIdx = _this.index() + 1;
		if (!mStepNavi.is(':animated')) {
			_this.stop().animate({ 'overflow': 'visible' }, 1000);
			mLogoOuter.removeClass('l-phase');
			_this.addClass('on').siblings().removeClass('on');
			mIrList.attr('ir-intro', stepIdx);
			if (stepIdx == 6) {
				lPhase ();
			}
		}
	});

	function mainHeight () {
		winH = $(window).height();
		$('.wrap.main').css('height', winH);
	}

	function lPhase () {
		irBox(function () {
			mLogoOuter.addClass('l-phase');
		}, 2200);
	}
});