# 🖼️ ASCII Wireframes `[Version]`

Document key interface layouts using ASCII art for rapid design communication.

---

## 🔑 Symbol Legend

- `┌─┐, └─┘, │ │, ──` : Box/section boundaries
- `[ Button ]` : Clickable elements
- `[x] / [ ]` : Checkbox states (checked/unchecked)
- `(o) / ( )` : Radio button states (selected/unselected)
- `░░` : Disabled/inactive elements
- `→` : Navigation flow direction
- `*` : Required fields
- `[!]` : Error messages
- `[✓]` : Success messages
- `...` : Truncated content

---

## `[Flow Number]`. `[Flow/Feature Name]`

### `[Screen Letter]`. `[Screen Name]`

**Purpose**: `[What this screen accomplishes]`

```
┌──────────────────────────────────────────────┐
│ `[Header: logo, navigation, page title]`     │
│─────────────────────────────────────────────│
│  `[Main content area]`                       │
│                                              │
│  `[Primary action buttons]`                  │
│                                              │
│  `[Secondary actions/links]`                 │
└──────────────────────────────────────────────┘
```

### `[Screen Letter]`. `[Screen Name]`

**Purpose**: `[What this screen accomplishes]`

```
┌──────────────────────────────────────────────┐
│           `[Form Title]`                     │
│─────────────────────────────────────────────│
│ `[Field 1]*`: ┌─────────────────────────────┐ │
│ `[Field 2]*`: ┌─────────────────────────────┐ │ 
│ `[Field 3]*`: ┌─────────────────────────────┐ │
│ `[Checkbox/agreement text]`                  │
│                                              │
│ `[ Primary Action ]`                         │
│                                              │
│ `[!] [Error/validation message]`             │
└──────────────────────────────────────────────┘
```

**Flow**: `[Screen A → Screen B → Screen C]`

**Notes**: `[Implementation notes or special considerations]`

---

## 🔗 Flow Connections

Show how different screens connect with trigger information:

```
[Screen A] ──user clicks action button──→ [Screen B] ──user completes form──→ [Screen C]
     |
     |──user selects alternative──→ [Alternative Screen] ──user navigates back──→ [Screen A]
     
[Error States] ──validation fails──→ [Error Recovery] ──user fixes issue──→ [Screen A]
```

**Connection Notes**: `[Describe how flows link together. Triggers on arrows show specific user actions that cause navigation between screens.]`