/**
 * Theme Manager - Shared theme management functionality
 * Handles dark/light mode toggling, persistence, and system preference detection
 * for all AuthentiIDP mockup pages.
 */
class ThemeManager {
    constructor() {
        this.storageKey = 'authenti-theme';
        this.init();
    }
    
    /**
     * Initialize theme management
     * Sets initial theme based on saved preference or system preference
     */
    init() {
        const savedTheme = localStorage.getItem(this.storageKey);
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme || systemTheme;
        
        this.setTheme(theme);
        this.bindEvents();
    }
    
    /**
     * Set the current theme
     * @param {string} theme - 'light' or 'dark'
     */
    setTheme(theme) {
        if (!theme || !['light', 'dark'].includes(theme)) {
            theme = 'light'; // fallback to light theme
        }
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.storageKey, theme);
        
        this.updateThemeToggle(theme);
    }
    
    /**
     * Update the theme toggle button appearance
     * @param {string} theme - current theme
     */
    updateThemeToggle(theme) {
        const toggle = document.querySelector('#theme-toggle');
        if (toggle) {
            toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
            toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        }
    }
    
    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
    
    /**
     * Get the current theme
     * @returns {string} current theme ('light' or 'dark')
     */
    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }
    
    /**
     * Bind event listeners for theme management
     */
    bindEvents() {
        // Theme toggle button click handler
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // System theme preference change handler
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only update if user hasn't manually set a preference
            if (!localStorage.getItem(this.storageKey)) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    /**
     * Reset theme to system preference
     */
    resetToSystemTheme() {
        localStorage.removeItem(this.storageKey);
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        this.setTheme(systemTheme);
    }
}

// Auto-initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if not already initialized
    if (!window.themeManager) {
        window.themeManager = new ThemeManager();
    }
});

// Export for manual initialization if needed
window.ThemeManager = ThemeManager;