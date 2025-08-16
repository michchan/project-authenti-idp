# AuthentiIDP Design System v1.0

This document defines the visual design foundation for AuthentiIDP, a centralized identity provider service for personal applications. It establishes a minimalist, flat, and professional yet young design language that ensures consistency across all interfaces while supporting both light and dark modes.

---

## Index

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Professional Iconography](#professional-iconography)
6. [Border Guidelines](#border-guidelines)
7. [Component States](#component-states)
8. [Component Sizing](#component-sizing)
9. [Dark Mode Support](#dark-mode-support)
10. [Usage Examples](#usage-examples)

---

## Brand Identity

### Brand Personality
AuthentiIDP embodies **minimalism, efficiency, and trust**. The design should feel:
- **Clean and uncluttered** - Focus on essential functionality without distractions
- **Professional yet approachable** - Trustworthy for security while remaining young and smart
- **Fast-paced and smooth** - Optimized for younger generation aged 20-40
- **Consistent and reliable** - Users depend on it for seamless authentication across applications

### Visual Principles
- **Flat Design** - No shadows, gradients, or unnecessary visual effects
- **Minimalist Approach** - Show only what's needed, when it's needed
- **Mono Tone Foundation** - Limited color palette with strategic accent usage
- **Card-Based Layout** - Clean content organization with subtle borders
- **Responsive First** - Equal experience across desktop and mobile devices

---

## Color System

### Light Mode Colors

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">🤍 Background</div>
    <div style="font-size: 12px; color: #6b7280;">#ffffff</div>
    <div style="font-size: 11px; margin-top: 4px;">Main background</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">📄 Panels</div>
    <div style="font-size: 12px; color: #6b7280;">#ffffff</div>
    <div style="font-size: 11px; margin-top: 4px;">Cards, forms, containers</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #344550; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">🎯 Primary</div>
    <div style="font-size: 12px; color: #6b7280;">#344550</div>
    <div style="font-size: 11px; margin-top: 4px;">Main accent color</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #deedf7; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">💙 Secondary</div>
    <div style="font-size: 12px; color: #6b7280;">#deedf7</div>
    <div style="font-size: 11px; margin-top: 4px;">Secondary accent</div>
  </div>
</div>

<div style="background: white; padding: 20px; border-radius: 0.4rem; border: 1px solid #e5e7eb; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">🎯 Primary Color Scale</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px;">
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #f8fafc; border-radius: 0.4rem; border: 1px solid #e5e7eb; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">50</div><div style="font-size: 11px; color: #737373;">#f8fafc</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #f1f5f9; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">100</div><div style="font-size: 11px; color: #737373;">#f1f5f9</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #e2e8f0; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">200</div><div style="font-size: 11px; color: #737373;">#e2e8f0</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #cbd5e1; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">300</div><div style="font-size: 11px; color: #737373;">#cbd5e1</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #94a3b8; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">400</div><div style="font-size: 11px; color: #737373;">#94a3b8</div></div>
<div style="text-align: center; border: 3px solid #344550;"><div style="width: 100%; height: 60px; background-color: #344550; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 600; color: #344550;">500 ⭐</div><div style="font-size: 11px; color: #737373;">#344550</div><div style="font-size: 10px; color: #344550; margin-top: 2px;">Main Primary</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #2d3a43; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: white;">600</div><div style="font-size: 11px; color: #737373;">#2d3a43</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #253036; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: white;">700</div><div style="font-size: 11px; color: #737373;">#253036</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #1e2529; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: white;">800</div><div style="font-size: 11px; color: #737373;">#1e2529</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #161b1d; border-radius: 0.4rem; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: white;">900</div><div style="font-size: 11px; color: #737373;">#161b1d</div></div>
</div>
</div>

### Text Colors

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #111827; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">📝 Primary Text</div>
    <div style="font-size: 12px; color: #6b7280;">#111827</div>
    <div style="font-size: 11px; margin-top: 4px;">Headings, body text</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #6b7280; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">📄 Secondary Text</div>
    <div style="font-size: 12px; color: #6b7280;">#6b7280</div>
    <div style="font-size: 11px; margin-top: 4px;">Labels, captions</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #9ca3af; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">🔍 Muted Text</div>
    <div style="font-size: 12px; color: #6b7280;">#9ca3af</div>
    <div style="font-size: 11px; margin-top: 4px;">Placeholders, disabled</div>
  </div>
</div>

### Status Colors - Muted/Gray-toned

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #6b7280; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">Success</div>
    <div style="font-size: 12px; color: #6b7280;">#6b7280</div>
    <div style="font-size: 11px; margin-top: 4px;">Successful actions</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #9ca3af; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">Warning</div>
    <div style="font-size: 12px; color: #6b7280;">#9ca3af</div>
    <div style="font-size: 11px; margin-top: 4px;">Caution states</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #6b7280; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">Error</div>
    <div style="font-size: 12px; color: #6b7280;">#6b7280</div>
    <div style="font-size: 11px; margin-top: 4px;">Error states</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #6b7280; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">Info</div>
    <div style="font-size: 12px; color: #6b7280;">#6b7280</div>
    <div style="font-size: 11px; margin-top: 4px;">Information states</div>
  </div>
</div>

**Note:** Status colors have been muted to align with the grayscale aesthetic while maintaining functionality. They appear more subtle and integrated with the overall design theme.

### Border Colors

<div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #f3f4f6; border: 2px solid #e5e7eb; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">🔲 Default Border</div>
    <div style="font-size: 12px; color: #6b7280;">#e5e7eb</div>
    <div style="font-size: 11px; margin-top: 4px;">Cards, forms</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #f3f4f6; border: 2px solid #d1d5db; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600;">🔳 Strong Border</div>
    <div style="font-size: 12px; color: #6b7280;">#d1d5db</div>
    <div style="font-size: 11px; margin-top: 4px;">Focus states</div>
  </div>
</div>

---

## Typography

### Font System
AuthentiIDP uses a clean sans-serif font stack optimized for digital interfaces and cross-platform compatibility.

**Primary Font Stack**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Font Hierarchy

<div style="margin: 20px 0;">
  <div style="font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 12px; line-height: 1.2;">H1 - Page Title</div>
  <div style="font-size: 12px; color: #6b7280; margin-bottom: 20px;">32px, 700 weight, 1.2 line-height</div>
</div>

<div style="margin: 20px 0;">
  <div style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px; line-height: 1.3;">H2 - Section Header</div>
  <div style="font-size: 12px; color: #6b7280; margin-bottom: 20px;">24px, 600 weight, 1.3 line-height</div>
</div>

<div style="margin: 20px 0;">
  <div style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 8px; line-height: 1.4;">H3 - Subsection Header</div>
  <div style="font-size: 12px; color: #6b7280; margin-bottom: 20px;">20px, 600 weight, 1.4 line-height</div>
</div>

<div style="margin: 20px 0;">
  <div style="font-size: 16px; font-weight: 500; color: #111827; margin-bottom: 8px; line-height: 1.5;">H4 - Component Title</div>
  <div style="font-size: 12px; color: #6b7280; margin-bottom: 20px;">16px, 500 weight, 1.5 line-height</div>
</div>

<div style="margin: 20px 0;">
  <div style="font-size: 16px; font-weight: 400; color: #111827; line-height: 1.6; margin-bottom: 8px;">Body Text - This is the primary text style used for paragraphs, descriptions, and general content throughout the AuthentiIDP interface. It provides excellent readability while maintaining a professional appearance that appeals to our target demographic of 20-40 year olds who value efficiency and clarity in their digital experiences.</div>
  <div style="font-size: 12px; color: #6b7280; margin-bottom: 20px;">16px, 400 weight, 1.6 line-height</div>
</div>

<div style="margin: 20px 0;">
  <div style="font-size: 14px; font-weight: 400; color: #6b7280; line-height: 1.5; margin-bottom: 8px;">Small Text - Used for labels, captions, and secondary information</div>
  <div style="font-size: 12px; color: #6b7280; margin-bottom: 20px;">14px, 400 weight, 1.5 line-height</div>
</div>

<div style="margin: 20px 0;">
  <div style="font-size: 12px; font-weight: 400; color: #9ca3af; line-height: 1.4; margin-bottom: 8px;">Caption Text - For timestamps, metadata, and very small details</div>
  <div style="font-size: 12px; color: #6b7280; margin-bottom: 20px;">12px, 400 weight, 1.4 line-height</div>
</div>

### Font Usage Guidelines
- **H1**: Page titles, main headings (max 1 per page)
- **H2**: Major section headers, card titles
- **H3**: Subsection headers, form section titles
- **H4**: Component titles, modal headers
- **Body**: Primary content, descriptions, button text
- **Small**: Labels, helper text, navigation items
- **Caption**: Timestamps, metadata, legal text

---

## Spacing & Layout

### Spacing System
AuthentiIDP uses a consistent 4px-based spacing system that creates visual rhythm and hierarchy.

<div style="background: white; padding: 20px; border-radius: 0.4rem; border: 1px solid #e5e7eb; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">📏 Spacing Scale</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px;">
<div style="text-align: center;"><div style="width: 100%; height: 4px; background-color: #344550; border-radius: 2px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500;">4px - xs</div><div style="font-size: 11px; color: #6b7280;">Micro spacing</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 8px; background-color: #344550; border-radius: 2px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500;">8px - sm</div><div style="font-size: 11px; color: #6b7280;">Small gaps</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 16px; background-color: #344550; border-radius: 2px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500;">16px - md</div><div style="font-size: 11px; color: #6b7280;">Standard spacing</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 24px; background-color: #344550; border-radius: 2px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500;">24px - lg</div><div style="font-size: 11px; color: #6b7280;">Large gaps</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 32px; background-color: #344550; border-radius: 2px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500;">32px - xl</div><div style="font-size: 11px; color: #6b7280;">Section spacing</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 48px; background-color: #344550; border-radius: 2px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500;">48px - 2xl</div><div style="font-size: 11px; color: #6b7280;">Large sections</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 64px; background-color: #344550; border-radius: 2px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500;">64px - 3xl</div><div style="font-size: 11px; color: #6b7280;">Page sections</div></div>
</div>
</div>

### Layout Guidelines
- **Container Max Width**: 1200px for desktop layouts
- **Grid System**: 12-column responsive grid with 16px gutters
- **Card Spacing**: 16px internal padding, 24px between cards
- **Form Spacing**: 16px between form fields, 24px between form sections
- **Button Spacing**: 8px between adjacent buttons, 16px for primary spacing

---

## Professional Iconography

### Design Guidelines
AuthentiIDP follows strict professional iconography standards:

- **No emoji icons allowed** - Emojis make interfaces look unprofessional
- **Professional line icons only** - Thin, clean, consistent stroke width
- **Unified style** - All icons follow the same visual language
- **Accessibility compliant** - Clear meaning and proper contrast

### Professional Icon System

### Icon System
AuthentiIDP uses thin line icons that complement the minimalist design approach.

**Icon Library**: Heroicons Outline (24px standard)
**Style**: Thin stroke, minimal detail, consistent line weight
**Sizes**: 16px, 20px, 24px, 32px

### Navigation Icons
<div style="display: flex; gap: 24px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#344550" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Menu</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#344550" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Home</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#344550" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Profile</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#344550" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Settings</div>
  </div>
</div>

### Action Icons
<div style="display: flex; gap: 24px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#344550" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Add</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#344550" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Edit</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#ef4444" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Delete</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#344550" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Close</div>
  </div>
</div>

### Status Icons
<div style="display: flex; gap: 24px; margin: 20px 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#10b981" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Success</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#f59e0b" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Warning</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#ef4444" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Error</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 48px; height: 48px; border: 1px solid #e5e7eb; border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
      <svg width="24" height="24" fill="none" stroke="#3b82f6" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    </div>
    <div style="font-size: 12px; font-weight: 500;">Info</div>
  </div>
</div>

---

## Border Guidelines

### Thin Border Standard
All borders throughout the system use consistently thin widths for a sharp, professional appearance:

- **Default border width**: 0.5px for subtle definition
- **Focus states**: 1px for interactive emphasis  
- **Never thick borders**: Avoid 2px+ borders except for selected/active states
- **Consistent application**: All cards, forms, and containers follow this standard

### Border Radius

AuthentiIDP uses subtle, consistent border radius to create a professional yet modern appearance.

<div style="background: white; padding: 20px; border-radius: 0.4rem; border: 1px solid #e5e7eb; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">🟦 Border Radius Scale</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #deedf7; border-radius: 0px; margin-bottom: 8px; border: 1px solid #e5e7eb;"></div><div style="font-size: 12px; font-weight: 500;">0px - None</div><div style="font-size: 11px; color: #6b7280;">Sharp corners</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #deedf7; border-radius: 0.25rem; margin-bottom: 8px; border: 1px solid #e5e7eb;"></div><div style="font-size: 12px; font-weight: 500;">4px - Small</div><div style="font-size: 11px; color: #6b7280;">Form inputs</div></div>
<div style="text-align: center; border: 3px solid #344550;"><div style="width: 100%; height: 60px; background-color: #deedf7; border-radius: 0.4rem; margin-bottom: 8px; border: 1px solid #e5e7eb;"></div><div style="font-size: 12px; font-weight: 600; color: #344550;">6px - Default ⭐</div><div style="font-size: 11px; color: #6b7280;">Cards, buttons</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #deedf7; border-radius: 0.5rem; margin-bottom: 8px; border: 1px solid #e5e7eb;"></div><div style="font-size: 12px; font-weight: 500;">8px - Medium</div><div style="font-size: 11px; color: #6b7280;">Modals, containers</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #deedf7; border-radius: 0.75rem; margin-bottom: 8px; border: 1px solid #e5e7eb;"></div><div style="font-size: 12px; font-weight: 500;">12px - Large</div><div style="font-size: 11px; color: #6b7280;">Page sections</div></div>
<div style="text-align: center;"><div style="width: 60px; height: 60px; background-color: #deedf7; border-radius: 50%; margin: 0 auto 8px; border: 1px solid #e5e7eb;"></div><div style="font-size: 12px; font-weight: 500;">50% - Full</div><div style="font-size: 11px; color: #6b7280;">Avatars, pills</div></div>
</div>
</div>

**Default Border Radius**: 0.4rem (6px) - Professional look without being too round

---

## Form Element Styling

### Theme-Aware Form Controls

All form elements are styled to match the theme colors and provide a consistent experience:

#### Radio Buttons and Checkboxes
Custom-styled radio buttons and checkboxes that use theme colors instead of default browser colors:

```css
input[type="radio"],
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border);
  background-color: var(--color-panel);
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type="radio"] {
  border-radius: 50%;
}

input[type="checkbox"] {
  border-radius: var(--radius-sm);
}

input[type="radio"]:checked,
input[type="checkbox"]:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

input[type="radio"]:checked::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type="checkbox"]:checked::after {
  content: '✓';
  color: white;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1;
}
```

### Form Guidelines
- All form elements maintain a minimum 44px touch target
- Focus states use consistent outline styling
- Form elements automatically adapt to light/dark themes
- Custom radio buttons and checkboxes match the design system

---

## Component States

### Interactive States
All interactive components follow consistent state patterns:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 0.4rem; text-align: center;">
    <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #344550;">Default State</div>
    <div style="background: #344550; color: white; padding: 12px 24px; border-radius: 0.4rem; cursor: pointer; transition: all 0.2s ease;">Sign In</div>
  </div>
  <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 0.4rem; text-align: center;">
    <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #344550;">Hover State</div>
    <div style="background: #2d3a43; color: white; padding: 12px 24px; border-radius: 0.4rem; cursor: pointer; transform: translateY(-1px);">Sign In</div>
  </div>
  <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 0.4rem; text-align: center;">
    <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #344550;">Focus State</div>
    <div style="background: #344550; color: white; padding: 12px 24px; border-radius: 0.4rem; outline: 2px solid #deedf7; outline-offset: 2px;">Sign In</div>
  </div>
  <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 0.4rem; text-align: center;">
    <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #6b7280;">Disabled State</div>
    <div style="background: #e5e7eb; color: #9ca3af; padding: 12px 24px; border-radius: 0.4rem; cursor: not-allowed;">Sign In</div>
  </div>
</div>

### Loading States
<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 0.4rem; text-align: center; margin: 16px 0;">
  <div style="font-size: 14px; font-weight: 500; margin-bottom: 12px; color: #344550;">Loading State</div>
  <div style="background: #344550; color: white; padding: 12px 24px; border-radius: 0.4rem; display: inline-flex; align-items: center; gap: 8px;">
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="animation: spin 1s linear infinite;">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    Signing In...
  </div>
</div>

<style>
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>

---

## Component Sizing

### Touch Targets & Interactive Elements
All interactive elements meet accessibility standards with minimum 44px touch targets.

<div style="background: white; padding: 20px; border-radius: 0.4rem; border: 1px solid #e5e7eb; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">📐 Button Sizes</h4>
<div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
<button style="background: #344550; color: white; border: none; border-radius: 0.4rem; padding: 8px 16px; font-size: 14px; cursor: pointer;">Small Button (32px height)</button>
<button style="background: #344550; color: white; border: none; border-radius: 0.4rem; padding: 12px 24px; font-size: 16px; cursor: pointer;">Medium Button (44px height)</button>
<button style="background: #344550; color: white; border: none; border-radius: 0.4rem; padding: 16px 32px; font-size: 18px; cursor: pointer;">Large Button (56px height)</button>
</div>
</div>

<div style="background: white; padding: 20px; border-radius: 0.4rem; border: 1px solid #e5e7eb; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">📝 Form Elements</h4>
<div style="display: flex; flex-direction: column; gap: 12px;">
<input type="text" placeholder="Standard Input (44px)" style="border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; width: 300px;">
<select style="border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; width: 332px; background: white;">
  <option>Standard Select (44px)</option>
</select>
<textarea placeholder="Standard Textarea" style="border: 1px solid #e5e7eb; border-radius: 0.4rem; padding: 12px 16px; font-size: 16px; width: 300px; height: 88px; resize: vertical;"></textarea>
</div>
</div>

---

## Dark Mode Support

AuthentiIDP supports automatic dark mode adaptation to enhance user experience across different lighting conditions and user preferences.

### Dark Mode Color Palette

<div style="background: #1f2937; padding: 20px; border-radius: 0.4rem; border: 1px solid #374151; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #f9fafb;">🌙 Dark Mode Colors</h4>
<div style="display: flex; gap: 16px; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #1f2937; border: 2px solid #374151; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600; color: #f9fafb;">Background</div>
    <div style="font-size: 12px; color: #9ca3af;">#1f2937</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #374151; border: 2px solid #4b5563; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600; color: #f9fafb;">Panels</div>
    <div style="font-size: 12px; color: #9ca3af;">#374151</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #60a5fa; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600; color: #f9fafb;">Primary</div>
    <div style="font-size: 12px; color: #9ca3af;">#60a5fa</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background-color: #1e3a8a; border-radius: 0.4rem; margin-bottom: 8px;"></div>
    <div style="font-size: 14px; font-weight: 600; color: #f9fafb;">Secondary</div>
    <div style="font-size: 12px; color: #9ca3af;">#1e3a8a</div>
  </div>
</div>
</div>

### Dark Mode Implementation
```css
/* CSS Custom Properties for Theme Support */
:root {
  --color-bg: #ffffff;
  --color-panel: #ffffff;
  --color-primary: #344550;
  --color-secondary: #deedf7;
  --color-text: #111827;
  --color-text-muted: #6b7280;
  --color-border: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1f2937;
    --color-panel: #374151;
    --color-primary: #60a5fa;
    --color-secondary: #1e3a8a;
    --color-text: #f9fafb;
    --color-text-muted: #d1d5db;
    --color-border: #4b5563;
  }
}

[data-theme="dark"] {
  --color-bg: #1f2937;
  --color-panel: #374151;
  --color-primary: #60a5fa;
  --color-secondary: #1e3a8a;
  --color-text: #f9fafb;
  --color-text-muted: #d1d5db;
  --color-border: #4b5563;
}
```

---

## Usage Examples

### CSS Design Token Implementation

```css
/* AuthentiIDP Design System Tokens */
:root {
  /* Colors */
  --color-bg: #ffffff;
  --color-panel: #ffffff;
  --color-primary: #344550;
  --color-primary-hover: #2d3a43;
  --color-primary-focus: #253036;
  --color-secondary: #deedf7;
  --color-text: #111827;
  --color-text-muted: #6b7280;
  --color-text-disabled: #9ca3af;
  --color-border: #e5e7eb;
  --color-border-focus: #d1d5db;
  
  /* Status Colors - Muted/Gray-toned */
  --color-success: #6b7280;
  --color-warning: #9ca3af;
  --color-error: #6b7280;
  --color-info: #6b7280;
  
  /* Typography */
  --font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 32px;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.4rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 50%;
}

/* Example Component Implementation */
.auth-button {
  background: var(--color-primary);
  color: var(--color-panel);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-lg);
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
}

.auth-button:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
}

.auth-button:focus {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}

.auth-card {
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}
```

### JavaScript Theme Toggle Implementation

```javascript
// Theme Management System
class ThemeManager {
  constructor() {
    this.init();
  }
  
  init() {
    // Check for saved theme or use system preference
    const savedTheme = localStorage.getItem('authenti-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;
    
    this.setTheme(theme);
    this.bindEvents();
  }
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('authenti-theme', theme);
    
    // Update theme toggle button
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  
  bindEvents() {
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('authenti-theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
    
    // Theme toggle button
    document.addEventListener('click', (e) => {
      if (e.target.matches('.theme-toggle')) {
        this.toggleTheme();
      }
    });
  }
}

// Initialize theme management
new ThemeManager();
```

### Responsive Grid System

```css
/* AuthentiIDP Grid System */
.auth-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-md);
}

.auth-grid {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .auth-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .auth-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Card-based layout */
.auth-card {
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  transition: all 0.2s ease;
}

.auth-card:hover {
  border-color: var(--color-border-focus);
}
```

---

## Implementation Notes

### Framework Integration
- **React**: Use CSS modules or styled-components with design tokens
- **Vue**: Utilize CSS custom properties with scoped styles
- **Vanilla JS**: Implement with CSS custom properties and utility classes

### Build Process
- Design tokens should be maintained in a central configuration file
- CSS custom properties provide runtime theme switching capability
- Consider using a design token transformation tool for multiple format outputs

### Maintenance Guidelines
- All color values should reference design tokens, never hardcoded colors
- Spacing should follow the 4px-based scale consistently
- Typography hierarchy should be maintained across all implementations
- Component states should follow the established interaction patterns

**Quality Assurance**: All implementations should be tested across light/dark modes and mobile/desktop breakpoints to ensure consistent visual presentation and accessibility compliance.