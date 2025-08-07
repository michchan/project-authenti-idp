# 🧩 AuthentiIDP UI Component Library v1.0

This document defines reusable UI components for the AuthentiIDP identity provider platform using structured HTML examples.

---

## 📁 Index

1. [Button](#button)
2. [Input Field](#input-field)
3. [Select Dropdown](#select-dropdown)
4. [Checkbox](#checkbox)
5. [Modal](#modal)
6. [Card](#card)
7. [Tooltip](#tooltip)
8. [Tabs](#tabs)
9. [Alert](#alert)
10. [Badge](#badge)
11. [Avatar](#avatar)
12. [Toggle Switch](#toggle-switch)

---

## 🔘 Button

### HTML Preview

<button style="background-color: #2563EB; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; cursor: pointer; margin: 4px;">Sign In to AuthentiIDP</button>
<button style="background-color: #6B7280; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; cursor: pointer; margin: 4px;">Cancel</button>
<button style="background-color: transparent; color: #2563EB; border: 2px solid #2563EB; padding: 10px 22px; border-radius: 8px; font-weight: 500; cursor: pointer; margin: 4px;">Learn More</button>
<button style="background-color: #DC2626; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; cursor: pointer; margin: 4px;">Revoke Access</button>

### Variants

- `btn-primary` - Main actions (sign in, submit)
- `btn-secondary` - Secondary actions (cancel, back)
- `btn-outline` - Tertiary actions (learn more, view details)
- `btn-danger` - Destructive actions (delete, remove)
- `btn-disabled` - Inactive state

### States

- Normal
- Hover (elevated shadow, slight transform)
- Focus (ring indicator)
- Active (pressed state)
- Disabled (reduced opacity, no interaction)
- Loading (spinner indicator)

---

## 📝 Input Field

### HTML Preview

<div style="margin-bottom: 20px;">
  <label for="email" style="display: block; margin-bottom: 8px; font-weight: 500; color: #374151;">Email Address</label>
  <input type="email" id="email" placeholder="john.doe@company.com" style="width: 100%; max-width: 400px; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 8px; font-size: 16px; transition: border-color 0.2s;" />
</div>

<div style="margin-bottom: 20px;">
  <label for="password" style="display: block; margin-bottom: 8px; font-weight: 500; color: #374151;">Password</label>
  <input type="password" id="password" placeholder="Enter secure password" style="width: 100%; max-width: 400px; padding: 12px 16px; border: 2px solid #F87171; border-radius: 8px; font-size: 16px; background-color: #FEF2F2;" />
  <span style="display: block; margin-top: 4px; font-size: 14px; color: #DC2626;">⚠️ Password must be at least 8 characters with one number and one symbol</span>
</div>

<div style="margin-bottom: 20px;">
  <label for="success-field" style="display: block; margin-bottom: 8px; font-weight: 500; color: #374151;">Verification Code</label>
  <input type="text" id="success-field" value="123456" style="width: 100%; max-width: 400px; padding: 12px 16px; border: 2px solid #10B981; border-radius: 8px; font-size: 16px; background-color: #F0FDF4;" />
  <span style="display: block; margin-top: 4px; font-size: 14px; color: #059669;">✓ Valid verification code</span>
</div>

### States

- Default (clean border)
- Focus (blue border, ring shadow)
- Error (red border, error message)
- Success (green border, checkmark)
- Disabled (gray background, no interaction)

---

## ⬇️ Select Dropdown

### HTML Preview

<div style="margin-bottom: 20px;">
  <label for="role" style="display: block; margin-bottom: 8px; font-weight: 500; color: #374151;">Identity Provider Role</label>
  <select id="role" style="width: 100%; max-width: 400px; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 8px; font-size: 16px; background-color: white; cursor: pointer;">
    <option value="">Choose user role...</option>
    <option value="super-admin">Super Administrator</option>
    <option value="admin">Organization Admin</option>
    <option value="manager">Identity Manager</option>
    <option value="user">Standard User</option>
    <option value="viewer">Read-Only Viewer</option>
  </select>
</div>

### States

- Default (dropdown arrow indicator)
- Focus (blue border, ring shadow)
- Open (expanded with options)
- Disabled (gray background)

---

## ☑️ Checkbox

### HTML Preview

<div style="margin-bottom: 16px;">
  <label style="display: flex; align-items: center; cursor: pointer; font-size: 16px; color: #374151;">
    <input type="checkbox" style="margin-right: 12px; width: 18px; height: 18px; accent-color: #2563EB;" />
    Remember me for 30 days
  </label>
</div>

<div style="margin-bottom: 16px;">
  <label style="display: flex; align-items: center; cursor: pointer; font-size: 16px; color: #374151;">
    <input type="checkbox" checked style="margin-right: 12px; width: 18px; height: 18px; accent-color: #2563EB;" />
    I agree to the AuthentiIDP <a href="#" style="color: #2563EB; text-decoration: underline;">Terms of Service</a>
  </label>
</div>

<div style="margin-bottom: 16px;">
  <label style="display: flex; align-items: center; cursor: pointer; font-size: 16px; color: #374151;">
    <input type="checkbox" style="margin-right: 12px; width: 18px; height: 18px; accent-color: #2563EB;" />
    Enable two-factor authentication (2FA)
  </label>
</div>

### States

- Unchecked (empty box)
- Checked (checkmark icon)
- Indeterminate (dash icon)
- Disabled (gray appearance)

---

## 🪟 Modal

### HTML Preview

<div style="border: 2px dashed #D1D5DB; background-color: #F9FAFB; padding: 16px; border-radius: 12px; margin: 16px 0;">
  <p style="margin: 0 0 8px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Modal Example (Static Preview)</p>
  <div style="background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 500px; overflow: hidden; margin: 0 auto;">
    <div style="padding: 24px 24px 0 24px; border-bottom: 1px solid #E5E7EB; display: flex; justify-content: space-between; align-items: center;">
      <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #111827;">Revoke User Access</h2>
      <button style="background: none; border: none; font-size: 24px; color: #6B7280; cursor: pointer; padding: 0;" aria-label="Close">×</button>
    </div>
    <div style="padding: 24px;">
      <p style="margin: 0 0 16px 0; color: #374151; line-height: 1.5;">Are you sure you want to revoke access for <strong>john.doe@company.com</strong>? This will immediately terminate their session and remove all permissions.</p>
      <div style="background-color: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 12px; margin: 16px 0;">
        <p style="margin: 0; font-size: 14px; color: #991B1B;">⚠️ <strong>Warning:</strong> This action cannot be undone. The user will need to be re-invited to regain access.</p>
      </div>
    </div>
    <div style="padding: 0 24px 24px 24px; display: flex; justify-content: flex-end; gap: 12px;">
      <button style="background-color: #F3F4F6; color: #374151; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 500; cursor: pointer;">Cancel</button>
      <button style="background-color: #DC2626; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 500; cursor: pointer;">Revoke Access</button>
    </div>
  </div>
</div>

### Behavior

- Open on trigger (fade in animation)
- Close on overlay click, escape key, or close button
- Focus trap within modal content
- Prevent body scroll when open
- Center on screen with responsive sizing

---

## 🃏 Card

### HTML Preview

<div style="background: white; border: 1px solid #E5E7EB; border-radius: 12px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); max-width: 400px; overflow: hidden; margin: 16px 0;">
  <div style="padding: 20px 24px 16px 24px; border-bottom: 1px solid #E5E7EB; display: flex; justify-content: space-between; align-items: center;">
    <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #111827;">Identity Provider User</h3>
    <span style="background-color: #D1FAE5; color: #065F46; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">Active</span>
  </div>
  <div style="padding: 20px 24px;">
    <div style="display: flex; align-items: center; gap: 16px;">
      <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 20px;">JD</div>
      <div style="flex: 1;">
        <p style="margin: 0 0 4px 0; font-weight: 600; font-size: 16px; color: #111827;">John Doe</p>
        <p style="margin: 0 0 4px 0; color: #6B7280; font-size: 14px;">john.doe@company.com</p>
        <p style="margin: 0; color: #2563EB; font-size: 14px; font-weight: 500;">🛡️ Organization Admin</p>
        <div style="margin-top: 8px; display: flex; gap: 8px; font-size: 12px;">
          <span style="background-color: #EFF6FF; color: #1D4ED8; padding: 2px 8px; border-radius: 12px;">SSO Enabled</span>
          <span style="background-color: #F0FDF4; color: #059669; padding: 2px 8px; border-radius: 12px;">2FA Active</span>
        </div>
      </div>
    </div>
  </div>
  <div style="padding: 16px 24px 20px 24px; background-color: #F9FAFB; display: flex; gap: 12px;">
    <button style="background-color: #2563EB; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; font-size: 14px;">Manage Access</button>
    <button style="background-color: transparent; color: #374151; border: 1px solid #D1D5DB; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; font-size: 14px;">View Activity</button>
  </div>
</div>

### Variants

- Default (basic card with content)
- With header (title and actions area)
- With image (hero image at top)
- With footer actions (button group at bottom)

---

## 💬 Tooltip

### HTML Preview

<div style="margin: 20px 0;">
  <button style="background-color: #2563EB; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; position: relative;" title="Click to enable single sign-on for this user">
    Enable SSO 🔗
  </button>
</div>

<div style="margin: 20px 0;">
  <span style="color: #6B7280; font-size: 14px; border-bottom: 1px dashed #9CA3AF; cursor: help;" title="Passwords must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters. Common passwords and dictionary words are not allowed.">
    ❓ Password Requirements
  </span>
</div>

<div style="margin: 20px 0;">
  <button style="background-color: #DC2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;" title="This will immediately revoke all access tokens and terminate active sessions">
    🚫 Suspend User
  </button>
</div>

### Behavior

- Shows on hover/focus after 500ms delay
- Hides on mouse leave/blur immediately
- Position: top | right | bottom | left (auto-adjusts for viewport)
- Arrow pointing to trigger element

---

## 🧷 Tabs

### HTML Preview

<div style="max-width: 600px; margin: 20px 0;">
  <div style="display: flex; border-bottom: 2px solid #E5E7EB; margin-bottom: 20px;" role="tablist">
    <button style="background: none; border: none; padding: 12px 20px; font-weight: 600; color: #2563EB; border-bottom: 2px solid #2563EB; margin-bottom: -2px; cursor: pointer;" role="tab" aria-selected="true">Account Settings</button>
    <button style="background: none; border: none; padding: 12px 20px; font-weight: 500; color: #6B7280; cursor: pointer;" role="tab" aria-selected="false">Security & Authentication</button>
    <button style="background: none; border: none; padding: 12px 20px; font-weight: 500; color: #6B7280; cursor: pointer;" role="tab" aria-selected="false">Access Permissions</button>
  </div>
  <div>
    <div style="display: block;" role="tabpanel">
      <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #111827;">📄 Account Settings</h3>
      <p style="margin: 0 0 16px 0; color: #6B7280; line-height: 1.5;">Update your personal information, display name, and account preferences in AuthentiIDP.</p>
      <div style="background-color: #F3F4F6; padding: 16px; border-radius: 8px; margin-top: 12px;">
        <p style="margin: 0; font-size: 14px; color: #374151;">⚙️ Profile completion: <strong>85%</strong> - Add phone number to complete</p>
      </div>
    </div>
  </div>
</div>

### Behavior

- Active tab highlighted with underline/background
- Tab-to-content mapping with ARIA attributes
- Keyboard navigation (arrow keys, tab, enter)
- Smooth content transitions

---

## 🚨 Alert

### HTML Preview

<div style="display: flex; align-items: flex-start; padding: 16px; margin: 8px 0; background-color: #F0F9F4; border: 1px solid #A7F3D0; border-radius: 8px; color: #065F46;" role="alert">
  <span style="font-size: 20px; margin-right: 12px;">✅</span>
  <div style="flex: 1;">
    <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #065F46;">Account Verified Successfully</h4>
    <p style="margin: 0; font-size: 14px;">Your email address has been confirmed and your AuthentiIDP account is now active.</p>
  </div>
  <button style="background: none; border: none; font-size: 18px; color: #065F46; cursor: pointer; padding: 0; margin-left: 8px;" aria-label="Dismiss">×</button>
</div>

<div style="display: flex; align-items: flex-start; padding: 16px; margin: 8px 0; background-color: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; color: #991B1B;" role="alert">
  <span style="font-size: 20px; margin-right: 12px;">❌</span>
  <div style="flex: 1;">
    <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #991B1B;">Authentication Failed</h4>
    <p style="margin: 0; font-size: 14px;">Invalid username or password. Please check your credentials and try again.</p>
  </div>
</div>

<div style="display: flex; align-items: flex-start; padding: 16px; margin: 8px 0; background-color: #FFFBEB; border: 1px solid #FDE68A; border-radius: 8px; color: #92400E;" role="alert">
  <span style="font-size: 20px; margin-right: 12px;">⚠️</span>
  <div style="flex: 1;">
    <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #92400E;">Two-Factor Authentication Required</h4>
    <p style="margin: 0; font-size: 14px;">Please complete 2FA verification to access your account dashboard.</p>
  </div>
</div>

### Variants

- **Success** - Green background for successful actions (account verification, settings saved)
- **Error** - Red background for critical errors (authentication failures, access denied)
- **Warning** - Yellow background for important notices (2FA required, session expiring)
- **Info** - Blue background for informational messages (maintenance notices, feature updates)

---

## 🏷️ Badge

### HTML Preview

<div style="display: flex; gap: 8px; flex-wrap: wrap; margin: 16px 0;">
  <span style="background-color: #EFF6FF; color: #1D4ED8; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">New Feature</span>
  <span style="background-color: #D1FAE5; color: #065F46; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">Active Session</span>
  <span style="background-color: #FEF3C7; color: #92400E; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">Pending Verification</span>
  <span style="background-color: #FEE2E2; color: #991B1B; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">Access Expired</span>
  <span style="background-color: #F3F4F6; color: #374151; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">Draft Policy</span>
</div>

### Variants

- `badge-primary` - Blue for primary status
- `badge-success` - Green for positive status
- `badge-warning` - Yellow for cautionary status
- `badge-error` - Red for negative status
- `badge-neutral` - Gray for neutral status

---

## 👤 Avatar

### HTML Preview

<div style="display: flex; align-items: center; gap: 16px; margin: 20px 0;">
  <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500; font-size: 12px;">SM</div>
  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500; font-size: 14px;">JS</div>
  <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 18px;">BJ</div>
  <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 20px; position: relative;">
    JD
    <div style="position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; background-color: #10B981; border: 2px solid white; border-radius: 50%;"></div>
  </div>
</div>

<div style="margin: 16px 0; font-size: 14px; color: #6B7280;">
  ← Small (32px) | Medium (40px) | Large (56px) | Extra Large (64px) with status
</div>

### Sizes

- `avatar-sm` - 32px × 32px
- `avatar-md` - 40px × 40px (default)
- `avatar-lg` - 56px × 56px
- `avatar-xl` - 80px × 80px

### Variants

- Image avatar (with fallback to initials)
- Placeholder avatar (initials with background)
- Status indicator (online/offline dot)

---

## 🔄 Toggle Switch

### HTML Preview

<div style="margin: 20px 0;">
  <label style="display: flex; align-items: center; cursor: pointer; gap: 12px;">
    <div style="position: relative; width: 48px; height: 24px; background-color: #D1D5DB; border-radius: 24px; transition: all 0.3s;">
      <div style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background-color: white; border-radius: 50%; transition: all 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
      <input type="checkbox" style="opacity: 0; position: absolute; pointer-events: none;" />
    </div>
    <span style="font-size: 16px; color: #374151;">Enable two-factor authentication (2FA)</span>
  </label>
</div>

<div style="margin: 20px 0;">
  <label style="display: flex; align-items: center; cursor: pointer; gap: 12px;">
    <div style="position: relative; width: 48px; height: 24px; background-color: #2563EB; border-radius: 24px; transition: all 0.3s;">
      <div style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background-color: white; border-radius: 50%; transition: all 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
      <input type="checkbox" checked style="opacity: 0; position: absolute; pointer-events: none;" />
    </div>
    <span style="font-size: 16px; color: #374151;">Send security alert notifications 🔔</span>
  </label>
</div>

<div style="margin: 20px 0;">
  <label style="display: flex; align-items: center; cursor: pointer; gap: 12px; opacity: 0.6;">
    <div style="position: relative; width: 48px; height: 24px; background-color: #E5E7EB; border-radius: 24px; transition: all 0.3s;">
      <div style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background-color: #F3F4F6; border-radius: 50%; transition: all 0.3s;"></div>
      <input type="checkbox" disabled style="opacity: 0; position: absolute; pointer-events: none;" />
    </div>
    <span style="font-size: 16px; color: #9CA3AF;">Auto-provision new users (Enterprise only)</span>
  </label>
</div>

### States

- Off (slider to left, gray background)
- On (slider to right, blue background)
- Disabled (gray appearance, no interaction)
- Focus (ring indicator around slider)

---

## 📎 Notes

### Implementation Guidelines

- **Accessibility**: All components meet WCAG AA standards with proper ARIA labels and keyboard navigation
- **Design System**: Components use the AuthentiIDP Design System v1.0 color tokens and spacing
- **Authentication Context**: Examples reflect real identity provider scenarios (SSO, 2FA, user management)
- **Responsive Design**: Components adapt to mobile and desktop viewports
- **Security Focus**: UI patterns emphasize security features and user verification flows

### AuthentiIDP Specific Features

- 🔐 **Single Sign-On (SSO)** integration indicators
- 🛡️ **Two-Factor Authentication (2FA)** status and controls  
- 📋 **User role management** with permission-based styling
- ⚠️ **Security alerts** and verification prompts
- 📈 **Session management** and activity tracking