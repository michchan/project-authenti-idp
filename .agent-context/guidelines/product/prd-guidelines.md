# 📋 Product Requirements Document (PRD) Guidelines

Comprehensive guidance for creating effective Product Requirements Documents using the PRD template.

---

## 🎯 Purpose & When to Use

**Purpose**: Define what you're building, why you're building it, who it's for, and how success will be measured - serving as the single source of truth for product development.

**When to use**:
- Starting development on a new product or major feature
- Aligning stakeholders on product vision and scope
- Communicating requirements to engineering, design, and other teams
- Getting formal approval before significant development investment
- Documenting decisions for future reference and onboarding

---

## 📝 PRD Writing Process

### Before You Start
1. **Conduct user research**: Understand actual user needs and pain points
2. **Validate the problem**: Ensure the problem is real and worth solving
3. **Define success metrics**: Know how you'll measure if the solution works
4. **Gather stakeholder input**: Include perspectives from all relevant teams
5. **Review competitive landscape**: Understand existing solutions and opportunities

### Draft → Review → Final Cycle
1. **Draft stage**: Focus on getting ideas down, expect incompleteness
2. **Stakeholder review**: Circulate for feedback from key team members
3. **Refinement**: Address feedback, fill gaps, resolve open questions
4. **Final approval**: Get sign-off from all required approvers
5. **Living document**: Update as requirements evolve during development

---

## 📋 Section-by-Section Guidelines

### 1. Overview
**Purpose**: Provide essential document metadata and approval tracking.

**Best practices**:
- **Product Name**: Use the actual product/feature name, not codenames
- **Author**: Include primary author and contributors if multiple people involved
- **Date**: Update date when making significant revisions
- **Status**: Be clear about document maturity (Draft/In Review/Final)
- **Version**: Use semantic versioning (1.0, 1.1, 2.0) for major vs. minor changes

**Approvals Checklist**:
- Customize roles based on your organization (may include: Engineering Lead, Design Lead, Legal, Security, etc.)
- Get actual sign-offs before marking as "Final"
- Use checkboxes to track approval progress

### 2. Objective  
**Purpose**: Provide a clear, concise summary of what you're building and why.

**Writing guidelines**:
- **Keep it concise**: 1-2 sentences maximum
- **Focus on user value**: What problem does this solve for users?
- **Avoid technical jargon**: Should be understandable by any stakeholder
- **Be specific**: Vague objectives lead to scope creep

**Good example**: "FocusFlow is a productivity browser extension that helps users reduce digital distractions by blocking specific websites, using a Pomodoro-style timer, and visualizing focus time through a dashboard."

**Poor example**: "Build a productivity tool that makes users more productive."

### 3. Problem Statement
**Purpose**: Clearly articulate the problem you're solving and for whom.

**Include**:
- **Who has the problem**: Specific user segments or personas
- **What the problem is**: Concrete pain points, not assumptions
- **How it's currently addressed**: Existing workarounds or solutions
- **Why current solutions are inadequate**: Gaps that justify building something new

**Research-backed approach**:
- Support with user research data, analytics, or market research
- Include user quotes when possible
- Quantify the problem if you have data (e.g., "Users spend 2.5 hours daily on distracting websites")

### 4. Goals & Non-goals
**Purpose**: Define scope boundaries to prevent feature creep and misaligned expectations.

**Goals section**:
- **Prioritize ruthlessly**: List most important outcomes first
- **Be specific**: Vague goals lead to misaligned development
- **Focus on outcomes**: What users will be able to accomplish, not what you'll build
- **Make them measurable**: Connect to success metrics when possible

**Non-goals section**:
- **Prevent scope creep**: Explicitly state what's out of scope
- **Address obvious questions**: Anticipate what stakeholders might expect
- **Include future considerations**: "Not in v1 but potentially later" items
- **Be diplomatic**: Explain why certain features aren't included

### 5. Success Metrics / KPIs
**Purpose**: Define how you'll measure if the product achieves its intended outcomes.

**Metric selection**:
- **Align with business goals**: Connect to broader company objectives
- **Mix leading and lagging indicators**: Both predictive and outcome metrics
- **Be realistic**: Ambitious but achievable targets
- **Include timeframes**: When you expect to see results

**Common metric categories**:
- **Adoption**: Download rates, sign-up rates, activation rates
- **Engagement**: Daily/weekly active users, session duration, feature usage
- **Retention**: Return usage, churn rates, long-term engagement
- **Business impact**: Revenue, cost savings, operational efficiency
- **Quality**: User satisfaction, support ticket volume, error rates

### 6. Target Users
**Purpose**: Define who will use this product and how they differ from each other.

**User definition**:
- **Primary vs. secondary**: Focus on primary users but acknowledge others
- **Demographics and psychographics**: Age, role, behavior patterns, motivations
- **Use cases**: How different user types will interact with the product
- **Pain points**: Specific problems each user segment experiences

**Avoid generic users**: "Anyone who wants to be productive" is too broad. "Remote knowledge workers who struggle with social media distractions" is specific and actionable.

### 7. Features / Requirements
**Purpose**: Break down the product into specific, implementable features.

**Feature documentation structure**:
- **User story format**: "As a [user type], I want [capability] so that [benefit]"
- **Acceptance criteria**: Specific, testable conditions that define "done"
- **Implementation notes**: Technical constraints, business rules, edge cases

**Writing effective user stories**:
- **Focus on user value**: Why does the user want this capability?
- **Be specific about the user**: Different user types may have different needs
- **Avoid solution bias**: Focus on what users need, not how to implement it

**Acceptance criteria best practices**:
- **Make them testable**: QA should be able to verify each criterion
- **Cover edge cases**: What happens when things go wrong?
- **Include non-functional requirements**: Performance, accessibility, security
- **Be complete**: Don't leave gaps that lead to assumptions

### 8. UX Design
**Purpose**: Connect product requirements to design deliverables.

**Status tracking**:
- **Pending**: Design work hasn't started
- **In Progress**: Actively being worked on
- **Complete**: Designs are finalized and approved

**Design integration**:
- **Link to actual designs**: Wireframes, mockups, prototypes
- **Reference user journeys**: How designs connect to user flows
- **Include design rationale**: Why certain design decisions were made
- **Note responsive considerations**: How designs work across devices

### 9. Open Questions / Risks
**Purpose**: Track unresolved issues and potential problems.

**Open questions**:
- **Technical feasibility**: Can this be built within constraints?
- **User behavior**: Will users actually use this feature as intended?
- **Business model**: How does this connect to revenue or cost savings?
- **Resource availability**: Do we have the right people and time?

**Risk management**:
- **Technical risks**: Dependencies, performance, scalability concerns
- **Market risks**: Competition, user adoption, market changes
- **Resource risks**: Team capacity, skill gaps, budget constraints
- **Regulatory risks**: Legal, security, privacy considerations

### 10. Appendix
**Purpose**: Provide supporting documentation and definitions.

**Supporting documentation**:
- **Research findings**: User interviews, surveys, analytics
- **Competitive analysis**: How similar products work
- **Technical specifications**: Architecture decisions, API requirements
- **Design files**: Links to Figma, Sketch, or other design tools

**Glossary**:
- **Technical terms**: Definitions for domain-specific language
- **Business terms**: Company-specific terminology
- **User terms**: How users refer to concepts vs. internal naming

---

## 📊 PRD Quality Assessment

### Content Quality Checklist
- [ ] Problem is clearly defined and research-backed
- [ ] Success metrics are specific and measurable
- [ ] Target users are well-defined with specific pain points
- [ ] Features include complete user stories and acceptance criteria
- [ ] Scope boundaries are clear (goals vs. non-goals)

### Stakeholder Alignment Checklist  
- [ ] All required stakeholders have reviewed and provided input
- [ ] Open questions have been resolved or have clear owners
- [ ] Technical feasibility has been validated by engineering
- [ ] Design implications have been considered and planned
- [ ] Business impact and resource requirements are understood

### Documentation Quality Checklist
- [ ] Writing is clear and jargon-free
- [ ] All sections are complete and well-reasoned
- [ ] Links to supporting documentation are current and accessible
- [ ] Document version and approval status are current
- [ ] Format is consistent and professional

---

## 🚨 Common PRD Pitfalls to Avoid

### Content Issues
- **Solution bias**: Prescribing implementation details instead of focusing on user needs
- **Scope creep**: Adding features without clear justification or priority
- **Vague requirements**: Acceptance criteria that can't be objectively tested
- **Missing edge cases**: Not considering error states, empty states, or unusual scenarios

### Process Issues
- **Inadequate research**: Building based on assumptions rather than user evidence
- **Poor stakeholder alignment**: Moving forward without proper buy-in
- **Outdated documentation**: PRD doesn't reflect current understanding or decisions
- **No success measurement**: Launching without clear metrics to evaluate effectiveness

### Communication Issues
- **Too technical**: Using jargon that non-technical stakeholders can't understand
- **Too generic**: Requirements so broad they provide no useful guidance
- **Inconsistent terminology**: Using different terms for the same concepts
- **Missing context**: Not explaining why certain decisions were made

---

## 💡 PRD Success Tips

1. **Start with the problem**: Don't lead with your solution idea
2. **Write for your audience**: Consider who will read and use this document
3. **Be ruthlessly specific**: Vague requirements lead to misaligned implementations
4. **Use real examples**: Concrete scenarios are clearer than abstract descriptions
5. **Update regularly**: Keep the PRD current as you learn and iterate
6. **Get early feedback**: Share drafts for input before finalizing
7. **Connect to user research**: Ground requirements in actual user data
8. **Plan for measurement**: Include instrumentation and analytics requirements
9. **Consider all user types**: Primary, secondary, and edge case users
10. **Document decisions**: Record why certain choices were made for future reference

---

## 🔄 PRD Lifecycle Management

### Draft Stage
- **Focus on completeness**: Get all ideas and requirements documented
- **Expect iteration**: Early drafts should be rough and incomplete
- **Gather broad input**: Cast a wide net for stakeholder feedback
- **Research thoroughly**: Validate assumptions with data and user research

### Review Stage  
- **Structured feedback**: Use specific review criteria and deadlines
- **Address conflicts**: Resolve disagreements about scope or approach
- **Technical validation**: Confirm feasibility with engineering team
- **Business alignment**: Ensure connection to company goals and strategy

### Final Stage
- **Formal approval**: Get documented sign-offs from required stakeholders
- **Baseline established**: Approved PRD becomes the development baseline
- **Change control**: Process for handling scope changes after approval
- **Regular reviews**: Scheduled check-ins to ensure PRD remains accurate

### Maintenance
- **Version control**: Track significant changes with version updates
- **Impact assessment**: Evaluate how changes affect timeline and resources
- **Stakeholder communication**: Keep all parties informed of important updates
- **Post-launch review**: Compare actual results to PRD predictions for learning

### ⚠️ Important: PRD File Management
**Don't create multiple copies for status updates**: When updating PRD status from Draft → In Review → Final, update the same file rather than creating new copies. Maintain only ONE PRD file per product version (e.g., `docs/v1/PRD-1.0.md`).

**Why this matters**:
- Prevents confusion about which document is current
- Maintains single source of truth for requirements
- Keeps document history in one place
- Reduces storage and maintenance overhead
- Ensures all stakeholders reference the same document

---

## 📚 PRD Templates and Examples

### Template Usage
- **PRD-[version].md template**: Provides structure and prompts for each section
- **Fill in all sections**: Even if brief, every section provides value
- **Customize for your context**: Adapt sections based on product type and organization
- **Maintain consistency**: Use the same format across all PRDs in your organization

### Learning from Examples
- **Draft vs. Final comparison**: See how PRDs evolve through the review process
- **Study successful PRDs**: Learn from products that achieved their goals
- **Analyze scope decisions**: Understand how goals and non-goals drive focus
- **Review metric achievement**: How did actual results compare to predicted success metrics?

Remember: A great PRD doesn't guarantee product success, but it significantly increases the odds by ensuring everyone is aligned on what success looks like and how to achieve it.