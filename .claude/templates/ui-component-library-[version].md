
# 🧩 UI Component Library [Version] (Template)

This document serves as a foundational template for defining reusable UI components using a structured format with embedded HTML.

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

---

## 🔘 Button

### HTML Preview

<button class="btn btn-primary">Primary Button</button>

### Variants

- `btn-primary`
- `btn-secondary`
- `btn-outline`
- `btn-disabled`

### States

- Normal
- Hover
- Focus
- Disabled
- Loading

---

## 📝 Input Field

### HTML Preview

<label for="email">Email</label>
<input type="email" id="email" class="input input-default" placeholder="you@example.com" />

### States

- Default
- Focus
- Error
- Disabled

---

## ⬇️ Select Dropdown

### HTML Preview

<label for="options">Choose an option</label>
<select id="options" class="select">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>

### States

- Default
- Focus
- Disabled

---

## ☑️ Checkbox

### HTML Preview

<label class="checkbox">
  <input type="checkbox" />
  Accept Terms
</label>

### States

- Unchecked
- Checked
- Indeterminate
- Disabled

---

## 🪟 Modal

### HTML Preview

<div class="modal">
  <div class="modal-content">
    <h2>Modal Title</h2>
    <p>This is a modal message</p>
    <button class="btn btn-primary">OK</button>
  </div>
</div>

### Behavior

- Open on trigger
- Close on overlay click or escape key
- Focus trap within modal

---

## 🃏 Card

### HTML Preview

<div class="card">
  <img src="image.jpg" alt="Preview" class="card-img">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card description and content.</p>
    <button class="btn btn-secondary">Action</button>
  </div>
</div>

### Variants

- Default
- With image
- With footer actions

---

## 💬 Tooltip

### HTML Preview

<button class="tooltip" data-tooltip="More info">Hover me</button>

### Behavior

- Shows on hover/focus
- Position: top | right | bottom | left

---

## 🧷 Tabs

### HTML Preview

<div class="tabs">
  <button class="tab active">Tab 1</button>
  <button class="tab">Tab 2</button>
</div>
<div class="tab-content">
  <p>Content for active tab</p>
</div>

### Behavior

- Active state styling
- Tab-to-content mapping
- Keyboard navigation support

---

## 📎 Notes

- Components must support dark mode where applicable.
- All interactive components must be accessible via keyboard and meet WCAG AA.
- Use design tokens for colors, spacing, and typography.

