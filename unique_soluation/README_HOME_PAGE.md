# Home Page Implementation

This document describes the implementation of the home page functionality for the Unique Soluation app.

## Features

### 1. Automatic Desk Redirection
- When users visit the home page (https://app.us.net.sa/), they are automatically redirected to the desk after 3 seconds if they are logged in
- If users are not logged in, they are shown a login button

### 2. Switch to Desk Button
- A prominent "Switch to Desk" button is displayed for logged-in users
- The button provides immediate access to the desk without waiting for the auto-redirect

### 3. Responsive Design
- The home page is fully responsive and works on all device sizes
- Modern styling with hover effects and animations

## Implementation Details

### Files Created/Modified

1. **Home Page Template**: `templates/pages/home.html`
   - Main template for the home page
   - Includes conditional logic for logged-in vs guest users
   - Responsive design with modern styling

2. **Home Page Context**: `templates/pages/home.py`
   - Provides context data for the template
   - Sets title and app name

3. **JavaScript**: `public/js/home.js`
   - Handles auto-redirect functionality
   - Manages button click events
   - Includes debugging console logs

4. **CSS Styling**: `public/css/home.css`
   - Custom styling for the home page
   - Responsive design rules
   - Animation effects

5. **Hooks Configuration**: `hooks.py`
   - Sets `home_page = "home"` to use our custom home page
   - Configures website context with favicon and splash image

### How It Works

1. **User visits home page**: When a user visits the home page, the template checks if they are logged in
2. **Logged-in users**: 
   - See a welcome message with their username
   - Get a "Switch to Desk" button
   - Are automatically redirected to `/app` after 3 seconds
   - The standard Frappe "Switch to Desk" link appears in the navbar dropdown
3. **Guest users**:
   - See a login button
   - No auto-redirect occurs

### Switch to Desk Functionality

The "Switch to Desk" functionality works through multiple mechanisms:

1. **Custom Button**: Our home page includes a prominent button that redirects to `/app`
2. **Auto-redirect**: Automatic redirection after 3 seconds for logged-in users
3. **Standard Frappe Link**: The standard Frappe navbar includes a "Switch to Desk" link in the user dropdown (only visible for System Users)

### User Types

- **System Users**: Can access the desk and see the "Switch to Desk" functionality
- **Website Users**: Cannot access the desk and won't see the switch functionality

## Configuration

The home page is configured in `hooks.py`:

```python
# application home page (will override Website Settings)
home_page = "home"
```

This ensures that when users visit the root URL, they are directed to our custom home page instead of the default desk.

## Testing

To test the functionality:

1. Visit the home page as a guest user - should see login button
2. Login as a System User - should see welcome message and switch to desk button
3. Wait 3 seconds - should auto-redirect to desk
4. Check navbar dropdown - should see "Switch to Desk" link
5. Test on mobile devices - should be responsive

## Troubleshooting

If the "Switch to Desk" link doesn't appear in the navbar:

1. Ensure the user is a "System User" (not "Website User")
2. Check that the `system_user` cookie is set to "yes"
3. Verify that the user is logged in
4. Check browser console for any JavaScript errors

The implementation follows Frappe's standard patterns and integrates seamlessly with the existing system.
