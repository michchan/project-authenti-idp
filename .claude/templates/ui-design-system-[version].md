
# 🎨 UI Design System [Version] (Template)

This template is for UI designers to document a foundational visual language and reusable design tokens for use in design tools and codebases.

---

## 📁 Index

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Iconography](#iconography)
5. [Elevation / Shadows](#elevation--shadows)
6. [Border Radius](#border-radius)

---

## 🎨 Color Palette

| Role            | Token              | Color     | Notes                  |
|-----------------|--------------------|-----------|-------------------------|
| Primary         | --color-primary    | #3366FF   | Buttons, links          |
| Secondary       | --color-secondary  | #00C8A0   | Highlights, badges      |
| Background      | --color-bg         | #FFFFFF   | Page background         |
| Surface         | --color-surface    | #F7F8FA   | Card backgrounds        |
| Text (Primary)  | --color-text       | #1A1A1A   | Main text color         |
| Text (Muted)    | --color-muted      | #6B6B6B   | Captions, placeholders  |
| Border          | --color-border     | #E0E0E0   | Dividers, outlines      |
| Error           | --color-error      | #FF4D4F   | Form errors             |
| Success         | --color-success    | #52C41A   | Success messages        |

---

## 🔤 Typography

| Role           | Token             | Font               | Size | Weight | Line Height |
|----------------|-------------------|--------------------|------|--------|-------------|
| Headline 1     | --text-h1         | Inter, sans-serif  | 32px | 700    | 40px        |
| Headline 2     | --text-h2         | Inter, sans-serif  | 24px | 600    | 32px        |
| Body Text      | --text-body       | Inter, sans-serif  | 16px | 400    | 24px        |
| Caption        | --text-caption    | Inter, sans-serif  | 12px | 400    | 16px        |

---

## 📏 Spacing System

Use a 4px base scale:

| Token          | Value |
|----------------|--------|
| --spacing-1    | 4px    |
| --spacing-2    | 8px    |
| --spacing-3    | 12px   |
| --spacing-4    | 16px   |
| --spacing-6    | 24px   |
| --spacing-8    | 32px   |
| --spacing-10   | 40px   |
| --spacing-12   | 48px   |

---

## 🧩 Iconography

- Use a consistent icon set (e.g. Feather, Material, FontAwesome)
- Style:
  - Stroke-based
  - 24x24 px default size
  - Monochrome (`--color-text`)
- Naming convention: `icon-[name]` (e.g., `icon-check`, `icon-alert`)

---

## 🪟 Elevation / Shadows

| Level         | Token                   | Shadow                                 |
|---------------|--------------------------|----------------------------------------|
| 0 (Flat)      | --shadow-none            | none                                   |
| 1 (Card)      | --shadow-elevation-1     | 0 1px 3px rgba(0,0,0,0.1)              |
| 2 (Modal)     | --shadow-elevation-2     | 0 4px 12px rgba(0,0,0,0.15)            |

---

## 🟦 Border Radius

| Use Case         | Token              | Value |
|------------------|--------------------|-------|
| Small elements   | --radius-sm        | 4px   |
| Default buttons  | --radius-md        | 8px   |
| Cards/modals     | --radius-lg        | 12px  |
| Full round       | --radius-full      | 9999px|

---

## 📐 Component Sizing

| Component        | Width | Height | Notes                        |
|------------------|-------|--------|------------------------------|
| Button (small)   | auto  | 32px   | Padding: 8px 12px            |
| Button (medium)  | auto  | 40px   | Padding: 12px 16px           |
| Input (default)  | 100%  | 40px   | Border-radius: 8px           |
| Modal            | 600px | auto   | Use elevation-2              |

---

## ✅ Usage Examples

```css
.button-primary {
  background-color: var(--color-primary);
  color: #fff;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-elevation-1);
}
```

```html
<!-- Icon usage example -->
<i class="icon-check" style="color: var(--color-success); width: 24px; height: 24px;"></i>
```

---

## 📎 Notes

- All values should follow design token standards for code export.
- Document updates to the system using version control or changelogs.
- Integrate this with Figma styles & tokens plugins for consistency.

