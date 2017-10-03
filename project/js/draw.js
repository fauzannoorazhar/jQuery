//Problem: No user interactive cause no change to application
//Solution: When user interactive cause change appopriately

/*
css = Get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.
siblings = Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
addClass = Adds the specified class(es) to each element in the set of matched elements.
removeClass = Remove a single class, multiple classes, or all classes from each element in the set of matched elements. 
toggle = Display or hide the matched elements.
val = Get the current value of the first element in the set of matched elements or set the value of every matched element.
*/

//Variable color berisi class selected dari element li
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d"); 
var lastEvent;
var mouseDown = false;

//Melakukan klik pada class controls element li
$(".controls").on("click", "li", function(){
	//Menghapus class selected
	$(this).siblings().removeClass("selected");
	//Memasukan class selected
	$(this).addClass("selected");

	//Merubah warna dari variable color
	color = $(this).css("background-color");
});

$("#revealColorSelect").click(function() {
	changeColor();
	$("#colorSelect").toggle(function() {
		$(this).animate(1000);
	});
});

function changeColor() {
	var r = $("#red").val(); 
	var b = $("#blue").val();
	var g = $("#green").val();
	$("#newColor").css("background-color","rgb(" + r + "," + b + ", " + g + ")");
};

$("input[type=range]").change(changeColor);

$("#addNewColor").click(function() {
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);

	$newColor.click();
});

$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	if (mouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function() {
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});