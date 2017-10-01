$(".spoiler span").hide();
$(".spoiler").append("<button class='btn btn-default'>Please Hover Me!!</button>");
$("button").hover(function(){
	$(this).prev().show("slow");
	$(this).remove();
});