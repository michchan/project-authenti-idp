# Authentication Flow Diagrams

## OAuth 2.0 Authorization Code Flow with PKCE

<div class="mermaid">
sequenceDiagram
    participant User as End User
    participant Client as Client Application
    participant Browser as User Browser
    participant IDP as Identity Provider
    participant AuthDB as Auth Database
    participant TokenStore as Token Store
    
    Note over User,TokenStore: OAuth 2.0 Authorization Code Flow with PKCE
    
    %% Client Registration (One-time setup)
    Note over Client,IDP: Client Registration Phase
    Client->>IDP: Register application
    IDP->>AuthDB: Store client credentials
    IDP->>Client: client_id, client_secret (optional)
    
    %% Authorization Request
    Note over User,TokenStore: Authorization Request Phase
    User->>Client: Click "Login with IDP"
    Client->>Client: Generate code_verifier & code_challenge
    Client->>Browser: Redirect to authorization endpoint
    
    Browser->>IDP: GET /oauth/authorize?<br/>response_type=code&<br/>client_id=xxx&<br/>redirect_uri=xxx&<br/>state=xxx&<br/>code_challenge=xxx&<br/>code_challenge_method=S256
    
    IDP->>AuthDB: Validate client_id & redirect_uri
    IDP->>Browser: Show login form
    
    %% User Authentication
    Note over User,TokenStore: User Authentication Phase
    Browser->>User: Display login form
    User->>Browser: Enter credentials
    Browser->>IDP: POST /auth/login (username, password)
    
    IDP->>AuthDB: Verify user credentials
    AuthDB->>IDP: User authenticated
    IDP->>AuthDB: Store authorization code
    IDP->>Browser: Redirect with authorization code
    
    Browser->>Client: GET /callback?code=xxx&state=xxx
    
    %% Token Exchange
    Note over User,TokenStore: Token Exchange Phase
    Client->>Client: Verify state parameter
    Client->>IDP: POST /oauth/token<br/>grant_type=authorization_code&<br/>code=xxx&<br/>client_id=xxx&<br/>code_verifier=xxx&<br/>redirect_uri=xxx
    
    IDP->>AuthDB: Validate authorization code
    IDP->>IDP: Verify code_challenge
    IDP->>IDP: Generate access_token & refresh_token
    IDP->>TokenStore: Store tokens
    IDP->>Client: JSON: access_token, refresh_token, id_token
    
    %% API Access
    Note over User,TokenStore: API Access Phase
    Client->>IDP: GET /api/userinfo<br/>Authorization: Bearer access_token
    IDP->>TokenStore: Validate access_token
    IDP->>AuthDB: Get user information
    IDP->>Client: User profile data
</div>

<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({ 
    startOnLoad: true, 
    theme: 'base',
    themeVariables: {
      primaryColor: '#ffffff',
      primaryTextColor: '#000000',
      primaryBorderColor: '#000000',
      lineColor: '#000000',
      sequenceNumberColor: '#ffffff',
      sectionBkgColor: '#ffffff',
      altSectionBkgColor: '#f0f0f0',
      gridColor: '#333333',
      subSectionBkgColor: '#ffffff',
      mainBkg: '#ffffff',
      secondBkg: '#f0f0f0',
      tertiaryColor: '#ffffff',
      activationBorderColor: '#000000',
      activationBkgColor: '#f0f0f0',
      loopTextColor: '#000000',
      noteBorderColor: '#000000',
      noteBkgColor: '#ffffff',
      noteTextColor: '#000000'
    }
  });
</script>

## OpenID Connect Identity Token Flow

<div class="mermaid">
sequenceDiagram
    participant Client as Client Application
    participant IDP as Identity Provider
    participant JWKS as JWKS Endpoint
    participant UserInfo as UserInfo Endpoint
    
    Note over Client,UserInfo: OpenID Connect ID Token Validation
    
    %% Token Reception (from OAuth flow)
    Client->>IDP: Receive ID Token (JWT)
    
    %% Token Validation
    Note over Client,UserInfo: ID Token Validation Phase
    Client->>Client: Parse JWT header
    Client->>JWKS: GET /.well-known/jwks.json
    JWKS->>Client: Public keys for validation
    
    Client->>Client: Validate token signature
    Client->>Client: Validate token claims:<br/>- iss (issuer)<br/>- aud (audience)<br/>- exp (expiration)<br/>- iat (issued at)<br/>- nonce (if used)
    
    %% UserInfo Request (Optional)
    Note over Client,UserInfo: UserInfo Request Phase
    Client->>UserInfo: GET /oauth/userinfo<br/>Authorization: Bearer access_token
    UserInfo->>Client: Extended user profile
    
    %% Token Refresh
    Note over Client,UserInfo: Token Refresh Phase
    Client->>IDP: POST /oauth/token<br/>grant_type=refresh_token&<br/>refresh_token=xxx&<br/>client_id=xxx
    
    IDP->>IDP: Validate refresh token
    IDP->>Client: New access_token & id_token
</div>

## Multi-Application SSO Flow

<div class="mermaid">
sequenceDiagram
    participant User as End User
    participant App1 as Application 1
    participant App2 as Application 2
    participant IDP as Identity Provider
    participant Session as Session Store
    
    Note over User,Session: Single Sign-On Across Applications
    
    %% First Application Login
    Note over User,Session: Initial Authentication
    User->>App1: Access protected resource
    App1->>IDP: Redirect to /oauth/authorize
    IDP->>Session: Check existing session
    Session->>IDP: No active session
    IDP->>User: Show login form
    User->>IDP: Provide credentials
    IDP->>Session: Create SSO session
    IDP->>App1: Return authorization code
    App1->>IDP: Exchange for tokens
    App1->>User: Access granted
    
    %% Second Application (SSO)
    Note over User,Session: SSO to Second Application
    User->>App2: Access protected resource
    App2->>IDP: Redirect to /oauth/authorize
    IDP->>Session: Check existing session
    Session->>IDP: Active session found
    IDP->>User: Show consent screen (optional)
    User->>IDP: Grant permission
    IDP->>App2: Return authorization code
    App2->>IDP: Exchange for tokens
    App2->>User: Access granted (no re-authentication)
    
    %% Session Management
    Note over User,Session: Session Lifecycle
    IDP->>Session: Update last activity
    Session->>Session: Session timeout check
    
    %% Logout (Single Logout)
    Note over User,Session: Single Logout
    User->>App1: Click logout
    App1->>IDP: GET /oauth/logout
    IDP->>Session: Invalidate SSO session
    IDP->>App1: Logout callback
    IDP->>App2: Logout notification (if supported)
    App2->>App2: Clear local session
</div>

## Mobile Application Flow (PKCE)

<div class="mermaid">
sequenceDiagram
    participant User as Mobile User
    participant App as Mobile App
    participant Browser as System Browser
    participant IDP as Identity Provider
    participant Keychain as Secure Storage
    
    Note over User,Keychain: Mobile OAuth with PKCE and Secure Storage
    
    %% Authorization Request
    User->>App: Tap "Login"
    App->>App: Generate code_verifier (43-128 chars)
    App->>App: Generate code_challenge = SHA256(code_verifier)
    App->>Browser: Open system browser with auth URL
    
    Browser->>IDP: GET /oauth/authorize?<br/>response_type=code&<br/>client_id=mobile_app&<br/>redirect_uri=myapp://callback&<br/>code_challenge=xxx&<br/>code_challenge_method=S256&<br/>scope=openid profile
    
    %% User Authentication
    IDP->>User: Show login interface
    User->>IDP: Enter credentials
    IDP->>Browser: Redirect to myapp://callback?code=xxx
    
    %% Deep Link Back to App
    Browser->>App: Deep link with auth code
    App->>IDP: POST /oauth/token<br/>grant_type=authorization_code&<br/>code=xxx&<br/>client_id=mobile_app&<br/>code_verifier=original_verifier&<br/>redirect_uri=myapp://callback
    
    %% Token Storage
    IDP->>App: access_token, refresh_token, id_token
    App->>Keychain: Store tokens securely
    App->>User: Login successful
    
    %% Token Refresh
    Note over User,Keychain: Background Token Refresh
    App->>Keychain: Retrieve refresh_token
    App->>IDP: POST /oauth/token<br/>grant_type=refresh_token&<br/>refresh_token=xxx
    IDP->>App: New access_token
    App->>Keychain: Update stored tokens
</div>

## Security Considerations for Auth Flows

### PKCE Implementation
<div class="mermaid">
graph TB
    subgraph "PKCE Security Flow"
        CV[Code Verifier<br/>43-128 random chars]
        CC[Code Challenge<br/>SHA256(code_verifier)]
        AC[Authorization Code<br/>Temporary, single-use]
        Verify[Verification<br/>code_challenge == SHA256(code_verifier)]
    end
    
    CV --> CC
    CC --> AC
    AC --> Verify
    
    subgraph "Security Benefits"
        NoSecret[No Client Secret<br/>Required]
        InterceptProof[Interception<br/>Protection]
        ReplayProof[Replay Attack<br/>Prevention]
    end
    
    Verify --> NoSecret
    Verify --> InterceptProof
    Verify --> ReplayProof
    
    %% High-contrast styling
    classDef flow fill:#2196F3,stroke:#000,stroke-width:2px,color:#fff
    classDef security fill:#4CAF50,stroke:#000,stroke-width:2px,color:#fff
    
    class CV,CC,AC,Verify flow
    class NoSecret,InterceptProof,ReplayProof security
</div>

### Token Security Model
<div class="mermaid">
graph LR
    subgraph "Token Types & Security"
        AT[Access Token<br/>Short-lived (15min)<br/>Bearer token]
        RT[Refresh Token<br/>Long-lived (30 days)<br/>Secure storage only]
        IT[ID Token<br/>JWT with user info<br/>Digitally signed]
    end
    
    subgraph "Security Measures"
        Rotation[Token Rotation<br/>on each refresh]
        Binding[Token Binding<br/>to client/device]
        Revocation[Token Revocation<br/>immediate invalidation]
    end
    
    AT --> Rotation
    RT --> Binding
    IT --> Revocation
    
    subgraph "Storage Security"
        Memory[Memory Only<br/>Access tokens]
        Keychain[Secure Keychain<br/>Refresh tokens]
        HttpOnly[HttpOnly Cookies<br/>Web applications]
    end
    
    AT --> Memory
    RT --> Keychain
    IT --> HttpOnly
    
    %% High-contrast styling
    classDef tokens fill:#FF9800,stroke:#000,stroke-width:2px,color:#fff
    classDef measures fill:#9C27B0,stroke:#000,stroke-width:2px,color:#fff
    classDef storage fill:#E91E63,stroke:#000,stroke-width:2px,color:#fff
    
    class AT,RT,IT tokens
    class Rotation,Binding,Revocation measures
    class Memory,Keychain,HttpOnly storage
</div>

## Flow Selection Guidelines

### Web Applications (Confidential Clients)
- **Use**: Authorization Code Flow with client_secret
- **Security**: Server-side token storage, HttpOnly cookies
- **PKCE**: Recommended but not required

### Single Page Applications (Public Clients)
- **Use**: Authorization Code Flow with PKCE
- **Security**: In-memory token storage only
- **PKCE**: Required for security

### Mobile Applications (Native Clients)
- **Use**: Authorization Code Flow with PKCE
- **Security**: System keychain for refresh tokens
- **PKCE**: Required, no client_secret

### Server-to-Server (Machine-to-Machine)
- **Use**: Client Credentials Flow
- **Security**: Client certificate or strong client_secret
- **Scope**: Limited to application permissions

These flows provide comprehensive coverage for all client types while maintaining security best practices and standards compliance.