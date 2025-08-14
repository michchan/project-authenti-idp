# UI Design Mockup Guidelines

Simple reference for creating navigable UI mockups that serve as visual design references.

**Purpose**: Create HTML mockups that users can browse and click through to see all design pages/components. The main goal is visual reference for frontend engineers, not production-ready code.

## ⚠️ CRITICAL: Complete Coverage Requirements

**MANDATORY FIRST STEP**: Before creating any mockups, you MUST:

1. **Read ALL user journeys** from the user-journeys document to understand every screen/state required
2. **Review ALL wireframes** from the wireframes document to identify each mockup needed  
3. **Create a comprehensive checklist** of every screen, modal, form, and state mentioned
4. **Map user flows** to ensure no transition points are missing mockups
5. **Create an index page** that organizes and links to ALL mockups for easy navigation

### Coverage Validation Process

```markdown
## Mockup Coverage Checklist Template

### From User Journeys Analysis:
- [ ] Journey 1: Screen A, Screen B, Error State C
- [ ] Journey 2: Screen D, Modal E, Confirmation F
- [ ] Journey N: ...

### From Wireframes Analysis:
- [ ] Wireframe Section 1: Page X, Page Y, Component Z
- [ ] Wireframe Section 2: Page M, Flow N, State O
- [ ] Wireframe Section N: ...

### Cross-Reference Check:
- [ ] Every user journey step has a corresponding mockup
- [ ] Every wireframe screen has been implemented
- [ ] All error states and edge cases covered
- [ ] Navigation flows complete between all screens
- [ ] Index page created with full navigation

### Missing Elements (if any):
- List any identified gaps with reasons
```

**FAILURE CRITERION**: If any user journey step or wireframe screen lacks a mockup, the work is INCOMPLETE and must be remedied before proceeding.

## Table of Contents

1. [Basic Structure](#basic-structure)
2. [Simple Styling](#simple-styling)
3. [Navigation & Linkage](#navigation--linkage)
4. [Interactive Elements](#interactive-elements)
5. [Responsive Basics](#responsive-basics)
6. [Checklist](#checklist)

---

## Basic Structure

### Simple CSS Variables

```css
:root {
    /* Basic Colors */
    --primary: #2563EB;
    --secondary: #6B7280;
    --success: #10B981;
    --error: #EF4444;
    --warning: #F59E0B;
    
    /* Layout */
    --bg: #FFFFFF;
    --surface: #F9FAFB;
    --border: #E5E7EB;
    --text: #111827;
    --text-muted: #6B7280;
    
    /* Basic spacing */
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
}
```

### Simple Typography

```css
.title { font-size: 24px; font-weight: bold; }
.subtitle { font-size: 18px; font-weight: 600; }
.body { font-size: 16px; }
.small { font-size: 14px; color: var(--text-muted); }
```

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="nav">
        <!-- Navigation links to other pages -->
    </nav>
    
    <main class="main">
        <h1>Page Title</h1>
        <!-- Page content -->
    </main>
    
    <script src="script.js"></script>
</body>
</html>
```

## Simple Styling

### Basic CSS Classes

```css
/* Layout helpers */
.container { max-width: 1200px; margin: 0 auto; padding: var(--space-md); }
.card { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: var(--space-lg); }
.flex { display: flex; }
.flex-center { display: flex; align-items: center; justify-content: center; }
.gap { gap: var(--space-md); }

/* Simple component styles */
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
}

.btn-primary { background: var(--primary); color: white; }
.btn-secondary { background: var(--secondary); color: white; }

.form-input {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--border);
    border-radius: 6px;
    font-size: 16px;
}
```

## Interactive Elements

### Basic Interactions

```css
/* Hover effects */
.btn:hover { transform: translateY(-2px); opacity: 0.9; }
.card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

/* Simple animations */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.fade-in { animation: fadeIn 0.3s ease; }

/* Basic states */
.active { background: var(--primary); color: white; }
.disabled { opacity: 0.5; cursor: not-allowed; }
```

### JavaScript Best Practices - DRY Principle

**CRITICAL: Avoid Code Duplication**

When creating multiple mockup pages, always extract common functionality into shared JavaScript files to reduce maintenance costs and ensure consistency.

#### ❌ BAD: Duplicate Code in Every HTML File
```html
<!-- 01-login.html -->
<script>
    class ThemeManager {
        constructor() { /* 50+ lines of theme logic */ }
        toggle() { /* theme toggle logic */ }
        // ... more duplicate code
    }
    new ThemeManager();
</script>

<!-- 02-register.html -->
<script>
    class ThemeManager {
        constructor() { /* SAME 50+ lines duplicated */ }
        toggle() { /* SAME theme toggle logic */ }
        // ... SAME duplicate code
    }
    new ThemeManager();
</script>
<!-- This pattern across 14+ files = 700+ lines of duplicate code -->
```

#### ✅ GOOD: Shared JavaScript Module
```javascript
// theme-manager.js - Single source of truth
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.initialize();
        this.attachEventListeners();
    }
    
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.apply();
        this.persist();
    }
    
    // ... complete theme management logic (107 lines once)
}

// Auto-initialize for all pages
window.themeManager = new ThemeManager();
```

```html
<!-- All HTML files just reference the shared module -->
<script src="theme-manager.js"></script>
<!-- No duplicate code! -->
```

#### Common Reusable Modules

```javascript
// navigation-manager.js
class NavigationManager {
    static setActivePage(pageId) {
        document.querySelectorAll('.nav-link').forEach(link => 
            link.classList.remove('active'));
        document.querySelector(`a[href="${pageId}"]`)?.classList.add('active');
    }
}

// form-validator.js  
class FormValidator {
    static validateRequired(form) {
        const inputs = form.querySelectorAll('input[required]');
        return Array.from(inputs).every(input => input.value.trim());
    }
    
    static showFieldError(field, message) {
        const error = field.parentNode.querySelector('.field-error');
        if (error) error.textContent = message;
    }
}

// modal-manager.js
class ModalManager {
    static show(modalId) {
        document.getElementById(modalId).classList.add('active');
    }
    
    static hide(modalId) {
        document.getElementById(modalId).classList.remove('active');
    }
}
```

#### File Organization Strategy

```
mockups/
├── shared-scripts/
│   ├── theme-manager.js       (theme switching logic)
│   ├── navigation-manager.js  (page navigation helpers)
│   ├── form-validator.js      (form validation utilities)
│   ├── modal-manager.js       (modal/popup management)
│   └── utils.js               (general utilities)
├── styles.css                 (shared styles)
├── index.html                 (navigation hub)
├── 01-login.html              (includes shared scripts)
├── 02-register.html           (includes shared scripts)
└── ...
```

#### Implementation in HTML Files

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Page content -->
    
    <!-- Shared scripts -->
    <script src="shared-scripts/theme-manager.js"></script>
    <script src="shared-scripts/navigation-manager.js"></script>
    <script src="shared-scripts/form-validator.js"></script>
    
    <!-- Page-specific script (minimal) -->
    <script>
        // Only page-specific logic here
        NavigationManager.setActivePage('01-login.html');
    </script>
</body>
</html>
```

#### Benefits of This Approach
- **Reduced Codebase**: 700+ lines reduced to 107 lines (83% reduction)
- **Single Source of Truth**: Updates in one place affect all pages
- **Consistency**: Guaranteed identical behavior across mockups
- **Maintainability**: Fix bugs once, benefit everywhere
- **Performance**: Shared scripts cache across page visits
- **Development Speed**: New pages just include existing modules

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

### Simple Authentication

```javascript
// Basic login simulation
function login(email, password) {
    if (email && password) {
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('userEmail', email);
        window.location.href = 'index.html';
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}

// Check if user should see login page
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    const isLoginPage = window.location.pathname.includes('login.html');
    
    if (!isLoggedIn && !isLoginPage) {
        window.location.href = 'login.html';
    }
}
```

## Responsive Basics

### Simple Responsive Layout

```css
/* Basic responsive grid */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
}

@media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
    .container { max-width: 1200px; }
}

@media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Mobile navigation */
@media (max-width: 768px) {
    .nav { flex-direction: column; }
    .nav-item { width: 100%; text-align: center; }
}
```



## Simple File Structure

```
mockup/
├── index.html (homepage/dashboard)
├── login.html
├── users.html
├── settings.html
├── styles.css (all styles in one file)
├── script.js (basic interactions)
└── images/ (screenshots, icons)
```

**Keep it simple**: Use descriptive filenames, put all CSS in one file, minimal JavaScript.


## Checklist

### Coverage Requirements (MANDATORY)
- [ ] **Complete coverage analysis done** - All user journeys and wireframes reviewed
- [ ] **All screens implemented** - Every wireframe screen has corresponding mockup
- [ ] **All user flows covered** - Every user journey step has a mockup
- [ ] **Index page created** - Navigation hub with categorized links to all mockups
- [ ] **Cross-references validated** - No gaps between documentation and implementation

### Essential Requirements
- [ ] **All navigation links work** - Users can navigate between all pages
- [ ] **All buttons link somewhere** - Action buttons go to relevant pages  
- [ ] **Current page highlighted** - Users know where they are
- [ ] **Logo links to home** - Standard web behavior
- [ ] **Mobile friendly** - Works on phone screens

### Index Page Requirements
- [ ] **Categorized organization** - Mockups grouped by user journey/functionality
- [ ] **Clear descriptions** - Each mockup has purpose and flow context
- [ ] **Statistics display** - Total mockups, categories, coverage metrics
- [ ] **Flow diagrams** - Visual representation of user journey connections
- [ ] **Quick navigation** - Easy access to any mockup from index

### Nice to Have
- [ ] Simple hover effects on interactive elements
- [ ] Basic form validation (required fields)
- [ ] Login/logout simulation works
- [ ] Consistent visual styling across pages

### Files Needed
- [ ] All HTML pages created and linked
- [ ] index.html - comprehensive navigation page
- [ ] Single CSS file with basic styles
- [ ] **Shared JavaScript modules** - Extract common functionality (theme management, navigation, forms, etc.)
- [ ] **No duplicate JavaScript code** - All common logic must be in shared modules
- [ ] Images/icons organized in folder

### Code Quality Requirements
- [ ] **DRY Principle Applied** - No duplicated JavaScript logic across files
- [ ] **Single Source of Truth** - Common functionality exists in only one place
- [ ] **Shared Modules Used** - All pages reference shared scripts instead of inline duplicates
- [ ] **Maintainable Structure** - Updates require changing only one file per feature

---

**Remember**: The goal is a clickable design prototype that shows all screens and components. Frontend engineers will build the production version with proper architecture, performance, and testing.