const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-button");
const valuenone = document.querySelectorAll("valuenone");

// const nameRegex = /^[A-Za-z\s]{5,10}( [A-Za-z\s]{5,10})?$/;
// const nameRegex = /^[A-Za-z\s]{5,10}( [A-Za-z\s]{5,10})?$/;
const nameRegex = /^[A-Za-z\s]{5,10} [A-Za-z\s]{5,10}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-zA-Z]{2,3}$/; 
const phoneRegex =  /^0[5-6]{1}[0-9]{8}$/;
const messageRegex =  /^[A-Za-z\s]{5,}$/;


function validateInput(input, regex) {
  if (regex.test(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}


nameInput.addEventListener("input", () => {
  validateInput(nameInput, nameRegex);
});

emailInput.addEventListener("input", () => {
  validateInput(emailInput, emailRegex);
});

phoneInput.addEventListener("input", () => {
  validateInput(phoneInput, phoneRegex);
});

messageInput.addEventListener("input", () => {
  validateInput(messageInput, messageRegex);
});

sendButton.addEventListener("click", () => {

  if (!nameRegex.test(nameInput.value)) {
    alert("wrong name");
  }
  else if (!emailRegex.test(emailInput.value)) {
    alert("wrong email");
  }

  else if (!phoneRegex.test(phoneInput.value)) {
    alert("wrong phone number");
  }

  else if (!messageRegex.test(messageInput.value)) {
    alert("somthing wrong in message");
  }

   else {
    alert("THANK YOU FOR SUBMITING");
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  }
});
