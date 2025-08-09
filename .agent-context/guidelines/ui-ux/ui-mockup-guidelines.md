# UI Design Mockup Guidelines

Quick reference for creating high-fidelity UI mockups with proper navigation, accessibility, and responsive design.

## Table of Contents

1. [Design System Foundation](#design-system-foundation)
2. [HTML Structure](#html-structure)
3. [CSS Architecture](#css-architecture)
4. [Interactive Elements](#interactive-elements)
5. [Navigation & Linkage](#navigation--linkage)
6. [Authentication & State](#authentication--state)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)
9. [Performance](#performance)
10. [File Organization](#file-organization)
11. [Testing](#testing)
12. [Checklist](#checklist)

---

## Design System Foundation

### CSS Custom Properties (Design Tokens)

```css
:root {
    /* Brand Colors */
    --color-primary: #2563EB;
    --color-primary-hover: #1D4ED8;
    --color-secondary: #059669;
    --color-accent: #7C3AED;
    --color-error: #DC2626;
    --color-warning: #D97706;
    --color-success: #059669;
    
    /* Semantic Colors */
    --color-bg: #FFFFFF;
    --color-surface: #F8FAFC;
    --color-border: #E2E8F0;
    --color-text-primary: #0F172A;
    --color-text-muted: #64748B;
    
    /* Spacing Scale */
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 24px;
    --spacing-6: 32px;
    --spacing-8: 64px;
    
    /* Typography */
    --font-base: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    
    /* Border Radius Scale */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --radius-full: 9999px;
    
    /* Shadow System */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.10);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.10);
}
```

### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
    .dark-mode {
        --color-bg: #0F172A;
        --color-surface: #1E293B;
        --color-border: #334155;
        --color-text-primary: #F8FAFC;
        --color-text-muted: #94A3B8;
    }
}
```

### Typography Scale

```css
.page-title {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
}

.section-title {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
}

.body-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}

.caption-text {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
}
```

---

## HTML Structure

### Semantic HTML Foundation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Application Name</title>
</head>
<body>
    <!-- Header with navigation -->
    <header class="header" role="banner">
        <nav class="navigation" role="navigation">
            <!-- Navigation items -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main class="main-container" role="main">
        <section class="page-header">
            <h1 class="page-title">Page Title</h1>
            <p class="page-subtitle">Descriptive subtitle</p>
        </section>
        
        <section class="content-section">
            <!-- Page content -->
        </section>
    </main>
    
    <!-- Footer if applicable -->
    <footer class="footer" role="contentinfo">
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Component Structure Pattern

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
        <div class="card-actions"><!-- Action buttons --></div>
    </div>
    <div class="card-content"><!-- Main content --></div>
    <div class="card-footer"><!-- Footer actions/info --></div>
</div>
```

### Data Attributes for State

```html
<button class="btn btn-primary" 
        data-loading="false" 
        data-disabled="false"
        onclick="handleClick(this)">
    Submit
</button>
```

---

## CSS Architecture

### BEM-Inspired Class Naming

```css
/* Block */
.user-profile { }

/* Element */
.user-profile__avatar { }
.user-profile__info { }
.user-profile__name { }
.user-profile__email { }

/* Modifier */
.user-profile--compact { }
.user-profile__avatar--large { }
```

### Component-Based CSS

```css
/* === USER PROFILE COMPONENT === */
.user-profile {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    padding: var(--spacing-4);
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
}

.user-profile__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
}

.user-profile__info {
    flex: 1;
}

.user-profile__name {
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-1) 0;
}

.user-profile__email {
    color: var(--color-text-muted);
    font-size: 14px;
    margin: 0;
}
```

### State Classes

```css
/* Loading States */
.loading {
    opacity: 0.7;
    cursor: not-allowed;
    position: relative;
}

.loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    transform: translate(-50%, -50%);
}

/* Error States */
.error {
    border-color: var(--color-error);
    background: #FEF2F2;
}

/* Success States */
.success {
    border-color: var(--color-success);
    background: #F0F9F4;
}
```

---

## Interactive Elements

### Button System

```css
/* Base Button */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3) var(--spacing-4);
    border: none;
    border-radius: var(--radius-md);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
}

/* Button Variants */
.btn-primary {
    background: var(--color-primary);
    color: white;
}

.btn-primary:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.btn-secondary {
    background: var(--color-bg);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
}

.btn-danger {
    background: var(--color-error);
    color: white;
}
```

### Form Elements

```css
.form-group {
    margin-bottom: var(--spacing-4);
}

.form-label {
    display: block;
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-2);
}

.form-input {
    width: 100%;
    padding: var(--spacing-3) var(--spacing-4);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 16px;
    font-family: var(--font-base);
    background: var(--color-bg);
    color: var(--color-text-primary);
    transition: all 0.2s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### Animations and Transitions

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Usage */
.fade-in {
    animation: fadeIn 0.3s ease-out;
}

.slide-in {
    animation: slideIn 0.3s ease-out;
}
```

---

## Navigation & Linkage

**CRITICAL**: All mockup suites must implement complete navigation linkage between pages.

### Navigation Consistency

```html
<nav class="main-navigation">
    <ul class="nav-links">
        <li><a href="01-login.html" class="nav-link">Login</a></li>
        <li><a href="02-dashboard.html" class="nav-link">Dashboard</a></li>
        <li><a href="03-users.html" class="nav-link">Users</a></li>
        <li><a href="04-security.html" class="nav-link">Security</a></li>
        <li><a href="05-api-keys.html" class="nav-link">API Keys</a></li>
        <li><a href="06-analytics.html" class="nav-link">Analytics</a></li>
    </ul>
</nav>
```

### Link Validation Checklist

- Primary Navigation: All main nav links work across all pages
- Logo Links: Company/product logos link back to dashboard/home
- Breadcrumbs: When used, all breadcrumb links are functional
- Call-to-Action Buttons: Action buttons link to appropriate pages
- Quick Actions: Dashboard shortcuts link to actual feature pages
- Footer Links: Footer navigation items have working destinations
- Context Links: In-content links (like "view details") are functional

### Page Flow Mapping

```
Login → Dashboard ↔ Users
         ↓         ↗
    Security ↔ API Keys ↔ Analytics
```

### Navigation Implementation

```javascript
const NavigationManager = {
    pages: {
        'login': '01-login.html',
        'dashboard': '02-dashboard.html',
        'users': '03-users.html',
        'security': '04-security.html',
        'api-keys': '05-api-keys.html',
        'analytics': '06-analytics.html'
    },
    
    setActivePage(pageKey) {
        document.querySelectorAll('.nav-link').forEach(link => 
            link.classList.remove('active'));
        
        const activeLink = document.querySelector(`a[href="${this.pages[pageKey]}"]`);
        if (activeLink) activeLink.classList.add('active');
    },
    
    validateLinks() {
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('http')) {
                if (!Object.values(this.pages).includes(href)) {
                    console.warn(`Broken link: ${href}`);
                    link.style.border = '2px solid red';
                }
            }
        });
    }
};
```

### Deep Linking and Context

```html
<!-- Login with redirect -->
<a href="01-login.html?redirect=05-api-keys.html">Sign In to Access API Keys</a>

<!-- Dashboard with highlighted section -->
<a href="02-dashboard.html#security-alerts">View Security Alerts</a>

<!-- User management with filters -->
<a href="03-users.html?filter=admin&status=active">View Admin Users</a>
```

```javascript
function preserveNavigationState() {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectTo = urlParams.get('redirect');
    const highlightSection = window.location.hash;
    
    if (redirectTo && isAuthenticated()) {
        window.location.href = redirectTo;
        return;
    }
    
    if (highlightSection) {
        const element = document.querySelector(highlightSection);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.classList.add('highlighted');
        }
    }
}
```

### Navigation Testing

```javascript
function testAllNavigation() {
    const results = { passed: 0, failed: 0, errors: [] };
    
    document.querySelectorAll('a[href]').forEach((link, index) => {
        const href = link.getAttribute('href');
        
        if (!href || href.startsWith('http') || href.startsWith('#')) return;
        
        fetch(href, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    results.passed++;
                    link.dataset.linkStatus = 'valid';
                } else {
                    results.failed++;
                    results.errors.push(`${href} - ${response.status}`);
                    link.dataset.linkStatus = 'broken';
                }
            });
    });
    
    return results;
}
```

### Visual Navigation Feedback

```css
.nav-link.active {
    color: var(--color-primary);
    background: rgba(37, 99, 235, 0.1);
    border-radius: var(--radius-md);
}

.nav-link:hover {
    color: var(--color-primary);
    transform: translateY(-1px);
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-4);
    font-size: 14px;
    color: var(--color-text-muted);
}

/* Mobile navigation */
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100vh;
        background: var(--color-bg);
        flex-direction: column;
        padding: var(--spacing-8) var(--spacing-4);
        transition: left 0.3s ease;
        box-shadow: var(--shadow-lg);
    }
    
    .nav-links.open { left: 0; }
    
    .nav-link {
        min-height: 44px;
        min-width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-3);
    }
}
```

---

## Authentication & State

### Authentication System

```javascript
function checkAuthentication() {
    const session = localStorage.getItem('app_session') || 
                   sessionStorage.getItem('app_session');
    
    if (!session || session !== 'authenticated') {
        window.location.href = 'login.html';
        return false;
    }
    
    const userData = localStorage.getItem('app_user') || 
                    sessionStorage.getItem('app_user');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            updateUserDisplay(user);
        } catch (e) {
            console.error('Failed to parse user data');
        }
    }
    return true;
}

function signIn(credentials) {
    const userData = {
        email: credentials.email,
        name: 'User Name',
        avatar: 'UN',
        loginTime: new Date().toISOString(),
        rememberMe: credentials.rememberMe
    };
    
    const storage = credentials.rememberMe ? localStorage : sessionStorage;
    storage.setItem('app_session', 'authenticated');
    storage.setItem('app_user', JSON.stringify(userData));
}

function signOut() {
    localStorage.removeItem('app_session');
    localStorage.removeItem('app_user');
    sessionStorage.removeItem('app_session');
    sessionStorage.removeItem('app_user');
    window.location.href = 'login.html';
}
```

### State Management

```javascript
const AppState = {
    theme: 'light',
    user: null,
    loading: false,
    
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', this.theme);
    },
    
    setLoading(isLoading) {
        this.loading = isLoading;
        document.body.classList.toggle('app-loading', isLoading);
    },
    
    setUser(userData) {
        this.user = userData;
        updateUserDisplay(userData);
    }
};
```

### Common Utilities

```javascript
function showAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 5000);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    }).format(new Date(date));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
```

---

## Responsive Design

### Mobile-First Approach

```css
/* Mobile First (320px+) */
.container {
    padding: var(--spacing-4);
    max-width: 100%;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
}

/* Tablet (768px+) */
@media (min-width: 768px) {
    .container {
        padding: var(--spacing-6);
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-6);
    }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

### Flexible Layouts

```css
.dashboard-layout {
    display: grid;
    grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 250px 1fr;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

@media (max-width: 768px) {
    .dashboard-layout {
        grid-template-areas: "header" "main" "footer";
        grid-template-columns: 1fr;
    }
    .sidebar { display: none; }
}
```

### Responsive Components

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-5);
}

.data-table {
    width: 100%;
    overflow-x: auto;
}

@media (max-width: 768px) {
    .card-grid {
        grid-template-columns: 1fr;
    }
    
    .data-table {
        font-size: 14px;
    }
}
```

---

## Accessibility

### Semantic HTML

```html
<form>
    <fieldset>
        <legend>User Information</legend>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" required aria-describedby="email-help">
            <div id="email-help" class="help-text">We'll never share your email</div>
        </div>
    </fieldset>
    <button type="submit">Submit</button>
</form>

<nav aria-label="Main navigation">
    <ul>
        <li><a href="#" aria-current="page">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### ARIA Attributes

```html
<!-- Loading States -->
<button aria-busy="true" aria-describedby="loading-text">
    <span id="loading-text">Loading...</span>
</button>

<!-- Error States -->
<input type="email" aria-invalid="true" aria-describedby="email-error">
<div id="email-error" role="alert">Please enter a valid email</div>

<!-- Modal Dialog -->
<div role="dialog" aria-modal="true" 
     aria-labelledby="modal-title" aria-describedby="modal-description">
    <h2 id="modal-title">Confirm Action</h2>
    <p id="modal-description">Are you sure you want to continue?</p>
</div>
```

### Keyboard Navigation & Focus

```css
.btn:focus, .form-input:focus, .nav-link:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
}

.skip-link:focus { top: 6px; }
```

### Color and Contrast

```css
/* WCAG AA compliance (4.5:1 ratio minimum) */
.text-primary { color: #0F172A; /* 19.07:1 */ }
.text-muted { color: #64748B; /* 7.05:1 */ }

/* Don't rely solely on color */
.status-error {
    color: var(--color-error);
    position: relative;
}
.status-error::before {
    content: "⚠️";
    margin-right: var(--spacing-1);
}
```

---

## Performance

### CSS Optimization

```css
/* Use efficient selectors */
.user-card { } /* Good: class selector */
#header { } /* Good: ID selector */

/* Avoid compound/complex selectors */
/* div.user-card { } - Avoid */
/* div > div > .user-card { } - Avoid */

/* Minimize repaints and reflows */
.smooth-animation {
    transform: translateX(100px); /* Use transform over layout properties */
    opacity: 0; /* Use opacity over display/visibility */
    will-change: transform, opacity; /* Optimization hints */
}
```

### Images & JavaScript

```html
<!-- Responsive Images -->
<img src="image-400.jpg"
     srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
     sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
     alt="Descriptive alt text" loading="lazy">

<!-- WebP with fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="Descriptive alt text">
</picture>
```

```javascript
// Use event delegation
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) handleButtonClick(e.target);
});

// Lazy loading
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadContent(entry.target);
            observer.unobserve(entry.target);
        }
    });
});
```

---

## File Organization

### Directory Structure

```
mockups/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── components/ (buttons.css, forms.css, cards.css)
│   │   └── pages/ (login.css, dashboard.css, profile.css)
│   ├── js/ (main.js, auth.js, utils.js)
│   └── images/ (icons/, avatars/, mockups/)
├── pages/ (login.html, dashboard.html, profile.html)
└── components/ (header.html, sidebar.html, footer.html)
```

### Naming Conventions

```
Files: 01-login.html, 02-dashboard.html, 03-user-profile.html
CSS Classes: .user-profile, .user-profile__avatar, .user-profile--compact
JS Functions: getUserData(), updateUserProfile(), validateUserInput()
Variables: primaryColor, userProfileData, isAuthenticated
```

---

## Testing

### Cross-Browser & Accessibility

```javascript
// Feature Detection
function supportsFlexbox() { return CSS.supports('display', 'flex'); }
function supportsGrid() { return CSS.supports('display', 'grid'); }

// Color Contrast Checker
function checkContrast(foreground, background) {
    const ratio = calculateContrastRatio(foreground, background);
    return { ratio: ratio, wcagAA: ratio >= 4.5, wcagAAA: ratio >= 7.0 };
}

// Performance Monitoring
function measurePerformance() {
    const perfData = performance.getEntriesByType('navigation')[0];
    const metrics = {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
        loadComplete: perfData.loadEventEnd - perfData.navigationStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
    };
    console.table(metrics);
}
```

---

## Checklist

### Design System
- [ ] CSS custom properties for design tokens
- [ ] Consistent color palette and typography scale
- [ ] Spacing system (4px base unit)
- [ ] Border radius and shadow system

### Structure & Functionality
- [ ] Semantic HTML with proper heading hierarchy
- [ ] Form labels associated with inputs
- [ ] ARIA attributes for complex interactions
- [ ] Interactive hover/focus states
- [ ] Loading, error, and success states

### Navigation & Linkage (**CRITICAL**)
- [ ] Complete navigation matrix - all pages link to relevant pages
- [ ] Active state management - current page highlighted
- [ ] Logo navigation to dashboard/home
- [ ] Functional breadcrumbs and quick action links
- [ ] Context-sensitive links work ("view details", etc.)
- [ ] Mobile responsive navigation
- [ ] All internal links validated and tested
- [ ] Deep linking and URL parameters
- [ ] Navigation keyboard accessible

### Responsive & Accessibility
- [ ] Mobile-first approach with defined breakpoints
- [ ] Touch-friendly targets (44px minimum)
- [ ] WCAG AA color contrast standards
- [ ] Keyboard accessible interactive elements
- [ ] Screen reader friendly markup
- [ ] Visible focus indicators

### Performance & Testing
- [ ] Optimized CSS and images
- [ ] Efficient JavaScript with event delegation
- [ ] Cross-browser compatibility tested
- [ ] Accessibility tools validation
- [ ] Performance metrics measured

### Authentication & Documentation
- [ ] Login/logout simulation working
- [ ] User state persistence implemented
- [ ] Code adequately commented
- [ ] File organization clear

---

*Quick reference guide for creating high-fidelity UI mockups with complete navigation, accessibility, and responsive design. Focus on practical implementation over theoretical explanations.*