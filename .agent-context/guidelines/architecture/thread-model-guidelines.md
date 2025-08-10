# Threat Modeling Guidelines (STRIDE/DREAD)

## Purpose
To identify, evaluate, and mitigate potential security threats in critical system flows before implementation.

## Roles
- **Security Expert** — Leads threat identification, risk scoring, and mitigation proposals.
- **System Architect** — Provides architecture context, data flow diagrams, and confirms feasibility of mitigations.

## When to Perform
- After **system architecture draft** is complete.
- Before **API contracts or implementation** start.

## Required Inputs
- Updated system architecture diagrams.
- List of **critical flows** (from product/UX definitions).
- Data classification policy (if available).

## Process

### Step 1 — Select Critical Flows
- Focus on flows where compromise would cause high impact.
- Examples: Authentication, payment processing, sensitive data storage.

### Step 2 — STRIDE Analysis
For each critical flow, identify threats under STRIDE:
- **S**poofing — Impersonating users/services.
- **T**ampering — Modifying data or code.
- **R**epudiation — Denying an action without proof.
- **I**nformation Disclosure — Unauthorized information access.
- **D**enial of Service — Service disruption.
- **E**levation of Privilege — Gaining unauthorized capabilities.

### Step 3 — DREAD Scoring
Rate each identified threat:
- **Damage** — Potential harm if exploited.
- **Reproducibility** — Ease of reproducing the attack.
- **Exploitability** — Effort/skill required.
- **Affected Users** — Proportion of users impacted.
- **Discoverability** — Likelihood of discovery by attackers.
> Score each category from 0–10, average for risk rating.

### Step 4 — Propose Mitigations
- Short-term mitigations (quick fixes).
- Long-term mitigations (architectural changes).
- Align mitigations with project timeline.

### Step 5 — Review & Sign-off
- Document decisions, rationale, and residual risk.
- Get review and sign-off by System Architect