# 📈 User Journey Flowchart: AuthentiIDP v1.0 - MVP Scope

## 🧭 Index of User Journeys

**End-user journeys**

1. [End User Registration & First Login](#1-end-user-registration--first-login)
2. [End User SSO Login Flow](#2-end-user-sso-login-flow)
3. [Password Reset & Recovery](#3-password-reset--recovery)
4. [User Profile Management](#4-user-profile-management)
5. [Session Management & Logout](#5-session-management--logout)

**Developer journeys**

1. [Developer Integration Workflow](#6-developer-integration-workflow)
2. [Application Management Dashboard](#7-application-management-dashboard)

---

## End-user journeys

## 1. End User Registration & First Login

### Flow Purpose
**Goal**: Enable new users to create an account and successfully authenticate for the first time across multiple applications

### ASCII Flow Diagram

```
[User visits connected application]
         |
         v
[Application redirects to AuthentiIDP login]
         |
         v
[Login page displays with "Create Account" option]
         |
         v
[User clicks "Create Account"]
         |
         v
[Registration form appears]
   - Email address (required)
   - Password (8+ chars, complexity rules)
   - Confirm password
   - Name (optional)
         |
         v
[User submits registration form]
         |
         v
<Form errors?> ──→ [Display errors, return to form]
         |                    
         v                   
[Email verification sent]
         |
         v
[User checks email]
         |
         v
[Clicks verification link] ──→ <Link expired?> ──→ [Error page with resend option]
         |                           |                        |
         v                           ↑                        |
[Account activated] ←──────────────┘ ←──────────────────┘
         |
         v
[Authentication successful]
         |
         v
[Redirect back to original application]
         |
         v
[User lands in application as authenticated]
         |
         v
[Registration complete - user ready for SSO across apps]
```


---

## 2. End User SSO Login Flow

### Flow Purpose
**Goal**: Provide seamless authentication experience for returning users across multiple connected applications

### ASCII Flow Diagram

```
[User visits Application A (already has session)]
         |
         v
[Application checks for valid token]
         |
         v
<Token valid?> ──→ [YES] ──→ [User accesses app directly]
         |                        |
         v                        v
[NO - Redirect to AuthentiIDP]  [Session continues]
         |
         v
[AuthentiIDP checks for active session]
         |
         v
<Active session exists?> ──→ [YES] ──→ [Redirect to App A]
         |                              |
         v                              v
[NO - Show login form]               [User accesses App A]
         |
         v
[User enters credentials]
         |
         v
[Authentication successful]
         |
         v
[User now has SSO session (valid for 30-90 days) for all apps]
         |
         v
[User visits Application B]
         |
         v
[App B redirects to AuthentiIDP]
         |
         v
[Redirect to App B - NO LOGIN REQUIRED]
         |
         v
[Seamless SSO experience across applications]
```


---

## 3. Password Reset & Recovery

### Flow Purpose
**Goal**: Help users regain access to their accounts when they forget their passwords

### ASCII Flow Diagram

```
[User forgets password]
         |
         v
[Visits any connected application]
         |
         v
[Redirected to AuthentiIDP login]
         |
         v
[Clicks "Forgot Password" link]
         |
         v
[Password reset form appears]
   - Email address field
   - reCAPTCHA (optional)
         |
         v
[User submits email address]
         |
         v
[System validates email] ──→ <Email not found> ──→ [Generic success message]
         |                        |                         |
         v                        v                         |
[Email exists in system]    [Security: don't reveal]  ←───┘
         |                    user doesn't exist
         v
[Generate secure reset token]
         |
         v
[Send reset email with token link]
         |
         v
[User receives and clicks reset link]
         |
         v
[Validate token] ──→ <Token expired/invalid?> ──→ [Error with retry option]
         |                    |                           |
         v                    v                           |
[Reset form displays]   [Clear error message] ←─────────┘
   - New password
   - Confirm password
   - Password strength indicator
         |
         v
[User submits new password]
         |
         v
[Validation checks] ──→ <Password weak/mismatch?> ──→ [Show errors, stay on form]
         |                    |                              |
         v                    v                              |
[Password updated]      [Real-time validation] ←───────────┘
         |
         v
[Invalidate all existing sessions]
         |
         v
[Success message with login link]
         |
         v
[User logs in with new password]
         |
         v
[Access restored across all applications]
```


---

## 4. User Profile Management

### Flow Purpose
**Goal**: Allow users to manage their personal information and account settings centrally

### ASCII Flow Diagram

```
[User wants to update profile]
         |
         v
[Accesses profile from any connected app]
         |
         v
[Redirected to AuthentiIDP profile page]
         |
         v
[Profile dashboard displays]
   - Current profile information
   - Connected applications list
   - Account security settings
         |
         v
[User navigates to section]
         |
         +──→ [Basic Info] ──→ [Edit name, email, avatar]
         |         |                    |
         |         v                    v
         |    [Save changes] ──→ [Validate inputs]
         |         |                    |
         |         v                    v
         |    [Propagate to apps] ←─────┘
         |
         +──→ [Security] ──→ [Change password]
         |         |              |
         |         v              v
         |    [Two-factor auth] [Current + new password]
         |         |              |
         |         v              v
         |    [Session management] [Validate and update]
         |
         +──→ [Connected Apps Tab] ──→ [View authorized applications]
                   |                    |
                   v                    v
              [Edit Permissions] ──→ [Configure app permissions]
                   |                    |
                   v                    v
              [Save permissions] [Update app access]
                   |
                   v
              [Revoke access] ──→ [Confirm disconnection]
                   |                    |
                   v                    v
              [Remove app access] [Update user session]
```


---

## 5. Session Management & Logout

### Flow Purpose
**Goal**: Provide users control over their authentication sessions and secure logout functionality

### ASCII Flow Diagram

```
[User wants to log out]
         |
         v
[Clicks logout in any connected application]
         |
         v
[Application offers logout options]
         |
         v
[User chooses logout scope]
         |
         +──→ [Log out of this app only]
         |         |
         |         v
         |    [Clear local app session]
         |         |
         |         v
         |    [User remains logged in elsewhere]
         |
         +──→ [Log out of all applications]
                   |
                   v
              [Redirect to AuthentiIDP]
                   |
                   v
              [Confirm logout from all apps]
                   |
                   v
              [User confirms global logout]
                   |
                   v
              [Invalidate all tokens and sessions]
                   |
                   v
              [Send logout notifications to all apps]
                   |
                   v
              [Apps clear local sessions]
                   |
                   v
              [Redirect to logout confirmation page]
                   |
                   v
              [Show logged out status]
                   |
                   v
              [Provide re-login options]

[Alternative: Session timeout]
         |
         v
[User session expires due to inactivity]
         |
         v
[Application detects invalid token]
         |
         v
[Attempts automatic token refresh]
         |
         v
<Refresh successful?> ──→ [YES] ──→ [Continue session silently]
         |                              |
         v                              v
[NO - Session expired]            [User unaware of renewal]
         |
         v
[Redirect to login with context message]
         |
         v
[User re-authenticates to continue]
```


---

## Developer journeys

## 6. Developer Integration Workflow

### Flow Purpose
**Goal**: Enable internal developers to add authentication to applications with simplified setup

### ASCII Flow Diagram

```
[Developer needs authentication for new app]
         |
         v
[Accesses simplified developer dashboard]
         |
         v
[Manages API keys for application]
         |
         v
[Configures application settings]
         |
         v
[Adds login component to app] (React example - framework choice flexible)
         |
         v
[Tests locally] ──→ [Authentication works]
         |                      |
         v                      v
[Deploys to production] ──→ [Same code works in production]
         |
         v
[Integration complete - users can authenticate across all apps]
```


---

## 7. Application Management Dashboard

### Flow Purpose
**Goal**: Enable product managers to configure and manage applications with comprehensive settings

### ASCII Flow Diagram

```
[Product Manager visits dashboard]
         |
         v
[Simplified dashboard displays]
   - All applications (auto-detected)
   - Basic management options
         |
         v
[Simple overview with essential actions]
         |
         +──→ [All Applications] ──→ [Select application]
         |                              |
         |                              v
         |                         [Application Settings - 5-tab interface]
         |                         [📱 App Info] [🔑 API Keys] [🔗 URLs] [⚙️ Settings] [📚 Docs]
         |                              |
         |                              v
         |                         [Configure across all tabs]
         |                              |
         |                              v
         |                         [Save changes or delete application]
         |
         +──→ [Add New Application] ──→ [Create application configuration]
                                         |
                                         v
                                    [Generate API credentials]
```


---

## 🔗 Inter-Flow Connections

### End-user journeys
```
[End User Registration]
   |
   ──user completes email verification──
   |
   v
[End User SSO Login]

[End User Registration]
   |
   ──user clicks profile/settings link──
   |
   v
[User Profile Management]
   |
   ──user chooses to change password──
   |
   v
[Password Reset & Recovery]
   |
   ──user completes password change──
   |
   v
[End User SSO Login]

[Session Management & Logout]
   |
   ──user logs out then returns──
   |
   v
[End User SSO Login]

[Any Flow]
   |
   ──system errors or user mistakes──
   |
   v
[Error Recovery Flows]
```

### Developer journeys
```
[Developer Integration]
   |
   ──developer needs to configure app──
   |
   v
[Application Management Dashboard]
   |
   ──manager selects application──
   |
   v
[Application Settings - 5-tab interface]
   |
   ──manager configures across all tabs──
   |
   v
[Save Configuration]
```

**Connection Notes**: All flows are designed to maintain user context and provide clear paths between related functionality. Error states always include recovery paths back to successful workflows.
