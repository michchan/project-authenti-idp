# 📘 System Flows Guidelines

## 🧭 Purpose
Document high-level system flows for user journeys and workflows without implementation details. Organize flow documents in `/architecture/flows` subdirectory.

## ✅ Must Include
- **Flow Trigger**: User action or system event initiating flow
- **Step-by-Step Timeline**: High-level action sequence across services
- **Service Coordination**: Participating services and their roles
- **Sequence Diagram**: Visual service interactions
- **Error Scenarios**: Failure cases and recovery approaches

## ❌ Avoid Including
- **Implementation Code**: No code snippets or algorithms
- **Performance Metrics**: No specific timing requirements
- **Testing Scenarios**: No test cases or procedures
- **Observability Details**: No specific logging/monitoring implementation
- **Technology Details**: No database schemas, API endpoints, configurations

## 🤔 Why It Matters
- Shows how services fulfill user needs
- Clarifies responsibilities and interaction patterns
- Ensures user journeys are properly supported
- Identifies failure points and recovery strategies

## 📐 Structure

### 1. Flow Trigger
Description of what initiates the flow (user actions, system events, external triggers)

### 2. Sequence Diagram (Overview First)
- Mermaid sequence diagram showing service interactions
- Clear participant identification and message flows
- Include conditional flows and error paths

### 3. Step-by-Step Timeline (Detailed Breakdown)
- Numbered sequence of high-level actions
- Service responsibilities for each step
- Success responses and failure scenarios
- Focus on "what happens" not "how"

### 4. Service Roles
- Primary and secondary responsibilities
- Data flow between services
- Coordination patterns and dependencies

### 5. Error Scenarios
- High-level failure cases and system responses
- Recovery strategies and user experience
- Service resilience and graceful degradation

## 🛠 Tips
- Focus on flow logic, not implementation
- Use business language for non-technical stakeholders
- Show service coordination clearly
- Include alternative paths
- Keep diagrams simple
- Emphasize user experience
- Plan for failures
