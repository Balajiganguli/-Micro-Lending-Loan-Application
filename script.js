// Handle Loan Application Form Submission
const loanForm = document.getElementById('loanForm');
const formMessage = document.getElementById('form-message');
const loanDashboard = document.getElementById('loan-dashboard');
const statusSpan = document.getElementById('status');
const balanceSpan = document.getElementById('balance');
const paymentDueSpan = document.getElementById('payment-due');

// Handle form submission and validation
loanForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const duration = parseInt(document.getElementById('duration').value);

    // Validation: Check if all fields are filled and loan amount is reasonable
    if (!name || !email || !amount || !duration || amount <= 0 || duration <= 0) {
        formMessage.textContent = "Please fill in all fields correctly.";
        return;
    }

    // Show loan status (simulating loan approval process)
    formMessage.textContent = "";  // Clear error message
    loanForm.reset();
    loanDashboard.style.display = "block";
    statusSpan.textContent = "Approved";  // Simulated loan approval
    balanceSpan.textContent = `$${amount}`;  // Show loan amount
    paymentDueSpan.textContent = `$${(amount * 1).toFixed(2)}`;  // Simulated 10% payment due
});

// Simulate Loan Payment
function makePayment() {
    const remainingBalance = parseFloat(balanceSpan.textContent.substring(1));
    const paymentDue = parseFloat(paymentDueSpan.textContent.substring(1));

    if (remainingBalance <= 0) {
        alert("You have no outstanding balance.");
    } else {
        // Simulate making a payment
        const newBalance = remainingBalance - paymentDue;
        balanceSpan.textContent = `$${newBalance.toFixed(2)}`;
        alert(`Payment of $${paymentDue} has been made! Remaining balance: $${newBalance.toFixed(2)}`);
    }
}
// Get the button element and add the event listener
document.getElementById('borrowBtn').addEventListener('click', function() {
    // Redirect to index.html page when "Borrow" button is clicked
    window.location.href = 'index.html';
});

// Additional functionality for Login/Register buttons (optional)
// You can add these functionalities to show login or registration forms
document.getElementById('loginBtn').addEventListener('click', function() {
    alert("Login button clicked! Add your login form here.");
});

document.getElementById('registerBtn').addEventListener('click', function() {
    alert("Register button clicked! Add your registration form here.");
});
document.getElementById("userForm").addEventListener("submit", function (event) {
    // Get input values
    var panCard = document.getElementById("panCard").value;
    var aadhaarCard = document.getElementById("aadhaarCard").value;

    // PAN Card validation (10 characters)
    if (panCard.length !== 10) {
        alert("PAN Card number must be exactly 10 characters.");
        event.preventDefault();  // Prevent form submission
        return;
    }

    // Aadhaar Card validation (12 or 15 characters)
    if (aadhaarCard.length !== 12 && aadhaarCard.length !== 15) {
        alert("Aadhaar Card number must be exactly 12 or 15 characters.");
        event.preventDefault();  // Prevent form submission
        return;
    }

    // Further validation logic can be added if needed (like number format, regex validation)
    alert("Form submitted successfully!");
});

var aadhaarRegex = /^\d{12}$|^\d{15}$/;
if (!aadhaarRegex.test(aadhaarCard)) {
    alert("Invalid Aadhaar Card format.");
    event.preventDefault();
    return;
}
var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
if (!panRegex.test(panCard)) {
    alert("Invalid PAN Card format.");
    event.preventDefault();
    return;
}

