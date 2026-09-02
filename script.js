// SELECT ELEMENTS
const amountInput = document.getElementById("amount");
const buttons = document.querySelectorAll(".amount-buttons button");
const form = document.getElementById("paymentForm");
const payBtn = document.querySelector(".mpesa-button");

// QUICK AMOUNT BUTTONS
buttons.forEach(button => {
  button.addEventListener("click", () => {
    amountInput.value = button.dataset.amount || "";
    amountInput.focus();
  });
});

// FORM SUBMIT
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const amount = Number(amountInput.value);

  // VALIDATION
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!/^07\d{8}$/.test(phone)) {
    alert("Enter a valid Safaricom number (e.g. 0712345678)");
    return;
  }

  if (!amount || amount < 1) {
    alert("Enter a valid amount.");
    return;
  }

  // SIMULATE PAYMENT
  payBtn.innerText = "Processing...";
  payBtn.disabled = true;

  setTimeout(() => {
    payBtn.innerText = "Payment Sent ✔";
    alert(`STK Push sent to ${phone} for KSh ${amount}`);

    // RESET
    form.reset();
    payBtn.disabled = false;
    payBtn.innerText = "🟢 PAY WITH M-PESA";

  }, 2000);
});
