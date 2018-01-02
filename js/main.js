$(document).ready(function() {
	$("#top-banner").css('transform', 'translate(0px, 0px)');
	var time = 400;
	$(".card").each(function() {
		var obj = $(this)
		setTimeout( function(){ $(obj).css('transform', 'translate(0px, 0px)'); }, time)
      	time += 400;
	});
});