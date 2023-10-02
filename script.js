// JavaScript code for password strength check
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const resultStrength = document.getElementById('result-strength');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const strength = getPasswordStrength(password);
        displayStrength(strength);
    });

    function getPasswordStrength(password) {
        // Implement your password strength check logic here
        // You can use regular expressions, character counting, or other methods
        // Return a numerical strength value (e.g., 0 to 100)
        // Example: For a basic check, you can count the length of the password

        const length = password.length;

        if (length < 8) {
            return 0;
        } else if (length < 12) {
            return 25;
        } else if (length < 16) {
            return 50;
        } else {
            return 100;
        }
    }

    function displayStrength(strength) {
        resultStrength.textContent = `${strength}%`;
    }
});
