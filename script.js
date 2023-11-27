// script.js

document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add your authentication logic here
        // For demo purposes, let's assume the login is successful
        showDashboard();
    });

    function showDashboard() {
        loginContainer.style.display = 'none';
        dashboardContainer.style.display = 'block';
        dashboardContainer.classList.add('show');
    }
});


