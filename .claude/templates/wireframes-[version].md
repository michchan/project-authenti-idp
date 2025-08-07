# 🖼️ ASCII Wireframes [Version] (Template)

**Version**: 1.0 (should be aligned with PRD)

This template provides a higher-fidelity structure for documenting wireframes using ASCII art. Each wireframe corresponds to a key screen or state in the user journey flows, with more detail and advanced ASCII box-drawing for clarity. Use arrows, labels, or notes to show how users move between screens.

---

## 🔑 Legend
- ┌─┐, └─┘, │ │, ── : Box/section boundaries
- [ Button ] : Clickable button
- [x] / [ ] : Checkbox (checked/unchecked)
- (o) / ( ) : Radio button (selected/unselected)
- ░░ : Disabled field/button
- → : Navigation/flow
- * : Required field
- [!] : Error message
- [✓] : Success message
- ... : Truncated list/content

---

## 1. New User Onboarding

### a. Landing Page
```
┌──────────────────────────────────────────────┐
│ [Logo]        TaskFlow                      │
│─────────────────────────────────────────────│
│  Welcome to TaskFlow!                       │
│                                              │
│  [ Sign Up ]                   [ Login ]        │
│                                              │
│  [Learn More]                                │
└──────────────────────────────────────────────┘
```

### b. Registration Form
```
┌──────────────────────────────────────────────┐
│           Create Your Account                │
│─────────────────────────────────────────────│
│ Name*:     ┌─────────────────────────────┐   │
│ Email*:    ┌─────────────────────────────┐   │
│ Password*: ┌─────────────────────────────┐   │
│ [ ] I agree to the Terms and Privacy Policy │
│                                              │
│ [ Sign Up ]                                  │
│                                              │
│ [!] Please fill all required fields          │
└──────────────────────────────────────────────┘
```

### c. Email Verification
```
┌──────────────────────────────────────────────┐
│           Verify Your Email                  │
│─────────────────────────────────────────────│
│  [Envelope Icon]                             │
│  Check your inbox for a verification link.   │
│                                              │
│  [ Resend Email ]                            │
│                                              │
│ [✓] Email sent successfully                  │
└──────────────────────────────────────────────┘
```

### d. Welcome Tour (Modal Overlay)
```
┌──────────────────────────────────────────────┐
│ [Sidebar]         Dashboard                  │
│─────────────────────────────────────────────│
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Welcome, [User]!                        │ │
│ │ [Tour Step 1/3]                         │ │
│ │                                          │ │
│ │ [ Next ]                                 │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

**Flow:**
Landing Page → Registration Form → Email Verification → Welcome Tour

---

## 2. Login & Authentication

### a. Login Page
```
┌──────────────────────────────────────────────┐
│                  Login                       │
│─────────────────────────────────────────────│
│ Email:     ┌─────────────────────────────┐   │
│ Password:  ┌─────────────────────────────┐   │
│                                              │
│ [ Login ]                                    │
│                                              │
│ [ Forgot Password? ]                         │
│                                              │
│ [!] Invalid credentials, please try again      │
└──────────────────────────────────────────────┘
```

### b. 2FA Prompt (if enabled)
```
┌──────────────────────────────────────────────┐
│        Two-Factor Authentication             │
│─────────────────────────────────────────────│
│ Enter 6-digit code: ┌──────┐                 │
│                                              │
│ [ Verify ]                                   │
│                                              │
│ [!] Incorrect code.                          │
└──────────────────────────────────────────────┘
```

### c. Dashboard (Post-Login)
```
┌──────────────────────────────────────────────┐
│ [☰] Dashboard                                │
│─────────────────────────────────────────────│
│ Welcome, [User]!                             │
│                                              │
│ Projects:                                    │
│  ┌───────────────┬───────────────┐           │
│  │ Project A     │ Project B     │           │
│  └───────────────┴───────────────┘           │
│                                              │
│ [ + New Project ]                            │
└──────────────────────────────────────────────┘
```

**Flow:**
Login Page → (if enabled) 2FA Prompt → Dashboard

---

## 3. Product Browsing & Search

### a. Dashboard/Homepage
```
┌──────────────────────────────────────────────┐
│ [☰] Dashboard                                │
│─────────────────────────────────────────────│
│ [Search: ────────────────] [ Search ]        │
│                                              │
│ Categories: [All] [Popular] [New]            │
│                                              │
│ Product List:                                │
│  ┌───────────────┬───────────────┐           │
│  │ Product 1     │ Product 2     │           │
│  └───────────────┴───────────────┘           │
└──────────────────────────────────────────────┘
```

### b. Product Detail
```
┌──────────────────────────────────────────────┐
│ [Product Image]   Product Name               │
│─────────────────────────────────────────────│
│ Description: Lorem ipsum dolor sit amet...   │
│                                              │
│ [ Add to Cart ]              [ Wishlist ]    │
│                                              │
│ [✓] Added to cart!                           │
└──────────────────────────────────────────────┘
```

**Flow:**
Dashboard/Homepage → Product Detail → (Add to Cart or Wishlist)

---

## 4. Checkout Process

### a. Cart Page
```
┌──────────────────────────────────────────────┐
│                  Cart                        │
│─────────────────────────────────────────────│
│ Items:                                       │
│ 1x Product 1   $10.00                       │
│ 2x Product 2   $20.00                       │
│                                              │
│ Total: $50.00                               │
│                                              │
│ [ Checkout ]                                 │
└──────────────────────────────────────────────┘
```

### b. Shipping Info
```
┌──────────────────────────────────────────────┐
│           Shipping Information               │
│─────────────────────────────────────────────│
│ Name:    ┌─────────────────────────────┐     │
│ Address: ┌─────────────────────────────┐     │
│ City:    ┌─────────────────────────────┐     │
│ ...                                          │
│                                              │
│ [ Continue ]                                 │
└──────────────────────────────────────────────┘
```

### c. Payment Method
```
┌──────────────────────────────────────────────┐
│           Payment Method                     │
│─────────────────────────────────────────────│
│ ( ) Credit Card   ( ) PayPal   (o) Apple Pay │
│                                              │
│ Card Number: ┌───────────────────────────┐    │
│ Expiry:      ┌────────┐  CVV: ┌───┐           │
│                                              │
│ [ Pay Now ]                                  │
└──────────────────────────────────────────────┘
```

### d. Order Confirmation
```
┌──────────────────────────────────────────────┐
│           Order Confirmed!                   │
│─────────────────────────────────────────────│
│ [✓] Thank you for your purchase!             │
│ Order #: 12345                               │
│                                              │
│ [ Return to Dashboard ]                      │
└──────────────────────────────────────────────┘
```

**Flow:**
Cart Page → Shipping Info → Payment Method → Order Confirmation

---

## 5. Password Reset Flow

### a. Forgot Password
```
┌──────────────────────────────────────────────┐
│             Forgot Password                  │
│─────────────────────────────────────────────│
│ Email: ┌───────────────────────────────┐     │
│                                              │
│ [ Send Reset Link ]                          │
│                                              │
│ [✓] If your email exists, a reset link was  │
│     sent.                                    │
└──────────────────────────────────────────────┘
```

### b. Reset Email Sent
```
┌──────────────────────────────────────────────┐
│           Check Your Email                   │
│─────────────────────────────────────────────│
│ [Envelope Icon]                              │
│ We sent a password reset link to your email. │
└──────────────────────────────────────────────┘
```

### c. Reset Password Form
```
┌──────────────────────────────────────────────┐
│           Reset Your Password                │
│─────────────────────────────────────────────│
│ New Password:     ┌─────────────────────┐    │
│ Confirm Password: ┌─────────────────────┐    │
│                                              │
│ [ Update Password ]                          │
│                                              │
│ [!] Passwords do not match                   │
└──────────────────────────────────────────────┘
```

### d. Success / Return to Login
```
┌──────────────────────────────────────────────┐
│           Password Updated!                  │
│─────────────────────────────────────────────│
│ [ Return to Login ]                          │
└──────────────────────────────────────────────┘
```

**Flow:**
Forgot Password → Reset Email Sent → Reset Password Form → Success/Return to Login

---

## 🔗 Screen Connection Map

- Use arrows or notes to show how users move between screens.
- Example: `Landing Page → Registration Form → Email Verification → Welcome Tour`
- For branching flows, use labels like `(if enabled)` or `(optional)`.

---

## 📝 Usage Tips

- Use monospaced font for best readability.
- Keep wireframes simple and focus on layout, not visual polish.
- Reference the user journey flow for screen order and connections.
- Add or remove sections as needed for your product. 