# 🚀 Epic Planning Guidelines

Comprehensive guidance for creating effective epics using the epic template.

---

## 🎯 Purpose & When to Use

**Purpose**: Document large features or initiatives that require multiple user stories and potentially span multiple development cycles.

**When to use**:
- Planning major features that will take multiple sprints
- Organizing related user stories under a common theme
- Communicating feature scope to stakeholders
- Tracking progress on large initiatives
- Coordinating work across multiple teams

---

## 📋 Epic Structure Best Practices

### Epic Title
- **Be specific and outcome-focused**: "Enable Single Sign-On for All Applications" vs. "Authentication Improvements"
- **Include version alignment**: Ensure epic aligns with your product roadmap version
- **Use action verbs**: Start with verbs like "Enable", "Implement", "Add", "Improve"

### User Story Format
- **Follow the classic format**: "As a [user role], I want [goal], so that [benefit]"
- **Be specific about the user role**: Avoid generic "user" - use "admin", "end user", "developer", etc.
- **Focus on business value**: The "so that" should clearly articulate why this matters

### Description Section
- **Keep it concise**: 1-2 sentences maximum
- **Focus on business value**: Why is this epic important?
- **Avoid technical details**: Save implementation details for individual user stories

---

## 🎯 Acceptance Criteria Guidelines

### Epic-Level Criteria
- **Focus on outcomes, not outputs**: "Users can log in via SSO" vs. "SSO integration is built"
- **Make them testable**: Each criterion should be verifiable
- **Include quality gates**: Performance, security, accessibility requirements
- **Keep them high-level**: Detailed acceptance criteria belong in individual user stories

### Common Criteria Categories
- **Functional requirements**: Core capabilities the epic must deliver
- **Performance requirements**: Speed, scalability, reliability targets
- **Security requirements**: Authentication, authorization, data protection
- **Accessibility requirements**: WCAG compliance, keyboard navigation, screen reader support
- **Integration requirements**: How the epic connects with existing systems

---

## 📊 User Story Management

### Story Breakdown
- **Keep stories independent**: Each story should deliver value on its own
- **Size appropriately**: Stories should fit within 1-2 sprints
- **Maintain traceability**: Each story should clearly contribute to epic goals
- **Prioritize ruthlessly**: Not all stories need to be built in the first release

### Status Tracking
- **Update regularly**: Keep status current to provide accurate progress visibility
- **Use consistent statuses**: Stick to the defined status legend
- **Track blockers**: Use "Blocked" status and document what's needed to unblock
- **Celebrate completion**: Move to "Done" only when story is fully implemented and tested

### Estimation Guidelines
- **Use consistent units**: Story points, hours, or t-shirt sizes - but be consistent
- **Include the whole team**: Estimation should involve developers, designers, and testers
- **Account for unknowns**: Add buffer for stories with high uncertainty
- **Refine over time**: Initial estimates will be rough - refine as you learn more

---

## 📈 Success Metrics

### Choosing Metrics
- **Align with business goals**: Metrics should connect to broader company objectives
- **Make them measurable**: Avoid subjective metrics that can't be quantified
- **Set realistic targets**: Ambitious but achievable improvements
- **Include leading and lagging indicators**: Both predictive and result metrics

### Common Epic Metrics
- **Usage metrics**: Adoption rates, feature usage, user engagement
- **Performance metrics**: Load times, error rates, system throughput
- **Business metrics**: Conversion rates, revenue impact, cost savings
- **User satisfaction**: NPS scores, support ticket volume, user feedback

### Measurement Planning
- **Establish baselines**: Know your starting point before implementing changes
- **Define measurement methods**: How will you collect and analyze the data?
- **Set review cadence**: How often will you check progress on metrics?
- **Plan for iteration**: Be prepared to adjust based on early results

---

## 🔗 Dependency Management

### Types of Dependencies
- **Epic dependencies**: Other large initiatives that must be completed first
- **Team dependencies**: Work that other teams must complete
- **System dependencies**: Technical infrastructure or platform changes
- **External dependencies**: Third-party services, regulatory approvals, vendor deliverables

### Managing Dependencies
- **Identify early**: Don't wait until sprint planning to discover dependencies
- **Communicate proactively**: Keep dependent teams informed of your timeline
- **Plan for delays**: Build buffer into your timeline for dependency delays
- **Document clearly**: Make dependencies visible to all stakeholders

### Risk Mitigation
- **Have backup plans**: What if a critical dependency is delayed?
- **Regular check-ins**: Monitor dependency status throughout epic development
- **Escalation paths**: Know who to contact when dependencies become blockers

---

## 🗓️ Implementation Planning

### Phased Approach
- **Start with MVP**: What's the minimum viable version of this epic?
- **Plan iterations**: How will you build and improve over multiple releases?
- **Consider user feedback**: How will you incorporate learning between phases?
- **Balance risk and value**: Deliver value early while managing technical risk

### Team Coordination
- **Cross-functional planning**: Include all disciplines in planning
- **Communication cadence**: Regular standups, reviews, and retrospectives
- **Role clarity**: Who's responsible for what aspects of the epic?
- **Decision-making process**: How will you resolve conflicts and make trade-offs?

---

## ✅ Quality Assurance

### Before Starting Development
- **Stakeholder alignment**: All key stakeholders agree on epic scope and priority
- **Technical feasibility**: Engineering team has validated the approach
- **Design readiness**: UI/UX designs are complete and approved
- **Resource planning**: Team has capacity and necessary skills

### During Development
- **Regular progress reviews**: Weekly check-ins on story completion and metrics
- **Scope management**: Handle scope changes through proper change control
- **Quality gates**: Each story meets acceptance criteria before being marked done
- **Risk monitoring**: Watch for emerging risks and adjust plans accordingly

### Epic Completion
- **All acceptance criteria met**: Every epic-level criterion is satisfied
- **Metrics validation**: Success metrics show expected improvements
- **Documentation updated**: User guides, technical docs, and runbooks are current
- **Team retrospective**: Capture lessons learned for future epics

---

## 🚨 Common Pitfalls to Avoid

### Planning Issues
- **Scope creep**: Adding features without proper change control
- **Under-estimation**: Not accounting for complexity, dependencies, or unknowns
- **Poor decomposition**: User stories that are too large or interdependent
- **Missing stakeholders**: Not involving all necessary parties in planning

### Execution Issues
- **Inadequate communication**: Teams working in silos without coordination
- **Ignoring metrics**: Not tracking progress toward success metrics
- **Poor dependency management**: Being blindsided by blocking dependencies
- **Quality shortcuts**: Rushing to meet deadlines at the expense of quality

### Documentation Issues
- **Stale status updates**: Epic shows inaccurate progress
- **Missing context**: New team members can't understand epic goals
- **Poor traceability**: Can't connect individual stories to epic outcomes
- **Incomplete retrospectives**: Not capturing lessons for future epics

---

## 💡 Epic Success Tips

1. **Start with why**: Clearly articulate the business value before diving into features
2. **Think in outcomes**: Focus on what users will be able to do, not what you'll build
3. **Plan for learning**: Build feedback loops to validate assumptions
4. **Communicate constantly**: Over-communicate progress, blockers, and changes
5. **Celebrate milestones**: Recognize progress to maintain team motivation
6. **Stay flexible**: Be prepared to adjust based on new information
7. **Document decisions**: Record the reasoning behind key choices
8. **Plan for support**: Consider ongoing maintenance and user support needs

Remember: Epics are vehicles for delivering significant user value. They should be outcome-focused, well-planned, and clearly communicated to all stakeholders.