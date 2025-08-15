# 🖼️ ASCII Wireframes: AuthentiIDP v1.0 - MVP Scope

This document provides ASCII wireframes for AuthentiIDP, a centralized identity provider service for personal applications. Each wireframe shows the layout, functionality, and user interactions for different screens and authentication states.

**MVP Scope Updates**: This document reflects the simplified MVP scope with removed Privacy tab, consolidated Connected Apps management into Profile Settings, streamlined Developer Dashboard, and new Application Settings page for comprehensive app configuration.

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

**End-user journeys**

1. [Authentication Screens](#1-authentication-screens)
2. [SSO Integration Screens](#2-sso-integration-screens)
3. [User Profile Management](#3-user-profile-management)

**Developer journeys**

4. [Developer Dashboard](#4-developer-dashboard)

**Others**

5. [Sample Web Application](#5-sample-web-application)
6. [Mobile Responsive Views](#6-mobile-responsive-views)


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


---

## 3. User Profile Management

### A. Profile Settings Page

**Purpose**: Centralized profile management affecting all connected applications

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP > Profile         user@example.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [👤 Profile] [🔒 Security] [📱 Apps]                      │
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
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Profile Edit → Validation → Save → App Propagation

**Notes**: Real-time propagation status, granular privacy controls, profile picture upload

### B. Connected Applications Tab (Within Profile Settings)

**Purpose**: Manage application permissions and access as part of profile settings

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP > Profile         user@example.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [👤 Profile] [🔒 Security] [📱 Apps]                      │
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

**Flow**: Profile Settings → Apps Tab → Permission Management → Confirmation → Update

**Notes**: Integrated into Profile Settings, last access tracking, granular permission editing, easy revocation

### C. Edit Application Permissions Modal

**Purpose**: Allow users to modify specific permissions for connected applications

```
┌──────────────────────────────────────────────────────────────┐
│  🔐 AuthentiIDP > Edit Permissions user@example.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                   Edit Permissions                           │
│                                                              │
│    ┌─ TaskMaster App Permissions ─────────────────────────┐  │
│    │                                                     │  │
│    │  📱 TaskMaster App                                  │  │
│    │  Connected: March 15, 2025                          │  │
│    │                                                     │  │
│    │  ┌─ Required Permissions ──────────────────────┐    │  │
│    │  │                                            │    │  │
│    │  │  [✓] Basic Profile Information             │    │  │
│    │  │      Name, email, profile picture          │    │  │
│    │  │                                            │    │  │
│    │  │  [✓] Authentication Status                 │    │  │
│    │  │      Login/logout notifications            │    │  │
│    │  │                                            │    │  │
│    │  └────────────────────────────────────────────┘    │  │
│    │                                                     │  │
│    │  ┌─ Optional Permissions ──────────────────────┐    │  │
│    │  │                                            │    │  │
│    │  │  [✓] Profile Updates                       │    │  │
│    │  │      Receive notifications when you        │    │  │
│    │  │      update your profile                   │    │  │
│    │  │                                            │    │  │
│    │  │  [ ] Email Notifications                   │    │  │
│    │  │      Allow app to send you email          │    │  │
│    │  │      notifications                         │    │  │
│    │  │                                            │    │  │
│    │  │  [ ] Extended Profile Data                 │    │  │
│    │  │      Bio, preferences, activity history    │    │  │
│    │  │                                            │    │  │
│    │  └────────────────────────────────────────────┘    │  │
│    │                                                     │  │
│    │  ⚠️  Changing permissions will take effect         │  │
│    │      immediately and may affect app functionality   │  │
│    │                                                     │  │
│    │              [Cancel] [Save Changes]               │  │
│    └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Permission Selection → Confirmation → Update Propagation

**Notes**: Clear distinction between required and optional permissions, immediate effect warning

---

## 4. Developer Dashboard

### A. Simplified Developer Dashboard

**Purpose**: Simple unified view of all applications with basic management options

```
┌──────────────────────────────────────────────────────────────┐
│  🚀 AuthentiIDP Unified Dashboard      john@dev.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  🎯 Simple Application Management                            │
│                                                              │
│    ┌─ All Applications ───────────────────────────────────┐    │
│    │                                                     │    │
│    │  📱 TaskMaster App (localhost:3000 → PROD)         │    │
│    │  🟢 Live • Connected                               │    │
│    │  🔑 [Manage API Keys]  [View Documentation]        │    │
│    │                                                     │    │
│    │  📊 Analytics Dashboard (analytics.myapp.com)      │    │
│    │  🟢 Live • Connected                               │    │
│    │  🔑 [Manage API Keys]  [View Documentation]        │    │
│    │                                                     │    │
│    │  🛒 Shopping App (shopping.local → staging)        │    │
│    │  🟡 Dev • Connected                                │    │
│    │  🔑 [Manage API Keys]  [View Documentation]        │    │
│    │                                                     │    │
│    │  💡 New apps appear here automatically when used   │    │
│    │                                                     │    │
│    │                    [+ Add New Application]          │    │
│    └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ⚡ Simple management with basic options only                │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Simple Dashboard View → Application Management → API Key Configuration

**Notes**: Auto-discovery, simplified interface, basic management options only (no Quick Actions)

### B. Application Settings Page (Comprehensive 5-Tab Interface)

**Purpose**: Comprehensive application configuration and management interface within Application Settings

```
┌──────────────────────────────────────────────────────────────┐
│  🚀 AuthentiIDP > TaskMaster App    john@dev.com [Sign Out]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [← Back to Dashboard]                                       │
│                                                              │
│  [📱 App Info] [🔑 API Keys] [🔗 URLs] [⚙️ Settings] [📚 Docs]│
│                                                              │
│                    TaskMaster App Configuration              │
│                                                              │
│    ┌─ Application Information ──────────────────────────┐    │
│    │                                                   │    │
│    │  Application Name: *                              │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ TaskMaster App                              │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Description:                                     │    │
│    │  ┌─────────────────────────────────────────────┐  │    │
│    │  │ A productivity app for managing daily tasks │  │    │
│    │  └─────────────────────────────────────────────┘  │    │
│    │                                                   │    │
│    │  Application Type: *                              │    │
│    │  (●) Single Page App  ( ) Web App  ( ) API       │    │
│    │                                                   │    │
│    │  Status: 🟢 Active    [Change Status ▼]          │    │
│    └───────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ API Credentials ───────────────────────────────────┐   │
│    │                                                    │   │
│    │  Client ID:                                        │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ app_2x8h9k3j5m2n7p1q4r6s9t2u5v8w1x4y7z0a3b6 │ [📋] │
│    │  └──────────────────────────────────────────────┘  │   │
│    │                                                    │   │
│    │  Client Secret:                                    │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●     │ [👁️] │
│    │  └──────────────────────────────────────────────┘  │   │
│    │                                 [📋 Copy] [🔄 Generate New] │
│    │                                                    │   │
│    │  Last Generated: March 15, 2025                   │   │
│    │  Last Used: 2 hours ago                           │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│    ┌─ Redirect URIs ─────────────────────────────────────┐   │
│    │                                                    │   │
│    │  Authorized Redirect URIs: *                       │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ http://localhost:3000/auth/callback          │ [×] │
│    │  └──────────────────────────────────────────────┘  │   │
│    │  ┌──────────────────────────────────────────────┐  │   │
│    │  │ https://taskmaster.app/auth/callback         │ [×] │
│    │  └──────────────────────────────────────────────┘  │   │
│    │                                                    │   │
│    │  [+ Add Redirect URI]                              │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│    ┌─ Token Settings ────────────────────────────────────┐   │
│    │                                                    │   │
│    │  Access Token Lifespan:                           │   │
│    │  ┌─────────────────┐ minutes (max: 60)            │   │
│    │  │ 30              │                              │   │
│    │  └─────────────────┘                              │   │
│    │                                                    │   │
│    │  Refresh Token Lifespan:                          │   │
│    │  ┌─────────────────┐ days (max: 90)               │   │
│    │  │ 30              │                              │   │
│    │  └─────────────────┘                              │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
│              [Save Changes] [Delete Application]             │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Dashboard → Application Settings → Tab Navigation → Configuration → Save/Delete

**Notes**: Comprehensive 5-tab interface including integrated documentation, complete application management, secure credential handling

### C. Delete Application Confirmation Modal

**Purpose**: Secure confirmation process for application deletion

```
┌──────────────────────────────────────────────────────────────┐
│  🚀 AuthentiIDP > Delete Application john@dev.com [Sign Out] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│    ┌─ Confirm Application Deletion ────────────────────────┐ │
│    │                                                      │ │
│    │  ⚠️  Delete TaskMaster App?                          │ │
│    │                                                      │ │
│    │  This action cannot be undone. Deleting this        │ │
│    │  application will:                                   │ │
│    │                                                      │ │
│    │  • Revoke all user access tokens immediately        │ │
│    │  • Disable SSO login for all connected users        │ │
│    │  • Remove all application configuration data        │ │
│    │  • Delete all associated API credentials            │ │
│    │                                                      │ │
│    │  Users currently logged in to this application      │ │
│    │  will be signed out and unable to access it.        │ │
│    │                                                      │ │
│    │  To confirm deletion, type the application name:    │ │
│    │                                                      │ │
│    │  ┌────────────────────────────────────────────────┐ │ │
│    │  │ TaskMaster App                                 │ │ │
│    │  └────────────────────────────────────────────────┘ │ │
│    │                                                      │ │
│    │  [x] I understand this action cannot be undone      │ │
│    │                                                      │ │
│    │            [Cancel] [Delete Application]            │ │
│    │                      🔴 Danger Zone                 │ │
│    └──────────────────────────────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Delete Button → Confirmation Modal → Name Verification → Deletion

**Notes**: Multi-step confirmation, clear consequences, name verification for safety


---

## 5. Sample Web Application

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

## 6. Mobile Responsive Views

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

## 🔗 Flow Connections

Cross-wireframe navigation patterns showing trigger actions:

**End-user journeys**

```
[Authentication Screens] ──user clicks login/register──→ [SSO Consent Screen] ──user grants access──→ [Application Access]
         |
         |──user clicks profile link──→ [Profile Settings] ──user manages apps──→ [Connected Apps View]
                                                |
                                                |──user changes permissions──→ [Permission Control]
```
**Developer journeys**
```
[Developer Dashboard] ──developer selects app──→ [App Management] ──developer views usage──→ [User Analytics]
         |
         |──developer needs help──→ [Integration Documentation] ──developer tests code──→ [Sample Application]
                                                |
                                                |──developer validates flows──→ [Integration Testing]
```

**Connection Notes**: All screens maintain consistent navigation patterns with clear breadcrumbs, contextual back buttons, and user identity awareness throughout the experience. Triggers are shown as the specific user action that causes navigation between screens.

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

*These simplified wireframes represent a fundamental shift toward zero-configuration user experience design. By eliminating setup complexity while preserving full functionality, the v2.0 interface enables internal teams to focus on their applications rather than authentication infrastructure management.*