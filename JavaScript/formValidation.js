// formValidation.js
// Handles form submission, validation, and gear price calculations.

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    handleFormSubmission(e);
  });
}

// Function 1: Main submit handler
// - Prevents reload
// - Runs validation
// - Runs calculation if valid
// - Logs all values to console
function handleFormSubmission(event) {

    event.preventDefault(); 

    // Stop if validation fails
    if (!validateRequiredFields()) {
        return;
    }

    // Calculate total price
    let totalCost = calculateGearTotal();

    // Collect form input values
    let fullName = document.getElementById("fullName").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let contactMethod = document.querySelector("input[name='contactMethod']:checked");
    let referrer = document.getElementById("referrer").value;
    let message = document.getElementById("message").value;

    // Console output required by assignment
    console.log("Full Name:", fullName);
    console.log("Email Address:", emailAddress);
    console.log("Preferred Contact Method:", contactMethod ? contactMethod.value : "None selected");
    console.log("Referral Source:", referrer);
    console.log("Message:", message);
    console.log("Total Gear Cost: $" + totalCost);
}


// Function 2: Validates required text fields
// Returns true if both fields contain text
function validateRequiredFields() {

    let fullName = document.getElementById("fullName");
    let emailAddress = document.getElementById("emailAddress");

    if (fullName.value.trim() === "") {
        alert("Full Name is required.");
        fullName.focus();
        return false;
    }

    if (emailAddress.value.trim() === "") {
        alert("Email Address is required.");
        emailAddress.focus();
        return false;
    }

    return true;
}


// Function 3: Totals selected gear checkbox values
// Returns numeric total
function calculateGearTotal() {

    let selectedGear = document.querySelectorAll("input[name='gear']:checked");
    let total = 0;

    for (let item of selectedGear) {
        total += Number(item.value); // convert price to number
    }

    return total;
}
