document.addEventListener('DOMContentLoaded', function() {
	var masthead = document.querySelector('.ds-header');
	var mastheadHeight = masthead.offsetHeight;
	//console.log(mastheadHeight);

	var bannerSections = document.querySelectorAll('.ds-banner, .ds-main-section');
	bannerSections.forEach(function(section) {
		section.style.marginTop = mastheadHeight + 'px';
	});

	window.addEventListener('scroll', function() {
		if (window.pageYOffset >= 10) {
			masthead.classList.add('ds-fixed-header');
		} else {
			masthead.classList.remove('ds-fixed-header');
		}
	});

	// Initialize on page load
	window.scroll();
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