# Flow: [Flow Name Here]

## Description
This document describes the system behavior behind a key user journey (e.g., user signup, content creation).

## Purpose
- Align backend interactions with the UX flow
- Define service responsibilities for this flow
- Highlight async/sync behavior and error paths

## Sequence Diagram (Happy Path)

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant API Gateway
    participant Service A
    participant Service B

    User->>Client: [UI Action]
    Client->>API Gateway: [Trigger API]
    API Gateway->>Service A: [Business Call]
    Service A->>Service B: [Subprocess or async job]
    Service B-->>Service A: [Result or Ack]
    Service A-->>API Gateway: Response
    API Gateway-->>Client: Final response
