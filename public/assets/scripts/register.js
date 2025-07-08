document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

 
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
  
            const selectedUserType = document.querySelector('input[name="user_type"]:checked');
            const userType = selectedUserType ? selectedUserType.value : '';


            if (name === '') {
                alert('Please enter your full name.');
                return;
            }

            if (email === '' || !validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (password.length < 8) { 
                alert('Password must be at least 8 characters long.');
                return;
            }

            if (!/[0-9]/.test(password)) { 
                alert('Password must contain at least one number.');
                return;
            }

            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                alert('Password must contain at least one special character (e.g., !@#$%^&*).');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }
            
            if (userType === '') {
                alert('Please select a user type (Hogar or Negocio).');
                return;
            }

            alert('Registration successful! Redirecting to the application.');
            window.location.href = 'appEcoWatt.html';
        });
    }


    function togglePasswordFieldVisibility(fieldId, iconId) {
        const passwordField = document.getElementById(fieldId);
        const toggleIcon = document.getElementById(iconId);

        if (passwordField && toggleIcon) {
            toggleIcon.addEventListener('click', function() {
                const type = passwordField.type === 'password' ? 'text' : 'password';
                passwordField.type = type;
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            });
        }
    }


    togglePasswordFieldVisibility('password', 'toggle-password');
    togglePasswordFieldVisibility('confirm-password', 'toggle-confirm-password');


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;


            if (email === '' || !validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (password === '') {
                alert('Please enter your password.');
                return;
            }

            console.log('Login attempt:', { email, password });

            alert('Login successful! Redirecting to the application.');
            window.location.href = 'appEcoWatt.html';
        });
    }

    const togglePassword = document.getElementById('toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});