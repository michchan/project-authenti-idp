# 📘 Service responsibilities guidelines

## 🧭 Purpose
To define which service/component does what and what it should *not* do. This ensures clean separations of logic, scalability, and long-term maintainability across frontend applications and backend microservices.

## ✅ Must Include
- Service name
- Primary responsibilities
- Explicit non-responsibilities
- Relationships to other services
- Ownership model (owned, shared, infra)
- Justification for boundaries

## 🤔 Why It Matters
- Reduces coupling between services and components
- Prevents duplicated or overlapping logic across frontend and backend
- Helps teams own specific domains clearly
- Enables independent deployment and scaling of microservices

## 📐 How To Structure It
1. **Overview Table**  
   | Service | Responsibilities | Non-Responsibilities | Ownership | Notes |
2. **For each service/component**  
   - Summary
   - Primary Responsibilities
   - Non-Responsibilities 
   - Key Interactions (calls, receives, dependencies)
   - Justification for service boundaries

## 🛠 Tips
- Explicitly state what each service/component *does not* do
- Don't define interfaces here — only boundaries and goals
- Include scalability and performance considerations for microservices
- Cover both frontend applications and backend services
- Consider team ownership and operational responsibilities
