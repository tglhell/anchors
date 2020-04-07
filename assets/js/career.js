$(function(){
	var careerList = $('.career-list');

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


	var fileTarget = $('.upload');
	fileTarget.on('change', function () {
		if (window.FileReader) {
			// 파일명 추출
			var filename = $(this)[0].files[0].name;
		}
		else {
			// Old IE 파일명 추출
			var filename = $(this).val().split('/').pop().split('\\').pop();
		};
		$(this).siblings('.upload-name').val(filename);
	});
});
