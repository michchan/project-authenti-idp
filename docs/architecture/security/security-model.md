# Security Model and Threat Mitigation

## Security Architecture Overview

The Identity Provider implements defense-in-depth security with multiple layers of protection, focusing on OAuth 2.0/OIDC security best practices while maintaining cost-effectiveness.

## Threat Model

### Assets to Protect
1. **User Credentials**: Passwords, authentication tokens
2. **User Personal Data**: Email, profile information, behavioral data
3. **OAuth Tokens**: Access tokens, refresh tokens, authorization codes
4. **Client Secrets**: OAuth application credentials
5. **System Infrastructure**: Databases, API endpoints, admin interfaces

### Threat Actors
1. **External Attackers**: Malicious actors attempting unauthorized access
2. **Malicious Clients**: Rogue OAuth applications
3. **Insider Threats**: Compromised administrative accounts
4. **Script Kiddies**: Automated attacks, credential stuffing
5. **Nation State**: Advanced persistent threats (lower likelihood for small scale)

## Authentication Security

### Password Security

```mermaid
graph TB
    subgraph "Password Protection"
        Input["User Password Input"]
        Validation["Password Validation<br/>- Min 8 characters<br/>- Mixed case + numbers<br/>- Special characters"]
        Salt["Generate Salt<br/>Crypto.randomBytes(32)"]
        Hash["bcrypt Hash<br/>Cost factor: 12"]
        Store["Store Hash Only<br/>Never plaintext"]
    end
    
    Input --> Validation
    Validation --> Salt
    Salt --> Hash
    Hash --> Store
    
    subgraph "Attack Mitigation"
        BruteForce["Brute Force Protection<br/>Account lockout after 5 attempts"]
        Rainbow["Rainbow Table Defense<br/>Unique salts per password"]
        Timing["Timing Attack Prevention<br/>Constant-time comparison"]
    end
    
    Store --> BruteForce
    Hash --> Rainbow
    Hash --> Timing
```

**Implementation Details**:
- **bcrypt** with cost factor 12 (adjustable based on hardware)
- **Unique salt** per password using crypto-secure randomness
- **Account lockout**: 5 failed attempts → 15 minutes lockout (exponential backoff)
- **Password complexity**: Enforced client-side and server-side
- **Credential breach detection**: Integration with HaveIBeenPwned API

### Multi-Factor Authentication (MFA)
```mermaid
graph LR
    subgraph "MFA Methods"
        TOTP[TOTP Authenticator<br/>Google Auth, Authy]
        SMS[SMS OTP<br/>Backup method]
        Email[Email OTP<br/>Fallback method]
        WebAuth[WebAuthn/FIDO2<br/>Future enhancement]
    end
    
    subgraph "MFA Flow"
        Primary[Primary Auth<br/>Username + Password]
        MFAChallenge[MFA Challenge<br/>Request second factor]
        MFAVerify[MFA Verification<br/>Validate TOTP/SMS/Email]
        Access[Grant Access<br/>Issue session token]
    end
    
    Primary --> MFAChallenge
    MFAChallenge --> TOTP
    MFAChallenge --> SMS
    MFAChallenge --> Email
    TOTP --> MFAVerify
    SMS --> MFAVerify
    Email --> MFAVerify
    MFAVerify --> Access
```

**Security Features**:
- **TOTP**: RFC 6238 compliant, 30-second window, 6-digit codes
- **Backup codes**: 8 single-use recovery codes
- **Device trust**: Remember trusted devices for 30 days
- **Admin enforcement**: Required MFA for admin accounts

## OAuth 2.0 Security

### Authorization Code Flow Security
```mermaid
sequenceDiagram
    participant Client as Client App
    participant User as User Browser
    participant IDP as Identity Provider
    participant Attacker as Potential Attacker
    
    Note over Client,Attacker: PKCE Protection Against Code Interception
    
    Client->>Client: Generate code_verifier (43-128 chars)
    Client->>Client: Generate code_challenge = SHA256(code_verifier)
    Client->>User: Redirect with code_challenge
    
    Note over User,Attacker: Authorization Code Exchange
    User->>IDP: Authorization request with code_challenge
    IDP->>User: Return authorization code
    
    Note over Attacker: Code Interception Attack
    Attacker->>Attacker: Intercepts authorization code
    Attacker->>IDP: Attempts token exchange (fails - no code_verifier)
    IDP->>Attacker: Error: invalid_grant
    
    Note over Client,IDP: Legitimate Token Exchange
    Client->>IDP: Token request with code + code_verifier
    IDP->>IDP: Verify SHA256(code_verifier) == code_challenge
    IDP->>Client: Access token + refresh token
```

**PKCE Security Implementation**:
- **Mandatory PKCE**: Required for all OAuth flows
- **Code verifier**: 43-128 character random string
- **Challenge method**: SHA256 only (no 'plain' method)
- **Short-lived codes**: 10-minute expiration
- **Single-use codes**: Invalidated after token exchange

### Token Security Model
```mermaid
graph TB
    subgraph "Token Types & Lifespans"
        AuthCode[Authorization Code<br/>10 minutes<br/>Single use]
        AccessToken[Access Token<br/>15 minutes<br/>Bearer token]
        RefreshToken[Refresh Token<br/>30 days<br/>Secure storage]
        IDToken[ID Token<br/>15 minutes<br/>JWT with user info]
    end
    
    subgraph "Token Security Features"
        Hashing[Token Hashing<br/>SHA256 in database]
        Rotation[Token Rotation<br/>New refresh token on use]
        Revocation[Token Revocation<br/>Immediate invalidation]
        Binding[Device Binding<br/>IP + User-Agent check]
    end
    
    subgraph "Attack Prevention"
        Replay[Replay Attack<br/>Nonce validation]
        MITM[MITM Protection<br/>TLS only]
        XSS[XSS Protection<br/>HttpOnly cookies]
        CSRF[CSRF Protection<br/>State parameter]
    end
    
    AuthCode --> Hashing
    AccessToken --> Rotation
    RefreshToken --> Revocation
    IDToken --> Binding
    
    Hashing --> Replay
    Rotation --> MITM
    Revocation --> XSS
    Binding --> CSRF
```

**Token Security Implementation**:
- **Access tokens**: Short-lived (15 min), stateless JWT or opaque tokens
- **Refresh tokens**: Long-lived (30 days), stored hashed, single-use with rotation
- **Token binding**: Optional device fingerprinting for enhanced security
- **Revocation endpoint**: Immediate token invalidation capability

## Infrastructure Security

### Network Security
```mermaid
graph TB
    subgraph "External Layer"
        Internet[Internet Traffic]
        CDN[Vercel Edge Network<br/>- DDoS Protection<br/>- Geographic filtering<br/>- Rate limiting]
    end
    
    subgraph "Application Layer"
        WAF[Web Application Firewall<br/>- SQL injection detection<br/>- XSS prevention<br/>- Malicious request blocking]
        LoadBalancer[Load Balancer<br/>- Health checks<br/>- SSL termination<br/>- Request routing]
    end
    
    subgraph "Service Layer"
        AuthService[Auth Service<br/>- Input validation<br/>- Business logic<br/>- Audit logging]
        RateLimit[Rate Limiting<br/>- Per-IP limits<br/>- Per-user limits<br/>- Sliding window]
    end
    
    subgraph "Data Layer"
        Database[Encrypted Database<br/>- TLS in transit<br/>- Encryption at rest<br/>- Row-level security]
        Backup[Encrypted Backups<br/>- Point-in-time recovery<br/>- Geographic distribution]
    end
    
    Internet --> CDN
    CDN --> WAF
    WAF --> LoadBalancer
    LoadBalancer --> AuthService
    LoadBalancer --> RateLimit
    AuthService --> Database
    Database --> Backup
```

### Rate Limiting Strategy
```javascript
// Rate limiting configuration
const rateLimits = {
  // Authentication endpoints
  '/auth/login': {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per window
    skipSuccessfulRequests: true
  },
  
  // Token endpoints
  '/oauth/token': {
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 10, // 10 token requests per window
  },
  
  // Registration
  '/api/v1/users/register': {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 registrations per hour per IP
  },
  
  // General API
  '/api/v1/*': {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // 1000 requests per window
  }
};
```

## Data Protection

### Encryption Standards
```mermaid
graph LR
    subgraph "Data at Rest"
        DBEncrypt[Database Encryption<br/>AES-256-GCM]
        FileEncrypt[File Storage<br/>Server-side encryption]
        BackupEncrypt[Backup Encryption<br/>Client-side encryption]
    end
    
    subgraph "Data in Transit"
        TLS[TLS 1.3<br/>Perfect Forward Secrecy]
        HSTS[HSTS Headers<br/>Force HTTPS]
        Certificates[Let's Encrypt<br/>Auto-renewal]
    end
    
    subgraph "Application Level"
        Hashing[Password Hashing<br/>bcrypt cost 12]
        Tokens[Token Encryption<br/>JWE for sensitive data]
        PII[PII Tokenization<br/>Reversible encryption]
    end
    
    DBEncrypt --> TLS
    FileEncrypt --> HSTS
    BackupEncrypt --> Certificates
    TLS --> Hashing
    HSTS --> Tokens
    Certificates --> PII
```

### Data Privacy Controls
- **Data minimization**: Collect only necessary user information
- **Purpose limitation**: Use data only for stated purposes
- **Retention limits**: Automatic deletion of inactive accounts after 2 years
- **User control**: Profile export, account deletion, data portability
- **Audit trails**: Comprehensive logging of data access and modifications

## Security Monitoring

### Security Event Detection
```mermaid
graph TB
    subgraph "Event Sources"
        AppLogs[Application Logs<br/>Authentication events]
        AccessLogs[Access Logs<br/>HTTP requests]
        DBLogs[Database Logs<br/>Query patterns]
        SystemLogs[System Logs<br/>Infrastructure events]
    end
    
    subgraph "Detection Rules"
        Anomaly[Anomaly Detection<br/>- Unusual login patterns<br/>- Geographic anomalies<br/>- High-frequency requests]
        Signatures[Signature Detection<br/>- Known attack patterns<br/>- Malicious IP addresses<br/>- Suspicious user agents]
    end
    
    subgraph "Response Actions"
        Alert[Alert Generation<br/>Slack/Email notifications]
        Block[Automatic Blocking<br/>IP/account suspension]
        Escalation[Security Escalation<br/>Manual investigation]
    end
    
    AppLogs --> Anomaly
    AccessLogs --> Signatures
    DBLogs --> Anomaly
    SystemLogs --> Signatures
    
    Anomaly --> Alert
    Signatures --> Block
    Alert --> Escalation
    Block --> Escalation
```

### Security Metrics Dashboard
Key metrics to monitor:
- **Failed login attempts**: Spike detection
- **Token usage patterns**: Unusual API access
- **Geographic distribution**: Login location analysis
- **Client application health**: Error rates, response times
- **Database performance**: Query patterns, connection counts

## Incident Response

### Security Incident Playbook
```mermaid
graph TD
    Detection[Security Event Detected] --> Assessment[Initial Assessment<br/>- Severity classification<br/>- Impact analysis<br/>- Affected users]
    
    Assessment --> Critical{Critical<br/>Incident?}
    Critical -->|Yes| Emergency[Emergency Response<br/>- Immediate containment<br/>- Service degradation<br/>- Executive notification]
    Critical -->|No| Standard[Standard Response<br/>- Investigation<br/>- Evidence collection<br/>- Stakeholder notification]
    
    Emergency --> Containment[Containment Actions<br/>- Block malicious IPs<br/>- Revoke compromised tokens<br/>- Disable affected accounts]
    Standard --> Investigation[Investigation<br/>- Log analysis<br/>- Forensic collection<br/>- Root cause analysis]
    
    Containment --> Recovery[Recovery Actions<br/>- Service restoration<br/>- User communication<br/>- Security patches]
    Investigation --> Recovery
    
    Recovery --> PostMortem[Post-Incident Review<br/>- Lessons learned<br/>- Security improvements<br/>- Process updates]
```

### Breach Notification Procedures
- **Internal notification**: Within 1 hour of detection
- **User notification**: Within 72 hours for personal data breaches
- **Regulatory notification**: As required by local data protection laws
- **Public disclosure**: If breach affects >500 users or system integrity

## Compliance and Standards

### Security Standards Compliance
- **OAuth 2.0 Security Best Practices** (RFC 6749, RFC 6819)
- **OpenID Connect Security Considerations** (OIDC Specification)
- **OWASP Top 10** mitigation strategies
- **NIST Cybersecurity Framework** alignment
- **ISO 27001** security controls (subset applicable to small organizations)

### Regular Security Activities
```mermaid
gantt
    title Security Maintenance Schedule
    dateFormat  YYYY-MM-DD
    section Daily
    Log Review           :active, daily1, 2025-08-03, 1d
    Monitoring Check     :active, daily2, 2025-08-03, 1d
    
    section Weekly  
    Vulnerability Scan   :weekly1, 2025-08-03, 7d
    Access Review        :weekly2, 2025-08-03, 7d
    
    section Monthly
    Security Metrics     :monthly1, 2025-08-03, 30d
    Incident Review      :monthly2, 2025-08-03, 30d
    
    section Quarterly
    Penetration Test     :quarterly1, 2025-08-03, 90d
    Security Training    :quarterly2, 2025-08-03, 90d
```

### Free Security Tools Integration
- **Snyk**: Dependency vulnerability scanning
- **GitHub Security Advisories**: Code security analysis
- **OWASP ZAP**: Automated security testing
- **SSL Labs**: SSL/TLS configuration testing
- **Mozilla Observatory**: Security header analysis

## Cost-Effective Security Measures

### Zero-Cost Security Enhancements
1. **Security Headers**: Implemented via middleware
2. **Rate Limiting**: Application-level implementation
3. **Input Validation**: Server-side validation layers
4. **Audit Logging**: Structured logging to free tiers
5. **Security Scanning**: GitHub Actions with free tools

### Low-Cost Premium Security
- **Web Application Firewall**: Cloudflare free tier
- **DDoS Protection**: Included with Vercel/Netlify
- **SSL Certificates**: Let's Encrypt (free)
- **Security Monitoring**: UptimeRobot free tier
- **Backup Encryption**: Built into cloud providers

This security model provides enterprise-grade protection while maintaining cost-effectiveness, ensuring the Identity Provider can securely serve small-scale applications with a clear path for security scaling as the service grows.