# 🖼️ ASCII Wireframes `[Version]`

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

**Actions**:
- Press "`[Button/Element Text]`" going to [`[target screen name]`](#target-screen-id)
- Press "`[Another Button Text]`" going to [`[another target screen name]`](#another-target-screen-id)

**Notes**: `[Implementation notes or special considerations]`

---

## 🔗 Flow Connections

Show how different screens connect with trigger information using vertical format for better narrow screen readability:

```
[Screen A]
   |
   ──user clicks action button──
   |
   v
[Screen B]
   |
   ──user completes form──
   |
   v
[Screen C]

[Screen A]
   |
   ──user selects alternative──
   |
   v
[Alternative Screen]
   |
   ──user navigates back──
   |
   v
[Screen A]

[Error States]
   |
   ──validation fails──
   |
   v
[Error Recovery]
   |
   ──user fixes issue──
   |
   v
[Screen A]
```

**Connection Notes**: `[Describe how flows link together. Triggers on arrows show specific user actions that cause navigation between screens.]`