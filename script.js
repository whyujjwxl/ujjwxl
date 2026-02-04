// CHANGE YOUR PASSWORD HERE
const MY_PASSWORD = "design123"; 

function attemptLogin() {
    const userInput = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMsg');

    if (userInput === MY_PASSWORD) {
        // Save login state so they don't have to login again on refresh
        sessionStorage.setItem('isLoggedIn', 'true');
        // Redirect to the home page
        window.location.href = "home.html";
    } else {
        errorMsg.style.display = 'block';
        errorMsg.textContent = "Incorrect Password";
        errorMsg.style.color = 'red';
    }
}

// Check if user is allowed to see the page
function checkAuth() {
    // If we are NOT on index.html, check for permission
    if (!window.location.href.includes("index.html")) {
        const loggedIn = sessionStorage.getItem('isLoggedIn');
        if (!loggedIn) {
            // Kick them back to login page
            window.location.href = "index.html";
        }
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = "index.html";
}