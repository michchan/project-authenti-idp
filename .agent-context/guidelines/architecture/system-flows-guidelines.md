# 📘 System Flows Guidelines

## 🧭 Purpose
Document high-level system flows for user journeys and key system workflows without implementation details. Flow documents should be organized in the `/architecture/flows` subdirectory.

## ✅ Must Include
- **Flow Trigger**: User action or system event that initiates the flow
- **Step-by-Step Timeline**: High-level sequence of actions across services
- **Service Coordination**: Which services participate and their roles
- **Sequence Diagram**: Visual representation of service interactions
- **Error Scenarios**: High-level failure cases and recovery approaches

## ❌ Avoid Including
- **Implementation Code**: No actual code snippets or algorithms
- **Detailed Performance Metrics**: Specific timing requirements or optimization details
- **Testing Scenarios**: Test cases and testing procedures
- **Observability Implementation**: Specific logging, monitoring, or metrics implementation
- **Technology-Specific Details**: Database schemas, API endpoints, or tool configurations

## 🤔 Why It Matters
- **Architectural Understanding**: Shows how services work together to fulfill user needs
- **Service Coordination**: Clarifies responsibilities and interaction patterns
- **Flow Validation**: Ensures user journeys are properly supported by system design
- **Error Planning**: Identifies potential failure points and recovery strategies

## 📐 How To Structure It

### 1. **Flow Trigger**
- Clear description of what initiates the flow
- User actions, system events, or external triggers

### 2. **Sequence Diagram** (Overview First)
- Mermaid sequence diagram showing service interactions
- Clear participant identification
- Message flows between services
- Include conditional flows and error paths
- **Provides high-level overview before diving into details**

### 3. **Step-by-Step Timeline** (Detailed Breakdown)
- Numbered sequence of high-level actions
- Service responsibilities for each step
- Success responses and failure scenarios
- Focus on "what happens" not "how it's implemented"

### 4. **Service Roles**
- Primary and secondary responsibilities for each service
- Data flow descriptions between services
- Coordination patterns and dependencies

### 5. **Error Scenarios**
- High-level failure cases and system responses
- Recovery strategies and user experience
- Service resilience and graceful degradation

## 🛠 Tips
- **Focus on flow logic** rather than implementation details
- **Use business language** that non-technical stakeholders can understand  
- **Show service coordination** and responsibility boundaries clearly
- **Include alternative paths** for different user choices or conditions
- **Keep diagrams simple** and focused on major interactions
- **Emphasize user experience** throughout the flow
- **Plan for failures** with appropriate error handling approaches
