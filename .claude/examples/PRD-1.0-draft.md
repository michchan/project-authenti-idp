# Product Requirements Document (PRD)

## 1. Overview
- **Product Name**: FocusFlow
- **Author**: Product Manager
- **Date**: 2025-08-06
- **Status**: Draft
- **Version**: 0.1

### ✅ Approvals Checklist
- [ ] System Architect
- [ ] Product Owner
- [ ] Business Owner

## 2. Objective
FocusFlow is a browser extension that helps users block distractions and stay productive using custom blocklists and a Pomodoro-style timer.

## 3. Problem Statement
Remote workers and students are constantly distracted by social media and entertainment sites. Existing solutions are either complex or invasive.

## 4. Goals & Non-goals

### Goals
- Blocklist for distracting websites
- Focus timer with work/break intervals
- Daily/weekly focus time tracking

### Non-goals
- Mobile support
- Parental control features
- Integration with other apps

## 5. Success Metrics / KPIs
- >60% weekly active users
- >45 min average session time
- 4.5+ Chrome Store rating

## 6. Target Users
- Remote professionals
- Students
- Self-directed productivity seekers

## 7. Features / Requirements

### Feature 1: Website Blocklist
- **User Story**: As a user, I want to block distracting websites so I can focus during work time.
- **Acceptance Criteria**:
  - Add/remove domains
  - Show motivation message on blocked pages
- **Notes**: Should support wildcards (e.g. *.facebook.com)

### Feature 2: Focus Timer
- **User Story**: As a user, I want to set a 25-minute timer with short breaks so I can work more efficiently.
- **Acceptance Criteria**:
  - Start/pause/reset
  - Notify when break starts
- **Notes**: Follows Pomodoro model

### Feature 3: Focus Dashboard
- **User Story**: As a user, I want to track how much focused time I’ve logged each day.
- **Acceptance Criteria**:
  - Daily bar chart
  - Weekly summary view
- **Notes**: Local tracking only in v1

## 8. UX Design
- **Status**: Pending
- **Entry Link**: _TBD_

## 9. Open Questions / Risks
- Will Chrome’s Manifest V3 limit timer background execution?
- Should we support Firefox in MVP?

## 10. Appendix
- N/A
