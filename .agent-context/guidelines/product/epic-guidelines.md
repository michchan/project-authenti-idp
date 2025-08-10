# 🚀 Epic Planning Guidelines

Guide for creating effective epics using the epic template.

---

## 🎯 Purpose & When to Use

**Purpose**: Document large features requiring multiple user stories across development cycles.

**When to use**:
- Planning major features spanning multiple sprints
- Organizing related user stories under a common theme
- Communicating feature scope to stakeholders
- Tracking progress on large initiatives
- Coordinating cross-team work

---

## 📋 Epic Structure Best Practices

### Epic Title
- **Be specific and outcome-focused**: "Enable Single Sign-On for All Applications" vs. "Authentication Improvements"
- **Align with roadmap version**
- **Use action verbs**: "Enable", "Implement", "Add", "Improve"

### User Story Format
- **Follow classic format**: "As a [user role], I want [goal], so that [benefit]"
- **Be specific about user role**: Use "admin", "end user", "developer" vs. generic "user"
- **Focus on business value**: Clear "so that" rationale

### Description Section
- **Keep concise**: 1-2 sentences maximum
- **Focus on business value**
- **Avoid technical details**: Save for individual user stories

---

## 🎯 Acceptance Criteria Guidelines

### Epic-Level Criteria
- **Focus on outcomes, not outputs**: "Users can log in via SSO" vs. "SSO integration is built"
- **Make them testable**: Each criterion must be verifiable
- **Include quality gates**: Performance, security, accessibility requirements
- **Keep high-level**: Detailed criteria belong in individual user stories

### Common Criteria Categories
- **Functional**: Core capabilities the epic must deliver
- **Performance**: Speed, scalability, reliability targets
- **Security**: Authentication, authorization, data protection
- **Accessibility**: WCAG compliance, keyboard navigation, screen reader support
- **Integration**: How the epic connects with existing systems

---

## 📊 User Story Management

### Story Breakdown
- **Keep stories independent**: Each story delivers value on its own
- **Size appropriately**: Stories fit within 1-2 sprints
- **Maintain traceability**: Each story contributes to epic goals
- **Prioritize ruthlessly**: Not all stories need first release
- **Map dependencies clearly**: Identify which stories depend on others using story IDs

### Status Tracking
- **Update regularly**: Keep status current for accurate progress visibility
- **Use consistent statuses**: Stick to defined status legend
- **Track blockers**: Use "Blocked" status and document unblocking needs
- **Celebrate completion**: Move to "Done" only when fully implemented and tested

### Story Ordering and Dependencies
- **Sort by priority and dependencies**: Order stories so dependent stories appear after their prerequisites
- **Use story IDs for dependencies**: Reference dependent stories by their ID (e.g., US-101, US-102)
- **Support multiple dependencies**: Stories can depend on multiple other stories (e.g., US-102, US-103)
- **Plan development order**: Stories with no dependencies should be developed first

### Estimation Guidelines
- **Use consistent units**: Hours or t-shirt sizes
- **Include whole team**: Involve developers, designers, and testers
- **Account for unknowns**: Add buffer for high uncertainty stories
- **Refine over time**: Initial estimates are rough - refine as you learn

---



## 🗓️ Implementation Planning

### Phased Approach
- **Start with MVP**: What's the minimum viable version?
- **Plan iterations**: How to build and improve over multiple releases
- **Consider user feedback**: How to incorporate learning between phases
- **Balance risk and value**: Deliver value early while managing technical risk

### Team Coordination
- **Cross-functional planning**: Include all disciplines
- **Communication cadence**: Regular standups, reviews, retrospectives
- **Role clarity**: Who's responsible for what aspects
- **Decision-making process**: How to resolve conflicts and make trade-offs

---

## ✅ Quality Assurance

### Before Starting Development
- **Stakeholder alignment**: Key stakeholders agree on epic scope and priority
- **Technical feasibility**: Engineering team validated approach
- **Design readiness**: UI/UX designs complete and approved
- **Resource planning**: Team has capacity and necessary skills

### During Development
- **Regular progress reviews**: Weekly check-ins on story completion and metrics
- **Scope management**: Handle scope changes through proper change control
- **Quality gates**: Each story meets acceptance criteria before "done"
- **Risk monitoring**: Watch for emerging risks and adjust plans

### Epic Completion
- **All acceptance criteria met**: Every epic-level criterion satisfied
- **Metrics validation**: Success metrics show expected improvements
- **Documentation updated**: User guides, technical docs, runbooks current
- **Team retrospective**: Capture lessons learned for future epics

---

## 🚨 Common Pitfalls to Avoid

### Planning Issues
- **Scope creep**: Adding features without proper change control
- **Under-estimation**: Not accounting for complexity or unknowns
- **Poor decomposition**: User stories too large or interdependent
- **Missing stakeholders**: Not involving all necessary parties

### Execution Issues
- **Inadequate communication**: Teams working in silos
- **Poor progress tracking**: Not monitoring epic completion status
- **Quality shortcuts**: Rushing at expense of quality

### Documentation Issues
- **Stale status updates**: Epic shows inaccurate progress
- **Missing context**: New team members can't understand epic goals
- **Poor traceability**: Can't connect stories to epic outcomes
- **Incomplete retrospectives**: Not capturing lessons for future epics

---

## 💡 Epic Success Tips

1. **Start with why**: Articulate business value before features
2. **Think in outcomes**: Focus on what users will do, not what you'll build
3. **Plan for learning**: Build feedback loops to validate assumptions
4. **Communicate constantly**: Over-communicate progress, blockers, changes
5. **Celebrate milestones**: Recognize progress to maintain motivation
6. **Stay flexible**: Adjust based on new information
7. **Document decisions**: Record reasoning behind key choices
8. **Plan for support**: Consider ongoing maintenance and user support

Remember: Epics are vehicles for delivering significant user value. They should be outcome-focused, well-planned, and clearly communicated to all stakeholders.