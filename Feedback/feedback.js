document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    // Display response message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = `Thank you for your feedback, ${name}!`;
    
    // Clear the form
    this
