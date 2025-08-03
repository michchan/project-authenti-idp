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
    
    %% Styling
    classDef frontend fill:#e1f5fe
    classDef edge fill:#f3e5f5
    classDef service fill:#e8f5e8
    classDef data fill:#fff3e0
    classDef external fill:#fce4ec
    
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
    
    %% Styling
    classDef dev fill:#e3f2fd
    classDef cicd fill:#f1f8e9
    classDef prod fill:#fff8e1
    classDef staging fill:#fce4ec
    
    class DevRepo,DevEnv dev
    class GHActions,Tests,Security cicd
    class VercelProd,SupabaseProd prod
    class VercelStaging,SupabaseStaging staging
```

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
    
    %% Styling for security zones
    classDef public fill:#ffebee
    classDef edge fill:#e8f5e8
    classDef app fill:#fff3e0
    classDef service fill:#e1f5fe
    classDef data fill:#f3e5f5
    
    class Internet public
    class CDN edge
    class WAF,API app
    class AuthSvc,UserSvc service
    class DBProxy,EncryptedDB data
```

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