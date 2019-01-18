$(document).ready(function(){

	$(".img").click(function(){
    	$("#slider").show();
    		$(".img").hide();
	});

	$("#slider").mouseenter(function(){
		$(".btn").show();
	});
	$("#slider").mouseleave(function(){
		$(".btn").hide();
	});

});



