$(function(){
	var winH = $(window).height(),
	footH = $('.footer').outerHeight(),
	careerList = $('.career-list');
	careerList.outerHeight(winH - footH);

	careerList.on('click',function(){
		var _this = $(this);
		if (!careerList.is(':animated')) {
			_this.stop().animate({'overflow':'visible'},1200);
			if (!_this.hasClass('on')) {
				_this.addClass('on').removeClass('off').siblings().removeClass('on').addClass('off');
			} else { 
				_this.removeClass('on').siblings().removeClass('off'); 
			}
		}
	});
});
