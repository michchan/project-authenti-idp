# Product Requirements Document (PRD)

## 1. Overview
- **Product Name**: FocusFlow
- **Author**: Product Manager
- **Date**: 2025-08-14
- **Status**: Final
- **Version**: 1.1

### ✅ Approvals Checklist
- System Architect
- Product Owner
- Business Owner

## 2. Objective
FocusFlow is a productivity browser extension that helps users reduce digital distractions by blocking specific websites, using a Pomodoro-style timer, and visualizing focus time through a dashboard. The goal is to promote deep work and habit formation for remote workers and students.

## 3. Problem Statement
Distractions from websites such as social media and news platforms significantly reduce productivity. Users currently rely on fragmented solutions that are either too complex or not customizable enough. A lightweight, focused browser extension can meet this need without friction.

## 4. Goals & Non-goals

### Goals
- Users can create a personalized blocklist of distracting websites.
- A focus timer allows users to work in intervals with configurable breaks.
- The system tracks focused time and displays it through a daily/weekly dashboard.
- Designed to be minimal, fast, and privacy-conscious.

### Non-goals
- No mobile version in MVP.
- No account system or cross-device sync in v1.
- No parental control or team management.
- No integrations (Slack, Google Calendar) in v1.

## 5. Success Metrics / KPIs
- ≥ 60% weekly active users after 4 weeks.
- ≥ 45 minutes of average daily usage per active user.
- ≥ 4.5 rating on Chrome Web Store after 100 reviews.
- ≥ 40% repeat usage within 7 days after first install.

## 6. Target Users
- **Primary**: Remote knowledge workers (ages 25–40) who use Chrome/Firefox and want help focusing.
- **Secondary**: Students and freelancers who need a simple tool to block distractions.
- Users value minimalism, productivity, and control over their workflow.

## 7. Features / Requirements

### Feature 1: Website Blocklist
- **User Story**: As a user, I want to block distracting websites during focus time so that I can stay productive.
- **Acceptance Criteria**:
  - Users can add/remove URLs or wildcard domains.
  - Blocked pages show a full-screen motivational overlay.
  - Blocking is only active when timer is running.
- **Notes**: Must support Manifest V3 limitations.

### Feature 2: Focus Timer
- **User Story**: As a user, I want a work/break timer so I can work in intervals and avoid burnout.
- **Acceptance Criteria**:
  - Default to 25-minute work / 5-minute break.
  - Ability to start/pause/reset timer.
  - Desktop notifications when timer ends.
- **Notes**: Future update will allow custom durations.

### Feature 3: Focus Dashboard
- **User Story**: As a user, I want to view how much time I spent focused so I can track my progress.
- **Acceptance Criteria**:
  - Daily chart showing minutes focused.
  - Weekly summary (last 7 days).
  - Local storage of history (no backend).
- **Notes**: No export or sync in v1.

## 8. UX Design
- **Status**: Complete
- **Entry Link**: [/docs/design/ux/user-journeys-1.0md](/docs/design/ux/user-journeys-1.0md)

## 10. Open Questions / Risks
- None at this time. All critical questions addressed during review cycles.

## 11. Appendix
- [UX Design Board](https://figma.com/file/focusflow-final-wireframes)
- [Competitor Benchmarking Sheet](https://example.com/benchmark)
- Glossary:
  - **Pomodoro**: A productivity technique involving 25-minute work blocks with breaks.
  - **Manifest V3**: The latest standard for Chrome Extensions defining permissions, background processes, etc.
