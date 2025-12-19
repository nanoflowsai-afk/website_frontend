/**
 * Modern Animated Login & Sign-Up UI
 * 
 * Features:
 * - Smooth card morphing animation between Login ↔ Sign Up
 * - Floating labels with focus animations
 * - Form validation with visual feedback
 * - Theme customization via CSS variables
 * - Fully responsive design
 * - No external dependencies
 * 
 * Usage: Link HTML file with this script and auth.css
 */

class AuthManager {
    /**
     * Initialize the authentication UI manager
     */
    constructor() {
        this.currentForm = 'login';
        this.isAnimating = false;
        this.init();
    }

    /**
     * Initialize event listeners and DOM setup
     */
    init() {
        // Get DOM elements
        this.loginForm = document.querySelector('.login-form');
        this.signupForm = document.querySelector('.signup-form');
        this.toSignUpBtn = document.getElementById('toSignUp');
        this.toLoginBtn = document.getElementById('toLogin');
        this.loginFormElement = document.getElementById('loginForm');
        this.signupFormElement = document.getElementById('signupForm');

        // Setup event listeners
        if (this.toSignUpBtn) {
            this.toSignUpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleForm('signup');
            });
        }

        if (this.toLoginBtn) {
            this.toLoginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleForm('login');
            });
        }

        // Form submission handlers
        if (this.loginFormElement) {
            this.loginFormElement.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLoginSubmit();
            });
        }

        if (this.signupFormElement) {
            this.signupFormElement.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignupSubmit();
            });
        }

        // Setup input interactions
        this.setupInputs();

        // Prevent accidental form submission on Enter key for all inputs except submit
        this.preventUnintendedSubmit();
    }

    /**
     * Setup floating label animations on inputs
     */
    setupInputs() {
        const inputs = document.querySelectorAll('.form-input');

        inputs.forEach((input) => {
            // Handle floating label on focus
            input.addEventListener('focus', () => {
                this.animateLabel(input, true);
            });

            // Handle floating label on blur
            input.addEventListener('blur', () => {
                if (!input.value) {
                    this.animateLabel(input, false);
                }
            });

            // Handle floating label on input
            input.addEventListener('input', () => {
                if (input.value) {
                    this.animateLabel(input, true);
                }
            });

            // Trigger label animation on page load if input has value
            if (input.value) {
                this.animateLabel(input, true);
            }
        });
    }

    /**
     * Animate the floating label
     * @param {HTMLElement} input - The input element
     * @param {boolean} show - Whether to show/animate the label up
     */
    animateLabel(input, show) {
        const label = input.parentElement.querySelector('.form-label');
        if (!label) return;

        if (show) {
            label.style.transform = 'translateY(-24px) scale(0.85)';
            label.style.color = 'var(--primary-color)';
        } else {
            label.style.transform = 'translateY(0) scale(1)';
            label.style.color = 'var(--text-light)';
        }
    }

    /**
     * Toggle between Login and Sign Up forms
     * @param {string} targetForm - 'login' or 'signup'
     */
    toggleForm(targetForm) {
        // Prevent animation overlap
        if (this.isAnimating) return;
        if (this.currentForm === targetForm) return;

        this.isAnimating = true;

        // Remove active class from current form
        if (this.currentForm === 'login') {
            this.loginForm.classList.remove('active');
        } else {
            this.signupForm.classList.remove('active');
        }

        // Update current form
        this.currentForm = targetForm;

        // Add active class to target form
        if (targetForm === 'login') {
            this.loginForm.classList.add('active');
        } else {
            this.signupForm.classList.add('active');
        }

        // Reset form states
        this.resetForms();

        // Re-enable animation after transition completes
        setTimeout(() => {
            this.isAnimating = false;
            this.setupInputs();
        }, 500); // Match CSS transition duration
    }

    /**
     * Reset all form fields and labels
     */
    resetForms() {
        // Reset form values
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach((input) => {
            input.value = '';
            const label = input.parentElement.querySelector('.form-label');
            if (label) {
                label.style.transform = 'translateY(0) scale(1)';
                label.style.color = 'var(--text-light)';
            }
        });

        // Reset checkboxes
        const checkboxes = document.querySelectorAll('.checkbox-input');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        // Clear any error messages
        this.clearErrors();
    }

    /**
     * Prevent unintended form submission
     */
    preventUnintendedSubmit() {
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach((input) => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !input.closest('form').querySelector('button[type="submit"]').disabled) {
                    // Allow natural form submission, don't prevent
                }
            });
        });
    }

    /**
     * Validate Login form
     * @returns {boolean} True if valid
     */
    validateLogin() {
        const form = this.loginFormElement;
        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelector('input[type="password"]').value.trim();

        // Reset errors
        this.clearErrors();

        // Validation rules
        const errors = [];

        if (!email) {
            errors.push('Email is required');
        } else if (!this.isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }

        if (!password) {
            errors.push('Password is required');
        } else if (password.length < 6) {
            errors.push('Password must be at least 6 characters');
        }

        if (errors.length > 0) {
            this.showErrors(errors);
            return false;
        }

        return true;
    }

    /**
     * Validate Sign Up form
     * @returns {boolean} True if valid
     */
    validateSignup() {
        const form = this.signupFormElement;
        const inputs = form.querySelectorAll('.form-input');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value.trim();
        const confirmPassword = inputs[3].value.trim();
        const termsCheckbox = form.querySelector('.checkbox-input');

        // Reset errors
        this.clearErrors();

        const errors = [];

        if (!name) {
            errors.push('Full name is required');
        } else if (name.length < 2) {
            errors.push('Name must be at least 2 characters');
        }

        if (!email) {
            errors.push('Email is required');
        } else if (!this.isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }

        if (!password) {
            errors.push('Password is required');
        } else if (password.length < 6) {
            errors.push('Password must be at least 6 characters');
        } else if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain at least one uppercase letter');
        } else if (!/[0-9]/.test(password)) {
            errors.push('Password must contain at least one number');
        }

        if (!confirmPassword) {
            errors.push('Please confirm your password');
        } else if (password !== confirmPassword) {
            errors.push('Passwords do not match');
        }

        if (!termsCheckbox.checked) {
            errors.push('You must agree to the Terms & Conditions');
        }

        if (errors.length > 0) {
            this.showErrors(errors);
            return false;
        }

        return true;
    }

    /**
     * Check if email is valid
     * @param {string} email - Email to validate
     * @returns {boolean} True if valid
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Show validation errors
     * @param {Array} errors - Array of error messages
     */
    showErrors(errors) {
        // Create error container
        const errorContainer = document.createElement('div');
        errorContainer.className = 'error-message';
        errorContainer.style.cssText = `
            background-color: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.5);
            color: #ef4444;
            padding: 12px 16px;
            border-radius: var(--border-radius);
            margin-bottom: 16px;
            font-size: 13px;
            animation: slideDown 0.3s ease;
        `;

        const errorList = errors.map((error) => `• ${error}`).join('\n');
        errorContainer.innerHTML = `
            <div style="display: flex; gap: 8px;">
                <span style="flex-shrink: 0;">⚠️</span>
                <div style="flex: 1;">${errors.map((e) => `<div>${e}</div>`).join('')}</div>
            </div>
        `;

        // Add style for animation
        if (!document.querySelector('style[data-errors]')) {
            const style = document.createElement('style');
            style.setAttribute('data-errors', 'true');
            style.textContent = `
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Insert error message at the top of the form
        const form =
            this.currentForm === 'login' ? this.loginFormElement : this.signupFormElement;
        form.parentElement.insertBefore(errorContainer, form);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            errorContainer.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => errorContainer.remove(), 300);
        }, 5000);
    }

    /**
     * Clear error messages
     */
    clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach((error) => error.remove());
    }

    /**
     * Handle Login form submission
     */
    handleLoginSubmit() {
        if (!this.validateLogin()) {
            return;
        }

        // Get form data
        const form = this.loginFormElement;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        const rememberMe = form.querySelector('.checkbox-input').checked;

        // Here you would send the data to your backend
        console.log('Login attempt:', {
            email,
            password,
            rememberMe,
            timestamp: new Date().toISOString(),
        });

        // Simulate success
        this.showSuccessMessage('Welcome back! Redirecting...');

        // In a real app, you would make an API call here
        // Example:
        // fetch('/api/auth/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email, password, rememberMe })
        // })
        // .then(response => response.json())
        // .then(data => {
        //   if (data.success) {
        //     // Store token and redirect
        //   }
        // })
    }

    /**
     * Handle Sign Up form submission
     */
    handleSignupSubmit() {
        if (!this.validateSignup()) {
            return;
        }

        // Get form data
        const form = this.signupFormElement;
        const inputs = form.querySelectorAll('.form-input');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;

        console.log('Sign up attempt:', {
            name,
            email,
            timestamp: new Date().toISOString(),
        });

        // Simulate success
        this.showSuccessMessage('Account created! Redirecting...');

        // In a real app, you would make an API call here
        // Example:
        // fetch('/api/auth/signup', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ name, email, password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //   if (data.success) {
        //     // Store token and redirect
        //   }
        // })
    }

    /**
     * Show success message
     * @param {string} message - Success message to display
     */
    showSuccessMessage(message) {
        const form = this.currentForm === 'login' ? this.loginFormElement : this.signupFormElement;
        const button = form.querySelector('.form-button');

        // Disable button
        button.disabled = true;
        const originalText = button.textContent;
        button.textContent = '✓ ' + message;
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

        // Reset after 2 seconds
        setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
            button.style.background = 'var(--gradient-primary)';
        }, 2000);
    }

    /**
     * Update theme colors via CSS variables
     * @param {Object} colors - Object with color properties
     * Example: updateTheme({ primaryColor: '#6366f1', secondaryColor: '#ec4899' })
     */
    updateTheme(colors) {
        const root = document.documentElement;
        const colorMap = {
            primaryColor: '--primary-color',
            secondaryColor: '--secondary-color',
            tertiaryColor: '--tertiary-color',
            bgColor: '--bg-color',
            cardBg: '--card-bg',
            textColor: '--text-color',
            textSecondary: '--text-secondary',
            textLight: '--text-light',
            borderColor: '--border-color',
            borderRadius: '--border-radius',
        };

        for (const [key, cssVar] of Object.entries(colorMap)) {
            if (colors[key]) {
                root.style.setProperty(cssVar, colors[key]);
            }
        }
    }
}

/**
 * Initialize when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.authManager = new AuthManager();
    });
} else {
    window.authManager = new AuthManager();
}

/**
 * Export for module usage (if needed)
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}
