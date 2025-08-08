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
11. [Component Sizing](#component-sizing)
12. [Usage Examples](#usage-examples)

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

<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">🎯 Primary Blue Scale</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px;">
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #EBF8FF; border-radius: 4px; border: 1px solid #E5E5E5; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">50</div><div style="font-size: 11px; color: #737373;">#EBF8FF</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #BEE3F8; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">100</div><div style="font-size: 11px; color: #737373;">#BEE3F8</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #90CDF4; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">200</div><div style="font-size: 11px; color: #737373;">#90CDF4</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #63B3ED; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">300</div><div style="font-size: 11px; color: #737373;">#63B3ED</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #4299E1; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">400</div><div style="font-size: 11px; color: #737373;">#4299E1</div></div>
<div style="text-align: center; border: 3px solid #3182CE;"><div style="width: 100%; height: 60px; background-color: #3182CE; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 600; color: #3182CE;">500 ⭐</div><div style="font-size: 11px; color: #737373;">#3182CE</div><div style="font-size: 10px; color: #3182CE; margin-top: 2px;">Main Primary</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #2B77CB; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: #171717;">600</div><div style="font-size: 11px; color: #737373;">#2B77CB</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #2C5282; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: white;">700</div><div style="font-size: 11px; color: #737373;">#2C5282</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #2A4365; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: white;">800</div><div style="font-size: 11px; color: #737373;">#2A4365</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 60px; background-color: #1A365D; border-radius: 4px; margin-bottom: 8px;"></div><div style="font-size: 12px; font-weight: 500; color: white;">900</div><div style="font-size: 11px; color: #737373;">#1A365D</div></div>
</div>
</div>

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

<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; margin: 16px 0;">
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
<div><h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #22C55E;">✅ Success Green Scale</h4>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #F0FDF4; border-radius: 4px; border: 1px solid #E5E5E5; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">50</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #DCFCE7; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">100</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #BBF7D0; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">200</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #86EFAC; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">300</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #4ADE80; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">400</div></div>
<div style="text-align: center; border: 2px solid #22C55E;"><div style="width: 100%; height: 40px; background-color: #22C55E; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; font-weight: 600; color: #22C55E;">500 ⭐</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #16A34A; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">600</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #15803D; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">700</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #166534; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">800</div></div>
</div>
</div>
<div><h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #F59E0B;">⚠️ Warning Orange Scale</h4>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FFFBEB; border-radius: 4px; border: 1px solid #E5E5E5; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">50</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FEF3C7; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">100</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FDE68A; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">200</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FCD34D; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">300</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FBBF24; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">400</div></div>
<div style="text-align: center; border: 2px solid #F59E0B;"><div style="width: 100%; height: 40px; background-color: #F59E0B; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; font-weight: 600; color: #F59E0B;">500 ⭐</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #D97706; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">600</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #B45309; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">700</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #92400E; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">800</div></div>
</div>
</div>
<div><h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #EF4444;">🚨 Danger Red Scale</h4>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FEF2F2; border-radius: 4px; border: 1px solid #E5E5E5; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">50</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FEE2E2; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">100</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FECACA; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">200</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #FCA5A5; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">300</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #F87171; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: #737373;">400</div></div>
<div style="text-align: center; border: 2px solid #EF4444;"><div style="width: 100%; height: 40px; background-color: #EF4444; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; font-weight: 600; color: #EF4444;">500 ⭐</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #DC2626; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">600</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #B91C1C; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">700</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 40px; background-color: #991B1B; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 10px; color: white;">800</div></div>
</div>
</div>
</div>
</div>

### Neutral Colors

<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">⚫ Neutral Gray Scale</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 12px;">
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #FAFAFA; border-radius: 4px; border: 1px solid #E5E5E5; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: #171717;">50</div><div style="font-size: 10px; color: #737373;">#FAFAFA</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #F5F5F5; border-radius: 4px; border: 1px solid #E5E5E5; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: #171717;">100</div><div style="font-size: 10px; color: #737373;">#F5F5F5</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #E5E5E5; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: #171717;">200</div><div style="font-size: 10px; color: #737373;">#E5E5E5</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #D4D4D4; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: #171717;">300</div><div style="font-size: 10px; color: #737373;">#D4D4D4</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #A3A3A3; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: white;">400</div><div style="font-size: 10px; color: #737373;">#A3A3A3</div></div>
<div style="text-align: center; border: 2px solid #737373;"><div style="width: 100%; height: 50px; background-color: #737373; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 600; color: #737373;">500 ⭐</div><div style="font-size: 10px; color: #737373;">#737373</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #525252; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: white;">600</div><div style="font-size: 10px; color: #737373;">#525252</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #404040; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: white;">700</div><div style="font-size: 10px; color: #737373;">#404040</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #262626; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: white;">800</div><div style="font-size: 10px; color: #737373;">#262626</div></div>
<div style="text-align: center;"><div style="width: 100%; height: 50px; background-color: #171717; border-radius: 4px; margin-bottom: 6px;"></div><div style="font-size: 11px; font-weight: 500; color: white;">900</div><div style="font-size: 10px; color: #737373;">#171717</div></div>
</div>
<div style="display: flex; gap: 16px; margin-top: 16px;">
<div style="display: flex; align-items: center; gap: 8px;"><div style="width: 24px; height: 24px; background-color: #FFFFFF; border: 2px solid #E5E5E5; border-radius: 4px;"></div><span style="font-size: 12px; color: #171717; font-weight: 500;">White #FFFFFF</span></div>
<div style="display: flex; align-items: center; gap: 8px;"><div style="width: 24px; height: 24px; background-color: #000000; border-radius: 4px;"></div><span style="font-size: 12px; color: #171717; font-weight: 500;">Black #000000</span></div>
</div>
</div>

### Category Colors

<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">📂 Task Category Colors</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;">
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 50px; background-color: #3B82F6; border-radius: 4px;"></div><div style="width: 50%; height: 50px; background-color: #DBEAFE; border-radius: 4px;"></div></div><div style="font-size: 12px; font-weight: 600; color: #3B82F6; margin-bottom: 2px;">💼 Work</div><div style="font-size: 10px; color: #737373;">#3B82F6 / #DBEAFE</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 50px; background-color: #10B981; border-radius: 4px;"></div><div style="width: 50%; height: 50px; background-color: #D1FAE5; border-radius: 4px;"></div></div><div style="font-size: 12px; font-weight: 600; color: #10B981; margin-bottom: 2px;">🏠 Personal</div><div style="font-size: 10px; color: #737373;">#10B981 / #D1FAE5</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 50px; background-color: #8B5CF6; border-radius: 4px;"></div><div style="width: 50%; height: 50px; background-color: #EDE9FE; border-radius: 4px;"></div></div><div style="font-size: 12px; font-weight: 600; color: #8B5CF6; margin-bottom: 2px;">🛒 Shopping</div><div style="font-size: 10px; color: #737373;">#8B5CF6 / #EDE9FE</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 50px; background-color: #14B8A6; border-radius: 4px;"></div><div style="width: 50%; height: 50px; background-color: #CCFBF1; border-radius: 4px;"></div></div><div style="font-size: 12px; font-weight: 600; color: #14B8A6; margin-bottom: 2px;">🏥 Health</div><div style="font-size: 10px; color: #737373;">#14B8A6 / #CCFBF1</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 50px; background-color: #6366F1; border-radius: 4px;"></div><div style="width: 50%; height: 50px; background-color: #E0E7FF; border-radius: 4px;"></div></div><div style="font-size: 12px; font-weight: 600; color: #6366F1; margin-bottom: 2px;">💰 Finance</div><div style="font-size: 10px; color: #737373;">#6366F1 / #E0E7FF</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 50px; background-color: #F97316; border-radius: 4px;"></div><div style="width: 50%; height: 50px; background-color: #FED7AA; border-radius: 4px;"></div></div><div style="font-size: 12px; font-weight: 600; color: #F97316; margin-bottom: 2px;">📚 Learning</div><div style="font-size: 10px; color: #737373;">#F97316 / #FED7AA</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 50px; background-color: #EC4899; border-radius: 4px;"></div><div style="width: 50%; height: 50px; background-color: #FCE7F3; border-radius: 4px;"></div></div><div style="font-size: 12px; font-weight: 600; color: #EC4899; margin-bottom: 2px;">🎨 Hobbies</div><div style="font-size: 10px; color: #737373;">#EC4899 / #FCE7F3</div></div>
</div>
</div>

### Priority Colors

<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; margin: 16px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">🎯 Priority Level Colors</h4>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 60px; background-color: #EF4444; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">🔴</div><div style="width: 50%; height: 60px; background-color: #FEF2F2; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #EF4444; font-weight: 600;">BG</div></div><div style="font-size: 14px; font-weight: 600; color: #EF4444; margin-bottom: 4px;">High Priority</div><div style="font-size: 11px; color: #737373;">Urgent & Important</div><div style="font-size: 10px; color: #737373; margin-top: 2px;">#EF4444 / #FEF2F2</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 60px; background-color: #F59E0B; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">🟡</div><div style="width: 50%; height: 60px; background-color: #FFFBEB; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #F59E0B; font-weight: 600;">BG</div></div><div style="font-size: 14px; font-weight: 600; color: #F59E0B; margin-bottom: 4px;">Medium Priority</div><div style="font-size: 11px; color: #737373;">Moderate Importance</div><div style="font-size: 10px; color: #737373; margin-top: 2px;">#F59E0B / #FFFBEB</div></div>
<div style="text-align: center;"><div style="display: flex; gap: 4px; margin-bottom: 8px;"><div style="width: 50%; height: 60px; background-color: #22C55E; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">🟢</div><div style="width: 50%; height: 60px; background-color: #F0FDF4; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #22C55E; font-weight: 600;">BG</div></div><div style="font-size: 14px; font-weight: 600; color: #22C55E; margin-bottom: 4px;">Low Priority</div><div style="font-size: 11px; color: #737373;">Nice to Have</div><div style="font-size: 10px; color: #737373; margin-top: 2px;">#22C55E / #F0FDF4</div></div>
</div>
</div>

---

## Typography

### Font Families

<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; margin: 16px 0;">
<div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
<div><div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #171717;">Primary Font: Inter</div><div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #525252; margin-bottom: 4px;">Used for headings, UI elements, and interface text</div><div style="font-size: 12px; color: #737373;">Fallbacks: system fonts, Helvetica, Arial</div></div>
<div><div style="font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace; font-size: 16px; font-weight: 500; margin-bottom: 8px; color: #171717; background: #F5F5F5; padding: 8px 12px; border-radius: 4px;">Monospace Font: SF Mono</div><div style="font-size: 14px; color: #525252; margin-bottom: 4px;">Used for task IDs, timestamps, and data display</div><div style="font-size: 12px; color: #737373;">Fallbacks: Monaco, Inconsolata, Consolas</div></div>
</div>
</div>

### Type Scale

<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; margin: 16px 0;">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
<div><div style="font-size: 36px; font-weight: 700; color: #171717; line-height: 1.1; margin-bottom: 4px;">Hero</div><div style="font-size: 11px; color: #737373;">36px • Bold • 1.1 line height</div></div>
<div><div style="font-size: 30px; font-weight: 700; color: #171717; line-height: 1.2; margin-bottom: 4px;">H1 Title</div><div style="font-size: 11px; color: #737373;">30px • Bold • 1.2 line height</div></div>
<div><div style="font-size: 24px; font-weight: 600; color: #262626; line-height: 1.3; margin-bottom: 4px;">H2 Section</div><div style="font-size: 11px; color: #737373;">24px • Semibold • 1.3 line height</div></div>
<div><div style="font-size: 20px; font-weight: 600; color: #262626; line-height: 1.4; margin-bottom: 4px;">H3 Heading</div><div style="font-size: 11px; color: #737373;">20px • Semibold • 1.4 line height</div></div>
<div><div style="font-size: 18px; font-weight: 400; color: #404040; line-height: 1.5; margin-bottom: 4px;">Large Body</div><div style="font-size: 11px; color: #737373;">18px • Normal • 1.5 line height</div></div>
<div><div style="font-size: 16px; font-weight: 400; color: #404040; line-height: 1.5; margin-bottom: 4px;">Body Text</div><div style="font-size: 11px; color: #737373;">16px • Normal • 1.5 line height</div></div>
<div><div style="font-size: 14px; font-weight: 400; color: #525252; line-height: 1.4; margin-bottom: 4px;">Small Text</div><div style="font-size: 11px; color: #737373;">14px • Normal • 1.4 line height</div></div>
<div><div style="font-size: 12px; font-weight: 500; color: #737373; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.3; margin-bottom: 4px;">CAPTION</div><div style="font-size: 11px; color: #737373;">12px • Medium • Uppercase</div></div>
</div>
</div>

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

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">📦 Component Internal Spacing</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #3182CE;">Button Padding</h5>
<div style="display: flex; flex-direction: column; gap: 12px;">
<div style="display: flex; align-items: center; gap: 12px;"><button style="background: #737373; color: white; border: none; padding: 8px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;">Small</button><span style="font-size: 12px; color: #737373;">8px ↕ 12px ↔</span></div>
<div style="display: flex; align-items: center; gap: 12px;"><button style="background: #3182CE; color: white; border: none; padding: 12px 16px; border-radius: 4px; font-size: 14px; cursor: pointer;">Medium</button><span style="font-size: 12px; color: #737373;">12px ↕ 16px ↔</span></div>
<div style="display: flex; align-items: center; gap: 12px;"><button style="background: #22C55E; color: white; border: none; padding: 16px 24px; border-radius: 4px; font-size: 16px; cursor: pointer;">Large</button><span style="font-size: 12px; color: #737373;">16px ↕ 24px ↔</span></div>
</div>
</div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #10B981;">Input & Form Spacing</h5>
<div style="display: flex; flex-direction: column; gap: 12px;">
<input type="text" placeholder="12px ↕ 16px ↔" style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 4px; font-size: 14px;" />
<div style="background: #F5F5F5; padding: 24px; border-radius: 4px; border: 2px dashed #D4D4D4;"><div style="font-size: 12px; color: #737373; text-align: center;">Card Padding: 24px all sides</div></div>
</div>
</div>
</div>
<h4 style="margin: 20px 0 12px 0; font-size: 16px; font-weight: 600;">🔗 Component Gaps & Relationships</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
<div><div style="font-size: 12px; font-weight: 600; color: #525252; margin-bottom: 8px;">Form Fields</div><div style="display: flex; flex-direction: column; gap: 16px; background: #FAFAFA; padding: 16px; border-radius: 4px;"><div style="height: 20px; background: #E5E5E5; border-radius: 2px;"></div><div style="height: 20px; background: #E5E5E5; border-radius: 2px;"></div></div><div style="font-size: 11px; color: #737373; margin-top: 4px; text-align: center;">16px gaps</div></div>
<div><div style="font-size: 12px; font-weight: 600; color: #525252; margin-bottom: 8px;">Button Groups</div><div style="display: flex; gap: 8px; background: #FAFAFA; padding: 12px; border-radius: 4px;"><div style="width: 60px; height: 24px; background: #3182CE; border-radius: 2px;"></div><div style="width: 60px; height: 24px; background: #737373; border-radius: 2px;"></div></div><div style="font-size: 11px; color: #737373; margin-top: 4px; text-align: center;">8px gaps</div></div>
<div><div style="font-size: 12px; font-weight: 600; color: #525252; margin-bottom: 8px;">Task Grid</div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; background: #FAFAFA; padding: 16px; border-radius: 4px;"><div style="height: 40px; background: #E5E5E5; border-radius: 2px;"></div><div style="height: 40px; background: #E5E5E5; border-radius: 2px;"></div></div><div style="font-size: 11px; color: #737373; margin-top: 4px; text-align: center;">24px gaps</div></div>
</div>
</div>

### Layout Containers

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">📱 Container Sizes for TaskMaster</h4>
<div style="display: flex; flex-direction: column; gap: 16px;">
<div><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;"><div style="font-size: 12px; font-weight: 600; color: #171717;">Extra Large (1280px)</div><div style="font-size: 11px; color: #737373;">- Dashboard, Analytics</div></div><div style="width: 100%; height: 20px; background: linear-gradient(90deg, #3182CE 0%, #4299E1 100%); border-radius: 4px; position: relative;"><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10px; color: white; font-weight: 600;">Full Desktop Experience</div></div></div>
<div><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;"><div style="font-size: 12px; font-weight: 600; color: #171717;">Large (1024px)</div><div style="font-size: 11px; color: #737373;">- Main Task Views</div></div><div style="width: 80%; height: 20px; background: linear-gradient(90deg, #10B981 0%, #34D399 100%); border-radius: 4px; position: relative;"><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10px; color: white; font-weight: 600;">Desktop</div></div></div>
<div><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;"><div style="font-size: 12px; font-weight: 600; color: #171717;">Medium (768px)</div><div style="font-size: 11px; color: #737373;">- Tablet Layout</div></div><div style="width: 60%; height: 20px; background: linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%); border-radius: 4px; position: relative;"><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10px; color: white; font-weight: 600;">Tablet</div></div></div>
<div><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;"><div style="font-size: 12px; font-weight: 600; color: #171717;">Small (640px)</div><div style="font-size: 11px; color: #737373;">- Mobile Landscape</div></div><div style="width: 50%; height: 20px; background: linear-gradient(90deg, #EF4444 0%, #F87171 100%); border-radius: 4px; position: relative;"><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10px; color: white; font-weight: 600;">Mobile L</div></div></div>
<div><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;"><div style="font-size: 12px; font-weight: 600; color: #171717;">Full Width</div><div style="font-size: 11px; color: #737373;">- Mobile Portrait</div></div><div style="width: 35%; height: 20px; background: linear-gradient(90deg, #8B5CF6 0%, #A78BFA 100%); border-radius: 4px; position: relative;"><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10px; color: white; font-weight: 600;">Mobile</div></div></div>
</div>
</div>

### Grid System

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">🔲 Task Grid Layouts</h4>
<div style="display: flex; flex-direction: column; gap: 20px;">
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #525252;">Single Column (Mobile)</h5><div style="display: grid; grid-template-columns: 1fr; gap: 12px; padding: 16px; background: #F9FAFB; border-radius: 6px;"><div style="height: 40px; background: #DBEAFE; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #1D4ED8;">Task Card</div><div style="height: 40px; background: #D1FAE5; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #065F46;">Task Card</div><div style="height: 40px; background: #FEF2F2; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #991B1B;">Task Card</div></div></div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #525252;">Two Columns (Tablet)</h5><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; padding: 16px; background: #F9FAFB; border-radius: 6px;"><div style="height: 40px; background: #DBEAFE; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #1D4ED8;">Work Task</div><div style="height: 40px; background: #D1FAE5; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #065F46;">Personal</div><div style="height: 40px; background: #FEF2F2; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #991B1B;">High Priority</div><div style="height: 40px; background: #FFFBEB; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #92400E;">Medium</div></div></div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #525252;">Three Columns (Desktop)</h5><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 16px; background: #F9FAFB; border-radius: 6px;"><div style="height: 40px; background: #DBEAFE; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #1D4ED8;">To Do</div><div style="height: 40px; background: #FFFBEB; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #92400E;">In Progress</div><div style="height: 40px; background: #D1FAE5; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #065F46;">Complete</div></div></div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #525252;">Four Columns (Large Desktop)</h5><div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 16px; background: #F9FAFB; border-radius: 6px;"><div style="height: 40px; background: #EDE9FE; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #7C3AED;">Shopping</div><div style="height: 40px; background: #CCFBF1; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #0F766E;">Health</div><div style="height: 40px; background: #FED7AA; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #C2410C;">Learning</div><div style="height: 40px; background: #FCE7F3; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #BE1264;">Hobbies</div></div></div>
</div>
</div>

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

### TaskMaster Animation Timing

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">⏱️ Animation Durations</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
<div><div style="font-size: 14px; font-weight: 600; color: #525252; margin-bottom: 8px;">Fast (150ms)</div><div style="height: 8px; background: linear-gradient(90deg, #22C55E 0%, #22C55E 30%, #F5F5F5 30%); border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 11px; color: #737373;">Color changes, hover states</div></div>
<div><div style="font-size: 14px; font-weight: 600; color: #525252; margin-bottom: 8px;">Normal (200ms)</div><div style="height: 8px; background: linear-gradient(90deg, #3182CE 0%, #3182CE 50%, #F5F5F5 50%); border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 11px; color: #737373;">Button presses, transitions</div></div>
<div><div style="font-size: 14px; font-weight: 600; color: #525252; margin-bottom: 8px;">Slow (300ms)</div><div style="height: 8px; background: linear-gradient(90deg, #F59E0B 0%, #F59E0B 70%, #F5F5F5 70%); border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 11px; color: #737373;">Modal appearances, slides</div></div>
<div><div style="font-size: 14px; font-weight: 600; color: #525252; margin-bottom: 8px;">Celebration (500ms)</div><div style="height: 8px; background: linear-gradient(90deg, #EF4444 0%, #EF4444 100%); border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 11px; color: #737373;">Task completion, success</div></div>
</div>
</div>

### Interactive Animation Examples

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">🎬 TaskMaster Interactions</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #3182CE;">Button Hover Effects</h5><div style="display: flex; flex-direction: column; gap: 8px;"><button style="background: #3182CE; color: white; border: none; padding: 12px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 12px rgba(49, 130, 206, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">Hover me</button><div style="font-size: 11px; color: #737373;">Lifts up with shadow</div></div></div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #22C55E;">Task Completion</h5><div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #F0FDF4; border-radius: 6px;"><input type="checkbox" style="width: 18px; height: 18px; accent-color: #22C55E;" onchange="this.parentNode.style.transform='scale(1.02)'; setTimeout(() => this.parentNode.style.transform='scale(1)', 200)"><span style="font-size: 14px; color: #14532D;">Click to see celebration</span></div><div style="font-size: 11px; color: #737373; margin-top: 4px;">Subtle scale + feedback</div></div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #F59E0B;">Loading States</h5><div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #FFFBEB; border-radius: 6px;"><div style="width: 16px; height: 16px; border: 2px solid #F59E0B; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div><span style="font-size: 14px; color: #92400E;">Saving task...</span></div><div style="font-size: 11px; color: #737373; margin-top: 4px;">Spinner rotation</div><style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style></div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #8B5CF6;">Slide Transitions</h5><div style="overflow: hidden; border-radius: 6px; background: #EDE9FE; position: relative; height: 60px;"><div style="position: absolute; width: 100%; height: 100%; background: #8B5CF6; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 500; cursor: pointer; transition: transform 0.3s ease;" onclick="this.style.transform = this.style.transform === 'translateX(-100%)' ? 'translateX(0)' : 'translateX(-100%)'">← Click to slide</div></div><div style="font-size: 11px; color: #737373; margin-top: 4px;">Smooth slide reveal</div></div>
</div>
</div>

### Task-Specific Animations

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">✨ Delight Animations</h4>
<div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: start;">
<div style="text-align: center; padding: 16px; background: #F0FDF4; border-radius: 8px; border: 1px solid #BBF7D0;"><div style="font-size: 32px; margin-bottom: 8px; cursor: pointer; transition: transform 0.2s ease;" onclick="this.style.animation = 'bounce 0.6s ease'; setTimeout(() => this.style.animation = '', 600)">🎉</div><div style="font-size: 12px; font-weight: 600; color: #14532D; margin-bottom: 2px;">Task Complete</div><div style="font-size: 10px; color: #16A34A;">Click to celebrate</div><style>@keyframes bounce { 0%, 100% { transform: scale(1) rotate(0deg); } 25% { transform: scale(1.2) rotate(-5deg); } 75% { transform: scale(1.1) rotate(5deg); } }</style></div>
<div style="text-align: center; padding: 16px; background: #FEF2F2; border-radius: 8px; border: 1px solid #FECACA;"><div style="font-size: 32px; margin-bottom: 8px; cursor: pointer; transition: transform 0.15s ease;" onclick="this.style.transform = 'scale(0.9)'; setTimeout(() => this.style.transform = 'scale(1)', 150)">⚠️</div><div style="font-size: 12px; font-weight: 600; color: #991B1B; margin-bottom: 2px;">Overdue Alert</div><div style="font-size: 10px; color: #DC2626;">Click for feedback</div></div>
<div style="text-align: center; padding: 16px; background: #EBF8FF; border-radius: 8px; border: 1px solid #BFDBFE;"><div style="font-size: 32px; margin-bottom: 8px; cursor: pointer;" onclick="this.style.animation = 'pulse 1s ease-in-out'; setTimeout(() => this.style.animation = '', 1000)">💡</div><div style="font-size: 12px; font-weight: 600; color: #1D4ED8; margin-bottom: 2px;">New Idea</div><div style="font-size: 10px; color: #3B82F6;">Click to highlight</div><style>@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.8; } }</style></div>
</div>
</div>

---

## Dark Mode Support

### Light vs Dark Mode Comparison

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">🌓 TaskMaster Theme Toggle</h4>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #525252;">☀️ Light Mode</h5>
<div style="background: #FFFFFF; border: 2px solid #E5E5E5; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #E5E5E5;">
<div style="width: 8px; height: 8px; background: #22C55E; border-radius: 50%;"></div>
<span style="font-size: 14px; color: #171717; font-weight: 600;">TaskMaster</span>
</div>
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
<input type="checkbox" checked style="width: 16px; height: 16px; accent-color: #3182CE;">
<span style="font-size: 13px; color: #404040;">Complete project presentation</span>
</div>
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
<input type="checkbox" style="width: 16px; height: 16px; accent-color: #3182CE;">
<span style="font-size: 13px; color: #404040;">Review team feedback</span>
</div>
<button style="background: #3182CE; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; margin-top: 8px;">Add Task</button>
</div>
</div>
<div><h5 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #525252;">🌙 Dark Mode</h5>
<div style="background: #171717; border: 2px solid #404040; border-radius: 8px; padding: 16px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #404040;">
<div style="width: 8px; height: 8px; background: #22C55E; border-radius: 50%;"></div>
<span style="font-size: 14px; color: #F5F5F5; font-weight: 600;">TaskMaster</span>
</div>
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
<input type="checkbox" checked style="width: 16px; height: 16px; accent-color: #4299E1;">
<span style="font-size: 13px; color: #D4D4D4;">Complete project presentation</span>
</div>
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
<input type="checkbox" style="width: 16px; height: 16px; accent-color: #4299E1;">
<span style="font-size: 13px; color: #D4D4D4;">Review team feedback</span>
</div>
<button style="background: #4299E1; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; margin-top: 8px;">Add Task</button>
</div>
</div>
</div>
</div>

### Dark Mode Color Palette

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">🎨 Dark Theme Colors</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
<div><h5 style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; color: #525252;">Background Colors</h5>
<div style="display: flex; gap: 4px;">
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #171717; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: #737373;">Primary<br>#171717</div></div>
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #262626; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: #737373;">Secondary<br>#262626</div></div>
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #404040; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: white;">Cards<br>#404040</div></div>
</div>
</div>
<div><h5 style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; color: #525252;">Text Colors</h5>
<div style="display: flex; gap: 4px;">
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #F5F5F5; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: #737373;">Primary<br>#F5F5F5</div></div>
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #D4D4D4; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: #737373;">Secondary<br>#D4D4D4</div></div>
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #A3A3A3; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: white;">Muted<br>#A3A3A3</div></div>
</div>
</div>
<div><h5 style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; color: #525252;">Accent Colors</h5>
<div style="display: flex; gap: 4px;">
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #4299E1; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: #737373;">Primary<br>#4299E1</div></div>
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #34D399; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: #737373;">Success<br>#34D399</div></div>
<div style="flex: 1; text-align: center;"><div style="width: 100%; height: 40px; background: #F87171; border-radius: 4px; margin-bottom: 4px;"></div><div style="font-size: 9px; color: white;">Error<br>#F87171</div></div>
</div>
</div>
</div>
</div>

### Dark Mode Task Cards

<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">
<h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">📋 Dark Mode Task Examples</h4>
<div style="background: #171717; padding: 20px; border-radius: 8px; border: 2px solid #404040;">
<div style="display: flex; flex-direction: column; gap: 12px;">
<div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: #262626; border-radius: 6px; border: 1px solid #525252;">
<input type="checkbox" style="margin-top: 2px; width: 16px; height: 16px; accent-color: #4299E1;">
<div style="flex: 1;">
<div style="font-size: 14px; font-weight: 500; color: #F5F5F5; margin-bottom: 4px;">Prepare quarterly presentation</div>
<div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
<span style="background: #1E40AF; color: #DBEAFE; padding: 2px 8px; border-radius: 12px; font-size: 11px;">💼 Work</span>
<span style="background: #DC2626; color: #FEF2F2; padding: 2px 8px; border-radius: 12px; font-size: 11px;">🔴 High</span>
</div>
<div style="font-size: 12px; color: #A3A3A3;">📅 Due: Friday 2:00 PM</div>
</div>
</div>
<div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: #262626; border-radius: 6px; border: 1px solid #525252;">
<input type="checkbox" checked style="margin-top: 2px; width: 16px; height: 16px; accent-color: #34D399;">
<div style="flex: 1; opacity: 0.7;">
<div style="font-size: 14px; font-weight: 500; color: #F5F5F5; margin-bottom: 4px; text-decoration: line-through;">Review team feedback</div>
<div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
<span style="background: #059669; color: #D1FAE5; padding: 2px 8px; border-radius: 12px; font-size: 11px;">🏠 Personal</span>
<span style="background: #059669; color: #D1FAE5; padding: 2px 8px; border-radius: 12px; font-size: 11px;">🟢 Low</span>
</div>
<div style="font-size: 12px; color: #A3A3A3;">✅ Completed</div>
</div>
</div>
</div>
</div>
</div>

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

## 📐 Component Sizing

### Interactive Size Examples

<div style="padding: 24px; background: #FAFAFA; border-radius: 12px; border: 1px solid #E5E5E5; margin: 20px 0;">

#### Buttons
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Button Sizes (auto width):</p>
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <button style="background: #737373; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; height: 36px; cursor: pointer;">🔄 Quick Action</button>
    <span style="font-size: 12px; color: #737373;">36px height (small)</span>
  </div>
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
    <button style="background: #3182CE; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; height: 44px; cursor: pointer;">+ Add New Task</button>
    <span style="font-size: 12px; color: #737373;">44px height (medium)</span>
  </div>
</div>

#### Input Fields
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Task Input Field (100% width, 44px height):</p>
  <input type="text" placeholder="What needs to be done?" style="width: 100%; max-width: 400px; height: 44px; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px;" />
</div>

#### Task Card
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Task Card (400px width):</p>
  <div style="width: 400px; background: white; border: 1px solid #E5E5E5; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <input type="checkbox" style="margin-top: 2px; width: 18px; height: 18px; accent-color: #3182CE;" />
      <div style="flex: 1;">
        <h4 style="margin: 0 0 4px 0; font-size: 16px; color: #171717; font-weight: 500;">Prepare quarterly presentation</h4>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="background-color: #DBEAFE; color: #1D4ED8; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">💼 Work</span>
          <span style="background-color: #FEF2F2; color: #991B1B; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">🔴 High</span>
        </div>
        <p style="margin: 0; font-size: 14px; color: #525252;">📅 Due: Friday 2:00 PM</p>
      </div>
    </div>
  </div>
</div>

#### Progress Bar
<div style="margin-bottom: 20px;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Progress Bar (100% width, 12px height):</p>
  <div style="max-width: 400px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span style="font-size: 14px; color: #404040; font-weight: 500;">Today's Progress</span>
      <span style="font-size: 14px; color: #737373;">6 of 8 tasks</span>
    </div>
    <div style="background-color: #E5E5E5; border-radius: 8px; height: 12px; overflow: hidden;">
      <div style="background: linear-gradient(90deg, #22C55E 0%, #16A34A 100%); height: 100%; width: 75%; border-radius: 8px;"></div>
    </div>
  </div>
</div>

#### Modal Preview
<div style="margin-bottom: 0;">
  <p style="margin: 0 0 12px 0; font-weight: bold;">Task Creation Modal (500px width, auto height):</p>
  <div style="border: 2px dashed #D1D5DB; background: #F9FAFB; padding: 16px; border-radius: 8px;">
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #737373;">Modal Preview (Static)</p>
    <div style="width: 500px; max-width: 100%; background: white; border-radius: 12px; box-shadow: 0 25px 50px rgba(0,0,0,0.25); overflow: hidden; margin: 0 auto;">
      <div style="padding: 20px; border-bottom: 1px solid #E5E5E5;">
        <h3 style="margin: 0; font-size: 18px; font-weight: 600;">✏️ Create New Task</h3>
      </div>
      <div style="padding: 20px;">
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 6px; font-weight: 500; color: #404040; font-size: 14px;">Task Title *</label>
          <input type="text" placeholder="What needs to be done?" style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px;" />
        </div>
        <div style="display: flex; gap: 12px;">
          <div style="flex: 1;">
            <label style="display: block; margin-bottom: 6px; font-weight: 500; color: #404040; font-size: 14px;">Category</label>
            <select style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; background: white;">
              <option>💼 Work</option>
              <option>🏠 Personal</option>
            </select>
          </div>
          <div style="flex: 1;">
            <label style="display: block; margin-bottom: 6px; font-weight: 500; color: #404040; font-size: 14px;">Priority</label>
            <select style="width: 100%; padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; background: white;">
              <option>🔴 High</option>
              <option>🟡 Medium</option>
              <option>🟢 Low</option>
            </select>
          </div>
        </div>
      </div>
      <div style="padding: 16px 20px; background: #FAFAFA; display: flex; gap: 8px; justify-content: flex-end;">
        <button style="background: #F5F5F5; color: #404040; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Cancel</button>
        <button style="background: #3182CE; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Create Task</button>
      </div>
    </div>
  </div>
</div>

</div>

### Size Guidelines

| Component        | Dimensions        | Usage Notes                          |
|------------------|-------------------|--------------------------------------|
| Button (small)   | auto × 36px       | Secondary actions, icon buttons      |
| Button (medium)  | auto × 44px       | Primary actions, task creation       |
| Input Fields     | 100% × 44px       | Touch-friendly, accessible height    |
| Task Cards       | 400px × auto      | Task displays, task listings         |
| Modals           | 500px × auto      | Task creation, settings, dialogs     |
| Progress Bars    | 100% × 12px       | Progress tracking, completion status |

---

## ✅ Usage Examples

### Live TaskMaster Components Preview

<div style="background: #FAFAFA; padding: 24px; border-radius: 12px; margin: 16px 0; border: 1px solid #E5E5E5;">
  <h4 style="margin: 0 0 20px 0; color: #171717; font-size: 18px;">TaskMaster Interface Elements</h4>
  
  <div style="margin-bottom: 24px;">
    <p style="margin: 0 0 12px 0; font-weight: 600; color: #525252;">Primary Actions</p>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button style="background-color: #3182CE; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; cursor: pointer; font-family: 'Inter', sans-serif;">+ Add New Task</button>
      <button style="background-color: #22C55E; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; cursor: pointer; font-family: 'Inter', sans-serif;">✓ Mark Complete</button>
      <button style="background-color: transparent; color: #3182CE; border: 2px solid #3182CE; padding: 10px 22px; border-radius: 6px; font-weight: 500; cursor: pointer; font-family: 'Inter', sans-serif;">Cancel</button>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <p style="margin: 0 0 12px 0; font-weight: 600; color: #525252;">Form Elements</p>
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <input type="text" placeholder="Search tasks..." style="padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; font-family: 'Inter', sans-serif;" />
      <select style="padding: 12px 16px; border: 2px solid #E5E5E5; border-radius: 6px; font-size: 16px; background: white; font-family: 'Inter', sans-serif;">
        <option>All Categories</option>
        <option>💼 Work</option>
        <option>🏠 Personal</option>
        <option>🛒 Shopping</option>
      </select>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <p style="margin: 0 0 12px 0; font-weight: 600; color: #525252;">Status Indicators & Badges</p>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <span style="background-color: #DBEAFE; color: #1D4ED8; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">💼 Work</span>
      <span style="background-color: #D1FAE5; color: #065F46; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🏠 Personal</span>
      <span style="background-color: #FEF2F2; color: #991B1B; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🔴 High Priority</span>
      <span style="background-color: #FFFBEB; color: #92400E; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🟡 Medium Priority</span>
      <span style="background-color: #F0FDF4; color: #14532D; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">🟢 Low Priority</span>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <p style="margin: 0 0 12px 0; font-weight: 600; color: #525252;">Alert Messages</p>
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
      <div style="display: flex; align-items: center; padding: 12px 16px; background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 6px; color: #14532D;">
        <span style="margin-right: 8px;">✅</span>
        <span>Task completed successfully!</span>
      </div>
      <div style="display: flex; align-items: center; padding: 12px 16px; background-color: #FFFBEB; border: 1px solid #FDE68A; border-radius: 6px; color: #92400E;">
        <span style="margin-right: 8px;">⚠️</span>
        <span>You have 3 tasks due today</span>
      </div>
      <div style="display: flex; align-items: center; padding: 12px 16px; background-color: #FEF2F2; border: 1px solid #FECACA; border-radius: 6px; color: #991B1B;">
        <span style="margin-right: 8px;">❌</span>
        <span>Task deadline has passed</span>
      </div>
    </div>
  </div>
  
  <div style="margin-bottom: 0;">
    <p style="margin: 0 0 12px 0; font-weight: 600; color: #525252;">Interactive Elements</p>
    <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
      <label style="display: flex; align-items: center; cursor: pointer; gap: 12px;">
        <div style="position: relative; width: 48px; height: 24px; background-color: #3182CE; border-radius: 24px;">
          <div style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background-color: white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
        </div>
        <span style="font-size: 16px; color: #171717;">Show completed tasks</span>
      </label>
    </div>
  </div>
  
</div>

### CSS Implementation Examples

```css
/* TaskMaster Button Styles */
.taskmaster-btn-primary {
  background-color: var(--color-primary-500);
  color: #fff;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-primary);
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.taskmaster-btn-primary:hover {
  background-color: var(--color-primary-600);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

/* TaskMaster Input Styles */
.taskmaster-input {
  width: 100%;
  height: 44px;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: 16px;
  background-color: white;
  transition: border-color 0.2s;
}

.taskmaster-input:focus {
  border-color: var(--color-primary-500);
  box-shadow: var(--shadow-primary-focus);
  outline: none;
}

/* TaskMaster Badge Styles */
.taskmaster-badge-work {
  background-color: var(--color-category-work-light);
  color: var(--color-category-work);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.taskmaster-alert-success {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  background-color: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: var(--radius-md);
  color: #14532D;
  gap: var(--space-2);
}

.taskmaster-task-card {
  background: white;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-all);
}

.taskmaster-task-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
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