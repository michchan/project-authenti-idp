# 📘 Service Responsibilities Guidelines

## 🧭 Purpose
Define what each service does and does *not* do. Ensures clean separation, scalability, and maintainability across frontend and backend.

## ✅ Must Include
- Service name
- Primary responsibilities
- Explicit non-responsibilities
- Relationships to other services
- Ownership model (owned, shared, infra)
- Boundary justification

## 🤔 Why It Matters
- Reduces coupling between services
- Prevents duplicated logic
- Clarifies team ownership
- Enables independent deployment and scaling

## 📐 Structure
1. **Overview Table**: Service | Responsibilities | Non-Responsibilities | Ownership | Notes
2. **For each service**:
   - Summary
   - Primary responsibilities
   - Non-responsibilities 
   - Key interactions (calls, receives, dependencies)
   - Boundary justification

## 🛠 Tips
- Explicitly state what each service does *not* do
- Define boundaries and goals, not interfaces
- Include scalability considerations
- Cover frontend and backend services
- Consider team ownership
