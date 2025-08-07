# 🚀 [Version] Epic: Enable Single Sign-On (SSO) for All Applications (Template)

**As an** IT administrator,  
**I want** users to log in using SSO (e.g., Google Workspace),  
**So that** authentication is streamlined and more secure.

---

### 🧭 Description
This Epic enables Single Sign-On (SSO) across all internal-facing applications to improve security and simplify user access management.

### 🎯 Acceptance Criteria
- [ ] Users can authenticate via Google Workspace SSO
- [ ] Admin can enable or disable SSO
- [ ] Login activity is logged for auditing
- [ ] Logout terminates all sessions across systems

---

## 📋 Related User Stories

| ID      | Title                             | Status       | Estimate |
|---------|-----------------------------------|--------------|----------|
| [US-001](#us-001-enable-google-sso-login)   | Enable Google SSO Login         | 🟢 To Do     | 3 SP     |
| [US-002](#us-002-admin-setup-for-sso)       | Admin Setup for SSO             | 🔧 In Progress | 5 SP     |
| [US-003](#us-003-track-sso-login-attempts)  | Track SSO Login Attempts        | ✅ Done      | 2 SP     |
| [US-004](#us-004-global-logout-functionality) | Global Logout Functionality     | 🟢 To Do     | 3 SP     |

---

## 📘 User Stories

---

### 🧩 US-001: Enable Google SSO Login

**As a** user,  
**I want** to log in using my Google account,  
**So that** I don’t need to remember separate credentials.

**Acceptance Criteria:**
- [ ] User can click “Login with Google”
- [ ] OAuth2 flow is completed successfully
- [ ] New users are auto-provisioned

**Status**: `🟢 To Do`  
**Estimate**: `3 story points`

**Reference**: [`/docs/auth/SSO-flow.md`](./docs/auth/SSO-flow.md)

**Notes**:
- Reuse existing OAuth2 client credentials used in the admin portal
- Frontend should use popup flow, not redirect

---

### 🧩 US-002: Admin Setup for SSO

**As an** admin,  
**I want** to configure SSO with Google Workspace,  
**So that** all users can log in through it without individual setup.

**Acceptance Criteria:**
- [ ] Admin can toggle SSO on/off
- [ ] It applies to all users
- [ ] Admin can upload metadata file or connect via discovery URL

**Status**: `🔧 In Progress`  
**Estimate**: `5 story points`

**Reference**: [`/designs/admin-sso-settings.png`](./designs/admin-sso-settings.png)

**Notes**:
- Admin settings should be added under `/settings/auth`
- Requires permissions model update to separate SSO-only vs password users

---

### 🧩 US-003: Track SSO Login Attempts

**As a** security auditor,  
**I want** login events to be logged,  
**So that** I can review suspicious access activity.

**Acceptance Criteria:**
- [ ] Log includes timestamp, email, IP, and method
- [ ] Logs accessible via audit dashboard
- [ ] Retain logs for 90 days

**Status**: `✅ Done`  
**Estimate**: `2 story points`

**Notes**:
- Logging already exists for username/password — extend same model for OAuth logins
- Align with compliance requirement from InfoSec team

---

### 🧩 US-004: Global Logout Functionality

**As a** user,  
**I want** to log out from all systems at once,  
**So that** I feel secure after logging out.

**Acceptance Criteria:**
- [ ] Clicking “Logout” ends all active sessions
- [ ] Works across browser tabs and mobile
- [ ] Session invalidation happens server-side

**Status**: `🟢 To Do`  
**Estimate**: `3 story points`

**Notes**:
- Might require Redis pub/sub to notify active sessions
- UX consistency needed with existing logout flow
