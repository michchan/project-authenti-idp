# 🖼️ ASCII Wireframes: AuthentiIDP v1.0

This document provides ASCII wireframes for AuthentiIDP, a centralized identity provider service for personal applications. Each wireframe shows the layout, functionality, and user interactions for different screens and authentication states.

---

## 🔑 Symbol Legend

- `┌─┐, └─┘, │ │, ──` : Box/section boundaries
- `[ Button ]` : Clickable elements
- `[x] / [ ]` : Checkbox states (checked/unchecked)
- `(o) / ( )` : Radio button states (selected/unselected)
- `░░` : Disabled/inactive elements
- `→` : Navigation flow direction
- `*` : Required fields
- `[!]` : Error messages
- `[✓]` : Success messages
- `...` : Truncated content

---

## 📁 Index

1. [Authentication Screens](#1-authentication-screens)
2. [SSO Integration Screens](#2-sso-integration-screens)
3. [User Profile Management](#3-user-profile-management)
4. [Developer Dashboard](#4-developer-dashboard)
5. [Application Management](#5-application-management)
6. [Sample Web Application](#6-sample-web-application)
7. [Mobile Responsive Views](#7-mobile-responsive-views)

---

## 1. Authentication Screens

### A. User Registration Page

**Purpose**: Enable new users to create an AuthentiIDP account with email verification

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP                    [🌙 Dark] [Help] [EN ▼]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    Create Your Account                       │
│                                                              │
│    ┌─ Join the AuthentiIDP Network ──────────────────────┐   │
│    │                                                    │   │
│    │  Email Address: *                                  │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ user@example.com                             │  │   │
│    │  └──────────────────────────────────────────────┘  │   │
│    │                                                    │   │
│    │  Password: *                                       │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ ●●●●●●●●●●●●                                 │  │   │
│    │  └──────────────────────────────────────────────┘  │   │
│    │  Password strength: ████████░░ Strong             │   │
│    │                                                    │   │
│    │  Confirm Password: *                               │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ ●●●●●●●●●●●●                                 │  │   │
│    │  └──────────────────────────────────────────────┘  │   │
│    │                                                    │   │
│    │  Full Name (optional):                            │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ John Doe                                     │  │   │
│    │  └──────────────────────────────────────────────┘  │   │
│    │                                                    │   │
│    │  [x] I agree to the Terms of Service and         │   │
│    │      Privacy Policy                               │   │
│    │                                                    │   │
│    │              [ Create Account ]                    │   │
│    │                                                    │   │
│    │  Already have an account? [Sign In]               │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─ Password Requirements ────────────────────────────────┐  │
│  │ ✓ At least 8 characters      ✓ One uppercase letter  │  │
│  │ ✓ One lowercase letter       ✓ One number or symbol  │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Registration → Email Verification → Login

**Notes**: Real-time password validation, WCAG 2.1 AA compliant form design

### B. Email Verification Screen

**Purpose**: Guide users through email verification process

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP                                   [Help]     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                   📧 Check Your Email                       │
│                                                              │
│    ┌─ Verification Required ─────────────────────────────┐   │
│    │                                                    │   │
│    │  We've sent a verification email to:              │   │
│    │                                                    │   │
│    │           user@example.com                         │   │
│    │                                                    │   │
│    │  Click the verification link in the email to      │   │
│    │  activate your account and complete registration. │   │
│    │                                                    │   │
│    │  ┌─ Didn't receive the email? ─────────────────┐  │   │
│    │  │                                            │  │   │
│    │  │ • Check your spam/junk folder             │  │   │
│    │  │ • Make sure user@example.com is correct   │  │   │
│    │  │ • Wait a few minutes for delivery         │  │   │
│    │  │                                            │  │   │
│    │  │           [Resend Email]                   │  │   │
│    │  │                                            │  │   │
│    │  └────────────────────────────────────────────┘  │   │
│    │                                                    │   │
│    │            [Change Email Address]                  │   │
│    │                                                    │   │
│    │  Need help? Contact support@authenti-idp.com      │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│                      [← Back to Login]                      │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Email Verification → Login Success

**Notes**: Clear instructions, resend functionality, support contact information

### C. Login Page

**Purpose**: Primary authentication screen for returning users

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP                    [🌙 Dark] [Help] [EN ▼]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    Welcome Back                              │
│                                                              │
│    ┌─ Sign In to Your Account ──────────────────────────┐    │
│    │                                                   │    │
│    │  Email Address: *                                 │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ user@example.com                            │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Password: *                                      │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ ●●●●●●●●●●●                                 │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                          [Show]  │    │
│    │                                                   │    │
│    │  [x] Remember me                                  │    │
│    │                                                   │    │
│    │                [ Sign In ]                       │    │
│    │                                                   │    │
│    │             [Forgot Password?]                    │    │
│    │                                                   │    │
│    │  Don't have an account? [Create Account]         │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│  Returning from: TaskMaster App                             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Login → SSO Redirect → Application Access

**Notes**: Context awareness (returning from app), password visibility toggle, remember me option

### D. Password Reset Flow

**Purpose**: Help users recover account access when password is forgotten

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP                                   [Help]     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    Reset Your Password                       │
│                                                              │
│    ┌─ Password Recovery ────────────────────────────────┐    │
│    │                                                   │    │
│    │  Enter your email address and we'll send you a   │    │
│    │  link to reset your password.                    │    │
│    │                                                   │    │
│    │  Email Address: *                                 │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ user@example.com                            │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │              [Send Reset Link]                    │    │
│    │                                                   │    │
│    │             [← Back to Sign In]                   │    │
│    └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP                                   [Help]     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                   Create New Password                        │
│                                                              │
│    ┌─ Reset Password ───────────────────────────────────┐    │
│    │                                                   │    │
│    │  Create a new password for your account:          │    │
│    │                                                   │    │
│    │  New Password: *                                  │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ ●●●●●●●●●●●●                                │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │  Password strength: ████████░░ Strong            │    │
│    │                                                   │    │
│    │  Confirm New Password: *                          │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ ●●●●●●●●●●●●                                │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │             [Update Password]                     │    │
│    │                                                   │    │
│    │  [x] Sign out all other devices                   │    │
│    └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Password Reset Request → Email Link → New Password → Login Success

**Notes**: Security option to invalidate all sessions, password strength indicator

---

## 2. SSO Integration Screens

### A. SSO Consent Screen

**Purpose**: Show users which application is requesting access and what permissions

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP                    user@example.com [↓]      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                 Grant Access Permission                      │
│                                                              │
│    ┌─ Application Access Request ──────────────────────┐     │
│    │                                                  │     │
│    │      📱 TaskMaster App                           │     │
│    │      Created by John Doe                         │     │
│    │                                                  │     │
│    │  This application is requesting access to:      │     │
│    │                                                  │     │
│    │  ✓ Your basic profile information               │     │
│    │    (Name, Email, Profile Picture)               │     │
│    │                                                  │     │
│    │  ✓ Authentication status                        │     │
│    │    (Login/logout notifications)                 │     │
│    │                                                  │     │
│    │  ❯ Permissions you can control:                 │     │
│    │    [x] Share profile updates                    │     │
│    │    [ ] Email notifications from this app       │     │
│    │                                                  │     │
│    │  By continuing, you agree to share this         │     │
│    │  information with TaskMaster App.               │     │
│    │                                                  │     │
│    │         [Cancel]    [Grant Access]              │     │
│    │                                                  │     │
│    │  🔒 Your data remains under your control.       │     │
│    │      You can revoke access anytime.             │     │
│    └──────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: App Request → Consent → Token Generation → App Redirect

**Notes**: Clear permission granularity, user control emphasis, security messaging

### B. Application Selection/Switching

**Purpose**: Allow users to switch between connected applications easily

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP                    user@example.com [↓]      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                  Your Connected Apps                         │
│                                                              │
│    ┌─ Quick Access ──────────────────────────────────────┐   │
│    │                                                    │   │
│    │  📱 TaskMaster App          [Open]    Last: 2h ago │   │
│    │  📊 Analytics Dashboard     [Open]    Last: 1d ago │   │
│    │  🛒 Shopping List App       [Open]    Last: 3d ago │   │
│    │                                                    │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│    ┌─ Recent Activity ──────────────────────────────────┐    │
│    │                                                   │    │
│    │  Today 2:30 PM    Logged into TaskMaster App     │    │
│    │  Today 10:15 AM   Logged into Analytics         │    │
│    │  Yesterday        Password changed               │    │
│    │  2 days ago       New app authorized: Shopping   │    │
│    │                                                   │    │
│    │                           [View Full History]    │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    [🔒 Manage Profile] [📱 Add New App] [⚙️ Settings]      │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: App Selection → Immediate Access (no re-authentication needed)

**Notes**: Last access timestamps, recent activity log, quick management actions

---

## 3. User Profile Management

### A. Profile Settings Page

**Purpose**: Centralized profile management affecting all connected applications

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP > Profile         user@example.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [👤 Profile] [🔒 Security] [📱 Apps] [🔔 Privacy]         │
│                                                              │
│    ┌─ Personal Information ─────────────────────────────┐    │
│    │                          ┌─────┐                  │    │
│    │  Profile Picture:        │ JD  │  [Upload Image]  │    │
│    │                          └─────┘                  │    │
│    │                                                   │    │
│    │  Full Name: *                                     │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ John Doe                                    │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Email Address: *                                 │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ user@example.com                            │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                 [Verify Email]   │    │
│    │                                                   │    │
│    │  Bio (optional):                                  │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ Software developer and productivity         │  │    │
│    │  │ enthusiast from San Francisco               │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │              [Save Changes]                       │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ Profile Visibility ───────────────────────────────┐    │
│    │                                                   │    │
│    │  Who can see your profile information:           │    │
│    │                                                   │    │
│    │  (o) All connected applications                   │    │
│    │  (●) Only applications I specifically allow       │    │
│    │  ( ) Keep profile private (name and email only)  │    │
│    │                                                   │    │
│    │  [✓] Changes will propagate to TaskMaster App    │    │
│    │  [✓] Changes will propagate to Analytics         │    │
│    │  [✓] Changes will propagate to Shopping List     │    │
│    └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Profile Edit → Validation → Save → App Propagation

**Notes**: Real-time propagation status, granular privacy controls, profile picture upload

### B. Connected Applications View

**Purpose**: Manage application permissions and access

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP > Connected Apps   user@example.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [👤 Profile] [🔒 Security] [📱 Apps] [🔔 Privacy]         │
│                                                              │
│    ┌─ Connected Applications (3) ───────────────────────┐    │
│    │                                                   │    │
│    │  📱 TaskMaster App                                │    │
│    │  Connected: March 15, 2025                       │    │
│    │  Last access: 2 hours ago                        │    │
│    │  Permissions: Profile, Authentication            │    │
│    │  Created by: John Doe                            │    │
│    │                                                   │    │
│    │                [Edit Permissions] [Revoke Access] │    │
│    │                                                   │    │
│    ├───────────────────────────────────────────────────┤    │
│    │                                                   │    │
│    │  📊 Analytics Dashboard                           │    │
│    │  Connected: March 10, 2025                       │    │
│    │  Last access: 1 day ago                          │    │
│    │  Permissions: Profile, Email notifications       │    │
│    │  Created by: John Doe                            │    │
│    │                                                   │    │
│    │                [Edit Permissions] [Revoke Access] │    │
│    │                                                   │    │
│    ├───────────────────────────────────────────────────┤    │
│    │                                                   │    │
│    │  🛒 Shopping List App                             │    │
│    │  Connected: March 8, 2025                        │    │
│    │  Last access: 3 days ago                         │    │
│    │  Permissions: Profile only                       │    │
│    │  Created by: John Doe                            │    │
│    │                                                   │    │
│    │                [Edit Permissions] [Revoke Access] │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│                     [+ Add New Application]                  │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: App Selection → Permission Management → Confirmation → Update

**Notes**: Last access tracking, granular permission editing, easy revocation

---

## 4. Developer Dashboard

### A. Developer Console Overview

**Purpose**: Main dashboard for developers managing their applications

```
┌──────────────────────────────────────────────────────────────┐
│  🔧 AuthentiIDP Developer Console           john@dev.com [↓] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [🏠 Dashboard] [📱 My Apps] [📚 Docs] [🔑 API Keys] [⚙️]   │
│                                                              │
│    ┌─ Quick Stats ──────────────────────────────────────┐    │
│    │                                                   │    │
│    │  Total Applications: 3        Active Users: 47   │    │
│    │  This Month's Logins: 1,247   API Calls: 8,934   │    │
│    │                                                   │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ My Applications ──────────────────────────────────┐    │
│    │                                                   │    │
│    │  📱 TaskMaster App               [🟢 Active]      │    │
│    │  Users: 23 • Created: Mar 15    [Manage] [Stats] │    │
│    │                                                   │    │
│    │  📊 Analytics Dashboard         [🟢 Active]      │    │
│    │  Users: 15 • Created: Mar 10    [Manage] [Stats] │    │
│    │                                                   │    │
│    │  🛒 Shopping List App           [🟡 Testing]     │    │
│    │  Users: 9 • Created: Mar 8      [Manage] [Stats] │    │
│    │                                                   │    │
│    │                            [+ Create New App]    │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ Recent Activity ──────────────────────────────────┐    │
│    │                                                   │    │
│    │  2h ago   TaskMaster: 15 new user registrations  │    │
│    │  4h ago   API key regenerated for Analytics      │    │
│    │  1d ago   Shopping List: Configuration updated   │    │
│    │  2d ago   New version of JavaScript SDK released │    │
│    │                                                   │    │
│    │                                [View All Activity] │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    [📖 Get Started Guide] [📞 Contact Support] [📋 Changelog]│
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Dashboard → App Management → Configuration → Testing

**Notes**: High-level metrics, app status indicators, recent activity feed

### B. API Key Management

**Purpose**: Secure management of application credentials and API keys

```
┌──────────────────────────────────────────────────────────────┐
│  🔧 AuthentiIDP > API Keys              john@dev.com [↓]     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [🏠 Dashboard] [📱 My Apps] [📚 Docs] [🔑 API Keys] [⚙️]   │
│                                                              │
│    ┌─ Application Credentials ──────────────────────────┐    │
│    │                                                   │    │
│    │  📱 TaskMaster App                                │    │
│    │                                                   │    │
│    │  Client ID:                                       │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ tk_app_live_1234567890abcdef              📋 │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Client Secret:                                   │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●● [Show]│  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  API Key (Optional):                              │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ ak_live_abcdef1234567890                  📋 │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  [Regenerate Client Secret] [Generate New API Key]│    │
│    │                                                   │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ Environment Settings ─────────────────────────────┐    │
│    │                                                   │    │
│    │  Environment: [Production ▼]                     │    │
│    │                                                   │    │
│    │  Allowed Redirect URLs:                          │    │
│    │  • https://taskmaster.example.com/auth/callback  │    │
│    │  • http://localhost:3000/auth/callback           │    │
│    │                                                   │    │
│    │  [+ Add URL]                                      │    │
│    │                                                   │    │
│    │  Allowed Origins (CORS):                         │    │
│    │  • https://taskmaster.example.com               │    │
│    │  • http://localhost:3000                        │    │
│    │                                                   │    │
│    │  [+ Add Origin]                                   │    │
│    │                                                   │    │
│    │                    [Save Configuration]           │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│  ⚠️  Keep your credentials secure. Never share them publicly.│
└──────────────────────────────────────────────────────────────┘
```

**Flow**: App Selection → Credential Management → Configuration Update

**Notes**: Secure credential display, environment management, URL validation

### C. Integration Documentation Interface

**Purpose**: Interactive documentation with code examples and testing tools

```
┌──────────────────────────────────────────────────────────────┐
│  🔧 AuthentiIDP > Documentation          john@dev.com [↓]    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [🏠 Dashboard] [📱 My Apps] [📚 Docs] [🔑 API Keys] [⚙️]   │
│                                                              │
│  ┌─ Documentation Navigation ───┐ ┌─ Interactive Example ──┐ │
│  │                              │ │                        │ │
│  │ 🚀 Getting Started           │ │ 1. Install the SDK:    │ │
│  │ │ ✓ Create Application       │ │                        │ │
│  │ │ ✓ Install SDK              │ │ ```bash                │ │
│  │ │ ► Basic Integration        │ │ npm install @authenti- │ │
│  │                              │ │ idp/sdk                │ │
│  │ 📚 JavaScript SDK            │ │ ```                    │ │
│  │ │ ► Installation             │ │                        │ │
│  │ │ ► Authentication           │ │ 2. Initialize:         │ │
│  │ │ ► User Management          │ │                        │ │
│  │ │ ► Error Handling           │ │ ```javascript          │ │
│  │                              │ │ import AuthentiIDP     │ │
│  │ 🔌 REST API                  │ │ from '@authenti-idp/sdk'│ │
│  │ │ ► Endpoints                │ │                        │ │
│  │ │ ► Authentication           │ │ const auth = new       │ │
│  │ │ ► Rate Limits              │ │   AuthentiIDP({        │ │
│  │                              │ │     clientId: 'your_id'│ │
│  │ 🧪 Testing & Debugging       │ │   })                   │ │
│  │ │ ► Test Environment         │ │ ```                    │ │
│  │ │ ► Common Issues            │ │                        │ │
│  │ │ ► Error Codes              │ │ [📋 Copy] [▶️ Try It]  │ │
│  └──────────────────────────────┘ └────────────────────────┘ │
│                                                              │
│    ┌─ Quick Start for TaskMaster App ───────────────────┐    │
│    │                                                   │    │
│    │  Your app is configured for:                     │    │
│    │  • Client ID: tk_app_live_1234567890abcdef        │    │
│    │  • Redirect: https://taskmaster.example.com/auth │    │
│    │                                                   │    │
│    │  Copy this code to get started:                  │    │
│    │                                                   │    │
│    │  ┌─ React Example ─────────────────────────────┐  │    │
│    │  │ const loginButton = () => {                 │  │    │
│    │  │   auth.login({                              │  │    │
│    │  │     redirectUri: 'https://taskmaster...'   │  │    │
│    │  │   })                                        │  │    │
│    │  │ }                                           │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │                            [📋 Copy Full Example] │    │
│    └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Documentation Browse → Code Example → Copy/Test → Implementation

**Notes**: App-specific examples, interactive code testing, contextual navigation

---

## 5. Application Management

### A. Application Configuration

**Purpose**: Detailed configuration interface for individual applications

```
┌──────────────────────────────────────────────────────────────┐
│  🔧 AuthentiIDP > TaskMaster App          john@dev.com [↓]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [⚙️ Settings] [📊 Analytics] [👥 Users] [🧪 Testing]       │
│                                                              │
│    ┌─ Basic Information ────────────────────────────────┐    │
│    │                                                   │    │
│    │  Application Name: *                              │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ TaskMaster App                              │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Description:                                     │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ A personal task management application      │  │    │
│    │  │ for organizing daily activities             │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Website URL:                                     │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ https://taskmaster.example.com              │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Privacy Policy URL:                              │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ https://taskmaster.example.com/privacy      │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ Authentication Settings ──────────────────────────┐    │
│    │                                                   │    │
│    │  Session Timeout:         [30 days ▼]            │    │
│    │  Require Email Verify:    [x] Enabled            │    │
│    │  Password Requirements:   [Standard ▼]           │    │
│    │                                                   │    │
│    │  User Registration:       (●) Open to all        │    │
│    │                           ( ) Invite only        │    │
│    │                           ( ) Disabled           │    │
│    │                                                   │    │
│    │  Profile Data Access:                            │    │
│    │  [x] Basic profile (name, email)                 │    │
│    │  [x] Profile picture                             │    │
│    │  [ ] Email notifications permission              │    │
│    │  [ ] Extended profile data                       │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│                           [Save Changes]                     │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Configuration → Validation → Save → Propagation

**Notes**: Comprehensive settings, session management, permission granularity

### B. User Management Interface

**Purpose**: Manage users and view user activity for specific applications

```
┌──────────────────────────────────────────────────────────────┐
│  🔧 AuthentiIDP > TaskMaster App > Users  john@dev.com [↓]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [⚙️ Settings] [📊 Analytics] [👥 Users] [🧪 Testing]       │
│                                                              │
│    🔍 [Search users...] [All Status ▼] [Export CSV]        │
│                                                              │
│    ┌─ Active Users (23) ────────────────────────────────┐    │
│    │                                                   │    │
│    │  📧 user@example.com          Last: 2h ago  [🟢]  │    │
│    │  👤 John Doe • Joined: Mar 15 • Logins: 47      │    │
│    │                              [View] [Suspend]    │    │
│    │                                                   │    │
│    ├───────────────────────────────────────────────────┤    │
│    │                                                   │    │
│    │  📧 alice@example.com         Last: 1d ago  [🟢]  │    │
│    │  👤 Alice Smith • Joined: Mar 12 • Logins: 23   │    │
│    │                              [View] [Suspend]    │    │
│    │                                                   │    │
│    ├───────────────────────────────────────────────────┤    │
│    │                                                   │    │
│    │  📧 bob@example.com           Last: 5d ago  [🟡]  │    │
│    │  👤 Bob Johnson • Joined: Mar 8 • Logins: 12    │    │
│    │                              [View] [Suspend]    │    │
│    │                                                   │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ User Activity Summary ────────────────────────────┐    │
│    │                                                   │    │
│    │  This Week:    127 logins   •   8 new users      │    │
│    │  Last Week:    156 logins   •   5 new users      │    │
│    │  Growth:       +18% logins  •   +60% new users   │    │
│    │                                                   │    │
│    │  Most Active:  Tuesday 2-4 PM                    │    │
│    │  Peak Day:     March 16 (89 logins)              │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    Showing 1-3 of 23 users        [1] [2] [3] ... [8] [Next]│
└──────────────────────────────────────────────────────────────┘
```

**Flow**: User Search → User Details → Management Actions

**Notes**: Activity monitoring, user status indicators, bulk actions, pagination

### C. Analytics and Monitoring Dashboard

**Purpose**: Comprehensive analytics for application usage and authentication patterns

```
┌──────────────────────────────────────────────────────────────┐
│  🔧 AuthentiIDP > TaskMaster App > Analytics john@dev.com [↓]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [⚙️ Settings] [📊 Analytics] [👥 Users] [🧪 Testing]       │
│                                                              │
│  Time Range: [Last 30 Days ▼]                    [📊 Export]│
│                                                              │
│    ┌─ Authentication Metrics ────────────────────────────┐   │
│    │                                                    │   │
│    │  Daily Logins:             Login Success Rate:    │   │
│    │                                                    │   │
│    │        ┌─┐                       ████████████░░   │   │
│    │    ┌─┐ │ │ ┌─┐                       97.8%        │   │
│    │  ┌─│ │ │ │ │ │ ┌─┐                               │   │
│    │  │ │ │ │ │ │ │ │ │   ┌─┐                        │   │
│    │  │ │ │ │ │ │ │ │ │ ┌─│ │                        │   │
│    │  └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─                        │   │
│    │  1  5  10 15 20 25 30       Failed: 2.2%        │   │
│    │                                                    │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│    ┌─ User Engagement ───────────────────────────────────┐   │
│    │                                                    │   │
│    │  New vs Returning Users:    Session Duration:     │   │
│    │                                                    │   │
│    │  New: 35%      ████████      Avg: 24 minutes      │   │
│    │  Return: 65%   ████████████  Most: 2.3 hours     │   │
│    │                               Min: 30 seconds      │   │
│    │  Peak Hours:    Registration Sources:             │   │
│    │  2-4 PM (42%)   Direct: 78%                      │   │
│    │  8-10 AM (31%)  Other Apps: 22%                  │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│    ┌─ Error Analysis ───────────────────────────────────┐    │
│    │                                                   │    │
│    │  Common Issues:               Recent Errors:     │    │
│    │  • Invalid credentials: 45%   Today: 3 errors   │    │
│    │  • Token expired: 23%         Yesterday: 1 error │    │
│    │  • Network timeout: 18%       This week: 12      │    │
│    │  • Server error: 14%          Last week: 8       │    │
│    │                                                   │    │
│    │  Avg resolution time: 2.3 minutes               │    │
│    │                                                   │    │
│    │                           [View Detailed Logs]   │    │
│    └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Analytics View → Filter/Range → Export → Detailed Analysis

**Notes**: Visual charts, error tracking, performance metrics, export functionality

---

## 6. Sample Web Application

### A. Landing Page with Login Integration

**Purpose**: Demo application showing AuthentiIDP integration patterns

```
┌──────────────────────────────────────────────────────────────┐
│  📋 TaskMaster - Sample App    🔐 Powered by AuthentiIDP     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│              Welcome to TaskMaster Demo                      │
│                                                              │
│    ┌─ Experience AuthentiIDP Integration ────────────────┐   │
│    │                                                    │   │
│    │  This sample application demonstrates:             │   │
│    │                                                    │   │
│    │  ✓ Single Sign-On authentication                  │   │
│    │  ✓ Profile management integration                 │   │
│    │  ✓ Session handling across pages                  │   │
│    │  ✓ Secure logout functionality                    │   │
│    │                                                    │   │
│    │  ┌─ Try the Demo ─────────────────────────────┐    │   │
│    │  │                                            │    │   │
│    │  │  Not signed in? Experience the full flow: │    │   │
│    │  │                                            │    │   │
│    │  │        [🔐 Sign In with AuthentiIDP]       │    │   │
│    │  │                                            │    │   │
│    │  │  Or create a new account to test:          │    │   │
│    │  │                                            │    │   │
│    │  │            [📝 Create Account]             │    │   │
│    │  │                                            │    │   │
│    │  └────────────────────────────────────────────┘    │   │
│    │                                                    │   │
│    │  🔍 View source code and integration examples     │   │
│    │  📚 Read the integration documentation            │   │
│    │  🧪 Test API endpoints in the developer console   │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│  For developers: This demo shows real AuthentiIDP SDK usage │
│  GitHub: https://github.com/authenti-idp/demo-app          │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Landing → Authentication → Protected Content

**Notes**: Clear demo purpose, source code access, developer resources

### B. Protected Content Areas

**Purpose**: Show authenticated user experience within sample application

```
┌──────────────────────────────────────────────────────────────┐
│  📋 TaskMaster Demo  👤 John Doe  🔐 AuthentiIDP [Sign Out]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [🏠 Home] [✅ Tasks] [👤 Profile] [⚙️ Settings] [📚 Docs]   │
│                                                              │
│    ┌─ Welcome Back, John! ──────────────────────────────┐    │
│    │                                                   │    │
│    │  You're successfully authenticated via            │    │
│    │  AuthentiIDP! Here's what the SDK provides:      │    │
│    │                                                   │    │
│    │  🔐 Your Authentication Status: ✅ Signed In     │    │
│    │  📧 Email: user@example.com                      │    │
│    │  ⏰ Session: Active (expires in 29 days)          │    │
│    │  🎫 Token: Valid                                  │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ Protected Features ───────────────────────────────┐    │
│    │                                                   │    │
│    │  📝 Personal Tasks:                               │    │
│    │  • Buy groceries                          [✓]    │    │
│    │  • Finish demo application               [✓]    │    │
│    │  • Test AuthentiIDP integration          [ ]    │    │
│    │                                                   │    │
│    │  This content is only visible to authenticated   │    │
│    │  users. Try signing out and back in to see SSO! │    │
│    │                                                   │    │
│    │                              [Add New Task]      │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ Integration Code Examples ────────────────────────┐    │
│    │                                                   │    │
│    │  Current page protection:                         │    │
│    │  ```javascript                                    │    │
│    │  const user = auth.getCurrentUser()               │    │
│    │  if (!user) {                                     │    │
│    │    auth.login() // Redirect to AuthentiIDP       │    │
│    │  }                                                │    │
│    │  ```                                              │    │
│    │                                                   │    │
│    │                               [📋 Copy] [🔍 View] │    │
│    └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Protected Access → User Info Display → Feature Demonstration

**Notes**: Authentication status display, protected content, code examples

### C. Logout and Session Management

**Purpose**: Demonstrate proper session termination and cleanup

```
┌──────────────────────────────────────────────────────────────┐
│  📋 TaskMaster Demo                  🔐 AuthentiIDP          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    Sign Out Options                          │
│                                                              │
│    ┌─ Choose Your Sign Out Preference ────────────────────┐  │
│    │                                                     │  │
│    │  How would you like to sign out?                   │  │
│    │                                                     │  │
│    │  (o) Sign out of TaskMaster Demo only              │  │
│    │      Keep me signed in to other AuthentiIDP apps   │  │
│    │                                                     │  │
│    │  ( ) Sign out of all AuthentiIDP applications      │  │
│    │      Sign me out everywhere for security           │  │
│    │                                                     │  │
│    │  [x] Remember this choice                           │  │
│    │                                                     │  │
│    │              [Cancel] [Sign Out Now]               │  │
│    └─────────────────────────────────────────────────────┘  │
│                                                              │
│    ┌─ What Happens Next ────────────────────────────────┐    │
│    │                                                   │    │
│    │  After signing out:                               │    │
│    │                                                   │    │
│    │  ✓ Your session in this app will end             │    │
│    │  ✓ Protected content will be inaccessible        │    │
│    │  ✓ You'll be redirected to the landing page      │    │
│    │                                                   │    │
│    │  To sign back in:                                 │    │
│    │  • Use the same credentials                       │    │
│    │  • Or use SSO from another connected app          │    │
│    │                                                   │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│                        [← Back to App]                       │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Logout Choice → Confirmation → Redirect → Session Cleanup

**Notes**: Logout scope options, user preference memory, clear expectations

---

## 7. Mobile Responsive Views

### Mobile Authentication (Portrait)

```
╔═══════════════════════════════════╗
║ 🔐 AuthentiIDP         [🌙] [?]  ║
╠═══════════════════════════════════╣
║                                   ║
║         Welcome Back              ║
║                                   ║
║  Email: *                         ║
║  ┌───────────────────────────────┐ ║
║  │ user@example.com              │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  Password: *                      ║
║  ┌───────────────────────────────┐ ║
║  │ ●●●●●●●●●●●●           [Show] │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  [x] Remember me                  ║
║                                   ║
║          [Sign In]                ║
║                                   ║
║       [Forgot Password?]          ║
║                                   ║
║  Don't have an account?           ║
║       [Create Account]            ║
║                                   ║
║  Returning from:                  ║
║  📱 TaskMaster App                ║
║                                   ║
╚═══════════════════════════════════╝
```

### Mobile User Profile (Portrait)

```
╔═══════════════════════════════════╗
║ 🔐 Profile      user@example.com  ║
║                          [Sign Out]║
╠═══════════════════════════════════╣
║                                   ║
║ [👤 Profile] [🔒 Security] [📱]  ║
║                                   ║
║  ┌─────┐                         ║
║  │ JD  │  [Upload Image]         ║
║  └─────┘                         ║
║                                   ║
║  Full Name: *                     ║
║  ┌───────────────────────────────┐ ║
║  │ John Doe                      │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  Email: *                         ║
║  ┌───────────────────────────────┐ ║
║  │ user@example.com              │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  Bio:                             ║
║  ┌───────────────────────────────┐ ║
║  │ Software developer and        │ ║
║  │ productivity enthusiast       │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║        [Save Changes]             ║
║                                   ║
║  Profile Visibility:              ║
║  (●) Only selected apps           ║
║  ( ) All connected apps           ║
║                                   ║
╚═══════════════════════════════════╝
```

### Mobile Developer Dashboard (Portrait)

```
╔═══════════════════════════════════╗
║ 🔧 Dev Console   john@dev.com [↓] ║
╠═══════════════════════════════════╣
║                                   ║
║ [🏠] [📱] [📚] [🔑] [⚙️]         ║
║                                   ║
║  ┌─ Quick Stats ─────────────────┐ ║
║  │ Apps: 3     Users: 47        │ ║
║  │ Logins: 1,247  API: 8,934    │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║  📱 TaskMaster App       [🟢]    ║
║  Users: 23 • Mar 15              ║
║  [Manage] [Stats]                 ║
║                                   ║
║  📊 Analytics            [🟢]    ║
║  Users: 15 • Mar 10              ║
║  [Manage] [Stats]                 ║
║                                   ║
║  🛒 Shopping List        [🟡]    ║
║  Users: 9 • Mar 8                ║
║  [Manage] [Stats]                 ║
║                                   ║
║        [+ New App]                ║
║                                   ║
║  ┌─ Recent Activity ─────────────┐ ║
║  │ 2h  TaskMaster: 15 new users │ ║
║  │ 4h  API key regenerated      │ ║
║  │ 1d  Shopping: Config updated │ ║
║  └───────────────────────────────┘ ║
║                                   ║
║ [📖 Guide] [📞 Support] [📋 Log] ║
║                                   ║
╚═══════════════════════════════════╝
```

**Mobile-Specific Features:**
- Touch-optimized interface elements (44px+ touch targets)
- Hamburger/simplified navigation
- Stacked form layouts
- Swipe gestures for task/app management
- Optimized keyboards for different input types
- Bottom-sheet modals for better thumb accessibility

---

## 🎨 Design System Specifications

### Typography Scale
- **H1**: 28px/24px mobile (Page titles)
- **H2**: 20px/18px mobile (Section headers)
- **H3**: 18px/16px mobile (Card titles)
- **Body**: 16px/14px mobile (Main content)
- **Small**: 14px/12px mobile (Meta info)
- **Caption**: 12px/11px mobile (Labels, tags)

### Color System
- **Primary**: #2563EB (AuthentiIDP brand blue)
- **Success**: #059669 (Green - authenticated, success states)
- **Warning**: #F59E0B (Amber - attention, warnings)
- **Error**: #DC2626 (Red - errors, failed states)
- **Gray Scale**: #F9FAFB, #F3F4F6, #E5E7EB, #D1D5DB, #9CA3AF, #6B7280, #374151, #1F2937

### Spacing System
- **XS**: 4px (Tight spacing)
- **SM**: 8px (Small gaps)
- **MD**: 16px (Standard spacing)
- **LG**: 24px (Section spacing)
- **XL**: 32px (Page margins)
- **2XL**: 48px (Large separations)

### Component States
- **Default**: Standard appearance
- **Hover**: Subtle highlight (desktop only)
- **Focus**: Keyboard navigation indicator
- **Active**: Pressed/selected state
- **Disabled**: Reduced opacity (0.6)
- **Loading**: Spinner + disabled state
- **Error**: Red border + error message
- **Success**: Green accent + success message

---

## 🔗 Flow Connections

Cross-wireframe navigation patterns:

```
Authentication → SSO Consent → Application Access
      ↓               ↓              ↓
Profile Management → Connected Apps → Permission Control
      ↓               ↓              ↓
Developer Console → App Management → User Analytics
      ↓               ↓              ↓
Sample Application → Integration Testing → Documentation
```

**Connection Notes**: All screens maintain consistent navigation patterns with clear breadcrumbs, contextual back buttons, and user identity awareness throughout the experience.

---

## 📱 Responsive Behavior

### Breakpoints
- **Mobile**: 320px - 767px (Single column, stacked elements)
- **Tablet**: 768px - 1023px (Two-column where appropriate)
- **Desktop**: 1024px+ (Full layout with sidebars, multi-column)

### Adaptive Features
- **Navigation**: Hamburger menu on mobile, full nav on desktop
- **Forms**: Stacked labels on mobile, inline on desktop
- **Tables**: Horizontal scroll or card layout on mobile
- **Modals**: Full-screen on mobile, centered dialog on desktop
- **Touch Targets**: Minimum 44px on mobile, smaller allowed on desktop

---

## ✅ Accessibility Requirements

### WCAG 2.1 AA Compliance
- **Color Contrast**: 4.5:1 minimum for normal text
- **Focus Indicators**: Visible focus outline on all interactive elements
- **Keyboard Navigation**: All functionality accessible via keyboard
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Text Scaling**: Interface works at 200% zoom
- **Alternative Text**: Descriptive alt text for all images

### Error Handling
- **Validation**: Real-time feedback with specific error messages
- **Recovery**: Clear paths to resolve errors
- **Timeout**: Warnings before session expiration
- **Network**: Graceful handling of connectivity issues

---

*These wireframes provide the foundation for AuthentiIDP's user interface design, ensuring clear information hierarchy, intuitive interaction patterns, and comprehensive coverage of all user journeys across desktop and mobile devices. The design prioritizes security, usability, and developer experience while maintaining the cost-effective and scalable nature of the platform.*