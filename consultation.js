const consultationForm = document.querySelector("#consultation-form");

const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");

// Select the form inputs
const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const detailsInput = document.querySelector("#details");
const sportInputs = document.querySelectorAll('input[name="athleteSport"]');

// Store the error messages
const fieldErrors = {
    fullName: "Please enter your full name.",
    email: "Please enter a valid email address.",
    age: "Please select your age range.",
    athleteSport: "Please indicate whether you participate in a sport.",
    details: "Please explain why you want a consultation."
};

// Listen for form submission
consultationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Retrieve and clean the form values
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value;

    const athleteSport = document.querySelector(
        'input[name="athleteSport"]:checked'
    );

    const sportAnswer = athleteSport ? athleteSport.value : "";
    const details = detailsInput.value.trim();

    // Input validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (fullName === "") {
        errors.push(fieldErrors.fullName);
    }

    if (email === "") {
        errors.push("Please enter your email.");
    } else if (!emailPattern.test(email)) {
        errors.push(fieldErrors.email);
    }

    if (age === "") {
        errors.push(fieldErrors.age);
    }

    if (sportAnswer === "") {
        errors.push(fieldErrors.athleteSport);
    }

    if (details === "") {
        errors.push(fieldErrors.details);
    }

    // Display validation errors
    errorMessage.textContent = errors.join(" ");

    // Stop if validation fails
    if (errors.length > 0) {
        return;
    }

    // Create an object containing the cleaned form data
    const consultationData = {
        fullName,
        email,
        age,
        athleteSport: sportAnswer,
        details
    };

    // Display the submitted data in the console
    console.log(consultationData);

    // Display the success message
    successMessage.textContent =
        "Thank you! Your consultation request has been submitted successfully.";
});

// Clear messages when the user corrects their input
function updateErrorMessage() {
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value;
    const details = detailsInput.value.trim();

    const athleteSport = document.querySelector(
        'input[name="athleteSport"]:checked'
    );

    const sportAnswer = athleteSport ? athleteSport.value : "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (fullName === "") {
        errors.push(fieldErrors.fullName);
    }

    if (email === "") {
        errors.push("Please enter your email.");
    } else if (!emailPattern.test(email)) {
        errors.push(fieldErrors.email);
    }

    if (age === "") {
        errors.push(fieldErrors.age);
    }

    if (sportAnswer === "") {
        errors.push(fieldErrors.athleteSport);
    }

    if (details === "") {
        errors.push(fieldErrors.details);
    }

    errorMessage.textContent = errors.join(" ");

    // Clear the success message if the form is edited
    successMessage.textContent = "";
}

// Update validation feedback when fields change
fullNameInput.addEventListener("input", updateErrorMessage);
emailInput.addEventListener("input", updateErrorMessage);
ageInput.addEventListener("change", updateErrorMessage);
detailsInput.addEventListener("input", updateErrorMessage);

sportInputs.forEach(function(input) {
    input.addEventListener("change", updateErrorMessage);
});

