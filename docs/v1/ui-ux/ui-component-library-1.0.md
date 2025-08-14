# 🧩 UI Component Library v1.0

Document reusable UI components with specifications, usage guidelines, and live examples for AuthentiIDP.

---

## 📁 Index

1. [Button](#button)
2. [Input Field](#input-field)
3. [Card](#card)
4. [Alert](#alert)
5. [Navigation](#navigation)
6. [Modal](#modal)
7. [Form](#form)
8. [Badge](#badge)

---

## 🔘 Button

### HTML Preview

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <button style="background: #344550; color: white; border: none; border-radius: 0.4rem; padding: 12px 24px; font-size: 16px; font-weight: 500; cursor: pointer; min-height: 44px;">Primary Button</button>
  <button style="background: transparent; color: #344550; border: 2px solid #344550; border-radius: 0.4rem; padding: 10px 22px; font-size: 16px; font-weight: 500; cursor: pointer; min-height: 44px;">Secondary Button</button>
  <button style="background: #ef4444; color: white; border: none; border-radius: 0.4rem; padding: 12px 24px; font-size: 16px; font-weight: 500; cursor: pointer; min-height: 44px;">Danger Button</button>
  <button style="background: #e5e7eb; color: #9ca3af; border: none; border-radius: 0.4rem; padding: 12px 24px; font-size: 16px; font-weight: 500; cursor: not-allowed; min-height: 44px;">Disabled Button</button>
</div>

### Variants

- **Primary** - Main call-to-action buttons (Sign In, Save, Create Account)
- **Secondary** - Secondary actions (Cancel, Back, Edit Profile)
- **Danger** - Destructive actions (Delete Account, Remove Application)
- **Ghost** - Minimal emphasis actions (Skip, Learn More)

### States

- **Default** - Standard button appearance
- **Hover** - Slight background darkening and 1px upward transform
- **Focus** - 2px outline in secondary color (#deedf7) with 2px offset
- **Active** - Pressed appearance with darker background
- **Disabled** - Reduced opacity, no cursor interaction
- **Loading** - Spinner icon with "Loading..." text

### Behavior
Buttons should have smooth transitions (0.2s ease) between states. Loading state replaces button content with spinner. All buttons meet 44px minimum touch target.

### Accessibility
- **ARIA**: `role="button"` for non-button elements, `aria-disabled="true"` for disabled state
- **Keyboard**: Enter and Space key activation support
- **Screen Reader**: Clear, descriptive button text
- **Touch Targets**: Minimum 44px height and width

---

## 📝 Input Field

### HTML Preview

<div style="display: flex; flex-direction: column; gap: 16px; margin: 20px 0; max-width: 400px;">
  <div>
    <label style="display: block; font-size: 14px; font-weight: 500; color: #111827; margin-bottom: 6px;">Email Address</label>
    <input type="email" placeholder="Enter your email" style="width: 100%; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; color: #111827; min-height: 44px; box-sizing: border-box;">
  </div>
  <div>
    <label style="display: block; font-size: 14px; font-weight: 500; color: #111827; margin-bottom: 6px;">Password (Focus State)</label>
    <input type="password" placeholder="Enter your password" style="width: 100%; border: 2px solid #344550; border-radius: 0.4rem; padding: 11px 15px; font-size: 16px; color: #111827; min-height: 44px; box-sizing: border-box; outline: none;">
  </div>
  <div>
    <label style="display: block; font-size: 14px; font-weight: 500; color: #111827; margin-bottom: 6px;">Username (Error State)</label>
    <input type="text" placeholder="Enter username" style="width: 100%; border: 1px solid #ef4444; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; color: #111827; min-height: 44px; box-sizing: border-box;">
    <div style="color: #ef4444; font-size: 12px; margin-top: 4px;">This username is already taken</div>
  </div>
</div>

### Variants

- **Text** - Standard text input for names, usernames, URLs
- **Email** - Email validation and appropriate keyboard
- **Password** - Hidden text with toggle visibility option
- **Search** - Search functionality with clear button and icon
- **Textarea** - Multi-line text input for descriptions, comments

### States

- **Default** - Light gray border, placeholder text visible
- **Focus** - Primary color border (2px), placeholder disappears
- **Error** - Red border with error message below
- **Success** - Green border indicating valid input
- **Disabled** - Gray background, no interaction possible

### Accessibility
- **Labels**: Always include associated label element
- **Validation**: Error messages announced to screen readers
- **Keyboard**: Full tab navigation support, Enter submission

---

## 🎴 Card

### HTML Preview

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin: 20px 0;">
  <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 24px; transition: all 0.2s ease;">
    <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #111827;">Application Card</h3>
    <p style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; line-height: 1.5;">Task Management App connected via OAuth 2.0</p>
    <div style="display: flex; gap: 8px;">
      <span style="background: #deedf7; color: #344550; padding: 4px 8px; border-radius: 0.25rem; font-size: 12px; font-weight: 500;">Active</span>
      <span style="background: #f3f4f6; color: #6b7280; padding: 4px 8px; border-radius: 0.25rem; font-size: 12px;">OAuth 2.0</span>
    </div>
  </div>
  
  <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 24px; transition: all 0.2s ease;">
    <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #111827;">Security Alert</h3>
    <p style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; line-height: 1.5;">New login attempt from unrecognized device</p>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span style="background: #fef3c7; color: #d97706; padding: 4px 8px; border-radius: 0.25rem; font-size: 12px; font-weight: 500;">Pending Review</span>
      <button style="background: transparent; color: #344550; border: 1px solid #344550; border-radius: 0.4rem; padding: 6px 12px; font-size: 12px; cursor: pointer;">Review</button>
    </div>
  </div>
</div>

### States

- **Default** - Clean white background with subtle border
- **Hover** - Slight border darkening and subtle shadow
- **Selected** - Primary color border and background tint
- **Loading** - Skeleton placeholder animation

---

## 🚨 Alert

### HTML Preview

<div style="display: flex; flex-direction: column; gap: 16px; margin: 20px 0;">
  <div style="background: #f0f9ff; border: 1px solid #3b82f6; border-radius: 0.4rem; padding: 16px; display: flex; align-items: center; gap: 12px;">
    <svg width="20" height="20" fill="none" stroke="#3b82f6" stroke-width="1.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
    <div>
      <div style="font-weight: 500; color: #1e40af; margin-bottom: 4px;">Information</div>
      <div style="font-size: 14px; color: #1e40af;">Your profile has been updated successfully.</div>
    </div>
  </div>

  <div style="background: #f0fdf4; border: 1px solid #10b981; border-radius: 0.4rem; padding: 16px; display: flex; align-items: center; gap: 12px;">
    <svg width="20" height="20" fill="none" stroke="#10b981" stroke-width="1.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div>
      <div style="font-weight: 500; color: #065f46; margin-bottom: 4px;">Success</div>
      <div style="font-size: 14px; color: #065f46;">Application registered successfully.</div>
    </div>
  </div>

  <div style="background: #fefce8; border: 1px solid #f59e0b; border-radius: 0.4rem; padding: 16px; display: flex; align-items: center; gap: 12px;">
    <svg width="20" height="20" fill="none" stroke="#f59e0b" stroke-width="1.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
    <div>
      <div style="font-weight: 500; color: #92400e; margin-bottom: 4px;">Warning</div>
      <div style="font-size: 14px; color: #92400e;">API rate limit approaching threshold.</div>
    </div>
  </div>

  <div style="background: #fef2f2; border: 1px solid #ef4444; border-radius: 0.4rem; padding: 16px; display: flex; align-items: center; gap: 12px;">
    <svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="1.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
    <div>
      <div style="font-weight: 500; color: #dc2626; margin-bottom: 4px;">Error</div>
      <div style="font-size: 14px; color: #dc2626;">Failed to authenticate. Please check your credentials.</div>
    </div>
  </div>
</div>

### States

- **Info** - Blue theme for informational messages
- **Success** - Green theme for successful operations
- **Warning** - Yellow theme for cautionary messages  
- **Error** - Red theme for error states and failures

---

## 🧭 Navigation

### HTML Preview

<nav style="background: #ffffff; border-bottom: 1px solid #e5e7eb; padding: 16px 24px;">
  <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
    <div style="display: flex; align-items: center; gap: 32px;">
      <div style="font-size: 20px; font-weight: 700; color: #344550;">AuthentiIDP</div>
      <div style="display: flex; gap: 24px;">
        <a href="#" style="color: #344550; text-decoration: none; font-weight: 500; padding: 8px 0; border-bottom: 2px solid #344550;">Dashboard</a>
        <a href="#" style="color: #6b7280; text-decoration: none; font-weight: 500; padding: 8px 0; border-bottom: 2px solid transparent;">Applications</a>
        <a href="#" style="color: #6b7280; text-decoration: none; font-weight: 500; padding: 8px 0; border-bottom: 2px solid transparent;">Users</a>
        <a href="#" style="color: #6b7280; text-decoration: none; font-weight: 500; padding: 8px 0; border-bottom: 2px solid transparent;">Analytics</a>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <button style="background: transparent; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 8px; cursor: pointer;">
        <svg width="20" height="20" fill="none" stroke="#6b7280" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button>
      <div style="width: 32px; height: 32px; background: #deedf7; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #344550; font-weight: 600; font-size: 14px;">JD</div>
    </div>
  </div>
</nav>

### Behavior

- **Active State** - Current page highlighted with primary color and bottom border
- **Hover State** - Navigation links show hover effect with color change
- **Mobile Collapse** - Navigation converts to hamburger menu on mobile screens
- **User Menu** - Avatar opens dropdown with profile options

### Accessibility
- **ARIA** - `role="navigation"` and proper landmark structure
- **Keyboard** - Full keyboard navigation with Tab and Arrow keys
- **Skip Links** - Skip to main content link for screen readers

---

## 🪟 Modal

### HTML Preview

<div style="background: rgba(0, 0, 0, 0.1); padding: 48px; border-radius: 0.4rem; margin: 20px 0;">
  <div style="background: white; border-radius: 0.5rem; max-width: 500px; margin: 0 auto; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);">
    <div style="padding: 24px 24px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #111827;">Delete Application</h2>
        <button style="background: transparent; border: none; padding: 4px; cursor: pointer; border-radius: 0.25rem;">
          <svg width="24" height="24" fill="none" stroke="#6b7280" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        Are you sure you want to delete "Task Manager Pro"? This action cannot be undone and will immediately revoke all API access.
      </div>
    </div>
    <div style="background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 24px; display: flex; justify-content: flex-end; gap: 12px;">
      <button style="background: transparent; color: #6b7280; border: 1px solid #d1d5db; border-radius: 0.4rem; padding: 10px 16px; font-size: 14px; cursor: pointer;">Cancel</button>
      <button style="background: #ef4444; color: white; border: none; border-radius: 0.4rem; padding: 10px 16px; font-size: 14px; cursor: pointer;">Delete Application</button>
    </div>
  </div>
</div>

### Behavior

- **Open Animation** - Fade in background overlay and scale in modal
- **Close Triggers** - Escape key, overlay click, close button, cancel button
- **Focus Management** - Trap focus within modal, return to trigger element on close
- **Body Scroll** - Prevent background page scrolling when modal is open

### Accessibility
- **Focus Trap** - Keep focus within modal boundaries
- **ARIA** - `role="dialog"`, `aria-labelledby`, `aria-describedby`
- **Keyboard** - Escape to close, Tab navigation within modal

---

## 📋 Form

### HTML Preview

<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 24px; max-width: 500px; margin: 20px 0;">
  <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #111827;">Create New Application</h3>
  
  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 14px; font-weight: 500; color: #111827; margin-bottom: 6px;">Application Name *</label>
    <input type="text" placeholder="Enter application name" style="width: 100%; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; color: #111827; min-height: 44px; box-sizing: border-box;">
  </div>

  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 14px; font-weight: 500; color: #111827; margin-bottom: 6px;">Description</label>
    <textarea placeholder="Describe your application" style="width: 100%; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; color: #111827; min-height: 80px; resize: vertical; box-sizing: border-box;"></textarea>
  </div>

  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 14px; font-weight: 500; color: #111827; margin-bottom: 6px;">Authentication Type</label>
    <select style="width: 100%; border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; color: #111827; min-height: 44px; background: white; box-sizing: border-box;">
      <option>OAuth 2.0</option>
      <option>API Key</option>
      <option>JWT Token</option>
    </select>
  </div>

  <div style="margin-bottom: 24px;">
    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
      <input type="checkbox" style="width: 18px; height: 18px;">
      <span style="font-size: 14px; color: #6b7280;">I agree to the terms and conditions</span>
    </label>
  </div>

  <div style="display: flex; gap: 12px;">
    <button style="background: transparent; color: #6b7280; border: 1px solid #d1d5db; border-radius: 0.4rem; padding: 12px 24px; font-size: 16px; cursor: pointer; min-height: 44px;">Cancel</button>
    <button style="background: #344550; color: white; border: none; border-radius: 0.4rem; padding: 12px 24px; font-size: 16px; cursor: pointer; min-height: 44px; flex: 1;">Create Application</button>
  </div>
</div>

### Accessibility
- **Labels** - All form fields have associated labels
- **Required Fields** - Clearly marked with asterisk and proper validation
- **Error States** - Clear error messaging for invalid inputs
- **Keyboard Navigation** - Tab order follows logical flow

---

## 🏷️ Badge

### HTML Preview

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap; align-items: center;">
  <span style="background: #deedf7; color: #344550; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 500;">Active</span>
  <span style="background: #fef3c7; color: #d97706; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 500;">Pending</span>
  <span style="background: #fee2e2; color: #dc2626; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 500;">Suspended</span>
  <span style="background: #f3f4f6; color: #6b7280; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 500;">Draft</span>
  <span style="background: #ecfdf5; color: #065f46; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 500; display: flex; align-items: center; gap: 4px;">
    <svg width="12" height="12" fill="currentColor" viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="2"/>
    </svg>
    Online
  </span>
</div>

### States

- **Active** - Blue background for active/enabled states
- **Pending** - Yellow background for pending approval/processing
- **Error/Suspended** - Red background for error or suspended states
- **Neutral/Draft** - Gray background for inactive or draft states
- **Success/Online** - Green background for successful or online states

---

## 📎 Implementation Guidelines

### Development Standards
- **HTML Structure** - Use semantic HTML5 elements (button, nav, main, section)
- **CSS Classes** - Follow BEM naming convention: `.component__element--modifier`
- **JavaScript** - Progressive enhancement, graceful degradation for non-JS users

### Quality Checklist
- [ ] Visual design matches design system colors and typography
- [ ] All component variants and states implemented
- [ ] WCAG 2.1 AA accessibility requirements met
- [ ] Components responsive across mobile and desktop
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Touch targets minimum 44px for mobile interaction
- [ ] Keyboard navigation fully functional
- [ ] Screen reader compatible with proper ARIA attributes

### Usage Notes
Components should be implemented using the AuthentiIDP design tokens defined in the UI Design System. All interactive elements must provide clear feedback for user actions. Maintain consistent spacing using the established 4px-based scale. When in doubt, prioritize accessibility and usability over visual complexity.