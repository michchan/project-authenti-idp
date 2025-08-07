
# 📈 User Journey Flowchart: TaskFlow

This document outlines key user journeys for TaskFlow, a SaaS project management platform. Each flow is presented as an ASCII diagram, showing how users move through the system.

---

## 🧭 Index of User Journeys

1. [New User Onboarding](#1-new-user-onboarding)
2. [Login & Authentication](#2-login--authentication)
3. [Project Creation & Setup](#3-project-creation--setup)
4. [Task Management](#4-task-management)
5. [Password Reset Flow](#5-password-reset-flow)

---

## 1. New User Onboarding

```
[Start]
   |
   v
[Visit TaskFlow Landing Page]
   |
   v
[Click "Sign Up"]
   |
   v
[Fill Registration Form]
   |
   v
[Email Verification Sent] ----+
   |                          |
   v                          |
[User Verifies Email] <-------+
   |
   v
[Welcome Tour Begins] --> (Leads to: Project Creation & Setup)
```

---

## 2. Login & Authentication

```
[Start]
   |
   v
[Visit Login Page]
   |
   +--> [Forgot Password?] --> (Leads to: Password Reset)
   |
   v
[Enter Credentials]
   |
   v
[2FA Prompt (if enabled)]?
   |     |
  Yes    No
   |     |
   v     v
[Verify 2FA] [Login Success]
      |         |
      +---->----+
               v
          [Redirect to Dashboard]
```

---

## 3. Project Creation & Setup

```
[Dashboard]
   |
   v
[Click "Create New Project"]
   |
   v
[Enter Project Details]
   |
   v
[Invite Team Members]
   |
   v
[Set Up Project Board]
   |
   v
[Add First Task]
   |
   v
[Project Ready] --> (Leads to: Task Management)
```

---

## 4. Task Management

```
[Project Board]
   |
   +--> [Add Task]
   |
   +--> [Edit Task]
   |
   +--> [Move Task (Drag & Drop)]
   |
   +--> [Assign Task to User]
   |
   +--> [Mark Task Complete]
   |
   v
[Continue Managing Tasks] --> (Loops back to: Project Board)
```

---

## 5. Password Reset Flow

```
[Login Page]
   |
   v
[Click 'Forgot Password']
   |
   v
[Enter Email Address]
   |
   v
[Reset Email Sent] ----+
   |                   |
   v                   |
[Click Link in Email] <+
   |
   v
[Enter New Password]
   |
   v
[Password Updated]
   |
   v
[Return to Login Page] --> (Leads to: Login & Authentication)
```

---

## 🔗 Inter-Flow Connections Summary

| From Flow                | Leads To                |
|--------------------------|------------------------|
| New User Onboarding      | Project Creation       |
| Login & Authentication   | Dashboard / Projects   |
| Project Creation         | Task Management        |
| Password Reset           | Login                  |

---

## 📝 Usage Tips

- Each flow is designed for clarity in monospaced text editors.
- Use `(Leads to: XYZ)` to indicate flow transitions.
- Link to actual UI screens or wireframes where available.