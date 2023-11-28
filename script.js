// Retrieve users array from localStorage on page load
var users = JSON.parse(localStorage.getItem('users')) || [];

function saveUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulating saving user in an array (replace with proper secure storage)
    users.push({ username: username, password: password });

    // Store updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // For demonstration, logging the added user
    console.log('User added:', { username: username, password: password });

    // Optionally, you might want to store this information in local storage or a database for persistent storage
    alert('User signed up successfully!');

    // You can redirect the user to the login page after signing up
    window.location.href = 'login.html';
}

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log('Attempting login with:', { username: username, password: password });

    // Search for username in the users array
    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    // Check if user was found in the array
    if (user) {
        // Redirect to home.html if credentials are correct
        console.log('Login successful!');
        window.location.href = 'home.html';
    } else {
        // Show alert for incorrect username or password
        console.log('Login failed!');
        alert('Incorrect username or password. Please try again.');
    }
}
