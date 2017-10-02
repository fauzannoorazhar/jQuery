//Problem: User when clicking on images goes to dead end
//Solution: Create an overlay with the large images - Lightbox
var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
var $caption = $("<p></p>");
var $close = $('<i class="close fa fa-close fa-2x"></i>');

$(".next").hide();
$(".prev").hide();
/*var $iconLeft = $('<i class="fa fa-arrow-circle-o-left fa-4x" aria-hidden="true"></i>');
var $iconRight = $('<i class="fa fa-arrow-circle-o-right fa-4x" aria-hidden="true"></i>');*/

$overlay.append($close)

//Icon left images
$overlay.append($(".next").show());
//An images
$overlay.append($image);
//Icon right images
$overlay.append($(".prev").show());
//A caption bottom images
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an images
$("#imagesGallery a").click(function (event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//Update overlay with the images link in the link
	$image.attr("src", imageLocation);

	var $captionText = $(this).children("img").attr("alt");
	$caption.text($captionText);

	//Show the overlay
	$overlay.fadeIn(500);

	//Get child alt attribute and set caption
});

$(".prev").css('cursor','pointer').click(function() {
	var lokasiImage = $(this).attr("href");
	$image.attr("src", lokasiImage);
	$image.next(lokasiImage);
	alert('lorem');
});

$(".next").css('cursor','pointer').click(function() {
	
});

//When overlay is clicked
$close.css('cursor','pointer').click(function() {
	//Hide the overlay
	$overlay.fadeOut(300);
});

/*
append = Insert content, specified by the parameter, to the end of each element in the set of matched elements.
event.preventDefault = If this method is called, the default action of the event will not be triggered.
attr = Get the value of an attribute for the first element in the set of matched elements.
children = Get the children of each element in the set of matched elements, optionally filtered by a selector.
*/