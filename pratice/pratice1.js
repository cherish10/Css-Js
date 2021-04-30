$(".array>li a").click(function() {
	var i = $(this).attr("idx");
	// alert(i);
	$(".imgs img").eq(i).animate({"opacity" : "1"},"fast");
	$(".imgs img").eq(i).siblings().animate({"opacity" : "0"},"fast");
});