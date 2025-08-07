# 🎨 TaskMaster Design System v1.0

This document defines the visual design foundation for TaskMaster, a personal task management web application. It establishes colors, typography, spacing, and visual patterns to ensure consistency across all interfaces.

---

## 📁 Index

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Elevation & Shadows](#elevation--shadows)
6. [Border Radius](#border-radius)
7. [Icons & Illustrations](#icons--illustrations)
8. [Motion & Animation](#motion--animation)
9. [Dark Mode Support](#dark-mode-support)
10. [Component States](#component-states)

---

## Brand Identity

### Brand Personality
TaskMaster embodies **simplicity, focus, and productivity**. The design should feel:
- **Clean and uncluttered** - Distraction-free environment
- **Approachable and friendly** - Not intimidating or overly complex
- **Reliable and trustworthy** - Users depend on it for important tasks
- **Motivating and positive** - Encourages completion and progress

### Visual Principles
- **Progressive Disclosure** - Show what's needed, when it's needed
- **Consistent Patterns** - Familiar interactions across all screens
- **Accessibility First** - Inclusive design for all users
- **Mobile-Responsive** - Equal experience across devices

---

## Color System

### Primary Colors

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #3182CE; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">🎯 Primary</div>
    <div style="font-size: 12px; color: #525252;">#3182CE</div>
    <div style="font-size: 11px; margin-top: 4px;">Main brand color</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #4299E1; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">💙 Primary Light</div>
    <div style="font-size: 12px; color: #525252;">#4299E1</div>
    <div style="font-size: 11px; margin-top: 4px;">Hover states</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #2C5282; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">🔷 Primary Dark</div>
    <div style="font-size: 12px; color: #525252;">#2C5282</div>
    <div style="font-size: 11px; margin-top: 4px;">Active states</div>
  </div>
</div>

```css
:root {
  /* Primary Blue - Main brand color, primary buttons, links */
  --color-primary-50: #EBF8FF;
  --color-primary-100: #BEE3F8;
  --color-primary-200: #90CDF4;
  --color-primary-300: #63B3ED;
  --color-primary-400: #4299E1;
  --color-primary-500: #3182CE;  /* Main primary */
  --color-primary-600: #2B77CB;
  --color-primary-700: #2C5282;
  --color-primary-800: #2A4365;
  --color-primary-900: #1A365D;
}
```

### Secondary Colors

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #22C55E; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">✅ Success</div>
    <div style="font-size: 12px; color: #525252;">#22C55E</div>
    <div style="font-size: 11px; margin-top: 4px;">Completed tasks</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #F59E0B; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">⚠️ Warning</div>
    <div style="font-size: 12px; color: #525252;">#F59E0B</div>
    <div style="font-size: 11px; margin-top: 4px;">Medium priority</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #EF4444; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">🚨 Danger</div>
    <div style="font-size: 12px; color: #525252;">#EF4444</div>
    <div style="font-size: 11px; margin-top: 4px;">High priority</div>
  </div>
</div>

```css
:root {
  /* Success Green - Completed tasks, success messages */
  --color-success-50: #F0FDF4;
  --color-success-100: #DCFCE7;
  --color-success-200: #BBF7D0;
  --color-success-300: #86EFAC;
  --color-success-400: #4ADE80;
  --color-success-500: #22C55E;  /* Main success */
  --color-success-600: #16A34A;
  --color-success-700: #15803D;
  --color-success-800: #166534;
  --color-success-900: #14532D;

  /* Warning Orange - Medium priority, upcoming deadlines */
  --color-warning-50: #FFFBEB;
  --color-warning-100: #FEF3C7;
  --color-warning-200: #FDE68A;
  --color-warning-300: #FCD34D;
  --color-warning-400: #FBBF24;
  --color-warning-500: #F59E0B;  /* Main warning */
  --color-warning-600: #D97706;
  --color-warning-700: #B45309;
  --color-warning-800: #92400E;
  --color-warning-900: #78350F;

  /* Danger Red - High priority, overdue tasks, errors */
  --color-danger-50: #FEF2F2;
  --color-danger-100: #FEE2E2;
  --color-danger-200: #FECACA;
  --color-danger-300: #FCA5A5;
  --color-danger-400: #F87171;
  --color-danger-500: #EF4444;  /* Main danger */
  --color-danger-600: #DC2626;
  --color-danger-700: #B91C1C;
  --color-danger-800: #991B1B;
  --color-danger-900: #7F1D1D;
}
```

### Neutral Colors

```css
:root {
  /* Gray Scale - Backgrounds, text, borders */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #A3A3A3;
  --color-gray-500: #737373;  /* Mid-gray */
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;

  /* Semantic neutrals */
  --color-white: #FFFFFF;
  --color-black: #000000;
}
```

### Category Colors

```css
:root {
  /* Work Category - Professional blue */
  --color-category-work: #3B82F6;
  --color-category-work-light: #DBEAFE;
  
  /* Personal Category - Warm green */
  --color-category-personal: #10B981;
  --color-category-personal-light: #D1FAE5;
  
  /* Shopping Category - Purple */
  --color-category-shopping: #8B5CF6;
  --color-category-shopping-light: #EDE9FE;
  
  /* Health Category - Teal */
  --color-category-health: #14B8A6;
  --color-category-health-light: #CCFBF1;
  
  /* Finance Category - Indigo */
  --color-category-finance: #6366F1;
  --color-category-finance-light: #E0E7FF;
  
  /* Learning Category - Orange */
  --color-category-learning: #F97316;
  --color-category-learning-light: #FED7AA;
  
  /* Hobbies Category - Pink */
  --color-category-hobbies: #EC4899;
  --color-category-hobbies-light: #FCE7F3;
}
```

### Priority Colors

```css
:root {
  /* Priority levels with consistent semantics */
  --priority-high: var(--color-danger-500);      /* #EF4444 - Red */
  --priority-high-bg: var(--color-danger-50);    /* #FEF2F2 */
  
  --priority-medium: var(--color-warning-500);   /* #F59E0B - Orange */
  --priority-medium-bg: var(--color-warning-50); /* #FFFBEB */
  
  --priority-low: var(--color-success-500);      /* #22C55E - Green */
  --priority-low-bg: var(--color-success-50);    /* #F0FDF4 */
}
```

---

## Typography

### Font Families

```css
:root {
  /* Primary font for headings and UI elements */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  /* Secondary font for body text */
  --font-secondary: 'Inter', system-ui, sans-serif;
  
  /* Monospace for code or data */
  --font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace;
}
```

### Type Scale

```css
:root {
  /* Font sizes following a consistent scale */
  --text-xs: 0.75rem;    /* 12px - Captions, labels */
  --text-sm: 0.875rem;   /* 14px - Small text, meta info */
  --text-base: 1rem;     /* 16px - Body text, default */
  --text-lg: 1.125rem;   /* 18px - Large body text */
  --text-xl: 1.25rem;    /* 20px - Subheadings */
  --text-2xl: 1.5rem;    /* 24px - Section headers */
  --text-3xl: 1.875rem;  /* 30px - Page titles */
  --text-4xl: 2.25rem;   /* 36px - Hero headings */

  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Typography Examples

<div style="margin: 20px 0; padding: 20px; background: white; border: 1px solid #E5E5E5; border-radius: 8px;">
  <h1 style="font-size: 1.875rem; font-weight: 700; line-height: 1.25; color: #171717; margin: 0 0 16px 0;">TaskMaster Dashboard</h1>
  <div style="font-size: 12px; color: #737373; margin-bottom: 16px;">HEADING 1 - 30PX, BOLD</div>
  
  <h2 style="font-size: 1.5rem; font-weight: 600; line-height: 1.25; color: #262626; margin: 0 0 12px 0;">Today's Tasks</h2>
  <div style="font-size: 12px; color: #737373; margin-bottom: 16px;">HEADING 2 - 24PX, SEMIBOLD</div>
  
  <h3 style="font-size: 1.25rem; font-weight: 600; line-height: 1.5; color: #262626; margin: 0 0 8px 0;">Work Category</h3>
  <div style="font-size: 12px; color: #737373; margin-bottom: 16px;">HEADING 3 - 20PX, SEMIBOLD</div>
  
  <p style="font-size: 1.125rem; font-weight: 400; line-height: 1.5; color: #404040; margin: 0 0 8px 0;">Complete your quarterly presentation for the team meeting on Friday.</p>
  <div style="font-size: 12px; color: #737373; margin-bottom: 16px;">BODY LARGE - 18PX, NORMAL</div>
  
  <p style="font-size: 1rem; font-weight: 400; line-height: 1.5; color: #404040; margin: 0 0 8px 0;">This is the standard body text used throughout the TaskMaster interface for descriptions and content.</p>
  <div style="font-size: 12px; color: #737373; margin-bottom: 16px;">BODY NORMAL - 16PX, NORMAL</div>
  
  <p style="font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: #525252; margin: 0 0 8px 0;">Small text for secondary information, metadata, and form helper text.</p>
  <div style="font-size: 12px; color: #737373; margin-bottom: 16px;">BODY SMALL - 14PX, NORMAL</div>
  
  <div style="font-size: 0.75rem; font-weight: 500; line-height: 1.5; color: #737373; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 4px 0;">TASK CATEGORY</div>
  <div style="font-size: 12px; color: #737373;">CAPTION - 12PX, MEDIUM, UPPERCASE</div>
</div>

### Typography Classes

```css
/* Heading styles */
.heading-1 {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-gray-900);
}

.heading-2 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--color-gray-800);
}

.heading-3 {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  color: var(--color-gray-800);
}

/* Body text styles */
.body-large {
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-700);
}

.body-normal {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-700);
}

.body-small {
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-600);
}

.caption {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## Spacing & Layout

### Spacing Scale

```css
:root {
  /* Consistent spacing scale based on 4px base unit */
  --space-px: 1px;
  --space-0: 0;
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */
}
```

### Spacing Examples

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 4px; height: 20px; background: #3182CE; margin-right: 12px;"></div>
      <span style="font-size: 14px;">4px - Minimal spacing</span>
    </div>
    <div style="font-size: 12px; color: #737373; margin-left: 28px;">Used for: Icon gaps, border width</div>
  </div>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 8px; height: 20px; background: #3182CE; margin-right: 12px;"></div>
      <span style="font-size: 14px;">8px - Small spacing</span>
    </div>
    <div style="font-size: 12px; color: #737373; margin-left: 28px;">Used for: Button groups, small gaps</div>
  </div>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 16px; height: 20px; background: #3182CE; margin-right: 12px;"></div>
      <span style="font-size: 14px;">16px - Standard spacing</span>
    </div>
    <div style="font-size: 12px; color: #737373; margin-left: 28px;">Used for: Form fields, task item padding</div>
  </div>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 24px; height: 20px; background: #3182CE; margin-right: 12px;"></div>
      <span style="font-size: 14px;">24px - Medium spacing</span>
    </div>
    <div style="font-size: 12px; color: #737373; margin-left: 28px;">Used for: Card padding, section gaps</div>
  </div>
  
  <div style="margin-bottom: 0;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 32px; height: 20px; background: #3182CE; margin-right: 12px;"></div>
      <span style="font-size: 14px;">32px - Large spacing</span>
    </div>
    <div style="font-size: 12px; color: #737373; margin-left: 28px;">Used for: Modal padding, page layout</div>
  </div>
</div>

### Component Spacing

```css
:root {
  /* Common component spacing patterns */
  --padding-btn-sm: var(--space-2) var(--space-3);      /* 8px 12px */
  --padding-btn-md: var(--space-3) var(--space-4);      /* 12px 16px */
  --padding-btn-lg: var(--space-4) var(--space-6);      /* 16px 24px */
  
  --padding-input: var(--space-3) var(--space-4);       /* 12px 16px */
  --padding-card: var(--space-6);                       /* 24px */
  --padding-modal: var(--space-8);                      /* 32px */
  
  --gap-form-field: var(--space-4);                     /* 16px */
  --gap-button-group: var(--space-2);                   /* 8px */
  --gap-card-grid: var(--space-6);                      /* 24px */
}
```

### Layout Containers

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.container-sm {
  max-width: 640px;
}

.container-md {
  max-width: 768px;
}

.container-lg {
  max-width: 1024px;
}

.container-xl {
  max-width: 1280px;
}
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive grid utilities */
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Elevation & Shadows

### Shadow Examples

<div style="background: #FAFAFA; padding: 24px; border-radius: 12px; margin: 20px 0;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
    
    <!-- Small Shadow -->
    <div style="text-align: center;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #737373;">Small</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">shadow-sm</div>
      <div style="font-size: 12px; color: #737373;">Task items, badges</div>
    </div>
    
    <!-- Medium Shadow -->
    <div style="text-align: center;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #737373;">Medium</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">shadow-md</div>
      <div style="font-size: 12px; color: #737373;">Cards, dropdowns</div>
    </div>
    
    <!-- Large Shadow -->
    <div style="text-align: center;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #737373;">Large</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">shadow-lg</div>
      <div style="font-size: 12px; color: #737373;">Hover states, popups</div>
    </div>
    
    <!-- Modal Shadow -->
    <div style="text-align: center;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #737373;">Modal</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">shadow-2xl</div>
      <div style="font-size: 12px; color: #737373;">Modals, overlays</div>
    </div>
    
  </div>
</div>

### Shadow Scale

```css
:root {
  /* Elevation shadows for depth hierarchy */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Focus and interaction shadows */
  --shadow-focus: 0 0 0 3px rgba(49, 130, 206, 0.1);
  --shadow-primary-focus: 0 0 0 3px rgba(49, 130, 206, 0.2);
  --shadow-danger-focus: 0 0 0 3px rgba(239, 68, 68, 0.2);
}
```

### Component Elevation

```css
/* Card elevation levels */
.elevation-0 { box-shadow: none; }
.elevation-1 { box-shadow: var(--shadow-sm); }
.elevation-2 { box-shadow: var(--shadow-md); }
.elevation-3 { box-shadow: var(--shadow-lg); }
.elevation-4 { box-shadow: var(--shadow-xl); }
.elevation-5 { box-shadow: var(--shadow-2xl); }

/* Interactive shadows */
.shadow-hover {
  transition: box-shadow 0.15s ease-in-out;
}

.shadow-hover:hover {
  box-shadow: var(--shadow-lg);
}

.focus-ring {
  transition: box-shadow 0.15s ease-in-out;
}

.focus-ring:focus {
  outline: none;
  box-shadow: var(--shadow-focus);
}
```

---

## Border Radius

### Border Radius Examples

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
    
    <div style="text-align: center;">
      <div style="width: 80px; height: 60px; background: #EBF8FF; border: 2px solid #3182CE; border-radius: 0; margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #3182CE;">None</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">0px</div>
      <div style="font-size: 12px; color: #737373;">Sharp edges</div>
    </div>
    
    <div style="text-align: center;">
      <div style="width: 80px; height: 60px; background: #EBF8FF; border: 2px solid #3182CE; border-radius: 4px; margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #3182CE;">Small</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">4px</div>
      <div style="font-size: 12px; color: #737373;">Badges, tags</div>
    </div>
    
    <div style="text-align: center;">
      <div style="width: 80px; height: 60px; background: #EBF8FF; border: 2px solid #3182CE; border-radius: 6px; margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #3182CE;">Medium</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">6px</div>
      <div style="font-size: 12px; color: #737373;">Buttons, inputs</div>
    </div>
    
    <div style="text-align: center;">
      <div style="width: 80px; height: 60px; background: #EBF8FF; border: 2px solid #3182CE; border-radius: 8px; margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #3182CE;">Large</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">8px</div>
      <div style="font-size: 12px; color: #737373;">Cards, modals</div>
    </div>
    
    <div style="text-align: center;">
      <div style="width: 80px; height: 60px; background: #EBF8FF; border: 2px solid #3182CE; border-radius: 12px; margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #3182CE;">XL</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">12px</div>
      <div style="font-size: 12px; color: #737373;">Large cards</div>
    </div>
    
    <div style="text-align: center;">
      <div style="width: 80px; height: 60px; background: #EBF8FF; border: 2px solid #3182CE; border-radius: 9999px; margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #3182CE;">Full</div>
      <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">∞</div>
      <div style="font-size: 12px; color: #737373;">Pills, avatars</div>
    </div>
    
  </div>
</div>

### Radius Scale

```css
:root {
  /* Border radius scale for different component types */
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px - Small elements, badges */
  --radius-md: 0.375rem;  /* 6px - Buttons, inputs */
  --radius-lg: 0.5rem;    /* 8px - Cards, modals */
  --radius-xl: 0.75rem;   /* 12px - Large cards */
  --radius-2xl: 1rem;     /* 16px - Hero sections */
  --radius-full: 9999px;  /* Pills, avatars */
}
```

### Component Radius

```css
/* Standard component radius assignments */
.btn { border-radius: var(--radius-md); }
.card { border-radius: var(--radius-lg); }
.modal { border-radius: var(--radius-xl); }
.badge { border-radius: var(--radius-full); }
.avatar { border-radius: var(--radius-full); }
.input { border-radius: var(--radius-md); }
.alert { border-radius: var(--radius-md); }
.tooltip { border-radius: var(--radius-sm); }
```

---

## Icons & Illustrations

### Icon Examples

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
  
  <div style="margin-bottom: 24px;">
    <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #171717;">🎯 Task Management Icons</h4>
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #EBF8FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">📋</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Tasks</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #F0FDF4; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">✅</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Complete</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #FFFBEB; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">⏰</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Due Date</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #FEF2F2; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">⚠️</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Overdue</div>
      </div>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #171717;">📂 Category Icons</h4>
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #DBEAFE; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">💼</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Work</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #D1FAE5; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🏠</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Personal</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #EDE9FE; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🛒</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Shopping</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #CCFBF1; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🏥</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Health</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #E0E7FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">💰</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Finance</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #FED7AA; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">📚</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Learning</div>
      </div>
    </div>
  </div>
  
  <div style="margin-bottom: 0;">
    <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #171717;">🔥 Priority Indicators</h4>
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #FEF2F2; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🔴</span>
        </div>
        <div style="font-size: 12px; color: #737373;">High</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #FFFBEB; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🟡</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Medium</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #F0FDF4; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🟢</span>
        </div>
        <div style="font-size: 12px; color: #737373;">Low</div>
      </div>
    </div>
  </div>
  
</div>

### Icon System

```css
:root {
  /* Icon sizes */
  --icon-xs: 0.75rem;   /* 12px */
  --icon-sm: 1rem;      /* 16px */
  --icon-md: 1.25rem;   /* 20px */
  --icon-lg: 1.5rem;    /* 24px */
  --icon-xl: 2rem;      /* 32px */
  --icon-2xl: 3rem;     /* 48px */
}
```

### Task Priority Icons
- **High Priority**: 🔴 Red circle or ⬆️ arrow up
- **Medium Priority**: 🟡 Yellow circle or ➡️ arrow right
- **Low Priority**: 🟢 Green circle or ⬇️ arrow down

### Category Icons
- **Work**: 💼 Briefcase
- **Personal**: 🏠 House
- **Shopping**: 🛒 Shopping cart
- **Health**: 🏥 Hospital or ⚕️ medical symbol
- **Finance**: 💰 Money bag or 💳 credit card
- **Learning**: 📚 Books or 🎓 graduation cap
- **Hobbies**: 🎨 Artist palette

### Status Icons
- **Complete**: ✅ Check mark
- **Incomplete**: ⭕ Empty circle
- **Overdue**: ⚠️ Warning triangle
- **In Progress**: 🔄 Arrows or ⏳ hourglass

---

## Motion & Animation

### Timing Functions

```css
:root {
  /* Easing curves for natural motion */
  --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Duration scales */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
}
```

### Animation Classes

```css
/* Hover and interaction animations */
.animate-fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

.animate-slide-up {
  animation: slideUp var(--duration-normal) var(--ease-out);
}

.animate-bounce {
  animation: bounce var(--duration-slow) var(--ease-bounce);
}

/* Transition utilities */
.transition-all {
  transition: all var(--duration-normal) var(--ease-in-out);
}

.transition-colors {
  transition: color var(--duration-fast) var(--ease-in-out),
              background-color var(--duration-fast) var(--ease-in-out),
              border-color var(--duration-fast) var(--ease-in-out);
}

.transition-transform {
  transition: transform var(--duration-normal) var(--ease-in-out);
}

/* Keyframe animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Task completion celebration */
@keyframes taskComplete {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.task-complete-animation {
  animation: taskComplete var(--duration-slow) var(--ease-bounce);
}
```

---

## Dark Mode Support

### Dark Mode Colors

```css
:root {
  /* Light mode (default) */
  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-gray-50);
  --bg-tertiary: var(--color-gray-100);
  
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-700);
  --text-tertiary: var(--color-gray-500);
  
  --border-primary: var(--color-gray-200);
  --border-secondary: var(--color-gray-300);
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--color-gray-900);
    --bg-secondary: var(--color-gray-800);
    --bg-tertiary: var(--color-gray-700);
    
    --text-primary: var(--color-gray-100);
    --text-secondary: var(--color-gray-300);
    --text-tertiary: var(--color-gray-400);
    
    --border-primary: var(--color-gray-700);
    --border-secondary: var(--color-gray-600);
  }
}

/* Manual dark mode class */
.dark {
  --bg-primary: var(--color-gray-900);
  --bg-secondary: var(--color-gray-800);
  --bg-tertiary: var(--color-gray-700);
  
  --text-primary: var(--color-gray-100);
  --text-secondary: var(--color-gray-300);
  --text-tertiary: var(--color-gray-400);
  
  --border-primary: var(--color-gray-700);
  --border-secondary: var(--color-gray-600);
}
```

### Dark Mode Shadows

```css
/* Dark mode shadow adjustments */
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  }
}
```

---

## Component States

### Interactive States

```css
/* Button states */
.btn {
  transition: var(--transition-colors);
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Input states */
.input {
  border: 2px solid var(--border-primary);
  transition: var(--transition-colors);
}

.input:focus {
  border-color: var(--color-primary-500);
  box-shadow: var(--shadow-primary-focus);
}

.input:invalid {
  border-color: var(--color-danger-500);
  box-shadow: var(--shadow-danger-focus);
}

/* Card states */
.card-interactive {
  transition: var(--transition-all);
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* Task states */
.task-item {
  transition: var(--transition-all);
}

.task-item.completed {
  opacity: 0.7;
}

.task-item.completed .task-title {
  text-decoration: line-through;
  color: var(--text-tertiary);
}

.task-item.overdue {
  border-left: 4px solid var(--color-danger-500);
  background-color: var(--color-danger-50);
}
```

---

## Responsive Breakpoints

```css
:root {
  /* Breakpoint values */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Media query mixins usage examples */
@media (min-width: 640px) {
  .sm\:text-lg { font-size: var(--text-lg); }
}

@media (min-width: 768px) {
  .md\:text-xl { font-size: var(--text-xl); }
}

@media (min-width: 1024px) {
  .lg\:text-2xl { font-size: var(--text-2xl); }
}
```

---

## Accessibility

### Focus Management

```css
/* Focus indicators */
.focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-primary-500);
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-primary-600);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-md);
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### Color Contrast

All color combinations meet **WCAG AA** standards:
- Normal text: minimum 4.5:1 contrast ratio
- Large text: minimum 3:1 contrast ratio
- Interactive elements: minimum 3:1 contrast ratio

### Screen Reader Support

```css
/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Screen reader only text that becomes visible on focus */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## Usage Guidelines

### Do's ✅
- Use semantic color tokens instead of hardcoded values
- Follow the spacing scale for consistent layouts
- Apply appropriate elevation levels for component hierarchy
- Use the type scale for consistent typography
- Test all interactive states (hover, focus, active, disabled)
- Ensure sufficient color contrast for accessibility
- Use animation to provide feedback and guide user attention

### Don'ts ❌
- Don't create custom colors outside the design system
- Don't use inconsistent spacing values
- Don't override component states without good reason
- Don't use animations that are too flashy or distracting
- Don't ignore focus states for keyboard navigation
- Don't use color alone to convey information

### Implementation Notes
- All CSS custom properties support both light and dark modes
- Components should be built mobile-first with progressive enhancement
- Use CSS Grid and Flexbox for layouts instead of floats or positioning
- Implement smooth transitions for better user experience
- Test with actual devices and screen readers when possible

---

*This design system provides the foundation for a cohesive, accessible, and delightful TaskMaster user experience across all platforms and devices.*