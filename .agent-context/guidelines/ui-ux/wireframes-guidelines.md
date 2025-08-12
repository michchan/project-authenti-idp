# 📐 ASCII Wireframes Guidelines

Guidance for creating ASCII wireframes using the wireframes template.

---

## 🎯 Purpose & When to Use

**Purpose**: Document interface layouts using ASCII art for rapid design communication and developer handoff.

**When to use**: 
- Designing new features or major UI changes
- Communicating layout concepts to development teams
- Creating low-fidelity prototypes for stakeholder review
- Documenting user flows with visual context
- Planning responsive layout behavior

---

## 🔧 Technical Guidelines

### Font Requirements
- **Always use monospaced fonts** for accurate ASCII alignment
- Recommended fonts: Consolas, Monaco, Courier New, SF Mono
- Ensure consistent character width across all symbols

### Layout Standards
- **Width limit**: Keep wireframes under 60 characters wide for readability
- **Box consistency**: Use consistent border styles within each wireframe
- **Spacing**: Include adequate whitespace for readability and visual hierarchy
- **Alignment**: Ensure all ASCII elements align properly in monospace

### Symbol Usage
- Use standard legend consistently across all wireframes
- Create additional product-specific symbols as needed
- Document any custom symbols in your legend
- Maintain consistent spacing around interactive elements

---

## 📝 Content Guidelines

### Realistic Content
- **Use actual product text**, not generic placeholders like "Lorem ipsum"
- Show realistic data volumes and content types
- Include actual button labels, form field names, error messages
- Demonstrate real content length patterns (short vs. long text)

### State Coverage
Include all relevant interface states:
- **Normal state**: Default appearance
- **Loading state**: Loading indicators, disabled elements
- **Error state**: Validation errors, system errors
- **Success state**: Confirmation messages, completed actions
- **Empty state**: No data, first-time use scenarios

### Accessibility Considerations
- Include ARIA labels and roles in wireframe notes
- Document keyboard navigation paths
- Ensure touch targets meet minimum size requirements (44px)
- Note screen reader announcements for dynamic content

---

## 🏗️ Wireframe Creation Process

### Step 1: Define User Goal
- What is the user trying to accomplish on this screen?
- What's the primary action or decision point?
- How does this fit into the broader user journey?

### Step 2: Identify Key Elements
- What information is essential for the user goal?
- What actions must be available?
- What secondary/tertiary elements support the goal?

### Step 3: Create Layout Structure
- Start with basic box structure using ASCII borders
- Place primary elements first (headers, main content)
- Add interactive elements (buttons, forms, navigation)
- Include supporting elements (footer, secondary actions)

### Step 4: Add Interaction Details
- Show clickable elements with consistent formatting
- Include form validation and error states
- Document hover/focus states in notes
- Add navigation flow indicators

### Step 5: Document All States
- Create variants for loading, error, success states
- Show responsive behavior notes
- Include accessibility considerations
- Document conditional logic

### Step 6: Connect to Flow
- Show how users arrive at this screen
- Document exit points and next steps
- Include error recovery paths
- Note branching logic

---

## 🔗 Flow Documentation

### Linear Flows
```
Screen A → Screen B → Screen C
```
Use simple arrows for straightforward progressions.

### Conditional Flows
```
Screen A → (condition met) → Screen B
         → (condition not met) → Screen C
```
Use parenthetical conditions to show branching logic.

### Complex Flows
```
Login → (new user) → Onboarding → Dashboard
      → (existing user) → Dashboard
      → (error) → Error Recovery → Login
```
Show all possible paths including error scenarios.

### Cross-Flow Connections
Document how different feature flows connect:
- Entry points from other flows
- Exit points leading to other flows  
- Shared screens or components
- Navigation patterns between flows
- **Trigger information**: Specify what user actions cause navigation between screens
- **Flowchart format**: Use flowcharts instead of simple arrows to show connections

---

## 📱 Responsive Considerations

### Mobile Adaptations
- Note layout changes for smaller screens
- Document navigation changes (hamburger menus, etc.)
- Consider touch target sizing
- Plan for content prioritization

### Desktop Considerations
- Show full navigation and sidebar layouts
- Document hover states and interactions
- Consider multi-column layouts
- Plan for larger content areas

### Cross-Device Flow
- Note where flows differ between devices
- Document device-specific features
- Consider offline/online scenarios
- Plan for different input methods

---

## 📋 Documentation Standards

### Version Alignment
- Ensure wireframes match your PRD version
- Update wireframes when requirements change
- Track wireframe revision history
- Maintain consistency with user journey flows

### Reference Linking
- Connect wireframes to related user stories
- Link to design system components
- Reference technical specifications
- Include links to user research findings

### Review Process
- Establish regular review cycles with stakeholders
- Get developer feedback on technical feasibility
- Validate with user research when available
- Update based on usability testing results

### Update Tracking
- Note when wireframes need updates based on development feedback
- Track which wireframes are implemented vs. planned
- Maintain changelog for significant revisions
- Archive outdated wireframe versions

---

## ✅ Quality Checklist

Before considering wireframes complete:

### Content Quality
- [ ] All text uses realistic, product-specific content
- [ ] Button labels and actions are clear and actionable
- [ ] Error messages are helpful and specific
- [ ] Content length represents real usage patterns

### Technical Quality
- [ ] ASCII alignment correct in monospace font
- [ ] All interactive elements clearly marked
- [ ] Navigation flows documented
- [ ] Responsive behavior noted

### Completeness
- [ ] All major user states represented
- [ ] Error and edge cases included
- [ ] Flow connections documented
- [ ] Accessibility considerations noted

### Stakeholder Review
- [ ] Development team reviewed for feasibility
- [ ] Product team approved user flows
- [ ] Design team validated layout concepts
- [ ] User research findings incorporated

---

## 🚨 Common Pitfalls to Avoid

### Technical Issues
- **Inconsistent ASCII formatting** - Use consistent symbols and spacing
- **Too much detail** - Focus on layout and flow, not visual design
- **Poor alignment** - Test wireframes in monospace fonts before sharing
- **Missing states** - Don't forget loading, error, and empty states

### Content Issues
- **Generic placeholder text** - Use realistic, product-specific content
- **Unrealistic data volumes** - Show actual content patterns
- **Missing edge cases** - Include error scenarios and unusual data
- **Inconsistent terminology** - Use same terms as your product
- **Design system details** - Including typography, colors, spacing specifications (UI designer concern)
- **Responsive behavior details** - Including specific breakpoints and adaptive features (UI designer concern)

### Process Issues
- **No stakeholder review** - Get feedback before development starts
- **Missing updates** - Keep wireframes current with requirements
- **Poor version control** - Track changes and maintain history
- **Isolated wireframes** - Connect to broader user journey documentation

---

## 💡 Pro Tips

1. **Start simple**: Begin with basic layout, add detail iteratively
2. **Use real content**: Wireframes with actual text reveal layout issues
3. **Think mobile-first**: Consider small screen constraints early
4. **Document assumptions**: Note business logic or technical constraints
5. **Test the flow**: Walk through wireframes as a real user would
6. **Get feedback early**: Share rough wireframes to catch issues quickly
7. **Keep it updated**: Wireframes should evolve with the product

Remember: Wireframes are communication tools. They should be clear, accurate, and focused on helping your team build the right thing.