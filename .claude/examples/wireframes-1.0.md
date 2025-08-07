# 🛒 E-Commerce Platform Wireframes v1.0

This document contains wireframes for "ShopCraft" - an online marketplace for handmade crafts and artisan goods. The wireframes show the key user flows from discovery to purchase completion.

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

## 1. New User Registration

### a. Landing Page
```
┌──────────────────────────────────────────────┐
│ [Craft Icon] ShopCraft - Handmade Marketplace │
│─────────────────────────────────────────────│
│  Discover unique handmade crafts from        │
│  talented artisans around the world          │
│                                              │
│  [ Join ShopCraft ]         [ Sign In ]      │
│                                              │
│  [ Browse Collections ]                      │
│                                              │
│  Featured Categories:                        │
│  • Jewelry • Pottery • Textiles • Art       │
└──────────────────────────────────────────────┘
```

### b. Registration Form
```
┌──────────────────────────────────────────────┐
│           Join the ShopCraft Community        │
│─────────────────────────────────────────────│
│ Full Name*:    ┌─────────────────────────┐   │
│ Email*:        ┌─────────────────────────┐   │
│ Password*:     ┌─────────────────────────┐   │
│ Confirm Pass*: ┌─────────────────────────┐   │
│                                              │
│ [ ] I'm an artisan interested in selling     │
│ [x] Subscribe to weekly craft highlights     │
│ [x] I agree to Terms & Privacy Policy        │
│                                              │
│ [ Create Account ]                           │
│                                              │
│ Already have an account? [ Sign In ]         │
│                                              │
│ [!] Password must be at least 8 characters   │
└──────────────────────────────────────────────┘
```

### c. Email Verification
```
┌──────────────────────────────────────────────┐
│           Welcome to ShopCraft!              │
│─────────────────────────────────────────────│
│  [Envelope Icon]                             │
│  Please check your email for a verification  │
│  link to activate your account.              │
│                                              │
│  Didn't receive it? [ Resend Email ]         │
│                                              │
│ [✓] Verification email sent to               │
│     user@example.com                         │
└──────────────────────────────────────────────┘
```

**Flow:**
Landing Page → Registration Form → Email Verification → Dashboard

---

## 2. User Authentication

### a. Sign In Page
```
┌──────────────────────────────────────────────┐
│              Welcome Back!                   │
│─────────────────────────────────────────────│
│ Email:    ┌─────────────────────────────┐    │
│ Password: ┌─────────────────────────────┐    │
│                                              │
│ [x] Remember me                              │
│                                              │
│ [ Sign In ]                                  │
│                                              │
│ [ Forgot your password? ]                    │
│                                              │
│ New to ShopCraft? [ Create Account ]         │
│                                              │
│ [!] Invalid email or password                │
└──────────────────────────────────────────────┘
```

### b. Dashboard (Post-Login)
```
┌──────────────────────────────────────────────┐
│ [☰] Hello, Sarah! [Cart:3] [❤:12] [Profile] │
│─────────────────────────────────────────────│
│ [ Search crafts... ]               [ 🔍 ]    │
│                                              │
│ Trending Categories:                         │
│  ┌─────────┬─────────┬─────────┬─────────┐   │
│  │ Jewelry │ Pottery │ Textiles│ Artwork │   │
│  └─────────┴─────────┴─────────┴─────────┘   │
│                                              │
│ Your Recent Favorites:                       │
│  ┌────────────────┬────────────────┐         │
│  │ Handwoven Scarf│ Ceramic Vase   │         │
│  │ $45.00         │ $32.00         │         │
│  └────────────────┴────────────────┘         │
│                                              │
│ [ View All Products ]                        │
└──────────────────────────────────────────────┘
```

**Flow:**
Sign In Page → Dashboard

---

## 3. Product Discovery & Details

### a. Product Catalog
```
┌──────────────────────────────────────────────┐
│ [☰] Handmade Jewelry [Cart:3] [❤:12] [👤]   │
│─────────────────────────────────────────────│
│ [ Search jewelry... ]              [ 🔍 ]    │
│                                              │
│ Filter: [Price ▼] [Material ▼] [Style ▼]     │
│ Sort: [Newest ▼]                 24 items    │
│                                              │
│ ┌──────────┬──────────┬──────────┐           │
│ │Silver    │Rose Gold │Turquoise │           │
│ │Earrings  │Necklace  │Ring      │           │
│ │$28.00    │$65.00    │$42.00    │           │
│ │★★★★☆ 47  │★★★★★ 23  │★★★★☆ 31  │           │
│ └──────────┴──────────┴──────────┘           │
│                                              │
│ ┌──────────┬──────────┬──────────┐           │
│ │Handwoven │Pearl     │Celtic    │           │
│ │Bracelet  │Pendant   │Brooch    │           │
│ │$35.00    │$89.00    │$52.00    │           │
│ │★★★★★ 12  │★★★★☆ 8   │★★★★★ 19  │           │
│ └──────────┴──────────┴──────────┘           │
│                                              │
│ [ Load More ] (12 of 24)                     │
└──────────────────────────────────────────────┘
```

### b. Product Detail Page
```
┌──────────────────────────────────────────────┐
│ ← Back to Jewelry                            │
│─────────────────────────────────────────────│
│ ┌─────────────┐  Silver Moon Earrings        │
│ │  [Image]    │  by CraftedByLuna            │
│ │             │  ★★★★☆ (47 reviews) $28.00   │
│ │ ◦ ◦ ◦ ◦     │                              │
│ └─────────────┘  Handcrafted sterling silver │
│                  crescent moon earrings with │
│                  delicate chain detail.      │
│                                              │
│ Quantity: [1 ▼]    [ Add to Cart ]           │
│                                              │
│ [ ❤ Save ]         [ Share ]                 │
│                                              │
│ Shipping: Free over $35 (2-5 business days)  │
│ Return policy: 30-day returns                │
│                                              │
│ [✓] Added to cart! [ View Cart ]             │
└──────────────────────────────────────────────┘
```

**Flow:**
Dashboard → Product Catalog → Product Detail → Add to Cart

---

## 4. Shopping Cart & Checkout

### a. Shopping Cart
```
┌──────────────────────────────────────────────┐
│                Shopping Cart                 │
│─────────────────────────────────────────────│
│ Your Items: (3)                              │
│                                              │
│ Silver Moon Earrings                         │
│ Qty: [1 ▼] [Remove]              $28.00     │
│                                              │
│ Ceramic Mug Set                              │
│ Qty: [2 ▼] [Remove]              $34.00     │
│                                              │
│ Wool Knit Scarf                              │
│ Qty: [1 ▼] [Remove]              $45.00     │
│                                              │
│ ─────────────────────────────────────────    │
│ Subtotal:                        $107.00    │
│ Shipping:                         FREE      │
│ Tax:                              $8.56     │
│ ─────────────────────────────────────────    │
│ Total:                           $115.56    │
│                                              │
│ [ Continue Shopping ]  [ Checkout ]          │
└──────────────────────────────────────────────┘
```

### b. Shipping Information
```
┌──────────────────────────────────────────────┐
│           Shipping Information               │
│─────────────────────────────────────────────│
│ Full Name*:    ┌─────────────────────────┐   │
│ Address*:      ┌─────────────────────────┐   │
│ City*:         ┌─────────────────────────┐   │
│ State*:        ┌──────┐ ZIP*: ┌─────────┐    │
│ Phone:         ┌─────────────────────────┐   │
│                                              │
│ Shipping Speed:                              │
│ (o) Standard (5-7 days) - FREE              │
│ ( ) Express (2-3 days) - $8.99              │
│ ( ) Overnight - $24.99                      │
│                                              │
│ [ ← Back to Cart ]    [ Continue ]           │
└──────────────────────────────────────────────┘
```

### c. Payment Method
```
┌──────────────────────────────────────────────┐
│             Payment Information              │
│─────────────────────────────────────────────│
│ Payment Method:                              │
│ (o) Credit Card  ( ) PayPal  ( ) Apple Pay  │
│                                              │
│ Card Number*:  ┌───────────────────────┐     │
│ Expiry*: ┌────────┐ CVV*: ┌───┐ ZIP: ┌────┐ │
│ Name on Card*: ┌─────────────────────────┐   │
│                                              │
│ Order Summary:              Total: $115.56  │
│ • Silver Moon Earrings         $28.00       │
│ • Ceramic Mug Set (2x)         $34.00       │
│ • Wool Knit Scarf              $45.00       │
│ • Tax                          $8.56        │
│                                              │
│ [ ← Back ]           [ Complete Order ]      │
└──────────────────────────────────────────────┘
```

### d. Order Confirmation
```
┌──────────────────────────────────────────────┐
│            Order Confirmed! 🎉               │
│─────────────────────────────────────────────│
│ [✓] Thank you for your purchase, Sarah!      │
│                                              │
│ Order #: SC-2024-001234                      │
│ Total: $115.56                               │
│                                              │
│ Confirmation email sent to:                  │
│ sarah@example.com                            │
│                                              │
│ Expected delivery: March 15-22, 2024         │
│                                              │
│ [ Track Your Order ]                         │
│ [ Continue Shopping ]                        │
│                                              │
│ Questions? Contact our artisan support team  │
│ at support@shopcraft.com                     │
└──────────────────────────────────────────────┘
```

**Flow:**
Shopping Cart → Shipping Info → Payment Method → Order Confirmation

---

## 5. Account Management

### a. User Profile
```
┌──────────────────────────────────────────────┐
│               Your Profile                   │
│─────────────────────────────────────────────│
│ ┌─────┐ Sarah Johnson                        │
│ │ [👤] │ Member since: January 2024           │
│ └─────┘ sarah@example.com                    │
│                                              │
│ [ Edit Profile ]    [ Change Password ]      │
│                                              │
│ Quick Stats:                                 │
│ • Orders placed: 12                          │
│ • Favorite artisans: 8                       │
│ • Reviews written: 5                         │
│                                              │
│ Recent Activity:                             │
│ • Purchased Silver Moon Earrings             │
│ • Added Pottery Bowl to wishlist             │
│ • Reviewed Handwoven Scarf                   │
│                                              │
│ [ View Order History ]                       │
│ [ Manage Wishlist ]                          │
└──────────────────────────────────────────────┘
```

### b. Order History
```
┌──────────────────────────────────────────────┐
│              Order History                   │
│─────────────────────────────────────────────│
│ Filter: [All Orders ▼] [Last 6 months ▼]     │
│                                              │
│ Order #SC-2024-001234    March 12, 2024     │
│ Status: [Delivered ✓]         Total: $115.56│
│ • Silver Moon Earrings, Ceramic Mugs...     │
│ [ View Details ] [ Reorder ] [ Review ]     │
│                                              │
│ Order #SC-2024-001198    February 28, 2024  │
│ Status: [Delivered ✓]          Total: $67.50│
│ • Handwoven Scarf, Artisan Soap             │
│ [ View Details ] [ Reorder ] [ Review ]     │
│                                              │
│ Order #SC-2024-001156    February 14, 2024  │
│ Status: [Delivered ✓]          Total: $42.00│
│ • Valentine's Day Card Set                   │
│ [ View Details ] [ Reorder ] [ Review ]     │
│                                              │
│ [ Load Earlier Orders ]                      │
└──────────────────────────────────────────────┘
```

**Flow:**
Dashboard → Profile → Order History → Order Details

---

## 🔗 Screen Connection Map

**Main User Flows:**
- Registration: Landing Page → Registration Form → Email Verification → Dashboard
- Login: Sign In Page → Dashboard  
- Shopping: Dashboard → Product Catalog → Product Detail → Cart → Checkout Flow
- Account: Dashboard → Profile → Order History/Settings

**Navigation Patterns:**
- Header navigation available on all authenticated pages
- Breadcrumb navigation on product pages
- Cart accessible from any page
- Profile menu accessible from header

---

## 📝 Implementation Notes

- **Responsive Design**: All wireframes should adapt to mobile/tablet layouts
- **Accessibility**: Include proper ARIA labels and keyboard navigation
- **Performance**: Implement lazy loading for product images
- **Search**: Include autocomplete and filter functionality
- **Reviews**: Star ratings and customer photos enhance trust
- **Security**: Secure payment processing and data encryption

---

*This wireframe document serves as the foundation for the ShopCraft platform UI/UX design and development phases.*