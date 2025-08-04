# Account Management - Identity Provider

## Overview

This section covers the complete account management experience, from profile settings to security controls, connected apps management, and privacy settings. The interface prioritizes user control, transparency, and easy access to critical account functions.

## Account Dashboard

### Goals & Entry Points
- **User Goal**: Easily manage account settings and security
- **Entry Points**: Direct navigation, post-login redirect, security alerts, app redirects, email links

### Dashboard Layout

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
<h3 style="margin-top: 0;">🖼️ Account Dashboard Wireframe</h3>

<div style="border: 2px solid #dee2e6; padding: 20px; background: white; font-family: monospace; max-width: 900px; margin: 20px auto;">
<div style="border-bottom: 1px solid #dee2e6; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
<div style="display: flex; align-items: center;">
<span style="font-weight: bold; margin-right: 20px;">[🏠 Logo] Account Dashboard</span>
</div>
<div style="display: flex; align-items: center; gap: 15px;">
<div style="position: relative;">
<span style="background: #e9ecef; padding: 6px 12px; border-radius: 4px;">[👤 John Doe]</span>
<span style="background: #dc3545; color: white; font-size: 10px; padding: 2px 4px; border-radius: 50%; position: absolute; top: -5px; right: -5px;">2</span>
</div>
<button style="padding: 6px 12px; border: 1px solid #dee2e6; border-radius: 4px; background: white;">Logout</button>
</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
<div style="background: #f8f9fa; padding: 20px; border-radius: 6px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
<h3 style="margin: 0;">Account Overview</h3>
<button style="padding: 6px 12px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; font-size: 12px;">Edit Profile</button>
</div>
<div style="margin-bottom: 10px;"><strong>Name:</strong> John Doe</div>
<div style="margin-bottom: 10px;"><strong>Email:</strong> john@example.com <span style="color: #28a745;">✓ verified</span></div>
<div style="margin-bottom: 10px;"><strong>Phone:</strong> +1 (555) 123-4567 <span style="color: #28a745;">✓ verified</span></div>
<div style="margin-bottom: 15px;"><strong>Last login:</strong> Today at 2:30 PM</div>
</div>

<div style="background: #f8f9fa; padding: 20px; border-radius: 6px;">
<h3 style="margin: 0 0 15px 0;">Security Status</h3>
<div style="margin-bottom: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
<span>Overall Security</span>
<span style="color: #28a745; font-weight: bold;">Strong</span>
</div>
<div style="background: #e9ecef; height: 8px; border-radius: 4px; overflow: hidden;">
<div style="background: #28a745; height: 100%; width: 75%;"></div>
</div>
</div>
<div style="font-size: 12px; color: #6c757d; margin-bottom: 10px;">
• 2FA enabled ✓<br/>
• Strong password ✓<br/>
• Recent activity reviewed<br/>
• Recommend: Security key setup
</div>
</div>
</div>

<div style="margin-bottom: 30px;">
<h3 style="margin: 0 0 15px 0;">Quick Actions</h3>
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
<button style="padding: 10px 15px; background: #0066cc; color: white; border: none; border-radius: 4px;">Update Profile</button>
<button style="padding: 10px 15px; border: 1px solid #dee2e6; border-radius: 4px; background: white;">Security Settings</button>
<button style="padding: 10px 15px; border: 1px solid #dee2e6; border-radius: 4px; background: white;">Privacy Controls</button>
<button style="padding: 10px 15px; border: 1px solid #dee2e6; border-radius: 4px; background: white;">Connected Apps</button>
</div>
</div>

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
<div>
<h3 style="margin: 0 0 15px 0;">Connected Applications (3)</h3>
<div style="border: 1px solid #dee2e6; border-radius: 6px; overflow: hidden;">
<div style="padding: 15px; border-bottom: 1px solid #dee2e6;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div style="display: flex; align-items: center;">
<span style="background: #e9ecef; padding: 8px; border-radius: 4px; margin-right: 12px;">[📱]</span>
<div>
<div style="font-weight: bold;">MyApp</div>
<div style="font-size: 12px; color: #6c757d;">Connected: Jan 15, 2024</div>
<div style="font-size: 12px; color: #6c757d;">Last used: 2 hours ago</div>
</div>
</div>
<div style="display: flex; gap: 8px;">
<button style="padding: 4px 8px; border: 1px solid #dee2e6; border-radius: 4px; background: white; font-size: 12px;">Manage</button>
<button style="padding: 4px 8px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Disconnect</button>
</div>
</div>
</div>
<div style="padding: 15px; border-bottom: 1px solid #dee2e6;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div style="display: flex; align-items: center;">
<span style="background: #e9ecef; padding: 8px; border-radius: 4px; margin-right: 12px;">[💼]</span>
<div>
<div style="font-weight: bold;">WorkTool</div>
<div style="font-size: 12px; color: #6c757d;">Connected: Dec 3, 2023</div>
<div style="font-size: 12px; color: #6c757d;">Last used: Yesterday</div>
</div>
</div>
<div style="display: flex; gap: 8px;">
<button style="padding: 4px 8px; border: 1px solid #dee2e6; border-radius: 4px; background: white; font-size: 12px;">Manage</button>
<button style="padding: 4px 8px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Disconnect</button>
</div>
</div>
</div>
<div style="padding: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div style="display: flex; align-items: center;">
<span style="background: #e9ecef; padding: 8px; border-radius: 4px; margin-right: 12px;">[🔧]</span>
<div>
<div style="font-weight: bold;">DevTool</div>
<div style="font-size: 12px; color: #6c757d;">Connected: Nov 12, 2023</div>
<div style="font-size: 12px; color: #6c757d;">Last used: 1 week ago</div>
</div>
</div>
<div style="display: flex; gap: 8px;">
<button style="padding: 4px 8px; border: 1px solid #dee2e6; border-radius: 4px; background: white; font-size: 12px;">Manage</button>
<button style="padding: 4px 8px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Disconnect</button>
</div>
</div>
</div>
</div>
<div style="text-align: center; margin-top: 15px;">
<a href="#" style="color: #0066cc; font-size: 14px;">View All Applications</a>
</div>
</div>

<div>
<h3 style="margin: 0 0 15px 0;">Recent Activity</h3>
<div style="background: #f8f9fa; padding: 15px; border-radius: 6px; font-size: 14px;">
<div style="margin-bottom: 10px; padding: 8px; background: white; border-radius: 4px;">
<span style="color: #28a745;">●</span> Signed in from Chrome, New York<br/>
<span style="color: #6c757d; font-size: 12px;">2 hours ago</span>
</div>
<div style="margin-bottom: 10px; padding: 8px; background: white; border-radius: 4px;">
<span style="color: #17a2b8;">●</span> Updated profile picture<br/>
<span style="color: #6c757d; font-size: 12px;">Yesterday</span>
</div>
<div style="margin-bottom: 10px; padding: 8px; background: white; border-radius: 4px;">
<span style="color: #ffc107;">●</span> Connected new app: DevTool<br/>
<span style="color: #6c757d; font-size: 12px;">3 days ago</span>
</div>
<div style="padding: 8px; background: white; border-radius: 4px;">
<span style="color: #dc3545;">●</span> Changed password<br/>
<span style="color: #6c757d; font-size: 12px;">1 week ago</span>
</div>
</div>
<div style="text-align: center; margin-top: 15px;">
<a href="#" style="color: #0066cc; font-size: 14px;">View Full Activity</a>
</div>
</div>
</div>
</div>
</div>

## Profile Management

### Basic Profile Settings

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
<h3 style="margin-top: 0;">🖼️ Profile Settings Wireframe</h3>

<div style="border: 2px solid #dee2e6; padding: 20px; background: white; font-family: monospace; max-width: 700px; margin: 20px auto;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #dee2e6;">
<h2 style="margin: 0;">Profile Settings</h2>
<div style="display: flex; gap: 10px;">
<button style="padding: 8px 16px; border: 1px solid #dee2e6; border-radius: 4px; background: white;">Cancel</button>
<button style="padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px;">Save Changes</button>
</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px;">
<div style="text-align: center;">
<div style="width: 120px; height: 120px; border: 2px dashed #dee2e6; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; background: #f8f9fa;">
<span style="font-size: 48px;">👤</span>
</div>
<button style="padding: 8px 16px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; margin-bottom: 8px; display: block; width: 100%;">Upload Photo</button>
<button style="padding: 8px 16px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; display: block; width: 100%; font-size: 12px;">Remove Photo</button>
</div>

<div>
<form>
<div style="margin-bottom: 20px;">
<label style="display: block; margin-bottom: 5px; font-weight: bold;">Display Name</label>
<input type="text" value="John Doe" style="width: 100%; padding: 10px; border: 1px solid #dee2e6; border-radius: 4px; box-sizing: border-box;">
</div>

<div style="margin-bottom: 20px;">
<label style="display: block; margin-bottom: 5px; font-weight: bold;">Email Address</label>
<div style="display: flex; gap: 10px;">
<input type="email" value="john@example.com" style="flex: 1; padding: 10px; border: 1px solid #dee2e6; border-radius: 4px;">
<span style="display: flex; align-items: center; color: #28a745; font-size: 12px;">✓ Verified</span>
</div>
<div style="font-size: 12px; color: #6c757d; margin-top: 5px;">
<a href="#" style="color: #0066cc;">Change email address</a>
</div>
</div>

<div style="margin-bottom: 20px;">
<label style="display: block; margin-bottom: 5px; font-weight: bold;">Phone Number</label>
<div style="display: flex; gap: 10px;">
<input type="tel" value="+1 (555) 123-4567" style="flex: 1; padding: 10px; border: 1px solid #dee2e6; border-radius: 4px;">
<span style="display: flex; align-items: center; color: #28a745; font-size: 12px;">✓ Verified</span>
</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
<div>
<label style="display: block; margin-bottom: 5px; font-weight: bold;">Language</label>
<select style="width: 100%; padding: 10px; border: 1px solid #dee2e6; border-radius: 4px;">
<option>English (US)</option>
<option>Spanish</option>
<option>French</option>
</select>
</div>
<div>
<label style="display: block; margin-bottom: 5px; font-weight: bold;">Timezone</label>
<select style="width: 100%; padding: 10px; border: 1px solid #dee2e6; border-radius: 4px;">
<option>Eastern Time (UTC-5)</option>
<option>Pacific Time (UTC-8)</option>
<option>UTC</option>
</select>
</div>
</div>

<div style="margin-bottom: 20px;">
<label style="display: block; margin-bottom: 5px; font-weight: bold;">Bio (Optional)</label>
<textarea placeholder="Tell others about yourself..." style="width: 100%; padding: 10px; border: 1px solid #dee2e6; border-radius: 4px; box-sizing: border-box; height: 80px; resize: vertical;"></textarea>
<div style="font-size: 12px; color: #6c757d; margin-top: 5px;">Maximum 300 characters</div>
</div>
</form>
</div>
</div>
</div>
</div>

### Profile Features
- **Basic Information**: Name, email, phone, language, timezone
- **Profile Picture**: Upload, crop, remove options
- **Extended Profile**: Bio, organization, location, website
- **Verification Levels**: Email, phone, identity verification
- **Privacy Controls**: Field-level visibility, public profile toggle

## Security Settings

### Security Dashboard

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
<h3 style="margin-top: 0;">🖼️ Security Settings Wireframe</h3>

<div style="border: 2px solid #dee2e6; padding: 20px; background: white; font-family: monospace; max-width: 800px; margin: 20px auto;">
<h2 style="margin: 0 0 25px 0; padding-bottom: 15px; border-bottom: 1px solid #dee2e6;">Security Settings</h2>

<div style="background: #e8f5e8; border: 1px solid #c3e6c3; padding: 15px; border-radius: 6px; margin-bottom: 25px;">
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<span style="color: #28a745; margin-right: 10px; font-size: 18px;">🛡️</span>
<span style="font-weight: bold; color: #28a745;">Security Score: Strong (8/10)</span>
</div>
<div style="font-size: 14px; color: #155724;">
Your account is well protected. Consider adding a security key for maximum security.
</div>
</div>

<div style="margin-bottom: 30px;">
<h3 style="margin: 0 0 15px 0;">Password</h3>
<div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border: 1px solid #dee2e6; border-radius: 6px;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Password</div>
<div style="font-size: 14px; color: #6c757d;">Last updated: 1 week ago</div>
<div style="font-size: 12px; color: #28a745;">Strong password ✓</div>
</div>
<button style="padding: 8px 16px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc;">Change Password</button>
</div>
</div>

<div style="margin-bottom: 30px;">
<h3 style="margin: 0 0 15px 0;">Two-Factor Authentication</h3>
<div style="border: 1px solid #dee2e6; border-radius: 6px; overflow: hidden;">
<div style="padding: 15px; border-bottom: 1px solid #dee2e6;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Authenticator App</div>
<div style="font-size: 14px; color: #28a745;">✓ Enabled (Primary method)</div>
</div>
<button style="padding: 6px 12px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Remove</button>
</div>
</div>
<div style="padding: 15px; border-bottom: 1px solid #dee2e6;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">SMS Verification</div>
<div style="font-size: 14px; color: #28a745;">✓ Enabled (Backup method)</div>
</div>
<button style="padding: 6px 12px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; font-size: 12px;">Configure</button>
</div>
</div>
<div style="padding: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Security Key</div>
<div style="font-size: 14px; color: #6c757d;">Not configured (Recommended)</div>
</div>
<button style="padding: 6px 12px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; font-size: 12px;">Add Key</button>
</div>
</div>
</div>
</div>

<div style="margin-bottom: 30px;">
<h3 style="margin: 0 0 15px 0;">Backup Codes</h3>
<div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border: 1px solid #dee2e6; border-radius: 6px;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Recovery Codes</div>
<div style="font-size: 14px; color: #6c757d;">8 unused codes remaining</div>
<div style="font-size: 12px; color: #ffc107;">⚠️ Download and store these safely</div>
</div>
<button style="padding: 8px 16px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc;">View Codes</button>
</div>
</div>

<div>
<h3 style="margin: 0 0 15px 0;">Active Sessions</h3>
<div style="border: 1px solid #dee2e6; border-radius: 6px; overflow: hidden;">
<div style="padding: 15px; border-bottom: 1px solid #dee2e6;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">🖥️ Desktop - Chrome</div>
<div style="font-size: 14px; color: #6c757d;">New York, NY • Last active: Now</div>
<div style="font-size: 12px; color: #28a745;">Current session</div>
</div>
<button style="padding: 6px 12px; border: 1px solid #dee2e6; border-radius: 4px; background: white; font-size: 12px;" disabled>This Device</button>
</div>
</div>
<div style="padding: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">📱 Mobile - Safari</div>
<div style="font-size: 14px; color: #6c757d;">Boston, MA • Last active: 2 hours ago</div>
</div>
<button style="padding: 6px 12px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Sign Out</button>
</div>
</div>
</div>
<div style="text-align: center; margin-top: 15px;">
<button style="padding: 8px 16px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545;">Sign Out All Other Sessions</button>
</div>
</div>
</div>
</div>

### Security Features
1. **Password Management**
   - Change password with strength validation
   - Password history tracking
   - Breach database checking

2. **Two-Factor Authentication**
   - Multiple 2FA methods (SMS, Authenticator, Security Keys)
   - Backup codes generation
   - Device trust management

3. **Session Management**
   - Active session monitoring
   - Device identification and location
   - Remote session termination

4. **Login Activity**
   - Detailed activity logs
   - Suspicious activity alerts
   - Geographic login notifications

## Connected Applications

### App Management Interface

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
<h3 style="margin-top: 0;">🖼️ Connected Apps Management Wireframe</h3>

<div style="border: 2px solid #dee2e6; padding: 20px; background: white; font-family: monospace; max-width: 900px; margin: 20px auto;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #dee2e6;">
<h2 style="margin: 0;">Connected Applications</h2>
<div style="display: flex; gap: 10px; align-items: center;">
<input type="text" placeholder="Search apps..." style="padding: 8px; border: 1px solid #dee2e6; border-radius: 4px;">
<select style="padding: 8px; border: 1px solid #dee2e6; border-radius: 4px;">
<option>All apps</option>
<option>Recently used</option>
<option>By permission</option>
</select>
</div>
</div>

<div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
<div style="display: flex; align-items: center;">
<span style="color: #856404; margin-right: 10px;">⚠️</span>
<div style="color: #856404;">
<strong>Review recommended:</strong> Some apps haven't been used in over 90 days. Consider removing unused connections for better security.
</div>
</div>
</div>

<div style="border: 1px solid #dee2e6; border-radius: 6px; overflow: hidden;">
<div style="padding: 20px; border-bottom: 1px solid #dee2e6;">
<div style="display: grid; grid-template-columns: auto 1fr auto auto; gap: 15px; align-items: center;">
<span style="background: #e9ecef; padding: 12px; border-radius: 6px; font-size: 20px;">📱</span>
<div>
<div style="font-weight: bold; margin-bottom: 5px;">MyApp</div>
<div style="font-size: 14px; color: #6c757d; margin-bottom: 3px;">Connected: Jan 15, 2024 • Last used: 2 hours ago</div>
<div style="font-size: 12px;">
<span style="background: #e8f5e8; color: #28a745; padding: 2px 6px; border-radius: 3px; margin-right: 5px;">Profile</span>
<span style="background: #e8f5e8; color: #28a745; padding: 2px 6px; border-radius: 3px; margin-right: 5px;">Email</span>
<span style="background: #fff3cd; color: #856404; padding: 2px 6px; border-radius: 3px;">Offline Access</span>
</div>
</div>
<div style="text-align: center;">
<div style="font-size: 12px; color: #6c757d; margin-bottom: 3px;">Risk Level</div>
<span style="background: #d1ecf1; color: #0c5460; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Low</span>
</div>
<div style="display: flex; gap: 8px;">
<button style="padding: 6px 12px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; font-size: 12px;">Manage</button>
<button style="padding: 6px 12px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Revoke</button>
</div>
</div>
</div>

<div style="padding: 20px; border-bottom: 1px solid #dee2e6;">
<div style="display: grid; grid-template-columns: auto 1fr auto auto; gap: 15px; align-items: center;">
<span style="background: #e9ecef; padding: 12px; border-radius: 6px; font-size: 20px;">💼</span>
<div>
<div style="font-weight: bold; margin-bottom: 5px;">WorkTool Pro</div>
<div style="font-size: 14px; color: #6c757d; margin-bottom: 3px;">Connected: Dec 3, 2023 • Last used: Yesterday</div>
<div style="font-size: 12px;">
<span style="background: #e8f5e8; color: #28a745; padding: 2px 6px; border-radius: 3px; margin-right: 5px;">Profile</span>
<span style="background: #e8f5e8; color: #28a745; padding: 2px 6px; border-radius: 3px; margin-right: 5px;">Email</span>
<span style="background: #e8f5e8; color: #28a745; padding: 2px 6px; border-radius: 3px; margin-right: 5px;">Calendar</span>
<span style="background: #ffeaa7; color: #856404; padding: 2px 6px; border-radius: 3px;">Write Access</span>
</div>
</div>
<div style="text-align: center;">
<div style="font-size: 12px; color: #6c757d; margin-bottom: 3px;">Risk Level</div>
<span style="background: #fff3cd; color: #856404; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Medium</span>
</div>
<div style="display: flex; gap: 8px;">
<button style="padding: 6px 12px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; font-size: 12px;">Manage</button>
<button style="padding: 6px 12px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Revoke</button>
</div>
</div>
</div>

<div style="padding: 20px;">
<div style="display: grid; grid-template-columns: auto 1fr auto auto; gap: 15px; align-items: center;">
<span style="background: #e9ecef; padding: 12px; border-radius: 6px; font-size: 20px;">🔧</span>
<div>
<div style="font-weight: bold; margin-bottom: 5px;">DevTool Analytics</div>
<div style="font-size: 14px; color: #6c757d; margin-bottom: 3px;">Connected: Aug 10, 2023 • Last used: 3 months ago</div>
<div style="font-size: 12px;">
<span style="background: #e8f5e8; color: #28a745; padding: 2px 6px; border-radius: 3px; margin-right: 5px;">Profile</span>
<span style="background: #f8d7da; color: #721c24; padding: 2px 6px; border-radius: 3px;">Full Account Access</span>
</div>
</div>
<div style="text-align: center;">
<div style="font-size: 12px; color: #6c757d; margin-bottom: 3px;">Risk Level</div>
<span style="background: #f8d7da; color: #721c24; padding: 4px 8px; border-radius: 4px; font-size: 12px;">High</span>
</div>
<div style="display: flex; gap: 8px;">
<button style="padding: 6px 12px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; font-size: 12px;">Manage</button>
<button style="padding: 6px 12px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; font-size: 12px;">Revoke</button>
</div>
</div>
</div>
</div>

<div style="display: flex; justify-content: between; align-items: center; margin-top: 20px;">
<div style="font-size: 14px; color: #6c757d;">Showing 3 of 7 connected applications</div>
<div style="display: flex; gap: 10px;">
<button style="padding: 8px 16px; border: 1px solid #dee2e6; border-radius: 4px; background: white;">Previous</button>
<button style="padding: 8px 16px; border: 1px solid #dee2e6; border-radius: 4px; background: white;">Next</button>
</div>
</div>
</div>
</div>

### App Management Features
1. **Application Overview**
   - App details with logos and descriptions
   - Connection dates and last usage
   - Permission breakdowns and risk levels
   - Developer information and ratings

2. **Permission Controls**
   - Granular permission management
   - Risk assessment and recommendations
   - Bulk permission updates
   - Data sharing transparency

3. **Security Monitoring**
   - Unusual access pattern detection
   - Security audit results
   - User report summaries
   - Compliance certifications

## Privacy Controls

### Privacy Dashboard

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
<h3 style="margin-top: 0;">🖼️ Privacy Controls Wireframe</h3>

<div style="border: 2px solid #dee2e6; padding: 20px; background: white; font-family: monospace; max-width: 800px; margin: 20px auto;">
<h2 style="margin: 0 0 25px 0; padding-bottom: 15px; border-bottom: 1px solid #dee2e6;">Privacy Controls</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
<div style="background: #f8f9fa; padding: 20px; border-radius: 6px;">
<h3 style="margin: 0 0 15px 0;">Data Collection</h3>
<div style="margin-bottom: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
<span style="font-size: 14px;">Essential Data</span>
<input type="checkbox" checked disabled style="margin: 0;">
</div>
<div style="font-size: 12px; color: #6c757d;">Required for account functionality</div>
</div>
<div style="margin-bottom: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
<span style="font-size: 14px;">Analytics & Insights</span>
<label style="position: relative; display: inline-block; width: 40px; height: 20px;">
<input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
<span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #0066cc; transition: .4s; border-radius: 20px;"></span>
<span style="position: absolute; content: ''; height: 16px; width: 16px; left: 22px; bottom: 2px; background: white; transition: .4s; border-radius: 50%;"></span>
</label>
</div>
<div style="font-size: 12px; color: #6c757d;">Usage patterns and improvements</div>
</div>
<div style="margin-bottom: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
<span style="font-size: 14px;">Marketing Communications</span>
<label style="position: relative; display: inline-block; width: 40px; height: 20px;">
<input type="checkbox" style="opacity: 0; width: 0; height: 0;">
<span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #ccc; transition: .4s; border-radius: 20px;"></span>
<span style="position: absolute; content: ''; height: 16px; width: 16px; left: 2px; bottom: 2px; background: white; transition: .4s; border-radius: 50%;"></span>
</label>
</div>
<div style="font-size: 12px; color: #6c757d;">Product updates and promotions</div>
</div>
</div>

<div style="background: #f8f9fa; padding: 20px; border-radius: 6px;">
<h3 style="margin: 0 0 15px 0;">Data Rights</h3>
<div style="margin-bottom: 12px;">
<button style="width: 100%; padding: 10px; border: 1px solid #0066cc; border-radius: 4px; background: white; color: #0066cc; text-align: left;">📥 Download My Data</button>
</div>
<div style="margin-bottom: 12px;">
<button style="width: 100%; padding: 10px; border: 1px solid #ffc107; border-radius: 4px; background: white; color: #856404; text-align: left;">🔍 Review Data Usage</button>
</div>
<div style="margin-bottom: 12px;">
<button style="width: 100%; padding: 10px; border: 1px solid #6c757d; border-radius: 4px; background: white; color: #6c757d; text-align: left;">🚫 Limit Data Processing</button>
</div>
<div>
<button style="width: 100%; padding: 10px; border: 1px solid #dc3545; border-radius: 4px; background: white; color: #dc3545; text-align: left;">🗑️ Delete Account</button>
</div>
</div>
</div>

<div style="margin-bottom: 30px;">
<h3 style="margin: 0 0 15px 0;">Communication Preferences</h3>
<div style="border: 1px solid #dee2e6; border-radius: 6px; overflow: hidden;">
<div style="padding: 15px; border-bottom: 1px solid #dee2e6; background: #f8f9fa;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Security Alerts</div>
<div style="font-size: 14px; color: #6c757d;">Critical security notifications (always enabled)</div>
</div>
<span style="color: #28a745; font-weight: bold;">Required</span>
</div>
</div>
<div style="padding: 15px; border-bottom: 1px solid #dee2e6;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Account Notifications</div>
<div style="font-size: 14px; color: #6c757d;">Profile changes, login alerts, app connections</div>
</div>
<label style="position: relative; display: inline-block; width: 40px; height: 20px;">
<input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
<span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #0066cc; transition: .4s; border-radius: 20px;"></span>
<span style="position: absolute; content: ''; height: 16px; width: 16px; left: 22px; bottom: 2px; background: white; transition: .4s; border-radius: 50%;"></span>
</label>
</div>
</div>
<div style="padding: 15px; border-bottom: 1px solid #dee2e6;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Product Updates</div>
<div style="font-size: 14px; color: #6c757d;">New features, improvements, maintenance notifications</div>
</div>
<label style="position: relative; display: inline-block; width: 40px; height: 20px;">
<input type="checkbox" style="opacity: 0; width: 0; height: 0;">
<span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #ccc; transition: .4s; border-radius: 20px;"></span>
<span style="position: absolute; content: ''; height: 16px; width: 16px; left: 2px; bottom: 2px; background: white; transition: .4s; border-radius: 50%;"></span>
</label>
</div>
</div>
<div style="padding: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-weight: bold; margin-bottom: 5px;">Marketing Communications</div>
<div style="font-size: 14px; color: #6c757d;">Promotional offers, tips, surveys</div>
</div>
<label style="position: relative; display: inline-block; width: 40px; height: 20px;">
<input type="checkbox" style="opacity: 0; width: 0; height: 0;">
<span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #ccc; transition: .4s; border-radius: 20px;"></span>
<span style="position: absolute; content: ''; height: 16px; width: 16px; left: 2px; bottom: 2px; background: white; transition: .4s; border-radius: 50%;"></span>
</label>
</div>
</div>
</div>
</div>

<div>
<h3 style="margin: 0 0 15px 0;">Data Sharing & Third Parties</h3>
<div style="background: #e8f5e8; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<span style="color: #28a745; margin-right: 10px;">🛡️</span>
<span style="font-weight: bold; color: #28a745;">No data sold to third parties</span>
</div>
<div style="font-size: 14px; color: #155724;">
We never sell your personal information. Data is only shared with your explicit consent for connected applications.
</div>
</div>
<div style="font-size: 14px;">
<div style="margin-bottom: 10px;">
<a href="#" style="color: #0066cc;">📄 View our Privacy Policy</a>
</div>
<div style="margin-bottom: 10px;">
<a href="#" style="color: #0066cc;">🔍 See what data we collect</a>
</div>
<div>
<a href="#" style="color: #0066cc;">⚖️ Your privacy rights by region</a>
</div>
</div>
</div>
</div>
</div>

### Privacy Features
1. **Data Collection Controls**
   - Granular consent management
   - Purpose-specific data usage
   - Easy consent withdrawal
   - Data minimization options

2. **Data Rights**
   - Download personal data
   - Review data usage
   - Request data deletion
   - Limit data processing

3. **Communication Preferences**
   - Notification type controls
   - Delivery method selection
   - Frequency management
   - Opt-out mechanisms

## Mobile Account Management

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
<h3 style="margin-top: 0;">📱 Mobile Account Dashboard Wireframe</h3>

<div style="border: 2px solid #dee2e6; padding: 15px; background: white; font-family: monospace; max-width: 320px; margin: 20px auto;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #dee2e6;">
<span style="font-size: 16px;">☰</span>
<span style="font-weight: bold;">Account</span>
<span style="font-size: 16px;">⚙️</span>
</div>

<div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<div style="width: 50px; height: 50px; border-radius: 50%; background: #e9ecef; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 20px;">👤</div>
<div>
<div style="font-weight: bold;">John Doe</div>
<div style="font-size: 12px; color: #6c757d;">john@example.com</div>
<div style="font-size: 12px; color: #28a745;">✓ Verified</div>
</div>
</div>
<div style="font-size: 14px; color: #6c757d; margin-bottom: 5px;">Security: <span style="color: #28a745;">●●●○○ Strong</span></div>
<div style="font-size: 12px; color: #6c757d;">Last login: 2h ago</div>
</div>

<div style="margin-bottom: 20px;">
<div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f8f9fa;">
<span style="margin-right: 12px; font-size: 16px;">👤</span>
<span style="flex: 1;">Profile</span>
<span style="color: #6c757d;">›</span>
</div>
<div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f8f9fa;">
<span style="margin-right: 12px; font-size: 16px;">🔒</span>
<span style="flex: 1;">Security</span>
<span style="color: #6c757d;">›</span>
</div>
<div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f8f9fa;">
<span style="margin-right: 12px; font-size: 16px;">🔗</span>
<span style="flex: 1;">Connected Apps</span>
<span style="background: #dc3545; color: white; font-size: 10px; padding: 2px 4px; border-radius: 50%; margin-right: 8px;">3</span>
<span style="color: #6c757d;">›</span>
</div>
<div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f8f9fa;">
<span style="margin-right: 12px; font-size: 16px;">🔍</span>
<span style="flex: 1;">Activity</span>
<span style="color: #6c757d;">›</span>
</div>
<div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f8f9fa;">
<span style="margin-right: 12px; font-size: 16px;">⚙️</span>
<span style="flex: 1;">Settings</span>
<span style="color: #6c757d;">›</span>
</div>
<div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f8f9fa;">
<span style="margin-right: 12px; font-size: 16px;">❓</span>
<span style="flex: 1;">Help</span>
<span style="color: #6c757d;">›</span>
</div>
</div>

<div style="margin-bottom: 20px;">
<h4 style="margin: 0 0 10px 0; font-size: 14px;">Connected Apps (3)</h4>
<div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 8px;">
<div style="display: flex; align-items: center; margin-bottom: 5px;">
<span style="margin-right: 10px; font-size: 16px;">📱</span>
<span style="font-weight: bold; font-size: 14px;">MyApp</span>
</div>
<div style="font-size: 12px; color: #6c757d;">Last used: 2h ago</div>
</div>
<div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 8px;">
<div style="display: flex; align-items: center; margin-bottom: 5px;">
<span style="margin-right: 10px; font-size: 16px;">💼</span>
<span style="font-weight: bold; font-size: 14px;">WorkTool</span>
</div>
<div style="font-size: 12px; color: #6c757d;">Last used: 1d ago</div>
</div>
<div style="text-align: center; margin-top: 12px;">
<a href="#" style="color: #0066cc; font-size: 12px;">(View All)</a>
</div>
</div>

<button style="width: 100%; padding: 12px; background: #dc3545; color: white; border: none; border-radius: 6px; font-weight: bold;">
Sign Out
</button>
</div>
</div>

### Mobile Optimizations
- **Touch-First Design**: Large tap targets, thumb-friendly navigation
- **Simplified Interface**: Streamlined settings, progressive disclosure
- **Quick Access**: Most common actions prominently displayed
- **Biometric Integration**: Face ID, fingerprint authentication setup

## Success Metrics

### User Engagement
- **Settings Usage**: Monthly active management rate >60%
- **Security Adoption**: 2FA setup rate >70%, security key adoption >20%
- **Privacy Awareness**: Privacy settings review rate >40%
- **App Management**: Regular connected app review >50%

### Security Effectiveness
- **Account Protection**: Reduced security incidents by 80%
- **User Education**: Security best practices adoption
- **Recovery Success**: Account recovery completion rate >95%
- **Trust Building**: High security confidence scores

### Privacy Compliance
- **Data Rights**: Efficient data download/deletion requests
- **Consent Management**: Clear consent understanding >90%
- **Communication**: Appropriate notification preferences
- **Transparency**: High privacy policy comprehension

---

*This account management system empowers users with full control over their identity, security, and privacy while maintaining simplicity and trust. For technical implementation details, see the Architecture documentation.*