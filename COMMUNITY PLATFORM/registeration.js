// ======================


// Get the form and modal elements
const form = document.getElementById('review-form');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// Prevent form from submitting the default way
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    // Clear the form fields
    form.reset();

    // Display the custom popup
    popup.style.display = 'block';
});

// Close the popup when the user clicks the close button
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Close the popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});


// signup message
function validateForm() {
    event.preventDefault();  // Prevent the form from submitting

    // Hide the form fields and the signup button
    document.getElementById('registrationForm').style.display = 'none';

    // Show the thank you message
    document.getElementById('thankYouMessage').style.display = 'block';

    // Optionally, you can delay the redirection if you still want to redirect after a few seconds
    
    setTimeout(function() {
        window.location.href = 'dashboard.html';  // Redirect to dashboard
    }, 2000);  // 2-second delay before redirection
    
}




   