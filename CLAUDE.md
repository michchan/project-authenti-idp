# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AuthentiIDP** is a centralized identity provider service for small-scale personal applications (similar to Facebook/Google SSO). The project enables single sign-on (SSO) authentication across multiple applications with minimal development overhead.

**Current Status**: Stage 2 - UI Design, stories and system design (completed UI mockups)

## Critical Workflow Reference

**MANDATORY**: Always read and keep [workflow.md](/.agent-context/workflow.md) in memory before answering any project-related questions. This contains the complete project workflow, team roles, and process details that override any default behaviors.

## Architecture & Structure

### Agent-Based Development Process

The project uses a structured agent-based workflow with specific roles:
- **Product Manager**: PRD creation and stakeholder coordination  
- **UX Designer**: User journeys and wireframes
- **UI Designer**: High-fidelity HTML mockups and design systems
- **System Architect**: Technical architecture and system design
- **Security Expert**: Threat models and security assessments
- **Product Owner**: Epic/story creation and sprint planning
- **Frontend/Backend Engineers**: Implementation
- **QA Engineer**: Automated testing
- **DevOps Engineer**: Infrastructure and deployment

### Documentation Structure

```
docs/v1/
├── PRD-1.0-draft.md                    # Product requirements
├── architecture/                       # System design docs
│   ├── system-architecture-1.0.md
│   ├── service-responsibilities-1.0.md
│   ├── flows/                          # Authentication flows
│   └── technical-considerations-1.0.md
├── epics/                             # Feature epics
├── ui-ux/                             # Design documents
│   ├── user-journeys-1.0.md
│   ├── wireframes-1.0.md
│   ├── ui-design-system-1.0.md
│   └── mockups/                       # HTML prototypes
└── sprints/                           # Sprint planning (future)
```

### Templates and Guidelines System

All work follows structured templates and guidelines in `.agent-context/`:
- **Templates**: `.agent-context/templates/` - Document templates for consistent output
- **Guidelines**: `.agent-context/guidelines/` - Process guidelines for each discipline
- **Examples**: `.agent-context/examples/` - Reference implementations

### Story Status Flow

Stories progress through: Draft → Backlog → Planned in Sprint → In-progress → Code Review → Integration Testing → E2E Testing → PO Review → Security Review → Configuring DevOps → UAT → Done

## UI Mockup System

### Completed High-Fidelity Prototypes

The project includes 14 complete HTML mockups covering all user journeys:
- **Authentication**: Login, registration, email verification, password reset
- **SSO**: Consent screens, application selection  
- **Profile**: Settings, connected apps management
- **Developer**: Dashboard, integration guide
- **Sample App**: Demo application with protected content

### Mockup Architecture

- **Navigation hub**: `docs/v1/ui-ux/mockups/index.html`
- **Shared styling**: `styles.css` with comprehensive design system
- **Shared functionality**: `theme-manager.js` for consistent theme management
- **DRY principle**: No duplicate JavaScript across files

### Key Design Principles

1. **Complete coverage**: Every wireframe screen and user journey step has a mockup
2. **Functional navigation**: All links work between mockups
3. **Consistent styling**: Unified design system across all screens
4. **Accessibility**: WCAG 2.1 AA compliance
5. **No code duplication**: Shared modules for common functionality

## Development Commands

No build/test commands are currently defined as this is a documentation-driven design phase project. Implementation will begin in Stage 3.

## Working with Specialized Agents

When tasks require specialized expertise, use the appropriate agent type:
- `product-manager`: PRD creation and requirements management
- `ux-designer`: User experience design and validation
- `ui-designer`: Visual design and HTML mockup creation  
- `system-architect`: Technical architecture decisions
- `security-expert`: Security assessments and threat modeling

## File Organization Rules

- Use absolute paths with leading slashes in markdown links (e.g., `/docs/v1/file.md`)
- Follow version structure: `/docs/v[major]/` (e.g., `/docs/v1/`)
- Maintain document status tracking in headers
- Reference templates and guidelines from `.agent-context/` structure

## Key Constraints

- Target: Small-scale applications (<50 users initially)
- Zero-cost MVP using free tiers
- Minimal infrastructure complexity
- Focus on developer experience and ease of integration
- No enterprise features in v1.0 (SAML, LDAP, multi-tenancy)