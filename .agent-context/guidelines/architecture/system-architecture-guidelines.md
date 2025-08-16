# 📘 System Architecture Guidelines

## 🧭 Purpose
Define high-level architecture meeting current requirements while remaining extendable and scalable. Focus on present needs, not speculative features. Aligns teams around core decisions.

## ✅ Must Include
- System architecture diagram (frontend, backend, databases, infrastructure)
- Key architectural decisions based on current requirements
- Component interactions and data flow explanation
- Justification for major decisions addressing present needs

## 🤔 Why It Matters
- Prevents misalignment on requirements and boundaries
- Reduces overengineering risk
- Informs tech stack selection
- Ensures architecture addresses actual needs

## 📐 Structure
1. **Context Overview**: Product goals and expected scale
2. **Architecture Diagram**: System components (apps, services, databases, cache)
3. **Component Communication Table**: Structured breakdown of each component with responsibilities and communication patterns

## 🛠 Tips
- Focus on current requirements
- Choose simplest architecture meeting present needs
- Avoid overengineering for hypothetical scaling
- Base decisions on actual needs
- Keep explanations concise
- Document constraints based on stakeholder requirements

## 📊 Component Communication Table Format
After the architecture diagram, include a table with these columns:
- **Component**: Name of the system component (e.g., "Authentication API")
- **Responsibility**: 2-3 sentence description of what the component handles
- **Inbound Communications**: List format with bullet points showing connections initiated by other services/components, with protocol (e.g., "• User Management API (HTTP)<br>• React SDK (HTTPS)")
- **Outbound Communications**: List format with bullet points showing connections initiated by this component, with protocol (e.g., "• PostgreSQL Database (TCP)<br>• Email Service (HTTPS)")

Use bullet points (•) and HTML line breaks (<br>) to format multiple communication entries within table cells. Use the system architecture diagram and stakeholder requirements to determine component responsibilities and communication patterns.

