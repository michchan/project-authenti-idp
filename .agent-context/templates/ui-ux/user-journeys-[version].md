# 📈 User Journey Flowchart `[Version]`

Document user flows using ASCII diagrams to visualize navigation through your product.

---

## 🧭 Index of User Journeys

List your main user flows:

1. [`[Critical Flow Name]`](#1-critical-flow-name) - `[Brief description]`
2. [`[Authentication Flow]`](#2-authentication-flow) - `[Brief description]`
3. [`[Core User Flow]`](#3-core-user-flow) - `[Brief description]`
4. [`[Error/Edge Case Flow]`](#4-erroredge-case-flow) - `[Brief description]`
5. [`[Onboarding Flow]`](#5-onboarding-flow) - `[Brief description]`

---

## `[Number]`. `[Flow Name]`

### Flow Purpose
**Goal**: `[What this user journey accomplishes]`

**Success Criteria**: `[What success looks like for this flow]`

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

### Key Screens/States

**`[Screen Name]`**: `[What users see and can do on this screen]`

**`[Screen Name]`**: `[What users see and can do on this screen]`

**`[Screen Name]`**: `[What users see and can do on this screen]`

### Pain Points & Optimizations

**Current Friction**: `[Where users typically drop off or struggle]`

**Optimization Ideas**: `[Potential improvements to reduce friction]`

**Success Metrics**: `[How you measure flow performance]`

### Error Handling

**Validation Errors**: `[Form field errors, invalid inputs]`

**System Errors**: `[Network issues, server problems]`

**Recovery Paths**: `[How users can get back on track]`

---

## `[Number]`. `[Flow Name]`

### Flow Purpose
**Goal**: `[What this user journey accomplishes]`

**Success Criteria**: `[What success looks like]`

### ASCII Flow Diagram

```
`[Create ASCII diagram showing this flow's path]`
```

### Key Screens/States
`[List main screens and their purpose]`

### Pain Points & Optimizations
`[Document friction points and improvement ideas]`

### Error Handling
`[Document error scenarios and recovery paths]`

---

## 🔗 Inter-Flow Connections

Show how different user journeys connect using flowchart format:

```
[Flow A] ──trigger condition──→ [Flow B] ──completion action──→ [Flow C]
    |
    |──alternative trigger──→ [Flow D] ──user choice──→ [Flow E]
    
[Error Flows] ──system errors or user mistakes──→ [Recovery Paths]
```

**Connection Notes**: `[Additional context about how flows link together. Triggers shown as arrow labels describe specific user actions or conditions that cause navigation between flows.]`