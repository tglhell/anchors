$(function(){
	posArr = [],
	pfHgt = $(window).height(),
	wrapBox = $('.ctr-ir'),
	wrapBoxLeng = wrapBox.length;
	ServiceLi = $('.service-list li');
	ServiceLen = ServiceLi.length;

	$(window).scroll(function (e) {
		alignPos ();
	});

	for (i = 0; i <= ServiceLen; i++) {
		$(function (i){
			setTimeout(function () {
				ServiceLi.eq(i).addClass('on');
			}, i * 500);
		}(i));
	}
	setTimeout(function(){
		if ($('.service-list li').hasClass('on')) {
		 $('.service-list li').addClass('cursor');
		}
	}, ServiceLen*500+200)


	function alignPos (){
		scrPos = $(this).scrollTop();
		
		for (var i = 0; i < wrapBoxLeng; i++) {
			var thisPos = wrapBox.eq(i).offset().top;
			posArr.push(thisPos);
			if (scrPos > posArr[i] - pfHgt + 200) {
				wrapBox.eq(i).removeClass('on').removeAttr('ir').attr('ir-idx', (i + 5));
			} else {
				wrapBox.eq(i).addClass('on').removeAttr('ir-idx').attr('ir', '');
			}
		}
	};
	alignPos();
});