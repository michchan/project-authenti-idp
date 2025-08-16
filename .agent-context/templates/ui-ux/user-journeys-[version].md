# 📈 User Journey Flowchart `[Version]`

## 🧭 Index of User Journeys

1. [`[Critical Flow Name]`](#1-critical-flow-name)
2. [`[Authentication Flow]`](#2-authentication-flow)
3. [`[Core User Flow]`](#3-core-user-flow)
4. [`[Error/Edge Case Flow]`](#4-erroredge-case-flow)
5. [`[Onboarding Flow]`](#5-onboarding-flow)

---

## `[Number]`. `[Flow Name]`

### Flow Purpose
**Goal**: `[What this user journey accomplishes]`

### ASCII Flow Diagram

```
`[Starting Point]`
   |
   v
`<User Decision/Condition?>`
   |
   +---> `[Branch Option A]` --> `[Outcome A]`
   |
   +---> `[Branch Option B]` --> `[Outcome B]`
   |
   v
`[Next Step]`
   |
   v
`[End State]` --> (Leads to: `[Next Flow Name]`)
```

**Format Notes**: 
- Use `<...>` for condition blocks (decisions, validations, checks)
- Use `[...]` for action/state blocks (user actions, system states)
- Put trigger conditions as arrow labels in Inter-Flow Connections section

---

## `[Number]`. `[Flow Name]`

### Flow Purpose
**Goal**: `[What this user journey accomplishes]`

### ASCII Flow Diagram

```
`[Create ASCII diagram showing this flow's path]`
```

---

## 🔗 Inter-Flow Connections

Show how different user journeys connect using vertical flowchart format for better readability on narrow screens:

```
[Flow A]
   |
   ──trigger condition──
   |
   v
[Flow B]
   |
   ──completion action──
   |
   v
[Flow C]

[Flow A]
   |
   ──alternative trigger──
   |
   v
[Flow D]
   |
   ──user choice──
   |
   v
[Flow E]

[Error Flows]
   |
   ──system errors or user mistakes──
   |
   v
[Recovery Paths]
```

**Connection Notes**: `[Additional context about how flows link together. Triggers shown as arrow labels describe specific user actions or conditions that cause navigation between flows.]`