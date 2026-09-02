// Add event listeners to the quick amount buttons
const amountButtons = document.querySelectorAll('.quick-amounts button');
const amountInput = document.querySelector('input[type="number"]');

amountButtons.forEach(button => {
    button.addEventListener('click', function() {
        // If "Other" is clicked, just focus the input
        if (this.innerText === 'Other') {
            amountInput.value = '';
            amountInput.focus();
        } else {
            // Remove commas for the input value
            amountInput.value = this.innerText.replace(',', '');
        }
    });
});

// Handle the form submission (for demo purposes)
const form = document.querySelector('.form-box form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    
    const name = document.querySelector('input[placeholder="Enter your full name"]').value;
    const phone = document.querySelector('input[placeholder="07XXXXXXXX"]').value;
    const amount = amountInput.value;

    if(!name || !phone || !amount) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate payment processing
    alert(`Processing M-Pesa payment of KSh ${amount} for ${name}...\n\n(This is a demo. To make real payments, you need to connect this to the Safaricom Daraja API.)`);
    
    // Reset form
    form.reset();
});
