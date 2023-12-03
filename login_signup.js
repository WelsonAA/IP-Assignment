function saveUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // For demonstration, storing user data in an array (should be stored securely in a database in a real application)
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    // Alert for successful signup
    alert('Signup successful!');

    navigateTo('login.html')
}
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // For demonstration, retrieving user data from an array (should be retrieved securely from a database in a real application)
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user === undefined) {
        // Alert for failed login
        alert('Invalid username or password');
    } else {
        // Alert for successful login
        alert('Login successful!');

        navigateTo('home.html')
    }
}

function togglePassword() {
    var passwordField = document.getElementById('password');
    var showPasswordBtn = document.getElementById('showPasswordBtn');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordBtn.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        showPasswordBtn.textContent = 'Show';
    }
}

function navigateTo(page) {
    window.location.href = page;
}