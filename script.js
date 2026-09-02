// 1. Select the quick amount buttons and the amount input
const quickButtons = document.querySelectorAll('.quick-amounts button');
const amountInput = document.querySelector('input[type="number"]');

// 2. Add a click event to each quick amount button
quickButtons.forEach(button => {
    button.addEventListener('click', function() {
        // If "Other" is clicked, clear the box and let the user type
        if (this.innerText.trim() === 'Other') {
            amountInput.value = '';
            amountInput.focus();
        } else {
            // Remove commas and put the number in the input box
            amountInput.value = this.innerText.replace(',', '');
        }
    });
});

// 3. Handle the "Pay with M-Pesa" form submission
const paymentForm = document.querySelector('.form-box form');

paymentForm.addEventListener('submit', function(event) {
    // Stop the page from reloading
    event.preventDefault();

    // Get the values the user typed in
    const nameInput = document.querySelector('input[placeholder="Enter your full name"]');
    const phoneInput = document.querySelector('input[placeholder="07XXXXXXXX"]');
    
    const name = nameInput.value;
    const phone = phoneInput.value;
    const amount = amountInput.value;

    // Check if anything is empty
    if (!name || !phone || !amount) {
        alert('Please fill in your name, phone number, and amount.');
        return;
    }

    // Fake confirmation (For now, since the real M-Pesa API comes in Stage 3)
    alert(`Payment of KSh ${amount} initiated for ${name}.\nPlease check your phone for the M-Pesa STK Push!`);
    
    // Clear the form
    nameInput.value = '';
    phoneInput.value = '';
    amountInput.value = '';
});
