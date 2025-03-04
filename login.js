// Create and append login overlay to the body
function createLoginOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'login-overlay';
    overlay.id = 'loginOverlay';
    
    overlay.innerHTML = `
        <div class="form-container">
            <button class="close-btn" id="closeLogin">&times;</button>
            <div class="card-3d-wrap">
                <div class="center-wrap">
                    <h2 class="heading">Welcome to YADENS</h2>
                    
                    <!-- Login Form -->
                    <form id="loginForm">
                        <div class="form-group">
                            <input type="email" class="form-style" placeholder="Email Address" required>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-style" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn-login">Sign In</button>
                        <div class="google-login" id="googleLogin">
                            <svg class="google-icon" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            </svg>
                            Continue with Google
                        </div>
                        <p class="switch-text">Don't have an account? <a href="#" id="switchToSignup">Sign Up</a></p>
                    </form>

                    <!-- Signup Form -->
                    <form id="signupForm" style="display: none;">
                        <div class="form-group">
                            <input type="text" class="form-style" placeholder="Full Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-style" placeholder="Email Address" required>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-style" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn-login">Create Account</button>
                        <div class="google-login" id="googleSignup">
                            <svg class="google-icon" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            </svg>
                            Continue with Google
                        </div>
                        <p class="switch-text">Already have an account? <a href="#" id="switchToLogin">Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    initializeLoginFunctionality();
}

// Initialize all login-related functionality
function initializeLoginFunctionality() {
    const loginOverlay = document.getElementById('loginOverlay');
    const showLoginBtn = document.getElementById('showLogin');
    const closeLoginBtn = document.getElementById('closeLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const googleLogin = document.getElementById('googleLogin');
    const googleSignup = document.getElementById('googleSignup');

    // Show login overlay
    showLoginBtn.addEventListener('click', () => {
        loginOverlay.classList.add('show');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    // Close login overlay
    closeLoginBtn.addEventListener('click', () => {
        loginOverlay.classList.remove('show');
    });

    // Close overlay when clicking outside
    loginOverlay.addEventListener('click', (e) => {
        if (e.target === loginOverlay) {
            loginOverlay.classList.remove('show');
        }
    });

    // Switch between login and signup forms
    switchToSignup.addEventListener('click', () => {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    switchToLogin.addEventListener('click', () => {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Here you would typically send these credentials to your server
        console.log('Login attempt:', { email, password });
        alert('Login functionality will be implemented soon!');
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        
        // Here you would typically send this data to your server
        console.log('Signup attempt:', { name, email, password });
        alert('Signup functionality will be implemented soon!');
    });

    // Handle Google login/signup
    googleLogin.addEventListener('click', () => {
        // Here you would implement Google OAuth
        console.log('Google authentication clicked');
        alert('Google authentication will be implemented soon!');
    });

    googleSignup.addEventListener('click', () => {
        // Here you would implement Google OAuth
        console.log('Google authentication clicked');
        alert('Google authentication will be implemented soon!');
    });
}

// Create login overlay when the page loads
document.addEventListener('DOMContentLoaded', createLoginOverlay); 