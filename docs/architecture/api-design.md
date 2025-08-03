# API Design Specification

## API Architecture Overview

The API follows RESTful principles with OAuth 2.0/OpenID Connect endpoints for standards compliance. All endpoints support JSON request/response format with proper HTTP status codes.

## Base Configuration

```
Production Base URL: https://auth.yourdomain.com
Development Base URL: https://auth-dev.yourdomain.com
API Version: v1
Content-Type: application/json
```

## Authentication Endpoints

### OAuth 2.0 Authorization Endpoint
```http
GET /oauth/authorize
```

**Purpose**: Initiates OAuth 2.0 authorization flow

**Parameters**:
```
response_type: string (required) - "code" for authorization code flow
client_id: string (required) - OAuth client identifier
redirect_uri: string (required) - Callback URL after authorization
scope: string (optional) - Requested permissions (default: "openid profile email")
state: string (recommended) - Client-generated random string for CSRF protection
code_challenge: string (required for PKCE) - SHA256 hash of code_verifier
code_challenge_method: string (required for PKCE) - "S256"
nonce: string (optional) - Random string for ID token validation
prompt: string (optional) - "none", "login", "consent", "select_account"
max_age: number (optional) - Maximum authentication age in seconds
```

**Response**: 
- **Success (302)**: Redirect to redirect_uri with authorization code
- **Error (302)**: Redirect to redirect_uri with error parameters

**Example**:
```http
GET /oauth/authorize?response_type=code&client_id=abc123&redirect_uri=https://app.example.com/callback&scope=openid%20profile%20email&state=xyz&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256
```

### Token Endpoint
```http
POST /oauth/token
```

**Purpose**: Exchange authorization code for access tokens

**Content-Type**: `application/x-www-form-urlencoded`

**Parameters**:
```
grant_type: string (required) - "authorization_code", "refresh_token", "client_credentials"
code: string (required for authorization_code) - Authorization code from /authorize
redirect_uri: string (required for authorization_code) - Must match authorize request
client_id: string (required) - OAuth client identifier
client_secret: string (required for confidential clients) - Client secret
code_verifier: string (required for PKCE) - Original random string
refresh_token: string (required for refresh_token grant) - Valid refresh token
scope: string (optional for refresh_token) - Requested scope subset
```

**Response**:
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "def50200...",
  "scope": "openid profile email",
  "id_token": "eyJhbGciOiJSUzI1NiIs..."
}
```

**Error Response**:
```json
{
  "error": "invalid_grant",
  "error_description": "The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client."
}
```

### Token Revocation
```http
POST /oauth/revoke
```

**Purpose**: Revoke access or refresh tokens

**Parameters**:
```
token: string (required) - Token to revoke
token_type_hint: string (optional) - "access_token" or "refresh_token"
client_id: string (required) - OAuth client identifier
client_secret: string (required for confidential clients) - Client secret
```

**Response**: 
- **Success (200)**: Empty response
- **Error (400)**: Invalid token format

## OpenID Connect Endpoints

### UserInfo Endpoint
```http
GET /oauth/userinfo
Authorization: Bearer {access_token}
```

**Purpose**: Retrieve user profile information

**Response**:
```json
{
  "sub": "248289761001",
  "name": "Jane Doe",
  "given_name": "Jane",
  "family_name": "Doe",
  "email": "jane.doe@example.com",
  "email_verified": true,
  "picture": "https://example.com/avatar.jpg",
  "locale": "en-US",
  "updated_at": 1311280970
}
```

### JWKS Endpoint
```http
GET /.well-known/jwks.json
```

**Purpose**: Public keys for JWT signature verification

**Response**:
```json
{
  "keys": [
    {
      "kty": "RSA",
      "kid": "2011-04-29",
      "use": "sig",
      "alg": "RS256",
      "n": "0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx...",
      "e": "AQAB"
    }
  ]
}
```

### OpenID Configuration
```http
GET /.well-known/openid-configuration
```

**Purpose**: Discover OAuth/OIDC endpoint URLs and capabilities

**Response**:
```json
{
  "issuer": "https://auth.yourdomain.com",
  "authorization_endpoint": "https://auth.yourdomain.com/oauth/authorize",
  "token_endpoint": "https://auth.yourdomain.com/oauth/token",
  "userinfo_endpoint": "https://auth.yourdomain.com/oauth/userinfo",
  "jwks_uri": "https://auth.yourdomain.com/.well-known/jwks.json",
  "response_types_supported": ["code", "id_token", "code id_token"],
  "subject_types_supported": ["public"],
  "id_token_signing_alg_values_supported": ["RS256"],
  "scopes_supported": ["openid", "profile", "email"],
  "token_endpoint_auth_methods_supported": ["client_secret_basic", "client_secret_post", "none"],
  "code_challenge_methods_supported": ["S256"]
}
```

## User Management API

### User Registration
```http
POST /api/v1/users/register
```

**Purpose**: Create new user account

**Request**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123!",
  "first_name": "John",
  "last_name": "Doe",
  "username": "johndoe"
}
```

**Response**:
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "email_verified": false,
  "username": "johndoe",
  "first_name": "John",
  "last_name": "Doe",
  "created_at": "2025-08-03T10:30:00Z"
}
```

### User Login
```http
POST /api/v1/auth/login
```

**Purpose**: Authenticate user credentials

**Request**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123!",
  "remember_me": false
}
```

**Response**:
```json
{
  "session_id": "sess_1234567890",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe"
  },
  "expires_at": "2025-08-03T22:30:00Z"
}
```

### Password Reset
```http
POST /api/v1/auth/password-reset
```

**Purpose**: Initiate password reset flow

**Request**:
```json
{
  "email": "user@example.com"
}
```

**Response**:
```json
{
  "message": "Password reset email sent if account exists"
}
```

### Email Verification
```http
POST /api/v1/users/verify-email
```

**Purpose**: Verify user email address

**Request**:
```json
{
  "token": "verification_token_here"
}
```

**Response**:
```json
{
  "message": "Email verified successfully",
  "email_verified": true
}
```

## Application Management API

### Register OAuth Application
```http
POST /api/v1/applications
Authorization: Bearer {admin_token}
```

**Purpose**: Register new OAuth client application

**Request**:
```json
{
  "name": "My Web App",
  "client_type": "confidential",
  "redirect_uris": [
    "https://myapp.com/callback",
    "https://myapp.com/auth/callback"
  ],
  "allowed_origins": [
    "https://myapp.com"
  ],
  "scope": "openid profile email",
  "logo_url": "https://myapp.com/logo.png"
}
```

**Response**:
```json
{
  "id": "app_550e8400-e29b-41d4-a716-446655440000",
  "name": "My Web App",
  "client_id": "abc123def456",
  "client_secret": "secret_789xyz", 
  "client_type": "confidential",
  "redirect_uris": ["https://myapp.com/callback"],
  "scope": "openid profile email",
  "created_at": "2025-08-03T10:30:00Z"
}
```

### List Applications
```http
GET /api/v1/applications
Authorization: Bearer {admin_token}
```

**Purpose**: List all registered applications

**Query Parameters**:
```
page: number (optional) - Page number (default: 1)
limit: number (optional) - Items per page (default: 20, max: 100)
status: string (optional) - Filter by status ("active", "suspended")
```

**Response**:
```json
{
  "applications": [
    {
      "id": "app_550e8400-e29b-41d4-a716-446655440000",
      "name": "My Web App",
      "client_id": "abc123def456",
      "client_type": "confidential",
      "status": "active",
      "created_at": "2025-08-03T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "total_pages": 1
  }
}
```

## Session Management API

### Get Current Session
```http
GET /api/v1/sessions/current
Authorization: Bearer {access_token}
```

**Purpose**: Retrieve current session information

**Response**:
```json
{
  "session_id": "sess_1234567890",
  "user_id": "550e8400-e29b-41d4-a716-446655440000",
  "ip_address": "192.168.1.1",
  "user_agent": "Mozilla/5.0...",
  "last_activity": "2025-08-03T10:30:00Z",
  "expires_at": "2025-08-03T22:30:00Z"
}
```

### Logout
```http
POST /api/v1/auth/logout
Authorization: Bearer {access_token}
```

**Purpose**: Terminate current session

**Request**:
```json
{
  "logout_all_sessions": false
}
```

**Response**:
```json
{
  "message": "Logged out successfully"
}
```

### List User Sessions
```http
GET /api/v1/sessions
Authorization: Bearer {access_token}
```

**Purpose**: List all active sessions for current user

**Response**:
```json
{
  "sessions": [
    {
      "session_id": "sess_1234567890",
      "ip_address": "192.168.1.1",
      "user_agent": "Mozilla/5.0...",
      "current": true,
      "last_activity": "2025-08-03T10:30:00Z",
      "created_at": "2025-08-03T08:00:00Z"
    }
  ]
}
```

## Admin API

### Get System Stats
```http
GET /api/v1/admin/stats
Authorization: Bearer {admin_token}
```

**Purpose**: Retrieve system statistics

**Response**:
```json
{
  "users": {
    "total": 150,
    "active_last_30_days": 89,
    "verified": 142
  },
  "applications": {
    "total": 5,
    "active": 5
  },
  "tokens": {
    "active_access_tokens": 23,
    "active_refresh_tokens": 15
  }
}
```

### Security Events
```http
GET /api/v1/admin/security-events
Authorization: Bearer {admin_token}
```

**Purpose**: Retrieve security audit log

**Query Parameters**:
```
event_type: string (optional) - Filter by event type
user_id: string (optional) - Filter by user
start_date: string (optional) - ISO 8601 date
end_date: string (optional) - ISO 8601 date
page: number (optional) - Page number
limit: number (optional) - Items per page
```

**Response**:
```json
{
  "events": [
    {
      "id": "evt_123",
      "event_type": "login_success",
      "user_id": "550e8400-e29b-41d4-a716-446655440000",
      "ip_address": "192.168.1.1",
      "user_agent": "Mozilla/5.0...",
      "details": {
        "client_id": "abc123def456"
      },
      "created_at": "2025-08-03T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 234
  }
}
```

## Error Handling

### Standard Error Response Format
```json
{
  "error": "invalid_request",
  "error_description": "The request is missing a required parameter, includes an invalid parameter value, or is otherwise malformed.",
  "error_uri": "https://docs.auth.yourdomain.com/errors#invalid_request",
  "state": "xyz" // If provided in original request
}
```

### HTTP Status Codes
- **200 OK**: Successful GET/PUT/PATCH requests
- **201 Created**: Successful POST requests
- **204 No Content**: Successful DELETE requests
- **400 Bad Request**: Invalid request format or parameters
- **401 Unauthorized**: Invalid or missing authentication
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **409 Conflict**: Resource already exists
- **422 Unprocessable Entity**: Validation errors
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server-side errors

### Rate Limiting Headers
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1641024000
Retry-After: 3600
```

## API Security

### Authentication Methods
1. **OAuth 2.0 Bearer Tokens**: For user-authenticated requests
2. **Client Credentials**: For server-to-server requests
3. **API Keys**: For admin dashboard (fallback)

### Security Headers
```http
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### CORS Configuration
```javascript
{
  origin: ['https://admin.yourdomain.com', 'https://docs.yourdomain.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true
}
```

## API Versioning Strategy

### URL Versioning
- Current: `/api/v1/`
- Future: `/api/v2/`

### Backward Compatibility
- Maintain v1 for minimum 12 months after v2 release
- Deprecation warnings in response headers
- Migration guides for breaking changes

This API design provides comprehensive OAuth 2.0/OIDC compliance while maintaining simplicity for client integration and operational management.