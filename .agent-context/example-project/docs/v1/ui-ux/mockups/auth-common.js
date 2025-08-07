// AuthentiIDP Common Authentication Functions

// Authentication check
function checkAuthentication() {
    const session = localStorage.getItem('authenti_session') || sessionStorage.getItem('authenti_session');
    const userData = localStorage.getItem('authenti_user') || sessionStorage.getItem('authenti_user');
    
    if (!session || session !== 'authenticated') {
        // Not authenticated, redirect to login
        window.location.href = '01-login.html';
        return false;
    }
    
    // Update user display if we have user data
    if (userData) {
        try {
            const user = JSON.parse(userData);
            const userButton = document.querySelector('.user-button span');
            const avatar = document.querySelector('.avatar');
            if (userButton) userButton.textContent = user.name;
            if (avatar) avatar.textContent = user.avatar;
        } catch (e) {
            console.error('Failed to parse user data');
        }
    }
    
    return true;
}

// User menu toggle with dropdown
function toggleUserMenu() {
    const userMenu = document.querySelector('.user-menu');
    let dropdown = userMenu.querySelector('.user-dropdown');
    
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'user-dropdown';
        dropdown.innerHTML = `
            <div class="dropdown-content">
                <a href="#" onclick="editProfile()">👤 Edit Profile</a>
                <a href="#" onclick="accountSettings()">⚙️ Account Settings</a>
                <a href="#" onclick="viewActivity()">📊 View Activity</a>
                <hr style="border: none; border-top: 1px solid var(--color-border); margin: var(--spacing-2) 0;">
                <a href="#" onclick="signOut()" style="color: var(--color-error);">🚪 Sign Out</a>
            </div>
        `;
        dropdown.style.cssText = `
            position: absolute;
            top: 100%;
            right: 0;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            padding: var(--spacing-3);
            min-width: 200px;
            z-index: 1000;
            margin-top: var(--spacing-2);
        `;
        
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.cssText = `
            display: flex;
            flex-direction: column;
        `;
        
        const links = dropdown.querySelectorAll('a');
        links.forEach(link => {
            link.style.cssText = `
                padding: var(--spacing-2) var(--spacing-3);
                color: var(--color-text-primary);
                text-decoration: none;
                border-radius: var(--radius-md);
                transition: all 0.2s ease;
                font-size: 14px;
            `;
            link.addEventListener('mouseover', function() {
                this.style.background = 'var(--color-surface)';
            });
            link.addEventListener('mouseout', function() {
                this.style.background = 'transparent';
            });
        });
        
        userMenu.appendChild(dropdown);
        
        // Close dropdown when clicking outside
        setTimeout(() => {
            document.addEventListener('click', function closeDropdown(e) {
                if (!userMenu.contains(e.target)) {
                    dropdown.remove();
                    document.removeEventListener('click', closeDropdown);
                }
            });
        }, 0);
    } else {
        dropdown.remove();
    }
}

// User menu functions
function editProfile() {
    alert('Edit Profile:\n- Update display name\n- Change avatar\n- Update contact information\n- Privacy settings');
}

function accountSettings() {
    alert('Account Settings:\n- Change password\n- Enable/disable 2FA\n- Session management\n- API key access\n- Notification preferences');
}

function viewActivity() {
    alert('Activity Log:\n- Recent login history\n- API usage\n- Security events\n- Account changes');
}

function signOut() {
    if (confirm('Are you sure you want to sign out?')) {
        // Clear authentication data
        localStorage.removeItem('authenti_session');
        localStorage.removeItem('authenti_user');
        sessionStorage.removeItem('authenti_session');
        sessionStorage.removeItem('authenti_user');
        
        // Redirect to login page
        window.location.href = '01-login.html';
    }
}

// Theme toggle functionality (common across all pages)
function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');
    
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
    // Save preference
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Initialize authentication and theme on page load
function initializePage() {
    // Check authentication first (except for login page)
    if (!window.location.pathname.includes('01-login.html')) {
        if (!checkAuthentication()) {
            return; // Will redirect to login if not authenticated
        }
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) toggleBtn.textContent = '☀️';
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);