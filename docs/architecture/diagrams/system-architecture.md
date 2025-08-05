# System Architecture - Cost-Effective Identity Provider

## High-Level System Architecture

```mermaid
graph TB
    %% External Actors
    User[End User]
    ClientApp[Client Application<br/>Web/Mobile/API]
    Admin[System Administrator]
    
    %% Frontend Layer
    subgraph "Frontend Layer (Vercel - Free Tier)"
        AdminDash[Admin Dashboard<br/>Next.js + React]
        LandingPage[Landing Page<br/>Static Site]
    end
    
    %% API Gateway / Load Balancer
    subgraph "Edge Layer (Vercel Edge Functions)"
        EdgeAuth[Edge Authentication<br/>Rate Limiting + CORS]
        EdgeAPI[Edge API Gateway<br/>Request Routing]
    end
    
    %% Core Services Layer
    subgraph "Application Layer (Vercel Serverless Functions)"
        AuthService[Authentication Service<br/>OAuth 2.0 + OIDC]
        UserService[User Management Service<br/>CRUD Operations]
        TokenService[Token Service<br/>JWT Generation/Validation]
        SessionService[Session Management<br/>Express Session]
    end
    
    %% Data Layer
    subgraph "Data Layer (Supabase - Free Tier)"
        PostgresDB[(PostgreSQL Database<br/>User Data + Sessions)]
        Redis[(Redis Cache<br/>Session Store)]
        FileStorage[(File Storage<br/>User Avatars)]
    end
    
    %% External Services
    subgraph "External Integrations"
        EmailService[Email Service<br/>Resend/SendGrid Free]
        MonitorService[Monitoring<br/>UptimeRobot Free]
        LogService[Logging<br/>Vercel Analytics]
    end
    
    %% Connections
    User --> ClientApp
    Admin --> AdminDash
    User --> LandingPage
    
    ClientApp --> EdgeAuth
    AdminDash --> EdgeAPI
    
    EdgeAuth --> AuthService
    EdgeAPI --> UserService
    EdgeAPI --> TokenService
    
    AuthService --> SessionService
    AuthService --> PostgresDB
    UserService --> PostgresDB
    TokenService --> Redis
    SessionService --> Redis
    
    AuthService --> EmailService
    AuthService --> MonitorService
    UserService --> FileStorage
    
    %% High-contrast styling with bold borders
    classDef frontend fill:#1565C0,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    classDef edge fill:#6A1B9A,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    classDef service fill:#2E7D32,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    classDef data fill:#EF6C00,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    classDef external fill:#C62828,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    
    class AdminDash,LandingPage frontend
    class EdgeAuth,EdgeAPI edge
    class AuthService,UserService,TokenService,SessionService service
    class PostgresDB,Redis,FileStorage data
    class EmailService,MonitorService,LogService external
```



## Component Responsibilities

### Frontend Layer
- **Admin Dashboard**: User management, system configuration, analytics
- **Landing Page**: Service documentation, developer portal, client registration

### Edge Layer
- **Edge Authentication**: Rate limiting, CORS handling, basic request validation
- **Edge API Gateway**: Request routing, response caching, geographic distribution

### Application Layer
- **Authentication Service**: Core OAuth 2.0/OIDC implementation, login/logout flows
- **User Management Service**: User CRUD operations, profile management, permissions
- **Token Service**: JWT generation, validation, refresh token handling
- **Session Management**: Server-side session handling, security policies

### Data Layer
- **PostgreSQL Database**: Primary data store for users, applications, sessions
- **Redis Cache**: Session storage, token blacklist, rate limiting counters
- **File Storage**: User avatars, application logos, static assets

## Data Flow Architecture

```mermaid
sequenceDiagram
    participant Client as Client Application
    participant Edge as Edge Layer
    participant Auth as Auth Service
    participant DB as Database
    participant Cache as Redis Cache
    
    Note over Client,Cache: OAuth 2.0 Authorization Code Flow
    
    Client->>Edge: GET /oauth/authorize
    Edge->>Auth: Route to Auth Service
    Auth->>DB: Validate client_id
    Auth->>Client: Redirect to login page
    
    Client->>Edge: POST /auth/login (credentials)
    Edge->>Auth: Authenticate user
    Auth->>DB: Verify credentials
    Auth->>Cache: Store session
    Auth->>Client: Authorization code
    
    Client->>Edge: POST /oauth/token (auth code)
    Edge->>Auth: Exchange code for tokens
    Auth->>DB: Validate auth code
    Auth->>Cache: Store refresh token
    Auth->>Client: Access + Refresh tokens
    
    Client->>Edge: API request with Bearer token
    Edge->>Auth: Validate access token
    Auth->>Cache: Check token validity
    Auth->>Client: Protected resource
```



## Deployment Architecture

```mermaid
graph LR
    subgraph "Development"
        DevRepo[GitHub Repository]
        DevEnv[Local Development]
    end
    
    subgraph "CI/CD Pipeline"
        GHActions[GitHub Actions<br/>Free Tier]
        Tests[Automated Tests<br/>Jest + Supertest]
        Security[Security Scanning<br/>Snyk]
    end
    
    subgraph "Production Environment"
        VercelProd[Vercel Production<br/>Main Branch]
        SupabaseProd[Supabase Production<br/>Database]
    end
    
    subgraph "Staging Environment"
        VercelStaging[Vercel Preview<br/>Feature Branches]
        SupabaseStaging[Supabase Staging<br/>Database]
    end
    
    DevRepo --> GHActions
    DevEnv --> DevRepo
    GHActions --> Tests
    GHActions --> Security
    Tests --> VercelProd
    Tests --> VercelStaging
    
    VercelProd --> SupabaseProd
    VercelStaging --> SupabaseStaging
    
    %% High-contrast styling with thicker borders
    classDef dev fill:#1565C0,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    classDef cicd fill:#2E7D32,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    classDef prod fill:#EF6C00,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    classDef staging fill:#AD1457,stroke:#000000,stroke-width:4px,color:#FFFFFF,font-weight:bold
    
    class DevRepo,DevEnv dev
    class GHActions,Tests,Security cicd
    class VercelProd,SupabaseProd prod
    class VercelStaging,SupabaseStaging staging
```

### Deployment Pipeline Flow Chart

<div style="font-family: monospace; border: 3px solid #000; padding: 20px; background-color: #f5f5f5;">
<div style="text-align: center; background-color: #000; color: #fff; padding: 10px; margin: -20px -20px 20px -20px; font-weight: bold; font-size: 18px;">DEPLOYMENT ARCHITECTURE FLOW</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <div style="background-color: #1565C0; color: #fff; padding: 15px; border: 3px solid #000; width: 22%; text-align: center; font-weight: bold;">
    <div style="font-size: 16px; margin-bottom: 10px;">DEVELOPMENT</div>
    <div style="font-size: 12px;">• GitHub Repository</div>
    <div style="font-size: 12px;">• Local Development</div>
    <div style="font-size: 12px;">• Feature Branches</div>
  </div>
  
  <div style="background-color: #2E7D32; color: #fff; padding: 15px; border: 3px solid #000; width: 22%; text-align: center; font-weight: bold;">
    <div style="font-size: 16px; margin-bottom: 10px;">CI/CD PIPELINE</div>
    <div style="font-size: 12px;">• GitHub Actions</div>
    <div style="font-size: 12px;">• Automated Tests</div>
    <div style="font-size: 12px;">• Security Scanning</div>
  </div>
  
  <div style="background-color: #EF6C00; color: #fff; padding: 15px; border: 3px solid #000; width: 22%; text-align: center; font-weight: bold;">
    <div style="font-size: 16px; margin-bottom: 10px;">PRODUCTION</div>
    <div style="font-size: 12px;">• Vercel Production</div>
    <div style="font-size: 12px;">• Supabase Database</div>
    <div style="font-size: 12px;">• Main Branch Deploy</div>
  </div>
  
  <div style="background-color: #AD1457; color: #fff; padding: 15px; border: 3px solid #000; width: 22%; text-align: center; font-weight: bold;">
    <div style="font-size: 16px; margin-bottom: 10px;">STAGING</div>
    <div style="font-size: 12px;">• Vercel Preview</div>
    <div style="font-size: 12px;">• Staging Database</div>
    <div style="font-size: 12px;">• Feature Testing</div>
  </div>
</div>

<div style="text-align: center; margin: 20px 0;">
  <div style="display: inline-block; background-color: #000; color: #fff; padding: 5px 20px; margin: 0 10px;">PUSH</div>
  <div style="display: inline-block;">→</div>
  <div style="display: inline-block; background-color: #000; color: #fff; padding: 5px 20px; margin: 0 10px;">TEST</div>
  <div style="display: inline-block;">→</div>
  <div style="display: inline-block; background-color: #000; color: #fff; padding: 5px 20px; margin: 0 10px;">DEPLOY</div>
  <div style="display: inline-block;">→</div>
  <div style="display: inline-block; background-color: #000; color: #fff; padding: 5px 20px; margin: 0 10px;">MONITOR</div>
</div>
</div>

## Network Architecture & Security Boundaries

```mermaid
graph TB
    subgraph "Public Internet"
        Internet[Internet Users]
    end
    
    subgraph "CDN/Edge Layer (Global)"
        CDN[Vercel Edge Network<br/>DDoS Protection + SSL]
    end
    
    subgraph "Application Security Zone"
        WAF[Web Application Firewall<br/>Rate Limiting + IP Blocking]
        API[API Gateway<br/>Authentication + Authorization]
    end
    
    subgraph "Service Security Zone"
        AuthSvc[Auth Service<br/>Isolated Functions]
        UserSvc[User Service<br/>Isolated Functions]
    end
    
    subgraph "Data Security Zone"
        DBProxy[Database Proxy<br/>Connection Pooling]
        EncryptedDB[(Encrypted Database<br/>TLS + Encryption at Rest)]
    end
    
    Internet --> CDN
    CDN --> WAF
    WAF --> API
    API --> AuthSvc
    API --> UserSvc
    AuthSvc --> DBProxy
    UserSvc --> DBProxy
    DBProxy --> EncryptedDB
    
    %% Security boundaries
    subgraph "Security Controls"
        HTTPS[HTTPS Only]
        JWT[JWT Tokens]
        RBAC[Role-Based Access]
        RLS[Row Level Security]
        Audit[Audit Logging]
    end
    
    %% High-contrast styling for security zones with thicker borders
    classDef public fill:#C62828,stroke:#000000,stroke-width:5px,color:#FFFFFF,font-weight:bold
    classDef edge fill:#2E7D32,stroke:#000000,stroke-width:5px,color:#FFFFFF,font-weight:bold
    classDef app fill:#EF6C00,stroke:#000000,stroke-width:5px,color:#FFFFFF,font-weight:bold
    classDef service fill:#1565C0,stroke:#000000,stroke-width:5px,color:#FFFFFF,font-weight:bold
    classDef data fill:#6A1B9A,stroke:#000000,stroke-width:5px,color:#FFFFFF,font-weight:bold
    
    class Internet public
    class CDN edge
    class WAF,API app
    class AuthSvc,UserSvc service
    class DBProxy,EncryptedDB data
```

### Security Architecture - Layered Defense Model

<div style="font-family: monospace; border: 4px solid #000; background-color: #fff;">
<div style="background-color: #000; color: #fff; padding: 15px; text-align: center; font-weight: bold; font-size: 18px;">NETWORK SECURITY & BOUNDARIES</div>

<table style="width: 100%; border-collapse: collapse;">
<tr style="background-color: #C62828; color: #fff; font-weight: bold;">
  <td style="padding: 12px; border: 3px solid #000; text-align: center;">LAYER 1: PUBLIC INTERNET</td>
  <td style="padding: 12px; border: 3px solid #000;">• Untrusted traffic<br/>• DDoS attacks<br/>• Bot traffic</td>
  <td style="padding: 12px; border: 3px solid #000;">• Global access<br/>• No filtering<br/>• High risk</td>
</tr>
<tr style="background-color: #2E7D32; color: #fff; font-weight: bold;">
  <td style="padding: 12px; border: 3px solid #000; text-align: center;">LAYER 2: CDN/EDGE</td>
  <td style="padding: 12px; border: 3px solid #000;">• SSL termination<br/>• DDoS protection<br/>• Geographic filtering</td>
  <td style="padding: 12px; border: 3px solid #000;">• 99.9% uptime<br/>• Global POPs<br/>• Attack mitigation</td>
</tr>
<tr style="background-color: #EF6C00; color: #fff; font-weight: bold;">
  <td style="padding: 12px; border: 3px solid #000; text-align: center;">LAYER 3: APPLICATION</td>
  <td style="padding: 12px; border: 3px solid #000;">• WAF filtering<br/>• Rate limiting<br/>• IP blocking</td>
  <td style="padding: 12px; border: 3px solid #000;">• Request validation<br/>• Auth gateway<br/>• Access control</td>
</tr>
<tr style="background-color: #1565C0; color: #fff; font-weight: bold;">
  <td style="padding: 12px; border: 3px solid #000; text-align: center;">LAYER 4: SERVICE</td>
  <td style="padding: 12px; border: 3px solid #000;">• Function isolation<br/>• JWT validation<br/>• Service mesh</td>
  <td style="padding: 12px; border: 3px solid #000;">• Zero trust<br/>• Microservice security<br/>• Container isolation</td>
</tr>
<tr style="background-color: #6A1B9A; color: #fff; font-weight: bold;">
  <td style="padding: 12px; border: 3px solid #000; text-align: center;">LAYER 5: DATA</td>
  <td style="padding: 12px; border: 3px solid #000;">• Encryption at rest<br/>• TLS in transit<br/>• Row-level security</td>
  <td style="padding: 12px; border: 3px solid #000;">• Database firewall<br/>• Connection pooling<br/>• Audit logging</td>
</tr>
</table>
</div>

## Scalability Architecture Phases

### Phase 1: Zero-Cost (0-100 users)
- Single Vercel deployment
- Supabase free tier
- Shared resources

### Phase 2: Low-Cost (100-1K users)
- Vercel Pro tier
- Supabase Pro tier
- Dedicated Redis instance

### Phase 3: Growth Phase (1K-10K users)
- Multi-region deployment
- Database read replicas
- Dedicated monitoring

This architecture prioritizes cost-effectiveness while maintaining professional standards and clear scaling paths.