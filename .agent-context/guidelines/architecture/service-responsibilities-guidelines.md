# 📘 Service responsibilities guidelines

## 🧭 Purpose
To define which service does what and what it should *not* do. This ensures clean separations of logic and long-term maintainability.

## ✅ Must Include
- Service name
- Primary responsibilities
- Explicit non-responsibilities
- Relationships to other services
- Ownership model (owned, shared, infra)
- Justification for boundaries

## 🤔 Why It Matters
- Reduces coupling between services
- Prevents duplicated or overlapping logic
- Helps teams own specific domains clearly

## 📐 How To Structure It
1. **Overview Table**  
   | Service | Responsibilities | Non-Responsibilities | Notes |
2. **For each service**  
   - Summary
   - Responsibility bullets
   - Justification
   - Key interactions (calls or receives)

## 🛠 Tips
- Explicitly state what each service *does not* do
- Don’t define interfaces here — only boundaries and goals
- Include future warnings (“may be split later”, etc.)
