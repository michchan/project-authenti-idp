# System Flow: [Flow Name] - [Project Name] [Version]

## Trigger
[Describe the user action, system event, or condition that initiates this flow]

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant UI as [UI Component]
    participant SVC1 as [Service 1]
    participant SVC2 as [Service 2]
    participant SVC3 as [Service 3]

    User->>UI: [User Action]
    UI->>UI: [UI Processing]
    
    UI->>SVC1: [Request/Data]
    SVC1->>SVC1: [Processing Step]
    
    SVC1->>SVC2: [Service Coordination]
    SVC2->>SVC2: [Service Processing]
    SVC2-->>SVC1: [Response/Confirmation]
    
    SVC1-->>SVC3: [Background Event]
    SVC3->>SVC3: [Background Processing]
    
    SVC1->>UI: [Final Response]
    UI->>UI: [UI Update]
    UI->>User: [User Feedback]
```

## Step-by-Step Timeline

### 1. [First Step Name]
**Trigger**: [What triggers this step]  
**Component**: [Which service/component handles this step]  
**Actions**:
- [High-level action 1]
- [High-level action 2]
- [High-level action 3]

**Success Response**: [What indicates success]  
**Failure Scenarios**: [Optional - key failure cases]

---

### 2. [Second Step Name]
**Trigger**: [What triggers this step]  
**Component**: [Which service/component handles this step]  
**Actions**:
- [High-level action 1]
- [High-level action 2]

**Success Response**: [What indicates success]

---

### 3. [Additional Steps]
[Continue pattern for remaining steps in the flow]

## Service Roles

### [Service/Component 1]
- **Primary**: [Main responsibility in this flow]
- **Secondary**: [Supporting responsibilities]
- **Data Flow**: [How data flows through this service]

### [Service/Component 2]
- **Primary**: [Main responsibility in this flow]
- **Secondary**: [Supporting responsibilities]
- **Data Flow**: [How data flows through this service]

### [Service/Component 3]
- **Primary**: [Main responsibility in this flow]
- **Secondary**: [Supporting responsibilities]
- **Data Flow**: [How data flows through this service]

## Error Scenarios

### [Error Type 1]
**Scenario**: [Description of what goes wrong]  
**Response**:
- [High-level response action 1]
- [High-level response action 2]
- [High-level response action 3]

**Recovery**: [How the system/user recovers from this scenario]

---

### [Error Type 2]
**Scenario**: [Description of what goes wrong]  
**Response**:
- [High-level response action 1]
- [High-level response action 2]

**Recovery**: [How the system/user recovers from this scenario]

---

*[Brief closing statement about the flow's purpose and scope]*
