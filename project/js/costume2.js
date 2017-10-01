//Problem: User when clicking on images goes to dead end
//Solution: Create an overlay with the large images - Lightbox
//Add overlay
	var $overlay = $('<div id="overlay"></div>')
	$("body").append($overlay);
	//An images
	//A caption

//Capture the click event on a link to an images
$("#imagesGallery a").click(function (event) {
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);
	$overlay.show();
	//Show the overlay
	//Update overlay with the images link in the link
	//Get child alt attribute and set caption
});
//When overlay is clicked
	//Hide the overlay

