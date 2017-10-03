//Problem: User when clicking on images goes to dead end
//Solution: Create an overlay with the large images - Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $close = $("#icon-close").hide();

$overlay.append($close.show());
//An images
$overlay.append($image);
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