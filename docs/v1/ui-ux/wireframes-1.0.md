# 🖼️ ASCII Wireframes: AuthentiIDP v2.0 - Simplified Developer Experience

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

### A. Auto-Discovery Dashboard

**Purpose**: Simple unified view of all applications with basic configuration management

```
┌──────────────────────────────────────────────────────────────┐
│  🚀 AuthentiIDP Unified Dashboard      john@dev.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  🎯 Simple Application Management • API Keys Required        │
│                                                              │
│    ┌─ Applications (Auto-Discovered) ──────────────────────┐    │
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
│    └─────────────────────────────────────────────────────┘    │
│                                                              │
│    ┌─ Quick Actions ──────────────────────────────────────┐    │
│    │                                                     │    │
│    │  🔑 [Generate New API Keys]                        │    │
│    │  📚 [View Integration Documentation]               │    │
│    │  🛠️ [SDK Download Links]                           │    │
│    │                                                     │    │
│    └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ⚡ Simple management • API keys required for integration    │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Simple Dashboard View → Application Management → API Key Configuration

**Notes**: Auto-discovery, basic application management, API keys required for integration

### B. Simple Integration Guide

**Purpose**: Show developers how simple integration has become with API key configuration

```
┌──────────────────────────────────────────────────────────────┐
│  🚀 AuthentiIDP > Integration Guide    john@dev.com [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  🎯 Simple Integration • API Keys Required • Framework Flexible│
│                                                              │
│    ┌─ Integration in 4 Simple Steps ──────────────────────┐  │
│    │                                                     │  │
│    │  🔑 Step 1: Configure API Keys                     │  │
│    │  ┌─────────────────────────────────────────────────┐ │  │
│    │  │ AUTHENTI_CLIENT_ID=your_client_id           📋 │ │  │
│    │  │ AUTHENTI_CLIENT_SECRET=your_client_secret       │ │  │
│    │  └─────────────────────────────────────────────────┘ │  │
│    │                                                     │  │
│    │  ✨ Step 2: Install SDK (React example)            │  │
│    │  ┌─────────────────────────────────────────────────┐ │  │
│    │  │ npm install @authenti-idp/react             📋 │ │  │
│    │  └─────────────────────────────────────────────────┘ │  │
│    │                                                     │  │
│    │  ✨ Step 3: Add login to your app                  │  │
│    │  ┌─────────────────────────────────────────────────┐ │  │
│    │  │ import { AuthLogin } from '@authenti-idp/react'│ │  │
│    │  │                                                 │ │  │
│    │  │ function App() {                                │ │  │
│    │  │   return <AuthLogin />  // Framework flexible! │ │  │
│    │  │ }                                      📋 Copy │ │  │
│    │  └─────────────────────────────────────────────────┘ │  │
│    │                                                     │  │
│    │  ✨ Step 4: Protect routes (optional)             │  │
│    │  ┌─────────────────────────────────────────────────┐ │  │
│    │  │ import { ProtectedRoute } from '@authenti-idp'  │ │  │
│    │  │                                                 │ │  │
│    │  │ <ProtectedRoute>                                │ │  │
│    │  │   <MySecretComponent />                         │ │  │
│    │  │ </ProtectedRoute>              📋 Copy         │ │  │
│    │  └─────────────────────────────────────────────────┘ │  │
│    └─────────────────────────────────────────────────────┘  │
│                                                              │
│    ┌─ What Happens Automatically ──────────────────────┐     │
│    │                                                   │     │
│    │  🎯 Environment Detection:                        │     │
│    │  • localhost → AuthentiIDP DEV automatically     │     │
│    │  • yourdomain.com → AuthentiIDP PROD automatically│     │
│    │                                                   │     │
│    │  🔒 Security Handled:                            │     │
│    │  • All tokens and credentials managed internally │     │
│    │  • No configuration or secrets to manage         │     │
│    │                                                   │     │
│    │  📊 Analytics Included:                          │     │
│    │  • Usage metrics appear in dashboard automatically│     │
│    │  • No setup or tracking code required            │     │
│    │                                                   │     │
│    │  🎨 UI Provided:                                 │     │
│    │  • Beautiful login/logout UI included            │     │
│    │  • User profile management built-in              │     │
│    │  • Consistent styling across all apps            │     │
│    └───────────────────────────────────────────────────┘     │
│                                                              │
│  ⚡ No credentials, no config, no complexity. It just works! │
└──────────────────────────────────────────────────────────────┘
```

**Flow**: Install → Add Component → Deploy → Works Everywhere

**Notes**: Zero configuration, automatic environment detection, built-in everything


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