# Unique Soluation Theme

A modern, responsive theme for the Unique Soluation ERPNext application using the RGB color scheme (23, 162, 183).

## 🎨 Color Scheme

The theme uses a carefully crafted color palette based on the primary RGB color (23, 162, 183):

- **Primary Color**: `rgb(23, 162, 183)` - Main brand color
- **Primary Light**: `rgb(45, 182, 203)` - Lighter variant for gradients
- **Primary Dark**: `rgb(18, 130, 147)` - Darker variant for hover states
- **Primary Transparent**: `rgba(23, 162, 183, 0.1)` - For subtle backgrounds

## 📁 File Structure

```
unique_soluation/public/
├── css/
│   ├── global.css          # Global styles and CSS variables
│   ├── header.css          # Header and navigation styles
│   ├── sidebar.css         # Sidebar navigation styles
│   ├── homeBody.css        # Dashboard and main content styles
│   ├── workflow.css        # Workflow and process styles
│   ├── form.css           # Form and input styles
│   └── login.css          # Login page styles
└── js/
    └── theme.js           # Theme JavaScript functionality
```

## 🚀 Features

### 1. Modern Design System
- CSS Custom Properties (variables) for consistent theming
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Accessibility-focused with proper focus states

### 2. Header Components
- Fixed top navigation bar with primary color background
- Search functionality with focus effects
- User profile dropdown
- Notification system
- Responsive mobile menu

### 3. Sidebar Navigation
- Collapsible sidebar with smooth animations
- Active state indicators
- Submenu support
- Quick actions section
- Arabic text support (RTL)

### 4. Dashboard Components
- Welcome section with gradient background
- Progress indicators
- Card-based layout system
- Shortcuts grid
- Reports and masters sections

### 5. Form System
- Modern input styling with focus effects
- Validation states (success, error, warning)
- Input groups and icons
- Switch components
- File upload styling

### 6. Workflow Components
- Step-by-step process indicators
- Progress bars with animations
- Timeline components
- Action buttons with loading states

### 7. Login Page
- Centered card layout
- Gradient background with pattern overlay
- Social login options
- Form validation
- Responsive design

## 🎯 CSS Classes

### Utility Classes
- `.text-primary`, `.bg-primary` - Color utilities
- `.m-*`, `.p-*` - Spacing utilities
- `.d-*` - Display utilities
- `.justify-content-*`, `.align-items-*` - Flexbox utilities

### Component Classes
- `.btn`, `.btn-primary`, `.btn-secondary` - Button styles
- `.card`, `.card-header`, `.card-body` - Card components
- `.form-control`, `.form-group` - Form elements
- `.nav-link`, `.nav-item` - Navigation elements

## 🔧 JavaScript Functionality

The theme includes JavaScript for enhanced interactivity:

### Header Features
- Search input focus effects
- User dropdown toggle
- Notification handling

### Sidebar Features
- Collapse/expand functionality
- Active state management
- Submenu toggles
- Quick actions

### Form Features
- Real-time validation
- Field focus effects
- Form submission handling
- Switch component functionality

### Workflow Features
- Step progression
- Progress bar animations
- Action button loading states

## 📱 Responsive Design

The theme is fully responsive with breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 576px

## 🌙 Dark Mode Support

The theme includes dark mode support using `prefers-color-scheme: dark`:

- Automatic color scheme detection
- Dark backgrounds and text colors
- Maintained contrast ratios
- Consistent component styling

## ♿ Accessibility Features

- Proper focus indicators
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Semantic HTML structure

## 🎨 Customization

### Changing Colors
To modify the color scheme, update the CSS variables in `global.css`:

```css
:root {
    --primary-color: rgb(23, 162, 183);
    --primary-color-light: rgb(45, 182, 203);
    --primary-color-dark: rgb(18, 130, 147);
    /* ... other variables */
}
```

### Adding New Components
1. Create CSS styles in the appropriate file
2. Add JavaScript functionality in `theme.js`
3. Update the documentation

## 🚀 Installation

The theme is automatically included when the Unique Soluation app is installed. The CSS and JavaScript files are loaded through the app's hooks configuration.

## 🔄 Building Assets

To rebuild the theme assets:

```bash
bench build --app unique_soluation
```

## 📝 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

When contributing to the theme:

1. Follow the existing CSS naming conventions
2. Use CSS custom properties for colors and spacing
3. Ensure responsive design compatibility
4. Test accessibility features
5. Update this documentation

## 📄 License

This theme is part of the Unique Soluation application and follows the same license terms.

---

**Note**: This theme is designed specifically for the Unique Soluation ERPNext application and may require modifications for use in other contexts.
