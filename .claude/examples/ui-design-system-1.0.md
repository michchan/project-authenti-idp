# 🎨 AuthentiIDP UI Design System v1.0

This design system defines the visual language and reusable design tokens for the AuthentiIDP identity provider platform.

---

## 📁 Index

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Iconography](#iconography)
5. [Elevation / Shadows](#elevation--shadows)
6. [Border Radius](#border-radius)
7. [Component Sizing](#component-sizing)
8. [Usage Examples](#usage-examples)

---

## 🎨 Color Palette

### Primary Colors
<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #2563EB; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">🔐 Primary</div>
    <div style="font-size: 12px; color: #64748B;">#2563EB</div>
    <div style="font-size: 11px; margin-top: 4px;">Sign-in buttons</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #059669; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">✅ Secondary</div>
    <div style="font-size: 12px; color: #64748B;">#059669</div>
    <div style="font-size: 11px; margin-top: 4px;">Success states</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #7C3AED; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">🎯 Accent</div>
    <div style="font-size: 12px; color: #64748B;">#7C3AED</div>
    <div style="font-size: 11px; margin-top: 4px;">Highlights</div>
  </div>
</div>

### Background Colors
<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #FFFFFF; border: 2px solid #E2E8F0; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">📄 Background</div>
    <div style="font-size: 12px; color: #64748B;">#FFFFFF</div>
    <div style="font-size: 11px; margin-top: 4px;">Page background</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">🃏 Surface</div>
    <div style="font-size: 12px; color: #64748B;">#F8FAFC</div>
    <div style="font-size: 11px; margin-top: 4px;">Cards, containers</div>
  </div>
</div>

### Text Colors
<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #0F172A; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">📝 Primary Text</div>
    <div style="font-size: 12px; color: #64748B;">#0F172A</div>
    <div style="font-size: 11px; margin-top: 4px;">Headings, names</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #64748B; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">📧 Muted Text</div>
    <div style="font-size: 12px; color: #64748B;">#64748B</div>
    <div style="font-size: 11px; margin-top: 4px;">Emails, timestamps</div>
  </div>
</div>

### Status Colors
<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #DC2626; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">❌ Error</div>
    <div style="font-size: 12px; color: #64748B;">#DC2626</div>
    <div style="font-size: 11px; margin-top: 4px;">Failed logins</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #059669; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">✅ Success</div>
    <div style="font-size: 12px; color: #64748B;">#059669</div>
    <div style="font-size: 11px; margin-top: 4px;">Account verified</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #D97706; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
    <div style="font-size: 14px; font-weight: 600;">⚠️ Warning</div>
    <div style="font-size: 12px; color: #64748B;">#D97706</div>
    <div style="font-size: 11px; margin-top: 4px;">2FA required</div>
  </div>
</div>

---

## 🔤 Typography

### Font Styles Preview

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E2E8F0; margin: 20px 0;">
  <h1 style="font-family: 'Inter', sans-serif; font-size: 36px; font-weight: 700; color: #0F172A; margin: 0 0 16px 0; line-height: 1.2;">🏢 Welcome to AuthentiIDP</h1>
  <p style="font-size: 14px; color: #64748B; margin: 0 0 24px 0;">Headline 1 • Inter Bold 36px</p>
  
  <h2 style="font-family: 'Inter', sans-serif; font-size: 28px; font-weight: 600; color: #0F172A; margin: 0 0 12px 0; line-height: 1.3;">👤 User Management</h2>
  <p style="font-size: 14px; color: #64748B; margin: 0 0 24px 0;">Headline 2 • Inter Semibold 28px</p>
  
  <h3 style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #0F172A; margin: 0 0 12px 0; line-height: 1.4;">🛡️ Security Settings</h3>
  <p style="font-size: 14px; color: #64748B; margin: 0 0 24px 0;">Headline 3 • Inter Semibold 20px</p>
  
  <p style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 400; color: #0F172A; margin: 0 0 8px 0; line-height: 1.5;">📄 This is body text used for form labels and descriptions. It's readable and professional.</p>
  <p style="font-size: 14px; color: #64748B; margin: 0 0 24px 0;">Body Text • Inter Regular 16px</p>
  
  <p style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: #64748B; margin: 0 0 8px 0; line-height: 1.4;">📧 john.doe@company.com</p>
  <p style="font-size: 14px; color: #64748B; margin: 0 0 24px 0;">Body Small • Inter Regular 14px</p>
  
  <p style="font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 400; color: #64748B; margin: 0 0 8px 0; line-height: 1.3;">⏰ Last login: 5 minutes ago</p>
  <p style="font-size: 14px; color: #64748B; margin: 0 0 24px 0;">Caption • Inter Regular 12px</p>
  
  <code style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 14px; font-weight: 400; color: #0F172A; background: #F1F5F9; padding: 4px 8px; border-radius: 4px; line-height: 1.4;">🔑 sk-1234567890abcdef</code>
  <p style="font-size: 14px; color: #64748B; margin: 8px 0 0 0;">Code • JetBrains Mono 14px</p>
</div>

---

## 📏 Spacing System

### Visual Spacing Scale

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E2E8F0; margin: 20px 0;">
  <p style="margin: 0 0 20px 0; font-weight: 600; color: #0F172A;">How spacing looks in practice:</p>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 4px; height: 20px; background: #2563EB; margin-right: 12px;"></div>
      <span style="font-size: 14px;">4px - Tight spacing between related elements</span>
    </div>
    <div style="font-size: 12px; color: #64748B; margin-left: 28px;">Used for: Icon and text, form field padding</div>
  </div>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 8px; height: 20px; background: #2563EB; margin-right: 12px;"></div>
      <span style="font-size: 14px;">8px - Small spacing</span>
    </div>
    <div style="font-size: 12px; color: #64748B; margin-left: 28px;">Used for: Button padding, small gaps</div>
  </div>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 16px; height: 20px; background: #2563EB; margin-right: 12px;"></div>
      <span style="font-size: 14px;">16px - Standard spacing</span>
    </div>
    <div style="font-size: 12px; color: #64748B; margin-left: 28px;">Used for: Form fields, card padding</div>
  </div>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 24px; height: 20px; background: #2563EB; margin-right: 12px;"></div>
      <span style="font-size: 14px;">24px - Medium spacing</span>
    </div>
    <div style="font-size: 12px; color: #64748B; margin-left: 28px;">Used for: Section gaps, modal padding</div>
  </div>
  
  <div style="margin-bottom: 16px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 32px; height: 20px; background: #2563EB; margin-right: 12px;"></div>
      <span style="font-size: 14px;">32px - Large spacing</span>
    </div>
    <div style="font-size: 12px; color: #64748B; margin-left: 28px;">Used for: Page sections, major gaps</div>
  </div>
  
  <div style="margin-bottom: 0;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="width: 64px; height: 20px; background: #2563EB; margin-right: 12px;"></div>
      <span style="font-size: 14px;">64px - Extra large spacing</span>
    </div>
    <div style="font-size: 12px; color: #64748B; margin-left: 28px;">Used for: Page layout, hero sections</div>
  </div>
</div>

---

## 🧩 Iconography

### Icon Examples

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E2E8F0; margin: 20px 0;">
  
  <div style="margin-bottom: 24px;">
    <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #0F172A;">🔐 Security & Authentication Icons</h4>
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #EFF6FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🔐</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Login</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #EFF6FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🛡️</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Security</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #EFF6FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🔑</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">API Keys</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #EFF6FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">📱</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">2FA</div>
      </div>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #0F172A;">👤 User Management Icons</h4>
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #F0FDF4; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">👤</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">User</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #F0FDF4; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">👥</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Groups</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #F0FDF4; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">🏢</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Organization</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #F0FDF4; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">⚙️</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Settings</div>
      </div>
    </div>
  </div>
  
  <div style="margin-bottom: 0;">
    <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #0F172A;">✅ Status Icons</h4>
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #F0FDF4; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">✅</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Success</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #FEF2F2; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">❌</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Error</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #FFFBEB; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">⚠️</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Warning</div>
      </div>
      <div style="text-align: center;">
        <div style="width: 48px; height: 48px; background: #EFF6FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
          <span style="font-size: 24px;">📈</span>
        </div>
        <div style="font-size: 12px; color: #64748B;">Analytics</div>
      </div>
    </div>
  </div>
  
</div>

### Icon Guidelines
- **Size**: 20px standard, 24px for emphasis
- **Style**: Clean, simple, universally recognizable
- **Usage**: Always pair with text labels for clarity

---

## 🪟 Elevation / Shadows

### Shadow Depth Examples

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <td style="text-align: center; padding: 20px; background: #F8FAFC;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; margin: 0 auto 12px; border: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 14px; color: #64748B;">No Shadow</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">Level 0 - Flat</div>
      <div style="font-size: 12px; color: #64748B;">Flat elements</div>
    </td>
    <td style="text-align: center; padding: 20px; background: #F8FAFC;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; margin: 0 auto 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 14px; color: #374151;">Light Shadow</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">Level 1 - Card</div>
      <div style="font-size: 12px; color: #64748B;">User cards</div>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 20px; background: #F8FAFC;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; margin: 0 auto 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.10); display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 14px; color: #374151;">Medium Shadow</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">Level 2 - Modal</div>
      <div style="font-size: 12px; color: #64748B;">Dialog boxes</div>
    </td>
    <td style="text-align: center; padding: 20px; background: #F8FAFC;">
      <div style="width: 120px; height: 80px; background: white; border-radius: 8px; margin: 0 auto 12px; box-shadow: 0 10px 15px rgba(0,0,0,0.10); display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 14px; color: #374151;">Strong Shadow</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">Level 3 - Dropdown</div>
      <div style="font-size: 12px; color: #64748B;">Menus, tooltips</div>
    </td>
  </tr>
</table>

<p style="text-align: center; font-size: 14px; color: #64748B; margin: 16px 0;">Shadows create visual hierarchy and help users understand which elements are interactive</p>

---

## 🟦 Border Radius

### Rounded Corner Examples

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: white; border-radius: 12px; border: 1px solid #E2E8F0;">
  <tr>
    <td style="text-align: center; padding: 20px;">
      <div style="width: 80px; height: 60px; background: #EFF6FF; border: 2px solid #2563EB; border-radius: 4px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 12px; color: #2563EB; font-weight: bold;">Small</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">4px Radius</div>
      <div style="font-size: 12px; color: #64748B;">Small buttons</div>
    </td>
    <td style="text-align: center; padding: 20px;">
      <div style="width: 80px; height: 60px; background: #EFF6FF; border: 2px solid #2563EB; border-radius: 6px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 12px; color: #2563EB; font-weight: bold;">Medium</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">6px Radius</div>
      <div style="font-size: 12px; color: #64748B;">Buttons, inputs</div>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 20px;">
      <div style="width: 80px; height: 60px; background: #EFF6FF; border: 2px solid #2563EB; border-radius: 8px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 12px; color: #2563EB; font-weight: bold;">Large</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">8px Radius</div>
      <div style="font-size: 12px; color: #64748B;">Cards, panels</div>
    </td>
    <td style="text-align: center; padding: 20px;">
      <div style="width: 80px; height: 40px; background: #EFF6FF; border: 2px solid #2563EB; border-radius: 9999px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 12px; color: #2563EB; font-weight: bold;">Full</span>
      </div>
      <div style="font-weight: bold; margin-bottom: 4px;">Full Round</div>
      <div style="font-size: 12px; color: #64748B;">Pills, badges</div>
    </td>
  </tr>
</table>

### Real Examples

<div style="padding: 20px; background: #F8FAFC; border-radius: 8px; margin: 16px 0;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Interactive Elements:</p>
  <div style="margin-bottom: 8px;">
    <button style="background: #2563EB; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer; margin-right: 8px;">Sign In</button>
  </div>
  <div style="margin-bottom: 8px;">
    <input type="text" placeholder="Search users..." style="padding: 8px 12px; border: 2px solid #E2E8F0; border-radius: 6px; font-size: 14px; width: 200px;" />
  </div>
  <div>
    <span style="background: #D1FAE5; color: #065F46; padding: 4px 12px; border-radius: 9999px; font-size: 12px;">Active Status</span>
  </div>
</div>

---

## 📐 Component Sizing

### Interactive Size Examples

<div style="padding: 24px; background: #F8FAFC; border-radius: 12px; border: 1px solid #E2E8F0; margin: 20px 0;">

#### Buttons
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Button Sizes (auto width):</p>
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <button style="background: #6B7280; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; height: 36px; cursor: pointer;">🔄 Refresh Session</button>
    <span style="font-size: 12px; color: #64748B;">36px height (small)</span>
  </div>
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
    <button style="background: #2563EB; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; height: 44px; cursor: pointer;">🔐 Sign In to AuthentiIDP</button>
    <span style="font-size: 12px; color: #64748B;">44px height (medium)</span>
  </div>
</div>

#### Input Fields
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Input Field (100% width, 44px height):</p>
  <input type="email" placeholder="📧 john.doe@company.com" style="width: 100%; max-width: 400px; height: 44px; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 6px; font-size: 16px;" />
</div>

#### User Card
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">User Card (400px width):</p>
  <div style="width: 400px; background: white; border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">JD</div>
      <div>
        <p style="margin: 0 0 4px 0; font-weight: 600;">👤 John Doe</p>
        <p style="margin: 0; color: #64748B; font-size: 14px;">Administrator</p>
      </div>
    </div>
  </div>
</div>

#### Alert Banner
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Alert Banner (100% width, 60px height):</p>
  <div style="width: 100%; height: 60px; background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; display: flex; align-items: center; padding: 0 16px;">
    <span style="font-size: 20px; margin-right: 12px;">🚨</span>
    <span style="color: #991B1B; font-weight: 500;">Security Alert: Unusual login attempt detected</span>
  </div>
</div>

#### Modal Preview
<div style="margin-bottom: 0;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Modal (480px width, auto height):</p>
  <div style="border: 2px dashed #D1D5DB; background: #F9FAFB; padding: 16px; border-radius: 8px;">
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #6B7280;">Modal Preview (Static)</p>
    <div style="width: 480px; max-width: 100%; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; margin: 0 auto;">
      <div style="padding: 20px; border-bottom: 1px solid #E5E7EB;">
        <h3 style="margin: 0; font-size: 18px; font-weight: 600;">⚠️ Revoke User Access</h3>
      </div>
      <div style="padding: 20px;">
        <p style="margin: 0; color: #374151;">Are you sure you want to revoke access for this user?</p>
      </div>
      <div style="padding: 16px 20px; background: #F9FAFB; display: flex; gap: 8px; justify-content: flex-end;">
        <button style="background: #F3F4F6; color: #374151; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Cancel</button>
        <button style="background: #DC2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Revoke</button>
      </div>
    </div>
  </div>
</div>

</div>

### Size Guidelines

| Component        | Dimensions        | Usage Notes                          |
|------------------|-------------------|--------------------------------------|
| Button (small)   | auto × 36px       | Secondary actions, icon buttons      |
| Button (medium)  | auto × 44px       | Primary actions, form submissions    |
| Input Fields     | 100% × 44px       | Touch-friendly, accessible height    |
| User Cards       | 400px × auto      | Profile displays, user listings      |
| Modals           | 480px × auto      | Dialogs, confirmations, forms        |
| Alert Banners    | 100% × 60px       | System notifications, warnings       |

---

## ✅ Usage Examples

### CSS Implementation

```css
.authenti-btn-primary {
  background-color: var(--color-primary);
  color: #fff;
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-elevation-1);
  font-family: var(--font-base);
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.authenti-btn-primary:hover {
  box-shadow: var(--shadow-elevation-2);
  transform: translateY(-1px);
  background-color: #1D4ED8;
}

.authenti-input {
  width: 100%;
  height: 44px;
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-base);
  font-size: 16px;
  background-color: var(--color-bg);
  transition: border-color 0.2s;
}

.authenti-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  outline: none;
}

.authenti-alert-success {
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-4);
  background-color: #F0F9F4;
  border: 1px solid #A7F3D0;
  border-radius: var(--radius-md);
  color: #065F46;
  gap: var(--spacing-3);
}

.authenti-badge {
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}
```

### Live Examples

<div style="background: #F8FAFC; padding: 24px; border-radius: 12px; margin: 16px 0;">
  <h4 style="margin: 0 0 16px 0; color: #111827;">AuthentiIDP Components Preview</h4>
  
  <div style="margin-bottom: 20px;">
    <button style="background-color: #2563EB; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; cursor: pointer; font-family: 'Inter', sans-serif; transition: all 0.2s ease;">
      Sign In to AuthentiIDP 🔐
    </button>
  </div>
  
  <div style="margin-bottom: 20px;">
    <input type="email" placeholder="user@company.com" style="width: 300px; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 8px; font-size: 16px; font-family: 'Inter', sans-serif; transition: border-color 0.2s;" />
  </div>
  
  <div style="display: flex; align-items: center; padding: 12px 16px; background-color: #F0F9F4; border: 1px solid #A7F3D0; border-radius: 8px; color: #065F46; margin-bottom: 16px; max-width: 400px;">
    <span style="margin-right: 8px;">✓</span>
    <span>2FA enabled successfully</span>
  </div>
  
  <div style="display: flex; gap: 8px; align-items: center;">
    <span style="background-color: #2563EB; color: white; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">SSO Active</span>
    <span style="background-color: #059669; color: white; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">Verified</span>
  </div>
</div>

---

## 📎 Notes

### Implementation Guidelines

- **CSS Custom Properties**: All design tokens are available as CSS variables for consistent implementation
- **Component Naming**: Use `authenti-` prefix for component classes to avoid conflicts  
- **Accessibility**: WCAG AA compliant color contrast ratios and focus management
- **Framework Integration**: Compatible with React, Vue, and vanilla JavaScript implementations
- **Dark Mode**: Color tokens include automatic dark mode variants using `prefers-color-scheme`

### AuthentiIDP Specific Considerations

- 🔒 **Security-First Design**: Visual hierarchy emphasizes security features and trust indicators
- 🎨 **Professional Identity**: Color palette conveys enterprise reliability and trustworthiness  
- 📱 **Multi-Platform**: Consistent experience across web, mobile, and native applications
- 🔄 **Scalability**: Token system supports white-label customization for enterprise clients
- ⚡ **Performance**: Optimized for fast loading in authentication flows where speed is critical

### Integration Examples

```javascript
// CSS-in-JS (React/Emotion)
const authentiButton = {
  backgroundColor: 'var(--color-primary)',
  color: 'white',
  padding: 'var(--spacing-3) var(--spacing-5)',
  borderRadius: 'var(--radius-md)',
  fontFamily: 'var(--font-base)',
};

// Tailwind CSS Configuration
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#059669',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
};
```