# 📘 System flows guidelines

## 🧭 Purpose
Capture how the system handles specific user journeys or backend-triggered workflows.

## ✅ Must Include
- Trigger (user action, timer, webhook, event)
- Sequence of actions across services
- API calls, pub/sub messages, DB updates
- Error and retry handling
- Observability points (logging, metrics)

## 🤔 Why It Matters
- Aligns system behavior with UX expectations
- Helps engineers plan coordination between components
- Highlights where latency or failure may occur

## 📐 How To Structure It
1. **Trigger** – e.g., “user clicks ‘Buy Now’”
2. **Step-by-Step Timeline** – include conditionals
3. **Service Roles** – which services act and how
4. **Diagram (Mermaid)** – sequence diagram preferred
5. **Failure Scenarios** – what if A or B fails?

## 🛠 Tips
- Use simple language – avoid pseudo-code
- Use real entity names (e.g., Order, Cart, Token)
- List variants: retries, async handling, timeouts
