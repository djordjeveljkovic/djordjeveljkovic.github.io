jQuery(document).ready(function($) {
	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent the form from submitting normally

	// Simulate sending email (replace with actual backend logic)
	// Here, you can use AJAX to send form data to your server-side script (PHP or other)
	// Example AJAX call using vanilla JavaScript:
	var formData = new FormData(this);

	fetch('send_email.php', {
		method: 'POST',
		body: formData
	})
		.then(response => response.json())
		.then(data => {
			// Show thank you popup on successful submission
			document.getElementById('popupOverlay').style.display = 'flex';
		})
		.catch(error => {
			console.error('Error:', error);
			// Handle errors here (e.g., display error message)
		});

	// Optional: Clear form fields after submission
	this.reset();
});

// Function to close popup
function closePopup() {
	document.getElementById('popupOverlay').style.display = 'none';
}