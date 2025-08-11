// Theme JavaScript for Unique Soluation
// This file handles theme interactions and ensures proper application of the new theme

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeTheme();
    });
    
    function initializeTheme() {
        // Apply theme classes to body
        document.body.classList.add('unique-soluation-theme');
        
        // Ensure desk container has proper styling
        const deskContainer = document.querySelector('.frappe-desk, .desk-container');
        if (deskContainer) {
            deskContainer.classList.add('unique-soluation-theme');
        }
        
        // Initialize header functionality
        initializeHeader();
        
        // Initialize sidebar functionality
        initializeSidebar();
        
        // Initialize form enhancements
        initializeForms();
        
        // Initialize workflow components
        initializeWorkflows();
        
        // Add theme-specific styles dynamically
        addDynamicStyles();
        
        // Log successful initialization
        console.log('Unique Soluation theme initialized successfully');
    }
    
    function initializeHeader() {
        // Search functionality
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            searchInput.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        }
        
        // User dropdown functionality
        const userProfile = document.querySelector('.user-profile');
        const userDropdown = document.querySelector('.dropdown-menu');
        
        if (userProfile && userDropdown) {
            userProfile.addEventListener('click', function(e) {
                e.preventDefault();
                userDropdown.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!userProfile.contains(e.target) && !userDropdown.contains(e.target)) {
                    userDropdown.classList.remove('show');
                }
            });
        }
        
        // Notification functionality
        const notificationLinks = document.querySelectorAll('.navbar-nav-link');
        notificationLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Add notification click handling here
                console.log('Notification clicked');
            });
        });
    }
    
    function initializeSidebar() {
        // Sidebar toggle functionality
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('collapsed');
                
                // Update main content margin
                if (mainContent) {
                    if (sidebar.classList.contains('collapsed')) {
                        mainContent.style.marginLeft = '60px';
                    } else {
                        mainContent.style.marginLeft = '280px';
                    }
                }
            });
        }
        
        // Navigation menu functionality
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Handle submenu toggles
                const hasSubmenu = this.getAttribute('aria-expanded');
                if (hasSubmenu !== null) {
                    const submenu = this.nextElementSibling;
                    if (submenu && submenu.classList.contains('nav-submenu')) {
                        const isExpanded = this.getAttribute('aria-expanded') === 'true';
                        this.setAttribute('aria-expanded', !isExpanded);
                        submenu.classList.toggle('show');
                    }
                }
            });
        });
        
        // Quick actions functionality
        const quickActionItems = document.querySelectorAll('.quick-action-item');
        quickActionItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Add quick action handling here
                console.log('Quick action clicked:', this.textContent.trim());
            });
        });
    }
    
    function initializeForms() {
        // Form validation and enhancement
        const forms = document.querySelectorAll('.form-container');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('.form-control');
            
            inputs.forEach(input => {
                // Add focus effects
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('focused');
                    
                    // Basic validation
                    validateField(this);
                });
                
                // Real-time validation for specific fields
                if (input.type === 'email') {
                    input.addEventListener('input', function() {
                        validateEmail(this);
                    });
                }
            });
            
            // Form submission handling
            const submitBtn = form.querySelector('.form-btn.primary');
            if (submitBtn) {
                submitBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    handleFormSubmission(form);
                });
            }
        });
        
        // Switch functionality
        const switches = document.querySelectorAll('.form-switch-input');
        switches.forEach(switchInput => {
            switchInput.addEventListener('change', function() {
                const label = this.nextElementSibling;
                if (label && label.classList.contains('form-switch-label')) {
                    if (this.checked) {
                        label.textContent = 'Enabled';
                    } else {
                        label.textContent = 'Disabled';
                    }
                }
            });
        });
    }
    
    function initializeWorkflows() {
        // Workflow step functionality
        const workflowSteps = document.querySelectorAll('.step-item');
        workflowSteps.forEach(step => {
            const actionBtns = step.querySelectorAll('.step-action-btn');
            actionBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    handleWorkflowAction(this, step);
                });
            });
        });
        
        // Progress bar animation
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const width = bar.style.width || '0%';
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        
        // Remove existing validation classes
        field.classList.remove('error', 'success');
        
        // Basic validation
        if (field.hasAttribute('required') && !value) {
            field.classList.add('error');
            showFieldError(field, 'This field is required');
            return false;
        }
        
        // Email validation
        if (fieldType === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Success state
        if (value) {
            field.classList.add('success');
        }
        
        return true;
    }
    
    function validateEmail(field) {
        const value = field.value.trim();
        if (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(value)) {
                field.classList.remove('error');
                field.classList.add('success');
            } else {
                field.classList.remove('success');
                field.classList.add('error');
            }
        }
    }
    
    function showFieldError(field, message) {
        // Remove existing error message
        const existingError = field.parentElement.querySelector('.form-feedback');
        if (existingError) {
            existingError.remove();
        }
        
        // Create new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-feedback error';
        errorDiv.innerHTML = `<span class="error-icon">⚠</span>${message}`;
        
        field.parentElement.appendChild(errorDiv);
    }
    
    function handleFormSubmission(form) {
        const submitBtn = form.querySelector('.form-btn.primary');
        const inputs = form.querySelectorAll('.form-control');
        let isValid = true;
        
        // Validate all fields
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Show success message
                showFormSuccess(form, 'Form submitted successfully!');
            }, 2000);
        }
    }
    
    function showFormSuccess(form, message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-feedback success';
        successDiv.innerHTML = `<span class="success-icon">✓</span>${message}`;
        
        form.insertBefore(successDiv, form.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    function handleWorkflowAction(btn, step) {
        const actionType = btn.classList.contains('primary') ? 'primary' : 'secondary';
        
        // Show loading state
        btn.classList.add('loading');
        btn.disabled = true;
        
        // Simulate action processing
        setTimeout(() => {
            btn.classList.remove('loading');
            btn.disabled = false;
            
            // Update step status
            if (actionType === 'primary') {
                step.classList.remove('current');
                step.classList.add('completed');
                
                // Move to next step
                const nextStep = step.nextElementSibling;
                if (nextStep && nextStep.classList.contains('step-item')) {
                    nextStep.classList.add('current');
                }
            }
        }, 1500);
    }
    
    function addDynamicStyles() {
        // Add any dynamic styles that might be needed
        const style = document.createElement('style');
        style.textContent = `
            /* Additional dynamic styles */
            .unique-soluation-theme {
                --theme-loaded: true;
            }
            
            /* Smooth transitions for all interactive elements */
            .unique-soluation-theme * {
                transition: all 0.15s ease-in-out;
            }
            
            /* Enhanced focus states */
            .unique-soluation-theme .form-control:focus,
            .unique-soluation-theme .btn:focus,
            .unique-soluation-theme .nav-link:focus {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
            }
            
            /* Loading animation for buttons */
            .btn.loading {
                position: relative;
                color: transparent;
            }
            
            .btn.loading::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 16px;
                height: 16px;
                border: 2px solid currentColor;
                border-top: 2px solid transparent;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // Export functions for external use
    window.UniqueSoluationTheme = {
        initialize: initializeTheme,
        validateField: validateField,
        handleFormSubmission: handleFormSubmission,
        handleWorkflowAction: handleWorkflowAction
    };
    
})();
