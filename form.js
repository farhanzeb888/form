const loginForm = document.getElementById('loginForm');
const registrationForm = document.getElementById('registrationForm');

const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

showRegister.addEventListener('click', (e)=>{
    e.preventDefault();
    loginForm.classList.remove('form-active');
    loginForm.classList.add('form-hidden');

    registrationForm.classList.remove('form-hidden');
    registrationForm.classList.add('form-active');
})

showLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    registrationForm.classList.remove('form-active');
    registrationForm.classList.add('form-hidden');

    loginForm.classList.remove('form-hidden');
    loginForm.classList.add('form-active');
})