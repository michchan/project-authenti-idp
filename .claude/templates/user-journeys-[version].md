
# 📈 User Journey Flowchart [Version] (Template)

This document provides reusable templates for documenting user flows using ASCII diagrams. Each flow represents how a user gets from **A → B**, and flows may be linked between journeys when users switch context or move to a related flow.

---

## 🧭 Index of User Journeys

1. [New User Onboarding](#1-new-user-onboarding)
2. [Login & Authentication](#2-login--authentication)
3. [Product Browsing & Search](#3-product-browsing--search)
4. [Checkout Process](#4-checkout-process)
5. [Password Reset Flow](#5-password-reset-flow)

---

## 1. New User Onboarding

```
[Start]
   |
   v
[Visit Landing Page]
   |
   v
[Click Sign Up]
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
[Welcome Tour Begins] --> (Leads to: Product Browsing)
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

## 3. Product Browsing & Search

```
[User on Dashboard or Homepage]
   |
   +--> [Search Products]
   |
   +--> [Browse by Category]
   |
   v
[View Product Detail]
   |
   +--> [Add to Cart]
   |
   +--> [Save to Wishlist]
   |
   v
[Continue Browsing] --> (Loops back to: Search or Browse)
```

---

## 4. Checkout Process

```
[Cart Page]
   |
   v
[Click Checkout]
   |
   v
[Enter Shipping Info]
   |
   v
[Select Payment Method]
   |
   v
[Review Order]
   |
   v
[Confirm & Pay]
   |
   v
[Order Confirmation Page]
   |
   +--> [Send Receipt Email]
   |
   v
(Leads to: Post-Purchase Survey or Returns)
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

| From Flow                  | Leads To                   |
|---------------------------|----------------------------|
| New User Onboarding       | Product Browsing           |
| Login & Authentication    | Dashboard / Browsing       |
| Product Browsing          | Checkout                   |
| Password Reset            | Login                      |
| Checkout Confirmation     | Post-Purchase / Account    |

---

## 📝 Usage Tips

- Each flow should be easily parsable in monospaced text editors.
- Maintain consistent direction (top-down preferred).
- Use `(Leads to: XYZ)` to mark flow interlinking.
- Link actual screens if paired with wireframes or prototypes.

