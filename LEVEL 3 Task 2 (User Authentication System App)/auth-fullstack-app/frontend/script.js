let token = '';
const spinner = document.getElementById('spinner');
const toast = document.getElementById('toast');
const response = document.getElementById('response');
const passwordInput = document.getElementById('reg-password');
const strengthBar = document.getElementById('strength-bar');
const passwordStrength = document.getElementById('password-strength');

function showToast(message, success = true) {
    toast.innerHTML = `<div class="toast" style="color:${success ? '#6e8efb' : '#e34c4c'}">${message}</div>`;
    setTimeout(() => { toast.innerHTML = ''; }, 2500);
}

function showSpinner(show) {
    spinner.style.display = show ? 'block' : 'none';
}

function showLogin() {
    document.getElementById('form-title').innerText = 'Login';
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('protected-section').style.display = 'none';
    response.innerText = '';
}
function showRegister() {
    document.getElementById('form-title').innerText = 'Register';
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('protected-section').style.display = 'none';
    response.innerText = '';
}

function showProtected() {
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('protected-section').style.display = 'block';
    response.innerText = '';
}

async function register() {
    showSpinner(true);
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = passwordInput.value;

    const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();
    showSpinner(false);
    if (data.message) {
        showToast(data.message, true);
        showLogin();
    } else {
        showToast(data.error, false);
        response.innerText = data.error;
    }
}

async function login() {
    showSpinner(true);
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    showSpinner(false);
    if (data.token) {
        token = data.token;
        showToast('Login successful', true);
        showProtected();
    } else {
        showToast(data.error, false);
        response.innerText = data.error;
    }
}

async function getProtected() {
    showSpinner(true);
    const res = await fetch('http://localhost:5000/api/auth/protected', {
        headers: { 'x-auth-token': token }
    });
    const data = await res.json();
    showSpinner(false);
    if (data.message) {
        response.innerText = '';
        setTimeout(() => {
            response.innerText = data.message;
        }, 300);
    } else {
        showToast(data.error, false);
        response.innerText = data.error;
    }
}

// Password strength meter
passwordInput.addEventListener('input', function () {
    const val = passwordInput.value;
    let score = 0;
    if (val.length > 7) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    let width = score * 25;
    let color = ['#e34c4c', '#e3b34c', '#6ee34c', '#6e8efb'][score - 1] || '#e34c4c';
    strengthBar.style.width = width + '%';
    strengthBar.style.background = color;
});

// Theme toggle
document.getElementById('toggle-theme').onclick = function () {
    document.body.classList.toggle('dark');
    this.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// Show register by default
showRegister();