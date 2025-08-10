# 📋 Product Requirements Document (PRD) Guidelines

Guidelines for creating effective PRDs using the PRD template.

---

## 🎯 Purpose & When to Use

**Purpose**: Define what, why, who, and how to measure success - the single source of truth for product development.

**When to use**:
- New product or major feature development
- Stakeholder alignment on vision and scope
- Requirements communication to engineering/design teams
- Formal approval before significant investment
- Decision documentation for future reference

---

## 📝 Writing Process

### Before You Start
1. **User research**: Understand actual needs and pain points
2. **Problem validation**: Ensure it's real and worth solving
3. **Success metrics**: Know how you'll measure success
4. **Stakeholder input**: Gather all team perspectives
5. **Competitive review**: Understand existing solutions

### Process
1. **Draft**: Get ideas down, expect incompleteness
2. **Review**: Circulate for stakeholder feedback
3. **Refine**: Address feedback and resolve questions
4. **Approve**: Get required sign-offs
5. **Maintain**: Update as requirements evolve

---

## 📋 Section Guidelines

### 1. Overview
**Purpose**: Document metadata and approval tracking.

**Best practices**:
- **Product Name**: Use actual name, not codenames
- **Author**: Include primary author and contributors
- **Date**: Update on significant revisions
- **Status**: Draft/In Review/Final
- **Version**: Semantic versioning (1.0, 1.1, 2.0)

**Approvals**: Customize for your organization (Engineering, Design, Legal, etc.). Get actual sign-offs before "Final" status.

### 2. Objective  
**Purpose**: Clear, concise summary of what and why.

**Guidelines**:
- 1-2 sentences maximum
- Focus on user value
- Avoid jargon, be specific

**Good**: "FocusFlow blocks distracting websites, uses Pomodoro timers, and visualizes focus time to help users reduce digital distractions."

**Poor**: "Build a productivity tool that makes users more productive."

### 3. Problem Statement
**Purpose**: Articulate the problem and for whom.

**Include**:
- Who has the problem (specific segments)
- What the problem is (concrete pain points)
- Current solutions and their gaps

**Research-backed**: Support with data, user quotes, and quantified problems.

### 4. Goals & Non-goals
**Purpose**: Define scope boundaries to prevent feature creep.

**Goals**: Prioritize ruthlessly, be specific, focus on user outcomes, make measurable.

**Non-goals**: Prevent scope creep, address obvious questions, include future considerations.

### 5. Target Users
**Purpose**: Define user segments and their differences.

**Include**: Primary vs. secondary users, demographics/psychographics, use cases, pain points.

**Be specific**: "Remote knowledge workers struggling with social media distractions" vs. "Anyone who wants to be productive."

### 6. Features / Requirements
**Purpose**: Break down into specific, implementable features.

**Structure**:
- **User stories**: "As [user type], I want [capability] so that [benefit]"
- **Acceptance criteria**: Testable conditions defining "done"
- **Implementation notes**: Constraints, rules, edge cases

**Best practices**: Focus on user value, be user-specific, avoid solution bias, make criteria testable, cover edge cases.

### 7. UX Design
**Purpose**: Connect requirements to design deliverables.

**Status**: Pending/In Progress/Complete

**Include**: Links to designs, user journeys, design rationale, responsive considerations.

### 8. Open Questions / Risks
**Purpose**: Track unresolved issues and problems.

**Questions**: Technical feasibility, user behavior, business model, resource availability.

**Risks**: Technical, Market, Resource, Regulatory concerns.


---

## 📊 Quality Assessment

### Content Quality
- [ ] Problem clearly defined and research-backed
- [ ] Business requirements clearly defined without technical implementation details
- [ ] Target users well-defined with pain points
- [ ] Features include complete user stories and criteria
- [ ] Scope boundaries clear (goals vs. non-goals)

### Stakeholder Alignment
- [ ] Required stakeholders reviewed and provided input
- [ ] Open questions resolved or assigned owners
- [ ] Technical feasibility validated by engineering
- [ ] Design implications considered and planned
- [ ] Business impact and resources understood

### Documentation Quality
- [ ] Writing clear and jargon-free
- [ ] All sections complete and well-reasoned
- [ ] Links current and accessible
- [ ] Version and approval status current
- [ ] Format consistent and professional

---

## ❌ What NOT to Include in PRDs

### Success Metrics / KPIs
**Don't include**: Detailed success metrics, adoption targets, performance KPIs, or measurement frameworks in PRDs.

**Why**: Metrics should be defined and tracked separately by business stakeholders. PRDs focus on requirements, not measurement.

**Alternative**: Reference metrics tracking in a separate business metrics document or dashboard.

### Technical Considerations
**Don't include**: Detailed technical architecture, infrastructure decisions, implementation approaches, or technology stack details in PRDs.

**Why**: Technical decisions should be documented by System Architects in dedicated technical documents. PRDs focus on business requirements.

**Alternative**: Reference technical considerations in separate architecture documentation (technical-considerations.md).

### Implementation Details
**Don't include**: Specific database schemas, API specifications, security implementation details, or deployment configurations.

**Why**: These belong in technical specifications created by engineering teams, not business requirement documents.

---

## 🚨 Common Pitfalls

### Content Issues
- **Solution bias**: Focus on implementation vs. user needs
- **Scope creep**: Adding features without justification
- **Vague requirements**: Untestable acceptance criteria
- **Missing edge cases**: Ignoring error/empty/unusual states

### Process Issues
- **Inadequate research**: Building on assumptions vs. evidence
- **Poor alignment**: Moving forward without buy-in
- **Outdated docs**: PRD doesn't reflect current decisions
- **No measurement**: Launching without success metrics

### Communication Issues
- **Too technical**: Jargon non-technical stakeholders can't understand
- **Too generic**: Requirements too broad for useful guidance
- **Inconsistent terms**: Different words for same concepts
- **Missing context**: No explanation for decisions

---

## 💡 Success Tips

1. **Start with the problem**, not solution
2. **Write for your audience**
3. **Be ruthlessly specific**
4. **Use concrete examples**
5. **Update regularly**
6. **Get early feedback**
7. **Ground in user research**
8. **Plan for measurement**
9. **Consider all user types**
10. **Document decisions**

---

## 🔄 Lifecycle Management

### Draft Stage
- Focus on completeness and thorough research
- Expect iteration and gather broad stakeholder input

### Review Stage  
- Use structured feedback with deadlines
- Address conflicts and validate technical feasibility
- Ensure business alignment

### Final Stage
- Get formal approval and establish baseline
- Set up change control process and regular reviews

### Maintenance
- Track changes with version updates
- Assess impact on timeline/resources
- Communicate updates and conduct post-launch review

### ⚠️ File Management
**Don't create multiple copies**: Update the same file through Draft → Review → Final stages. Maintain ONE PRD file per version (e.g., `docs/v1/PRD-1.0.md`).

**Why**: Prevents confusion, maintains single source of truth, keeps history in one place, reduces overhead.

---

## 📚 Templates and Examples

### Template Usage
- Use PRD-[version].md template structure
- Fill in all sections (even if brief)
- Customize for your context and maintain consistency

### Learning from Examples
- Compare draft vs. final versions
- Study successful PRDs and scope decisions
- Review actual vs. predicted metrics

Remember: Great PRDs significantly increase success odds by ensuring alignment on what success looks like and how to achieve it.