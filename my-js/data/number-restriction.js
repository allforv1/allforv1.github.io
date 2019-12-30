$(function() {
	/*篇幅内容的限制*/
	var alltext = $(".main-text .text-main").text();
	var width;
	var minwidth = 150;
	//限制字符个数
	$(".main-text .text-main").each(function() {
		if($(this).text().length > minwidth) {
			$(this).text($(this).text().substring(0, minwidth));
			$(this).html($(this).html() + '…');
		}
		width = minwidth;
	});
	/*展开收起全文按钮*/
	$(".main-text .openall").on('click', function() {
		var maxwidth = $(".main-text .text-main").text().length;
		if(width < maxwidth) {
			$(this).prev().text(alltext);
			$(this).hide();
			$(this).parent().next().find("span").show();
			console.log($(this).parent().next().prop('class'));
		}
		width = maxwidth;
	});
	$(".main-foot .closeall").on('click', function() {
		var maxwidth = $(".main-text .text-main").text().length;
		if(width >= minwidth) {
			$(this).parent().prev().find("span").eq(0).text($(this).parent().prev().find("span").eq(0).text().substring(0, minwidth));
			$(this).parent().prev().find("span").eq(0).html($(this).parent().prev().find("span").eq(0).html() + '…');
			$(this).hide();
			$(this).parent().prev().find("span").eq(1).show();
			console.log($(this).parent().prev().find("span").eq(1).prop('class'));
		}
		width = minwidth;
	});
});