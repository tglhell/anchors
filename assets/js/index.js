jQuery.event.add(window, 'load', function () {
	var mIrList = $('.main-ir-list'),
	mStepNavi = $('.main-step-navi li'),
	mStepNaviLength = mStepNavi.length,
	irBox = setTimeout,
	mLogoOuter = $('.main-logo-outer');
	mainHeight();
	
	$(window).resize(function(){
		mainHeight();
	});
	
	mStepNavi.click(function(){
		var _this = $(this),
		stepIdx = _this.index() + 1;
		if (!mStepNavi.is(':animated')) {
			if (winW > 1024) {
				_this.stop().animate({'overflow':'visible'}, 1200);
			} else {
				_this.stop().animate({'overflow':'visible'}, 1000);
			}
			mLogoOuter.removeClass('l-phase');
			_this.addClass('on').siblings().removeClass('on');
			mIrList.attr('ir-intro', stepIdx);
			if (stepIdx == mStepNaviLength) {
				lPhase();
			}
		}
	});

	$('.main').on('mousewheel', function(e){
		if ($(mLogoOuter).hasClass('m-wheel')) {
			var numIdx = $('.main-step-navi li.on').index();
			if (!mIrList.is(':animated')) {
				mIrList.animate({ 'overflow': 'visible' }, 1200);
				if (e.originalEvent.wheelDelta < 0) {
					if (numIdx !== $(this.length) && mIrList.attr('ir-intro') < mStepNaviLength) {
						mStepNavi.eq(numIdx + 1).addClass('on').siblings().removeClass('on');
						mIrList.attr('ir-intro', (numIdx + 1) + 1);
						if (mIrList.attr('ir-intro') == mStepNavi.length) {
							lPhase();
						}
					}
				} else {
					if (numIdx !== 0) {
						mStepNavi.eq(numIdx - 1).addClass('on').siblings().removeClass('on');
						mIrList.attr('ir-intro', (numIdx + 1) - 1);
						mLogoOuter.removeClass('l-phase');
					}
				}
			}
		}
	});

	function naviWid() {
		winW = $(window).width();
		if (winW > 1024) {
			for (i = 1; i < mStepNaviLength + 1; i++) {
				$(function (i) {
					irBox(function () {
						mIrList.attr('ir-intro', i);
						mStepNavi.eq(i - 1).addClass('on').siblings().removeClass('on');
						if (i == mStepNaviLength) {
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
			mStepNavi.parent().removeClass('active');
			mLogoOuter.removeClass('m-wheel').addClass('l-phase');
			$('.header-cont').prepend('<div class="chk-arrow">→</div>');
			$('.header-cont').prepend('<div class="chk-circle"></div>');
		}, 1000);

		irBox(function () {
			$('.chk-arrow, .chk-circle').addClass('active').fadeIn(800);
		}, 5000);

		irBox(function () {
			$('.chk-arrow, .chk-circle').remove();
			mStepNavi.parent().addClass('active');
			mLogoOuter.addClass('m-wheel');
		}, 10000);
	}
});