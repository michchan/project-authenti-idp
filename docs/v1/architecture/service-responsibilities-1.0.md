# Service Responsibilities - AuthentiIDP v1.0

## Purpose
Define clear boundaries and responsibilities for each service/component in AuthentiIDP to ensure clean separation of concerns, maintainable code, and scalable architecture for the MVP.

## Overview Table

| Service | Primary Responsibilities | Non-Responsibilities | Ownership | Notes |
|---------|-------------------------|---------------------|-----------|-------|
| **AuthentiIDP API Service** | User authentication, JWT token management, user profiles, application registration | UI rendering, client-side logic, token storage | Backend Team | Monolithic MVP API service |
| **React SDK** | Token management, authentication state, pre-built UI components, API integration | Backend logic, data persistence, server-side validation | Frontend Team | Client-side integration package |
| **NodeJS SDK** | Server-side token verification, protected route middleware, API helpers | User interface, frontend logic, direct database access | Backend Team | Server-side integration package |
| **Admin Dashboard** | Application management UI, user management interface, analytics display | Authentication logic, data persistence, business rules | Frontend Team | Single-page application |
| **Sample Demo Application** | Integration demonstration, SDK usage examples, testing scenarios | Production user management, real business logic | Frontend Team | Reference implementation |
| **PostgreSQL Database** | Data persistence, user data storage, application configurations | Business logic, authentication, data transformation | Backend Team | Primary data store |

## Detailed Service Definitions

### AuthentiIDP API Service
**Summary**: Core identity provider service handling all authentication, user management, and application registration functionality.

**Primary Responsibilities**:
- User registration with email verification
- Password authentication and security (hashing, validation)
- JWT access token and refresh token generation and management
- User profile management and updates
- Application registration and API key management
- Session management and token refresh
- Password reset via email
- Cross-application SSO coordination

**Non-Responsibilities**:
- User interface rendering or styling
- Client-side token storage or management
- Frontend validation (beyond server-side security)
- Static asset serving or CDN management
- Client-side routing or navigation

**Key Interactions**:
- **Calls**: PostgreSQL database, SendGrid email service, Redis cache (optional)
- **Receives**: HTTP requests from React SDK, NodeJS SDK, Admin Dashboard, Sample App
- **Dependencies**: Database connection, email service API, hosting platform

**Justification**: Centralized authentication service ensures consistent security policies, token management, and user experience across all connected applications while maintaining simple MVP architecture.

---

### React SDK
**Summary**: Client-side JavaScript library providing authentication components, hooks, and utilities for React applications.

**Primary Responsibilities**:
- Automatic token refresh and storage management
- Pre-built login/register/logout UI components
- React hooks for authentication state management
- API request helpers with automatic token injection
- Client-side routing protection utilities
- User profile data synchronization

**Non-Responsibilities**:
- Server-side authentication or token validation
- Database operations or data persistence
- Server-side route protection
- Business logic implementation
- Email sending or verification

**Key Interactions**:
- **Calls**: AuthentiIDP API Service for all authentication operations
- **Receives**: Component usage from React applications
- **Dependencies**: React framework, browser storage APIs, HTTP client

**Justification**: SDK abstraction simplifies integration for developers while ensuring consistent authentication patterns and security best practices across all React applications.

---

### NodeJS SDK
**Summary**: Server-side JavaScript library providing authentication middleware, token verification, and API helpers for NodeJS applications.

**Primary Responsibilities**:
- JWT token verification and validation
- Express.js middleware for route protection
- API helpers for server-side AuthentiIDP integration
- Token extraction from HTTP headers/cookies
- User data fetching from verified tokens

**Non-Responsibilities**:
- User interface components or client-side logic
- Token generation or refresh (handled by API service)
- Direct database access or data persistence
- Frontend authentication state management
- UI rendering or client-side routing

**Key Interactions**:
- **Calls**: AuthentiIDP API Service for token validation
- **Receives**: Integration from NodeJS server applications
- **Dependencies**: NodeJS runtime, JWT libraries, HTTP client

**Justification**: Server-side SDK enables backend applications to securely validate tokens and protect API endpoints while maintaining separation from the identity provider's core authentication logic.

---

### Admin Dashboard
**Summary**: Single-page web application providing management interface for applications, users, and system configuration.

**Primary Responsibilities**:
- Application registration and configuration interface
- User management and profile editing
- Basic analytics and usage statistics display
- API key generation and management interface
- System configuration and settings management

**Non-Responsibilities**:
- Authentication logic or token generation
- User data persistence or validation
- Business rule implementation
- Email sending or notification logic
- Complex analytics or reporting

**Key Interactions**:
- **Calls**: AuthentiIDP API Service for all data operations
- **Receives**: User interactions from admin users
- **Dependencies**: React framework, AuthentiIDP API Service

**Justification**: Dedicated admin interface provides necessary management capabilities while remaining separate from core authentication services and client applications.

---

### Sample Demo Application
**Summary**: Reference implementation demonstrating AuthentiIDP integration patterns and SDK usage for developers.

**Primary Responsibilities**:
- Showcase complete authentication flow implementation
- Demonstrate SDK integration patterns and best practices
- Provide working code examples and documentation
- Serve as integration testing platform
- Display user profile and session information

**Non-Responsibilities**:
- Production user management or real business functionality
- Complex business logic or data processing
- Performance optimization beyond demonstration needs
- Advanced feature implementation
- Security implementation (relies on SDK)

**Key Interactions**:
- **Calls**: AuthentiIDP API Service via React SDK
- **Receives**: Developer testing and evaluation usage
- **Dependencies**: React SDK, UI component library

**Justification**: Sample application accelerates developer adoption by providing concrete implementation examples and serving as a testing platform for the authentication system.

---

## Service Interaction Rules

### Data Flow Principles
1. **API-First Communication**: All services communicate through well-defined REST API endpoints
2. **Token-Based Security**: JWT tokens provide stateless authentication across all services
3. **Client SDK Abstraction**: SDKs handle all direct API communication for client applications
4. **Single Source of Truth**: AuthentiIDP API service maintains all user and application data
5. **Asynchronous Operations**: Email and notification operations handled asynchronously

### Cross-Service Communication
- **Client Applications** → **React/NodeJS SDK** → **AuthentiIDP API Service**: All authentication flows
- **Admin Dashboard** → **AuthentiIDP API Service**: Management operations and data queries
- **AuthentiIDP API Service** → **PostgreSQL Database**: Data persistence and retrieval
- **AuthentiIDP API Service** → **SendGrid**: Email verification and password reset

### Error Handling Boundaries
- **API Service**: Provides structured error responses with appropriate HTTP status codes
- **SDKs**: Transform API errors into developer-friendly formats with recovery suggestions
- **Client Applications**: Handle user-facing errors and provide appropriate feedback
- **Database Layer**: Connection and query errors handled within API service with retry logic