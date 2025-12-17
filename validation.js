// ==========================
// HELPER FUNCTIONS
// ==========================
function showError(input, message) {
  const errorDiv = input.nextElementSibling;
  errorDiv.innerText = message;
  input.style.borderColor = "red";
}

function clearError(input) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = "";
  input.style.borderColor = "lightgray";
}

function showMessage(messageDiv, message, time = 2000) {
  messageDiv.innerText = message;
  messageDiv.classList.add("message");

  setTimeout(() => {
    clearMessage(messageDiv);
  }, time);
}

function clearMessage(messageDiv) {
  messageDiv.innerText = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
}

// ==========================
// REGISTRATION FORM
// ==========================
document.getElementById('registrationForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('registerName');
  const email = document.getElementById('registerEmail');
  const password = document.getElementById('registerPassword');
  const confirmPassword = document.getElementById('registerConfirmPassword');
  const registerMessage = document.getElementById("registerMessage");

  let isValid = true;

  // NAME VALIDATION
  if(name.value.trim() === ''){
    showError(name , 'Name is required')
    isValid = false;
  } else {
    clearError(name);
  }

  // EMAIL VALIDATION
  if(email.value.trim() === ''){
    showError(email , 'Email is required');
    isValid = false;
  } else if(!isValidEmail(email.value)){
    showError(email, 'Enter a valid email');
    isValid = false;
  } else {
    clearError(email);
  }

  // PASSWORD VALIDATION
  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  } else if (!isValidPassword(password.value)) {
    showError(password, "Must contain at least one number, one uppercase, one lowercase letter, and at least 8 characters");
    isValid = false;
  } else {
    clearError(password);
  }

  // CONFIRM PASSWORD VALIDATION
  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Confirm your password");
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, 'Password does not match');
    isValid = false;
  } else {
    clearError(confirmPassword);
  }

  if(isValid){
    // ==========================
    // MULTIPLE USERS STORAGE
    // ==========================
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const exists = users.find(u => u.email === email.value);
    if(exists){
      showMessage(registerMessage, "Email already registered ❌");
      return;
    }

    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
      createdAt: new Date().toLocaleString()
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    showMessage(registerMessage, "Registration Successful ✅", 2000);

    setTimeout(()=>{
      document.getElementById('registrationForm').classList.replace('form-active' , 'form-hidden');
      document.getElementById('loginForm').classList.replace('form-hidden' , 'form-active');
    },2000);
  }
});

// ==========================
// LOGIN FORM
// ==========================
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const loginMessage = document.getElementById("loginMessage");

  let isValid = true;

  // EMAIL VALIDATION
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Enter a valid email");
    isValid = false;
  } else {
    clearError(email);
  }

  // PASSWORD VALIDATION
  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  } else if (!isValidPassword(password.value)) {
    showError(password, "Must contain at least one number, one uppercase, one lowercase letter, and at least 8 characters");
    isValid = false;
  } else {
    clearError(password);
  }

  if(isValid){
    authenticateUser(email.value, password.value, loginMessage);
  }
});

// ==========================
// AUTHENTICATE USER
// ==========================
function authenticateUser(email, password, messageDiv){
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if(user){
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));
    showMessage(messageDiv, "Login Successful ✅");

    setTimeout(()=>{
      window.location.href = "dashboard.html";
    },1500);
  } else {
    showMessage(messageDiv, "Invalid email or password ❌");
  }
}
